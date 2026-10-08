export const LUNA_URL = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x75\x6e\x61\x2e\x6c\x6f\x61\x6e\x2f";

function _0x4ba936_0(_0x4ba936_0, _0x4ba936_1) {
  if (_0x4ba936_1?.aborted || !_0x4ba936_0.isConnected) throw new DOMException("\x43\x61\x6e\x63\x65\x6c\x6c\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
}

export async function launchLunaConnection(_0x4ba936_1, _0x4ba936_2) {
  _0x4ba936_0(_0x4ba936_1, _0x4ba936_2);
  let _0x4ba936_3 = window;
  for (let _0x4ba936_9 = 0; _0x4ba936_9 < 8; _0x4ba936_9++) try {
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x4ba936_3.nyxLaunchGameFrame) {
      const _0x4ba936_4 = await _0x4ba936_3.nyxLaunchGameFrame(_0x4ba936_1, LUNA_URL, {
        \u{66}\u{6f}\u{72}\u{63}\u{65}\u{50}\u{72}\u{6f}\u{78}\u{79}: !0,
        signal: _0x4ba936_2
      });
      if (_0x4ba936_0(_0x4ba936_1, _0x4ba936_2), !_0x4ba936_4?.managed) throw new Error("\x4c\x75\x6e\x61\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x20\x69\x74\x73\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2e");
      return;
    }
    if (_0x4ba936_3.parent === _0x4ba936_3) break;
    _0x4ba936_3 = _0x4ba936_3.parent, _0x4ba936_3.location.origin;
  } catch (_0x4ba936_8) {
    if ("\x53\x65\x63\x75\x72\x69\x74\x79\x45\x72\x72\x6f\x72" === _0x4ba936_8.name) break;
    throw _0x4ba936_8;
  }
  const {loadConnectionScript: _0x4ba936_4} = await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6a\x73\x2f\x40\x72\x63\x65\x64\x31\x65\x63\x32\x30\x62\x30\x63\x62\x63\x66\x32\x34\x34\x64\x37\x33\x37\x37\x66\x37\x21\x2e\x6a\x73"));
  _0x4ba936_0(_0x4ba936_1, _0x4ba936_2), globalThis.__NYX_RUNTIME_CONFIG__ || await _0x4ba936_4("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x72\x75\x6e\x74\x69\x6d\x65\x2d\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73", () => !!globalThis.__NYX_RUNTIME_CONFIG__), 
  _0x4ba936_0(_0x4ba936_1, _0x4ba936_2);
  const {explore: _0x4ba936_5, closeWorkspace: _0x4ba936_6} = await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x74\x75\x74\x73\x69\x2f\x40\x72\x32\x39\x33\x31\x66\x64\x31\x63\x65\x64\x31\x66\x38\x32\x38\x39\x31\x65\x32\x31\x65\x61\x35\x65\x21\x2e\x6a\x73"));
  _0x4ba936_0(_0x4ba936_1, _0x4ba936_2);
  const _0x4ba936_7 = () => _0x4ba936_6(_0x4ba936_1);
  _0x4ba936_2?.addEventListener("\x61\x62\x6f\x72\x74", _0x4ba936_7, {
    once: !0
  });
  try {
    await _0x4ba936_5(LUNA_URL, function() {
      const _0x4ba936_0 = _0x4ba936_0 => {
        try {
          return localStorage.getItem(_0x4ba936_0) || "";
        } catch {
          return "";
        }
      }, _0x4ba936_1 = _0x4ba936_0("\x6e\x79\x78\x2e\x74\x72\x61\x6e\x73\x70\x6f\x72\x74").replace(/^"|"$/g, "");
      return {
        transport: !_0x4ba936_1 || "\x61\x75\x74\x6f" === _0x4ba936_1 || /^textlib/i.test(_0x4ba936_1) ? "\x74\x65\x78\x74\x6c\x69\x62" : "\x77\x69\x73\x70" === _0x4ba936_1 ? "\x77\x69\x73\x70" : "\x61\x74\x6c\x61\x73",
        httpBridge: "\x66\x61\x6c\x73\x65" !== _0x4ba936_0("\x6e\x79\x78\x2e\x68\x74\x74\x70\x42\x72\x69\x64\x67\x65"),
        relay: _0x4ba936_0("\x6e\x79\x78\x2e\x77\x69\x73\x70\x55\x72\x6c"),
        autoRelay: !0,
        adBlock: "\x66\x61\x6c\x73\x65" !== _0x4ba936_0("\x6e\x79\x78\x2e\x70\x6f\x70\x75\x70\x50\x72\x6f\x74\x65\x63\x74\x69\x6f\x6e"),
        popupBlock: !0,
        downloadBlock: !0
      };
    }(), _0x4ba936_1), _0x4ba936_0(_0x4ba936_1, _0x4ba936_2);
  } catch (_0x4ba936_8) {
    throw _0x4ba936_2?.removeEventListener("\x61\x62\x6f\x72\x74", _0x4ba936_7), _0x4ba936_7(), _0x4ba936_8;
  }
}
