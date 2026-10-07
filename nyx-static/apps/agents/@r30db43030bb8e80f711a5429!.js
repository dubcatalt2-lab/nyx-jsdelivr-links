export function renderReply(_0xc0ba45_0, _0xc0ba45_1) {
  window.NyxMarkdown ? _0xc0ba45_0.innerHTML = window.NyxMarkdown.render(_0xc0ba45_1) : _0xc0ba45_0.textContent = _0xc0ba45_1;
}

const _0xc0ba45_0 = new WeakMap;

export function scheduleReply(_0xc0ba45_1, _0xc0ba45_2, _0xc0ba45_3) {
  const _0xc0ba45_4 = _0xc0ba45_0.get(_0xc0ba45_1);
  if (_0xc0ba45_4) return _0xc0ba45_4.text = _0xc0ba45_2, void (_0xc0ba45_4.onRender = _0xc0ba45_3);
  const _0xc0ba45_5 = {
    text: _0xc0ba45_2,
    onRender: _0xc0ba45_3
  };
  _0xc0ba45_0.set(_0xc0ba45_1, _0xc0ba45_5), requestAnimationFrame(() => {
    _0xc0ba45_0.delete(_0xc0ba45_1), _0xc0ba45_1.isConnected && (renderReply(_0xc0ba45_1, _0xc0ba45_5.text), 
    _0xc0ba45_5.onRender?.());
  });
}

document.addEventListener("\x63\x6c\x69\x63\x6b", async _0xc0ba45_0 => {
  const _0xc0ba45_1 = _0xc0ba45_0.target.closest("\x2e\x6d\x65\x73\x73\x61\x67\x65\x2d\x63\x6f\x6e\x74\x65\x6e\x74\x20\x5b\x64\x61\x74\x61\x2d\x63\x6f\x70\x79\x2d\x63\x6f\x64\x65\x5d");
  if (!_0xc0ba45_1) return;
  const _0xc0ba45_2 = _0xc0ba45_1.closest("\x2e\x61\x69\x2d\x63\x6f\x64\x65\x2d\x62\x6c\x6f\x63\x6b")?.querySelector("\x70\x72\x65\x20\x63\x6f\x64\x65");
  if (_0xc0ba45_2) try {
    await navigator.clipboard.writeText(_0xc0ba45_2.textContent), _0xc0ba45_1.title = "\x43\x6f\x70\x69\x65\x64";
  } catch {
    _0xc0ba45_1.title = "\x53\x65\x6c\x65\x63\x74\x20\x74\x68\x65\x20\x63\x6f\x64\x65\x20\x74\x6f\x20\x63\x6f\x70\x79\x20\x69\x74";
  }
});
