globalThis.NyxDuckImageViewport = function(_0xa1ba28_0, _0xa1ba28_1) {
  if (!_0xa1ba28_0?.frame) return;
  let _0xa1ba28_2;
  try {
    _0xa1ba28_2 = _0xa1ba28_0.frame.contentDocument;
  } catch {
    return;
  }
  if (!_0xa1ba28_2?.documentElement || "\x74\x72\x75\x65" === _0xa1ba28_2.documentElement.dataset.nyxDuckImageViewport) return;
  const _0xa1ba28_3 = () => {
    try {
      const _0xa1ba28_2 = String(_0xa1ba28_0.frame.contentWindow?.location?.href || "");
      return _0xa1ba28_1(_0xa1ba28_2) || _0xa1ba28_1(_0xa1ba28_0.sourceUrl || _0xa1ba28_0.url || "") || _0xa1ba28_0.sourceUrl || _0xa1ba28_0.url || "";
    } catch {
      return _0xa1ba28_1(_0xa1ba28_0.sourceUrl || _0xa1ba28_0.url || "") || _0xa1ba28_0.sourceUrl || _0xa1ba28_0.url || "";
    }
  };
  let _0xa1ba28_4;
  try {
    _0xa1ba28_4 = new URL(_0xa1ba28_3(), location.href);
  } catch {
    return;
  }
  if ("\x64\x75\x63\x6b\x64\x75\x63\x6b\x67\x6f\x2e\x63\x6f\x6d" !== _0xa1ba28_4.hostname.replace(/^www\./i, "").toLowerCase()) return;
  _0xa1ba28_2.documentElement.dataset.nyxDuckImageViewport = "\x74\x72\x75\x65";
  const _0xa1ba28_5 = _0xa1ba28_0 => {
    const _0xa1ba28_1 = String(_0xa1ba28_0 || "").trim(), _0xa1ba28_2 = _0xa1ba28_1.match(/https?%3a%2f%2f/i);
    if (!_0xa1ba28_2) return "";
    const _0xa1ba28_3 = 0 === _0xa1ba28_2.index, _0xa1ba28_4 = _0xa1ba28_1.includes("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    if (!_0xa1ba28_3 && !_0xa1ba28_4) return "";
    let _0xa1ba28_5 = _0xa1ba28_1.slice(_0xa1ba28_2.index);
    const _0xa1ba28_6 = _0xa1ba28_5.search(/[?&]%24(?:rfp|io|tf|pf|iframe)=/i);
    _0xa1ba28_6 > 0 && (_0xa1ba28_5 = _0xa1ba28_5.slice(0, _0xa1ba28_6));
    let _0xa1ba28_7 = _0xa1ba28_5;
    for (let _0xa1ba28_8 = 0; _0xa1ba28_8 < 2 && /%[0-9a-f]{2}/i.test(_0xa1ba28_7); _0xa1ba28_8++) try {
      _0xa1ba28_7 = decodeURIComponent(_0xa1ba28_7);
    } catch {
      break;
    }
    return /^https?:\/\//i.test(_0xa1ba28_7) ? _0xa1ba28_7 : "";
  }, _0xa1ba28_6 = () => {
    _0xa1ba28_2.querySelectorAll("\x69\x6d\x67\x2c\x73\x6f\x75\x72\x63\x65").forEach(_0xa1ba28_0 => {
      const _0xa1ba28_1 = _0xa1ba28_0.getAttribute("\x73\x72\x63") || "", _0xa1ba28_2 = _0xa1ba28_5(_0xa1ba28_1);
      _0xa1ba28_2 && _0xa1ba28_2 !== _0xa1ba28_1 && _0xa1ba28_0.setAttribute("\x73\x72\x63", _0xa1ba28_2), 
      [ "\x64\x61\x74\x61\x2d\x73\x72\x63", "\x64\x61\x74\x61\x2d\x6f\x72\x69\x67\x69\x6e\x61\x6c", "\x64\x61\x74\x61\x2d\x6c\x61\x7a\x79\x2d\x73\x72\x63", "\x64\x61\x74\x61\x2d\x69\x6d\x61\x67\x65\x2d\x75\x72\x6c" ].forEach(_0xa1ba28_2 => {
        const _0xa1ba28_3 = _0xa1ba28_0.getAttribute(_0xa1ba28_2) || "", _0xa1ba28_4 = _0xa1ba28_5(_0xa1ba28_3);
        _0xa1ba28_4 && _0xa1ba28_4 !== _0xa1ba28_3 && (_0xa1ba28_0.setAttribute(_0xa1ba28_2, _0xa1ba28_4), 
        "\x49\x4d\x47" !== _0xa1ba28_0.tagName || _0xa1ba28_1 && !_0xa1ba28_5(_0xa1ba28_1) || _0xa1ba28_0.setAttribute("\x73\x72\x63", _0xa1ba28_4));
      });
      const _0xa1ba28_3 = _0xa1ba28_0.getAttribute("\x73\x72\x63\x73\x65\x74") || "", _0xa1ba28_4 = _0xa1ba28_3.split("\x2c")[0]?.trim().split(/\s+/)[0] || "", _0xa1ba28_6 = _0xa1ba28_5(_0xa1ba28_4);
      _0xa1ba28_6 && (_0xa1ba28_0.removeAttribute("\x73\x72\x63\x73\x65\x74"), _0xa1ba28_0.setAttribute("\x73\x72\x63", _0xa1ba28_6));
    });
  }, _0xa1ba28_7 = () => {
    const _0xa1ba28_1 = _0xa1ba28_0.frame.contentWindow;
    if (!_0xa1ba28_1 || !_0xa1ba28_0.frame.getClientRects().length) return;
    let _0xa1ba28_4;
    try {
      _0xa1ba28_4 = new URL(_0xa1ba28_3());
    } catch {
      return;
    }
    if ("\x69\x6d\x61\x67\x65\x73" !== _0xa1ba28_4.searchParams.get("\x69\x61") && "\x69\x6d\x61\x67\x65\x73" !== _0xa1ba28_4.searchParams.get("\x69\x61\x78")) return;
    const _0xa1ba28_5 = _0xa1ba28_1.innerHeight, _0xa1ba28_6 = _0xa1ba28_1.innerWidth;
    for (const _0xa1ba28_0 of _0xa1ba28_2.images) {
      if (_0xa1ba28_0.closest("\x68\x65\x61\x64\x65\x72\x2c\x6e\x61\x76\x2c\x61\x73\x69\x64\x65\x2c\x5b\x72\x6f\x6c\x65\x3d\x22\x64\x69\x61\x6c\x6f\x67\x22\x5d\x2c\x5b\x63\x6c\x61\x73\x73\x2a\x3d\x22\x6d\x6f\x64\x61\x6c\x22\x20\x69\x5d\x2c\x5b\x63\x6c\x61\x73\x73\x2a\x3d\x22\x61\x6e\x6f\x6d\x61\x6c\x79\x22\x20\x69\x5d")) continue;
      const _0xa1ba28_1 = _0xa1ba28_0.getBoundingClientRect();
      if (_0xa1ba28_1.width < 50 || _0xa1ba28_1.height < 50 || _0xa1ba28_1.bottom < -_0xa1ba28_5 || _0xa1ba28_1.top > 3 * _0xa1ba28_5 || _0xa1ba28_1.right < 0 || _0xa1ba28_1.left > _0xa1ba28_6) continue;
      "\x6c\x61\x7a\x79" === _0xa1ba28_0.getAttribute("\x6c\x6f\x61\x64\x69\x6e\x67") && _0xa1ba28_0.setAttribute("\x6c\x6f\x61\x64\x69\x6e\x67", "\x65\x61\x67\x65\x72");
      const _0xa1ba28_2 = _0xa1ba28_0.getAttribute("\x73\x72\x63") || "";
      if (_0xa1ba28_2 && "\x61\x62\x6f\x75\x74\x3a\x62\x6c\x61\x6e\x6b" !== _0xa1ba28_2 && !(/^data:image\//i.test(_0xa1ba28_2) && _0xa1ba28_0.complete && _0xa1ba28_0.naturalWidth <= 1) || _0xa1ba28_0.getAttribute("\x73\x72\x63\x73\x65\x74")) continue;
      const _0xa1ba28_3 = _0xa1ba28_0.getAttribute("\x64\x61\x74\x61\x2d\x73\x72\x63") || _0xa1ba28_0.getAttribute("\x64\x61\x74\x61\x2d\x6f\x72\x69\x67\x69\x6e\x61\x6c") || _0xa1ba28_0.getAttribute("\x64\x61\x74\x61\x2d\x6c\x61\x7a\x79\x2d\x73\x72\x63");
      if (_0xa1ba28_3) try {
        const _0xa1ba28_1 = new URL(_0xa1ba28_3, _0xa1ba28_4);
        [ "\x68\x74\x74\x70\x3a", "\x68\x74\x74\x70\x73\x3a" ].includes(_0xa1ba28_1.protocol) && _0xa1ba28_0.setAttribute("\x73\x72\x63", _0xa1ba28_3);
      } catch {}
    }
  }, _0xa1ba28_8 = () => {
    const _0xa1ba28_0 = [ "\x41\x49\x20\x69\x6d\x61\x67\x65\x73", "\x41\x6c\x6c\x20\x73\x69\x7a\x65\x73", "\x41\x6c\x6c\x20\x63\x6f\x6c\x6f\x72\x73", "\x41\x6c\x6c\x20\x74\x79\x70\x65\x73", "\x41\x6c\x6c\x20\x6c\x61\x79\x6f\x75\x74\x73", "\x4c\x69\x63\x65\x6e\x73\x65\x73" ];
    _0xa1ba28_2.querySelectorAll("\x6e\x61\x76").forEach(_0xa1ba28_1 => {
      const _0xa1ba28_3 = String(_0xa1ba28_1.innerText || _0xa1ba28_1.textContent || "").replace(/\s+/g, "\x20").trim();
      if (_0xa1ba28_0.filter(_0xa1ba28_0 => _0xa1ba28_3.includes(_0xa1ba28_0)).length < 3) return;
      const _0xa1ba28_4 = [ ..._0xa1ba28_1.querySelectorAll("\x75\x6c") ].find(_0xa1ba28_0 => {
        const _0xa1ba28_1 = _0xa1ba28_0.getBoundingClientRect?.();
        return _0xa1ba28_1 && _0xa1ba28_1.width >= 300 && _0xa1ba28_1.height >= 20 && _0xa1ba28_1.height <= 96;
      });
      if (!_0xa1ba28_4) return;
      const _0xa1ba28_5 = _0xa1ba28_1.getBoundingClientRect?.(), _0xa1ba28_6 = _0xa1ba28_4.getBoundingClientRect?.();
      if (!_0xa1ba28_5 || !_0xa1ba28_6 || _0xa1ba28_5.height <= _0xa1ba28_6.height + 120) return;
      const _0xa1ba28_7 = Math.ceil(Math.max(40, _0xa1ba28_6.height + 16));
      _0xa1ba28_1.style.setProperty("\x68\x65\x69\x67\x68\x74", `${_0xa1ba28_7}\x70\x78`, "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), _0xa1ba28_1.style.setProperty("\x6d\x69\x6e\x2d\x68\x65\x69\x67\x68\x74", "\x30", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
      _0xa1ba28_1.style.setProperty("\x6d\x61\x78\x2d\x68\x65\x69\x67\x68\x74", `${_0xa1ba28_7}\x70\x78`, "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), _0xa1ba28_1.style.setProperty("\x6f\x76\x65\x72\x66\x6c\x6f\x77", "\x76\x69\x73\x69\x62\x6c\x65", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74");
      const _0xa1ba28_8 = _0xa1ba28_4.parentElement;
      if (_0xa1ba28_8 && _0xa1ba28_8 !== _0xa1ba28_1) {
        const _0xa1ba28_0 = Math.ceil(Math.max(32, _0xa1ba28_6.height));
        _0xa1ba28_8.style.setProperty("\x68\x65\x69\x67\x68\x74", `${_0xa1ba28_0}\x70\x78`, "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), _0xa1ba28_8.style.setProperty("\x6d\x69\x6e\x2d\x68\x65\x69\x67\x68\x74", "\x30", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
        _0xa1ba28_8.style.setProperty("\x6d\x61\x78\x2d\x68\x65\x69\x67\x68\x74", `${_0xa1ba28_0}\x70\x78`, "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), _0xa1ba28_8.style.setProperty("\x6f\x76\x65\x72\x66\x6c\x6f\x77", "\x76\x69\x73\x69\x62\x6c\x65", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
        _0xa1ba28_8.dataset.nyxDuckImageFilterWrapperFixed = "\x74\x72\x75\x65";
      }
      _0xa1ba28_1.dataset.nyxDuckImageFilterFixed = "\x74\x72\x75\x65", _0xa1ba28_2.documentElement.dataset.nyxDuckImageFilterFixed = "\x74\x72\x75\x65";
    });
  }, _0xa1ba28_9 = () => {
    const _0xa1ba28_1 = _0xa1ba28_0.frame.contentWindow;
    if (!_0xa1ba28_1 || !_0xa1ba28_2.body) return;
    const _0xa1ba28_3 = String(_0xa1ba28_2.body.innerText || "");
    if (!/AI images/i.test(_0xa1ba28_3) || !/All sizes/i.test(_0xa1ba28_3) || !/All layouts/i.test(_0xa1ba28_3)) return _0xa1ba28_2.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x64\x75\x63\x6b\x2d\x6d\x61\x69\x6e\x6c\x69\x6e\x65\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x5d").forEach(_0xa1ba28_0 => {
      [ "\x64\x69\x73\x70\x6c\x61\x79", "\x6d\x69\x6e\x2d\x68\x65\x69\x67\x68\x74", "\x68\x65\x69\x67\x68\x74", "\x6d\x61\x72\x67\x69\x6e", "\x70\x61\x64\x64\x69\x6e\x67" ].forEach(_0xa1ba28_1 => _0xa1ba28_0.style.removeProperty(_0xa1ba28_1)), 
      delete _0xa1ba28_0.dataset.nyxDuckMainlineHidden;
    }), _0xa1ba28_2.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x64\x75\x63\x6b\x2d\x69\x6d\x61\x67\x65\x2d\x67\x61\x70\x2d\x66\x69\x78\x65\x64\x3d\x22\x74\x72\x75\x65\x22\x5d").forEach(_0xa1ba28_0 => {
      _0xa1ba28_0.style.removeProperty("\x6d\x61\x72\x67\x69\x6e\x2d\x74\x6f\x70"), delete _0xa1ba28_0.dataset.nyxDuckImageGapFixed;
    }), _0xa1ba28_2.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x64\x75\x63\x6b\x2d\x69\x6d\x61\x67\x65\x2d\x66\x69\x6c\x74\x65\x72\x2d\x66\x69\x78\x65\x64\x3d\x22\x74\x72\x75\x65\x22\x5d").forEach(_0xa1ba28_0 => {
      [ "\x68\x65\x69\x67\x68\x74", "\x6d\x69\x6e\x2d\x68\x65\x69\x67\x68\x74", "\x6d\x61\x78\x2d\x68\x65\x69\x67\x68\x74", "\x6f\x76\x65\x72\x66\x6c\x6f\x77" ].forEach(_0xa1ba28_1 => _0xa1ba28_0.style.removeProperty(_0xa1ba28_1)), 
      delete _0xa1ba28_0.dataset.nyxDuckImageFilterFixed;
    }), void _0xa1ba28_2.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x64\x75\x63\x6b\x2d\x69\x6d\x61\x67\x65\x2d\x66\x69\x6c\x74\x65\x72\x2d\x77\x72\x61\x70\x70\x65\x72\x2d\x66\x69\x78\x65\x64\x3d\x22\x74\x72\x75\x65\x22\x5d").forEach(_0xa1ba28_0 => {
      [ "\x68\x65\x69\x67\x68\x74", "\x6d\x69\x6e\x2d\x68\x65\x69\x67\x68\x74", "\x6d\x61\x78\x2d\x68\x65\x69\x67\x68\x74", "\x6f\x76\x65\x72\x66\x6c\x6f\x77" ].forEach(_0xa1ba28_1 => _0xa1ba28_0.style.removeProperty(_0xa1ba28_1)), 
      delete _0xa1ba28_0.dataset.nyxDuckImageFilterWrapperFixed;
    });
    const _0xa1ba28_4 = _0xa1ba28_1.scrollY || _0xa1ba28_2.scrollingElement?.scrollTop || 0, _0xa1ba28_5 = [ ..._0xa1ba28_2.images ].filter(_0xa1ba28_0 => {
      if (_0xa1ba28_0.closest?.("\x68\x65\x61\x64\x65\x72\x2c\x6e\x61\x76\x2c\x61\x73\x69\x64\x65\x2c\x5b\x72\x6f\x6c\x65\x3d\x22\x64\x69\x61\x6c\x6f\x67\x22\x5d\x2c\x5b\x63\x6c\x61\x73\x73\x2a\x3d\x22\x6d\x6f\x64\x61\x6c\x22\x20\x69\x5d\x2c\x5b\x63\x6c\x61\x73\x73\x2a\x3d\x22\x61\x6e\x6f\x6d\x61\x6c\x79\x22\x20\x69\x5d")) return !1;
      const _0xa1ba28_1 = _0xa1ba28_0.getBoundingClientRect?.();
      return _0xa1ba28_1 && _0xa1ba28_1.width >= 100 && _0xa1ba28_1.height >= 70;
    }).sort((_0xa1ba28_0, _0xa1ba28_1) => {
      const _0xa1ba28_2 = _0xa1ba28_0.getBoundingClientRect(), _0xa1ba28_3 = _0xa1ba28_1.getBoundingClientRect();
      return _0xa1ba28_2.top - _0xa1ba28_3.top || _0xa1ba28_2.left - _0xa1ba28_3.left;
    });
    if (_0xa1ba28_5.length < 4) return;
    const _0xa1ba28_6 = _0xa1ba28_5.slice(0, Math.min(12, _0xa1ba28_5.length));
    _0xa1ba28_2.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x74\x65\x73\x74\x69\x64\x3d\x22\x6d\x61\x69\x6e\x6c\x69\x6e\x65\x22\x5d\x2c\x2e\x72\x65\x73\x75\x6c\x74\x73\x2d\x2d\x6d\x61\x69\x6e").forEach(_0xa1ba28_0 => {
      _0xa1ba28_6.some(_0xa1ba28_1 => _0xa1ba28_0.contains(_0xa1ba28_1)) || (_0xa1ba28_0.style.setProperty("\x64\x69\x73\x70\x6c\x61\x79", "\x6e\x6f\x6e\x65", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
      _0xa1ba28_0.style.setProperty("\x6d\x69\x6e\x2d\x68\x65\x69\x67\x68\x74", "\x30", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), _0xa1ba28_0.style.setProperty("\x68\x65\x69\x67\x68\x74", "\x30", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
      _0xa1ba28_0.style.setProperty("\x6d\x61\x72\x67\x69\x6e", "\x30", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), _0xa1ba28_0.style.setProperty("\x70\x61\x64\x64\x69\x6e\x67", "\x30", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
      _0xa1ba28_0.dataset.nyxDuckMainlineHidden = "\x74\x72\x75\x65");
    });
    let _0xa1ba28_7 = 0;
    _0xa1ba28_2.querySelectorAll("\x64\x69\x76\x2c\x6e\x61\x76\x2c\x73\x65\x63\x74\x69\x6f\x6e").forEach(_0xa1ba28_0 => {
      const _0xa1ba28_1 = String(_0xa1ba28_0.innerText || "").replace(/\s+/g, "\x20").trim();
      if ([ "\x41\x49\x20\x69\x6d\x61\x67\x65\x73", "\x41\x6c\x6c\x20\x73\x69\x7a\x65\x73", "\x41\x6c\x6c\x20\x63\x6f\x6c\x6f\x72\x73", "\x41\x6c\x6c\x20\x74\x79\x70\x65\x73", "\x41\x6c\x6c\x20\x6c\x61\x79\x6f\x75\x74\x73", "\x4c\x69\x63\x65\x6e\x73\x65\x73" ].filter(_0xa1ba28_0 => _0xa1ba28_1.includes(_0xa1ba28_0)).length < 3) return;
      const _0xa1ba28_2 = _0xa1ba28_0.getBoundingClientRect?.();
      !_0xa1ba28_2 || _0xa1ba28_2.width < 300 || _0xa1ba28_2.height <= 0 || _0xa1ba28_2.height > 120 || (_0xa1ba28_7 = Math.max(_0xa1ba28_7, _0xa1ba28_2.bottom + _0xa1ba28_4));
    });
    const _0xa1ba28_8 = Math.max(110, _0xa1ba28_7 ? _0xa1ba28_7 + 12 : 0);
    let _0xa1ba28_9 = _0xa1ba28_6[0].parentElement;
    for (;_0xa1ba28_9 && !_0xa1ba28_6.every(_0xa1ba28_0 => _0xa1ba28_9.contains(_0xa1ba28_0)); ) _0xa1ba28_9 = _0xa1ba28_9.parentElement;
    if (!_0xa1ba28_9 || _0xa1ba28_9 === _0xa1ba28_2.body || _0xa1ba28_9 === _0xa1ba28_2.documentElement) return;
    for (;_0xa1ba28_9.parentElement && _0xa1ba28_9.parentElement !== _0xa1ba28_2.body && _0xa1ba28_9.parentElement !== _0xa1ba28_2.documentElement; ) {
      const _0xa1ba28_0 = _0xa1ba28_9.parentElement;
      if (_0xa1ba28_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x74\x65\x73\x74\x69\x64\x3d\x22\x68\x65\x61\x64\x65\x72\x22\x5d\x2c\x66\x6f\x72\x6d\x5b\x64\x61\x74\x61\x2d\x74\x65\x73\x74\x69\x64\x3d\x22\x73\x65\x61\x72\x63\x68\x2d\x66\x6f\x72\x6d\x22\x5d")) break;
      const _0xa1ba28_1 = _0xa1ba28_0.getBoundingClientRect?.();
      if (!_0xa1ba28_1 || (_0xa1ba28_1?.top || 0) + _0xa1ba28_4 < _0xa1ba28_8 + 180) break;
      _0xa1ba28_9 = _0xa1ba28_0;
    }
    if ("\x74\x72\x75\x65" === _0xa1ba28_9.dataset.nyxDuckImageGapFixed) return;
    const _0xa1ba28_a = _0xa1ba28_9.getBoundingClientRect?.();
    if (!_0xa1ba28_a) return;
    const _0xa1ba28_b = Math.round(_0xa1ba28_a.top + _0xa1ba28_4 - _0xa1ba28_8);
    if (_0xa1ba28_b < 220) return;
    const _0xa1ba28_c = Number.parseFloat(_0xa1ba28_1.getComputedStyle(_0xa1ba28_9).marginTop) || 0;
    _0xa1ba28_9.style.setProperty("\x6d\x61\x72\x67\x69\x6e\x2d\x74\x6f\x70", _0xa1ba28_c - _0xa1ba28_b + "\x70\x78", "\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74"), 
    _0xa1ba28_9.dataset.nyxDuckImageGapFixed = "\x74\x72\x75\x65", _0xa1ba28_2.documentElement.dataset.nyxDuckImageGapFixed = "\x74\x72\x75\x65";
  };
  let _0xa1ba28_a = !1;
  const _0xa1ba28_b = () => {
    _0xa1ba28_a || (_0xa1ba28_a = !0, requestAnimationFrame(() => {
      _0xa1ba28_a = !1, _0xa1ba28_8(), _0xa1ba28_6(), _0xa1ba28_9(), _0xa1ba28_7();
    }));
  };
  try {
    new MutationObserver(_0xa1ba28_b).observe(_0xa1ba28_2.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [ "\x73\x72\x63", "\x73\x72\x63\x73\x65\x74", "\x6c\x6f\x61\x64\x69\x6e\x67", "\x64\x61\x74\x61\x2d\x73\x72\x63", "\x64\x61\x74\x61\x2d\x6f\x72\x69\x67\x69\x6e\x61\x6c", "\x64\x61\x74\x61\x2d\x6c\x61\x7a\x79\x2d\x73\x72\x63", "\x64\x61\x74\x61\x2d\x69\x6d\x61\x67\x65\x2d\x75\x72\x6c" ]
    });
  } catch {}
  let _0xa1ba28_c = !1;
  const _0xa1ba28_d = () => {
    _0xa1ba28_c || (_0xa1ba28_c = !0, requestAnimationFrame(() => {
      _0xa1ba28_c = !1, _0xa1ba28_7();
    }));
  };
  _0xa1ba28_2.addEventListener("\x6c\x6f\x61\x64", _0xa1ba28_d, !0), _0xa1ba28_2.addEventListener("\x73\x63\x72\x6f\x6c\x6c", _0xa1ba28_d, {
    capture: !0,
    passive: !0
  }), _0xa1ba28_2.defaultView?.addEventListener("\x72\x65\x73\x69\x7a\x65", _0xa1ba28_d, {
    passive: !0
  }), _0xa1ba28_8(), _0xa1ba28_6(), _0xa1ba28_9(), _0xa1ba28_7(), [ 250, 700, 1400, 2600, 4200 ].forEach(_0xa1ba28_0 => setTimeout(() => {
    _0xa1ba28_8(), _0xa1ba28_6(), _0xa1ba28_9(), _0xa1ba28_7();
  }, _0xa1ba28_0));
};
