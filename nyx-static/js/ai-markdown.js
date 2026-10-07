(() => {
  "use strict";
  function _0xf47aef_0(_0xf47aef_0) {
    return String(_0xf47aef_0 ?? "").replace(/[&<>"']/g, _0xf47aef_0 => ({
      "\x26": "\x26\x61\x6d\x70\x3b",
      "\x3c": "\x26\x6c\x74\x3b",
      "\x3e": "\x26\x67\x74\x3b",
      "\x22": "\x26\x71\x75\x6f\x74\x3b",
      "\x27": "\x26\x23\x33\x39\x3b"
    }[_0xf47aef_0]));
  }
  function _0xf47aef_1(_0xf47aef_1, _0xf47aef_2 = !1) {
    const _0xf47aef_3 = String(_0xf47aef_1 ?? "").trim();
    if (!_0xf47aef_3) return "";
    try {
      if (window.katex?.renderToString) return window.katex.renderToString(_0xf47aef_3, {
        displayMode: Boolean(_0xf47aef_2),
        throwOnError: !1,
        strict: "\x69\x67\x6e\x6f\x72\x65",
        trust: !1,
        output: "\x68\x74\x6d\x6c\x41\x6e\x64\x4d\x61\x74\x68\x6d\x6c"
      });
    } catch (_0xf47aef_4) {
      console.warn("\x4e\x79\x78\x20\x41\x49\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x72\x65\x6e\x64\x65\x72\x20\x6d\x61\x74\x68\x3a", _0xf47aef_4);
    }
    return `\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x6d\x61\x74\x68\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b\x22\x3e${_0xf47aef_0(_0xf47aef_3.replace(/\\text\{([^{}]*)\}/g, "\x24\x31").replace(/\\[,;:!]/g, "\x20").replace(/\\(?:quad|qquad)\b/g, "\x20").replace(/\\(?:times|cdot)/g, "\x20\xd7\x20").replace(/\\leq?/g, "\u2264").replace(/\\geq?/g, "\u2265").replace(/\\neq/g, "\u2260").replace(/\\pm/g, "\xb1").replace(/[{}]/g, ""))}\x3c\x2f\x73\x70\x61\x6e\x3e`;
  }
  function _0xf47aef_2(_0xf47aef_2) {
    const _0xf47aef_3 = [];
    let _0xf47aef_4 = String(_0xf47aef_2 ?? "").replace(/`([^`\n]+)`/g, (_0xf47aef_1, _0xf47aef_2) => {
      const _0xf47aef_4 = `\x40\x40\x4e\x59\x58\x5f\x49\x4e\x4c\x49\x4e\x45\x5f${_0xf47aef_3.length}\x40\x40`;
      return _0xf47aef_3.push(`\x3c\x63\x6f\x64\x65\x3e${_0xf47aef_0(_0xf47aef_2)}\x3c\x2f\x63\x6f\x64\x65\x3e`), _0xf47aef_4;
    });
    const _0xf47aef_5 = [];
    _0xf47aef_4 = _0xf47aef_4.replace(/\\+\[([^\n]*?)\\+\]|\\+\(([^\n]*?)\\+\)/g, (_0xf47aef_0, _0xf47aef_2, _0xf47aef_3) => {
      const _0xf47aef_4 = `\x40\x40\x4e\x59\x58\x5f\x4d\x41\x54\x48\x5f${_0xf47aef_5.length}\x40\x40`;
      return _0xf47aef_5.push(_0xf47aef_1(_0xf47aef_2 ?? _0xf47aef_3, void 0 !== _0xf47aef_2)), 
      _0xf47aef_4;
    }), _0xf47aef_4 = _0xf47aef_4.replace(/(?<!\\)\$([^\s$](?:[^$\n]*?[^\s$])?)\$(?!\d)/g, (_0xf47aef_0, _0xf47aef_2) => {
      const _0xf47aef_3 = `\x40\x40\x4e\x59\x58\x5f\x4d\x41\x54\x48\x5f${_0xf47aef_5.length}\x40\x40`;
      return _0xf47aef_5.push(_0xf47aef_1(_0xf47aef_2, !1)), _0xf47aef_3;
    });
    let _0xf47aef_6 = _0xf47aef_0(_0xf47aef_4);
    return _0xf47aef_6 = _0xf47aef_6.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gi, "\x3c\x61\x20\x68\x72\x65\x66\x3d\x22\x24\x32\x22\x20\x74\x61\x72\x67\x65\x74\x3d\x22\x5f\x62\x6c\x61\x6e\x6b\x22\x20\x72\x65\x6c\x3d\x22\x6e\x6f\x6f\x70\x65\x6e\x65\x72\x20\x6e\x6f\x72\x65\x66\x65\x72\x72\x65\x72\x22\x3e\x24\x31\x3c\x2f\x61\x3e"), 
    _0xf47aef_6 = _0xf47aef_6.replace(/\*\*([^*\n]+)\*\*/g, "\x3c\x73\x74\x72\x6f\x6e\x67\x3e\x24\x31\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e"), 
    _0xf47aef_6 = _0xf47aef_6.replace(/__([^_\n]+)__/g, "\x3c\x73\x74\x72\x6f\x6e\x67\x3e\x24\x31\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e"), _0xf47aef_6 = _0xf47aef_6.replace(/~~([^~\n]+)~~/g, "\x3c\x73\x3e\x24\x31\x3c\x2f\x73\x3e"), 
    _0xf47aef_6 = _0xf47aef_6.replace(/(^|[^*])\*([^*\n]+)\*/g, "\x24\x31\x3c\x65\x6d\x3e\x24\x32\x3c\x2f\x65\x6d\x3e"), _0xf47aef_5.forEach((_0xf47aef_0, _0xf47aef_1) => {
      _0xf47aef_6 = _0xf47aef_6.replace(`\x40\x40\x4e\x59\x58\x5f\x4d\x41\x54\x48\x5f${_0xf47aef_1}\x40\x40`, _0xf47aef_0);
    }), _0xf47aef_3.forEach((_0xf47aef_0, _0xf47aef_1) => {
      _0xf47aef_6 = _0xf47aef_6.replace(`\x40\x40\x4e\x59\x58\x5f\x49\x4e\x4c\x49\x4e\x45\x5f${_0xf47aef_1}\x40\x40`, _0xf47aef_0);
    }), _0xf47aef_6;
  }
  function _0xf47aef_3(_0xf47aef_0) {
    return String(_0xf47aef_0).trim().replace(/^\||\|$/g, "").split("\x7c").map(_0xf47aef_0 => _0xf47aef_0.trim());
  }
  function _0xf47aef_4(_0xf47aef_0) {
    const _0xf47aef_1 = _0xf47aef_3(_0xf47aef_0);
    return _0xf47aef_1.length > 1 && _0xf47aef_1.every(_0xf47aef_0 => /^:?-{3,}:?$/.test(_0xf47aef_0));
  }
  function _0xf47aef_5(_0xf47aef_0) {
    const _0xf47aef_1 = String(_0xf47aef_0 ?? "").trim();
    return /^\\+\[$/.test(_0xf47aef_1) ? "\x62\x72\x61\x63\x6b\x65\x74" : "\x24\x24" === _0xf47aef_1 ? "\x64\x6f\x6c\x6c\x61\x72" : "";
  }
  function _0xf47aef_6(_0xf47aef_0, _0xf47aef_1) {
    const _0xf47aef_2 = String(_0xf47aef_0 ?? "").trim();
    return "\x62\x72\x61\x63\x6b\x65\x74" === _0xf47aef_1 ? /^\\+\]$/.test(_0xf47aef_2) : "\x24\x24" === _0xf47aef_2;
  }
  function _0xf47aef_7(_0xf47aef_0) {
    const _0xf47aef_1 = String(_0xf47aef_0 ?? "").trim(), _0xf47aef_2 = _0xf47aef_1.match(/^\\+\[([\s\S]*?)\\+\]$/);
    if (_0xf47aef_2) return _0xf47aef_2[1];
    const _0xf47aef_3 = _0xf47aef_1.match(/^\$\$([\s\S]*?)\$\$$/);
    return _0xf47aef_3 ? _0xf47aef_3[1] : null;
  }
  function _0xf47aef_8(_0xf47aef_0, _0xf47aef_1) {
    const _0xf47aef_2 = _0xf47aef_0[_0xf47aef_1] || "";
    return Boolean(_0xf47aef_5(_0xf47aef_2)) || null !== _0xf47aef_7(_0xf47aef_2) || _0xf47aef_6(_0xf47aef_2, "\x62\x72\x61\x63\x6b\x65\x74") || /^```/.test(_0xf47aef_2) || /^#{1,3}\s+/.test(_0xf47aef_2) || /^>\s?/.test(_0xf47aef_2) || /^\s*[-*+]\s+/.test(_0xf47aef_2) || /^\s*\d+[.)]\s+/.test(_0xf47aef_2) || /^\s*(?:---+|___+)\s*$/.test(_0xf47aef_2) || _0xf47aef_2.includes("\x09") || _0xf47aef_2.includes("\x7c") && _0xf47aef_4(_0xf47aef_0[_0xf47aef_1 + 1] || "");
  }
  window.NyxMarkdown = {
    render: function(_0xf47aef_9) {
      const _0xf47aef_a = String(_0xf47aef_9 ?? "").replace(/\r\n?/g, "\x0a").split("\x0a"), _0xf47aef_b = [];
      for (let _0xf47aef_c = 0; _0xf47aef_c < _0xf47aef_a.length; ) {
        const _0xf47aef_9 = _0xf47aef_a[_0xf47aef_c];
        if (!_0xf47aef_9.trim()) {
          _0xf47aef_c += 1;
          continue;
        }
        const _0xf47aef_d = _0xf47aef_9.match(/^```([^\s`]*)\s*$/);
        if (_0xf47aef_d) {
          const _0xf47aef_1 = (_0xf47aef_d[1] || "\x63\x6f\x64\x65").slice(0, 24), _0xf47aef_2 = [];
          for (_0xf47aef_c += 1; _0xf47aef_c < _0xf47aef_a.length && !/^```\s*$/.test(_0xf47aef_a[_0xf47aef_c]); ) _0xf47aef_2.push(_0xf47aef_a[_0xf47aef_c]), 
          _0xf47aef_c += 1;
          _0xf47aef_c < _0xf47aef_a.length && (_0xf47aef_c += 1), _0xf47aef_b.push(`\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x63\x6f\x64\x65\x2d\x62\x6c\x6f\x63\x6b\x22\x3e\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x63\x6f\x64\x65\x2d\x68\x65\x61\x64\x22\x3e\x3c\x73\x70\x61\x6e\x3e${_0xf47aef_0(_0xf47aef_1)}\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x63\x6f\x64\x65\x2d\x63\x6f\x70\x79\x22\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x64\x61\x74\x61\x2d\x63\x6f\x70\x79\x2d\x63\x6f\x64\x65\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x43\x6f\x70\x79\x20\x63\x6f\x64\x65\x22\x3e\x3c\x73\x76\x67\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x3e\x3c\x72\x65\x63\x74\x20\x78\x3d\x22\x39\x22\x20\x79\x3d\x22\x39\x22\x20\x77\x69\x64\x74\x68\x3d\x22\x31\x31\x22\x20\x68\x65\x69\x67\x68\x74\x3d\x22\x31\x31\x22\x20\x72\x78\x3d\x22\x32\x22\x2f\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x35\x20\x39\x56\x36\x61\x32\x20\x32\x20\x30\x20\x30\x20\x30\x2d\x32\x2d\x32\x48\x36\x61\x32\x20\x32\x20\x30\x20\x30\x20\x30\x2d\x32\x20\x32\x76\x37\x61\x32\x20\x32\x20\x30\x20\x30\x20\x30\x20\x32\x20\x32\x68\x33\x22\x2f\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x43\x6f\x70\x79\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x70\x72\x65\x3e\x3c\x63\x6f\x64\x65\x3e${_0xf47aef_0(_0xf47aef_2.join("\x0a"))}\x3c\x2f\x63\x6f\x64\x65\x3e\x3c\x2f\x70\x72\x65\x3e\x3c\x2f\x64\x69\x76\x3e`);
          continue;
        }
        const _0xf47aef_e = _0xf47aef_5(_0xf47aef_9);
        if (_0xf47aef_e) {
          let _0xf47aef_0 = _0xf47aef_c + 1;
          for (;_0xf47aef_0 < _0xf47aef_a.length && !_0xf47aef_6(_0xf47aef_a[_0xf47aef_0], _0xf47aef_e); ) _0xf47aef_0 += 1;
          if (_0xf47aef_0 < _0xf47aef_a.length) {
            _0xf47aef_b.push(`\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x6d\x61\x74\x68\x2d\x62\x6c\x6f\x63\x6b\x22\x3e${_0xf47aef_1(_0xf47aef_a.slice(_0xf47aef_c + 1, _0xf47aef_0).join("\x0a"), !0)}\x3c\x2f\x64\x69\x76\x3e`), 
            _0xf47aef_c = _0xf47aef_0 + 1;
            continue;
          }
          let _0xf47aef_2 = _0xf47aef_c + 1;
          for (;_0xf47aef_2 < _0xf47aef_a.length && _0xf47aef_a[_0xf47aef_2].trim(); ) _0xf47aef_2 += 1;
          const _0xf47aef_3 = _0xf47aef_a.slice(_0xf47aef_c + 1, _0xf47aef_2).join("\x0a");
          _0xf47aef_3.trim() && _0xf47aef_b.push(`\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x6d\x61\x74\x68\x2d\x62\x6c\x6f\x63\x6b\x22\x3e${_0xf47aef_1(_0xf47aef_3, !0)}\x3c\x2f\x64\x69\x76\x3e`), 
          _0xf47aef_c = _0xf47aef_2;
          continue;
        }
        const _0xf47aef_f = _0xf47aef_7(_0xf47aef_9);
        if (null !== _0xf47aef_f) {
          _0xf47aef_b.push(`\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x6d\x61\x74\x68\x2d\x62\x6c\x6f\x63\x6b\x22\x3e${_0xf47aef_1(_0xf47aef_f, !0)}\x3c\x2f\x64\x69\x76\x3e`), 
          _0xf47aef_c += 1;
          continue;
        }
        if (_0xf47aef_6(_0xf47aef_9, "\x62\x72\x61\x63\x6b\x65\x74")) {
          _0xf47aef_c += 1;
          continue;
        }
        if (_0xf47aef_9.includes("\x09")) {
          const _0xf47aef_0 = [];
          for (;_0xf47aef_c < _0xf47aef_a.length && _0xf47aef_a[_0xf47aef_c].includes("\x09") && _0xf47aef_a[_0xf47aef_c].trim(); ) _0xf47aef_0.push(_0xf47aef_a[_0xf47aef_c].split(/\t+/).map(_0xf47aef_0 => _0xf47aef_0.trim())), 
          _0xf47aef_c += 1;
          const _0xf47aef_1 = Math.max(0, ..._0xf47aef_0.map(_0xf47aef_0 => _0xf47aef_0.length));
          if (_0xf47aef_0.length > 1 && _0xf47aef_1 > 1) {
            const _0xf47aef_3 = _0xf47aef_0.shift();
            _0xf47aef_b.push(`\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x74\x61\x62\x6c\x65\x2d\x77\x72\x61\x70\x22\x3e\x3c\x74\x61\x62\x6c\x65\x3e\x3c\x74\x68\x65\x61\x64\x3e\x3c\x74\x72\x3e${Array.from({
              length: _0xf47aef_1
            }, (_0xf47aef_0, _0xf47aef_1) => `\x3c\x74\x68\x3e${_0xf47aef_2(_0xf47aef_3[_0xf47aef_1] || "")}\x3c\x2f\x74\x68\x3e`).join("")}\x3c\x2f\x74\x72\x3e\x3c\x2f\x74\x68\x65\x61\x64\x3e\x3c\x74\x62\x6f\x64\x79\x3e${_0xf47aef_0.map(_0xf47aef_0 => `\x3c\x74\x72\x3e${Array.from({
              length: _0xf47aef_1
            }, (_0xf47aef_1, _0xf47aef_3) => `\x3c\x74\x64\x3e${_0xf47aef_2(_0xf47aef_0[_0xf47aef_3] || "")}\x3c\x2f\x74\x64\x3e`).join("")}\x3c\x2f\x74\x72\x3e`).join("")}\x3c\x2f\x74\x62\x6f\x64\x79\x3e\x3c\x2f\x74\x61\x62\x6c\x65\x3e\x3c\x2f\x64\x69\x76\x3e`);
            continue;
          }
          _0xf47aef_b.push(`\x3c\x70\x3e${_0xf47aef_0.flat().map(_0xf47aef_2).join("\x3c\x62\x72\x3e")}\x3c\x2f\x70\x3e`);
          continue;
        }
        if (_0xf47aef_9.includes("\x7c") && _0xf47aef_4(_0xf47aef_a[_0xf47aef_c + 1] || "")) {
          const _0xf47aef_0 = _0xf47aef_3(_0xf47aef_9);
          _0xf47aef_c += 2;
          const _0xf47aef_1 = [];
          for (;_0xf47aef_c < _0xf47aef_a.length && _0xf47aef_a[_0xf47aef_c].includes("\x7c") && _0xf47aef_a[_0xf47aef_c].trim(); ) _0xf47aef_1.push(_0xf47aef_3(_0xf47aef_a[_0xf47aef_c])), 
          _0xf47aef_c += 1;
          _0xf47aef_b.push(`\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x69\x2d\x74\x61\x62\x6c\x65\x2d\x77\x72\x61\x70\x22\x3e\x3c\x74\x61\x62\x6c\x65\x3e\x3c\x74\x68\x65\x61\x64\x3e\x3c\x74\x72\x3e${_0xf47aef_0.map(_0xf47aef_0 => `\x3c\x74\x68\x3e${_0xf47aef_2(_0xf47aef_0)}\x3c\x2f\x74\x68\x3e`).join("")}\x3c\x2f\x74\x72\x3e\x3c\x2f\x74\x68\x65\x61\x64\x3e\x3c\x74\x62\x6f\x64\x79\x3e${_0xf47aef_1.map(_0xf47aef_1 => `\x3c\x74\x72\x3e${_0xf47aef_0.map((_0xf47aef_0, _0xf47aef_3) => `\x3c\x74\x64\x3e${_0xf47aef_2(_0xf47aef_1[_0xf47aef_3] || "")}\x3c\x2f\x74\x64\x3e`).join("")}\x3c\x2f\x74\x72\x3e`).join("")}\x3c\x2f\x74\x62\x6f\x64\x79\x3e\x3c\x2f\x74\x61\x62\x6c\x65\x3e\x3c\x2f\x64\x69\x76\x3e`);
          continue;
        }
        const _0xf47aef_10 = _0xf47aef_9.match(/^(#{1,3})\s+(.+)$/);
        if (_0xf47aef_10) {
          const _0xf47aef_0 = _0xf47aef_10[1].length;
          _0xf47aef_b.push(`\x3c\x68${_0xf47aef_0}\x3e${_0xf47aef_2(_0xf47aef_10[2])}\x3c\x2f\x68${_0xf47aef_0}\x3e`), 
          _0xf47aef_c += 1;
          continue;
        }
        if (/^>\s?/.test(_0xf47aef_9)) {
          const _0xf47aef_0 = [];
          for (;_0xf47aef_c < _0xf47aef_a.length && /^>\s?/.test(_0xf47aef_a[_0xf47aef_c]); ) _0xf47aef_0.push(_0xf47aef_a[_0xf47aef_c].replace(/^>\s?/, "")), 
          _0xf47aef_c += 1;
          _0xf47aef_b.push(`\x3c\x62\x6c\x6f\x63\x6b\x71\x75\x6f\x74\x65\x3e${_0xf47aef_0.map(_0xf47aef_2).join("\x3c\x62\x72\x3e")}\x3c\x2f\x62\x6c\x6f\x63\x6b\x71\x75\x6f\x74\x65\x3e`);
          continue;
        }
        const _0xf47aef_11 = /^\s*[-*+]\s+/.test(_0xf47aef_9), _0xf47aef_12 = /^\s*\d+[.)]\s+/.test(_0xf47aef_9);
        if (_0xf47aef_11 || _0xf47aef_12) {
          const _0xf47aef_0 = [], _0xf47aef_1 = _0xf47aef_12 ? /^\s*\d+[.)]\s+/ : /^\s*[-*+]\s+/;
          for (;_0xf47aef_c < _0xf47aef_a.length && _0xf47aef_1.test(_0xf47aef_a[_0xf47aef_c]); ) _0xf47aef_0.push(_0xf47aef_a[_0xf47aef_c].replace(_0xf47aef_1, "")), 
          _0xf47aef_c += 1;
          const _0xf47aef_3 = _0xf47aef_12 ? "\x6f\x6c" : "\x75\x6c";
          _0xf47aef_b.push(`\x3c${_0xf47aef_3}\x3e${_0xf47aef_0.map(_0xf47aef_0 => `\x3c\x6c\x69\x3e${_0xf47aef_2(_0xf47aef_0)}\x3c\x2f\x6c\x69\x3e`).join("")}\x3c\x2f${_0xf47aef_3}\x3e`);
          continue;
        }
        if (/^\s*(?:---+|___+)\s*$/.test(_0xf47aef_9)) {
          _0xf47aef_b.push("\x3c\x68\x72\x3e"), _0xf47aef_c += 1;
          continue;
        }
        const _0xf47aef_13 = [ _0xf47aef_9 ];
        for (_0xf47aef_c += 1; _0xf47aef_c < _0xf47aef_a.length && _0xf47aef_a[_0xf47aef_c].trim() && !_0xf47aef_8(_0xf47aef_a, _0xf47aef_c); ) _0xf47aef_13.push(_0xf47aef_a[_0xf47aef_c]), 
        _0xf47aef_c += 1;
        _0xf47aef_b.push(`\x3c\x70\x3e${_0xf47aef_13.map(_0xf47aef_2).join("\x3c\x62\x72\x3e")}\x3c\x2f\x70\x3e`);
      }
      return _0xf47aef_b.join("");
    }
  };
})();
