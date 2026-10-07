import { setupDeveloper as _0x208cc0_0 } from "\x2e\x2f\x40\x72\x61\x34\x37\x31\x66\x32\x65\x64\x63\x37\x31\x36\x34\x39\x31\x39\x39\x35\x33\x35\x38\x63\x62\x64\x21\x2e\x6a\x73\x3f\x76\x3d\x32\x30\x32\x36\x31\x30\x30\x32\x2d\x68\x61\x69\x6b\x75\x2d\x76\x31";

import { readResponse as _0x714b6c_5 } from "\x2e\x2f\x40\x72\x33\x30\x65\x35\x62\x37\x35\x35\x61\x38\x39\x34\x32\x37\x37\x37\x63\x64\x64\x66\x63\x30\x65\x66\x21\x2e\x6a\x73";

import { agentInstruction as _0x208cc0_1 } from "\x2e\x2f\x40\x72\x65\x38\x35\x35\x64\x39\x61\x62\x62\x39\x63\x66\x36\x38\x31\x36\x63\x31\x32\x61\x61\x32\x37\x66\x21\x2e\x6a\x73";

import { supportsConversationVoice as _0x714b6c_6 } from "\x2e\x2f\x40\x72\x65\x62\x66\x36\x65\x62\x30\x35\x35\x61\x38\x66\x34\x35\x65\x64\x63\x38\x61\x65\x32\x31\x65\x36\x21\x2e\x6a\x73";

export function setupKeys({user: _0x208cc0_2, busy: _0x208cc0_3, changed: _0x208cc0_4, notice: _0x208cc0_5, appName: _0x208cc0_6 = "\x4e\x6f\x6f\x6b"}) {
  const _0x208cc0_7 = _0x208cc0_0 => document.getElementById(_0x208cc0_0);
  let _0x208cc0_8 = "", _0x208cc0_9 = "", _0x208cc0_a = 0, _0x208cc0_b = [], _0x208cc0_c = !1;
  const _0x208cc0_d = "\x4e\x6f\x6f\x6b" === _0x208cc0_6, _0x208cc0_e = () => _0x208cc0_8.startsWith("\x6e\x5f\x61\x70\x69\x5f") ? "\x61\x63\x63\x6f\x75\x6e\x74" : "\x6f\x70\x65\x6e\x72\x6f\x75\x74\x65\x72";
  async function _0x208cc0_f(_0x208cc0_0, _0x208cc0_1, _0x208cc0_3) {
    const _0x208cc0_4 = await (_0x208cc0_2()?.getIdToken());
    if (!_0x208cc0_4) throw Error("\x53\x69\x67\x6e\x20\x69\x6e\x20\x66\x69\x72\x73\x74\x2e");
    return _0x714b6c_5(await fetch((_0x208cc0_d ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x6f\x6f\x6b\x2d\x64\x65\x76\x65\x6c\x6f\x70\x65\x72" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x64\x65\x76\x65\x6c\x6f\x70\x65\x72") + _0x208cc0_0, {
      method: _0x208cc0_3 || (_0x208cc0_1 ? "\x50\x4f\x53\x54" : "\x47\x45\x54"),
      headers: {
        Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0x208cc0_4,
        "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
      },
      ..._0x208cc0_1 ? {
        body: JSON.stringify(_0x208cc0_1)
      } : {},
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
    }));
  }
  const _0x208cc0_10 = _0x208cc0_0({
    account: _0x208cc0_f,
    user: _0x208cc0_2,
    nook: _0x208cc0_d,
    secret: () => _0x208cc0_8,
    refresh: () => _0x208cc0_13()
  });
  function _0x208cc0_11() {
    _0x208cc0_7("\x61\x70\x69\x4b\x65\x79\x73").setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(!!_0x208cc0_8)), _0x208cc0_7("\x6b\x65\x79\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e").textContent = _0x208cc0_8 ? "\x61\x63\x63\x6f\x75\x6e\x74" === _0x208cc0_e() ? "\x55\x73\x69\x6e\x67\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x41\x50\x49\x20\x6b\x65\x79" : "\x55\x73\x69\x6e\x67\x20\x79\x6f\x75\x72\x20\x4f\x70\x65\x6e\x52\x6f\x75\x74\x65\x72\x20\x6b\x65\x79" : "\x55\x73\x69\x6e\x67\x20\x73\x68\x61\x72\x65\x64\x20\x61\x63\x63\x65\x73\x73";
  }
  function _0x208cc0_12() {
    _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79").value = "", _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79\x50\x61\x6e\x65\x6c").hidden = !0, 
    _0x208cc0_7("\x70\x65\x72\x73\x6f\x6e\x61\x6c\x4b\x65\x79").value = "";
  }
  async function _0x208cc0_13() {
    const _0x208cc0_0 = _0x208cc0_a;
    try {
      const _0x208cc0_1 = await _0x208cc0_f("\x2f\x6d\x65");
      if (_0x208cc0_0 !== _0x208cc0_a) return;
      _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x41\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79").disabled = !!_0x208cc0_1.key || !_0x208cc0_1.configured, 
      _0x208cc0_7("\x72\x65\x76\x6f\x6b\x65\x41\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79").hidden = !_0x208cc0_1.key, _0x208cc0_10.update(_0x208cc0_1), 
      _0x208cc0_7("\x61\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79\x53\x74\x61\x74\x75\x73").textContent = _0x208cc0_1.key ? "\x41\x63\x74\x69\x76\x65\x20\x6b\x65\x79\x3a\x20" + _0x208cc0_1.key.prefix + "\x2e\x2e\x2e" : "\x4e\x6f\x20\x61\x63\x74\x69\x76\x65\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x41\x50\x49\x20\x6b\x65\x79\x2e";
    } catch (_0x208cc0_1) {
      if (_0x208cc0_0 !== _0x208cc0_a) return;
      _0x208cc0_7("\x61\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79\x53\x74\x61\x74\x75\x73").textContent = _0x208cc0_1.message, _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x41\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79").disabled = !0;
    }
  }
  return _0x208cc0_7("\x61\x70\x69\x4b\x65\x79\x73").onclick = () => {
    _0x208cc0_3() || (_0x208cc0_11(), _0x208cc0_10.tab("\x6b\x65\x79\x73"), _0x208cc0_7("\x6b\x65\x79\x45\x72\x72\x6f\x72").textContent = "", 
    _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").showModal(), _0x208cc0_13());
  }, _0x208cc0_7("\x63\x6c\x6f\x73\x65\x4b\x65\x79\x73").onclick = () => {
    _0x208cc0_c || (_0x208cc0_12(), _0x208cc0_10.clear(), _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").close());
  }, _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").addEventListener("\x63\x61\x6e\x63\x65\x6c", _0x208cc0_0 => {
    _0x208cc0_c ? _0x208cc0_0.preventDefault() : (_0x208cc0_12(), _0x208cc0_10.clear());
  }), _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").addEventListener("\x63\x6c\x6f\x73\x65", () => {
    _0x208cc0_12(), _0x208cc0_10.clear();
  }), _0x208cc0_7("\x70\x65\x72\x73\x6f\x6e\x61\x6c\x4b\x65\x79\x46\x6f\x72\x6d").onsubmit = async _0x208cc0_0 => {
    if (_0x208cc0_0.preventDefault(), _0x208cc0_3() || _0x208cc0_c) return;
    const _0x208cc0_1 = _0x208cc0_7("\x70\x65\x72\x73\x6f\x6e\x61\x6c\x4b\x65\x79").value.trim();
    if (!/^sk-or-[A-Za-z0-9_-]{20,}$/.test(_0x208cc0_1) && !/^n_api_[A-Za-z0-9_-]{43}$/.test(_0x208cc0_1)) return void (_0x208cc0_7("\x6b\x65\x79\x45\x72\x72\x6f\x72").textContent = "\x45\x6e\x74\x65\x72\x20\x61\x6e\x20\x4f\x70\x65\x6e\x52\x6f\x75\x74\x65\x72\x20\x6f\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x41\x50\x49\x20\x6b\x65\x79\x2e");
    _0x208cc0_c = !0;
    const _0x208cc0_2 = _0x208cc0_a;
    _0x208cc0_7("\x75\x73\x65\x50\x65\x72\x73\x6f\x6e\x61\x6c\x4b\x65\x79").disabled = !0;
    try {
      if (_0x208cc0_1.startsWith("\x73\x6b\x2d\x6f\x72\x2d") && await _0x714b6c_5(await fetch("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x70\x65\x6e\x72\x6f\x75\x74\x65\x72\x2e\x61\x69\x2f\x61\x70\x69\x2f\x76\x31\x2f\x6b\x65\x79", {
        headers: {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0x208cc0_1
        },
        redirect: "\x65\x72\x72\x6f\x72",
        cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
      })), _0x208cc0_2 !== _0x208cc0_a) return;
      _0x208cc0_8 = _0x208cc0_1, _0x208cc0_a++, _0x208cc0_11(), _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").close(), 
      await _0x208cc0_4();
    } catch (_0x208cc0_5) {
      _0x208cc0_2 === _0x208cc0_a && (_0x208cc0_7("\x6b\x65\x79\x45\x72\x72\x6f\x72").textContent = _0x208cc0_5.message.replaceAll(_0x208cc0_1, "\x5b\x6b\x65\x79\x5d"));
    } finally {
      _0x208cc0_c = !1, _0x208cc0_7("\x75\x73\x65\x50\x65\x72\x73\x6f\x6e\x61\x6c\x4b\x65\x79").disabled = !1;
    }
  }, _0x208cc0_7("\x75\x73\x65\x53\x68\x61\x72\x65\x64\x4b\x65\x79").onclick = async () => {
    _0x208cc0_3() || _0x208cc0_c || (_0x208cc0_8 = "", _0x208cc0_a++, _0x208cc0_11(), 
    _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").close(), await _0x208cc0_4());
  }, _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x41\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79").onclick = async () => {
    if (_0x208cc0_c || _0x208cc0_3()) return;
    _0x208cc0_c = !0, _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x41\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79").disabled = !0;
    const _0x208cc0_0 = _0x208cc0_a;
    try {
      const _0x208cc0_1 = await _0x208cc0_f("\x2f\x6b\x65\x79\x73", {
        label: _0x208cc0_7("\x61\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79\x4c\x61\x62\x65\x6c").value.trim() || _0x208cc0_6
      });
      if (_0x208cc0_0 !== _0x208cc0_a) return;
      _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79").value = _0x208cc0_1.key, _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79\x50\x61\x6e\x65\x6c").hidden = !1, 
      await _0x208cc0_13();
    } catch (_0x208cc0_1) {
      if (_0x208cc0_0 !== _0x208cc0_a) return;
      _0x208cc0_7("\x6b\x65\x79\x45\x72\x72\x6f\x72").textContent = _0x208cc0_1.message, await _0x208cc0_13();
    } finally {
      _0x208cc0_c = !1;
    }
  }, _0x208cc0_7("\x72\x65\x76\x6f\x6b\x65\x41\x63\x63\x6f\x75\x6e\x74\x4b\x65\x79").onclick = async () => {
    if (_0x208cc0_c || _0x208cc0_3()) return;
    _0x208cc0_c = !0;
    const _0x208cc0_0 = _0x208cc0_a;
    try {
      if (await _0x208cc0_f("\x2f\x6b\x65\x79\x73", null, "\x44\x45\x4c\x45\x54\x45"), _0x208cc0_0 !== _0x208cc0_a) return;
      _0x208cc0_12(), _0x208cc0_8 && "\x61\x63\x63\x6f\x75\x6e\x74" === _0x208cc0_e() && (_0x208cc0_8 = "", 
      _0x208cc0_a++, _0x208cc0_11(), await _0x208cc0_4()), await _0x208cc0_13();
    } catch (_0x208cc0_1) {
      if (_0x208cc0_0 !== _0x208cc0_a) return;
      _0x208cc0_7("\x6b\x65\x79\x45\x72\x72\x6f\x72").textContent = _0x208cc0_1.message;
    } finally {
      _0x208cc0_c = !1;
    }
  }, _0x208cc0_7("\x63\x6f\x70\x79\x43\x72\x65\x61\x74\x65\x64\x4b\x65\x79").onclick = async () => {
    try {
      await navigator.clipboard.writeText(_0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79").value), _0x208cc0_5("\x4b\x65\x79\x20\x63\x6f\x70\x69\x65\x64\x2e");
    } catch {
      _0x208cc0_5("\x53\x65\x6c\x65\x63\x74\x20\x74\x68\x65\x20\x6b\x65\x79\x20\x61\x6e\x64\x20\x63\x6f\x70\x79\x20\x69\x74\x20\x6d\x61\x6e\x75\x61\x6c\x6c\x79\x2e");
    }
  }, _0x208cc0_7("\x75\x73\x65\x43\x72\x65\x61\x74\x65\x64\x4b\x65\x79").onclick = async () => {
    _0x208cc0_3() || _0x208cc0_c || !_0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79").value || (_0x208cc0_8 = _0x208cc0_7("\x63\x72\x65\x61\x74\x65\x64\x4b\x65\x79").value, 
    _0x208cc0_a++, _0x208cc0_11(), _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").close(), await _0x208cc0_4());
  }, window.addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    _0x208cc0_8 = "", _0x208cc0_12();
  }), {
    revision: () => _0x208cc0_a,
    active: () => !!_0x208cc0_8,
    bind(_0x208cc0_0) {
      _0x208cc0_9 !== _0x208cc0_0 && (_0x208cc0_9 = _0x208cc0_0, _0x208cc0_a++, _0x208cc0_8 = "", 
      _0x208cc0_b = [], _0x208cc0_10.clear(), _0x208cc0_12(), _0x208cc0_7("\x6b\x65\x79\x44\x69\x61\x6c\x6f\x67").close(), 
      _0x208cc0_11());
    },
    async models() {
      if (!_0x208cc0_8) return null;
      const _0x208cc0_0 = _0x208cc0_8, _0x208cc0_1 = _0x208cc0_a;
      if ("\x61\x63\x63\x6f\x75\x6e\x74" === _0x208cc0_e()) {
        const _0x208cc0_0 = await _0x208cc0_f("\x2f\x6d\x65");
        if (_0x208cc0_1 !== _0x208cc0_a) throw new DOMException("\x41\x63\x63\x6f\x75\x6e\x74\x20\x63\x68\x61\x6e\x67\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
        return _0x208cc0_b = _0x208cc0_0.catalog || (_0x208cc0_0.models || []).map(_0x208cc0_0 => ({
          id: _0x208cc0_0,
          label: _0x208cc0_0,
          text: !0,
          inputModalities: [ "\x74\x65\x78\x74" ],
          outputModalities: [ "\x74\x65\x78\x74" ]
        })), {
          models: _0x208cc0_b
        };
      }
      const _0x208cc0_2 = await _0x714b6c_5(await fetch("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x70\x65\x6e\x72\x6f\x75\x74\x65\x72\x2e\x61\x69\x2f\x61\x70\x69\x2f\x76\x31\x2f\x6d\x6f\x64\x65\x6c\x73", {
        headers: {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0x208cc0_0
        },
        redirect: "\x65\x72\x72\x6f\x72",
        cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
      }));
      if (_0x208cc0_1 !== _0x208cc0_a) throw new DOMException("\x41\x63\x63\x6f\x75\x6e\x74\x20\x63\x68\x61\x6e\x67\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72");
      return _0x208cc0_b = (_0x208cc0_2.data || []).map(_0x208cc0_0 => ({
        id: _0x208cc0_0.id,
        label: _0x208cc0_0.name || _0x208cc0_0.id,
        created: _0x208cc0_0.created,
        inputModalities: _0x208cc0_0.architecture?.input_modalities || [],
        outputModalities: _0x208cc0_0.architecture?.output_modalities || [ "\x74\x65\x78\x74" ],
        text: (_0x208cc0_0.architecture?.output_modalities || [ "\x74\x65\x78\x74" ]).includes("\x74\x65\x78\x74"),
        vision: _0x208cc0_0.architecture?.input_modalities?.includes("\x69\x6d\x61\x67\x65"),
        reasoning: _0x208cc0_0.supported_parameters?.includes("\x72\x65\x61\x73\x6f\x6e\x69\x6e\x67"),
        supportedParameters: _0x208cc0_0.supported_parameters || []
      })), {
        models: _0x208cc0_b
      };
    },
    async send(_0x208cc0_0, _0x208cc0_2, _0x208cc0_3) {
      const _0x208cc0_4 = _0x208cc0_8, _0x208cc0_5 = "\x61\x63\x63\x6f\x75\x6e\x74" === _0x208cc0_e(), _0x208cc0_6 = _0x208cc0_b.find(_0x208cc0_1 => _0x208cc0_1.id === _0x208cc0_0.model);
      if (_0x208cc0_5 && !_0x208cc0_d && (_0x208cc0_0.image || _0x208cc0_0.generateAudio)) throw Error("\x41\x63\x63\x6f\x75\x6e\x74\x20\x41\x50\x49\x20\x6b\x65\x79\x73\x20\x73\x75\x70\x70\x6f\x72\x74\x20\x74\x65\x78\x74\x20\x6f\x6e\x6c\x79\x2e\x20\x55\x73\x65\x20\x61\x6e\x20\x4f\x70\x65\x6e\x52\x6f\x75\x74\x65\x72\x20\x6b\x65\x79\x20\x66\x6f\x72\x20\x69\x6d\x61\x67\x65\x73\x20\x61\x6e\x64\x20\x76\x6f\x69\x63\x65\x2e");
      const _0x208cc0_7 = (_0x208cc0_0.messages || [ {
        role: "\x75\x73\x65\x72",
        content: _0x208cc0_0.message
      } ]).map(_0x208cc0_0 => ({
        role: _0x208cc0_0.role,
        content: _0x208cc0_0.content
      }));
      if ("\x63\x6f\x6d\x70\x75\x74\x65\x72\x2d\x61\x67\x65\x6e\x74" === _0x208cc0_0.task && _0x208cc0_7.unshift({
        role: "\x73\x79\x73\x74\x65\x6d",
        content: _0x208cc0_1
      }), _0x208cc0_0.image) {
        const _0x208cc0_1 = _0x208cc0_7.at(-1);
        _0x208cc0_1.content = [ {
          type: "\x74\x65\x78\x74",
          text: _0x208cc0_1.content
        }, {
          type: "\x69\x6d\x61\x67\x65\x5f\x75\x72\x6c",
          image_url: {
            url: _0x208cc0_0.image.dataUrl
          }
        } ];
      }
      const _0x208cc0_9 = {
        model: _0x208cc0_0.model,
        messages: _0x208cc0_7,
        max_tokens: _0x208cc0_5 && !_0x208cc0_d ? 512 : "\x63\x6f\x6d\x70\x75\x74\x65\x72\x2d\x61\x67\x65\x6e\x74" === _0x208cc0_0.task ? 4096 : 2048,
        stream: !(_0x208cc0_5 && !_0x208cc0_d) && !1 !== _0x208cc0_0.stream
      };
      let _0x208cc0_a;
      if (_0x208cc0_6?.reasoning && (_0x208cc0_9.reasoning = {
        effort: _0x208cc0_0.reasoningEffort || "\x6d\x65\x64\x69\x75\x6d"
      }), _0x208cc0_0.generateAudio) {
        if (!_0x714b6c_6(_0x208cc0_6)) throw Error("\x43\x68\x6f\x6f\x73\x65\x20\x61\x20\x63\x6f\x6e\x76\x65\x72\x73\x61\x74\x69\x6f\x6e\x61\x6c\x20\x76\x6f\x69\x63\x65\x20\x6d\x6f\x64\x65\x6c\x2e");
        _0x208cc0_a = _0x208cc0_0.model.startsWith("\x6f\x70\x65\x6e\x61\x69\x2f") ? "\x70\x63\x6d\x31\x36" : "\x6d\x70\x33", _0x208cc0_9.stream = !0, 
        _0x208cc0_9.modalities = [ "\x74\x65\x78\x74", "\x61\x75\x64\x69\x6f" ], _0x208cc0_9.audio = {
          voice: _0x208cc0_0.voice || "\x61\x6c\x6c\x6f\x79",
          format: _0x208cc0_a
        };
      }
      try {
        const _0x208cc0_0 = await fetch(_0x208cc0_5 ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x76\x31\x2f\x61\x69" : "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x70\x65\x6e\x72\x6f\x75\x74\x65\x72\x2e\x61\x69\x2f\x61\x70\x69\x2f\x76\x31\x2f\x63\x68\x61\x74\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x69\x6f\x6e\x73", {
          method: "\x50\x4f\x53\x54",
          signal: _0x208cc0_2,
          redirect: "\x65\x72\x72\x6f\x72",
          headers: {
            Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0x208cc0_4,
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
          },
          body: JSON.stringify(_0x208cc0_9)
        }), _0x208cc0_1 = await _0x714b6c_5(_0x208cc0_0, _0x208cc0_3, _0x208cc0_a);
        return _0x208cc0_1.choices ? {
          text: _0x208cc0_1.choices[0]?.message?.content || "",
          model: _0x208cc0_1.model,
          finishReason: _0x208cc0_1.choices[0]?.finish_reason
        } : _0x208cc0_1;
      } catch (_0x208cc0_c) {
        if ("\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === _0x208cc0_c.name) throw _0x208cc0_c;
        throw Error(_0x208cc0_4 ? _0x208cc0_c.message.replaceAll(_0x208cc0_4, "\x5b\x6b\x65\x79\x5d") : _0x208cc0_c.message);
      }
    }
  };
}
