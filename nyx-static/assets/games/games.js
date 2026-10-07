import "\x2e\x2e\x2f\x2e\x2e\x2f\x6a\x73\x2f\x40\x72\x39\x30\x63\x64\x30\x34\x65\x38\x36\x38\x61\x65\x32\x61\x37\x34\x38\x66\x36\x33\x35\x64\x63\x33\x21\x2e\x6a\x73";

import { createGameSponsors as _0x97b3d1_0 } from "\x2e\x2e\x2f\x2e\x2e\x2f\x6a\x73\x2f\x40\x72\x32\x37\x62\x61\x34\x38\x36\x39\x35\x35\x61\x38\x38\x64\x34\x33\x31\x32\x38\x64\x65\x37\x32\x31\x21\x2e\x6a\x73";

const _0x97b3d1_1 = document.body.classList.contains("\x64\x72\x6f\x70\x2d\x67\x61\x6d\x65\x73"), _0x97b3d1_2 = !_0x97b3d1_1 && "\x74\x75\x74\x73\x69" !== document.documentElement.dataset.appShell && !document.documentElement.dataset.tutsiApp, _0x97b3d1_3 = _0x97b3d1_0 => _0x97b3d1_2 ? globalThis.nyxDisplayName(_0x97b3d1_0) : _0x97b3d1_0, _0x97b3d1_4 = {
  grid: document.getElementById("\x67\x61\x6d\x65\x47\x72\x69\x64"),
  search: document.getElementById("\x67\x61\x6d\x65\x53\x65\x61\x72\x63\x68"),
  libraryTabs: document.getElementById("\x67\x61\x6d\x65\x4c\x69\x62\x72\x61\x72\x79\x54\x61\x62\x73"),
  sort: document.getElementById("\x67\x61\x6d\x65\x53\x6f\x72\x74"),
  count: document.getElementById("\x67\x61\x6d\x65\x43\x6f\x75\x6e\x74"),
  progress: document.getElementById("\x63\x61\x74\x61\x6c\x6f\x67\x50\x72\x6f\x67\x72\x65\x73\x73"),
  empty: document.getElementById("\x65\x6d\x70\x74\x79\x53\x74\x61\x74\x65"),
  pagination: document.getElementById("\x67\x61\x6d\x65\x50\x61\x67\x69\x6e\x61\x74\x69\x6f\x6e"),
  previousPage: document.getElementById("\x70\x72\x65\x76\x69\x6f\x75\x73\x50\x61\x67\x65"),
  nextPage: document.getElementById("\x6e\x65\x78\x74\x50\x61\x67\x65"),
  pageInfo: document.getElementById("\x70\x61\x67\x65\x49\x6e\x66\x6f"),
  player: document.getElementById("\x67\x61\x6d\x65\x50\x6c\x61\x79\x65\x72"),
  playerTitle: document.getElementById("\x70\x6c\x61\x79\x65\x72\x54\x69\x74\x6c\x65"),
  playerLoading: document.getElementById("\x70\x6c\x61\x79\x65\x72\x4c\x6f\x61\x64\x69\x6e\x67"),
  playerLoadingText: document.getElementById("\x70\x6c\x61\x79\x65\x72\x4c\x6f\x61\x64\x69\x6e\x67\x54\x65\x78\x74"),
  playerRetry: document.getElementById("\x72\x65\x74\x72\x79\x47\x61\x6d\x65"),
  frame: document.getElementById("\x67\x61\x6d\x65\x46\x72\x61\x6d\x65"),
  provider: document.getElementById("\x67\x61\x6d\x65\x50\x72\x6f\x76\x69\x64\x65\x72"),
  performance: document.getElementById("\x70\x65\x72\x66\x6f\x72\x6d\x61\x6e\x63\x65\x47\x61\x6d\x65"),
  performanceLabel: document.getElementById("\x70\x65\x72\x66\x6f\x72\x6d\x61\x6e\x63\x65\x47\x61\x6d\x65\x4c\x61\x62\x65\x6c"),
  close: document.getElementById("\x63\x6c\x6f\x73\x65\x50\x6c\x61\x79\x65\x72"),
  reload: document.getElementById("\x72\x65\x6c\x6f\x61\x64\x47\x61\x6d\x65"),
  fullscreen: document.getElementById("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x47\x61\x6d\x65"),
  viewButtons: [ ...document.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x67\x61\x6d\x65\x2d\x76\x69\x65\x77\x5d") ],
  localView: document.getElementById("\x6c\x6f\x63\x61\x6c\x47\x61\x6d\x65\x73\x56\x69\x65\x77"),
  cloudView: document.getElementById("\x63\x6c\x6f\x75\x64\x47\x61\x6d\x65\x73\x56\x69\x65\x77"),
  cloudFrame: document.getElementById("\x63\x6c\x6f\x75\x64\x47\x61\x6d\x69\x6e\x67\x46\x72\x61\x6d\x65")
}, _0x97b3d1_5 = _0x97b3d1_2 ? _0x97b3d1_0(_0x97b3d1_4.grid) : null, _0x97b3d1_6 = localStorage.getItem("\x6e\x79\x78\x2e\x67\x61\x6d\x65\x50\x65\x72\x66\x6f\x72\x6d\x61\x6e\x63\x65\x4d\x6f\x64\x65"), _0x97b3d1_7 = "\x6f\x6e" === _0x97b3d1_6 ? "\x62\x61\x6c\x61\x6e\x63\x65\x64" : [ "\x61\x75\x74\x6f", "\x62\x61\x6c\x61\x6e\x63\x65\x64", "\x62\x6f\x6f\x73\x74", "\x6f\x66\x66" ].includes(_0x97b3d1_6) ? _0x97b3d1_6 : "\x61\x75\x74\x6f", _0x97b3d1_8 = {
  games: [],
  gamesByKey: new Map,
  manifest: null,
  lastFocused: null,
  activeGame: null,
  activeSourceIndex: 0,
  sourceAttempt: 0,
  sourceTimer: 0,
  failedSources: new Set,
  performancePreference: _0x97b3d1_7,
  performanceLevel: 0,
  performanceReason: "\x72\x65\x61\x64\x79",
  performanceFrame: 0,
  performanceObserver: null,
  performanceLongTasks: 0,
  performanceSamples: [],
  performanceStableWindows: 0,
  performanceLastTune: 0,
  page: 1,
  pageSize: 30,
  activeLibrary: "\x61\x6c\x6c"
}, _0x97b3d1_9 = Object.freeze([ {
  id: "\x61\x6c\x6c",
  label: "\x41\x6c\x6c\x20\x67\x61\x6d\x65\x73",
  shortLabel: "\x41\x6c\x6c",
  description: "\x45\x76\x65\x72\x79\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x67\x61\x6d\x65"
}, {
  id: "\x6c\x75\x6d\x69\x6e",
  label: "\x4c\x75\x6d\x69\x6e\x53\x44\x4b",
  shortLabel: "\x4c\x75\x6d\x69\x6e",
  description: "\x47\x61\x6d\x65\x73\x20\x64\x65\x6c\x69\x76\x65\x72\x65\x64\x20\x74\x68\x72\x6f\x75\x67\x68\x20\x4c\x75\x6d\x69\x6e\x53\x44\x4b"
}, {
  id: "\x67\x6e",
  label: "\x47\x4e\x20\x4d\x61\x74\x68",
  shortLabel: "\x47\x4e",
  description: "\x54\x68\x65\x20\x47\x4e\x20\x4d\x61\x74\x68\x20\x63\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e"
}, {
  id: "\x67\x6d\x73",
  label: "\x47\x4d\x53",
  shortLabel: "\x47\x4d\x53",
  description: "\x54\x68\x65\x20\x47\x4d\x53\x20\x63\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e"
}, {
  id: "\x6c\x6f\x63\x61\x6c",
  label: _0x97b3d1_1 ? "\x41\x72\x63\x68\x69\x76\x65" : "\x4e\x79\x78\x20\x41\x72\x63\x68\x69\x76\x65",
  shortLabel: _0x97b3d1_1 ? "\x41\x72\x63\x68\x69\x76\x65" : "\x4e\x79\x78",
  description: _0x97b3d1_1 ? "\x54\x68\x65\x20\x44\x72\x6f\x70\x20\x67\x61\x6d\x65\x20\x61\x72\x63\x68\x69\x76\x65" : "\x47\x61\x6d\x65\x73\x20\x73\x74\x6f\x72\x65\x64\x20\x77\x69\x74\x68\x20\x4e\x79\x78"
}, {
  id: "\x63\x61\x74\x63\x6c\x61\x73\x73",
  label: "\x43\x61\x74\x43\x6c\x61\x73\x73",
  shortLabel: "\x43\x61\x74\x43\x6c\x61\x73\x73",
  description: "\x43\x6f\x6d\x6d\x75\x6e\x69\x74\x79\x20\x67\x61\x6d\x65\x20\x73\x6f\x75\x72\x63\x65\x73"
}, {
  id: "\x64\x75\x63\x6b\x6d\x61\x74\x68",
  label: "\x44\x75\x63\x6b\x4d\x61\x74\x68",
  shortLabel: "\x44\x75\x63\x6b\x4d\x61\x74\x68",
  description: "\x45\x78\x74\x72\x61\x20\x66\x61\x6c\x6c\x62\x61\x63\x6b\x20\x73\x6f\x75\x72\x63\x65\x73"
}, {
  id: "\x6d\x69\x73\x63",
  label: "\x4d\x69\x73\x63\x65\x6c\x6c\x61\x6e\x65\x6f\x75\x73",
  shortLabel: "\x4d\x69\x73\x63",
  description: "\x47\x61\x6d\x65\x73\x20\x77\x69\x74\x68\x6f\x75\x74\x20\x63\x6f\x76\x65\x72\x20\x61\x72\x74"
} ]), _0x97b3d1_a = new Map;

let _0x97b3d1_b = 0, _0x97b3d1_c = {};

const _0x97b3d1_d = new Map, _0x97b3d1_e = new Map;

let _0x97b3d1_f = null, _0x97b3d1_10 = null;

const _0x97b3d1_11 = 8e3, _0x97b3d1_12 = 2, _0x97b3d1_13 = 9e3;

let _0x97b3d1_14, _0x97b3d1_15, _0x97b3d1_16 = "";

if (_0x97b3d1_2) {
  document.body.classList.add("\x6e\x79\x78\x2d\x61\x72\x63\x61\x64\x65");
  const _0x97b3d1_0 = document.querySelector("\x2e\x63\x6f\x76\x65\x2d\x68\x65\x61\x64\x65\x72");
  _0x97b3d1_0.querySelector("\x2e\x65\x79\x65\x62\x72\x6f\x77").textContent = "\x4e\x59\x58", _0x97b3d1_0.querySelector("\x68\x31").textContent = "\x41\x52\x43\x41\x44\x45";
  const _0x97b3d1_1 = document.createElement("\x64\x69\x76");
  _0x97b3d1_1.className = "\x61\x72\x63\x61\x64\x65\x2d\x6d\x61\x73\x74\x68\x65\x61\x64", _0x97b3d1_0.before(_0x97b3d1_1), _0x97b3d1_1.append(_0x97b3d1_0, document.querySelector("\x2e\x67\x61\x6d\x65\x2d\x76\x69\x65\x77\x2d\x73\x77\x69\x74\x63\x68")), 
  _0x97b3d1_14 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e"), _0x97b3d1_14.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x64", 
  _0x97b3d1_14.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x46\x65\x61\x74\x75\x72\x65\x64\x20\x67\x61\x6d\x65\x73"), _0x97b3d1_14.hidden = !0, 
  _0x97b3d1_4.localView.prepend(_0x97b3d1_14);
  const _0x97b3d1_2 = document.createElement("\x64\x69\x76");
  _0x97b3d1_2.className = "\x61\x72\x63\x61\x64\x65\x2d\x63\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e", _0x97b3d1_2.innerHTML = "\x3c\x68\x32\x3e\x47\x61\x6d\x65\x20\x6c\x69\x62\x72\x61\x72\x79\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x72\x63\x61\x64\x65\x2d\x68\x65\x61\x64\x69\x6e\x67\x2d\x6c\x69\x6e\x65\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x2f\x68\x32\x3e";
  const _0x97b3d1_3 = document.querySelector("\x2e\x63\x61\x74\x61\x6c\x6f\x67\x2d\x74\x6f\x6f\x6c\x73");
  _0x97b3d1_3.before(_0x97b3d1_2), _0x97b3d1_2.append(_0x97b3d1_3), _0x97b3d1_15 = document.createElement("\x62\x75\x74\x74\x6f\x6e"), 
  _0x97b3d1_15.type = "\x62\x75\x74\x74\x6f\x6e", _0x97b3d1_15.className = "\x61\x72\x63\x61\x64\x65\x2d\x72\x61\x6e\x64\x6f\x6d", _0x97b3d1_15.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x52\x61\x6e\x64\x6f\x6d\x20\x67\x61\x6d\x65"), 
  _0x97b3d1_15.title = "\x52\x61\x6e\x64\x6f\x6d\x20\x67\x61\x6d\x65", _0x97b3d1_15.disabled = !0, _0x97b3d1_15.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x33\x20\x36\x68\x33\x63\x34\x20\x30\x20\x38\x20\x31\x32\x20\x31\x32\x20\x31\x32\x68\x33\x6d\x2d\x34\x2d\x34\x20\x34\x20\x34\x2d\x34\x20\x34\x4d\x33\x20\x31\x38\x68\x33\x63\x31\x2e\x37\x20\x30\x20\x33\x2e\x34\x2d\x32\x2e\x32\x20\x35\x2d\x35\x6d\x32\x2d\x33\x63\x31\x2e\x37\x2d\x32\x2e\x35\x20\x33\x2e\x33\x2d\x34\x20\x35\x2d\x34\x68\x33\x6d\x2d\x34\x2d\x34\x20\x34\x20\x34\x2d\x34\x20\x34\x22\x2f\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x52\x61\x6e\x64\x6f\x6d\x20\x67\x61\x6d\x65\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x97b3d1_3.append(_0x97b3d1_15), _0x97b3d1_15.addEventListener("\x63\x6c\x69\x63\x6b", () => {
    const _0x97b3d1_0 = _0x97b3d1_38();
    _0x97b3d1_0.length && _0x97b3d1_4e(_0x97b3d1_0[Math.floor(Math.random() * _0x97b3d1_0.length)], !0, [ "\x61\x6c\x6c", "\x6d\x69\x73\x63" ].includes(_0x97b3d1_8.activeLibrary) ? "" : _0x97b3d1_8.activeLibrary);
  }), _0x97b3d1_14.addEventListener("\x63\x6c\x69\x63\x6b", _0x97b3d1_0 => {
    const _0x97b3d1_1 = _0x97b3d1_0.target.closest("\x5b\x64\x61\x74\x61\x2d\x67\x61\x6d\x65\x2d\x6b\x65\x79\x5d");
    _0x97b3d1_1 && _0x97b3d1_4e(_0x97b3d1_8.gamesByKey.get(_0x97b3d1_1.dataset.gameKey));
  });
}

function _0x97b3d1_17(_0x97b3d1_0) {
  if (!_0x97b3d1_14) return;
  if (_0x97b3d1_15.disabled = 0 === _0x97b3d1_0.length, _0x97b3d1_14.hidden = Boolean(_0x97b3d1_4.search.value.trim()) || "\x61\x6c\x6c" !== _0x97b3d1_8.activeLibrary || 1 !== _0x97b3d1_8.page, 
  _0x97b3d1_14.hidden) return;
  const _0x97b3d1_1 = [ "\x53\x6c\x6f\x70\x65", "\x52\x65\x74\x72\x6f\x20\x42\x6f\x77\x6c", "\x47\x65\x6f\x6d\x65\x74\x72\x79\x20\x44\x61\x73\x68" ].map(_0x97b3d1_0 => _0x97b3d1_8.games.find(_0x97b3d1_1 => _0x97b3d1_1.hasIcon && _0x97b3d1_1.title.toLowerCase() === _0x97b3d1_0.toLowerCase())).filter(Boolean);
  _0x97b3d1_14.hidden = !_0x97b3d1_1.length;
  const _0x97b3d1_2 = JSON.stringify(_0x97b3d1_1.map(_0x97b3d1_0 => [ _0x97b3d1_0.key, _0x97b3d1_0.covers ]));
  if (_0x97b3d1_2 === _0x97b3d1_16) return;
  _0x97b3d1_16 = _0x97b3d1_2;
  const _0x97b3d1_5 = document.createDocumentFragment();
  for (const [_0x97b3d1_4, _0x97b3d1_6] of _0x97b3d1_1.entries()) {
    const _0x97b3d1_0 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x97b3d1_0.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65", _0x97b3d1_0.type = "\x62\x75\x74\x74\x6f\x6e", _0x97b3d1_0.dataset.gameKey = _0x97b3d1_6.key, 
    _0x97b3d1_0.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x4c\x61\x75\x6e\x63\x68\x20${_0x97b3d1_6.title}`);
    const _0x97b3d1_1 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_1.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x2d\x63\x6f\x70\x79";
    const _0x97b3d1_2 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_2.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x2d\x6c\x61\x62\x65\x6c", _0x97b3d1_2.textContent = 0 === _0x97b3d1_4 ? "\x49\x6e\x20\x74\x68\x65\x20\x73\x70\x6f\x74\x6c\x69\x67\x68\x74" : "\x41\x72\x63\x61\x64\x65\x20\x70\x69\x63\x6b";
    const _0x97b3d1_7 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_7.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x2d\x74\x69\x74\x6c\x65", _0x97b3d1_7.textContent = _0x97b3d1_3(_0x97b3d1_6.title);
    const _0x97b3d1_8 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_8.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x2d\x70\x6c\x61\x79", _0x97b3d1_8.innerHTML = "\x50\x6c\x61\x79\x20\x6e\x6f\x77\x20\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x35\x20\x31\x32\x68\x31\x34\x6d\x2d\x36\x2d\x36\x20\x36\x20\x36\x2d\x36\x20\x36\x22\x2f\x3e\x3c\x2f\x73\x76\x67\x3e", 
    _0x97b3d1_1.append(_0x97b3d1_2, _0x97b3d1_7, _0x97b3d1_8);
    const _0x97b3d1_9 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_9.className = "\x61\x72\x63\x61\x64\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x2d\x6e\x75\x6d\x62\x65\x72", _0x97b3d1_9.textContent = `\x30${_0x97b3d1_4 + 1}`, 
    _0x97b3d1_9.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), _0x97b3d1_0.append(_0x97b3d1_35(_0x97b3d1_6), _0x97b3d1_9, _0x97b3d1_1), 
    _0x97b3d1_5.append(_0x97b3d1_0);
  }
  _0x97b3d1_14.replaceChildren(_0x97b3d1_5);
}

function _0x97b3d1_18(_0x97b3d1_0) {
  return new Promise(_0x97b3d1_1 => setTimeout(_0x97b3d1_1, _0x97b3d1_0));
}

function _0x97b3d1_19(_0x97b3d1_0, _0x97b3d1_1, _0x97b3d1_2) {
  let _0x97b3d1_3 = 0;
  return Promise.race([ Promise.resolve(_0x97b3d1_0), new Promise((_0x97b3d1_0, _0x97b3d1_4) => {
    _0x97b3d1_3 = setTimeout(() => _0x97b3d1_4(new Error(`${_0x97b3d1_2}\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74`)), _0x97b3d1_1);
  }) ]).finally(() => clearTimeout(_0x97b3d1_3));
}

async function _0x97b3d1_1a(_0x97b3d1_0, _0x97b3d1_1, _0x97b3d1_2 = {}) {
  const _0x97b3d1_3 = Math.max(1, Number(_0x97b3d1_2.attempts) || 2), _0x97b3d1_4 = Math.max(1e3, Number(_0x97b3d1_2.timeout) || _0x97b3d1_11);
  let _0x97b3d1_5 = null;
  for (let _0x97b3d1_7 = 0; _0x97b3d1_7 < _0x97b3d1_3; _0x97b3d1_7 += 1) {
    const _0x97b3d1_2 = new AbortController, _0x97b3d1_8 = setTimeout(() => _0x97b3d1_2.abort(), _0x97b3d1_4);
    try {
      const _0x97b3d1_3 = await fetch(_0x97b3d1_0, {
        cache: "\x6e\x6f\x2d\x63\x61\x63\x68\x65",
        signal: _0x97b3d1_2.signal
      });
      if (!_0x97b3d1_3.ok) throw new Error(`${_0x97b3d1_1}\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20${_0x97b3d1_3.status}`);
      return await _0x97b3d1_3.json();
    } catch (_0x97b3d1_6) {
      _0x97b3d1_5 = "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === _0x97b3d1_6?.name ? new Error(`${_0x97b3d1_1}\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74`) : _0x97b3d1_6;
    } finally {
      clearTimeout(_0x97b3d1_8);
    }
    _0x97b3d1_7 + 1 < _0x97b3d1_3 && await _0x97b3d1_18(250 * (_0x97b3d1_7 + 1));
  }
  throw _0x97b3d1_5 || new Error(`${_0x97b3d1_1}\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65`);
}

function _0x97b3d1_1b(_0x97b3d1_0, _0x97b3d1_1 = "") {
  return window.Lumin?.init ? Promise.resolve(window.Lumin) : _0x97b3d1_f || (_0x97b3d1_f = new Promise((_0x97b3d1_2, _0x97b3d1_3) => {
    const _0x97b3d1_4 = document.createElement("\x73\x63\x72\x69\x70\x74");
    let _0x97b3d1_5 = !1;
    _0x97b3d1_4.src = _0x97b3d1_0, _0x97b3d1_4.async = !0, _0x97b3d1_4.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
    _0x97b3d1_1 && (_0x97b3d1_4.integrity = _0x97b3d1_1, _0x97b3d1_4.crossOrigin = "\x61\x6e\x6f\x6e\x79\x6d\x6f\x75\x73");
    const _0x97b3d1_6 = (_0x97b3d1_0, _0x97b3d1_1) => {
      _0x97b3d1_5 || (_0x97b3d1_5 = !0, clearTimeout(_0x97b3d1_7), _0x97b3d1_0 ? _0x97b3d1_3(_0x97b3d1_0) : _0x97b3d1_2(_0x97b3d1_1));
    }, _0x97b3d1_7 = setTimeout(() => _0x97b3d1_6(new Error("\x4c\x75\x6d\x69\x6e\x53\x44\x4b\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74")), _0x97b3d1_13);
    _0x97b3d1_4.addEventListener("\x6c\x6f\x61\x64", () => window.Lumin?.init ? _0x97b3d1_6(null, window.Lumin) : _0x97b3d1_6(new Error("\x4c\x75\x6d\x69\x6e\x53\x44\x4b\x20\x6c\x6f\x61\x64\x65\x64\x20\x77\x69\x74\x68\x6f\x75\x74\x20\x65\x78\x70\x6f\x73\x69\x6e\x67\x20\x69\x74\x73\x20\x41\x50\x49")), {
      once: !0
    }), _0x97b3d1_4.addEventListener("\x65\x72\x72\x6f\x72", () => _0x97b3d1_6(new Error("\x4c\x75\x6d\x69\x6e\x53\x44\x4b\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64")), {
      once: !0
    }), document.head.append(_0x97b3d1_4);
  }).catch(_0x97b3d1_0 => {
    throw _0x97b3d1_f = null, _0x97b3d1_0;
  }), _0x97b3d1_f);
}

async function _0x97b3d1_1c(_0x97b3d1_0 = _0x97b3d1_8.manifest?.catalogs?.find(_0x97b3d1_0 => "\x6c\x75\x6d\x69\x6e" === _0x97b3d1_0.format)?.sdkUrl, _0x97b3d1_1 = _0x97b3d1_8.manifest?.catalogs?.find(_0x97b3d1_0 => "\x6c\x75\x6d\x69\x6e" === _0x97b3d1_0.format)?.sdkIntegrity) {
  return _0x97b3d1_10 || (_0x97b3d1_10 = (async () => {
    const _0x97b3d1_2 = await _0x97b3d1_1b(_0x97b3d1_0, _0x97b3d1_1);
    return await _0x97b3d1_19(_0x97b3d1_2.init({
      headless: !0
    }), _0x97b3d1_13, "\x4c\x75\x6d\x69\x6e\x53\x44\x4b\x20\x73\x65\x74\x75\x70"), _0x97b3d1_2;
  })().catch(_0x97b3d1_0 => {
    throw _0x97b3d1_10 = null, _0x97b3d1_0;
  }), _0x97b3d1_10);
}

function _0x97b3d1_1d(_0x97b3d1_0, _0x97b3d1_1 = !0) {
  const _0x97b3d1_2 = "\x63\x6c\x6f\x75\x64" === _0x97b3d1_0 ? "\x63\x6c\x6f\x75\x64" : "\x61\x6c\x6c";
  _0x97b3d1_4.localView.hidden = "\x61\x6c\x6c" !== _0x97b3d1_2, _0x97b3d1_4.cloudView.hidden = "\x63\x6c\x6f\x75\x64" !== _0x97b3d1_2;
  for (const _0x97b3d1_3 of _0x97b3d1_4.viewButtons) {
    const _0x97b3d1_0 = _0x97b3d1_3.dataset.gameView === _0x97b3d1_2;
    _0x97b3d1_3.classList.toggle("\x61\x63\x74\x69\x76\x65", _0x97b3d1_0), _0x97b3d1_3.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x97b3d1_0));
  }
  if ("\x63\x6c\x6f\x75\x64" !== _0x97b3d1_2 || _0x97b3d1_4.cloudFrame.src || (_0x97b3d1_4.cloudFrame.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x69\x6e\x67\x2f\x3f\x65\x6d\x62\x65\x64\x64\x65\x64\x3d\x67\x61\x6d\x65\x73"), 
  _0x97b3d1_1) try {
    const _0x97b3d1_0 = new URL(location.href);
    _0x97b3d1_0.hash = "\x63\x6c\x6f\x75\x64" === _0x97b3d1_2 ? "\x63\x6c\x6f\x75\x64" : "", _0x714b6c_20.replaceState(null, "", _0x97b3d1_0);
  } catch {}
}

for (const _0x97b3d1_51 of _0x97b3d1_4.viewButtons) _0x97b3d1_51.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x97b3d1_1d(_0x97b3d1_51.dataset.gameView));

function _0x97b3d1_1e() {
  const _0x97b3d1_0 = {};
  let _0x97b3d1_1 = 0;
  try {
    for (let _0x97b3d1_2 = 0; _0x97b3d1_2 < localStorage.length && Object.keys(_0x97b3d1_0).length < 64; _0x97b3d1_2 += 1) {
      const _0x97b3d1_3 = localStorage.key(_0x97b3d1_2);
      if (!_0x97b3d1_3 || /^(?:nyx\.|drop\.|nook\.|tutsi\.|firebase:)/.test(_0x97b3d1_3) || /[\u0000-\u001f]/.test(_0x97b3d1_3)) continue;
      const _0x97b3d1_4 = localStorage.getItem(_0x97b3d1_3);
      if (!("\x73\x74\x72\x69\x6e\x67" != typeof _0x97b3d1_4 || (new TextEncoder).encode(_0x97b3d1_4).length > 24e3)) {
        if (_0x97b3d1_1 += (new TextEncoder).encode(_0x97b3d1_3).length + (new TextEncoder).encode(_0x97b3d1_4).length, 
        _0x97b3d1_1 > 28e4) break;
        _0x97b3d1_0[_0x97b3d1_3] = _0x97b3d1_4;
      }
    }
  } catch {}
  return _0x97b3d1_0;
}

function _0x97b3d1_1f(_0x97b3d1_0, _0x97b3d1_1 = {}) {
  if (parent === window) return Promise.resolve({});
  const _0x97b3d1_2 = `\x67\x61\x6d\x65\x2d${Date.now().toString(36)}\x2d${(++_0x97b3d1_b).toString(36)}`;
  return new Promise((_0x97b3d1_3, _0x97b3d1_4) => {
    const _0x97b3d1_5 = setTimeout(() => {
      _0x97b3d1_a.delete(_0x97b3d1_2), _0x97b3d1_4(new Error("\x43\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x72\x65\x73\x70\x6f\x6e\x64\x2e"));
    }, 7e3);
    _0x97b3d1_a.set(_0x97b3d1_2, {
      resolve: _0x97b3d1_3,
      reject: _0x97b3d1_4,
      timer: _0x97b3d1_5
    }), parent.postMessage({
      type: _0x97b3d1_0,
      requestId: _0x97b3d1_2,
      ..._0x97b3d1_1
    }, location.origin);
  });
}

async function _0x97b3d1_20(_0x97b3d1_0) {
  if (!_0x97b3d1_0?.key) return {};
  try {
    const _0x97b3d1_1 = await _0x97b3d1_1f("\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x65\x2d\x6c\x6f\x61\x64", {
      gameKey: _0x97b3d1_0.key
    }), _0x97b3d1_2 = _0x97b3d1_1?.storage && "\x6f\x62\x6a\x65\x63\x74" == typeof _0x97b3d1_1.storage ? _0x97b3d1_1.storage : {};
    Object.entries(_0x97b3d1_2).forEach(([_0x97b3d1_0, _0x97b3d1_1]) => {
      "\x73\x74\x72\x69\x6e\x67" != typeof _0x97b3d1_0 || "\x73\x74\x72\x69\x6e\x67" != typeof _0x97b3d1_1 || /^(?:nyx\.|drop\.|nook\.|tutsi\.|firebase:)/.test(_0x97b3d1_0) || localStorage.setItem(_0x97b3d1_0, _0x97b3d1_1);
    });
  } catch {}
  return _0x97b3d1_1e();
}

function _0x97b3d1_21(_0x97b3d1_0, _0x97b3d1_1 = {}) {
  if (!_0x97b3d1_0?.key) return;
  const _0x97b3d1_2 = _0x97b3d1_1e(), _0x97b3d1_3 = {};
  Object.entries(_0x97b3d1_2).forEach(([_0x97b3d1_0, _0x97b3d1_2]) => {
    _0x97b3d1_1[_0x97b3d1_0] !== _0x97b3d1_2 && (_0x97b3d1_3[_0x97b3d1_0] = _0x97b3d1_2);
  });
  const _0x97b3d1_4 = Object.keys(_0x97b3d1_1).filter(_0x97b3d1_0 => !(_0x97b3d1_0 in _0x97b3d1_2));
  (Object.keys(_0x97b3d1_3).length || _0x97b3d1_4.length) && _0x97b3d1_1f("\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x65\x2d\x73\x61\x76\x65", {
    gameKey: _0x97b3d1_0.key,
    storage: _0x97b3d1_3,
    removed: _0x97b3d1_4
  }).catch(() => {});
}

function _0x97b3d1_22() {
  if (parent !== window) try {
    const _0x97b3d1_0 = getComputedStyle(parent.document.documentElement), _0x97b3d1_1 = getComputedStyle(parent.document.body), _0x97b3d1_2 = [ _0x97b3d1_1.getPropertyValue("\x2d\x2d\x74\x68\x65\x6d\x65\x2d\x61\x63\x63\x65\x6e\x74"), _0x97b3d1_1.getPropertyValue("\x2d\x2d\x74\x68\x65\x6d\x65\x2d\x61"), _0x97b3d1_1.getPropertyValue("\x2d\x2d\x61\x63\x63\x65\x6e\x74"), _0x97b3d1_0.getPropertyValue("\x2d\x2d\x74\x68\x65\x6d\x65\x2d\x61\x63\x63\x65\x6e\x74"), _0x97b3d1_0.getPropertyValue("\x2d\x2d\x74\x68\x65\x6d\x65\x2d\x61"), _0x97b3d1_0.getPropertyValue("\x2d\x2d\x61\x63\x63\x65\x6e\x74") ].map(_0x97b3d1_0 => _0x97b3d1_0.trim()).find(_0x97b3d1_0 => _0x97b3d1_0 && CSS.supports("\x63\x6f\x6c\x6f\x72", _0x97b3d1_0));
    _0x97b3d1_2 && document.documentElement.style.setProperty("\x2d\x2d\x61\x63\x63\x65\x6e\x74", _0x97b3d1_2);
  } catch {}
}

function _0x97b3d1_23() {
  if (_0x97b3d1_22(), parent !== window) try {
    const _0x97b3d1_0 = new MutationObserver(_0x97b3d1_22);
    _0x97b3d1_0.observe(parent.document.documentElement, {
      attributes: !0,
      attributeFilter: [ "\x63\x6c\x61\x73\x73", "\x73\x74\x79\x6c\x65" ]
    }), _0x97b3d1_0.observe(parent.document.body, {
      attributes: !0,
      attributeFilter: [ "\x63\x6c\x61\x73\x73", "\x73\x74\x79\x6c\x65" ]
    });
  } catch {}
}

_0x97b3d1_1d("\x23\x63\x6c\x6f\x75\x64" === location.hash.toLowerCase() ? "\x63\x6c\x6f\x75\x64" : "\x61\x6c\x6c", !1), _0x97b3d1_23();

const _0x97b3d1_24 = new Map([ [ "\x46\x2f\x63\x6c\x66\x6e\x61\x66\x70\x73\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x66\x6e\x61\x66\x5f\x70\x69\x7a\x7a\x65\x72\x69\x61\x5f\x73\x69\x6d\x75\x6c\x61\x74\x6f\x72\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ], [ "\x46\x2f\x63\x6c\x66\x6e\x61\x66\x73\x6c\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x66\x6e\x61\x66\x35\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ], [ "\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x44\x72\x61\x67\x6f\x6e\x78\x63\x6c\x69\x65\x6e\x74\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ], [ "\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x4c\x5f\x31\x2e\x39\x5f\x76\x30\x5f\x37\x5f\x30\x5f\x4f\x66\x66\x6c\x69\x6e\x65\x5f\x53\x69\x67\x6e\x65\x64\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ], [ "\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x58\x20\x31\x2e\x38\x2e\x38\x28\x75\x32\x39\x29\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ], [ "\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x5a\x5f\x31\x2e\x31\x31\x2e\x32\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ], [ "\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x65\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x2e\x31\x2e\x35\x2e\x32\x2e\x68\x74\x6d\x6c", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x61\x73\x73\x72\x6f\x6f\x6d\x6c\x65\x73\x73\x6f\x6e\x2e\x67\x69\x74\x68\x75\x62\x2e\x69\x6f\x2f\x62\x61\x73\x69\x63\x2d\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72\x2f\x68\x74\x6d\x6c\x2f\x6d\x69\x6e\x65\x63\x72\x61\x66\x74\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c" ] ]);

function _0x97b3d1_25(_0x97b3d1_0) {
  return String(_0x97b3d1_0 || "\x47\x61\x6d\x65").replace(/\.html?$/i, "").replace(/\bindex$/i, "").replace(/[-_]+/g, "\x20").replace(/([a-z])([A-Z0-9])/g, "\x24\x31\x20\x24\x32").replace(/([0-9])([a-z])/gi, "\x24\x31\x20\x24\x32").replace(/[\\/]+/g, "\x20").replace(/\s+/g, "\x20").trim().replace(/\b\w/g, _0x97b3d1_0 => _0x97b3d1_0.toUpperCase()) || "\x47\x61\x6d\x65";
}

const _0x97b3d1_26 = new Map([ [ "\x31\x76\x31\x6c\x6f\x6c", "\x31\x76\x31\x2e\x4c\x4f\x4c" ], [ "\x61\x74\x74\x61\x63\x6b\x68\x6f\x6c\x65", "\x41\x74\x74\x61\x63\x6b\x20\x48\x6f\x6c\x65" ], [ "\x61\x63\x68\x69\x65\x76\x6d\x65\x6e\x74\x75\x6e\x6c\x6f\x63\x6b\x65\x64", "\x41\x63\x68\x69\x65\x76\x65\x6d\x65\x6e\x74\x20\x55\x6e\x6c\x6f\x63\x6b\x65\x64" ], [ "\x61\x63\x68\x69\x65\x76\x6d\x65\x6e\x74\x75\x6e\x6c\x6f\x63\x6b\x65\x64\x32", "\x41\x63\x68\x69\x65\x76\x65\x6d\x65\x6e\x74\x20\x55\x6e\x6c\x6f\x63\x6b\x65\x64\x20\x32" ], [ "\x61\x63\x68\x69\x65\x76\x6d\x65\x6e\x74\x75\x6e\x6c\x6f\x63\x6b\x65\x64\x33", "\x41\x63\x68\x69\x65\x76\x65\x6d\x65\x6e\x74\x20\x55\x6e\x6c\x6f\x63\x6b\x65\x64\x20\x33" ], [ "\x61\x6d\x6f\x6e\x67\x75\x73", "\x41\x6d\x6f\x6e\x67\x20\x55\x73" ], [ "\x61\x6e\x69\x6d\x61\x6c\x63\x72\x6f\x73\x73\x69\x6e\x67\x77\x69\x6c\x64\x77\x6f\x72\x6c\x64", "\x41\x6e\x69\x6d\x61\x6c\x20\x43\x72\x6f\x73\x73\x69\x6e\x67\x3a\x20\x57\x69\x6c\x64\x20\x57\x6f\x72\x6c\x64" ], [ "\x61\x71\x75\x61\x70\x61\x72\x6b\x69\x6f", "\x41\x71\x75\x61\x70\x61\x72\x6b\x2e\x69\x6f" ], [ "\x61\x72\x6d\x6f\x72\x6d\x61\x79\x68\x65\x6d\x32", "\x41\x72\x6d\x6f\x72\x20\x4d\x61\x79\x68\x65\x6d\x20\x32" ], [ "\x62\x6c\x6f\x6f\x6e\x73\x74\x64\x31", "\x42\x6c\x6f\x6f\x6e\x73\x20\x54\x44\x20\x31" ], [ "\x62\x6c\x6f\x6f\x6e\x73\x74\x64\x33", "\x42\x6c\x6f\x6f\x6e\x73\x20\x54\x44\x20\x33" ], [ "\x62\x6f\x62\x74\x68\x65\x72\x6f\x62\x62\x65\x72", "\x42\x6f\x62\x20\x74\x68\x65\x20\x52\x6f\x62\x62\x65\x72" ], [ "\x62\x6f\x62\x74\x68\x65\x72\x6f\x62\x62\x65\x72\x32", "\x42\x6f\x62\x20\x74\x68\x65\x20\x52\x6f\x62\x62\x65\x72\x20\x32" ], [ "\x62\x75\x63\x6b\x73\x68\x6f\x74\x72\x6f\x75\x6c\x65\x74\x74\x65", "\x42\x75\x63\x6b\x73\x68\x6f\x74\x20\x52\x6f\x75\x6c\x65\x74\x74\x65" ], [ "\x62\x75\x72\x72\x69\x74\x6f\x62\x69\x73\x6f\x6e\x6c\x61\x75\x6e\x63\x68\x61\x6c\x69\x62\x72\x65", "\x42\x75\x72\x72\x69\x74\x6f\x20\x42\x69\x73\x6f\x6e\x3a\x20\x4c\x61\x75\x6e\x63\x68\x61\x20\x4c\x69\x62\x72\x65" ], [ "\x63\x6f\x6c\x6f\x72\x77\x61\x74\x65\x72\x73\x6f\x72\x74\x33\x64", "\x43\x6f\x6c\x6f\x72\x20\x57\x61\x74\x65\x72\x20\x53\x6f\x72\x74\x20\x33\x44" ], [ "\x63\x72\x61\x7a\x79\x63\x61\x74\x74\x6c\x65\x33\x64", "\x43\x72\x61\x7a\x79\x20\x43\x61\x74\x74\x6c\x65\x20\x33\x44" ], [ "\x64\x61\x64\x6e\x6d\x65", "\x44\x61\x64\x20\x27\x6e\x20\x4d\x65" ], [ "\x64\x65\x61\x64\x65\x73\x74\x61\x74\x65", "\x44\x65\x61\x64\x20\x45\x73\x74\x61\x74\x65" ], [ "\x64\x65\x61\x64\x7a\x65\x64", "\x44\x65\x61\x64\x20\x5a\x65\x64" ], [ "\x64\x65\x61\x64\x7a\x65\x64\x32", "\x44\x65\x61\x64\x20\x5a\x65\x64\x20\x32" ], [ "\x64\x65\x65\x70\x65\x72\x73\x6c\x65\x65\x70", "\x44\x65\x65\x70\x65\x72\x20\x53\x6c\x65\x65\x70" ], [ "\x64\x65\x65\x70\x65\x73\x74\x73\x77\x6f\x72\x64", "\x44\x65\x65\x70\x65\x73\x74\x20\x53\x77\x6f\x72\x64" ], [ "\x64\x65\x65\x70\x73\x6c\x65\x65\x70", "\x44\x65\x65\x70\x20\x53\x6c\x65\x65\x70" ], [ "\x64\x65\x66\x65\x6e\x64\x79\x6f\x75\x72\x6e\x75\x74\x73", "\x44\x65\x66\x65\x6e\x64\x20\x59\x6f\x75\x72\x20\x4e\x75\x74\x73" ], [ "\x64\x65\x66\x65\x6e\x64\x79\x6f\x75\x72\x6e\x75\x74\x73\x32", "\x44\x65\x66\x65\x6e\x64\x20\x59\x6f\x75\x72\x20\x4e\x75\x74\x73\x20\x32" ], [ "\x65\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x31\x38\x38\x75\x32\x39", "\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x20\x31\x2e\x38\x2e\x38" ], [ "\x65\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x61\x6c\x70\x68\x61\x31\x32\x36\x6f\x66\x66\x6c\x69\x6e\x65", "\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x20\x41\x6c\x70\x68\x61\x20\x31\x2e\x32\x2e\x36" ], [ "\x65\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x62\x65\x74\x61\x31\x33\x6f\x66\x66\x6c\x69\x6e\x65", "\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x20\x42\x65\x74\x61\x20\x31\x2e\x33" ], [ "\x65\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x69\x6e\x64\x65\x76\x6f\x66\x66\x6c\x69\x6e\x65", "\x45\x61\x67\x6c\x65\x72\x63\x72\x61\x66\x74\x20\x49\x6e\x64\x65\x76" ], [ "\x35\x39\x33\x32\x37\x35\x66\x70\x61\x77\x6f\x72\x6c\x64\x33", "\x46\x61\x6e\x63\x79\x20\x50\x61\x6e\x74\x73\x20\x41\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x3a\x20\x57\x6f\x72\x6c\x64\x20\x33" ], [ "\x37\x35\x30\x37\x38\x35\x66\x70\x61\x77\x6f\x72\x6c\x64\x34\x70\x31", "\x46\x61\x6e\x63\x79\x20\x50\x61\x6e\x74\x73\x20\x41\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x3a\x20\x57\x6f\x72\x6c\x64\x20\x34\x20\x50\x61\x72\x74\x20\x31" ], [ "\x37\x35\x32\x37\x33\x37\x66\x70\x61\x77\x6f\x72\x6c\x64\x34\x70\x32", "\x46\x61\x6e\x63\x79\x20\x50\x61\x6e\x74\x73\x20\x41\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x3a\x20\x57\x6f\x72\x6c\x64\x20\x34\x20\x50\x61\x72\x74\x20\x32" ], [ "\x66\x61\x6e\x63\x79\x70\x61\x6e\x74\x73\x61\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x77\x6f\x72\x6c\x64\x33", "\x46\x61\x6e\x63\x79\x20\x50\x61\x6e\x74\x73\x20\x41\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x3a\x20\x57\x6f\x72\x6c\x64\x20\x33" ], [ "\x66\x61\x6e\x63\x79\x70\x61\x6e\x74\x73\x61\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x77\x6f\x72\x6c\x64\x34\x70\x61\x72\x74\x31", "\x46\x61\x6e\x63\x79\x20\x50\x61\x6e\x74\x73\x20\x41\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x3a\x20\x57\x6f\x72\x6c\x64\x20\x34\x20\x50\x61\x72\x74\x20\x31" ], [ "\x66\x61\x6e\x63\x79\x70\x61\x6e\x74\x73\x61\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x77\x6f\x72\x6c\x64\x34\x70\x61\x72\x74\x32", "\x46\x61\x6e\x63\x79\x20\x50\x61\x6e\x74\x73\x20\x41\x64\x76\x65\x6e\x74\x75\x72\x65\x73\x3a\x20\x57\x6f\x72\x6c\x64\x20\x34\x20\x50\x61\x72\x74\x20\x32" ], [ "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x77\x6f\x72\x6c\x64", "\x46\x69\x76\x65\x20\x4e\x69\x67\x68\x74\x73\x20\x61\x74\x20\x46\x72\x65\x64\x64\x79\x27\x73\x20\x57\x6f\x72\x6c\x64" ], [ "\x67\x75\x6e\x73\x70\x69\x6e", "\x47\x75\x6e\x20\x53\x70\x69\x6e" ], [ "\x67\x75\x6e\x6d\x61\x79\x68\x65\x6d", "\x47\x75\x6e\x20\x4d\x61\x79\x68\x65\x6d" ], [ "\x67\x75\x6e\x6d\x61\x79\x68\x65\x6d\x32", "\x47\x75\x6e\x20\x4d\x61\x79\x68\x65\x6d\x20\x32" ], [ "\x67\x75\x6e\x6d\x61\x79\x68\x65\x6d\x72\x65\x64\x75\x78", "\x47\x75\x6e\x20\x4d\x61\x79\x68\x65\x6d\x20\x52\x65\x64\x75\x78" ], [ "\x68\x74\x6d\x6c\x35\x64\x6f\x6f\x64\x6c\x65\x6a\x75\x6d\x70", "\x44\x6f\x6f\x64\x6c\x65\x20\x4a\x75\x6d\x70" ], [ "\x31\x64\x61\x74\x65\x64\x61\x6e\x67\x65\x72", "\x31\x20\x44\x61\x74\x65\x20\x44\x61\x6e\x67\x65\x72" ], [ "\x63\x6c\x69\x63\x6b\x74\x65\x61\x6d\x66\x75\x73\x69\x6f\x6e\x64\x65\x76\x65\x6c\x6f\x70\x65\x72\x32\x35\x68\x74\x6d\x6c\x35\x72\x75\x6e\x74\x69\x6d\x65", "\x46\x69\x76\x65\x20\x4e\x69\x67\x68\x74\x73\x20\x61\x74\x20\x46\x72\x65\x64\x64\x79\x27\x73\x20\x57\x6f\x72\x6c\x64\x20\x52\x65\x66\x72\x65\x73\x68\x65\x64" ], [ "\x61\x6e\x74\x6f\x6e\x62\x6c\x61\x73\x74\x64\x65\x6d\x6f\x76\x31\x32", "\x41\x6e\x74\x6f\x6e\x62\x6c\x61\x73\x74" ], [ "\x73\x68\x61\x70\x65\x7a\x64\x65\x6d\x6f\x66\x61\x63\x74\x6f\x72\x79\x61\x75\x74\x6f\x6d\x61\x74\x69\x6f\x6e\x67\x61\x6d\x65", "\x73\x68\x61\x70\x65\x7a" ], [ "\x64\x75\x63\x6b\x6c\x69\x66\x65\x32\x77\x6f\x72\x6c\x64\x63\x68\x61\x6d\x70\x69\x6f\x6e", "\x44\x75\x63\x6b\x20\x4c\x69\x66\x65\x20\x32\x3a\x20\x57\x6f\x72\x6c\x64\x20\x43\x68\x61\x6d\x70\x69\x6f\x6e" ], [ "\x70\x61\x63\x6d\x61\x6e\x77\x6f\x72\x6c\x64", "\x50\x61\x63\x2d\x4d\x61\x6e\x20\x57\x6f\x72\x6c\x64" ], [ "\x72\x6f\x61\x64\x6f\x66\x66\x75\x72\x79", "\x52\x6f\x61\x64\x20\x6f\x66\x20\x46\x75\x72\x79" ], [ "\x73\x74\x61\x74\x65\x69\x6f\x79\x74", "\x53\x74\x61\x74\x65\x2e\x69\x6f" ], [ "\x74\x6f\x6d\x62\x6f\x66\x74\x68\x65\x6d\x61\x73\x6b", "\x54\x6f\x6d\x62\x20\x6f\x66\x20\x74\x68\x65\x20\x4d\x61\x73\x6b" ], [ "\x76\x65\x78\x32", "\x56\x65\x78\x20\x32" ], [ "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65" ], [ "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x32", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x32" ], [ "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x33", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x33" ], [ "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x34", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x34" ], [ "\x74\x68\x65\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65" ], [ "\x74\x68\x65\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x32", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x32" ], [ "\x74\x68\x65\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x33", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x33" ], [ "\x74\x68\x65\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x34", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x34" ], [ "\x77\x6f\x72\x6c\x64\x73\x34", "\x57\x6f\x72\x6c\x64\x27\x73\x20\x48\x61\x72\x64\x65\x73\x74\x20\x47\x61\x6d\x65\x20\x34" ], [ "\x77\x6f\x72\x6c\x64\x62\x6f\x78", "\x57\x6f\x72\x6c\x64\x42\x6f\x78" ], [ "\x77\x6f\x72\x6d\x73\x77\x6f\x72\x6c\x64\x70\x61\x72\x74\x79", "\x57\x6f\x72\x6d\x73\x20\x57\x6f\x72\x6c\x64\x20\x50\x61\x72\x74\x79" ] ]);

function _0x97b3d1_27(_0x97b3d1_0, _0x97b3d1_1 = "") {
  let _0x97b3d1_2 = String(_0x97b3d1_0 || "").replace(/@[a-f0-9]{8,}$/i, "").replace(/\?s\b/gi, "\x27\x73").replace(/\s*[-|]\s*(?:play online\b.*|poki\b.*|free (?:online )?.*|demo)\s*$/i, "").replace(/\s+html5\s*$/i, "").replace(/\s+/g, "\x20").trim();
  if (!_0x97b3d1_2) return "";
  _0x97b3d1_2 = _0x97b3d1_25(_0x97b3d1_2).replace(/\b(\d)\s+D\b/g, "\x24\x31\x44").replace(/\b(\d)\s+V\s+(\d)\b/gi, "\x24\x31\x76\x24\x32");
  const _0x97b3d1_3 = _0x97b3d1_2.toLowerCase().replace(/[^a-z0-9]/g, "");
  return "\x67\x6e" === _0x97b3d1_1 && (/^(?:ytgamewrapperwebgltemplate|piplayables|runnertemplate|fix|f|a|win|manifest|offlineclient|internetexplorer|jquerymin|easeljs\d+combined|emulatorjsdemo|youtubeplayable|ruffleplayer|soundboard|coolgames|\d*firebasefirestore|aaafunworld)$/i.test(_0x97b3d1_3) || /^\d{2,}$/.test(_0x97b3d1_3)) ? "" : _0x97b3d1_26.get(_0x97b3d1_3) || _0x97b3d1_2;
}

function _0x97b3d1_28(_0x97b3d1_0, _0x97b3d1_1 = "") {
  const _0x97b3d1_2 = String(_0x97b3d1_0 || "").trim();
  if (!_0x97b3d1_2) return -1 / 0;
  const _0x97b3d1_3 = _0x97b3d1_2.split(/\s+/).filter(Boolean);
  let _0x97b3d1_4 = Math.min(_0x97b3d1_2.length, 36) + 9 * _0x97b3d1_3.length;
  return 1 === _0x97b3d1_3.length && _0x97b3d1_2.length > 11 && (_0x97b3d1_4 -= 16), 
  _0x97b3d1_2.length > 48 && (_0x97b3d1_4 -= _0x97b3d1_2.length - 48), /[?@]|(?:template|wrapper|play online|demo)$/i.test(_0x97b3d1_2) && (_0x97b3d1_4 -= 35), 
  "\x64\x75\x63\x6b\x6d\x61\x74\x68" === _0x97b3d1_1 && (_0x97b3d1_4 += 5), "\x6c\x75\x6d\x69\x6e" === _0x97b3d1_1 && (_0x97b3d1_4 += 3), 
  _0x97b3d1_4;
}

function _0x97b3d1_29(_0x97b3d1_0) {
  const _0x97b3d1_1 = _0x97b3d1_25(_0x97b3d1_0).toLowerCase().replace(/[^a-z0-9]/g, "");
  return {
    "\x31\x30\x6d\x69\x6e\x75\x74\x65\x73\x74\x69\x6c\x6c\x64\x61\x77\x6e": "\x31\x30\x6d\x69\x6e\x75\x74\x65\x73\x74\x69\x6c\x64\x61\x77\x6e",
    fnaf: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x31",
    fnaf2: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x32",
    fnaf3: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x33",
    fnaf4: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x34",
    fnaf4halloween: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x34\x68\x61\x6c\x6c\x6f\x77\x65\x65\x6e",
    fnafworld: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x77\x6f\x72\x6c\x64",
    fnafps: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x70\x69\x7a\x7a\x65\x72\x69\x61\x73\x69\x6d\x75\x6c\x61\x74\x6f\x72",
    fnafsl: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x73\x69\x73\x74\x65\x72\x6c\x6f\x63\x61\x74\x69\x6f\x6e",
    fnafucn: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x75\x63\x6e",
    fivenightsatfreddys: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x31",
    fivenightsatfreddys5: "\x66\x69\x76\x65\x6e\x69\x67\x68\x74\x73\x61\x74\x66\x72\x65\x64\x64\x79\x73\x73\x69\x73\x74\x65\x72\x6c\x6f\x63\x61\x74\x69\x6f\x6e",
    theworldshardestgame: "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65",
    theworldshardestgame2: "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x32",
    theworldshardestgame3: "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x33",
    theworldshardestgame4: "\x77\x6f\x72\x6c\x64\x73\x68\x61\x72\x64\x65\x73\x74\x67\x61\x6d\x65\x34"
  }[_0x97b3d1_1] || _0x97b3d1_1;
}

function _0x97b3d1_2a(_0x97b3d1_0, _0x97b3d1_1) {
  return String(_0x97b3d1_0 || "").replace(/\{(\w+)\}/g, (_0x97b3d1_0, _0x97b3d1_2) => encodeURIComponent(_0x97b3d1_1[_0x97b3d1_2] ?? ""));
}

function _0x97b3d1_2b(_0x97b3d1_0) {
  try {
    const _0x97b3d1_1 = new URL(String(_0x97b3d1_0 || "").trim());
    return /^https?:$/.test(_0x97b3d1_1.protocol) ? (_0x97b3d1_1.username = "", _0x97b3d1_1.password = "", 
    _0x97b3d1_1.hash = "", `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x67\x61\x6d\x65\x73\x2f\x72\x65\x6d\x6f\x74\x65\x2d\x70\x6c\x61\x79\x2e\x68\x74\x6d\x6c\x3f\x76\x3d\x32\x30\x32\x36\x30\x38\x30\x35\x2d\x73\x65\x6c\x65\x63\x74\x65\x64\x2d\x70\x72\x6f\x78\x79\x2d\x65\x6e\x67\x69\x6e\x65\x2d\x76\x33\x26\x75\x72\x6c\x3d${encodeURIComponent(_0x97b3d1_1.href)}`) : "";
  } catch {
    return "";
  }
}

function _0x97b3d1_2c(_0x97b3d1_0) {
  return String(_0x97b3d1_0).replace(/\.[^.]+$/, "").replace(/[^a-z0-9]+/gi, "\x2d").replace(/^-+|-+$/g, "").toLowerCase() + "\x2e\x70\x6e\x67";
}

function _0x97b3d1_2d(_0x97b3d1_0) {
  if (!_0x97b3d1_0) return "";
  try {
    const _0x97b3d1_1 = new URL(_0x97b3d1_0, location.href);
    return new Set([ "\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d", "\x63\x64\x6e\x2e\x6a\x73\x64\x65\x6c\x69\x76\x72\x2e\x6e\x65\x74", "\x72\x61\x77\x63\x64\x6e\x2e\x67\x69\x74\x68\x61\x63\x6b\x2e\x63\x6f\x6d", "\x72\x61\x77\x2e\x67\x69\x74\x68\x61\x63\x6b\x2e\x63\x6f\x6d" ]).has(_0x97b3d1_1.hostname) ? `\x2f\x67\x6d\x73\x2d\x67\x61\x6d\x65\x73\x2d\x70\x72\x6f\x78\x79\x3f\x75\x72\x6c\x3d${encodeURIComponent(_0x97b3d1_1.href)}` : _0x97b3d1_1.href;
  } catch {
    return "";
  }
}

function _0x97b3d1_2e(_0x97b3d1_0) {
  if (!_0x97b3d1_0) return "";
  try {
    const _0x97b3d1_1 = new URL(_0x97b3d1_0, location.href);
    if ("\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d" === _0x97b3d1_1.hostname) {
      const _0x97b3d1_0 = _0x97b3d1_1.pathname.split("\x2f").filter(Boolean);
      if (_0x97b3d1_0.length >= 4) {
        const [_0x97b3d1_1, _0x97b3d1_2, _0x97b3d1_3, ..._0x97b3d1_4] = _0x97b3d1_0;
        return "\x67\x6e\x2d\x6d\x61\x74\x68" === _0x97b3d1_1.toLowerCase() && "\x63\x6f\x76\x65\x72\x73" === _0x97b3d1_2.toLowerCase() ? `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x61\x63\x6b\x2e\x63\x6f\x6d\x2f${encodeURIComponent(_0x97b3d1_1)}\x2f${encodeURIComponent(_0x97b3d1_2)}\x2f${encodeURIComponent(_0x97b3d1_3)}\x2f${_0x97b3d1_4.map(encodeURIComponent).join("\x2f")}` : `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2e\x6a\x73\x64\x65\x6c\x69\x76\x72\x2e\x6e\x65\x74\x2f\x67\x68\x2f${encodeURIComponent(_0x97b3d1_1)}\x2f${encodeURIComponent(_0x97b3d1_2)}\x40${encodeURIComponent(_0x97b3d1_3)}\x2f${_0x97b3d1_4.map(encodeURIComponent).join("\x2f")}`;
      }
    }
    return "\x68\x74\x74\x70\x73\x3a" === _0x97b3d1_1.protocol ? _0x97b3d1_1.href : "";
  } catch {
    return "";
  }
}

function _0x97b3d1_2f(_0x97b3d1_0) {
  return Array.isArray(_0x97b3d1_0) ? _0x97b3d1_0 : Array.isArray(_0x97b3d1_0?.games) ? _0x97b3d1_0.games : [];
}

function _0x97b3d1_30(_0x97b3d1_0) {
  const _0x97b3d1_1 = [ _0x97b3d1_0?.title, _0x97b3d1_0?.name, _0x97b3d1_0?.path, _0x97b3d1_0?.url, _0x97b3d1_0?.cover, _0x97b3d1_0?.img, _0x97b3d1_0?.thumbnail ].map(_0x97b3d1_0 => String(_0x97b3d1_0 || "").toLowerCase().replace(/[^a-z0-9]+/g, "")).join("\x20");
  return _0x97b3d1_1.includes("\x61\x6d\x69\x72\x72\x6f\x72\x73\x63\x75\x72\x73\x65\x73\x66\x77") || _0x97b3d1_1.includes("\x61\x6d\x61\x74\x79\x61\x6d\x69\x72\x72\x6f\x72\x73\x63\x75\x72\x73\x65");
}

async function _0x97b3d1_31(_0x97b3d1_0) {
  if ("\x6c\x75\x6d\x69\x6e" === _0x97b3d1_0.format) {
    const _0x97b3d1_1 = await _0x97b3d1_1c(_0x97b3d1_0.sdkUrl, _0x97b3d1_0.sdkIntegrity), _0x97b3d1_2 = [], _0x97b3d1_3 = 100;
    let _0x97b3d1_4 = 1, _0x97b3d1_5 = 1;
    do {
      const _0x97b3d1_0 = await _0x97b3d1_19(_0x97b3d1_1.getGames({
        page: _0x97b3d1_4,
        limit: _0x97b3d1_3
      }), _0x97b3d1_13, `\x4c\x75\x6d\x69\x6e\x53\x44\x4b\x20\x63\x61\x74\x61\x6c\x6f\x67\x20\x70\x61\x67\x65\x20${_0x97b3d1_4}`), _0x97b3d1_6 = Array.isArray(_0x97b3d1_0?.games) ? _0x97b3d1_0.games : [];
      _0x97b3d1_2.push(..._0x97b3d1_6), _0x97b3d1_5 = Math.max(1, Number(_0x97b3d1_0?.pages) || 1), 
      _0x97b3d1_4 += 1;
    } while (_0x97b3d1_4 <= _0x97b3d1_5);
    return _0x97b3d1_2.flatMap(_0x97b3d1_1 => {
      const _0x97b3d1_2 = String(_0x97b3d1_1?.id || "").trim(), _0x97b3d1_3 = _0x97b3d1_27(_0x97b3d1_1?.name || _0x97b3d1_2, "\x6c\x75\x6d\x69\x6e");
      if (!_0x97b3d1_2 || !_0x97b3d1_3) return [];
      const _0x97b3d1_4 = `\x6c\x75\x6d\x69\x6e\x2d\x67\x61\x6d\x65\x3a${_0x97b3d1_2}`, _0x97b3d1_5 = _0x97b3d1_1?.image_token ? `\x6c\x75\x6d\x69\x6e\x2d\x63\x6f\x76\x65\x72\x3a${_0x97b3d1_1.image_token}` : "";
      return [ {
        key: _0x97b3d1_29(_0x97b3d1_3),
        title: _0x97b3d1_3,
        url: _0x97b3d1_4,
        cover: _0x97b3d1_5,
        covers: _0x97b3d1_5 ? [ _0x97b3d1_5 ] : [],
        priority: Number(_0x97b3d1_0.priority) || 0,
        source: _0x97b3d1_0.id,
        sources: [ {
          url: _0x97b3d1_4,
          source: _0x97b3d1_0.id,
          priority: Number(_0x97b3d1_0.priority) || 0,
          title: _0x97b3d1_3,
          luminId: _0x97b3d1_2
        } ]
      } ];
    });
  }
  const _0x97b3d1_1 = _0x97b3d1_2f(await _0x97b3d1_1a(_0x97b3d1_0.url, _0x97b3d1_0.id));
  let _0x97b3d1_2 = new Set;
  if (_0x97b3d1_0.coversUrl) try {
    _0x97b3d1_2 = new Set(await _0x97b3d1_1a(_0x97b3d1_0.coversUrl, `${_0x97b3d1_0.id}\x20\x63\x6f\x76\x65\x72\x73`, {
      attempts: 1
    }));
  } catch {
    _0x97b3d1_2 = new Set;
  }
  return _0x97b3d1_1.flatMap(_0x97b3d1_1 => {
    if (_0x97b3d1_30(_0x97b3d1_1)) return [];
    const _0x97b3d1_3 = String(_0x97b3d1_1.path || "").replace(/^\/+/, "");
    if (!_0x97b3d1_3 && "\x64\x75\x63\x6b\x6d\x61\x74\x68" !== _0x97b3d1_0.format && "\x65\x78\x74\x65\x72\x6e\x61\x6c" !== _0x97b3d1_0.format) return [];
    const _0x97b3d1_4 = String(_0x97b3d1_1.title || _0x97b3d1_1.name || "").replace(/\s+/g, "\x20").trim();
    if (/^@[a-f0-9]{24,}$/i.test(_0x97b3d1_4)) return [];
    const _0x97b3d1_5 = _0x97b3d1_27("\x64\x75\x63\x6b\x6d\x61\x74\x68" === _0x97b3d1_0.format ? _0x97b3d1_25(_0x97b3d1_4 || _0x97b3d1_3) : _0x97b3d1_4 || _0x97b3d1_25(_0x97b3d1_3), _0x97b3d1_0.format);
    if (!_0x97b3d1_5) return [];
    let _0x97b3d1_6 = "\x64\x75\x63\x6b\x6d\x61\x74\x68" === _0x97b3d1_0.format ? String(_0x97b3d1_1.url || "") : "\x65\x78\x74\x65\x72\x6e\x61\x6c" === _0x97b3d1_0.format ? _0x97b3d1_2b(_0x97b3d1_1.url) : _0x97b3d1_2a(_0x97b3d1_0.player, {
      path: _0x97b3d1_3
    });
    if (!_0x97b3d1_6) return [];
    let _0x97b3d1_7 = [];
    if ("\x75\x67\x73" === _0x97b3d1_0.format) {
      _0x97b3d1_6 = _0x97b3d1_24.get(_0x97b3d1_3) || _0x97b3d1_6;
      const _0x97b3d1_0 = _0x97b3d1_2c(_0x97b3d1_3);
      _0x97b3d1_2.has(_0x97b3d1_0) && _0x97b3d1_7.push(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x75\x67\x73\x2f\x74\x68\x75\x6d\x62\x73\x2f${encodeURIComponent(_0x97b3d1_0)}`);
    } else "\x67\x6e" === _0x97b3d1_0.format ? _0x97b3d1_7.push(_0x97b3d1_1.cover, _0x97b3d1_2e(_0x97b3d1_1.coverFallback), _0x97b3d1_2e(_0x97b3d1_1.cover)) : "\x67\x6d\x73" === _0x97b3d1_0.format ? ("\x67\x62\x61" === _0x97b3d1_1.type && _0x97b3d1_1.romId && _0x97b3d1_0.gbaPlayer && (_0x97b3d1_6 = _0x97b3d1_2a(_0x97b3d1_0.gbaPlayer, {
      romId: _0x97b3d1_1.romId
    })), _0x97b3d1_7.push(_0x97b3d1_2d(_0x97b3d1_1.cover), _0x97b3d1_2e(_0x97b3d1_1.cover))) : "\x65\x78\x74\x65\x72\x6e\x61\x6c" === _0x97b3d1_0.format && _0x97b3d1_7.push(_0x97b3d1_2d(_0x97b3d1_1.cover), _0x97b3d1_2d(_0x97b3d1_1.coverFallback), _0x97b3d1_2e(_0x97b3d1_1.cover));
    return _0x97b3d1_7 = [ ...new Set(_0x97b3d1_7.filter(Boolean)) ], [ {
      key: _0x97b3d1_29(_0x97b3d1_5),
      title: _0x97b3d1_5,
      url: _0x97b3d1_6,
      cover: _0x97b3d1_7[0] || "",
      covers: _0x97b3d1_7,
      priority: Number(_0x97b3d1_0.priority) || 0,
      source: _0x97b3d1_0.id,
      fallbackOnly: Boolean(_0x97b3d1_0.fallbackOnly),
      sources: [ {
        url: _0x97b3d1_6,
        source: _0x97b3d1_0.id,
        priority: Number(_0x97b3d1_0.priority) || 0,
        title: _0x97b3d1_5
      } ]
    } ];
  });
}

function _0x97b3d1_32(_0x97b3d1_0) {
  const _0x97b3d1_1 = Number(_0x97b3d1_0?.priority) || 0;
  return "\x67\x6e" === _0x97b3d1_0?.source ? _0x97b3d1_1 - 1e3 : _0x97b3d1_1;
}

function _0x97b3d1_33(_0x97b3d1_0) {
  const _0x97b3d1_1 = new Map;
  for (const _0x97b3d1_3 of _0x97b3d1_0.flat()) {
    if (!_0x97b3d1_3.key || !_0x97b3d1_3.url) continue;
    const _0x97b3d1_0 = _0x97b3d1_1.get(_0x97b3d1_3.key);
    if (_0x97b3d1_3.fallbackOnly && !_0x97b3d1_0) continue;
    const _0x97b3d1_2 = [ ..._0x97b3d1_0?.sources || [], ..._0x97b3d1_3.sources || [] ].filter(_0x97b3d1_0 => _0x97b3d1_0?.url).filter((_0x97b3d1_0, _0x97b3d1_1, _0x97b3d1_2) => _0x97b3d1_2.findIndex(_0x97b3d1_1 => _0x97b3d1_1.url === _0x97b3d1_0.url) === _0x97b3d1_1).sort((_0x97b3d1_0, _0x97b3d1_1) => _0x97b3d1_32(_0x97b3d1_1) - _0x97b3d1_32(_0x97b3d1_0)), _0x97b3d1_4 = [ ...new Set([ ..._0x97b3d1_0?.covers || [], ..._0x97b3d1_3.covers || [], _0x97b3d1_3.cover ].filter(Boolean)) ], _0x97b3d1_5 = !_0x97b3d1_0 || _0x97b3d1_32(_0x97b3d1_3) > _0x97b3d1_32(_0x97b3d1_0) ? {
      ..._0x97b3d1_3
    } : {
      ..._0x97b3d1_0
    }, _0x97b3d1_6 = _0x97b3d1_2[0];
    _0x97b3d1_5.url = _0x97b3d1_6.url, _0x97b3d1_5.source = _0x97b3d1_6.source, _0x97b3d1_5.priority = _0x97b3d1_6.priority, 
    _0x97b3d1_5.sources = _0x97b3d1_2, _0x97b3d1_5.title = _0x97b3d1_2.map(_0x97b3d1_0 => ({
      title: _0x97b3d1_0.title,
      score: _0x97b3d1_28(_0x97b3d1_0.title, _0x97b3d1_0.source)
    })).sort((_0x97b3d1_0, _0x97b3d1_1) => _0x97b3d1_1.score - _0x97b3d1_0.score)[0]?.title || _0x97b3d1_5.title, 
    _0x97b3d1_5.covers = _0x97b3d1_4, _0x97b3d1_1.set(_0x97b3d1_3.key, _0x97b3d1_5);
  }
  const _0x97b3d1_2 = _0x97b3d1_8.manifest?.fallbackCover || "";
  return [ ..._0x97b3d1_1.values() ].map(_0x97b3d1_0 => {
    const _0x97b3d1_1 = [ ...new Set(_0x97b3d1_0.covers.filter(Boolean)) ];
    return {
      ..._0x97b3d1_0,
      hasIcon: _0x97b3d1_1.length > 0,
      covers: _0x97b3d1_1.length ? [ ...new Set([ ..._0x97b3d1_1, _0x97b3d1_2 ? _0x97b3d1_2a(_0x97b3d1_2, {
        title: _0x97b3d1_0.title
      }) : "" ].filter(Boolean)) ] : []
    };
  });
}

function _0x97b3d1_34(_0x97b3d1_0) {
  const _0x97b3d1_1 = document.createElement("\x73\x70\x61\x6e");
  return _0x97b3d1_1.className = "\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b", _0x97b3d1_1.textContent = _0x97b3d1_0.trim().charAt(0).toUpperCase() || "\x3f", 
  _0x97b3d1_1;
}

function _0x97b3d1_35(_0x97b3d1_0) {
  const _0x97b3d1_1 = document.createElement("\x73\x70\x61\x6e");
  _0x97b3d1_1.className = "\x67\x61\x6d\x65\x2d\x63\x6f\x76\x65\x72";
  const _0x97b3d1_2 = _0x97b3d1_34(_0x97b3d1_0.title);
  if (_0x97b3d1_1.append(_0x97b3d1_2), !_0x97b3d1_0.covers.length) return _0x97b3d1_1;
  const _0x97b3d1_3 = document.createElement("\x69\x6d\x67");
  _0x97b3d1_3.alt = "", _0x97b3d1_3.loading = "\x65\x61\x67\x65\x72", _0x97b3d1_3.decoding = "\x61\x73\x79\x6e\x63", 
  _0x97b3d1_3.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72";
  let _0x97b3d1_4 = 0;
  const _0x97b3d1_5 = async _0x97b3d1_0 => {
    if (!_0x97b3d1_0.startsWith("\x6c\x75\x6d\x69\x6e\x2d\x63\x6f\x76\x65\x72\x3a")) return void (_0x97b3d1_3.src = _0x97b3d1_0);
    const _0x97b3d1_1 = _0x97b3d1_0.slice(12);
    try {
      let _0x97b3d1_0 = _0x97b3d1_e.get(_0x97b3d1_1);
      if (!_0x97b3d1_0) {
        const _0x97b3d1_2 = await _0x97b3d1_1c();
        _0x97b3d1_0 = await _0x97b3d1_2.getImageUrl(_0x97b3d1_1), _0x97b3d1_0 && _0x97b3d1_e.set(_0x97b3d1_1, _0x97b3d1_0);
      }
      _0x97b3d1_0 ? _0x97b3d1_3.src = _0x97b3d1_0 : _0x97b3d1_3.dispatchEvent(new Event("\x65\x72\x72\x6f\x72"));
    } catch {
      _0x97b3d1_3.dispatchEvent(new Event("\x65\x72\x72\x6f\x72"));
    }
  };
  return _0x97b3d1_5(_0x97b3d1_0.covers[_0x97b3d1_4]), _0x97b3d1_3.addEventListener("\x6c\x6f\x61\x64", () => {
    _0x97b3d1_3.classList.add("\x6c\x6f\x61\x64\x65\x64"), _0x97b3d1_2.remove();
  }), _0x97b3d1_3.addEventListener("\x65\x72\x72\x6f\x72", () => {
    _0x97b3d1_4 += 1, _0x97b3d1_4 < _0x97b3d1_0.covers.length ? _0x97b3d1_5(_0x97b3d1_0.covers[_0x97b3d1_4]) : _0x97b3d1_3.remove();
  }), _0x97b3d1_1.append(_0x97b3d1_3), _0x97b3d1_1;
}

function _0x97b3d1_36(_0x97b3d1_0) {
  const _0x97b3d1_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  _0x97b3d1_1.className = "\x67\x61\x6d\x65\x2d\x63\x61\x72\x64", _0x97b3d1_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x97b3d1_1.dataset.gameKey = _0x97b3d1_0.key, 
  _0x97b3d1_1.dataset.gameSource = _0x97b3d1_0.source, _0x97b3d1_1.dataset.preferredSource = [ "\x61\x6c\x6c", "\x6d\x69\x73\x63" ].includes(_0x97b3d1_8.activeLibrary) ? "" : _0x97b3d1_8.activeLibrary, 
  _0x97b3d1_1.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x50\x6c\x61\x79\x20${_0x97b3d1_0.title}`), _0x97b3d1_1.append(_0x97b3d1_35(_0x97b3d1_0));
  const _0x97b3d1_2 = document.createElement("\x73\x70\x61\x6e");
  _0x97b3d1_2.className = "\x67\x61\x6d\x65\x2d\x73\x6f\x75\x72\x63\x65\x2d\x62\x61\x64\x67\x65";
  const _0x97b3d1_4 = [ "\x61\x6c\x6c", "\x6d\x69\x73\x63" ].includes(_0x97b3d1_8.activeLibrary) ? _0x97b3d1_0.source : _0x97b3d1_8.activeLibrary;
  _0x97b3d1_2.textContent = _0x97b3d1_9.find(_0x97b3d1_0 => _0x97b3d1_0.id === _0x97b3d1_4)?.shortLabel || "\x47\x61\x6d\x65", 
  _0x97b3d1_1.append(_0x97b3d1_2);
  const _0x97b3d1_5 = document.createElement("\x73\x70\x61\x6e");
  return _0x97b3d1_5.className = "\x67\x61\x6d\x65\x2d\x6e\x61\x6d\x65", _0x97b3d1_5.textContent = _0x97b3d1_3(_0x97b3d1_0.title), 
  _0x97b3d1_1.append(_0x97b3d1_5), _0x97b3d1_1;
}

function _0x97b3d1_37() {
  return _0x97b3d1_1 || !0 === _0x97b3d1_8.manifest?.includeUnillustrated;
}

function _0x97b3d1_38() {
  const _0x97b3d1_0 = _0x97b3d1_4.search.value.normalize("\x4e\x46\x4b\x43").trim().toLowerCase();
  return _0x97b3d1_8.games.filter(_0x97b3d1_1 => ("\x6d\x69\x73\x63" === _0x97b3d1_8.activeLibrary ? !_0x97b3d1_1.hasIcon : (_0x97b3d1_1.hasIcon || _0x97b3d1_0 || _0x97b3d1_37()) && ("\x61\x6c\x6c" === _0x97b3d1_8.activeLibrary || _0x97b3d1_47(_0x97b3d1_1).some(_0x97b3d1_0 => _0x97b3d1_0.source === _0x97b3d1_8.activeLibrary))) && (!_0x97b3d1_0 || _0x97b3d1_1.title.toLowerCase().includes(_0x97b3d1_0))).sort((_0x97b3d1_0, _0x97b3d1_1) => "\x7a\x61" === _0x97b3d1_4.sort.value ? _0x97b3d1_1.title.localeCompare(_0x97b3d1_0.title, void 0, {
    numeric: !0
  }) : _0x97b3d1_0.title.localeCompare(_0x97b3d1_1.title, void 0, {
    numeric: !0
  }));
}

function _0x97b3d1_39() {
  const _0x97b3d1_0 = _0x97b3d1_38(), _0x97b3d1_1 = Math.max(1, Math.ceil(_0x97b3d1_0.length / _0x97b3d1_8.pageSize));
  _0x97b3d1_8.page = Math.min(Math.max(1, _0x97b3d1_8.page), _0x97b3d1_1), _0x97b3d1_17(_0x97b3d1_0);
  const _0x97b3d1_2 = (_0x97b3d1_8.page - 1) * _0x97b3d1_8.pageSize, _0x97b3d1_3 = _0x97b3d1_0.slice(_0x97b3d1_2, _0x97b3d1_2 + _0x97b3d1_8.pageSize);
  if (_0x97b3d1_5) _0x97b3d1_5.render(_0x97b3d1_3, _0x97b3d1_36); else {
    const _0x97b3d1_0 = document.createDocumentFragment();
    for (const _0x97b3d1_1 of _0x97b3d1_3) _0x97b3d1_0.append(_0x97b3d1_36(_0x97b3d1_1));
    _0x97b3d1_4.grid.replaceChildren(_0x97b3d1_0);
  }
  _0x97b3d1_4.empty.hidden = _0x97b3d1_0.length > 0, _0x97b3d1_4.count.textContent = `${_0x97b3d1_0.length.toLocaleString()}\x20\x67\x61\x6d\x65${1 === _0x97b3d1_0.length ? "" : "\x73"}`, 
  _0x97b3d1_4.pagination.hidden = _0x97b3d1_0.length <= _0x97b3d1_8.pageSize, _0x97b3d1_4.previousPage.disabled = _0x97b3d1_8.page <= 1, 
  _0x97b3d1_4.nextPage.disabled = _0x97b3d1_8.page >= _0x97b3d1_1, _0x97b3d1_4.pageInfo.textContent = `\x50\x61\x67\x65\x20${_0x97b3d1_8.page}\x20\x6f\x66\x20${_0x97b3d1_1}`;
}

function _0x97b3d1_3a(_0x97b3d1_0) {
  return "\x61\x6c\x6c" === _0x97b3d1_0 ? _0x97b3d1_8.games.filter(_0x97b3d1_0 => _0x97b3d1_0.hasIcon || _0x97b3d1_37()).length : "\x6d\x69\x73\x63" === _0x97b3d1_0 ? _0x97b3d1_8.games.filter(_0x97b3d1_0 => !_0x97b3d1_0.hasIcon).length : _0x97b3d1_8.games.filter(_0x97b3d1_1 => (_0x97b3d1_1.hasIcon || _0x97b3d1_37()) && _0x97b3d1_47(_0x97b3d1_1).some(_0x97b3d1_1 => _0x97b3d1_1.source === _0x97b3d1_0)).length;
}

function _0x97b3d1_3b() {
  const _0x97b3d1_0 = document.createDocumentFragment();
  for (const _0x97b3d1_1 of _0x97b3d1_9) {
    const _0x97b3d1_2 = _0x97b3d1_3a(_0x97b3d1_1.id);
    if ("\x61\x6c\x6c" !== _0x97b3d1_1.id && 0 === _0x97b3d1_2) continue;
    const _0x97b3d1_3 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x97b3d1_3.type = "\x62\x75\x74\x74\x6f\x6e", _0x97b3d1_3.className = "\x6c\x69\x62\x72\x61\x72\x79\x2d\x74\x61\x62", _0x97b3d1_3.dataset.library = _0x97b3d1_1.id, 
    _0x97b3d1_3.title = _0x97b3d1_1.description, _0x97b3d1_3.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x97b3d1_8.activeLibrary === _0x97b3d1_1.id)), 
    _0x97b3d1_3.classList.toggle("\x61\x63\x74\x69\x76\x65", _0x97b3d1_8.activeLibrary === _0x97b3d1_1.id);
    const _0x97b3d1_4 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_4.textContent = _0x97b3d1_1.label;
    const _0x97b3d1_5 = document.createElement("\x73\x70\x61\x6e");
    _0x97b3d1_5.className = "\x6c\x69\x62\x72\x61\x72\x79\x2d\x74\x61\x62\x2d\x63\x6f\x75\x6e\x74", _0x97b3d1_5.textContent = _0x97b3d1_2.toLocaleString(), 
    _0x97b3d1_3.append(_0x97b3d1_4, _0x97b3d1_5), _0x97b3d1_0.append(_0x97b3d1_3);
  }
  _0x97b3d1_4.libraryTabs.replaceChildren(_0x97b3d1_0);
}

function _0x97b3d1_3c() {
  _0x97b3d1_8.page = 1, _0x97b3d1_39();
}

function _0x97b3d1_3d(_0x97b3d1_0) {
  const _0x97b3d1_1 = _0x97b3d1_38(), _0x97b3d1_2 = Math.max(1, Math.ceil(_0x97b3d1_1.length / _0x97b3d1_8.pageSize)), _0x97b3d1_3 = Math.min(Math.max(1, _0x97b3d1_0), _0x97b3d1_2);
  _0x97b3d1_3 !== _0x97b3d1_8.page && (_0x97b3d1_8.page = _0x97b3d1_3, _0x97b3d1_39(), 
  _0x97b3d1_4.grid.scrollIntoView({
    behavior: matchMedia("\x28\x70\x72\x65\x66\x65\x72\x73\x2d\x72\x65\x64\x75\x63\x65\x64\x2d\x6d\x6f\x74\x69\x6f\x6e\x3a\x20\x72\x65\x64\x75\x63\x65\x29").matches ? "\x61\x75\x74\x6f" : "\x73\x6d\x6f\x6f\x74\x68",
    block: "\x73\x74\x61\x72\x74"
  }));
}

function _0x97b3d1_3e(_0x97b3d1_0) {
  try {
    const _0x97b3d1_1 = new URL(location.href);
    _0x97b3d1_0 ? _0x97b3d1_1.searchParams.set("\x67\x61\x6d\x65", _0x97b3d1_0) : _0x97b3d1_1.searchParams.delete("\x67\x61\x6d\x65"), 
    _0x714b6c_20.replaceState(null, "", _0x97b3d1_1);
  } catch {}
}

function _0x97b3d1_3f() {
  clearTimeout(_0x97b3d1_8.sourceTimer), _0x97b3d1_8.sourceTimer = 0;
}

function _0x97b3d1_40() {
  const _0x97b3d1_0 = Number(navigator.hardwareConcurrency || 8), _0x97b3d1_1 = Number(navigator.deviceMemory || 8);
  return matchMedia("\x28\x6d\x61\x78\x2d\x77\x69\x64\x74\x68\x3a\x20\x34\x38\x30\x70\x78\x29\x20\x61\x6e\x64\x20\x28\x6d\x61\x78\x2d\x68\x65\x69\x67\x68\x74\x3a\x20\x35\x32\x30\x70\x78\x29").matches || _0x97b3d1_0 <= 4 || _0x97b3d1_1 <= 4 ? 2 : _0x97b3d1_0 <= 6 || _0x97b3d1_1 <= 6 ? 1 : 0;
}

function _0x97b3d1_41() {
  return _0x97b3d1_8.activeGame && "\x6f\x66\x66" !== _0x97b3d1_8.performancePreference ? "\x62\x61\x6c\x61\x6e\x63\x65\x64" === _0x97b3d1_8.performancePreference ? 1 : "\x62\x6f\x6f\x73\x74" === _0x97b3d1_8.performancePreference ? 2 : _0x97b3d1_8.performanceLevel : 0;
}

function _0x97b3d1_42(_0x97b3d1_0, _0x97b3d1_1 = "") {
  const _0x97b3d1_2 = Math.max(0, Math.min(2, Math.round(Number(_0x97b3d1_0) || 0)));
  (_0x97b3d1_2 !== _0x97b3d1_8.performanceLevel || _0x97b3d1_1 && _0x97b3d1_1 !== _0x97b3d1_8.performanceReason) && (_0x97b3d1_8.performanceLevel = _0x97b3d1_2, 
  _0x97b3d1_1 && (_0x97b3d1_8.performanceReason = _0x97b3d1_1), _0x97b3d1_43());
}

function _0x97b3d1_43() {
  const _0x97b3d1_0 = _0x97b3d1_41(), _0x97b3d1_1 = _0x97b3d1_0 > 0;
  document.body.classList.toggle("\x67\x61\x6d\x65\x2d\x61\x63\x74\x69\x76\x65", Boolean(_0x97b3d1_8.activeGame)), 
  document.body.classList.toggle("\x67\x61\x6d\x65\x2d\x70\x65\x72\x66\x6f\x72\x6d\x61\x6e\x63\x65\x2d\x61\x63\x74\x69\x76\x65", _0x97b3d1_1), document.body.dataset.gamePerformanceLevel = String(_0x97b3d1_0);
  const _0x97b3d1_2 = "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference ? 2 === _0x97b3d1_0 ? "\x41\x75\x74\x6f\x20\xb7\x20\x42\x6f\x6f\x73\x74" : 1 === _0x97b3d1_0 ? "\x41\x75\x74\x6f\x20\xb7\x20\x42\x61\x6c\x61\x6e\x63\x65\x64" : "\x41\x75\x74\x6f" : "\x62\x61\x6c\x61\x6e\x63\x65\x64" === _0x97b3d1_8.performancePreference ? "\x42\x61\x6c\x61\x6e\x63\x65\x64" : "\x62\x6f\x6f\x73\x74" === _0x97b3d1_8.performancePreference ? "\x42\x6f\x6f\x73\x74" : "\x4f\x66\x66";
  _0x97b3d1_4.performanceLabel && (_0x97b3d1_4.performanceLabel.textContent = _0x97b3d1_2), 
  _0x97b3d1_4.performance && (_0x97b3d1_4.performance.dataset.mode = _0x97b3d1_8.performancePreference, 
  _0x97b3d1_4.performance.dataset.level = String(_0x97b3d1_0), _0x97b3d1_4.performance.classList.toggle("\x61\x63\x74\x69\x76\x65", _0x97b3d1_1), 
  _0x97b3d1_4.performance.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x97b3d1_1)), _0x97b3d1_4.performance.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x47\x61\x6d\x65\x20\x6f\x70\x74\x69\x6d\x69\x7a\x65\x72\x3a\x20${_0x97b3d1_2}`), 
  _0x97b3d1_4.performance.title = `\x47\x61\x6d\x65\x20\x6f\x70\x74\x69\x6d\x69\x7a\x65\x72\x3a\x20${_0x97b3d1_2}\x2e\x20\x53\x65\x6c\x65\x63\x74\x20\x74\x6f\x20\x63\x68\x61\x6e\x67\x65\x20\x41\x75\x74\x6f\x2c\x20\x42\x61\x6c\x61\x6e\x63\x65\x64\x2c\x20\x42\x6f\x6f\x73\x74\x2c\x20\x6f\x72\x20\x4f\x66\x66\x2e`);
}

function _0x97b3d1_44() {
  _0x97b3d1_8.performanceFrame && cancelAnimationFrame(_0x97b3d1_8.performanceFrame), 
  _0x97b3d1_8.performanceFrame = 0, _0x97b3d1_8.performanceObserver?.disconnect?.(), 
  _0x97b3d1_8.performanceObserver = null, _0x97b3d1_8.performanceSamples = [], _0x97b3d1_8.performanceLongTasks = 0, 
  _0x97b3d1_8.performanceStableWindows = 0, _0x97b3d1_8.performanceLastTune = 0;
}

function _0x97b3d1_45() {
  if (_0x97b3d1_44(), !_0x97b3d1_8.activeGame) return;
  "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference && (_0x97b3d1_8.performanceLevel = _0x97b3d1_40(), 
  _0x97b3d1_8.performanceReason = _0x97b3d1_8.performanceLevel ? "\x64\x65\x76\x69\x63\x65" : "\x72\x65\x61\x64\x79", 
  _0x97b3d1_43());
  try {
    _0x97b3d1_8.performanceObserver = new PerformanceObserver(_0x97b3d1_0 => {
      _0x97b3d1_8.performanceLongTasks += _0x97b3d1_0.getEntries().filter(_0x97b3d1_0 => _0x97b3d1_0.duration >= 50).length;
    }), _0x97b3d1_8.performanceObserver.observe({
      type: "\x6c\x6f\x6e\x67\x74\x61\x73\x6b"
    });
  } catch {
    _0x97b3d1_8.performanceObserver = null;
  }
  let _0x97b3d1_0 = performance.now();
  _0x97b3d1_8.performanceLastTune = _0x97b3d1_0;
  const _0x97b3d1_1 = _0x97b3d1_2 => {
    if (_0x97b3d1_8.performanceFrame = 0, !_0x97b3d1_8.activeGame) return;
    const _0x97b3d1_3 = _0x97b3d1_2 - _0x97b3d1_0;
    if (_0x97b3d1_0 = _0x97b3d1_2, "\x76\x69\x73\x69\x62\x6c\x65" === document.visibilityState && _0x97b3d1_3 > 0 && _0x97b3d1_3 < 250 && (_0x97b3d1_8.performanceSamples.push(_0x97b3d1_3), 
    _0x97b3d1_8.performanceSamples.length > 180 && _0x97b3d1_8.performanceSamples.shift()), 
    "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference && "\x76\x69\x73\x69\x62\x6c\x65" === document.visibilityState && _0x97b3d1_2 - _0x97b3d1_8.performanceLastTune >= 2e3) {
      const _0x97b3d1_0 = _0x97b3d1_8.performanceSamples.splice(0), _0x97b3d1_1 = _0x97b3d1_0.length ? _0x97b3d1_0.reduce((_0x97b3d1_0, _0x97b3d1_1) => _0x97b3d1_0 + _0x97b3d1_1, 0) / _0x97b3d1_0.length : 0, _0x97b3d1_3 = _0x97b3d1_0.filter(_0x97b3d1_0 => _0x97b3d1_0 >= 38).length, _0x97b3d1_5 = _0x97b3d1_40(), _0x97b3d1_6 = _0x97b3d1_0.length >= 12 && (_0x97b3d1_1 >= 25 || _0x97b3d1_3 >= 5 || _0x97b3d1_8.performanceLongTasks >= 2), _0x97b3d1_7 = _0x97b3d1_0.length >= 40 && _0x97b3d1_1 > 0 && _0x97b3d1_1 < 19.5 && 0 === _0x97b3d1_3 && 0 === _0x97b3d1_8.performanceLongTasks;
      _0x97b3d1_4.performance && (_0x97b3d1_4.performance.dataset.averageFrame = _0x97b3d1_1.toFixed(1), 
      _0x97b3d1_4.performance.dataset.slowFrames = String(_0x97b3d1_3), _0x97b3d1_4.performance.dataset.longTasks = String(_0x97b3d1_8.performanceLongTasks)), 
      _0x97b3d1_6 ? (_0x97b3d1_8.performanceStableWindows = 0, _0x97b3d1_42(Math.max(_0x97b3d1_5, _0x97b3d1_8.performanceLevel + 1), "\x73\x6c\x6f\x77\x64\x6f\x77\x6e")) : _0x97b3d1_7 && _0x97b3d1_8.performanceLevel > _0x97b3d1_5 ? (_0x97b3d1_8.performanceStableWindows += 1, 
      _0x97b3d1_8.performanceStableWindows >= 4 && (_0x97b3d1_8.performanceStableWindows = 0, 
      _0x97b3d1_42(_0x97b3d1_8.performanceLevel - 1, "\x72\x65\x63\x6f\x76\x65\x72\x65\x64"))) : _0x97b3d1_8.performanceStableWindows = 0, 
      _0x97b3d1_8.performanceLongTasks = 0, _0x97b3d1_8.performanceLastTune = _0x97b3d1_2;
    }
    _0x97b3d1_8.performanceFrame = requestAnimationFrame(_0x97b3d1_1);
  };
  _0x97b3d1_8.performanceFrame = requestAnimationFrame(_0x97b3d1_1);
}

function _0x97b3d1_46(_0x97b3d1_0, _0x97b3d1_1 = !1) {
  _0x97b3d1_4.playerLoading.classList.remove("\x64\x6f\x6e\x65"), _0x97b3d1_4.playerLoading.classList.toggle("\x66\x61\x69\x6c\x65\x64", _0x97b3d1_1), 
  _0x97b3d1_4.playerLoadingText.textContent = _0x97b3d1_0, _0x97b3d1_4.playerRetry.hidden = !_0x97b3d1_1;
}

function _0x97b3d1_47(_0x97b3d1_0 = _0x97b3d1_8.activeGame) {
  return _0x97b3d1_0 ? _0x97b3d1_0.sources?.length ? _0x97b3d1_0.sources : [ {
    url: _0x97b3d1_0.url,
    source: _0x97b3d1_0.source || "\x67\x61\x6d\x65",
    priority: _0x97b3d1_0.priority || 0
  } ] : [];
}

function _0x97b3d1_48(_0x97b3d1_0, _0x97b3d1_2) {
  return {
    local: _0x97b3d1_1 ? "\x41\x72\x63\x68\x69\x76\x65" : "\x4e\x79\x78\x20\x41\x72\x63\x68\x69\x76\x65",
    gn: "\x47\x4e\x20\x4d\x61\x74\x68",
    gms: "\x47\x4d\x53",
    lumin: "\x4c\x75\x6d\x69\x6e\x53\x44\x4b",
    catclass: "\x43\x61\x74\x43\x6c\x61\x73\x73",
    duckmath: "\x44\x75\x63\x6b\x4d\x61\x74\x68"
  }[_0x97b3d1_0?.source] || `\x50\x72\x6f\x76\x69\x64\x65\x72\x20${_0x97b3d1_2 + 1}`;
}

function _0x97b3d1_49() {
  if (!_0x97b3d1_4.provider) return;
  const _0x97b3d1_0 = _0x97b3d1_47(), _0x97b3d1_1 = _0x97b3d1_0.map(_0x97b3d1_48), _0x97b3d1_2 = new Map, _0x97b3d1_3 = new Map;
  _0x97b3d1_1.forEach(_0x97b3d1_0 => _0x97b3d1_2.set(_0x97b3d1_0, (_0x97b3d1_2.get(_0x97b3d1_0) || 0) + 1));
  const _0x97b3d1_5 = _0x97b3d1_0.map((_0x97b3d1_0, _0x97b3d1_4) => {
    const _0x97b3d1_5 = document.createElement("\x6f\x70\x74\x69\x6f\x6e"), _0x97b3d1_6 = _0x97b3d1_1[_0x97b3d1_4], _0x97b3d1_7 = (_0x97b3d1_3.get(_0x97b3d1_6) || 0) + 1;
    return _0x97b3d1_3.set(_0x97b3d1_6, _0x97b3d1_7), _0x97b3d1_5.value = String(_0x97b3d1_4), 
    _0x97b3d1_5.textContent = _0x97b3d1_2.get(_0x97b3d1_6) > 1 ? `${_0x97b3d1_6}\x20${_0x97b3d1_7}` : _0x97b3d1_6, 
    _0x97b3d1_5;
  });
  _0x97b3d1_4.provider.replaceChildren(..._0x97b3d1_5), _0x97b3d1_4.provider.value = String(Math.min(_0x97b3d1_8.activeSourceIndex, Math.max(0, _0x97b3d1_0.length - 1))), 
  _0x97b3d1_4.provider.disabled = _0x97b3d1_0.length < 2, _0x97b3d1_4.provider.title = _0x97b3d1_0.length > 1 ? `${_0x97b3d1_0.length}\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65` : "\x4f\x6e\x6c\x79\x20\x6f\x6e\x65\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x67\x61\x6d\x65";
}

function _0x97b3d1_4a() {
  if (_0x97b3d1_8.activeGame) {
    _0x97b3d1_3f(), _0x97b3d1_4.playerLoading.classList.add("\x64\x6f\x6e\x65");
    try {
      parent.postMessage({
        type: "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x6c\x61\x75\x6e\x63\x68\x65\x64"
      }, "\x2a");
    } catch {}
  }
}

function _0x97b3d1_4b() {
  _0x97b3d1_3f(), _0x97b3d1_4.frame.src = "\x61\x62\x6f\x75\x74\x3a\x62\x6c\x61\x6e\x6b", _0x97b3d1_46("\x54\x68\x69\x73\x20\x67\x61\x6d\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x20\x66\x72\x6f\x6d\x20\x61\x6e\x79\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x73\x6f\x75\x72\x63\x65\x2e", !0);
  try {
    parent.postMessage({
      type: "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x66\x61\x69\x6c\x65\x64"
    }, "\x2a");
  } catch {}
}

async function _0x97b3d1_4c(_0x97b3d1_0, _0x97b3d1_1 = "") {
  const _0x97b3d1_2 = _0x97b3d1_47();
  if (!_0x97b3d1_8.activeGame || _0x97b3d1_0 < 0 || _0x97b3d1_0 >= _0x97b3d1_2.length) return void _0x97b3d1_4b();
  _0x97b3d1_3f(), _0x97b3d1_8.activeSourceIndex = _0x97b3d1_0, _0x97b3d1_49(), _0x97b3d1_8.sourceAttempt += 1;
  const _0x97b3d1_3 = _0x97b3d1_8.sourceAttempt, _0x97b3d1_5 = _0x97b3d1_2[_0x97b3d1_0];
  _0x97b3d1_46(_0x97b3d1_1 && _0x97b3d1_2.length > 1 ? `\x54\x72\x79\x69\x6e\x67\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x73\x6f\x75\x72\x63\x65\u2026\x20${_0x97b3d1_0 + 1}\x20\x6f\x66\x20${_0x97b3d1_2.length}` : "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x67\x61\x6d\x65\u2026" + (_0x97b3d1_2.length > 1 ? `\x20\x53\x6f\x75\x72\x63\x65\x20${_0x97b3d1_0 + 1}\x20\x6f\x66\x20${_0x97b3d1_2.length}` : ""));
  try {
    let _0x97b3d1_0 = window;
    for (let _0x97b3d1_1 = 0; _0x97b3d1_1 < 4; _0x97b3d1_1 += 1) {
      if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x97b3d1_0.nyxInstallGameAdProtection) {
        _0x97b3d1_0.nyxInstallGameAdProtection(_0x97b3d1_4.frame);
        break;
      }
      if (_0x97b3d1_0.parent === _0x97b3d1_0) break;
      _0x97b3d1_0 = _0x97b3d1_0.parent;
    }
  } catch {}
  let _0x97b3d1_6 = _0x97b3d1_5.url;
  if ("\x6c\x75\x6d\x69\x6e" === _0x97b3d1_5.source) try {
    const _0x97b3d1_0 = await _0x97b3d1_1c(), _0x97b3d1_1 = await _0x97b3d1_0.getGameUrl(_0x97b3d1_5.luminId || _0x97b3d1_5.url.slice(11));
    if (_0x97b3d1_6 = String(_0x97b3d1_1?.url || ""), !_0x97b3d1_6) throw new Error("\x4c\x75\x6d\x69\x6e\x53\x44\x4b\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x72\x65\x74\x75\x72\x6e\x20\x61\x20\x70\x6c\x61\x79\x61\x62\x6c\x65\x20\x55\x52\x4c");
  } catch {
    return void (_0x97b3d1_3 === _0x97b3d1_8.sourceAttempt && _0x97b3d1_8.activeGame && _0x97b3d1_4d("\x54\x68\x65\x20\x4c\x75\x6d\x69\x6e\x20\x67\x61\x6d\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x70\x72\x65\x70\x61\x72\x65\x64\x2e"));
  }
  if (_0x97b3d1_3 !== _0x97b3d1_8.sourceAttempt || !_0x97b3d1_8.activeGame) return;
  _0x97b3d1_4.frame.src = _0x97b3d1_6;
  let _0x97b3d1_7 = !1;
  try {
    _0x97b3d1_7 = new URL(_0x97b3d1_6, location.href).origin === location.origin;
  } catch {}
  (_0x97b3d1_7 || "\x6c\x75\x6d\x69\x6e" === _0x97b3d1_5.source) && (_0x97b3d1_8.sourceTimer = setTimeout(() => {
    _0x97b3d1_3 === _0x97b3d1_8.sourceAttempt && _0x97b3d1_8.activeGame && _0x97b3d1_4c(_0x97b3d1_0 + 1, "\x54\x68\x65\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x73\x6f\x75\x72\x63\x65\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x66\x69\x6e\x69\x73\x68\x20\x6c\x6f\x61\x64\x69\x6e\x67\x2e");
  }, "\x6c\x75\x6d\x69\x6e" === _0x97b3d1_5.source ? 25e3 : 18e3));
}

function _0x97b3d1_4d(_0x97b3d1_0 = "") {
  if (!_0x97b3d1_8.activeGame) return;
  const _0x97b3d1_1 = _0x97b3d1_47(), _0x97b3d1_2 = _0x97b3d1_1[_0x97b3d1_8.activeSourceIndex];
  _0x97b3d1_2?.url && _0x97b3d1_8.failedSources.add(_0x97b3d1_2.url);
  let _0x97b3d1_3 = _0x97b3d1_8.activeSourceIndex + 1;
  for (;_0x97b3d1_3 < _0x97b3d1_1.length && _0x97b3d1_8.failedSources.has(_0x97b3d1_1[_0x97b3d1_3].url); ) _0x97b3d1_3 += 1;
  _0x97b3d1_3 < _0x97b3d1_1.length ? _0x97b3d1_4c(_0x97b3d1_3, _0x97b3d1_0) : _0x97b3d1_4b();
}

async function _0x97b3d1_4e(_0x97b3d1_0, _0x97b3d1_1 = !0, _0x97b3d1_2 = "") {
  if (!_0x97b3d1_0) return;
  _0x97b3d1_8.lastFocused = document.activeElement, _0x97b3d1_8.activeGame = _0x97b3d1_0, 
  _0x97b3d1_8.performanceLevel = "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference ? _0x97b3d1_40() : "\x62\x61\x6c\x61\x6e\x63\x65\x64" === _0x97b3d1_8.performancePreference ? 1 : "\x62\x6f\x6f\x73\x74" === _0x97b3d1_8.performancePreference ? 2 : 0, 
  _0x97b3d1_8.performanceReason = "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference && _0x97b3d1_8.performanceLevel ? "\x64\x65\x76\x69\x63\x65" : "\x72\x65\x61\x64\x79";
  const _0x97b3d1_5 = _0x97b3d1_47(_0x97b3d1_0), _0x97b3d1_6 = _0x97b3d1_2 ? _0x97b3d1_5.findIndex(_0x97b3d1_0 => _0x97b3d1_0.source === _0x97b3d1_2 && !_0x97b3d1_8.failedSources.has(_0x97b3d1_0.url)) : -1, _0x97b3d1_7 = _0x97b3d1_6 >= 0 ? _0x97b3d1_6 : _0x97b3d1_5.findIndex(_0x97b3d1_0 => !_0x97b3d1_8.failedSources.has(_0x97b3d1_0.url));
  if (_0x97b3d1_8.activeSourceIndex = _0x97b3d1_7 >= 0 ? _0x97b3d1_7 : 0, _0x97b3d1_49(), 
  _0x97b3d1_4.playerTitle.textContent = _0x97b3d1_3(_0x97b3d1_0.title), _0x97b3d1_4.playerTitle.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x97b3d1_0.title), 
  _0x97b3d1_4.frame.title = _0x97b3d1_0.title, _0x97b3d1_4.player.hidden = !1, _0x97b3d1_43(), 
  _0x97b3d1_45(), _0x97b3d1_c = await _0x97b3d1_20(_0x97b3d1_0), _0x97b3d1_8.activeGame === _0x97b3d1_0) {
    _0x97b3d1_4c(_0x97b3d1_8.activeSourceIndex), _0x97b3d1_4.close.focus(), _0x97b3d1_1 && _0x97b3d1_3e(_0x97b3d1_0.key);
    try {
      parent.postMessage({
        type: "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x6c\x6f\x61\x64\x69\x6e\x67"
      }, "\x2a");
    } catch {}
  }
}

function _0x97b3d1_4f() {
  _0x97b3d1_21(_0x97b3d1_8.activeGame, _0x97b3d1_c), _0x97b3d1_c = {}, _0x97b3d1_3f(), 
  _0x97b3d1_8.sourceAttempt += 1, _0x97b3d1_8.activeGame = null, _0x97b3d1_8.performanceLevel = 0, 
  _0x97b3d1_8.performanceReason = "\x72\x65\x61\x64\x79", _0x97b3d1_44(), _0x97b3d1_4.frame.src = "\x61\x62\x6f\x75\x74\x3a\x62\x6c\x61\x6e\x6b", 
  _0x97b3d1_4.player.hidden = !0, _0x97b3d1_43(), _0x97b3d1_46("\x4c\x6f\x61\x64\x69\x6e\x67\x20\x67\x61\x6d\x65\u2026"), 
  _0x97b3d1_3e(""), _0x97b3d1_8.lastFocused?.focus?.();
}

async function _0x97b3d1_50() {
  _0x97b3d1_8.manifest = await _0x97b3d1_1a("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x67\x61\x6d\x65\x73\x2f\x67\x61\x6d\x65\x73\x2e\x6a\x73\x6f\x6e", "\x43\x61\x74\x61\x6c\x6f\x67\x20\x6d\x61\x6e\x69\x66\x65\x73\x74", {
    attempts: 3
  });
  const _0x97b3d1_0 = Array.isArray(_0x97b3d1_8.manifest.catalogs) ? _0x97b3d1_8.manifest.catalogs : [], _0x97b3d1_1 = new Map, _0x97b3d1_2 = [];
  let _0x97b3d1_3 = 0, _0x97b3d1_5 = !1;
  const _0x97b3d1_6 = new URLSearchParams(location.search).get("\x67\x61\x6d\x65");
  if (!_0x97b3d1_0.length) throw new Error("\x43\x61\x74\x61\x6c\x6f\x67\x20\x6d\x61\x6e\x69\x66\x65\x73\x74\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x63\x6f\x6e\x74\x61\x69\x6e\x20\x61\x6e\x79\x20\x6c\x69\x62\x72\x61\x72\x69\x65\x73");
  if (await Promise.all(_0x97b3d1_0.map(async _0x97b3d1_7 => {
    try {
      _0x97b3d1_1.set(_0x97b3d1_7.id, await _0x97b3d1_31(_0x97b3d1_7));
    } catch (_0x97b3d1_9) {
      _0x97b3d1_2.push({
        id: _0x97b3d1_7.id,
        error: _0x97b3d1_9
      }), console.warn(`\x47\x61\x6d\x65\x20\x6c\x69\x62\x72\x61\x72\x79\x20${_0x97b3d1_7.id}\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65`, _0x97b3d1_9);
    } finally {
      _0x97b3d1_3 += 1, (() => {
        _0x97b3d1_8.games = _0x97b3d1_33([ ..._0x97b3d1_1.values() ]), _0x97b3d1_8.gamesByKey = new Map(_0x97b3d1_8.games.map(_0x97b3d1_0 => [ _0x97b3d1_0.key, _0x97b3d1_0 ])), 
        "\x61\x6c\x6c" === _0x97b3d1_8.activeLibrary || _0x97b3d1_3a(_0x97b3d1_8.activeLibrary) || (_0x97b3d1_8.activeLibrary = "\x61\x6c\x6c"), 
        _0x97b3d1_3b(), _0x97b3d1_39();
        const _0x97b3d1_7 = _0x97b3d1_0.length - _0x97b3d1_3;
        _0x97b3d1_7 > 0 && (_0x97b3d1_4.count.textContent += `\x20\xb7\x20${_0x97b3d1_7}\x20${1 === _0x97b3d1_7 ? "\x6c\x69\x62\x72\x61\x72\x79" : "\x6c\x69\x62\x72\x61\x72\x69\x65\x73"}\x20\x6c\x6f\x61\x64\x69\x6e\x67`), 
        _0x97b3d1_3 === _0x97b3d1_0.length && _0x97b3d1_2.length && (_0x97b3d1_4.count.textContent += `\x20\xb7\x20${_0x97b3d1_2.length}\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65`), 
        _0x97b3d1_4.progress.classList.toggle("\x64\x6f\x6e\x65", _0x97b3d1_8.games.length > 0 || _0x97b3d1_3 === _0x97b3d1_0.length), 
        0 === _0x97b3d1_8.games.length && _0x97b3d1_3 < _0x97b3d1_0.length && (_0x97b3d1_4.empty.hidden = !0), 
        !_0x97b3d1_5 && _0x97b3d1_6 && _0x97b3d1_8.gamesByKey.has(_0x97b3d1_6) && (_0x97b3d1_5 = !0, 
        _0x97b3d1_4e(_0x97b3d1_8.gamesByKey.get(_0x97b3d1_6), !1));
      })();
    }
  })), !_0x97b3d1_8.games.length) throw new Error("\x4e\x6f\x20\x67\x61\x6d\x65\x20\x6c\x69\x62\x72\x61\x72\x79\x20\x77\x61\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
}

_0x97b3d1_4.grid.addEventListener("\x63\x6c\x69\x63\x6b", _0x97b3d1_0 => {
  const _0x97b3d1_1 = _0x97b3d1_0.target.closest("\x5b\x64\x61\x74\x61\x2d\x67\x61\x6d\x65\x2d\x6b\x65\x79\x5d");
  _0x97b3d1_1 && _0x97b3d1_4e(_0x97b3d1_8.gamesByKey.get(_0x97b3d1_1.dataset.gameKey), !0, _0x97b3d1_1.dataset.preferredSource);
}), _0x97b3d1_4.search.addEventListener("\x69\x6e\x70\x75\x74", _0x97b3d1_3c), _0x97b3d1_4.libraryTabs.addEventListener("\x63\x6c\x69\x63\x6b", _0x97b3d1_0 => {
  const _0x97b3d1_1 = _0x97b3d1_0.target.closest("\x5b\x64\x61\x74\x61\x2d\x6c\x69\x62\x72\x61\x72\x79\x5d");
  _0x97b3d1_1 && _0x97b3d1_1.dataset.library !== _0x97b3d1_8.activeLibrary && (_0x97b3d1_8.activeLibrary = _0x97b3d1_1.dataset.library, 
  _0x97b3d1_3b(), _0x97b3d1_3c());
}), _0x97b3d1_4.sort.addEventListener("\x63\x68\x61\x6e\x67\x65", _0x97b3d1_3c), _0x97b3d1_4.previousPage.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x97b3d1_3d(_0x97b3d1_8.page - 1)), 
_0x97b3d1_4.nextPage.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x97b3d1_3d(_0x97b3d1_8.page + 1)), 
_0x97b3d1_4.close.addEventListener("\x63\x6c\x69\x63\x6b", _0x97b3d1_4f), _0x97b3d1_4.provider?.addEventListener("\x63\x68\x61\x6e\x67\x65", () => {
  const _0x97b3d1_0 = Number(_0x97b3d1_4.provider.value), _0x97b3d1_1 = _0x97b3d1_47();
  !Number.isInteger(_0x97b3d1_0) || _0x97b3d1_0 < 0 || _0x97b3d1_0 >= _0x97b3d1_1.length || (_0x97b3d1_8.failedSources.delete(_0x97b3d1_1[_0x97b3d1_0].url), 
  _0x97b3d1_4c(_0x97b3d1_0, "\x53\x77\x69\x74\x63\x68\x69\x6e\x67\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x2e\x2e\x2e"));
}), _0x97b3d1_4.performance?.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  const _0x97b3d1_0 = [ "\x61\x75\x74\x6f", "\x62\x61\x6c\x61\x6e\x63\x65\x64", "\x62\x6f\x6f\x73\x74", "\x6f\x66\x66" ];
  _0x97b3d1_8.performancePreference = _0x97b3d1_0[(_0x97b3d1_0.indexOf(_0x97b3d1_8.performancePreference) + 1) % _0x97b3d1_0.length], 
  _0x97b3d1_8.performanceLevel = "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference ? _0x97b3d1_40() : "\x62\x61\x6c\x61\x6e\x63\x65\x64" === _0x97b3d1_8.performancePreference ? 1 : "\x62\x6f\x6f\x73\x74" === _0x97b3d1_8.performancePreference ? 2 : 0, 
  _0x97b3d1_8.performanceReason = "\x61\x75\x74\x6f" === _0x97b3d1_8.performancePreference && _0x97b3d1_8.performanceLevel ? "\x64\x65\x76\x69\x63\x65" : "\x6d\x61\x6e\x75\x61\x6c", 
  _0x97b3d1_8.performanceSamples = [], _0x97b3d1_8.performanceLongTasks = 0, _0x97b3d1_8.performanceStableWindows = 0, 
  localStorage.setItem("\x6e\x79\x78\x2e\x67\x61\x6d\x65\x50\x65\x72\x66\x6f\x72\x6d\x61\x6e\x63\x65\x4d\x6f\x64\x65", _0x97b3d1_8.performancePreference), 
  _0x97b3d1_43();
}), _0x97b3d1_4.reload.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x97b3d1_8.activeGame && _0x97b3d1_4c(_0x97b3d1_8.activeSourceIndex);
}), _0x97b3d1_4.playerRetry.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  for (const _0x97b3d1_0 of _0x97b3d1_47()) _0x97b3d1_8.failedSources.delete(_0x97b3d1_0.url);
  _0x97b3d1_4c(0);
}), _0x97b3d1_4.fullscreen.addEventListener("\x63\x6c\x69\x63\x6b", async () => {
  try {
    document.fullscreenElement ? await document.exitFullscreen() : await _0x97b3d1_4.frame.parentElement.requestFullscreen();
  } catch {}
}), _0x97b3d1_4.frame.addEventListener("\x6c\x6f\x61\x64", () => {
  if (_0x97b3d1_4.player.hidden || !_0x97b3d1_8.activeGame || "\x61\x62\x6f\x75\x74\x3a\x62\x6c\x61\x6e\x6b" === _0x97b3d1_4.frame.src) return;
  const _0x97b3d1_0 = _0x97b3d1_47()[_0x97b3d1_8.activeSourceIndex];
  let _0x97b3d1_1 = !1, _0x97b3d1_2 = !1;
  try {
    const _0x97b3d1_3 = new URL(_0x97b3d1_0?.url || "", location.href);
    _0x97b3d1_1 = _0x97b3d1_3.origin === location.origin, _0x97b3d1_2 = _0x97b3d1_1 && /^\/assets\/(?:ugs|gn-math|gms-games|reds-misc)\/play\.html$/i.test(_0x97b3d1_3.pathname), 
    _0x97b3d1_1 && "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x67\x61\x6d\x65\x73\x2f\x72\x65\x6d\x6f\x74\x65\x2d\x70\x6c\x61\x79\x2e\x68\x74\x6d\x6c" === _0x97b3d1_3.pathname && (_0x97b3d1_2 = !0);
  } catch {}
  _0x97b3d1_1 && !_0x97b3d1_2 || setTimeout(_0x97b3d1_4a, 900);
}), _0x97b3d1_4.frame.addEventListener("\x65\x72\x72\x6f\x72", () => _0x97b3d1_4d("\x54\x68\x65\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x73\x6f\x75\x72\x63\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6f\x70\x65\x6e\x65\x64\x2e")), 
window.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x97b3d1_0 => {
  if (_0x97b3d1_0.origin === location.origin && _0x97b3d1_0.source === _0x97b3d1_4.cloudFrame.contentWindow && "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x71\x75\x65\x73\x74" === _0x97b3d1_0.data?.type) {
    const _0x97b3d1_1 = String(_0x97b3d1_0.data.requestId || "").slice(0, 120);
    if (!_0x97b3d1_1 || parent === window) return;
    const _0x97b3d1_2 = `\x67\x61\x6d\x65\x73\x2d\x63\x6c\x6f\x75\x64\x2d${Date.now().toString(36)}\x2d${Math.random().toString(36).slice(2, 9)}`;
    return _0x97b3d1_d.set(_0x97b3d1_2, {
      childRequestId: _0x97b3d1_1,
      source: _0x97b3d1_0.source
    }), setTimeout(() => _0x97b3d1_d.delete(_0x97b3d1_2), 5e3), void parent.postMessage({
      type: "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x71\x75\x65\x73\x74",
      requestId: _0x97b3d1_2
    }, location.origin);
  }
  if (_0x97b3d1_0.origin === location.origin && _0x97b3d1_0.source === parent && "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65" === _0x97b3d1_0.data?.type) {
    const _0x97b3d1_1 = String(_0x97b3d1_0.data.requestId || ""), _0x97b3d1_2 = _0x97b3d1_d.get(_0x97b3d1_1);
    if (!_0x97b3d1_2) return;
    return _0x97b3d1_d.delete(_0x97b3d1_1), void _0x97b3d1_2.source?.postMessage({
      type: "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65",
      requestId: _0x97b3d1_2.childRequestId,
      token: String(_0x97b3d1_0.data.token || "")
    }, location.origin);
  }
  if (_0x97b3d1_0.origin !== location.origin || _0x97b3d1_0.source !== _0x97b3d1_4.cloudFrame.contentWindow || "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x73\x2d\x76\x69\x65\x77" !== _0x97b3d1_0.data?.type) if (_0x97b3d1_0.origin !== location.origin || _0x97b3d1_0.source !== _0x97b3d1_4.cloudFrame.contentWindow || "\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x70\x6c\x61\x79\x65\x72" !== _0x97b3d1_0.data?.type) {
    if (_0x97b3d1_0.origin === location.origin && "\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x65\x2d\x72\x65\x73\x75\x6c\x74" === _0x97b3d1_0.data?.type) {
      const _0x97b3d1_1 = _0x97b3d1_a.get(String(_0x97b3d1_0.data.requestId || ""));
      return void (_0x97b3d1_1 && (clearTimeout(_0x97b3d1_1.timer), _0x97b3d1_a.delete(String(_0x97b3d1_0.data.requestId || "")), 
      _0x97b3d1_0.data.error ? _0x97b3d1_1.reject(new Error(_0x97b3d1_0.data.error)) : _0x97b3d1_1.resolve(_0x97b3d1_0.data)));
    }
    _0x97b3d1_0.source === _0x97b3d1_4.frame.contentWindow && _0x97b3d1_8.activeGame && ("\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x6c\x61\x75\x6e\x63\x68\x65\x64" === _0x97b3d1_0.data?.type && _0x97b3d1_4a(), 
    "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x66\x61\x69\x6c\x65\x64" === _0x97b3d1_0.data?.type && _0x97b3d1_4d("\x54\x68\x65\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x73\x6f\x75\x72\x63\x65\x20\x72\x65\x70\x6f\x72\x74\x65\x64\x20\x61\x20\x6c\x6f\x61\x64\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x2e"));
  } else document.body.classList.toggle("\x63\x6c\x6f\x75\x64\x2d\x73\x65\x73\x73\x69\x6f\x6e\x2d\x61\x63\x74\x69\x76\x65", !0 === _0x97b3d1_0.data.active); else _0x97b3d1_1d(_0x97b3d1_0.data.view);
}), _0x97b3d1_4.cloudFrame.addEventListener("\x6c\x6f\x61\x64", () => {
  document.body.classList.remove("\x63\x6c\x6f\x75\x64\x2d\x73\x65\x73\x73\x69\x6f\x6e\x2d\x61\x63\x74\x69\x76\x65");
}), addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => _0x97b3d1_21(_0x97b3d1_8.activeGame, _0x97b3d1_c), {
  passive: !0
}), document.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x97b3d1_0 => {
  "\x45\x73\x63\x61\x70\x65" !== _0x97b3d1_0.key || _0x97b3d1_4.player.hidden || document.fullscreenElement || _0x97b3d1_4f();
}), _0x97b3d1_50().catch(_0x97b3d1_0 => {
  console.error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x6c\x6f\x61\x64\x20\x67\x61\x6d\x65\x20\x6c\x69\x62\x72\x61\x72\x79", _0x97b3d1_0), _0x97b3d1_4.progress.classList.add("\x64\x6f\x6e\x65"), 
  _0x97b3d1_4.count.textContent = "\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x20\x74\x68\x65\x20\x67\x61\x6d\x65\x20\x6c\x69\x62\x72\x61\x72\x79", _0x97b3d1_4.empty.querySelector("\x68\x32").textContent = "\x4c\x69\x62\x72\x61\x72\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", 
  _0x97b3d1_4.empty.querySelector("\x70").textContent = _0x97b3d1_1 ? "\x52\x65\x6c\x6f\x61\x64\x20\x44\x72\x6f\x70\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e" : "\x52\x65\x6c\x6f\x61\x64\x20\x4e\x79\x78\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e", 
  _0x97b3d1_4.empty.hidden = !1;
});
