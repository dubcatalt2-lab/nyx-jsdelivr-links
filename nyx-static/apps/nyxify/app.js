const volatileMusicSettings = new Map, musicStorage = {
  getItem(_0x84b660_0) {
    if (volatileMusicSettings.has(_0x84b660_0)) return volatileMusicSettings.get(_0x84b660_0);
    try {
      return localStorage.getItem(_0x84b660_0);
    } catch {
      return null;
    }
  },
  setItem(_0x84b660_0, _0x84b660_1) {
    try {
      localStorage.setItem(_0x84b660_0, _0x84b660_1), volatileMusicSettings.delete(_0x84b660_0);
    } catch {
      volatileMusicSettings.set(_0x84b660_0, String(_0x84b660_1));
    }
  }
}, audio = document.getElementById("\x61\x75\x64\x69\x6f"), playerEl = document.getElementById("\x70\x6c\x61\x79\x65\x72"), trackList = document.getElementById("\x74\x72\x61\x63\x6b\x4c\x69\x73\x74"), cardGrid = document.getElementById("\x63\x61\x72\x64\x47\x72\x69\x64"), detailView = document.getElementById("\x64\x65\x74\x61\x69\x6c\x56\x69\x65\x77"), emptyState = document.getElementById("\x65\x6d\x70\x74\x79\x53\x74\x61\x74\x65"), emptyTitle = document.getElementById("\x65\x6d\x70\x74\x79\x54\x69\x74\x6c\x65"), emptySub = document.getElementById("\x65\x6d\x70\x74\x79\x53\x75\x62"), crumbEl = document.getElementById("\x63\x72\x75\x6d\x62"), crumbText = document.getElementById("\x63\x72\x75\x6d\x62\x54\x65\x78\x74"), seekBar = document.getElementById("\x73\x65\x65\x6b\x42\x61\x72"), playBtn = document.getElementById("\x70\x6c\x61\x79\x42\x74\x6e"), playIcon = document.getElementById("\x70\x6c\x61\x79\x49\x63\x6f\x6e"), searchInput = document.getElementById("\x73\x65\x61\x72\x63\x68\x49\x6e\x70\x75\x74"), playlistList = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x4c\x69\x73\x74"), sidebarPlaylistList = document.getElementById("\x73\x69\x64\x65\x62\x61\x72\x50\x6c\x61\x79\x6c\x69\x73\x74\x4c\x69\x73\x74"), playlistSync = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x53\x79\x6e\x63"), playlistDialog = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x44\x69\x61\x6c\x6f\x67"), playlistChoices = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x43\x68\x6f\x69\x63\x65\x73"), playlistName = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x4e\x61\x6d\x65"), playlistMessage = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x4d\x65\x73\x73\x61\x67\x65"), pPlaylist = document.getElementById("\x70\x50\x6c\x61\x79\x6c\x69\x73\x74"), nowPlayingModule = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x4d\x6f\x64\x75\x6c\x65"), nowPlayingMedia = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x4d\x65\x64\x69\x61"), nowPlayingArt = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x41\x72\x74"), nowPlayingContext = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x43\x6f\x6e\x74\x65\x78\x74"), nowPlayingTitle = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x54\x69\x74\x6c\x65"), nowPlayingArtist = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x41\x72\x74\x69\x73\x74"), nowPlayingAlbum = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x41\x6c\x62\x75\x6d"), nowPlayingPlaylists = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x50\x6c\x61\x79\x6c\x69\x73\x74\x73"), nowPlayingNext = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x4e\x65\x78\x74"), fullTrackStage = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x53\x74\x61\x67\x65"), fullTrackTitle = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x54\x69\x74\x6c\x65"), fullTrackStatus = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x53\x74\x61\x74\x75\x73"), fullTrackVideo = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x56\x69\x64\x65\x6f"), fullTrackVideoLabel = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x56\x69\x64\x65\x6f\x4c\x61\x62\x65\x6c"), fullTrackFullscreen = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e");

let curtrack = null, results = [], query = "", mode = "\x68\x6f\x6d\x65", homeData = {
  tracks: [],
  artists: [],
  albums: []
}, homeLoading = !0, homeError = "", playbackContext = "\x4e\x79\x78\x69\x66\x79", detail = null, reqid = 0, dragging = !1, activePlaylistId = "", playlistAddTargetId = "", playlistDialogTrack = null, playlists = [], playlistToken = "", playlistTokenExpiresAt = 0, playlistAuthPromise = null, playlistSaveChain = Promise.resolve(), playlistMutationRevision = 0;

const playlistCoverDataLimit = 18e3, playlistCoverFileLimit = 8388608, playlistAccentCache = new Map;

let queue = [], qindex = -1, playbackmode = "\x69\x64\x6c\x65", octaveplayer = null, octaveplaying = !1, octaverequest = 0, octaveprogress = null, octaveapipromise = null, octavepending = !1, octavevideo = null, prefernowplayingvideo = "\x31" === musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x69\x64\x65\x6f\x5f\x69\x6e\x5f\x63\x6f\x76\x65\x72");

const nyxtubedirectapi = window.NyxTubePlayerCore.createDirectYoutubeApi({
  optimisticState: !1
}), fullTrackMatchCache = new Map, fullTrackMatchInflight = new Map, fullTrackMatchStorageKey = "\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x66\x75\x6c\x6c\x5f\x74\x72\x61\x63\x6b\x5f\x6d\x61\x74\x63\x68\x65\x73\x5f\x76\x31", fullTrackMatchTtlMs = 3e5, fullTrackMatchLimit = 24;

let fullTrackPrefetchRevision = 0, shuffleon = "\x31" === musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x73\x68\x75\x66\x66\x6c\x65"), repeatmode = musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x72\x65\x70\x65\x61\x74") || "\x6f\x66\x66";

[ "\x6f\x66\x66", "\x6f\x6e\x65", "\x61\x6c\x6c" ].includes(repeatmode) || (repeatmode = "\x6f\x66\x66");

let playershown = !1, queueopen = !1;

const coverFallback = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x69\x63\x6f\x6e\x73\x2f\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x6e\x79\x78\x69\x66\x79\x2e\x73\x76\x67\x3f\x76\x3d\x33";

function setcover(_0x84b660_0, _0x84b660_1, _0x84b660_2 = "") {
  if (!_0x84b660_0) return;
  const _0x84b660_3 = Boolean(String(_0x84b660_1 || "").trim());
  _0x84b660_3 ? (delete _0x84b660_0.dataset.coverFallback, _0x84b660_0.classList.remove("\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b")) : (_0x84b660_0.dataset.coverFallback = "\x31", 
  _0x84b660_0.classList.add("\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b")), _0x84b660_0.alt = _0x84b660_2, _0x84b660_0.src = _0x84b660_3 ? _0x84b660_1 : coverFallback;
}

function fmt(_0x84b660_0) {
  _0x84b660_0 = Math.max(0, Math.floor(_0x84b660_0 || 0));
  const _0x84b660_1 = Math.floor(_0x84b660_0 / 3600), _0x84b660_2 = Math.floor(_0x84b660_0 % 3600 / 60), _0x84b660_3 = _0x84b660_0 % 60;
  return _0x84b660_1 ? `${_0x84b660_1}\x3a${String(_0x84b660_2).padStart(2, "\x30")}\x3a${String(_0x84b660_3).padStart(2, "\x30")}` : `${_0x84b660_2}\x3a${String(_0x84b660_3).padStart(2, "\x30")}`;
}

function esc(_0x84b660_0) {
  const _0x84b660_1 = document.createElement("\x64\x69\x76");
  return _0x84b660_1.textContent = _0x84b660_0 ?? "", _0x84b660_1.innerHTML;
}

async function nyxifyjson(_0x84b660_0, _0x84b660_1 = {}) {
  const _0x84b660_2 = new AbortController, _0x84b660_3 = _0x84b660_1.signal ? null : setTimeout(() => _0x84b660_2.abort(), 25e3);
  try {
    const _0x84b660_3 = await fetch(_0x84b660_0, {
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      ..._0x84b660_1,
      signal: _0x84b660_1.signal || _0x84b660_2.signal
    }), _0x84b660_5 = String(_0x84b660_3.headers.get("\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65") || "").toLowerCase(), _0x84b660_6 = await _0x84b660_3.text();
    let _0x84b660_7 = null;
    if (_0x84b660_6 && (_0x84b660_5.includes("\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e") || /^[\s\r\n]*[\[{]/.test(_0x84b660_6))) try {
      _0x84b660_7 = JSON.parse(_0x84b660_6);
    } catch (_0x84b660_4) {}
    if (!_0x84b660_3.ok) throw Object.assign(new Error(_0x84b660_7?.error || `\x4e\x79\x78\x69\x66\x79\x20\x69\x73\x20\x74\x65\x6d\x70\x6f\x72\x61\x72\x69\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x28${_0x84b660_3.status}\x29\x2e`), {
      status: _0x84b660_3.status,
      retryAfter: Math.min(5, Math.max(1, Number(_0x84b660_3.headers.get("\x72\x65\x74\x72\x79\x2d\x61\x66\x74\x65\x72")) || 1))
    });
    if (!_0x84b660_7 || "\x6f\x62\x6a\x65\x63\x74" != typeof _0x84b660_7) throw new Error("\x4e\x79\x78\x69\x66\x79\x20\x72\x65\x63\x65\x69\x76\x65\x64\x20\x61\x20\x77\x65\x62\x20\x70\x61\x67\x65\x20\x69\x6e\x73\x74\x65\x61\x64\x20\x6f\x66\x20\x6d\x75\x73\x69\x63\x20\x64\x61\x74\x61\x2e\x20\x52\x65\x6c\x6f\x61\x64\x20\x4e\x79\x78\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    return _0x84b660_7;
  } finally {
    clearTimeout(_0x84b660_3);
  }
}

function fulltrackcachekey(_0x84b660_0) {
  return JSON.stringify([ String(_0x84b660_0?.catalog || "").toLowerCase(), String(_0x84b660_0?.id || ""), String(_0x84b660_0?.title || "").trim().toLowerCase(), String(_0x84b660_0?.artist || "").trim().toLowerCase(), Math.max(0, Number(_0x84b660_0?.duration) || 0) ]);
}

function validfulltrackmatch(_0x84b660_0) {
  return "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_0?.mode && /^\/api\/nyxify\/audio\/\d{1,16}$/.test(String(_0x84b660_0.streamUrl || ""));
}

function persistfulltrackmatches() {
  try {
    const _0x84b660_0 = Date.now(), _0x84b660_1 = [ ...fullTrackMatchCache.entries() ].filter(([, _0x84b660_1]) => _0x84b660_1?.expiresAt > _0x84b660_0 && validfulltrackmatch(_0x84b660_1.match)).slice(-24).map(([_0x84b660_0, _0x84b660_1]) => ({
      key: _0x84b660_0,
      expiresAt: _0x84b660_1.expiresAt,
      match: _0x84b660_1.match
    }));
    sessionStorage.setItem(fullTrackMatchStorageKey, JSON.stringify(_0x84b660_1));
  } catch (_0x84b660_0) {}
}

function restorefulltrackmatches() {
  try {
    const _0x84b660_0 = Date.now(), _0x84b660_1 = JSON.parse(sessionStorage.getItem(fullTrackMatchStorageKey) || "\x5b\x5d");
    if (!Array.isArray(_0x84b660_1)) return;
    _0x84b660_1.slice(-24).forEach(_0x84b660_1 => {
      "\x73\x74\x72\x69\x6e\x67" == typeof _0x84b660_1?.key && _0x84b660_1.expiresAt > _0x84b660_0 && validfulltrackmatch(_0x84b660_1.match) && fullTrackMatchCache.set(_0x84b660_1.key, {
        expiresAt: _0x84b660_1.expiresAt,
        match: _0x84b660_1.match
      });
    });
  } catch (_0x84b660_0) {}
}

function cachefulltrackmatch(_0x84b660_0, _0x84b660_1) {
  if (!validfulltrackmatch(_0x84b660_1)) return _0x84b660_1;
  const _0x84b660_2 = fulltrackcachekey(_0x84b660_0);
  for (fullTrackMatchCache.delete(_0x84b660_2), fullTrackMatchCache.set(_0x84b660_2, {
    expiresAt: Date.now() + 3e5,
    match: _0x84b660_1
  }); fullTrackMatchCache.size > 24; ) fullTrackMatchCache.delete(fullTrackMatchCache.keys().next().value);
  return persistfulltrackmatches(), _0x84b660_1;
}

function evictfulltrackmatch(_0x84b660_0) {
  _0x84b660_0 && (fullTrackMatchCache.delete(fulltrackcachekey(_0x84b660_0)), persistfulltrackmatches());
}

function fulltrackurl(_0x84b660_0) {
  const _0x84b660_1 = new URLSearchParams({
    title: String(_0x84b660_0?.title || ""),
    artist: String(_0x84b660_0?.artist || ""),
    duration: String(Math.max(0, Number(_0x84b660_0?.duration) || 0)),
    catalog: String(_0x84b660_0?.catalog || "")
  });
  return `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x70\x6c\x61\x79\x62\x61\x63\x6b\x2f${encodeURIComponent(_0x84b660_0?.id || "")}\x3f${_0x84b660_1.toString()}`;
}

function getfulltrackmatch(_0x84b660_0, _0x84b660_1 = !1) {
  const _0x84b660_2 = fulltrackcachekey(_0x84b660_0), _0x84b660_3 = fullTrackMatchCache.get(_0x84b660_2);
  if (_0x84b660_3?.expiresAt > Date.now() && validfulltrackmatch(_0x84b660_3.match)) return fullTrackMatchCache.delete(_0x84b660_2), 
  fullTrackMatchCache.set(_0x84b660_2, _0x84b660_3), Promise.resolve(_0x84b660_3.match);
  _0x84b660_3 && fullTrackMatchCache.delete(_0x84b660_2), fullTrackMatchInflight.get(_0x84b660_2)?.controller.signal.aborted && fullTrackMatchInflight.delete(_0x84b660_2);
  const _0x84b660_4 = fullTrackMatchInflight.get(_0x84b660_2);
  if (_0x84b660_4) return !_0x84b660_1 && _0x84b660_4.background ? _0x84b660_4.promise.catch(_0x84b660_1 => {
    if (curtrack && fulltrackcachekey(curtrack) !== _0x84b660_2) throw _0x84b660_1;
    return getfulltrackmatch(_0x84b660_0);
  }) : _0x84b660_4.promise;
  if (_0x84b660_1 && ([ ...fullTrackMatchInflight.values() ].some(_0x84b660_0 => _0x84b660_0.background) || !navigator.onLine || navigator.connection?.saveData)) return Promise.resolve(null);
  const _0x84b660_5 = new AbortController, _0x84b660_6 = (async () => {
    for (let _0x84b660_3 = 0; _0x84b660_3 < (_0x84b660_1 ? 1 : 2); _0x84b660_3++) {
      const _0x84b660_4 = setTimeout(() => _0x84b660_5.abort(), _0x84b660_1 ? 8e3 : 25e3);
      try {
        return await nyxifyjson(fulltrackurl(_0x84b660_0) + (_0x84b660_1 ? "\x26\x70\x72\x65\x66\x65\x74\x63\x68\x3d\x31" : ""), {
          signal: _0x84b660_5.signal
        });
      } catch (_0x84b660_2) {
        if (_0x84b660_5.signal.aborted) throw new Error("\x4d\x75\x73\x69\x63\x20\x6c\x6f\x6f\x6b\x75\x70\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x6f\x72\x20\x77\x61\x73\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x2e\x20\x53\x65\x6c\x65\x63\x74\x20\x74\x68\x65\x20\x73\x6f\x6e\x67\x20\x74\x6f\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
        if (_0x84b660_1 || _0x84b660_3 || !navigator.onLine || ![ 429, 502, 503, 504 ].includes(_0x84b660_2.status) && "\x54\x79\x70\x65\x45\x72\x72\x6f\x72" !== _0x84b660_2.name) throw _0x84b660_2;
        if (await new Promise(_0x84b660_0 => setTimeout(_0x84b660_0, 1e3 * (_0x84b660_2.retryAfter || 1))), 
        _0x84b660_5.signal.aborted) throw _0x84b660_2;
      } finally {
        clearTimeout(_0x84b660_4);
      }
    }
  })().then(_0x84b660_1 => cachefulltrackmatch(_0x84b660_0, _0x84b660_1)).finally(() => {
    fullTrackMatchInflight.get(_0x84b660_2)?.controller === _0x84b660_5 && fullTrackMatchInflight.delete(_0x84b660_2);
  });
  return fullTrackMatchInflight.set(_0x84b660_2, {
    promise: _0x84b660_6,
    controller: _0x84b660_5,
    background: _0x84b660_1
  }), _0x84b660_6;
}

function schedulequeueprefetch() {
  const _0x84b660_0 = ++fullTrackPrefetchRevision, _0x84b660_1 = queue[qindex + 1] || ("\x61\x6c\x6c" === repeatmode ? queue[0] : null);
  if (!_0x84b660_1 || _0x84b660_1.id === curtrack?.id) return;
  const _0x84b660_2 = () => {
    _0x84b660_0 === fullTrackPrefetchRevision && getfulltrackmatch(_0x84b660_1, !0).catch(() => {});
  };
  "\x72\x65\x71\x75\x65\x73\x74\x49\x64\x6c\x65\x43\x61\x6c\x6c\x62\x61\x63\x6b" in window ? requestIdleCallback(_0x84b660_2, {
    timeout: 1e3
  }) : setTimeout(_0x84b660_2, 150);
}

document.addEventListener("\x65\x72\x72\x6f\x72", _0x84b660_0 => {
  const _0x84b660_1 = _0x84b660_0.target;
  _0x84b660_1 instanceof HTMLImageElement && "\x31" !== _0x84b660_1.dataset.coverFallback && (_0x84b660_1.dataset.coverFallback = "\x31", 
  _0x84b660_1.classList.add("\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b"), _0x84b660_1.src = coverFallback);
}, !0);

let intentPrefetchAt = 0;

function bindtrackprefetch(_0x84b660_0, _0x84b660_1) {
  let _0x84b660_2;
  const _0x84b660_3 = () => clearTimeout(_0x84b660_2), _0x84b660_4 = () => {
    _0x84b660_3(), _0x84b660_2 = setTimeout(() => {
      !_0x84b660_0.isConnected || document.hidden || Date.now() < intentPrefetchAt || (intentPrefetchAt = Date.now() + 1e4, 
      getfulltrackmatch(_0x84b660_1, !0).catch(() => {}));
    }, 300);
  };
  _0x84b660_0.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x65\x6e\x74\x65\x72", _0x84b660_0 => {
    "\x6d\x6f\x75\x73\x65" === _0x84b660_0.pointerType && _0x84b660_4();
  }), _0x84b660_0.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6c\x65\x61\x76\x65", _0x84b660_3), _0x84b660_0.addEventListener("\x66\x6f\x63\x75\x73", _0x84b660_4), 
  _0x84b660_0.addEventListener("\x62\x6c\x75\x72", _0x84b660_3);
}

function playlisttrack(_0x84b660_0) {
  return {
    id: String(_0x84b660_0?.id || ""),
    title: String(_0x84b660_0?.title || "").slice(0, 180),
    artist: String(_0x84b660_0?.artist || "").slice(0, 120),
    artistId: String(_0x84b660_0?.artistId || ""),
    album: String(_0x84b660_0?.album || "").slice(0, 160),
    albumId: String(_0x84b660_0?.albumId || ""),
    cover: String(_0x84b660_0?.cover || "").slice(0, 500),
    catalog: [ "\x64\x65\x65\x7a\x65\x72", "\x74\x69\x64\x61\x6c", "\x6e\x65\x74\x65\x61\x73\x65" ].includes(String(_0x84b660_0?.catalog || "").toLowerCase()) ? String(_0x84b660_0.catalog).toLowerCase() : "",
    duration: Math.max(0, Math.min(14400, Math.round(Number(_0x84b660_0?.duration) || 0)))
  };
}

function normalizedplaylistcover(_0x84b660_0) {
  const _0x84b660_1 = String(_0x84b660_0 || "").replace(/\s/g, "");
  return /^data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(_0x84b660_1) && _0x84b660_1.length <= 18e3 ? _0x84b660_1 : "";
}

function normalizedplaylistaccent(_0x84b660_0) {
  const _0x84b660_1 = String(_0x84b660_0 || "").trim();
  return validhex(_0x84b660_1) ? _0x84b660_1.toLowerCase() : "";
}

function localplaylists() {
  try {
    const _0x84b660_0 = JSON.parse(musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73") || "\x5b\x5d");
    return Array.isArray(_0x84b660_0) ? _0x84b660_0.slice(0, 16).map(_0x84b660_0 => ({
      id: /^[A-Za-z0-9_-]{8,64}$/.test(String(_0x84b660_0?.id || "")) ? String(_0x84b660_0.id) : `\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f${crypto.randomUUID().replace(/-/g, "")}`,
      name: String(_0x84b660_0?.name || "\x50\x6c\x61\x79\x6c\x69\x73\x74").trim().slice(0, 48) || "\x50\x6c\x61\x79\x6c\x69\x73\x74",
      cover: normalizedplaylistcover(_0x84b660_0?.cover),
      accent: normalizedplaylistaccent(_0x84b660_0?.accent),
      tracks: (Array.isArray(_0x84b660_0?.tracks) ? _0x84b660_0.tracks : []).slice(0, 150).map(playlisttrack).filter(_0x84b660_0 => _0x84b660_0.id && _0x84b660_0.title)
    })) : [];
  } catch (_0x84b660_0) {
    return [];
  }
}

function saveplaylistlocal() {
  musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73", JSON.stringify(playlists));
}

async function playlistparenttoken() {
  if (window.parent === window) return null;
  const _0x84b660_0 = `\x6e\x79\x78\x69\x66\x79\x2d${Date.now()}\x2d${Math.random().toString(36).slice(2)}`;
  return new Promise(_0x84b660_1 => {
    let _0x84b660_2 = !1;
    const _0x84b660_3 = _0x84b660_0 => {
      _0x84b660_2 || (_0x84b660_2 = !0, clearTimeout(_0x84b660_5), window.removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x84b660_4), 
      _0x84b660_1(_0x84b660_0));
    }, _0x84b660_4 = _0x84b660_1 => {
      _0x84b660_1.source === window.parent && _0x84b660_1.origin === location.origin && "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65" === _0x84b660_1.data?.type && _0x84b660_1.data?.requestId === _0x84b660_0 && _0x84b660_3({
        available: !0,
        token: String(_0x84b660_1.data.token || "")
      });
    }, _0x84b660_5 = setTimeout(() => _0x84b660_3(null), 2500);
    window.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x84b660_4), window.parent.postMessage({
      type: "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x71\x75\x65\x73\x74",
      requestId: _0x84b660_0
    }, location.origin);
  });
}

async function playlistdirectauth() {
  if (playlistAuthPromise) return playlistAuthPromise;
  playlistAuthPromise = (async () => {
    const _0x84b660_0 = await nyxifyjson("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x66\x6f\x75\x6e\x64\x65\x72\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2f\x61\x75\x74\x68\x2d\x63\x6f\x6e\x66\x69\x67");
    if (!_0x84b660_0?.enabled) return null;
    const [{initializeApp: _0x84b660_1, getApps: _0x84b660_2}, {getAuth: _0x84b660_3, setPersistence: _0x84b660_4, \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{4c}\u{6f}\u{63}\u{61}\u{6c}\u{50}\u{65}\u{72}\u{73}\u{69}\u{73}\u{74}\u{65}\u{6e}\u{63}\u{65}: _0x84b660_5}] = await Promise.all([ import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x70\x70\x2e\x6a\x73"), import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x75\x74\x68\x2e\x6a\x73") ]), _0x84b660_6 = _0x84b660_3(_0x84b660_2().find(_0x84b660_0 => "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72" === _0x84b660_0.name) || _0x84b660_1({
      apiKey: _0x84b660_0.apiKey,
      authDomain: `${_0x84b660_0.projectId}\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d`,
      projectId: _0x84b660_0.projectId
    }, "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72"));
    try {
      await _0x84b660_4(_0x84b660_6, _0x84b660_5);
    } catch (_0x84b660_7) {}
    return "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x84b660_6.authStateReady && await _0x84b660_6.authStateReady(), 
    _0x84b660_6;
  })();
  try {
    return await playlistAuthPromise;
  } catch (_0x84b660_0) {
    throw playlistAuthPromise = null, _0x84b660_0;
  }
}

async function playlistaccounttoken(_0x84b660_0 = !1) {
  if (!_0x84b660_0 && playlistToken && playlistTokenExpiresAt > Date.now() + 3e4) return playlistToken;
  const _0x84b660_1 = await playlistparenttoken();
  if (_0x84b660_1?.available) return playlistToken = _0x84b660_1.token, playlistTokenExpiresAt = playlistToken ? Date.now() + 27e5 : 0, 
  playlistToken;
  const _0x84b660_2 = await playlistdirectauth();
  return playlistToken = _0x84b660_2?.currentUser ? await _0x84b660_2.currentUser.getIdToken(_0x84b660_0) : "", 
  playlistTokenExpiresAt = playlistToken ? Date.now() + 27e5 : 0, playlistToken;
}

async function playlistrequest(_0x84b660_0, _0x84b660_1 = {}, _0x84b660_2 = !0) {
  const _0x84b660_3 = await playlistaccounttoken(!_0x84b660_2);
  if (!_0x84b660_3) return null;
  const _0x84b660_4 = new Headers(_0x84b660_1.headers || {});
  _0x84b660_4.set("\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", `\x42\x65\x61\x72\x65\x72\x20${_0x84b660_3}`);
  const _0x84b660_5 = await fetch(_0x84b660_0, {
    ..._0x84b660_1,
    headers: _0x84b660_4,
    cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
  });
  if (401 === _0x84b660_5.status && _0x84b660_2) return playlistrequest(_0x84b660_0, _0x84b660_1, !1);
  const _0x84b660_6 = await _0x84b660_5.json().catch(() => ({}));
  if (!_0x84b660_5.ok) throw new Error(_0x84b660_6.error || `\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x28${_0x84b660_5.status}\x29\x2e`);
  return _0x84b660_6;
}

function playlistid() {
  return `\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f${crypto.randomUUID().replace(/-/g, "")}`;
}

function getlikes() {
  try {
    const _0x84b660_0 = JSON.parse(musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x6c\x69\x6b\x65\x73"));
    return Array.isArray(_0x84b660_0) ? _0x84b660_0.filter(_0x84b660_0 => _0x84b660_0 && "\x73\x74\x72\x69\x6e\x67" == typeof _0x84b660_0.id) : [];
  } catch (_0x84b660_0) {
    return [];
  }
}

function isliked(_0x84b660_0) {
  return getlikes().some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
}

function togglelike(_0x84b660_0) {
  let _0x84b660_1 = getlikes();
  return _0x84b660_1.some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id) ? _0x84b660_1 = _0x84b660_1.filter(_0x84b660_1 => _0x84b660_1.id !== _0x84b660_0.id) : _0x84b660_1.push(_0x84b660_0), 
  musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x6c\x69\x6b\x65\x73", JSON.stringify(_0x84b660_1)), isliked(_0x84b660_0.id);
}

function gethistory() {
  try {
    const _0x84b660_0 = JSON.parse(musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x68\x69\x73\x74\x6f\x72\x79"));
    return Array.isArray(_0x84b660_0) ? _0x84b660_0.filter(_0x84b660_0 => _0x84b660_0 && "\x73\x74\x72\x69\x6e\x67" == typeof _0x84b660_0.id) : [];
  } catch (_0x84b660_0) {
    return [];
  }
}

function pushhistory(_0x84b660_0) {
  let _0x84b660_1 = gethistory().filter(_0x84b660_1 => _0x84b660_1.id !== _0x84b660_0.id);
  _0x84b660_1.unshift({
    ..._0x84b660_0
  }), musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x68\x69\x73\x74\x6f\x72\x79", JSON.stringify(_0x84b660_1.slice(0, 25)));
}

function makeclickable(_0x84b660_0, _0x84b660_1, _0x84b660_2) {
  _0x84b660_0.setAttribute("\x72\x6f\x6c\x65", "\x62\x75\x74\x74\x6f\x6e"), _0x84b660_0.tabIndex = 0, _0x84b660_1 && _0x84b660_0.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_1), 
  _0x84b660_0.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x84b660_1 => {
    _0x84b660_1.target === _0x84b660_0 && ("\x45\x6e\x74\x65\x72" !== _0x84b660_1.key && "\x20" !== _0x84b660_1.key || (_0x84b660_1.preventDefault(), 
    _0x84b660_1.stopPropagation(), _0x84b660_2(_0x84b660_1)));
  });
}

function paintheart(_0x84b660_0, _0x84b660_1) {
  _0x84b660_0.classList.toggle("\x6c\x69\x6b\x65\x64", _0x84b660_1), _0x84b660_0.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x84b660_1)), 
  _0x84b660_0.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_1 ? "\x75\x6e\x6c\x69\x6b\x65" : "\x6c\x69\x6b\x65"), _0x84b660_0.firstElementChild.className = _0x84b660_1 ? "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x68\x65\x61\x72\x74\x2d\x66\x69\x6c\x6c" : "\x69\x63\x2d\x68\x65\x61\x72\x74";
}

function popheart(_0x84b660_0) {
  _0x84b660_0.classList.remove("\x70\x6f\x70"), _0x84b660_0.offsetWidth, _0x84b660_0.classList.add("\x70\x6f\x70");
}

function bindheart(_0x84b660_0, _0x84b660_1) {
  _0x84b660_0.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    _0x84b660_2.stopPropagation();
    const _0x84b660_3 = togglelike(_0x84b660_1);
    paintheart(_0x84b660_0, _0x84b660_3), popheart(_0x84b660_0), refreshlikes();
  });
}

function groups(_0x84b660_0, _0x84b660_1 = results) {
  const _0x84b660_2 = new Map;
  for (const _0x84b660_3 of _0x84b660_1) {
    const _0x84b660_1 = "\x61\x72\x74\x69\x73\x74" === _0x84b660_0 ? _0x84b660_3.artist : _0x84b660_3.album, _0x84b660_4 = "\x61\x72\x74\x69\x73\x74" === _0x84b660_0 ? _0x84b660_3.artistId : _0x84b660_3.albumId;
    _0x84b660_1 && _0x84b660_4 && (_0x84b660_2.has(_0x84b660_1) || _0x84b660_2.set(_0x84b660_1, {
      key: _0x84b660_1,
      id: _0x84b660_4,
      count: 0,
      cover: _0x84b660_3.cover
    }), _0x84b660_2.get(_0x84b660_1).count++);
  }
  return [ ..._0x84b660_2.values() ];
}

function setplayingid(_0x84b660_0) {
  document.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x69\x64\x5d").forEach(_0x84b660_1 => _0x84b660_1.classList.toggle("\x70\x6c\x61\x79\x69\x6e\x67", _0x84b660_1.dataset.id === _0x84b660_0)), 
  renderqueue();
}

function setfilter(_0x84b660_0) {
  mode = _0x84b660_0, document.querySelectorAll("\x2e\x66\x69\x6c\x74\x65\x72").forEach(_0x84b660_1 => _0x84b660_1.classList.toggle("\x61\x63\x74\x69\x76\x65", _0x84b660_1.dataset.filter === _0x84b660_0));
}

function hideviews() {
  emptyState.style.display = "\x6e\x6f\x6e\x65", trackList.style.display = "\x6e\x6f\x6e\x65", cardGrid.style.display = "\x6e\x6f\x6e\x65", 
  detailView.style.display = "\x6e\x6f\x6e\x65";
}

function showempty(_0x84b660_0, _0x84b660_1, _0x84b660_2) {
  hideviews(), emptyState.style.display = "", emptyTitle.textContent = _0x84b660_0, 
  emptySub.textContent = _0x84b660_1 || "", emptyState.classList.toggle("\x65\x72\x72\x6f\x72", !!_0x84b660_2), 
  crumbEl.style.display = "\x6e\x6f\x6e\x65";
}

function showloading(_0x84b660_0) {
  hideviews(), _0x84b660_0 ? (crumbEl.style.display = "", crumbText.textContent = _0x84b660_0) : crumbEl.style.display = "\x6e\x6f\x6e\x65", 
  trackList.innerHTML = "";
  for (let _0x84b660_1 = 0; _0x84b660_1 < 7; _0x84b660_1++) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    _0x84b660_0.className = "\x73\x6b\x65\x6c", _0x84b660_0.innerHTML = "\x0a\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x20\x73\x6b\x2d\x61\x72\x74\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x2d\x6c\x69\x6e\x65\x73\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x20\x73\x6b\x2d\x6c\x20\x77\x2d\x37\x30\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x20\x73\x6b\x2d\x6c\x20\x77\x2d\x34\x35\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e", 
    trackList.appendChild(_0x84b660_0);
  }
  trackList.style.display = "";
}

function buildrow(_0x84b660_0, _0x84b660_1, _0x84b660_2 = {}) {
  const _0x84b660_3 = document.createElement("\x64\x69\x76");
  _0x84b660_3.className = "\x72\x6f\x77" + (curtrack && curtrack.id === _0x84b660_0.id ? "\x20\x70\x6c\x61\x79\x69\x6e\x67" : ""), 
  _0x84b660_3.dataset.id = _0x84b660_0.id;
  const _0x84b660_4 = isliked(_0x84b660_0.id), _0x84b660_5 = playlistAddTargetId ? playlists.find(_0x84b660_0 => _0x84b660_0.id === playlistAddTargetId) : null, _0x84b660_6 = !!_0x84b660_5?.tracks.some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id), _0x84b660_7 = _0x84b660_2.playlistId ? `\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x73\x22\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x65\x65\x64\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x43\x72\x65\x61\x74\x65\x20\x61\x20\x6e\x65\x77\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20${esc(_0x84b660_0.title)}\x22\x20\x74\x69\x74\x6c\x65\x3d\x22\x43\x72\x65\x61\x74\x65\x20\x61\x20\x6e\x65\x77\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20\x74\x68\x69\x73\x20\x73\x6f\x6e\x67\x22\x3e\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x32\x20\x33\x20\x2e\x39\x20\x33\x2e\x31\x4c\x31\x36\x20\x37\x6c\x2d\x33\x2e\x31\x2e\x39\x4c\x31\x32\x20\x31\x31\x6c\x2d\x2e\x39\x2d\x33\x2e\x31\x4c\x38\x20\x37\x6c\x33\x2e\x31\x2d\x2e\x39\x4c\x31\x32\x20\x33\x5a\x6d\x36\x20\x38\x20\x2e\x37\x20\x32\x2e\x33\x4c\x32\x31\x20\x31\x34\x6c\x2d\x32\x2e\x33\x2e\x37\x4c\x31\x38\x20\x31\x37\x6c\x2d\x2e\x37\x2d\x32\x2e\x33\x4c\x31\x35\x20\x31\x34\x6c\x32\x2e\x33\x2d\x2e\x37\x4c\x31\x38\x20\x31\x31\x5a\x4d\x38\x20\x31\x31\x6c\x31\x2e\x34\x20\x34\x2e\x36\x4c\x31\x34\x20\x31\x37\x6c\x2d\x34\x2e\x36\x20\x31\x2e\x34\x4c\x38\x20\x32\x33\x6c\x2d\x31\x2e\x34\x2d\x34\x2e\x36\x4c\x32\x20\x31\x37\x6c\x34\x2e\x36\x2d\x31\x2e\x34\x4c\x38\x20\x31\x31\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x68\x75\x66\x66\x6c\x65\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x53\x68\x75\x66\x66\x6c\x65\x20${esc(_0x84b660_2.playlistName || "\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74")}\x22\x20\x74\x69\x74\x6c\x65\x3d\x22\x53\x68\x75\x66\x66\x6c\x65\x20\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x22\x3e\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x34\x20\x37\x68\x32\x2e\x32\x63\x34\x2e\x38\x20\x30\x20\x36\x2e\x37\x20\x31\x30\x20\x31\x31\x2e\x36\x20\x31\x30\x48\x32\x30\x4d\x31\x37\x20\x31\x34\x6c\x33\x20\x33\x2d\x33\x20\x33\x4d\x34\x20\x31\x37\x68\x32\x2e\x32\x63\x31\x2e\x38\x20\x30\x20\x33\x2e\x32\x2d\x31\x2e\x34\x20\x34\x2e\x35\x2d\x33\x2e\x32\x4d\x31\x34\x2e\x32\x20\x39\x2e\x34\x63\x31\x2d\x31\x2e\x34\x20\x32\x2e\x31\x2d\x32\x2e\x34\x20\x33\x2e\x36\x2d\x32\x2e\x34\x48\x32\x30\x4d\x31\x37\x20\x34\x6c\x33\x20\x33\x2d\x33\x20\x33\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x72\x65\x6d\x6f\x76\x65\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x52\x65\x6d\x6f\x76\x65\x20${esc(_0x84b660_0.title)}\x20\x66\x72\x6f\x6d\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x22\x3e\x26\x74\x69\x6d\x65\x73\x3b\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x2f\x73\x70\x61\x6e\x3e` : _0x84b660_5 ? `\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x64\x64${_0x84b660_6 ? "\x20\x61\x64\x64\x65\x64" : ""}\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22${_0x84b660_6 ? "\x41\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74" : `\x41\x64\x64\x20${esc(_0x84b660_0.title)}\x20\x74\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74`}\x22\x20${_0x84b660_6 ? "\x64\x69\x73\x61\x62\x6c\x65\x64" : ""}\x3e${_0x84b660_6 ? "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x38\x2e\x35\x20\x31\x32\x2e\x35\x20\x32\x2e\x32\x20\x32\x2e\x32\x20\x34\x2e\x38\x2d\x35\x2e\x32\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e" : "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x32\x20\x38\x76\x38\x4d\x38\x20\x31\x32\x68\x38\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e"}\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e` : "", _0x84b660_8 = `\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x6c\x69\x6e\x6b\x22\x3e${esc(_0x84b660_0.artist)}\x3c\x2f\x73\x70\x61\x6e\x3e`, _0x84b660_9 = _0x84b660_0.album ? `${_0x84b660_8}\x20\xb7\x20${esc(_0x84b660_0.album)}` : _0x84b660_8;
  return _0x84b660_3.innerHTML = `\x0a\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${esc(_0x84b660_0.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x6d\x65\x74\x61\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x74\x6f\x70\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x65\x71\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x74\x69\x74\x6c\x65\x22\x3e${esc(_0x84b660_0.title)}\x3c\x2f\x73\x70\x61\x6e\x3e${_0x84b660_0.audioAvailable ? "\x3c\x73\x6d\x61\x6c\x6c\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x75\x64\x69\x6f\x2d\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x22\x3e\x41\x75\x64\x69\x6f\x20\x66\x6f\x75\x6e\x64\x3c\x2f\x73\x6d\x61\x6c\x6c\x3e" : ""}\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x73\x75\x62\x22\x3e${_0x84b660_9}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x64\x75\x72\x61\x74\x69\x6f\x6e\x22\x3e${fmt(_0x84b660_0.duration)}\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20${_0x84b660_7}\x0a\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6b\x65\x2d\x62\x74\x6e${_0x84b660_4 ? "\x20\x6c\x69\x6b\x65\x64" : ""}\x22\x20\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64\x3d\x22${_0x84b660_4}\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22${_0x84b660_4 ? "\x75\x6e\x6c\x69\x6b\x65" : "\x6c\x69\x6b\x65"}\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22${_0x84b660_4 ? "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x68\x65\x61\x72\x74\x2d\x66\x69\x6c\x6c" : "\x69\x63\x2d\x68\x65\x61\x72\x74"}\x22\x3e\x3c\x2f\x69\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e`, 
  setcover(_0x84b660_3.querySelector("\x3a\x73\x63\x6f\x70\x65\x20\x3e\x20\x69\x6d\x67"), _0x84b660_0.cover), bindtrackprefetch(_0x84b660_3, _0x84b660_0), 
  makeclickable(_0x84b660_3, `\x70\x6c\x61\x79\x20${_0x84b660_0.title}\x20\x62\x79\x20${_0x84b660_0.artist}`, () => playtrack(_0x84b660_0, _0x84b660_1)), 
  _0x84b660_3.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    if (!_0x84b660_2.target.closest("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e\x2c\x20\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e")) return _0x84b660_2.target.closest("\x2e\x61\x6c\x69\x6e\x6b") && !playlistAddTargetId ? (_0x84b660_2.stopPropagation(), 
    void (_0x84b660_0.artistId && opendetail("\x61\x72\x74\x69\x73\x74", _0x84b660_0.artistId, _0x84b660_0.artist))) : void playtrack(_0x84b660_0, _0x84b660_1);
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x64\x64")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
    _0x84b660_1.stopPropagation(), playlistAddTargetId && addtoplaylist(playlistAddTargetId, _0x84b660_0) && (_0x84b660_1.currentTarget.classList.add("\x61\x64\x64\x65\x64"), 
    _0x84b660_1.currentTarget.disabled = !0, _0x84b660_1.currentTarget.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x38\x2e\x35\x20\x31\x32\x2e\x35\x20\x32\x2e\x32\x20\x32\x2e\x32\x20\x34\x2e\x38\x2d\x35\x2e\x32\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e", 
    _0x84b660_1.currentTarget.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x41\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"));
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x72\x65\x6d\x6f\x76\x65")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
    _0x84b660_1.stopPropagation(), removefromplaylist(_0x84b660_2.playlistId, _0x84b660_0.id);
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x65\x65\x64")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
    _0x84b660_1.stopPropagation(), createplaylistfromtrack(_0x84b660_0, _0x84b660_1.currentTarget);
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x68\x75\x66\x66\x6c\x65")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
    _0x84b660_0.stopPropagation(), shuffleplaylist(_0x84b660_2.playlistId);
  }), bindheart(_0x84b660_3.querySelector("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e"), _0x84b660_0), _0x84b660_3;
}

function buildcard(_0x84b660_0, _0x84b660_1) {
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  _0x84b660_2.className = "\x63\x61\x72\x64";
  const _0x84b660_3 = _0x84b660_0.artist ? _0x84b660_0.artist : Number(_0x84b660_0.count) > 0 ? `${_0x84b660_0.count}\x20${1 === _0x84b660_0.count ? "\x74\x72\x61\x63\x6b" : "\x74\x72\x61\x63\x6b\x73"}` : Number(_0x84b660_0.position) > 0 ? `\x23${_0x84b660_0.position}\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b` : "\x61\x72\x74\x69\x73\x74" === _0x84b660_1 ? "\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x72\x74\x69\x73\x74" : "\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x6c\x62\x75\x6d";
  return _0x84b660_2.innerHTML = `\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x61\x72\x74\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${esc(_0x84b660_0.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x70\x6c\x61\x79\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x70\x6c\x61\x79\x20${esc(_0x84b660_0.key)}\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x2d\x6e\x61\x6d\x65\x22\x3e${esc(_0x84b660_0.key)}\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x2d\x63\x6f\x75\x6e\x74\x22\x3e${esc(_0x84b660_3)}\x3c\x2f\x73\x70\x61\x6e\x3e`, 
  setcover(_0x84b660_2.querySelector("\x2e\x63\x61\x72\x64\x2d\x61\x72\x74\x20\x69\x6d\x67"), _0x84b660_0.cover), makeclickable(_0x84b660_2, `\x6f\x70\x65\x6e\x20${_0x84b660_0.key}`, () => opendetail(_0x84b660_1, _0x84b660_0.id, _0x84b660_0.key)), 
  _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    _0x84b660_2.target.closest("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79") || opendetail(_0x84b660_1, _0x84b660_0.id, _0x84b660_0.key);
  }), _0x84b660_2.querySelector("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79").addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    _0x84b660_2.stopPropagation(), opendetail(_0x84b660_1, _0x84b660_0.id, _0x84b660_0.key, !0);
  }), _0x84b660_2;
}

function renderrowsinto(_0x84b660_0, _0x84b660_1, _0x84b660_2 = {}) {
  _0x84b660_0.innerHTML = "", _0x84b660_0.style.display = _0x84b660_1.length ? "" : "\x6e\x6f\x6e\x65", 
  _0x84b660_1.forEach(_0x84b660_3 => _0x84b660_0.appendChild(buildrow(_0x84b660_3, _0x84b660_1, _0x84b660_2)));
}

function showrows(_0x84b660_0) {
  hideviews(), crumbEl.style.display = "\x6e\x6f\x6e\x65", renderrowsinto(trackList, _0x84b660_0);
}

function showcards(_0x84b660_0, _0x84b660_1 = groups(_0x84b660_0)) {
  hideviews(), crumbEl.style.display = "\x6e\x6f\x6e\x65";
  const _0x84b660_2 = _0x84b660_1;
  cardGrid.innerHTML = "", cardGrid.style.display = _0x84b660_2.length ? "" : "\x6e\x6f\x6e\x65", 
  _0x84b660_2.forEach(_0x84b660_1 => cardGrid.appendChild(buildcard(_0x84b660_1, _0x84b660_0))), 
  _0x84b660_2.length || showempty(`\x4e\x6f\x20${_0x84b660_0}\x73\x20\x79\x65\x74`, "\x52\x65\x73\x75\x6c\x74\x73\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x20\x61\x66\x74\x65\x72\x20\x79\x6f\x75\x20\x73\x65\x61\x72\x63\x68\x2e");
}

function homesection(_0x84b660_0, _0x84b660_1, _0x84b660_2, _0x84b660_3 = "") {
  const _0x84b660_4 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
  _0x84b660_4.className = `\x68\x6f\x6d\x65\x2d\x73\x65\x63\x74\x69\x6f\x6e\x20${_0x84b660_3}`.trim();
  const _0x84b660_5 = document.createElement("\x64\x69\x76");
  _0x84b660_5.className = "\x68\x6f\x6d\x65\x2d\x73\x65\x63\x74\x69\x6f\x6e\x2d\x68\x65\x61\x64";
  const _0x84b660_6 = document.createElement("\x64\x69\x76"), _0x84b660_7 = document.createElement("\x68\x32");
  _0x84b660_7.textContent = _0x84b660_0;
  const _0x84b660_8 = document.createElement("\x70");
  return _0x84b660_8.textContent = _0x84b660_1, _0x84b660_6.append(_0x84b660_7, _0x84b660_8), 
  _0x84b660_5.appendChild(_0x84b660_6), _0x84b660_4.append(_0x84b660_5, _0x84b660_2), 
  _0x84b660_4;
}

function showhomechart() {
  hideviews(), crumbEl.style.display = "\x6e\x6f\x6e\x65", detailView.innerHTML = "";
  const _0x84b660_0 = document.createElement("\x64\x69\x76");
  _0x84b660_0.className = "\x68\x6f\x6d\x65\x2d\x74\x72\x61\x63\x6b\x2d\x6c\x69\x73\x74", renderrowsinto(_0x84b660_0, homeData.tracks.slice(0, 12)), 
  detailView.appendChild(homesection("\x50\x6f\x70\x75\x6c\x61\x72\x20\x74\x72\x61\x63\x6b\x73\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b", "\x57\x68\x61\x74\x20\x70\x65\x6f\x70\x6c\x65\x20\x61\x72\x65\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e", _0x84b660_0, "\x68\x6f\x6d\x65\x2d\x74\x72\x61\x63\x6b\x73"));
  const _0x84b660_1 = document.createElement("\x64\x69\x76");
  _0x84b660_1.className = "\x63\x61\x72\x64\x73\x20\x68\x6f\x6d\x65\x2d\x63\x61\x72\x64\x73", homeData.artists.slice(0, 8).forEach(_0x84b660_0 => _0x84b660_1.appendChild(buildcard(_0x84b660_0, "\x61\x72\x74\x69\x73\x74"))), 
  detailView.appendChild(homesection("\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x72\x74\x69\x73\x74\x73", "\x41\x72\x74\x69\x73\x74\x73\x20\x74\x72\x65\x6e\x64\x69\x6e\x67\x20\x61\x63\x72\x6f\x73\x73\x20\x74\x68\x65\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x63\x68\x61\x72\x74\x2e", _0x84b660_1));
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  _0x84b660_2.className = "\x63\x61\x72\x64\x73\x20\x68\x6f\x6d\x65\x2d\x63\x61\x72\x64\x73", homeData.albums.slice(0, 8).forEach(_0x84b660_0 => _0x84b660_2.appendChild(buildcard(_0x84b660_0, "\x61\x6c\x62\x75\x6d"))), 
  detailView.appendChild(homesection("\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x6c\x62\x75\x6d\x73", "\x41\x6c\x62\x75\x6d\x73\x20\x6c\x69\x73\x74\x65\x6e\x65\x72\x73\x20\x61\x72\x65\x20\x63\x6f\x6d\x69\x6e\x67\x20\x62\x61\x63\x6b\x20\x74\x6f\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b\x2e", _0x84b660_2)), 
  detailView.style.display = "";
}

function showeverythinghome() {
  hideviews(), crumbEl.style.display = "\x6e\x6f\x6e\x65";
  const _0x84b660_0 = groups("\x61\x72\x74\x69\x73\x74"), _0x84b660_1 = groups("\x61\x6c\x62\x75\x6d");
  detailView.innerHTML = "";
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  if (renderrowsinto(_0x84b660_2, results), detailView.appendChild(_0x84b660_2), _0x84b660_0.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x63\x61\x72\x64\x73", _0x84b660_0.forEach(_0x84b660_0 => _0x84b660_1.appendChild(buildcard(_0x84b660_0, "\x61\x72\x74\x69\x73\x74"))), 
    detailView.appendChild(_0x84b660_1);
  }
  if (_0x84b660_1.length > 1) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    _0x84b660_0.className = "\x63\x61\x72\x64\x73", _0x84b660_1.forEach(_0x84b660_1 => _0x84b660_0.appendChild(buildcard(_0x84b660_1, "\x61\x6c\x62\x75\x6d"))), 
    detailView.appendChild(_0x84b660_0);
  }
  detailView.style.display = "";
}

function buildhead(_0x84b660_0, _0x84b660_1, _0x84b660_2, _0x84b660_3) {
  const _0x84b660_4 = document.createElement("\x64\x69\x76");
  return _0x84b660_4.className = "\x67\x72\x6f\x75\x70\x2d\x68\x65\x61\x64", _0x84b660_4.innerHTML = `\x0a\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${esc(_0x84b660_0)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x3e\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x6e\x61\x6d\x65\x22\x3e${esc(_0x84b660_1)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x73\x75\x62\x22\x3e${esc(_0x84b660_2)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x61\x63\x74\x69\x6f\x6e\x73\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x70\x6c\x61\x79\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x70\x6c\x61\x79\x20\x61\x6c\x6c\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64\x22\x3e\x3c\x2f\x69\x3e\x50\x6c\x61\x79\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e`, 
  _0x84b660_4.querySelector("\x2e\x67\x2d\x70\x6c\x61\x79").addEventListener("\x63\x6c\x69\x63\x6b", () => {
    _0x84b660_3.length && playtrack(_0x84b660_3[0], _0x84b660_3);
  }), _0x84b660_4;
}

async function opendetail(_0x84b660_0, _0x84b660_1, _0x84b660_2, _0x84b660_3) {
  const _0x84b660_4 = ++reqid;
  detail = {
    type: _0x84b660_0,
    id: _0x84b660_1,
    name: _0x84b660_2,
    data: null
  }, showloading(_0x84b660_2);
  try {
    const _0x84b660_2 = await nyxifyjson(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f${_0x84b660_0}\x2f${_0x84b660_1}`);
    if (_0x84b660_4 !== reqid) return;
    detail.data = _0x84b660_2, renderdetail(), _0x84b660_3 && _0x84b660_2.tracks.length && playtrack(_0x84b660_2.tracks[0], _0x84b660_2.tracks);
  } catch (_0x84b660_5) {
    if (_0x84b660_4 !== reqid) return;
    detail = null, showempty("\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x20" + _0x84b660_0, _0x84b660_5.message, !0);
  }
}

function renderdetail() {
  const _0x84b660_0 = detail.data, _0x84b660_1 = "\x61\x72\x74\x69\x73\x74" === detail.type && _0x84b660_0.total ? _0x84b660_0.total : _0x84b660_0.tracks.length;
  if (hideviews(), crumbEl.style.display = "", crumbText.textContent = `${detail.name}\x20\xb7\x20${_0x84b660_1}\x20\x74\x72\x61\x63\x6b\x73`, 
  detailView.innerHTML = "", detailView.appendChild(buildhead(_0x84b660_0.cover, _0x84b660_0.name, _0x84b660_0.artist ? `${_0x84b660_0.artist}\x20\xb7\x20${_0x84b660_1}\x20\x74\x72\x61\x63\x6b\x73` : `${_0x84b660_1}\x20\x74\x72\x61\x63\x6b\x73`, _0x84b660_0.tracks)), 
  "\x61\x72\x74\x69\x73\x74" === detail.type && _0x84b660_0.albums.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x63\x61\x72\x64\x73", _0x84b660_0.albums.forEach(_0x84b660_0 => {
      const _0x84b660_2 = document.createElement("\x64\x69\x76");
      _0x84b660_2.className = "\x63\x61\x72\x64", _0x84b660_2.innerHTML = `\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x61\x72\x74\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${esc(_0x84b660_0.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x70\x6c\x61\x79\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x70\x6c\x61\x79\x20${esc(_0x84b660_0.title)}\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x2d\x6e\x61\x6d\x65\x22\x3e${esc(_0x84b660_0.title)}\x3c\x2f\x73\x70\x61\x6e\x3e`, 
      makeclickable(_0x84b660_2, `\x6f\x70\x65\x6e\x20${_0x84b660_0.title}`, () => opendetail("\x61\x6c\x62\x75\x6d", _0x84b660_0.id, _0x84b660_0.title)), 
      _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
        _0x84b660_1.target.closest("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79") || opendetail("\x61\x6c\x62\x75\x6d", _0x84b660_0.id, _0x84b660_0.title);
      }), _0x84b660_2.querySelector("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79").addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
        _0x84b660_1.stopPropagation(), opendetail("\x61\x6c\x62\x75\x6d", _0x84b660_0.id, _0x84b660_0.title, !0);
      }), _0x84b660_1.appendChild(_0x84b660_2);
    }), detailView.appendChild(_0x84b660_1);
  }
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  renderrowsinto(_0x84b660_2, _0x84b660_0.tracks), detailView.appendChild(_0x84b660_2), 
  detailView.style.display = "";
}

function rendermain() {
  return rendersidebarplaylists(), activePlaylistId ? renderplaylistview() : playlistAddTargetId ? renderplaylistaddview() : detail ? detail.data ? renderdetail() : showloading(detail.name) : query ? results.length ? "\x68\x6f\x6d\x65" === mode ? showeverythinghome() : "\x61\x72\x74\x69\x73\x74\x73" === mode ? showcards("\x61\x72\x74\x69\x73\x74") : "\x61\x6c\x62\x75\x6d\x73" === mode ? showcards("\x61\x6c\x62\x75\x6d") : showrows(results) : showempty("\x4e\x6f\x20\x72\x65\x73\x75\x6c\x74\x73", `\x4e\x6f\x74\x68\x69\x6e\x67\x20\x6d\x61\x74\x63\x68\x65\x64\x20\x22${query}\x22\x2e`) : homeLoading ? showloading() : homeError && !homeData.tracks.length ? showempty("\x48\x6f\x6d\x65\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", homeError, !0) : "\x68\x6f\x6d\x65" === mode ? showhomechart() : "\x61\x72\x74\x69\x73\x74\x73" === mode ? showcards("\x61\x72\x74\x69\x73\x74", homeData.artists) : "\x61\x6c\x62\x75\x6d\x73" === mode ? showcards("\x61\x6c\x62\x75\x6d", homeData.albums) : homeData.tracks.length ? showrows(homeData.tracks) : void showempty("\x4e\x6f\x74\x68\x69\x6e\x67\x20\x69\x73\x20\x63\x68\x61\x72\x74\x69\x6e\x67\x20\x79\x65\x74", "\x54\x72\x79\x20\x73\x65\x61\x72\x63\x68\x69\x6e\x67\x20\x66\x6f\x72\x20\x61\x20\x73\x6f\x6e\x67\x2c\x20\x61\x72\x74\x69\x73\x74\x2c\x20\x6f\x72\x20\x61\x6c\x62\x75\x6d\x2e");
}

async function loadhome() {
  homeLoading = !0, homeError = "", query || activePlaylistId || detail || rendermain();
  try {
    const _0x84b660_0 = await nyxifyjson("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x68\x6f\x6d\x65");
    homeData = {
      tracks: Array.isArray(_0x84b660_0.tracks) ? _0x84b660_0.tracks : [],
      artists: Array.isArray(_0x84b660_0.artists) ? _0x84b660_0.artists : [],
      albums: Array.isArray(_0x84b660_0.albums) ? _0x84b660_0.albums : []
    };
  } catch (_0x84b660_0) {
    homeError = _0x84b660_0.message || "\x54\x68\x65\x20\x77\x65\x65\x6b\x6c\x79\x20\x63\x68\x61\x72\x74\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e";
  } finally {
    homeLoading = !1, query || activePlaylistId || detail || playlistAddTargetId || rendermain();
  }
}

function rendermini(_0x84b660_0, _0x84b660_1, _0x84b660_2) {
  if (_0x84b660_0.innerHTML = "", !_0x84b660_1.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    return _0x84b660_1.className = "\x6d\x6f\x64\x2d\x65\x6d\x70\x74\x79", _0x84b660_1.textContent = _0x84b660_2, 
    void _0x84b660_0.appendChild(_0x84b660_1);
  }
  _0x84b660_1.forEach(_0x84b660_2 => {
    const _0x84b660_3 = document.createElement("\x64\x69\x76");
    _0x84b660_3.className = "\x6d\x69\x6e\x69" + (curtrack && curtrack.id === _0x84b660_2.id ? "\x20\x70\x6c\x61\x79\x69\x6e\x67" : ""), 
    _0x84b660_3.dataset.id = _0x84b660_2.id;
    const _0x84b660_4 = isliked(_0x84b660_2.id);
    _0x84b660_3.innerHTML = `\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${esc(_0x84b660_2.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x6d\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x74\x22\x3e${esc(_0x84b660_2.title)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x61\x22\x3e${esc(_0x84b660_2.artist)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6b\x65\x2d\x62\x74\x6e${_0x84b660_4 ? "\x20\x6c\x69\x6b\x65\x64" : ""}\x22\x20\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64\x3d\x22${_0x84b660_4}\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22${_0x84b660_4 ? "\x75\x6e\x6c\x69\x6b\x65" : "\x6c\x69\x6b\x65"}\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22${_0x84b660_4 ? "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x68\x65\x61\x72\x74\x2d\x66\x69\x6c\x6c" : "\x69\x63\x2d\x68\x65\x61\x72\x74"}\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e`, 
    bindtrackprefetch(_0x84b660_3, _0x84b660_2), makeclickable(_0x84b660_3, `\x70\x6c\x61\x79\x20${_0x84b660_2.title}\x20\x62\x79\x20${_0x84b660_2.artist}`, () => playtrack(_0x84b660_2, _0x84b660_1)), 
    _0x84b660_3.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
      _0x84b660_0.target.closest("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e") || playtrack(_0x84b660_2, _0x84b660_1);
    }), bindheart(_0x84b660_3.querySelector("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e"), _0x84b660_2), _0x84b660_0.appendChild(_0x84b660_3);
  });
}

function playlistcoverelement(_0x84b660_0, _0x84b660_1 = !1) {
  const _0x84b660_2 = document.createElement("\x73\x70\x61\x6e");
  _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72" + (_0x84b660_1 ? "\x20\x63\x6f\x6d\x70\x61\x63\x74" : "");
  const _0x84b660_3 = _0x84b660_0?.cover ? [ _0x84b660_0.cover ] : [];
  if (!_0x84b660_3.length) for (const _0x84b660_4 of _0x84b660_0?.tracks || []) if (_0x84b660_4.cover && !_0x84b660_3.includes(_0x84b660_4.cover) && (_0x84b660_3.push(_0x84b660_4.cover), 
  4 === _0x84b660_3.length)) break;
  if (_0x84b660_2.dataset.count = String(_0x84b660_3.length), !_0x84b660_3.length) {
    const _0x84b660_0 = document.createElement("\x69");
    return _0x84b660_0.className = "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x6d\x75\x73\x69\x63\x2d\x6c\x69\x6e\x65", _0x84b660_2.appendChild(_0x84b660_0), 
    _0x84b660_2;
  }
  return _0x84b660_3.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x69\x6d\x67");
    _0x84b660_1.src = _0x84b660_0, _0x84b660_1.alt = "", _0x84b660_1.loading = "\x6c\x61\x7a\x79", 
    _0x84b660_2.appendChild(_0x84b660_1);
  }), _0x84b660_2;
}

function playlistaccentstyle(_0x84b660_0, _0x84b660_1) {
  if (!_0x84b660_0 || !validhex(_0x84b660_1)) return;
  const _0x84b660_2 = hexrgb(_0x84b660_1), _0x84b660_3 = .299 * _0x84b660_2[0] + .587 * _0x84b660_2[1] + .114 * _0x84b660_2[2];
  _0x84b660_0.style.setProperty("\x2d\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x72\x67\x62", _0x84b660_2.join("\x2c\x20")), _0x84b660_0.style.setProperty("\x2d\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x69\x6e\x6b", _0x84b660_3 > 158 ? "\x23\x30\x36\x30\x37\x30\x61" : "\x23\x66\x37\x66\x38\x66\x62");
}

function playlistedgeaccent(_0x84b660_0) {
  const _0x84b660_1 = _0x84b660_0.getContext("\x32\x64", {
    willReadFrequently: !0
  }), {width: _0x84b660_2, height: _0x84b660_3} = _0x84b660_0, _0x84b660_4 = _0x84b660_1.getImageData(0, 0, _0x84b660_2, _0x84b660_3).data, _0x84b660_5 = Math.max(1, Math.round(.16 * _0x84b660_2)), _0x84b660_6 = Math.max(1, Math.round(.16 * _0x84b660_3)), _0x84b660_7 = new Map;
  for (let _0x84b660_b = 0; _0x84b660_b < _0x84b660_3; _0x84b660_b += 2) for (let _0x84b660_0 = 0; _0x84b660_0 < _0x84b660_2; _0x84b660_0 += 2) {
    if (_0x84b660_0 >= _0x84b660_5 && _0x84b660_0 < _0x84b660_2 - _0x84b660_5 && _0x84b660_b >= _0x84b660_6 && _0x84b660_b < _0x84b660_3 - _0x84b660_6) continue;
    const _0x84b660_1 = 4 * (_0x84b660_b * _0x84b660_2 + _0x84b660_0);
    if (_0x84b660_4[_0x84b660_1 + 3] < 180) continue;
    const _0x84b660_8 = _0x84b660_4[_0x84b660_1], _0x84b660_9 = _0x84b660_4[_0x84b660_1 + 1], _0x84b660_a = _0x84b660_4[_0x84b660_1 + 2], _0x84b660_c = Math.max(_0x84b660_8, _0x84b660_9, _0x84b660_a), _0x84b660_d = Math.min(_0x84b660_8, _0x84b660_9, _0x84b660_a), _0x84b660_e = _0x84b660_c ? (_0x84b660_c - _0x84b660_d) / _0x84b660_c : 0, _0x84b660_f = `${_0x84b660_8 >> 5}\x2d${_0x84b660_9 >> 5}\x2d${_0x84b660_a >> 5}`, _0x84b660_10 = _0x84b660_7.get(_0x84b660_f) || {
      count: 0,
      score: 0,
      r: 0,
      g: 0,
      b: 0
    };
    _0x84b660_10.count += 1, _0x84b660_10.score += .7 + .7 * _0x84b660_e, _0x84b660_10.r += _0x84b660_8, 
    _0x84b660_10.g += _0x84b660_9, _0x84b660_10.b += _0x84b660_a, _0x84b660_7.set(_0x84b660_f, _0x84b660_10);
  }
  const _0x84b660_8 = [ ..._0x84b660_7.values() ].sort((_0x84b660_0, _0x84b660_1) => _0x84b660_1.score - _0x84b660_0.score)[0];
  if (!_0x84b660_8) return "\x23\x37\x37\x37\x62\x38\x36";
  let _0x84b660_9 = [ _0x84b660_8.r, _0x84b660_8.g, _0x84b660_8.b ].map(_0x84b660_0 => Math.round(_0x84b660_0 / _0x84b660_8.count));
  const _0x84b660_a = .299 * _0x84b660_9[0] + .587 * _0x84b660_9[1] + .114 * _0x84b660_9[2];
  return _0x84b660_a < 42 && (_0x84b660_9 = _0x84b660_9.map(_0x84b660_0 => Math.round(_0x84b660_0 + .22 * (255 - _0x84b660_0)))), 
  _0x84b660_a > 225 && (_0x84b660_9 = _0x84b660_9.map(_0x84b660_0 => Math.round(.82 * _0x84b660_0))), 
  `\x23${_0x84b660_9.map(_0x84b660_0 => _0x84b660_0.toString(16).padStart(2, "\x30")).join("")}`;
}

function playlistimageload(_0x84b660_0) {
  return new Promise((_0x84b660_1, _0x84b660_2) => {
    const _0x84b660_3 = new Image;
    _0x84b660_3.decoding = "\x61\x73\x79\x6e\x63", _0x84b660_3.onload = () => _0x84b660_1(_0x84b660_3), 
    _0x84b660_3.onerror = () => _0x84b660_2(new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6f\x70\x65\x6e\x65\x64\x2e")), 
    _0x84b660_3.src = _0x84b660_0;
  });
}

function playlistfiledata(_0x84b660_0) {
  return new Promise((_0x84b660_1, _0x84b660_2) => {
    const _0x84b660_3 = new FileReader;
    _0x84b660_3.onerror = () => _0x84b660_2(new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x72\x65\x61\x64\x2e")), 
    _0x84b660_3.onload = () => _0x84b660_1(String(_0x84b660_3.result || "")), _0x84b660_3.readAsDataURL(_0x84b660_0);
  });
}

async function prepareplaylistcover(_0x84b660_0) {
  if (!_0x84b660_0 || !new Set([ "\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67", "\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67", "\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70" ]).has(_0x84b660_0.type)) throw new Error("\x43\x68\x6f\x6f\x73\x65\x20\x61\x20\x50\x4e\x47\x2c\x20\x4a\x50\x47\x2c\x20\x6f\x72\x20\x57\x65\x62\x50\x20\x69\x6d\x61\x67\x65\x2e");
  if (_0x84b660_0.size > 8388608) throw new Error("\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x63\x6f\x76\x65\x72\x73\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x38\x20\x4d\x42\x20\x6f\x72\x20\x73\x6d\x61\x6c\x6c\x65\x72\x2e");
  const _0x84b660_1 = await playlistfiledata(_0x84b660_0), _0x84b660_2 = await playlistimageload(_0x84b660_1), _0x84b660_3 = Math.min(_0x84b660_2.naturalWidth, _0x84b660_2.naturalHeight);
  if (!_0x84b660_3) throw new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x68\x61\x73\x20\x6e\x6f\x20\x75\x73\x61\x62\x6c\x65\x20\x70\x69\x78\x65\x6c\x73\x2e");
  const _0x84b660_4 = (_0x84b660_2.naturalWidth - _0x84b660_3) / 2, _0x84b660_5 = (_0x84b660_2.naturalHeight - _0x84b660_3) / 2, _0x84b660_6 = document.createElement("\x63\x61\x6e\x76\x61\x73");
  _0x84b660_6.width = 128, _0x84b660_6.height = 128, _0x84b660_6.getContext("\x32\x64", {
    alpha: !1
  }).drawImage(_0x84b660_2, _0x84b660_4, _0x84b660_5, _0x84b660_3, _0x84b660_3, 0, 0, 128, 128);
  const _0x84b660_7 = playlistedgeaccent(_0x84b660_6), _0x84b660_8 = [ [ 320, .82 ], [ 288, .74 ], [ 256, .66 ], [ 224, .58 ], [ 192, .52 ], [ 160, .46 ], [ 128, .42 ] ];
  for (const [_0x84b660_9, _0x84b660_a] of _0x84b660_8) {
    const _0x84b660_0 = document.createElement("\x63\x61\x6e\x76\x61\x73");
    _0x84b660_0.width = _0x84b660_9, _0x84b660_0.height = _0x84b660_9, _0x84b660_0.getContext("\x32\x64", {
      alpha: !1
    }).drawImage(_0x84b660_2, _0x84b660_4, _0x84b660_5, _0x84b660_3, _0x84b660_3, 0, 0, _0x84b660_9, _0x84b660_9);
    const _0x84b660_1 = _0x84b660_0.toDataURL("\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70", _0x84b660_a);
    if (_0x84b660_1.length <= 18e3) return {
      cover: _0x84b660_1,
      accent: _0x84b660_7
    };
  }
  throw new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x63\x6f\x6d\x70\x72\x65\x73\x73\x65\x64\x20\x65\x6e\x6f\x75\x67\x68\x2e\x20\x54\x72\x79\x20\x61\x20\x73\x69\x6d\x70\x6c\x65\x72\x20\x69\x6d\x61\x67\x65\x2e");
}

async function playlistaccentfromsource(_0x84b660_0) {
  return _0x84b660_0 ? (playlistAccentCache.has(_0x84b660_0) || playlistAccentCache.set(_0x84b660_0, (async () => {
    try {
      const _0x84b660_1 = await playlistimageload(_0x84b660_0), _0x84b660_2 = Math.min(_0x84b660_1.naturalWidth, _0x84b660_1.naturalHeight), _0x84b660_3 = document.createElement("\x63\x61\x6e\x76\x61\x73");
      return _0x84b660_3.width = 64, _0x84b660_3.height = 64, _0x84b660_3.getContext("\x32\x64", {
        alpha: !1
      }).drawImage(_0x84b660_1, (_0x84b660_1.naturalWidth - _0x84b660_2) / 2, (_0x84b660_1.naturalHeight - _0x84b660_2) / 2, _0x84b660_2, _0x84b660_2, 0, 0, 64, 64), 
      playlistedgeaccent(_0x84b660_3);
    } catch (_0x84b660_1) {
      return "";
    }
  })()), playlistAccentCache.get(_0x84b660_0)) : "";
}

function playlistcovereditor(_0x84b660_0) {
  const _0x84b660_1 = document.createElement("\x64\x69\x76");
  _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x65\x64\x69\x74\x6f\x72";
  const _0x84b660_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  _0x84b660_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x63\x68\x61\x6e\x67\x65", _0x84b660_2.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x43\x68\x61\x6e\x67\x65\x20\x63\x6f\x76\x65\x72\x20\x66\x6f\x72\x20${_0x84b660_0.name}`), 
  _0x84b660_2.appendChild(playlistcoverelement(_0x84b660_0));
  const _0x84b660_3 = document.createElement("\x73\x70\x61\x6e");
  _0x84b660_3.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x70\x72\x6f\x6d\x70\x74", _0x84b660_3.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x2e\x32\x20\x36\x2e\x35\x20\x39\x2e\x35\x20\x34\x68\x35\x6c\x31\x2e\x33\x20\x32\x2e\x35\x48\x31\x39\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x20\x32\x20\x32\x76\x39\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x2d\x32\x20\x32\x48\x35\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x2d\x32\x2d\x32\x76\x2d\x39\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x20\x32\x2d\x32\x68\x33\x2e\x32\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x33\x22\x20\x72\x3d\x22\x33\x2e\x35\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x43\x68\x61\x6e\x67\x65\x20\x63\x6f\x76\x65\x72\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x84b660_2.appendChild(_0x84b660_3);
  const _0x84b660_4 = document.createElement("\x69\x6e\x70\x75\x74");
  return _0x84b660_4.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x69\x6e\x70\x75\x74", _0x84b660_4.type = "\x66\x69\x6c\x65", 
  _0x84b660_4.accept = "\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67\x2c\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67\x2c\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70", _0x84b660_4.hidden = !0, 
  _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_4.click()), _0x84b660_4.addEventListener("\x63\x68\x61\x6e\x67\x65", async () => {
    const _0x84b660_1 = _0x84b660_4.files?.[0];
    if (!_0x84b660_1) return;
    const _0x84b660_3 = detailView.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x73\x74\x61\x74\x75\x73");
    _0x84b660_2.disabled = !0, _0x84b660_3 && (_0x84b660_3.textContent = "\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x63\x6f\x76\x65\x72\u2026");
    try {
      const _0x84b660_2 = await prepareplaylistcover(_0x84b660_1);
      _0x84b660_0.cover = _0x84b660_2.cover, _0x84b660_0.accent = _0x84b660_2.accent;
      const _0x84b660_3 = await persistplaylists({
        verifyCover: {
          id: _0x84b660_0.id,
          cover: _0x84b660_2.cover
        }
      });
      renderplaylistview();
      const _0x84b660_4 = detailView.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x73\x74\x61\x74\x75\x73");
      _0x84b660_4 && (_0x84b660_3.synced ? _0x84b660_4.textContent = "\x43\x6f\x76\x65\x72\x20\x73\x79\x6e\x63\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x2e" : _0x84b660_3.error ? _0x84b660_4.textContent = `\x43\x6f\x76\x65\x72\x20\x73\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e\x20${_0x84b660_3.error.message}` : _0x84b660_4.textContent = "\x43\x6f\x76\x65\x72\x20\x73\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e\x20\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x73\x79\x6e\x63\x20\x69\x74\x2e");
    } catch (_0x84b660_5) {
      _0x84b660_2.disabled = !1, _0x84b660_3 && (_0x84b660_3.textContent = _0x84b660_5.message);
    } finally {
      _0x84b660_4.value = "";
    }
  }), _0x84b660_1.append(_0x84b660_2, _0x84b660_4), validhex(_0x84b660_0.accent) && playlistaccentstyle(_0x84b660_1, _0x84b660_0.accent), 
  _0x84b660_1;
}

function rendersidebarplaylists() {
  if (sidebarPlaylistList.innerHTML = "", !playlists.length) {
    const _0x84b660_0 = document.createElement("\x73\x70\x61\x6e");
    return _0x84b660_0.className = "\x73\x69\x64\x65\x62\x61\x72\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.textContent = "\x4e\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x20\x79\x65\x74", 
    void sidebarPlaylistList.appendChild(_0x84b660_0);
  }
  playlists.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.className = "\x73\x69\x64\x65\x62\x61\x72\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74", _0x84b660_1.classList.toggle("\x61\x63\x74\x69\x76\x65", activePlaylistId === _0x84b660_0.id);
    const _0x84b660_2 = document.createElement("\x73\x70\x61\x6e"), _0x84b660_3 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
    _0x84b660_3.textContent = _0x84b660_0.name;
    const _0x84b660_4 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0x84b660_4.textContent = `${_0x84b660_0.tracks.length}\x20\x73\x6f\x6e\x67\x73`, _0x84b660_2.append(_0x84b660_3, _0x84b660_4), 
    _0x84b660_1.append(playlistcoverelement(_0x84b660_0, !0), _0x84b660_2), _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", () => openplaylist(_0x84b660_0.id)), 
    sidebarPlaylistList.appendChild(_0x84b660_1);
  });
}

function renderplaylists() {
  if (playlistList.innerHTML = "", rendersidebarplaylists(), rendernowplaying(), !playlists.length) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    return _0x84b660_0.className = "\x6d\x6f\x64\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.textContent = "\x43\x72\x65\x61\x74\x65\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x74\x6f\x20\x73\x61\x76\x65\x20\x73\x6f\x6e\x67\x73\x20\x74\x6f\x67\x65\x74\x68\x65\x72\x2e", 
    void playlistList.appendChild(_0x84b660_0);
  }
  playlists.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6e\x74\x72\x79", validhex(_0x84b660_0.accent) && playlistaccentstyle(_0x84b660_1, _0x84b660_0.accent);
    const _0x84b660_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x6f\x70\x65\x6e";
    const _0x84b660_3 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_3.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x6f\x70\x65\x6e\x2d\x6d\x65\x74\x61";
    const _0x84b660_4 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
    _0x84b660_4.textContent = _0x84b660_0.name;
    const _0x84b660_5 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0x84b660_5.textContent = `${_0x84b660_0.tracks.length}\x20${1 === _0x84b660_0.tracks.length ? "\x74\x72\x61\x63\x6b" : "\x74\x72\x61\x63\x6b\x73"}`, 
    _0x84b660_3.append(_0x84b660_4, _0x84b660_5), _0x84b660_2.append(playlistcoverelement(_0x84b660_0, !0), _0x84b660_3), 
    _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", () => openplaylist(_0x84b660_0.id));
    const _0x84b660_6 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_6.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_6.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x64\x65\x6c\x65\x74\x65", _0x84b660_6.textContent = "\xd7", 
    _0x84b660_6.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x44\x65\x6c\x65\x74\x65\x20${_0x84b660_0.name}`), _0x84b660_6.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      confirm(`\x44\x65\x6c\x65\x74\x65\x20\x22${_0x84b660_0.name}\x22\x3f`) && (playlists = playlists.filter(_0x84b660_1 => _0x84b660_1.id !== _0x84b660_0.id), 
      activePlaylistId === _0x84b660_0.id && (activePlaylistId = ""), playlistAddTargetId === _0x84b660_0.id && (playlistAddTargetId = ""), 
      persistplaylists(), rendermain());
    }), _0x84b660_1.append(_0x84b660_2, _0x84b660_6), playlistList.appendChild(_0x84b660_1);
  });
}

function renderplaylistchoices() {
  if (playlistChoices.innerHTML = "", !playlists.length) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    return _0x84b660_0.className = "\x6d\x6f\x64\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.textContent = "\x4e\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x20\x79\x65\x74\x2e", 
    void playlistChoices.appendChild(_0x84b660_0);
  }
  playlists.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x68\x6f\x69\x63\x65";
    const _0x84b660_2 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_2.textContent = _0x84b660_0.name;
    const _0x84b660_3 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0x84b660_3.textContent = `${_0x84b660_0.tracks.length}\x20\x74\x72\x61\x63\x6b\x73`, _0x84b660_1.append(_0x84b660_2, _0x84b660_3), 
    _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      playlistDialogTrack ? addtoplaylist(_0x84b660_0.id, playlistDialogTrack) : (playlistDialog.close(), 
      openplaylist(_0x84b660_0.id));
    }), playlistChoices.appendChild(_0x84b660_1);
  });
}

function openplaylistdialog(_0x84b660_0 = null) {
  playlistDialogTrack = _0x84b660_0 ? playlisttrack(_0x84b660_0) : null, playlistMessage.textContent = "", 
  document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x44\x69\x61\x6c\x6f\x67\x48\x69\x6e\x74").textContent = playlistDialogTrack ? `\x41\x64\x64\x20\u201c${playlistDialogTrack.title}\u201d\x20\x74\x6f\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2e` : "\x43\x72\x65\x61\x74\x65\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6f\x72\x20\x63\x68\x6f\x6f\x73\x65\x20\x6f\x6e\x65\x20\x62\x65\x6c\x6f\x77\x2e", 
  renderplaylistchoices(), playlistDialog.showModal(), playlistName.focus();
}

function openplaylist(_0x84b660_0) {
  playlists.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0) && (++reqid, activePlaylistId = _0x84b660_0, 
  playlistAddTargetId = "", detail = null, rendersidebarplaylists(), renderplaylistview());
}

function renderplaylistview() {
  const _0x84b660_0 = playlists.find(_0x84b660_0 => _0x84b660_0.id === activePlaylistId);
  if (!_0x84b660_0) return activePlaylistId = "", rendermain();
  hideviews(), crumbEl.style.display = "", crumbText.textContent = "\x50\x6c\x61\x79\x6c\x69\x73\x74\x73", detailView.innerHTML = "";
  const _0x84b660_1 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
  _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x68\x65\x72\x6f";
  const _0x84b660_2 = normalizedplaylistaccent(_0x84b660_0.accent);
  _0x84b660_2 ? playlistaccentstyle(_0x84b660_1, _0x84b660_2) : playlistaccentfromsource(_0x84b660_0.cover || _0x84b660_0.tracks.find(_0x84b660_0 => _0x84b660_0.cover)?.cover || "").then(_0x84b660_0 => {
    _0x84b660_1.isConnected && _0x84b660_0 && playlistaccentstyle(_0x84b660_1, _0x84b660_0);
  });
  const _0x84b660_3 = document.createElement("\x64\x69\x76");
  _0x84b660_3.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x68\x65\x72\x6f\x2d\x69\x6e\x66\x6f";
  const _0x84b660_4 = document.createElement("\x73\x70\x61\x6e");
  _0x84b660_4.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x79\x65\x62\x72\x6f\x77", _0x84b660_4.textContent = "\x50\x6c\x61\x79\x6c\x69\x73\x74";
  const _0x84b660_5 = document.createElement("\x68\x32");
  _0x84b660_5.textContent = _0x84b660_0.name;
  const _0x84b660_6 = document.createElement("\x70");
  _0x84b660_6.textContent = `${_0x84b660_0.tracks.length}\x20${1 === _0x84b660_0.tracks.length ? "\x73\x6f\x6e\x67" : "\x73\x6f\x6e\x67\x73"}\x20\xb7\x20\x4e\x79\x78\x69\x66\x79\x2f\x62\x75\x69\x6c\x74\x20\x69\x6e\x20\x6d\x75\x73\x69\x63`;
  const _0x84b660_7 = document.createElement("\x64\x69\x76");
  _0x84b660_7.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x68\x65\x72\x6f\x2d\x61\x63\x74\x69\x6f\x6e\x73";
  const _0x84b660_8 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  _0x84b660_8.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_8.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x70\x6c\x61\x79\x2d\x61\x6c\x6c", _0x84b660_8.disabled = !_0x84b660_0.tracks.length, 
  _0x84b660_8.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x20\x35\x2e\x38\x76\x31\x32\x2e\x34\x4c\x31\x38\x20\x31\x32\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x50\x6c\x61\x79\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x84b660_8.addEventListener("\x63\x6c\x69\x63\x6b", () => {
    _0x84b660_0.tracks.length && playtrack(_0x84b660_0.tracks[0], _0x84b660_0.tracks);
  });
  const _0x84b660_9 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  if (_0x84b660_9.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_9.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x61\x64\x64\x2d\x73\x6f\x6e\x67\x73", _0x84b660_9.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x32\x20\x38\x76\x38\x4d\x38\x20\x31\x32\x68\x38\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x41\x64\x64\x20\x73\x6f\x6e\x67\x73\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x84b660_9.addEventListener("\x63\x6c\x69\x63\x6b", () => startplaylistadd(_0x84b660_0.id)), _0x84b660_7.append(_0x84b660_8, _0x84b660_9), 
  _0x84b660_0.cover) {
    const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x72\x65\x73\x65\x74\x2d\x63\x6f\x76\x65\x72", _0x84b660_1.textContent = "\x55\x73\x65\x20\x73\x6f\x6e\x67\x20\x63\x6f\x76\x65\x72\x73", 
    _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", async () => {
      _0x84b660_0.cover = "", _0x84b660_0.accent = "", await persistplaylists(), renderplaylistview();
    }), _0x84b660_7.appendChild(_0x84b660_1);
  }
  const _0x84b660_a = document.createElement("\x73\x70\x61\x6e");
  if (_0x84b660_a.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x73\x74\x61\x74\x75\x73", _0x84b660_a.setAttribute("\x72\x6f\x6c\x65", "\x73\x74\x61\x74\x75\x73"), 
  _0x84b660_3.append(_0x84b660_4, _0x84b660_5, _0x84b660_6, _0x84b660_7, _0x84b660_a), 
  _0x84b660_1.append(playlistcovereditor(_0x84b660_0), _0x84b660_3), detailView.appendChild(_0x84b660_1), 
  _0x84b660_0.tracks.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x73\x65\x65\x64\x2d\x68\x69\x6e\x74", _0x84b660_1.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x32\x20\x33\x20\x2e\x39\x20\x33\x2e\x31\x4c\x31\x36\x20\x37\x6c\x2d\x33\x2e\x31\x2e\x39\x4c\x31\x32\x20\x31\x31\x6c\x2d\x2e\x39\x2d\x33\x2e\x31\x4c\x38\x20\x37\x6c\x33\x2e\x31\x2d\x2e\x39\x4c\x31\x32\x20\x33\x5a\x6d\x36\x20\x38\x20\x2e\x37\x20\x32\x2e\x33\x4c\x32\x31\x20\x31\x34\x6c\x2d\x32\x2e\x33\x2e\x37\x4c\x31\x38\x20\x31\x37\x6c\x2d\x2e\x37\x2d\x32\x2e\x33\x4c\x31\x35\x20\x31\x34\x6c\x32\x2e\x33\x2d\x2e\x37\x4c\x31\x38\x20\x31\x31\x5a\x4d\x38\x20\x31\x31\x6c\x31\x2e\x34\x20\x34\x2e\x36\x4c\x31\x34\x20\x31\x37\x6c\x2d\x34\x2e\x36\x20\x31\x2e\x34\x4c\x38\x20\x32\x33\x6c\x2d\x31\x2e\x34\x2d\x34\x2e\x36\x4c\x32\x20\x31\x37\x6c\x34\x2e\x36\x2d\x31\x2e\x34\x4c\x38\x20\x31\x31\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x53\x70\x61\x72\x6b\x6c\x65\x20\x63\x72\x65\x61\x74\x65\x73\x20\x61\x20\x73\x65\x70\x61\x72\x61\x74\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20\x61\x20\x73\x6f\x6e\x67\x2e\x20\x53\x68\x75\x66\x66\x6c\x65\x20\x72\x61\x6e\x64\x6f\x6d\x69\x7a\x65\x73\x20\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x6f\x72\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x2e\x3c\x2f\x73\x70\x61\x6e\x3e", 
    detailView.appendChild(_0x84b660_1);
    const _0x84b660_2 = document.createElement("\x64\x69\x76");
    _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x6c\x69\x73\x74", renderrowsinto(_0x84b660_2, _0x84b660_0.tracks, {
      playlistId: _0x84b660_0.id,
      playlistName: _0x84b660_0.name
    }), detailView.appendChild(_0x84b660_2);
  } else {
    const _0x84b660_0 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
    _0x84b660_0.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.innerHTML = "\x3c\x73\x74\x72\x6f\x6e\x67\x3e\x59\x6f\x75\x72\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x55\x73\x65\x20\x41\x64\x64\x20\x73\x6f\x6e\x67\x73\x20\x74\x6f\x20\x66\x69\x6e\x64\x20\x6d\x75\x73\x69\x63\x20\x66\x6f\x72\x20\x69\x74\x2e\x3c\x2f\x73\x70\x61\x6e\x3e", 
    detailView.appendChild(_0x84b660_0);
  }
  detailView.style.display = "";
}

function startplaylistadd(_0x84b660_0) {
  playlists.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0) && (++reqid, playlistAddTargetId = _0x84b660_0, 
  activePlaylistId = "", detail = null, query = "", results = [], searchInput.value = "", 
  renderplaylistaddview(), searchInput.focus());
}

function renderplaylistaddview() {
  const _0x84b660_0 = playlists.find(_0x84b660_0 => _0x84b660_0.id === playlistAddTargetId);
  if (!_0x84b660_0) return playlistAddTargetId = "", rendermain();
  hideviews(), crumbEl.style.display = "", crumbText.textContent = `\x42\x61\x63\x6b\x20\x74\x6f\x20${_0x84b660_0.name}`, 
  detailView.innerHTML = "";
  const _0x84b660_1 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
  _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x61\x64\x64\x2d\x68\x65\x61\x64\x69\x6e\x67";
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  if (_0x84b660_2.innerHTML = `\x3c\x73\x70\x61\x6e\x3e\x41\x64\x64\x20\x74\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x73\x74\x72\x6f\x6e\x67\x3e${esc(_0x84b660_0.name)}\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x3c\x73\x6d\x61\x6c\x6c\x3e\x53\x65\x61\x72\x63\x68\x20\x61\x62\x6f\x76\x65\x2c\x20\x74\x68\x65\x6e\x20\x75\x73\x65\x20\x2b\x20\x62\x65\x73\x69\x64\x65\x20\x61\x6e\x79\x20\x73\x6f\x6e\x67\x2e\x3c\x2f\x73\x6d\x61\x6c\x6c\x3e`, 
  _0x84b660_1.append(playlistcoverelement(_0x84b660_0, !0), _0x84b660_2), detailView.appendChild(_0x84b660_1), 
  results.length) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    _0x84b660_0.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x6c\x69\x73\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x61\x64\x64\x2d\x72\x65\x73\x75\x6c\x74\x73", renderrowsinto(_0x84b660_0, results), 
    detailView.appendChild(_0x84b660_0);
  } else {
    const _0x84b660_0 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
    _0x84b660_0.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6d\x70\x74\x79\x20\x63\x6f\x6d\x70\x61\x63\x74", _0x84b660_0.innerHTML = `\x3c\x73\x74\x72\x6f\x6e\x67\x3e${query ? "\x4e\x6f\x20\x73\x6f\x6e\x67\x73\x20\x66\x6f\x75\x6e\x64" : "\x46\x69\x6e\x64\x20\x73\x6f\x6e\x67\x73\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"}\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x3c\x73\x70\x61\x6e\x3e${query ? `\x4e\x6f\x74\x68\x69\x6e\x67\x20\x6d\x61\x74\x63\x68\x65\x64\x20\u201c${esc(query)}\u201d\x2e` : "\x54\x79\x70\x65\x20\x61\x20\x73\x6f\x6e\x67\x20\x6f\x72\x20\x61\x72\x74\x69\x73\x74\x20\x69\x6e\x74\x6f\x20\x74\x68\x65\x20\x73\x65\x61\x72\x63\x68\x20\x62\x61\x72\x2e"}\x3c\x2f\x73\x70\x61\x6e\x3e`, 
    detailView.appendChild(_0x84b660_0);
  }
  detailView.style.display = "";
}

async function persistplaylists(_0x84b660_0 = {}) {
  const _0x84b660_1 = ++playlistMutationRevision, _0x84b660_2 = JSON.parse(JSON.stringify(playlists));
  saveplaylistlocal(), renderplaylists(), renderplaylistchoices();
  const _0x84b660_3 = async () => {
    const _0x84b660_1 = await playlistrequest("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73", {
      method: "\x50\x55\x54",
      headers: {
        "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
      },
      body: JSON.stringify({
        playlists: _0x84b660_2
      })
    });
    if (!_0x84b660_1) return {
      synced: !1,
      reason: "\x73\x69\x67\x6e\x65\x64\x2d\x6f\x75\x74"
    };
    if (_0x84b660_0.verifyCover) {
      const _0x84b660_2 = normalizedplaylistcover(_0x84b660_0.verifyCover.cover), _0x84b660_3 = (Array.isArray(_0x84b660_1.playlists) ? _0x84b660_1.playlists : []).find(_0x84b660_1 => _0x84b660_1?.id === _0x84b660_0.verifyCover.id);
      if (!_0x84b660_2 || normalizedplaylistcover(_0x84b660_3?.cover) !== _0x84b660_2) throw new Error("\x41\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x72\x65\x74\x61\x69\x6e\x20\x74\x68\x65\x20\x63\x75\x73\x74\x6f\x6d\x20\x63\x6f\x76\x65\x72\x2e\x20\x54\x72\x79\x20\x69\x74\x20\x61\x67\x61\x69\x6e\x2e");
    }
    return {
      synced: !0,
      payload: _0x84b660_1
    };
  }, _0x84b660_4 = playlistSaveChain.then(_0x84b660_3, _0x84b660_3);
  playlistSaveChain = _0x84b660_4.catch(() => {});
  try {
    const _0x84b660_0 = await _0x84b660_4;
    return _0x84b660_1 === playlistMutationRevision && (playlistSync.textContent = _0x84b660_0.synced ? "\x53\x79\x6e\x63\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74" : "\x53\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65"), 
    _0x84b660_0;
  } catch (_0x84b660_5) {
    return _0x84b660_1 === playlistMutationRevision && (playlistSync.textContent = "\x53\x61\x76\x65\x64\x20\x6c\x6f\x63\x61\x6c\x6c\x79\x20\xb7\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"), 
    playlistMessage.textContent = _0x84b660_5.message || "\x41\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e", 
    {
      synced: !1,
      reason: "\x65\x72\x72\x6f\x72",
      error: _0x84b660_5
    };
  }
}

function addtoplaylist(_0x84b660_0, _0x84b660_1) {
  const _0x84b660_2 = playlists.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
  return !(!_0x84b660_2 || !_0x84b660_1 || (_0x84b660_2.tracks.some(_0x84b660_0 => _0x84b660_0.id === _0x84b660_1.id) ? (playlistMessage.textContent = `\x41\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20${_0x84b660_2.name}\x2e`, 
  1) : _0x84b660_2.tracks.length >= 150 ? (playlistMessage.textContent = "\x54\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x68\x61\x73\x20\x72\x65\x61\x63\x68\x65\x64\x20\x31\x35\x30\x20\x74\x72\x61\x63\x6b\x73\x2e", 
  1) : (_0x84b660_2.tracks.push(playlisttrack(_0x84b660_1)), playlistMessage.textContent = `\x41\x64\x64\x65\x64\x20\x74\x6f\x20${_0x84b660_2.name}\x2e`, 
  persistplaylists(), 0)));
}

function removefromplaylist(_0x84b660_0, _0x84b660_1) {
  const _0x84b660_2 = playlists.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
  if (!_0x84b660_2) return;
  const _0x84b660_3 = _0x84b660_2.tracks.filter(_0x84b660_0 => _0x84b660_0.id !== _0x84b660_1);
  _0x84b660_3.length !== _0x84b660_2.tracks.length && (_0x84b660_2.tracks = _0x84b660_3, 
  playlistMessage.textContent = `\x52\x65\x6d\x6f\x76\x65\x64\x20\x66\x72\x6f\x6d\x20${_0x84b660_2.name}\x2e`, persistplaylists(), 
  renderplaylistview());
}

function generatedplaylistname(_0x84b660_0) {
  const _0x84b660_1 = `${String(_0x84b660_0?.title || "\x53\x6f\x6e\x67").trim() || "\x53\x6f\x6e\x67"}\x20\x4d\x69\x78`, _0x84b660_2 = new Set(playlists.map(_0x84b660_0 => _0x84b660_0.name.toLowerCase()));
  for (let _0x84b660_3 = 1; _0x84b660_3 <= playlists.length + 2; _0x84b660_3++) {
    const _0x84b660_0 = 1 === _0x84b660_3 ? "" : `\x20${_0x84b660_3}`, _0x84b660_4 = `${_0x84b660_1.slice(0, 48 - _0x84b660_0.length).trim()}${_0x84b660_0}`;
    if (!_0x84b660_2.has(_0x84b660_4.toLowerCase())) return _0x84b660_4;
  }
  return `\x4e\x65\x77\x20\x4d\x69\x78\x20${Date.now().toString(36).slice(-5)}`;
}

function shuffleplaylist(_0x84b660_0) {
  const _0x84b660_1 = playlists.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
  if (!_0x84b660_1?.tracks.length) return;
  const _0x84b660_2 = _0x84b660_1.tracks.map(playlisttrack);
  for (let _0x84b660_3 = _0x84b660_2.length - 1; _0x84b660_3 > 0; _0x84b660_3--) {
    const _0x84b660_0 = Math.floor(Math.random() * (_0x84b660_3 + 1));
    [_0x84b660_2[_0x84b660_3], _0x84b660_2[_0x84b660_0]] = [ _0x84b660_2[_0x84b660_0], _0x84b660_2[_0x84b660_3] ];
  }
  playtrack(_0x84b660_2[0], _0x84b660_2), playlistMessage.textContent = `\x53\x68\x75\x66\x66\x6c\x69\x6e\x67\x20${_0x84b660_1.name}\x2e`;
}

async function createplaylistfromtrack(_0x84b660_0, _0x84b660_1) {
  if (!_0x84b660_0 || _0x84b660_1?.disabled) return;
  if (playlists.length >= 16) return void (playlistMessage.textContent = "\x59\x6f\x75\x20\x63\x61\x6e\x20\x68\x61\x76\x65\x20\x75\x70\x20\x74\x6f\x20\x31\x36\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2e");
  const _0x84b660_2 = playlists.reduce((_0x84b660_0, _0x84b660_1) => _0x84b660_0 + _0x84b660_1.tracks.length, 0), _0x84b660_3 = Math.max(0, 1200 - _0x84b660_2);
  if (!_0x84b660_3) return void (playlistMessage.textContent = "\x59\x6f\x75\x72\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6c\x69\x62\x72\x61\x72\x79\x20\x68\x61\x73\x20\x72\x65\x61\x63\x68\x65\x64\x20\x69\x74\x73\x20\x74\x72\x61\x63\x6b\x20\x6c\x69\x6d\x69\x74\x2e");
  _0x84b660_1 && (_0x84b660_1.disabled = !0), playlistMessage.textContent = `\x43\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x6e\x65\x77\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20${_0x84b660_0.title}\u2026`;
  let _0x84b660_4 = [], _0x84b660_5 = !1;
  try {
    const _0x84b660_1 = String(_0x84b660_0.artist || _0x84b660_0.title || "").trim();
    if (!_0x84b660_1) throw new Error("\x54\x68\x69\x73\x20\x73\x6f\x6e\x67\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x68\x61\x76\x65\x20\x65\x6e\x6f\x75\x67\x68\x20\x63\x61\x74\x61\x6c\x6f\x67\x20\x69\x6e\x66\x6f\x72\x6d\x61\x74\x69\x6f\x6e\x2e");
    const _0x84b660_2 = await nyxifyjson(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x73\x65\x61\x72\x63\x68\x3f\x71\x3d${encodeURIComponent(_0x84b660_1)}`);
    _0x84b660_4 = Array.isArray(_0x84b660_2.data) ? _0x84b660_2.data : [];
  } catch (_0x84b660_6) {
    _0x84b660_5 = !0;
  }
  try {
    const _0x84b660_1 = new Set([ String(_0x84b660_0.id) ]), _0x84b660_2 = Math.max(0, Math.min(17, _0x84b660_3 - 1)), _0x84b660_6 = _0x84b660_4.filter(_0x84b660_0 => {
      const _0x84b660_2 = String(_0x84b660_0?.id || "");
      return !(!_0x84b660_2 || _0x84b660_1.has(_0x84b660_2) || (_0x84b660_1.add(_0x84b660_2), 
      0));
    }).slice(0, _0x84b660_2).map(playlisttrack), _0x84b660_7 = {
      id: playlistid(),
      name: generatedplaylistname(_0x84b660_0),
      cover: "",
      accent: await playlistaccentfromsource(_0x84b660_0.cover),
      tracks: [ playlisttrack(_0x84b660_0), ..._0x84b660_6 ]
    };
    playlists.push(_0x84b660_7), await persistplaylists(), openplaylist(_0x84b660_7.id), 
    playlistMessage.textContent = _0x84b660_5 ? `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_7.name}\x20\x77\x69\x74\x68\x20${_0x84b660_0.title}\x3b\x20\x6d\x6f\x72\x65\x20\x6d\x61\x74\x63\x68\x65\x73\x20\x77\x65\x72\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e` : `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_7.name}\x20\x77\x69\x74\x68\x20${_0x84b660_7.tracks.length}\x20${1 === _0x84b660_7.tracks.length ? "\x73\x6f\x6e\x67" : "\x73\x6f\x6e\x67\x73"}\x2e`;
  } catch (_0x84b660_7) {
    playlistMessage.textContent = `\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x3a\x20${_0x84b660_7.message}`, 
    _0x84b660_1?.isConnected && (_0x84b660_1.disabled = !1);
  }
}

async function loadplaylists() {
  playlists = localplaylists(), renderplaylists();
  const _0x84b660_0 = playlistMutationRevision;
  try {
    const _0x84b660_1 = await playlistrequest("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73");
    if (!_0x84b660_1) return void (playlistSync.textContent = "\x53\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65");
    if (playlistMutationRevision !== _0x84b660_0) return void await playlistSaveChain;
    const _0x84b660_2 = Array.isArray(_0x84b660_1.playlists) ? _0x84b660_1.playlists : [];
    if (!_0x84b660_2.length && playlists.length) return void await persistplaylists();
    playlists = _0x84b660_2, saveplaylistlocal(), renderplaylists(), playlistSync.textContent = "\x53\x79\x6e\x63\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74";
  } catch (_0x84b660_1) {
    playlistSync.textContent = "\x53\x61\x76\x65\x64\x20\x6c\x6f\x63\x61\x6c\x6c\x79\x20\xb7\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65";
  }
}

function refreshlikes() {
  const _0x84b660_0 = getlikes();
  document.getElementById("\x6c\x69\x6b\x65\x64\x43\x6f\x75\x6e\x74").textContent = _0x84b660_0.length, rendermini(document.getElementById("\x6c\x69\x6b\x65\x64\x4c\x69\x73\x74"), _0x84b660_0, "\x53\x6f\x6e\x67\x73\x20\x79\x6f\x75\x20\x6c\x69\x6b\x65\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x2e"), 
  rendermini(document.getElementById("\x68\x69\x73\x74\x6f\x72\x79\x4c\x69\x73\x74"), gethistory(), "\x53\x6f\x6e\x67\x73\x20\x79\x6f\x75\x20\x70\x6c\x61\x79\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x2e"), 
  curtrack && paintheart(document.getElementById("\x70\x4c\x69\x6b\x65"), isliked(curtrack.id)), 
  document.querySelectorAll("\x23\x74\x72\x61\x63\x6b\x4c\x69\x73\x74\x20\x2e\x72\x6f\x77\x2c\x20\x23\x64\x65\x74\x61\x69\x6c\x56\x69\x65\x77\x20\x2e\x72\x6f\x77").forEach(_0x84b660_0 => {
    const _0x84b660_1 = _0x84b660_0.querySelector("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e");
    _0x84b660_1 && paintheart(_0x84b660_1, isliked(_0x84b660_0.dataset.id));
  });
}

restorefulltrackmatches(), crumbEl.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  if (++reqid, playlistAddTargetId) {
    const _0x84b660_0 = playlistAddTargetId;
    return playlistAddTargetId = "", openplaylist(_0x84b660_0);
  }
  detail = null, activePlaylistId = "", rendermain();
}), document.querySelectorAll("\x2e\x66\x69\x6c\x74\x65\x72").forEach(_0x84b660_0 => {
  _0x84b660_0.addEventListener("\x63\x6c\x69\x63\x6b", () => {
    ++reqid, playlistAddTargetId = "", detail = null, activePlaylistId = "", setfilter(_0x84b660_0.dataset.filter), 
    "\x68\x6f\x6d\x65" === _0x84b660_0.dataset.filter && (query = "", results = [], searchInput.value = ""), 
    rendermain();
  });
}), document.getElementById("\x6e\x65\x77\x50\x6c\x61\x79\x6c\x69\x73\x74\x42\x74\x6e").addEventListener("\x63\x6c\x69\x63\x6b", () => openplaylistdialog()), 
document.getElementById("\x73\x69\x64\x65\x62\x61\x72\x4e\x65\x77\x50\x6c\x61\x79\x6c\x69\x73\x74").addEventListener("\x63\x6c\x69\x63\x6b", () => openplaylistdialog()), 
document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x44\x69\x61\x6c\x6f\x67\x43\x6c\x6f\x73\x65").addEventListener("\x63\x6c\x69\x63\x6b", () => playlistDialog.close()), 
document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x43\x72\x65\x61\x74\x65\x46\x6f\x72\x6d").addEventListener("\x73\x75\x62\x6d\x69\x74", _0x84b660_0 => {
  _0x84b660_0.preventDefault();
  const _0x84b660_1 = playlistName.value.trim().slice(0, 48);
  if (!_0x84b660_1) return playlistMessage.textContent = "\x45\x6e\x74\x65\x72\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6e\x61\x6d\x65\x2e", 
  void playlistName.focus();
  if (playlists.length >= 16) return void (playlistMessage.textContent = "\x59\x6f\x75\x20\x63\x61\x6e\x20\x68\x61\x76\x65\x20\x75\x70\x20\x74\x6f\x20\x31\x36\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2e");
  if (playlists.some(_0x84b660_0 => _0x84b660_0.name.toLowerCase() === _0x84b660_1.toLowerCase())) return void (playlistMessage.textContent = "\x41\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x77\x69\x74\x68\x20\x74\x68\x61\x74\x20\x6e\x61\x6d\x65\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x65\x78\x69\x73\x74\x73\x2e");
  const _0x84b660_2 = {
    id: playlistid(),
    name: _0x84b660_1,
    cover: "",
    accent: "",
    tracks: playlistDialogTrack ? [ playlisttrack(playlistDialogTrack) ] : []
  };
  playlists.push(_0x84b660_2), playlistName.value = "", playlistMessage.textContent = playlistDialogTrack ? `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_1}\x20\x61\x6e\x64\x20\x61\x64\x64\x65\x64\x20\x74\x68\x65\x20\x73\x6f\x6e\x67\x2e` : `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_1}\x2e`, 
  persistplaylists(), playlistDialogTrack || (playlistDialog.close(), openplaylist(_0x84b660_2.id));
}), pPlaylist.disabled = !0, pPlaylist.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  curtrack && openplaylistdialog(curtrack);
}), document.getElementById("\x73\x65\x61\x72\x63\x68\x46\x6f\x72\x6d").addEventListener("\x73\x75\x62\x6d\x69\x74", async _0x84b660_0 => {
  _0x84b660_0.preventDefault();
  const _0x84b660_1 = searchInput.value.trim();
  if (!_0x84b660_1) return;
  const _0x84b660_2 = ++reqid;
  query = _0x84b660_1, results = [], detail = null, activePlaylistId = "", showloading();
  try {
    const _0x84b660_0 = await nyxifyjson(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x73\x65\x61\x72\x63\x68\x3f\x71\x3d${encodeURIComponent(_0x84b660_1)}`);
    if (_0x84b660_2 !== reqid) return;
    results = Array.isArray(_0x84b660_0.data) ? _0x84b660_0.data : [], setfilter("\x68\x6f\x6d\x65"), 
    rendermain();
  } catch (_0x84b660_3) {
    if (_0x84b660_2 !== reqid) return;
    playlistAddTargetId ? (query = _0x84b660_1, results = [], renderplaylistaddview(), 
    playlistMessage.textContent = `\x53\x65\x61\x72\x63\x68\x20\x66\x61\x69\x6c\x65\x64\x3a\x20${_0x84b660_3.message}`) : showempty("\x53\x65\x61\x72\x63\x68\x20\x66\x61\x69\x6c\x65\x64", _0x84b660_3.message, !0);
  }
});

const dlBtn = document.getElementById("\x64\x6c\x42\x74\x6e");

function updatebodypad() {
  if (!playershown) return void (document.body.style.paddingBottom = "");
  const _0x84b660_0 = playerEl.getBoundingClientRect().height;
  document.body.style.paddingBottom = Math.ceil(_0x84b660_0 + 14 + 26) + "\x70\x78";
}

function setplayershown(_0x84b660_0) {
  playershown !== _0x84b660_0 && (playershown = _0x84b660_0, playerEl.classList.toggle("\x76\x69\x73\x69\x62\x6c\x65", _0x84b660_0), 
  playerEl.toggleAttribute("\x69\x6e\x65\x72\x74", !_0x84b660_0), _0x84b660_0 || setqueueopen(!1), 
  requestAnimationFrame(updatebodypad));
}

function inferplaycontext(_0x84b660_0) {
  const _0x84b660_1 = playlists.find(_0x84b660_0 => _0x84b660_0.id === activePlaylistId) || playlists.find(_0x84b660_1 => _0x84b660_1.tracks === _0x84b660_0);
  return _0x84b660_1 ? `\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\xb7\x20${_0x84b660_1.name}` : detail?.name ? `${"\x61\x72\x74\x69\x73\x74" === detail.type ? "\x41\x72\x74\x69\x73\x74" : "\x41\x6c\x62\x75\x6d"}\x20\xb7\x20${detail.name}` : query ? `\x53\x65\x61\x72\x63\x68\x20\xb7\x20${query}` : _0x84b660_0 === homeData.tracks || Array.isArray(_0x84b660_0) && _0x84b660_0.length && _0x84b660_0.every(_0x84b660_0 => homeData.tracks.some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id)) ? "\x50\x6f\x70\x75\x6c\x61\x72\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b" : "\x4e\x79\x78\x69\x66\x79";
}

function rendernowplaying() {
  if (nowPlayingModule.hidden = !curtrack, !curtrack) return;
  setcover(nowPlayingArt, curtrack.cover, `${curtrack.title}\x20\x63\x6f\x76\x65\x72`), nowPlayingContext.textContent = playbackContext || "\x4e\x79\x78\x69\x66\x79", 
  nowPlayingTitle.textContent = curtrack.title, nowPlayingArtist.textContent = curtrack.artist || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x61\x72\x74\x69\x73\x74", 
  nowPlayingArtist.disabled = !curtrack.artistId, nowPlayingArtist.onclick = () => {
    curtrack?.artistId && opendetail("\x61\x72\x74\x69\x73\x74", curtrack.artistId, curtrack.artist);
  }, nowPlayingAlbum.hidden = !curtrack.album, nowPlayingAlbum.textContent = curtrack.album || "", 
  nowPlayingAlbum.disabled = !curtrack.albumId, nowPlayingAlbum.onclick = () => {
    curtrack?.albumId && opendetail("\x61\x6c\x62\x75\x6d", curtrack.albumId, curtrack.album);
  };
  const _0x84b660_0 = playlists.filter(_0x84b660_0 => _0x84b660_0.tracks.some(_0x84b660_0 => _0x84b660_0.id === curtrack.id));
  if (nowPlayingPlaylists.innerHTML = "", _0x84b660_0.length) {
    const _0x84b660_1 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_1.textContent = "\x49\x6e\x20\x79\x6f\x75\x72\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73", nowPlayingPlaylists.appendChild(_0x84b660_1), 
    _0x84b660_0.forEach(_0x84b660_0 => {
      const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
      _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.textContent = _0x84b660_0.name, _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", () => openplaylist(_0x84b660_0.id)), 
      nowPlayingPlaylists.appendChild(_0x84b660_1);
    });
  }
  const _0x84b660_1 = queue[qindex + 1];
  if (nowPlayingNext.innerHTML = "", _0x84b660_1) {
    const _0x84b660_0 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_0.textContent = "\x4e\x65\x78\x74\x20\x69\x6e\x20\x71\x75\x65\x75\x65";
    const _0x84b660_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_2.textContent = `${_0x84b660_1.title}\x20\xb7\x20${_0x84b660_1.artist}`, 
    _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", () => playat(qindex + 1)), nowPlayingNext.append(_0x84b660_0, _0x84b660_2);
  }
}

function ensureoctaveframe() {
  let _0x84b660_0 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x72\x61\x6d\x65");
  if (!_0x84b660_0 || "\x49\x46\x52\x41\x4d\x45" === _0x84b660_0.tagName) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.id = "\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x72\x61\x6d\x65", _0x84b660_0 ? _0x84b660_0.replaceWith(_0x84b660_1) : nowPlayingMedia.appendChild(_0x84b660_1), 
    _0x84b660_0 = _0x84b660_1;
  }
  return _0x84b660_0;
}

function ensureoctaveapi() {
  return /\bCrOS\b/i.test(navigator.userAgent) ? Promise.resolve(nyxtubedirectapi) : window.YT?.Player ? Promise.resolve(window.YT) : octaveapipromise || (octaveapipromise = new Promise(_0x84b660_0 => {
    const _0x84b660_1 = window.onYouTubeIframeAPIReady;
    let _0x84b660_2 = !1;
    const _0x84b660_3 = _0x84b660_1 => {
      _0x84b660_2 || (_0x84b660_2 = !0, clearTimeout(_0x84b660_4), _0x84b660_0(_0x84b660_1));
    }, _0x84b660_4 = setTimeout(() => _0x84b660_3(nyxtubedirectapi), 5e3);
    window.onYouTubeIframeAPIReady = () => {
      try {
        _0x84b660_1?.();
      } catch (_0x84b660_0) {}
      _0x84b660_3(window.YT?.Player ? window.YT : nyxtubedirectapi);
    };
    let _0x84b660_5 = document.querySelector("\x73\x63\x72\x69\x70\x74\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x6f\x63\x74\x61\x76\x65\x2d\x70\x6c\x61\x79\x65\x72\x5d");
    _0x84b660_5 || (_0x84b660_5 = document.createElement("\x73\x63\x72\x69\x70\x74"), _0x84b660_5.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x69\x66\x72\x61\x6d\x65\x5f\x61\x70\x69", 
    _0x84b660_5.async = !0, _0x84b660_5.dataset.nyxOctavePlayer = "\x31", _0x84b660_5.addEventListener("\x65\x72\x72\x6f\x72", () => _0x84b660_3(nyxtubedirectapi), {
      once: !0
    }), document.head.appendChild(_0x84b660_5));
  }), octaveapipromise);
}

function stopoctaveprogress() {
  null != octaveprogress && clearInterval(octaveprogress), octaveprogress = null;
}

function startoctaveprogress() {
  stopoctaveprogress(), octaveprogress = setInterval(() => {
    if ("\x6f\x63\x74\x61\x76\x65" !== playbackmode || dragging || !octaveplayer) return;
    const _0x84b660_0 = Number(octaveplayer.getCurrentTime?.()) || 0, _0x84b660_1 = Number(octaveplayer.getDuration?.()) || Number(curtrack?.duration) || 0;
    _0x84b660_1 && (document.getElementById("\x74\x69\x6d\x65\x54\x6f\x74\x61\x6c").textContent = fmt(_0x84b660_1)), 
    updateseek(_0x84b660_0), syncmediapos();
  }, 500);
}

function destroyoctaveplayer() {
  stopoctaveprogress();
  try {
    octaveplayer?.stopVideo?.();
  } catch (_0x84b660_0) {}
  try {
    octaveplayer?.destroy?.();
  } catch (_0x84b660_0) {}
  octaveplayer = null, octaveplaying = !1, octavepending = !1, ensureoctaveframe(), 
  fullTrackStage.hidden = !0, fullTrackStage.dataset.playbackState = "\x69\x64\x6c\x65";
}

function setnowplayingvideomode(_0x84b660_0, _0x84b660_1 = !1) {
  _0x84b660_1 && (prefernowplayingvideo = Boolean(_0x84b660_0), musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x69\x64\x65\x6f\x5f\x69\x6e\x5f\x63\x6f\x76\x65\x72", prefernowplayingvideo ? "\x31" : "\x30"));
  const _0x84b660_2 = Boolean(_0x84b660_0 && octavevideo);
  if (nowPlayingMedia.classList.toggle("\x69\x73\x2d\x76\x69\x64\x65\x6f", _0x84b660_2), fullTrackVideo.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x84b660_2)), 
  fullTrackVideo.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_2 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x61\x6c\x62\x75\x6d\x20\x63\x6f\x76\x65\x72" : octavevideo ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x6d\x75\x73\x69\x63\x20\x76\x69\x64\x65\x6f" : "\x4d\x75\x73\x69\x63\x20\x76\x69\x64\x65\x6f\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"), 
  fullTrackVideoLabel.textContent = _0x84b660_2 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x63\x6f\x76\x65\x72" : "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x76\x69\x64\x65\x6f", 
  fullTrackFullscreen.hidden = !_0x84b660_2, fullTrackFullscreen.disabled = !_0x84b660_2, 
  !_0x84b660_2 && (document.fullscreenElement === nowPlayingMedia || document.webkitFullscreenElement === nowPlayingMedia)) {
    const _0x84b660_0 = document.exitFullscreen || document.webkitExitFullscreen;
    _0x84b660_0 && Promise.resolve(_0x84b660_0.call(document)).catch(() => {});
  }
}

function syncnowplayingfullscreen() {
  const _0x84b660_0 = document.fullscreenElement === nowPlayingMedia || document.webkitFullscreenElement === nowPlayingMedia;
  fullTrackFullscreen.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_0 ? "\x45\x78\x69\x74\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e" : "\x45\x6e\x74\x65\x72\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e"), 
  fullTrackFullscreen.title = _0x84b660_0 ? "\x45\x78\x69\x74\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e" : "\x45\x6e\x74\x65\x72\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e";
}

async function togglenowplayingfullscreen() {
  if (!nowPlayingMedia.classList.contains("\x69\x73\x2d\x76\x69\x64\x65\x6f")) return;
  const _0x84b660_0 = document.fullscreenElement === nowPlayingMedia || document.webkitFullscreenElement === nowPlayingMedia, _0x84b660_1 = _0x84b660_0 ? document.exitFullscreen || document.webkitExitFullscreen : nowPlayingMedia.requestFullscreen || nowPlayingMedia.webkitRequestFullscreen;
  if (_0x84b660_1) {
    try {
      await Promise.resolve(_0x84b660_1.call(_0x84b660_0 ? document : nowPlayingMedia));
    } catch {
      const _0x84b660_0 = document.querySelector("\x23\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x72\x61\x6d\x65\x20\x69\x66\x72\x61\x6d\x65"), _0x84b660_1 = _0x84b660_0?.requestFullscreen || _0x84b660_0?.webkitRequestFullscreen;
      _0x84b660_1 && await Promise.resolve(_0x84b660_1.call(_0x84b660_0)).catch(() => {});
    }
    syncnowplayingfullscreen();
  }
}

function setoctavevideo(_0x84b660_0 = null) {
  octavevideo = _0x84b660_0 && /^[A-Za-z0-9_-]{11}$/.test(String(_0x84b660_0.videoId || "")) ? _0x84b660_0 : null, 
  fullTrackVideo.disabled = !octavevideo, fullTrackVideo.hidden = !octavevideo, setnowplayingvideomode(Boolean(octavevideo && prefernowplayingvideo));
}

function resetnativeaudio() {
  octaverequest += 1, destroyoctaveplayer(), setoctavevideo(), playbackmode = "\x69\x64\x6c\x65", 
  nativePending = !1, document.getElementById("\x70\x6c\x61\x79\x42\x74\x6e").classList.remove("\x69\x73\x2d\x6c\x6f\x61\x64\x69\x6e\x67"), 
  audio.pause(), audio.removeAttribute("\x73\x72\x63"), audio.load(), dlBtn.hidden = !0, playIcon.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64";
}

function octaveerror(_0x84b660_0) {
  metingfallback(_0x84b660_0);
}

let nativePending = !1, nativeWantPlay = !0, nativeRetries = 0, nativeProgressAt = performance.now(), nativeLastTime = 0;

const musicPlaybackStatus = document.getElementById("\x6d\x75\x73\x69\x63\x50\x6c\x61\x79\x62\x61\x63\x6b\x53\x74\x61\x74\x75\x73");

function musicstatus(_0x84b660_0, _0x84b660_1 = !1) {
  musicPlaybackStatus.textContent = _0x84b660_0, document.getElementById("\x70\x6c\x61\x79\x65\x72\x50\x6c\x61\x79\x62\x61\x63\x6b\x53\x74\x61\x74\x75\x73").textContent = _0x84b660_0, 
  fullTrackStatus.textContent = _0x84b660_0, document.getElementById("\x70\x6c\x61\x79\x42\x74\x6e").classList.toggle("\x69\x73\x2d\x6c\x6f\x61\x64\x69\x6e\x67", _0x84b660_1), 
  requestAnimationFrame(updatebodypad);
}

function validatefullaudio(_0x84b660_0, _0x84b660_1) {
  return new Promise((_0x84b660_2, _0x84b660_3) => {
    const _0x84b660_4 = _0x84b660_0 => {
      clearTimeout(_0x84b660_7), audio.removeEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", _0x84b660_5), 
      audio.removeEventListener("\x65\x72\x72\x6f\x72", _0x84b660_6), _0x84b660_0 ? _0x84b660_3(_0x84b660_0) : _0x84b660_2();
    }, _0x84b660_5 = () => {
      if (!_0x84b660_1()) return _0x84b660_4(new DOMException("\x53\x75\x70\x65\x72\x73\x65\x64\x65\x64\x20\x70\x6c\x61\x79\x62\x61\x63\x6b", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72"));
      const _0x84b660_2 = Number(audio.duration), _0x84b660_3 = Number(_0x84b660_0);
      if (!(Number.isFinite(_0x84b660_2) && _0x84b660_2 > 0 && _0x84b660_3 > 0) || Math.abs(_0x84b660_2 - _0x84b660_3) > Math.max(4, .03 * _0x84b660_3)) return _0x84b660_4(new Error("\x54\x68\x65\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x6f\x72\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x63\x6f\x72\x64\x69\x6e\x67\x2e"));
      _0x84b660_4();
    }, _0x84b660_6 = () => _0x84b660_4(new Error("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e")), _0x84b660_7 = setTimeout(() => _0x84b660_4(new Error("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x74\x6f\x20\x6c\x6f\x61\x64\x2e")), 2e4);
    audio.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", _0x84b660_5), audio.addEventListener("\x65\x72\x72\x6f\x72", _0x84b660_6), 
    audio.load();
  });
}

async function startmetingtrack(_0x84b660_0, _0x84b660_1, _0x84b660_2 = 0) {
  nativePending = !0, nativeProgressAt = performance.now(), nativeLastTime = _0x84b660_2, 
  playbackmode = "\x6d\x65\x74\x69\x6e\x67", setoctavevideo(), audio.pause(), audio.removeAttribute("\x73\x72\x63"), 
  audio.load(), fullTrackTitle.textContent = _0x84b660_0.title || "\x46\x75\x6c\x6c\x20\x74\x72\x61\x63\x6b", musicstatus("\x46\x69\x6e\x64\x69\x6e\x67\x20\x74\x68\x65\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67\u2026", !0), 
  playIcon.className = nativeWantPlay ? "\x6d\x61\x74\x65\x72\x69\x61\x6c\x2d\x73\x79\x6d\x62\x6f\x6c\x73\x2d\x2d\x70\x61\x75\x73\x65\x2d\x72\x6f\x75\x6e\x64\x65\x64" : "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64";
  try {
    const _0x84b660_4 = await getfulltrackmatch(_0x84b660_0);
    if (_0x84b660_1 !== octaverequest || curtrack !== _0x84b660_0) return;
    if (!validfulltrackmatch(_0x84b660_4)) throw new Error("\x4e\x6f\x20\x6d\x61\x74\x63\x68\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x72\x65\x63\x6f\x72\x64\x69\x6e\x67\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e");
    if (pendingseek = _0x84b660_2 > 0 ? _0x84b660_2 : null, audio.src = _0x84b660_4.streamUrl, 
    await validatefullaudio(_0x84b660_4.durationSeconds, () => _0x84b660_1 === octaverequest && curtrack === _0x84b660_0), 
    _0x84b660_1 !== octaverequest || curtrack !== _0x84b660_0) return;
    if (nativePending = !1, nativeProgressAt = performance.now(), musicstatus("\x4c\x6f\x61\x64\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67\u2026", !0), 
    dlBtn.hidden = !0, schedulequeueprefetch(), nativeWantPlay) try {
      await audio.play();
    } catch (_0x84b660_3) {
      if (_0x84b660_1 !== octaverequest || curtrack !== _0x84b660_0) return;
      "\x4e\x6f\x74\x41\x6c\x6c\x6f\x77\x65\x64\x45\x72\x72\x6f\x72" === _0x84b660_3.name ? (nativeWantPlay = !1, musicstatus("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x2e")) : "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === _0x84b660_3.name || audio.error || musicstatus("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x61\x75\x64\x69\x6f\x2e\x20\x50\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x20\x74\x6f\x20\x72\x65\x74\x72\x79\x2e");
    } else musicstatus("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x2e");
  } catch (_0x84b660_3) {
    if (_0x84b660_1 !== octaverequest || curtrack !== _0x84b660_0) return;
    if (!navigator.onLine) return nativePending = !1, void musicstatus("\x59\x6f\x75\u2019\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x50\x6c\x61\x79\x62\x61\x63\x6b\x20\x77\x69\x6c\x6c\x20\x72\x65\x74\x72\x79\x20\x77\x68\x65\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e");
    if ("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e" === _0x84b660_3.message && nativeRetries < 1) return nativePending = !1, 
    void recovernative(_0x84b660_3.message);
    metingfallback(_0x84b660_3.message);
  }
}

function metingfallback(_0x84b660_0) {
  evictfulltrackmatch(curtrack), resetnativeaudio(), musicstatus(_0x84b660_0 + "\x20\x46\x75\x6c\x6c\x2d\x73\x6f\x6e\x67\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x50\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x20\x74\x6f\x20\x72\x65\x74\x72\x79\x2e");
}

function recovernative(_0x84b660_0) {
  if ("\x6d\x65\x74\x69\x6e\x67" === playbackmode && !nativePending && curtrack) if (0 === nativeRetries++) {
    const _0x84b660_0 = audio.currentTime || 0;
    evictfulltrackmatch(curtrack), startmetingtrack(curtrack, octaverequest, _0x84b660_0);
  } else metingfallback(_0x84b660_0);
}

function playbackpaused() {
  return nativePending ? !nativeWantPlay : "\x6f\x63\x74\x61\x76\x65" === playbackmode ? !octaveplaying : audio.paused;
}

function playbackplay() {
  if (nativeWantPlay = !0, nativeProgressAt = performance.now(), !nativePending) return "\x69\x64\x6c\x65" === playbackmode && curtrack ? (nativeRetries = 0, 
  void startmetingtrack(curtrack, octaverequest)) : void ("\x6f\x63\x74\x61\x76\x65" === playbackmode || octavepending ? octaveplayer?.playVideo?.() : audio.play().catch(() => musicstatus("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x70\x6c\x61\x79\x2e\x20\x53\x65\x6c\x65\x63\x74\x20\x74\x68\x65\x20\x73\x6f\x6e\x67\x20\x61\x67\x61\x69\x6e\x20\x74\x6f\x20\x72\x65\x74\x72\x79\x2e")));
  playIcon.className = "\x6d\x61\x74\x65\x72\x69\x61\x6c\x2d\x73\x79\x6d\x62\x6f\x6c\x73\x2d\x2d\x70\x61\x75\x73\x65\x2d\x72\x6f\x75\x6e\x64\x65\x64";
}

function playbackpause() {
  nativeWantPlay = !1, nativePending ? (playIcon.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64", 
  musicstatus("\x53\x6f\x6e\x67\x20\x69\x73\x20\x6c\x6f\x61\x64\x69\x6e\x67\x20\u2014\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x70\x61\x75\x73\x65\x64\x2e")) : "\x6d\x65\x74\x69\x6e\x67" === playbackmode && musicstatus("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x70\x61\x75\x73\x65\x64"), 
  "\x6f\x63\x74\x61\x76\x65" === playbackmode ? octaveplayer?.pauseVideo?.() : audio.pause();
}

function playbacktime() {
  return "\x6f\x63\x74\x61\x76\x65" === playbackmode ? Number(octaveplayer?.getCurrentTime?.()) || 0 : Number(audio.currentTime) || 0;
}

function playbackduration() {
  return "\x6f\x63\x74\x61\x76\x65" === playbackmode ? Number(octaveplayer?.getDuration?.()) || Number(curtrack?.duration) || 0 : isFinite(audio.duration) && audio.duration ? audio.duration : Number(curtrack?.duration) || 0;
}

function playbackseek(_0x84b660_0) {
  "\x6f\x63\x74\x61\x76\x65" === playbackmode ? octaveplayer?.seekTo?.(_0x84b660_0, !0) : audio.currentTime = _0x84b660_0;
}

function playtrack(_0x84b660_0, _0x84b660_1, _0x84b660_2 = "") {
  ++fullTrackPrefetchRevision;
  for (const [_0x84b660_4, _0x84b660_5] of fullTrackMatchInflight) _0x84b660_4 !== fulltrackcachekey(_0x84b660_0) && _0x84b660_5.controller.abort();
  cancelqueuedseek();
  const _0x84b660_3 = _0x84b660_2 || inferplaycontext(_0x84b660_1);
  curtrack = _0x84b660_0, queue = (_0x84b660_1 || results).slice(), qindex = queue.findIndex(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id), 
  -1 === qindex && (queue.unshift(_0x84b660_0), qindex = 0), playbackContext = _0x84b660_3, 
  pushhistory(_0x84b660_0), resetnativeaudio(), nativeRetries = 0, nativeWantPlay = !0, 
  startmetingtrack(_0x84b660_0, octaverequest), setcover(document.getElementById("\x70\x41\x72\x74"), _0x84b660_0.cover, `${_0x84b660_0.title}\x20\x63\x6f\x76\x65\x72`), 
  document.getElementById("\x70\x54\x69\x74\x6c\x65").textContent = _0x84b660_0.title, document.getElementById("\x70\x54\x69\x74\x6c\x65").title = _0x84b660_0.title, 
  document.getElementById("\x70\x41\x72\x74\x69\x73\x74").textContent = _0x84b660_0.artist, document.getElementById("\x70\x41\x72\x74\x69\x73\x74").title = _0x84b660_0.artist, 
  document.getElementById("\x74\x69\x6d\x65\x54\x6f\x74\x61\x6c").textContent = fmt(_0x84b660_0.duration), dlBtn.removeAttribute("\x68\x72\x65\x66"), 
  dlBtn.hidden = !0, dlBtn.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", `${_0x84b660_0.artist || "\x75\x6e\x6b\x6e\x6f\x77\x6e"}\x20\x2d\x20${_0x84b660_0.title || "\x73\x6f\x6e\x67"}\x2e\x6d\x70\x33`.replace(/["\\]/g, "")), 
  dlBtn.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20${_0x84b660_0.title}`), pPlaylist.disabled = !1, 
  setmedia(_0x84b660_0), seekBar.value = 0, seekBar.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", "\x30\x25"), 
  document.getElementById("\x74\x69\x6d\x65\x43\x75\x72").textContent = "\x30\x3a\x30\x30", setplayingid(_0x84b660_0.id), 
  refreshlikes(), renderqueue(), rendernowplaying(), setplayershown(!0);
}

function playat(_0x84b660_0) {
  _0x84b660_0 >= 0 && _0x84b660_0 < queue.length && playtrack(queue[_0x84b660_0], queue, playbackContext);
}

function resetend() {
  playIcon.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64", seekBar.value = 0, seekBar.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", "\x30\x25"), 
  document.getElementById("\x74\x69\x6d\x65\x43\x75\x72").textContent = "\x30\x3a\x30\x30";
}

function advance(_0x84b660_0) {
  if (!queue.length) return;
  if (shuffleon && queue.length > 1) {
    let _0x84b660_0;
    do {
      _0x84b660_0 = Math.floor(Math.random() * queue.length);
    } while (_0x84b660_0 === qindex);
    return playat(_0x84b660_0);
  }
  let _0x84b660_1 = qindex + 1;
  if (_0x84b660_1 >= queue.length) {
    if ("\x61\x6c\x6c" !== repeatmode && !_0x84b660_0) return resetend();
    _0x84b660_1 = 0;
  }
  playat(_0x84b660_1);
}

function playprev() {
  playbacktime() > 3 ? playbackseek(0) : qindex > 0 ? playat(qindex - 1) : playbackseek(0);
}

audio.addEventListener("\x70\x6c\x61\x79\x69\x6e\x67", () => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && musicstatus("\x50\x6c\x61\x79\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67");
}), audio.addEventListener("\x77\x61\x69\x74\x69\x6e\x67", () => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && nativeWantPlay && musicstatus("\x42\x75\x66\x66\x65\x72\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67\u2026", !0);
}), audio.addEventListener("\x63\x61\x6e\x70\x6c\x61\x79", () => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && audio.paused && musicstatus("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x2e");
}), audio.addEventListener("\x65\x72\x72\x6f\x72", () => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && !nativePending && curtrack && audio.error && (navigator.onLine ? recovernative("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e") : musicstatus("\x59\x6f\x75\u2019\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x50\x6c\x61\x79\x62\x61\x63\x6b\x20\x77\x69\x6c\x6c\x20\x72\x65\x74\x72\x79\x20\x77\x68\x65\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e"));
}), audio.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
  audio.currentTime !== nativeLastTime && (nativeLastTime = audio.currentTime, nativeProgressAt = performance.now());
}), setInterval(() => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && !nativePending && nativeWantPlay && !audio.ended && navigator.onLine && performance.now() - nativeProgressAt > 45e3 && recovernative("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x73\x74\x6f\x70\x70\x65\x64\x20\x72\x65\x73\x70\x6f\x6e\x64\x69\x6e\x67\x2e");
}, 5e3), window.addEventListener("\x6f\x66\x66\x6c\x69\x6e\x65", () => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && musicstatus("\x59\x6f\x75\u2019\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x42\x75\x66\x66\x65\x72\x65\x64\x20\x61\x75\x64\x69\x6f\x20\x6d\x61\x79\x20\x63\x6f\x6e\x74\x69\x6e\x75\x65\x20\x70\x6c\x61\x79\x69\x6e\x67\x2e");
}), window.addEventListener("\x6f\x6e\x6c\x69\x6e\x65", () => {
  "\x6d\x65\x74\x69\x6e\x67" === playbackmode && nativeWantPlay && (audio.error || audio.readyState < 3) && recovernative("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x2e");
}), fullTrackVideo.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  octavevideo && setnowplayingvideomode(!nowPlayingMedia.classList.contains("\x69\x73\x2d\x76\x69\x64\x65\x6f"), !0);
}), fullTrackFullscreen.addEventListener("\x63\x6c\x69\x63\x6b", togglenowplayingfullscreen), document.addEventListener("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", syncnowplayingfullscreen), 
document.addEventListener("\x77\x65\x62\x6b\x69\x74\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", syncnowplayingfullscreen), setoctavevideo(), 
document.getElementById("\x6e\x65\x78\x74\x42\x74\x6e").addEventListener("\x63\x6c\x69\x63\x6b", () => advance(!0)), 
document.getElementById("\x70\x72\x65\x76\x42\x74\x6e").addEventListener("\x63\x6c\x69\x63\x6b", playprev), audio.addEventListener("\x65\x6e\x64\x65\x64", () => {
  if ("\x6f\x63\x74\x61\x76\x65" !== playbackmode) return octavepending && octaveplayer ? (playIcon.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64", 
  fullTrackStage.dataset.playbackState = "\x72\x65\x61\x64\x79", void (fullTrackStatus.textContent = "\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\x2d\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79")) : "\x6f\x6e\x65" === repeatmode ? (audio.currentTime = 0, 
  void playbackplay()) : void advance(!1);
});

const shuffleBtn = document.getElementById("\x73\x68\x75\x66\x66\x6c\x65\x42\x74\x6e");

shuffleBtn.classList.toggle("\x6f\x6e", shuffleon), shuffleBtn.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(shuffleon)), 
shuffleBtn.title = "\x73\x68\x75\x66\x66\x6c\x65\x3a\x20" + (shuffleon ? "\x6f\x6e" : "\x6f\x66\x66"), shuffleBtn.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  shuffleon = !shuffleon, musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x73\x68\x75\x66\x66\x6c\x65", shuffleon ? "\x31" : "\x30"), 
  shuffleBtn.classList.toggle("\x6f\x6e", shuffleon), shuffleBtn.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(shuffleon)), 
  shuffleBtn.title = "\x73\x68\x75\x66\x66\x6c\x65\x3a\x20" + (shuffleon ? "\x6f\x6e" : "\x6f\x66\x66");
});

const repeatBtn = document.getElementById("\x72\x65\x70\x65\x61\x74\x42\x74\x6e"), repeatIcon = document.getElementById("\x72\x65\x70\x65\x61\x74\x49\x63\x6f\x6e"), repeatNext = {
  off: "\x61\x6c\x6c",
  all: "\x6f\x6e\x65",
  one: "\x6f\x66\x66"
};

function syncrepeatcontrol() {
  const _0x84b660_0 = "\x61\x6c\x6c" === repeatmode ? "\x51\x75\x65\x75\x65" : "\x6f\x6e\x65" === repeatmode ? "\x53\x6f\x6e\x67" : "\x4f\x66\x66", _0x84b660_1 = "\x6f\x66\x66" === repeatmode ? "\x72\x65\x70\x65\x61\x74\x20\x74\x68\x65\x20\x71\x75\x65\x75\x65" : "\x61\x6c\x6c" === repeatmode ? "\x72\x65\x70\x65\x61\x74\x20\x74\x68\x69\x73\x20\x73\x6f\x6e\x67" : "\x74\x75\x72\x6e\x20\x72\x65\x70\x65\x61\x74\x20\x6f\x66\x66";
  repeatIcon.className = "\x6f\x6e\x65" === repeatmode ? "\x69\x63\x2d\x72\x65\x70\x65\x61\x74\x2d\x6f\x6e\x65" : "\x69\x63\x2d\x72\x65\x70\x65\x61\x74", repeatBtn.classList.toggle("\x6f\x6e", "\x6f\x66\x66" !== repeatmode), 
  repeatBtn.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String("\x6f\x66\x66" !== repeatmode)), repeatBtn.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x52\x65\x70\x65\x61\x74\x3a\x20" + _0x84b660_0 + "\x2e\x20\x43\x6c\x69\x63\x6b\x20\x74\x6f\x20" + _0x84b660_1 + "\x2e"), 
  repeatBtn.title = "\x52\x65\x70\x65\x61\x74\x3a\x20" + _0x84b660_0 + "\x2e\x20\x43\x6c\x69\x63\x6b\x20\x74\x6f\x20" + _0x84b660_1 + "\x2e";
}

syncrepeatcontrol(), repeatBtn.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  repeatmode = repeatNext[repeatmode], musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x72\x65\x70\x65\x61\x74", repeatmode), 
  syncrepeatcontrol(), schedulequeueprefetch();
}), playBtn.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  curtrack ? octavepending || playbackpaused() ? playbackplay() : playbackpause() : results.length ? playtrack(results[0]) : homeData.tracks.length ? playtrack(homeData.tracks[0], homeData.tracks, "\x50\x6f\x70\x75\x6c\x61\x72\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b") : getlikes().length && playtrack(getlikes()[0]);
}), audio.addEventListener("\x70\x6c\x61\x79", () => {
  "\x6f\x63\x74\x61\x76\x65" !== playbackmode && (playIcon.className = "\x6d\x61\x74\x65\x72\x69\x61\x6c\x2d\x73\x79\x6d\x62\x6f\x6c\x73\x2d\x2d\x70\x61\x75\x73\x65\x2d\x72\x6f\x75\x6e\x64\x65\x64");
}), audio.addEventListener("\x70\x61\x75\x73\x65", () => {
  "\x6f\x63\x74\x61\x76\x65" !== playbackmode && (playIcon.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64");
});

const pLikeBtn = document.getElementById("\x70\x4c\x69\x6b\x65");

pLikeBtn.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
  if (_0x84b660_0.stopPropagation(), !curtrack) return;
  const _0x84b660_1 = togglelike(curtrack);
  paintheart(pLikeBtn, _0x84b660_1), popheart(pLikeBtn), refreshlikes();
});

const queueToggle = document.getElementById("\x71\x75\x65\x75\x65\x54\x6f\x67\x67\x6c\x65"), queuePanel = document.getElementById("\x71\x75\x65\x75\x65\x50\x61\x6e\x65\x6c"), qBadge = document.getElementById("\x71\x42\x61\x64\x67\x65");

function setqueueopen(_0x84b660_0) {
  queueopen = _0x84b660_0, queuePanel.classList.toggle("\x6f\x70\x65\x6e", _0x84b660_0), queueToggle.classList.toggle("\x6f\x6e", _0x84b660_0), 
  queueToggle.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x84b660_0)), queuePanel.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", String(!_0x84b660_0));
}

function renderqueue() {
  const _0x84b660_0 = document.getElementById("\x71\x4c\x69\x73\x74"), _0x84b660_1 = queue.slice(qindex + 1);
  if (_0x84b660_0.innerHTML = "", qBadge.textContent = _0x84b660_1.length, qBadge.hidden = 0 === _0x84b660_1.length, 
  !_0x84b660_1.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    return _0x84b660_1.className = "\x71\x2d\x65\x6d\x70\x74\x79", _0x84b660_1.textContent = curtrack ? "\x45\x6e\x64\x20\x6f\x66\x20\x71\x75\x65\x75\x65\x2e\x20\x54\x75\x72\x6e\x20\x6f\x6e\x20\x72\x65\x70\x65\x61\x74\x20\x74\x6f\x20\x6b\x65\x65\x70\x20\x6c\x69\x73\x74\x65\x6e\x69\x6e\x67\x2e" : "\x50\x6c\x61\x79\x20\x61\x20\x73\x6f\x6e\x67\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x61\x20\x71\x75\x65\x75\x65\x2e", 
    void _0x84b660_0.appendChild(_0x84b660_1);
  }
  _0x84b660_1.forEach((_0x84b660_1, _0x84b660_2) => {
    const _0x84b660_3 = qindex + 1 + _0x84b660_2, _0x84b660_4 = document.createElement("\x64\x69\x76");
    _0x84b660_4.className = "\x6d\x69\x6e\x69", _0x84b660_4.innerHTML = `\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${esc(_0x84b660_1.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x6d\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x74\x22\x3e${esc(_0x84b660_1.title)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x61\x22\x3e${esc(_0x84b660_1.artist)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e`, 
    makeclickable(_0x84b660_4, `\x70\x6c\x61\x79\x20${_0x84b660_1.title}`, () => playat(_0x84b660_3)), 
    _0x84b660_4.addEventListener("\x63\x6c\x69\x63\x6b", () => playat(_0x84b660_3)), _0x84b660_0.appendChild(_0x84b660_4);
  });
}

queueToggle.addEventListener("\x63\x6c\x69\x63\x6b", () => setqueueopen(!queueopen)), document.getElementById("\x71\x48\x69\x64\x65").addEventListener("\x63\x6c\x69\x63\x6b", () => setqueueopen(!1)), 
document.getElementById("\x71\x43\x6c\x65\x61\x72").addEventListener("\x63\x6c\x69\x63\x6b", () => {
  queue = queue.slice(0, qindex + 1), renderqueue(), rendernowplaying();
});

const timeCur = document.getElementById("\x74\x69\x6d\x65\x43\x75\x72");

let pendingseek = null, queuedseek = null, seekapplytimer = null;

function knowndur() {
  return playbackduration();
}

function updatebuffered() {
  let _0x84b660_0 = 0;
  const _0x84b660_1 = Number(audio.duration);
  if (Number.isFinite(_0x84b660_1) && _0x84b660_1 > 0) for (let _0x84b660_2 = 0; _0x84b660_2 < audio.buffered.length; _0x84b660_2++) audio.buffered.start(_0x84b660_2) <= audio.currentTime && audio.buffered.end(_0x84b660_2) >= audio.currentTime && (_0x84b660_0 = audio.buffered.end(_0x84b660_2));
  seekBar.style.setProperty("\x2d\x2d\x62\x75\x66\x66\x65\x72\x65\x64", _0x84b660_1 > 0 ? Math.min(100, _0x84b660_0 / _0x84b660_1 * 100) + "\x25" : "\x30\x25");
}

function updateseek(_0x84b660_0) {
  updatebuffered();
  const _0x84b660_1 = knowndur();
  if (!_0x84b660_1) return;
  const _0x84b660_2 = Math.min(100, Math.max(0, _0x84b660_0 / _0x84b660_1 * 100));
  seekBar.value = _0x84b660_2, seekBar.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", _0x84b660_2 + "\x25"), 
  timeCur.textContent = fmt(_0x84b660_0);
}

function seekbartarget() {
  let _0x84b660_0 = Math.min(100, Math.max(0, Number.parseFloat(seekBar.value) || 0)) / 100 * knowndur();
  _0x84b660_0 = Math.max(_0x84b660_0, 0);
  const _0x84b660_1 = playbackduration();
  return _0x84b660_1 && (_0x84b660_0 = Math.min(_0x84b660_0, Math.max(_0x84b660_1 - .25, 0))), 
  _0x84b660_0;
}

function applyseek(_0x84b660_0) {
  if (curtrack) {
    if ("\x6f\x63\x74\x61\x76\x65" === playbackmode) return playbackseek(_0x84b660_0), void (pendingseek = null);
    if (audio.readyState >= HTMLMediaElement.HAVE_METADATA && isFinite(audio.duration) && audio.duration) try {
      return audio.currentTime = _0x84b660_0, void (pendingseek = null);
    } catch (_0x84b660_1) {}
    pendingseek = _0x84b660_0;
  }
}

function scheduleseek(_0x84b660_0) {
  queuedseek = _0x84b660_0, null == seekapplytimer && (seekapplytimer = setTimeout(() => {
    seekapplytimer = null;
    const _0x84b660_0 = queuedseek;
    queuedseek = null, applyseek(_0x84b660_0);
  }, 75));
}

function flushseek(_0x84b660_0) {
  null != seekapplytimer && clearTimeout(seekapplytimer), seekapplytimer = null, queuedseek = null, 
  applyseek(_0x84b660_0);
}

function cancelqueuedseek() {
  null != seekapplytimer && clearTimeout(seekapplytimer), seekapplytimer = null, queuedseek = null, 
  pendingseek = null, dragging = !1, seekBar.classList.remove("\x64\x72\x61\x67\x67\x69\x6e\x67");
}

function beginseek() {
  dragging = !0, seekBar.classList.add("\x64\x72\x61\x67\x67\x69\x6e\x67");
}

function commitseek() {
  if (seekBar.classList.remove("\x64\x72\x61\x67\x67\x69\x6e\x67"), dragging = !1, !curtrack) return;
  const _0x84b660_0 = seekbartarget();
  flushseek(_0x84b660_0), updateseek(_0x84b660_0);
}

function skipby(_0x84b660_0) {
  if (!curtrack) return;
  const _0x84b660_1 = knowndur(), _0x84b660_2 = playbacktime(), _0x84b660_3 = Math.min(Math.max(_0x84b660_2 + _0x84b660_0, 0), Math.max(_0x84b660_1 - .25, 0));
  try {
    playbackseek(_0x84b660_3);
  } catch (_0x84b660_4) {}
  updateseek(_0x84b660_3);
}

audio.addEventListener("\x70\x72\x6f\x67\x72\x65\x73\x73", updatebuffered), audio.addEventListener("\x65\x6d\x70\x74\x69\x65\x64", updatebuffered), 
audio.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", () => {
  if ("\x6d\x65\x74\x69\x6e\x67" === playbackmode && !nativePending && Number(curtrack?.duration) > 0 && Number.isFinite(audio.duration) && Math.abs(audio.duration - Number(curtrack.duration)) > Math.max(4, .03 * Number(curtrack.duration))) metingfallback("\x54\x68\x65\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x6f\x72\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x63\x6f\x72\x64\x69\x6e\x67\x2e"); else if (document.getElementById("\x74\x69\x6d\x65\x54\x6f\x74\x61\x6c").textContent = fmt(audio.duration), 
  null != pendingseek) {
    try {
      audio.currentTime = pendingseek;
    } catch (_0x84b660_0) {}
    pendingseek = null;
  }
}), audio.addEventListener("\x73\x65\x65\x6b\x65\x64", () => {
  dragging || updateseek(audio.currentTime);
}), audio.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
  dragging || audio.seeking || updateseek(audio.currentTime);
}), seekBar.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", beginseek), seekBar.addEventListener("\x69\x6e\x70\x75\x74", () => {
  beginseek();
  const _0x84b660_0 = seekbartarget();
  seekBar.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", seekBar.value + "\x25"), timeCur.textContent = fmt(_0x84b660_0), 
  scheduleseek(_0x84b660_0);
}), seekBar.addEventListener("\x63\x68\x61\x6e\x67\x65", commitseek), seekBar.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", commitseek), 
seekBar.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x6e\x63\x65\x6c", commitseek), seekBar.addEventListener("\x62\x6c\x75\x72", commitseek);

const volBar = document.getElementById("\x76\x6f\x6c\x42\x61\x72"), volBtn = document.getElementById("\x76\x6f\x6c\x42\x74\x6e"), volIcon = document.getElementById("\x76\x6f\x6c\x49\x63\x6f\x6e"), volWrap = document.getElementById("\x76\x6f\x6c\x57\x72\x61\x70"), volPopup = document.getElementById("\x76\x6f\x6c\x50\x6f\x70\x75\x70");

let volopen = !1;

function setvolume(_0x84b660_0) {
  _0x84b660_0 = Math.min(100, Math.max(0, _0x84b660_0)), audio.volume = _0x84b660_0 / 100, 
  audio.muted = !1, "\x6f\x63\x74\x61\x76\x65" === playbackmode && (octaveplayer?.unMute?.(), octaveplayer?.setVolume?.(_0x84b660_0)), 
  volBar.value = _0x84b660_0, volBar.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", _0x84b660_0 + "\x25"), 
  musicStorage.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x6f\x6c\x75\x6d\x65", _0x84b660_0), syncvolume();
}

function syncvolume() {
  const _0x84b660_0 = "\x6f\x63\x74\x61\x76\x65" === playbackmode ? (Number(octaveplayer?.getVolume?.()) || 0) / 100 : audio.volume, _0x84b660_1 = "\x6f\x63\x74\x61\x76\x65" === playbackmode ? Boolean(octaveplayer?.isMuted?.()) || 0 === _0x84b660_0 : audio.muted || 0 === _0x84b660_0;
  volIcon.className = _0x84b660_1 ? "\x6c\x75\x63\x69\x64\x65\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x2d\x78" : _0x84b660_0 < .5 ? "\x6c\x75\x63\x69\x64\x65\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x2d\x31" : "\x6c\x75\x63\x69\x64\x65\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x2d\x32";
}

function setvolopen(_0x84b660_0) {
  volopen = _0x84b660_0, volPopup.classList.toggle("\x6f\x70\x65\x6e", _0x84b660_0), volBtn.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x84b660_0));
}

volBtn.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
  _0x84b660_0.stopPropagation(), setvolopen(!volopen);
}), document.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
  volopen && !volWrap.contains(_0x84b660_0.target) && setvolopen(!1);
}), volBar.addEventListener("\x69\x6e\x70\x75\x74", () => {
  setvolume(parseFloat(volBar.value));
});

const savedvol = musicStorage.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x6f\x6c\x75\x6d\x65"), initvol = null !== savedvol && "" !== savedvol && Number.isFinite(Number(savedvol)) ? Math.min(100, Math.max(0, Number(savedvol))) : 80;

volBar.value = initvol, audio.volume = initvol / 100, volBar.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", initvol + "\x25"), 
syncvolume(), document.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x84b660_0 => {
  const _0x84b660_1 = (_0x84b660_0.target.tagName || "").toLowerCase(), _0x84b660_2 = "\x69\x6e\x70\x75\x74" === _0x84b660_1 || "\x74\x65\x78\x74\x61\x72\x65\x61" === _0x84b660_1 || _0x84b660_0.target.isContentEditable;
  if ("\x45\x73\x63\x61\x70\x65" === _0x84b660_0.key) return queueopen && setqueueopen(!1), void (volopen && setvolopen(!1));
  "\x2f" !== _0x84b660_0.key ? _0x84b660_2 || ("\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x41\x72\x72\x6f\x77\x55\x70" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x53\x70\x61\x63\x65" !== _0x84b660_0.code || "\x62\x75\x74\x74\x6f\x6e" === _0x84b660_1 || _0x84b660_0.target.closest("\x5b\x72\x6f\x6c\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x5d") || (_0x84b660_0.preventDefault(), 
  playBtn.click()) : (_0x84b660_0.preventDefault(), setvolume(("\x6f\x63\x74\x61\x76\x65" === playbackmode ? Number(octaveplayer?.getVolume?.()) || 0 : audio.muted ? 0 : 100 * audio.volume) - 5)) : (_0x84b660_0.preventDefault(), 
  setvolume(("\x6f\x63\x74\x61\x76\x65" === playbackmode ? Number(octaveplayer?.getVolume?.()) || 0 : audio.muted ? 0 : 100 * audio.volume) + 5)) : (_0x84b660_0.preventDefault(), 
  skipby(-10)) : (_0x84b660_0.preventDefault(), skipby(10))) : _0x84b660_2 || (_0x84b660_0.preventDefault(), 
  searchInput.focus());
}), window.addEventListener("\x72\x65\x73\x69\x7a\x65", updatebodypad);

const nyxifyThemeAccents = Object.freeze({
  default: "\x23\x39\x62\x38\x63\x66\x35",
  midnight: "\x23\x39\x65\x62\x37\x64\x39",
  ruby: "\x23\x64\x35\x38\x62\x39\x61",
  emerald: "\x23\x38\x32\x63\x34\x61\x65",
  sakura: "\x23\x64\x35\x61\x32\x63\x36",
  fresh: "\x23\x61\x36\x63\x39\x39\x63"
});

function validhex(_0x84b660_0) {
  return /^#[0-9a-f]{6}$/i.test(String(_0x84b660_0 || "").trim());
}

function hexrgb(_0x84b660_0) {
  const _0x84b660_1 = validhex(_0x84b660_0) ? _0x84b660_0.slice(1) : nyxifyThemeAccents.default.slice(1);
  return [ 0, 2, 4 ].map(_0x84b660_0 => parseInt(_0x84b660_1.slice(_0x84b660_0, _0x84b660_0 + 2), 16));
}

let nyxifyConstellationScene = null;

function applynyxifytheme() {
  if ("\x74\x75\x74\x73\x69" === document.documentElement.dataset.appShell) return;
  const _0x84b660_0 = musicStorage.getItem("\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65") || "\x64\x65\x66\x61\x75\x6c\x74";
  let _0x84b660_1 = "\x63\x75\x73\x74\x6f\x6d" === _0x84b660_0 ? musicStorage.getItem("\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72") : nyxifyThemeAccents[_0x84b660_0];
  validhex(_0x84b660_1) || (_0x84b660_1 = nyxifyThemeAccents.default);
  const _0x84b660_2 = hexrgb(_0x84b660_1);
  Math.max(..._0x84b660_2) < 72 && (_0x84b660_1 = "\x23\x66\x31\x66\x33\x66\x37"), document.documentElement.dataset.nyxifyTheme = _0x84b660_0, 
  document.documentElement.style.setProperty("\x2d\x2d\x61\x63\x63\x65\x6e\x74", _0x84b660_1), document.documentElement.style.setProperty("\x2d\x2d\x61\x63\x63\x65\x6e\x74\x2d\x72\x67\x62", hexrgb(_0x84b660_1).join("\x2c\x20")), 
  nyxifyConstellationScene?.refreshColor();
}

function setupconstellations(_0x84b660_0) {
  if (!_0x84b660_0) return null;
  const _0x84b660_1 = _0x84b660_0.getContext("\x32\x64"), _0x84b660_2 = window.matchMedia("\x28\x70\x72\x65\x66\x65\x72\x73\x2d\x72\x65\x64\x75\x63\x65\x64\x2d\x6d\x6f\x74\x69\x6f\x6e\x3a\x20\x72\x65\x64\x75\x63\x65\x29").matches, _0x84b660_3 = Array.from({
    length: 54
  }, (_0x84b660_0, _0x84b660_1) => ({
    x: 47 * _0x84b660_1 % 101 / 100,
    y: (71 * _0x84b660_1 + 13) % 103 / 102,
    r: .45 + _0x84b660_1 % 4 * .18,
    o: .12 + _0x84b660_1 % 5 * .035
  })), _0x84b660_4 = [ {
    x: .13,
    y: .24,
    s: 74,
    points: [ [ -.8, .1 ], [ -.28, -.2 ], [ .18, .05 ], [ .63, -.58 ], [ .9, .25 ], [ .24, .52 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ], [ 4, 5 ] ]
  }, {
    x: .47,
    y: .16,
    s: 58,
    points: [ [ -.75, .45 ], [ -.42, -.32 ], [ .1, -.08 ], [ .54, -.52 ], [ .77, .23 ], [ .15, .62 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]
  }, {
    x: .82,
    y: .28,
    s: 70,
    points: [ [ -.82, .12 ], [ -.38, -.4 ], [ .05, -.08 ], [ .58, -.55 ], [ .83, .08 ], [ .42, .55 ], [ -.18, .42 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 4, 5 ], [ 5, 6 ], [ 6, 2 ] ]
  }, {
    x: .24,
    y: .72,
    s: 62,
    points: [ [ -.7, -.3 ], [ -.26, .12 ], [ .08, -.48 ], [ .5, -.08 ], [ .78, .46 ], [ .06, .58 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 1, 3 ], [ 3, 4 ], [ 3, 5 ] ]
  }, {
    x: .62,
    y: .66,
    s: 82,
    points: [ [ -.84, .2 ], [ -.45, -.42 ], [ -.04, -.08 ], [ .38, -.52 ], [ .75, -.08 ], [ .48, .5 ], [ -.18, .58 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 4, 5 ], [ 5, 6 ], [ 6, 2 ] ]
  }, {
    x: .88,
    y: .82,
    s: 52,
    points: [ [ -.76, .32 ], [ -.38, -.28 ], [ .12, -.5 ], [ .6, -.12 ], [ .76, .48 ], [ .04, .58 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 1 ] ]
  } ];
  let _0x84b660_5 = 0, _0x84b660_6 = 0, _0x84b660_7 = hexrgb(getComputedStyle(document.documentElement).getPropertyValue("\x2d\x2d\x61\x63\x63\x65\x6e\x74").trim()), _0x84b660_8 = 0;
  function _0x84b660_9() {
    const _0x84b660_2 = Math.min(2, window.devicePixelRatio || 1);
    _0x84b660_5 = window.innerWidth, _0x84b660_6 = window.innerHeight, _0x84b660_0.width = Math.round(_0x84b660_5 * _0x84b660_2), 
    _0x84b660_0.height = Math.round(_0x84b660_6 * _0x84b660_2), _0x84b660_0.style.width = `${_0x84b660_5}\x70\x78`, 
    _0x84b660_0.style.height = `${_0x84b660_6}\x70\x78`, _0x84b660_1.setTransform(_0x84b660_2, 0, 0, _0x84b660_2, 0, 0);
  }
  function _0x84b660_a() {
    _0x84b660_7 = hexrgb(getComputedStyle(document.documentElement).getPropertyValue("\x2d\x2d\x61\x63\x63\x65\x6e\x74").trim());
  }
  return window.addEventListener("\x72\x65\x73\x69\x7a\x65", _0x84b660_9, {
    passive: !0
  }), _0x84b660_9(), _0x84b660_a(), function _0x84b660_0(_0x84b660_9 = 0) {
    if (!_0x84b660_2 && _0x84b660_9 - _0x84b660_8 < 42) return void requestAnimationFrame(_0x84b660_0);
    _0x84b660_8 = _0x84b660_9, _0x84b660_1.clearRect(0, 0, _0x84b660_5, _0x84b660_6);
    const _0x84b660_a = _0x84b660_2 ? 0 : .035 * Math.sin(_0x84b660_9 / 1700);
    for (const _0x84b660_2 of _0x84b660_3) _0x84b660_1.beginPath(), _0x84b660_1.arc(_0x84b660_2.x * _0x84b660_5, _0x84b660_2.y * _0x84b660_6, _0x84b660_2.r, 0, 2 * Math.PI), 
    _0x84b660_1.fillStyle = `\x72\x67\x62\x61\x28${_0x84b660_7.join("\x2c")}\x2c${_0x84b660_2.o + _0x84b660_a}\x29`, 
    _0x84b660_1.fill();
    for (let _0x84b660_3 = 0; _0x84b660_3 < _0x84b660_4.length; _0x84b660_3 += 1) {
      const _0x84b660_0 = _0x84b660_4[_0x84b660_3], _0x84b660_8 = _0x84b660_2 ? 0 : 2 * Math.sin(_0x84b660_9 / 2600 + _0x84b660_3), _0x84b660_a = _0x84b660_0.points.map(([_0x84b660_1, _0x84b660_2]) => [ _0x84b660_0.x * _0x84b660_5 + _0x84b660_1 * _0x84b660_0.s, _0x84b660_0.y * _0x84b660_6 + _0x84b660_2 * _0x84b660_0.s + _0x84b660_8 ]);
      _0x84b660_1.lineWidth = 1, _0x84b660_1.strokeStyle = `\x72\x67\x62\x61\x28${_0x84b660_7.join("\x2c")}\x2c\x2e\x31\x36\x29`;
      for (const [_0x84b660_2, _0x84b660_3] of _0x84b660_0.lines) _0x84b660_1.beginPath(), 
      _0x84b660_1.moveTo(..._0x84b660_a[_0x84b660_2]), _0x84b660_1.lineTo(..._0x84b660_a[_0x84b660_3]), 
      _0x84b660_1.stroke();
      for (const [_0x84b660_2, _0x84b660_3] of _0x84b660_a) _0x84b660_1.beginPath(), _0x84b660_1.arc(_0x84b660_2, _0x84b660_3, 1.45, 0, 2 * Math.PI), 
      _0x84b660_1.fillStyle = `\x72\x67\x62\x61\x28${_0x84b660_7.join("\x2c")}\x2c\x2e\x37\x32\x29`, _0x84b660_1.fill();
    }
    _0x84b660_2 || requestAnimationFrame(_0x84b660_0);
  }(), {
    refreshColor: _0x84b660_a
  };
}

function setmedia(_0x84b660_0) {
  "\x6d\x65\x64\x69\x61\x53\x65\x73\x73\x69\x6f\x6e" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
    title: _0x84b660_0.title,
    artist: _0x84b660_0.artist,
    album: _0x84b660_0.album || "\x6d\x69\x7a\x75",
    artwork: _0x84b660_0.cover ? [ {
      src: _0x84b660_0.cover,
      sizes: "\x32\x35\x30\x78\x32\x35\x30",
      type: "\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67"
    } ] : []
  }));
}

function syncmediapos() {
  if (!("\x6d\x65\x64\x69\x61\x53\x65\x73\x73\x69\x6f\x6e" in navigator) || !navigator.mediaSession.setPositionState) return;
  const _0x84b660_0 = playbackduration(), _0x84b660_1 = Math.min(playbacktime(), Math.max(_0x84b660_0 - .01, 0));
  if (isFinite(_0x84b660_0) && _0x84b660_0) try {
    navigator.mediaSession.setPositionState({
      duration: _0x84b660_0,
      position: _0x84b660_1,
      playbackRate: "\x6f\x63\x74\x61\x76\x65" === playbackmode ? Number(octaveplayer?.getPlaybackRate?.()) || 1 : audio.playbackRate
    });
  } catch (_0x84b660_2) {}
}

applynyxifytheme(), nyxifyConstellationScene = setupconstellations(document.getElementById("\x73\x74\x61\x72\x73")), 
window.addEventListener("\x73\x74\x6f\x72\x61\x67\x65", _0x84b660_0 => {
  "\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65" !== _0x84b660_0.key && "\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72" !== _0x84b660_0.key || applynyxifytheme();
}), setplayershown(!1), refreshlikes(), renderqueue(), loadplaylists(), loadhome(), 
"\x6d\x65\x64\x69\x61\x53\x65\x73\x73\x69\x6f\x6e" in navigator && (navigator.mediaSession.setActionHandler("\x70\x6c\x61\x79", playbackplay), 
navigator.mediaSession.setActionHandler("\x70\x61\x75\x73\x65", playbackpause), navigator.mediaSession.setActionHandler("\x70\x72\x65\x76\x69\x6f\x75\x73\x74\x72\x61\x63\x6b", playprev), 
navigator.mediaSession.setActionHandler("\x6e\x65\x78\x74\x74\x72\x61\x63\x6b", () => advance(!0))), audio.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", syncmediapos), 
audio.addEventListener("\x73\x65\x65\x6b\x65\x64", syncmediapos);
