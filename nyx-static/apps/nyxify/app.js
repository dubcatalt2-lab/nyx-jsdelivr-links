const la = new Map, sa = {
  getItem(e) {
    if (la.has(e)) return la.get(e);
    try {
      return localStorage.getItem(e);
    } catch {
      return null;
    }
  },
  setItem(e, t) {
    try {
      localStorage.setItem(e, t), la.delete(e);
    } catch {
      la.set(e, String(t));
    }
  }
}, ca = document.getElementById("audio"), da = document.getElementById("player"), ua = document.getElementById("trackList"), ma = document.getElementById("cardGrid"), ya = document.getElementById("detailView"), pa = document.getElementById("emptyState"), ga = document.getElementById("emptyTitle"), fa = document.getElementById("emptySub"), ha = document.getElementById("crumb"), va = document.getElementById("crumbText"), ba = document.getElementById("seekBar"), Ea = document.getElementById("playBtn"), wa = document.getElementById("playIcon"), ka = document.getElementById("searchInput"), xa = document.getElementById("playlistList"), La = document.getElementById("sidebarPlaylistList"), Ca = document.getElementById("playlistSync"), Ia = document.getElementById("playlistDialog"), Sa = document.getElementById("playlistChoices"), $a = document.getElementById("playlistName"), Ma = document.getElementById("playlistMessage"), Na = document.getElementById("pPlaylist"), Ta = document.getElementById("nowPlayingModule"), Aa = document.getElementById("nowPlayingMedia"), Ba = document.getElementById("nowPlayingArt"), Pa = document.getElementById("nowPlayingContext"), Fa = document.getElementById("nowPlayingTitle"), Ha = document.getElementById("nowPlayingArtist"), qa = document.getElementById("nowPlayingAlbum"), _a = document.getElementById("nowPlayingPlaylists"), Da = document.getElementById("nowPlayingNext"), Ra = document.getElementById("fullTrackStage"), ja = document.getElementById("fullTrackTitle"), Ua = document.getElementById("fullTrackStatus"), za = document.getElementById("fullTrackVideo"), Oa = document.getElementById("fullTrackVideoLabel"), Ja = document.getElementById("fullTrackFullscreen");

let Va = null, Zt = [], Ya = "", Wa = "home", Za = {
  tracks: [],
  artists: [],
  albums: []
}, Ga = !0, Ka = "", Qa = "Nyxify", Xa = null, ei = 0, ti = !1, ni = "", ai = "", ii = null, ri = [], oi = "", li = 0, si = null, ci = Promise.resolve(), di = 0;

const ui = 18e3, mi = 8388608, yi = new Map;

let pi = [], gi = -1, fi = "idle", hi = null, vi = !1, bi = 0, Ei = null, wi = null, ki = !1, xi = null, Li = "1" === sa.getItem("nyx_nyxify_video_in_cover");

const Ci = window.NyxTubePlayerCore.createDirectYoutubeApi({
  optimisticState: !1
}), Ii = new Map, Si = new Map, $i = "nyx_nyxify_full_track_matches_v1", Mi = 3e5, Ni = 24;

let Ti = 0, Ai = "1" === sa.getItem("nyx_nyxify_shuffle"), Bi = sa.getItem("nyx_nyxify_repeat") || "off";

[ "off", "one", "all" ].includes(Bi) || (Bi = "off");

let Pi = !1, Fi = !1;

const Hi = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/shortcut-nyxify.svg?v=3";

function qi(e, t, n = "") {
  if (!e) return;
  const a = Boolean(String(t || "").trim());
  a ? (delete e.dataset.coverFallback, e.classList.remove("cover-fallback")) : (e.dataset.coverFallback = "1", 
  e.classList.add("cover-fallback")), e.alt = n, e.src = a ? t : Hi;
}

function _i(e) {
  e = Math.max(0, Math.floor(e || 0));
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), a = e % 60;
  return t ? `${t}:${String(n).padStart(2, "0")}:${String(a).padStart(2, "0")}` : `${n}:${String(a).padStart(2, "0")}`;
}

function Di(e) {
  const t = document.createElement("div");
  return t.textContent = e ?? "", t.innerHTML;
}

async function Ri(e, t = {}) {
  const n = new AbortController, a = t.signal ? null : setTimeout(() => n.abort(), 25e3);
  try {
    const a = await fetch(e, {
      cache: "no-store",
      ...t,
      signal: t.signal || n.signal
    }), r = String(a.headers.get("content-type") || "").toLowerCase(), o = await a.text();
    let l = null;
    if (o && (r.includes("application/json") || /^[\s\r\n]*[\[{]/.test(o))) try {
      l = JSON.parse(o);
    } catch (i) {}
    if (!a.ok) throw Object.assign(new Error(l?.error || `Nyxify is temporarily unavailable (${a.status}).`), {
      status: a.status,
      retryAfter: Math.min(5, Math.max(1, Number(a.headers.get("retry-after")) || 1))
    });
    if (!l || "object" != typeof l) throw new Error("Nyxify received a web page instead of music data. Reload Nyx and try again.");
    return l;
  } finally {
    clearTimeout(a);
  }
}

function ji(e) {
  return JSON.stringify([ String(e?.catalog || "").toLowerCase(), String(e?.id || ""), String(e?.title || "").trim().toLowerCase(), String(e?.artist || "").trim().toLowerCase(), Math.max(0, Number(e?.duration) || 0) ]);
}

function Ui(e) {
  return "meting" === e?.mode && /^\/api\/nyxify\/audio\/\d{1,16}$/.test(String(e.streamUrl || ""));
}

function zi() {
  try {
    const e = Date.now(), t = [ ...Ii.entries() ].filter(([, t]) => t?.expiresAt > e && Ui(t.match)).slice(-24).map(([e, t]) => ({
      key: e,
      expiresAt: t.expiresAt,
      match: t.match
    }));
    sessionStorage.setItem($i, JSON.stringify(t));
  } catch (e) {}
}

function Oi() {
  try {
    const e = Date.now(), t = JSON.parse(sessionStorage.getItem($i) || "[]");
    if (!Array.isArray(t)) return;
    t.slice(-24).forEach(t => {
      "string" == typeof t?.key && t.expiresAt > e && Ui(t.match) && Ii.set(t.key, {
        expiresAt: t.expiresAt,
        match: t.match
      });
    });
  } catch (e) {}
}

function Ji(e, t) {
  if (!Ui(t)) return t;
  const n = ji(e);
  for (Ii.delete(n), Ii.set(n, {
    expiresAt: Date.now() + Mi,
    match: t
  }); Ii.size > Ni; ) Ii.delete(Ii.keys().next().value);
  return zi(), t;
}

function Vi(e) {
  e && (Ii.delete(ji(e)), zi());
}

function Yi(e) {
  const t = new URLSearchParams({
    title: String(e?.title || ""),
    artist: String(e?.artist || ""),
    duration: String(Math.max(0, Number(e?.duration) || 0)),
    catalog: String(e?.catalog || "")
  });
  return `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/playback/${encodeURIComponent(e?.id || "")}?${t.toString()}`;
}

function Wi(e, t = !1) {
  const n = ji(e), a = Ii.get(n);
  if (a?.expiresAt > Date.now() && Ui(a.match)) return Ii.delete(n), Ii.set(n, a), 
  Promise.resolve(a.match);
  a && Ii.delete(n), Si.get(n)?.controller.signal.aborted && Si.delete(n);
  const i = Si.get(n);
  if (i) return !t && i.background ? i.promise.catch(t => {
    if (Va && ji(Va) !== n) throw t;
    return Wi(e);
  }) : i.promise;
  if (t && ([ ...Si.values() ].some(e => e.background) || !navigator.onLine || navigator.connection?.saveData)) return Promise.resolve(null);
  const r = new AbortController, o = (async () => {
    for (let a = 0; a < (t ? 1 : 2); a++) {
      const i = setTimeout(() => r.abort(), t ? 8e3 : 25e3);
      try {
        return await Ri(Yi(e) + (t ? "&prefetch=1" : ""), {
          signal: r.signal
        });
      } catch (n) {
        if (r.signal.aborted) throw new Error("Music lookup took too long or was cancelled. Select the song to try again.");
        if (t || a || !navigator.onLine || ![ 429, 502, 503, 504 ].includes(n.status) && "TypeError" !== n.name) throw n;
        if (await new Promise(e => setTimeout(e, 1e3 * (n.retryAfter || 1))), r.signal.aborted) throw n;
      } finally {
        clearTimeout(i);
      }
    }
  })().then(t => Ji(e, t)).finally(() => {
    Si.get(n)?.controller === r && Si.delete(n);
  });
  return Si.set(n, {
    promise: o,
    controller: r,
    background: t
  }), o;
}

function Zi() {
  const e = ++Ti, t = pi[gi + 1] || ("all" === Bi ? pi[0] : null);
  if (!t || t.id === Va?.id) return;
  const n = () => {
    e === Ti && Wi(t, !0).catch(() => {});
  };
  "requestIdleCallback" in window ? requestIdleCallback(n, {
    timeout: 1e3
  }) : setTimeout(n, 150);
}

document.addEventListener("error", e => {
  const t = e.target;
  t instanceof HTMLImageElement && "1" !== t.dataset.coverFallback && (t.dataset.coverFallback = "1", 
  t.classList.add("cover-fallback"), t.src = Hi);
}, !0);

let Gi = 0;

function Ki(e, t) {
  let n;
  const a = () => clearTimeout(n), i = () => {
    a(), n = setTimeout(() => {
      !e.isConnected || document.hidden || Date.now() < Gi || (Gi = Date.now() + 1e4, 
      Wi(t, !0).catch(() => {}));
    }, 300);
  };
  e.addEventListener("pointerenter", e => {
    "mouse" === e.pointerType && i();
  }), e.addEventListener("pointerleave", a), e.addEventListener("focus", i), e.addEventListener("blur", a);
}

function Qi(e) {
  return {
    id: String(e?.id || ""),
    title: String(e?.title || "").slice(0, 180),
    artist: String(e?.artist || "").slice(0, 120),
    artistId: String(e?.artistId || ""),
    album: String(e?.album || "").slice(0, 160),
    albumId: String(e?.albumId || ""),
    cover: String(e?.cover || "").slice(0, 500),
    catalog: [ "deezer", "tidal", "netease" ].includes(String(e?.catalog || "").toLowerCase()) ? String(e.catalog).toLowerCase() : "",
    duration: Math.max(0, Math.min(14400, Math.round(Number(e?.duration) || 0)))
  };
}

function Xi(e) {
  const t = String(e || "").replace(/\s/g, "");
  return /^data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(t) && t.length <= ui ? t : "";
}

function dr(e) {
  const t = String(e || "").trim();
  return zl(t) ? t.toLowerCase() : "";
}

function mr() {
  try {
    const e = JSON.parse(sa.getItem("nyx_nyxify_playlists") || "[]");
    return Array.isArray(e) ? e.slice(0, 16).map(e => ({
      id: /^[A-Za-z0-9_-]{8,64}$/.test(String(e?.id || "")) ? String(e.id) : `playlist_${crypto.randomUUID().replace(/-/g, "")}`,
      name: String(e?.name || "Playlist").trim().slice(0, 48) || "Playlist",
      cover: Xi(e?.cover),
      accent: dr(e?.accent),
      tracks: (Array.isArray(e?.tracks) ? e.tracks : []).slice(0, 150).map(Qi).filter(e => e.id && e.title)
    })) : [];
  } catch (e) {
    return [];
  }
}

function yr() {
  sa.setItem("nyx_nyxify_playlists", JSON.stringify(ri));
}

async function gr() {
  if (window.parent === window) return null;
  const e = `nyxify-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return new Promise(t => {
    let n = !1;
    const a = e => {
      n || (n = !0, clearTimeout(r), window.removeEventListener("message", i), t(e));
    }, i = t => {
      t.source === window.parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data?.requestId === e && a({
        available: !0,
        token: String(t.data.token || "")
      });
    }, r = setTimeout(() => a(null), 2500);
    window.addEventListener("message", i), window.parent.postMessage({
      type: "nyx:account-token-request",
      requestId: e
    }, location.origin);
  });
}

async function fr() {
  if (si) return si;
  si = (async () => {
    const e = await Ri("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config");
    if (!e?.enabled) return null;
    const [{initializeApp: t, getApps: n}, {getAuth: a, setPersistence: i, browserLocalPersistence: r}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), o = a(n().find(e => "nyx-founder-owner" === e.name) || t({
      apiKey: e.apiKey,
      authDomain: `${e.projectId}.firebaseapp.com`,
      projectId: e.projectId
    }, "nyx-founder-owner"));
    try {
      await i(o, r);
    } catch (l) {}
    return "function" == typeof o.authStateReady && await o.authStateReady(), o;
  })();
  try {
    return await si;
  } catch (e) {
    throw si = null, e;
  }
}

async function hr(e = !1) {
  if (!e && oi && li > Date.now() + 3e4) return oi;
  const t = await gr();
  if (t?.available) return oi = t.token, li = oi ? Date.now() + 27e5 : 0, oi;
  const n = await fr();
  return oi = n?.currentUser ? await n.currentUser.getIdToken(e) : "", li = oi ? Date.now() + 27e5 : 0, 
  oi;
}

async function vr(e, t = {}, n = !0) {
  const a = await hr(!n);
  if (!a) return null;
  const i = new Headers(t.headers || {});
  i.set("Authorization", `Bearer ${a}`);
  const r = await fetch(e, {
    ...t,
    headers: i,
    cache: "no-store"
  });
  if (401 === r.status && n) return vr(e, t, !1);
  const o = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(o.error || `Playlist request failed (${r.status}).`);
  return o;
}

function br() {
  return `playlist_${crypto.randomUUID().replace(/-/g, "")}`;
}

function Er() {
  try {
    const e = JSON.parse(sa.getItem("nyx_nyxify_likes"));
    return Array.isArray(e) ? e.filter(e => e && "string" == typeof e.id) : [];
  } catch (e) {
    return [];
  }
}

function wr(e) {
  return Er().some(t => t.id === e);
}

function kr(e) {
  let t = Er();
  return t.some(t => t.id === e.id) ? t = t.filter(t => t.id !== e.id) : t.push(e), 
  sa.setItem("nyx_nyxify_likes", JSON.stringify(t)), wr(e.id);
}

function xr() {
  try {
    const e = JSON.parse(sa.getItem("nyx_nyxify_history"));
    return Array.isArray(e) ? e.filter(e => e && "string" == typeof e.id) : [];
  } catch (e) {
    return [];
  }
}

function Lr(e) {
  let t = xr().filter(t => t.id !== e.id);
  t.unshift({
    ...e
  }), sa.setItem("nyx_nyxify_history", JSON.stringify(t.slice(0, 25)));
}

function Cr(e, t, n) {
  e.setAttribute("role", "button"), e.tabIndex = 0, t && e.setAttribute("aria-label", t), 
  e.addEventListener("keydown", e => {
    "Enter" !== e.key && " " !== e.key || (e.preventDefault(), e.stopPropagation(), 
    n(e));
  });
}

function Ir(e, t) {
  e.classList.toggle("liked", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "unlike" : "like"), 
  e.firstElementChild.className = t ? "mingcute--heart-fill" : "ic-heart";
}

function Sr(e) {
  e.classList.remove("pop"), e.offsetWidth, e.classList.add("pop");
}

function $r(e, t) {
  e.addEventListener("click", n => {
    n.stopPropagation();
    const a = kr(t);
    Ir(e, a), Sr(e), Eo();
  });
}

function Mr(e, t = Zt) {
  const n = new Map;
  for (const a of t) {
    const t = "artist" === e ? a.artist : a.album, i = "artist" === e ? a.artistId : a.albumId;
    t && i && (n.has(t) || n.set(t, {
      key: t,
      id: i,
      count: 0,
      cover: a.cover
    }), n.get(t).count++);
  }
  return [ ...n.values() ];
}

function Nr(e) {
  document.querySelectorAll("[data-id]").forEach(t => t.classList.toggle("playing", t.dataset.id === e)), 
  gl();
}

function Tr(e) {
  Wa = e, document.querySelectorAll(".filter").forEach(t => t.classList.toggle("active", t.dataset.filter === e));
}

function Ar() {
  pa.style.display = "none", ua.style.display = "none", ma.style.display = "none", 
  ya.style.display = "none";
}

function Br(e, t, n) {
  Ar(), pa.style.display = "", ga.textContent = e, fa.textContent = t || "", pa.classList.toggle("error", !!n), 
  ha.style.display = "none";
}

function Pr(e) {
  Ar(), e ? (ha.style.display = "", va.textContent = e) : ha.style.display = "none", 
  ua.innerHTML = "";
  for (let t = 0; t < 7; t++) {
    const e = document.createElement("div");
    e.className = "skel", e.innerHTML = '\n      <span class="sk sk-art"></span>\n      <div class="sk-lines">\n        <span class="sk sk-l w-70"></span>\n        <span class="sk sk-l w-45"></span>\n      </div>', 
    ua.appendChild(e);
  }
  ua.style.display = "";
}

function Fr(e, t, n = {}) {
  const a = document.createElement("div");
  a.className = "row" + (Va && Va.id === e.id ? " playing" : ""), a.dataset.id = e.id;
  const i = wr(e.id), r = ai ? ri.find(e => e.id === ai) : null, o = !!r?.tracks.some(t => t.id === e.id), l = n.playlistId ? `<span class="playlist-track-actions"><button type="button" class="playlist-track-action playlist-track-seed" aria-label="Create a new playlist from ${Di(e.title)}" title="Create a new playlist from this song"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 .9 3.1L16 7l-3.1.9L12 11l-.9-3.1L8 7l3.1-.9L12 3Zm6 8 .7 2.3L21 14l-2.3.7L18 17l-.7-2.3L15 14l2.3-.7L18 11ZM8 11l1.4 4.6L14 17l-4.6 1.4L8 23l-1.4-4.6L2 17l4.6-1.4L8 11Z"></path></svg></button><button type="button" class="playlist-track-action playlist-track-shuffle" aria-label="Shuffle ${Di(n.playlistName || "this playlist")}" title="Shuffle this playlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h2.2c4.8 0 6.7 10 11.6 10H20M17 14l3 3-3 3M4 17h2.2c1.8 0 3.2-1.4 4.5-3.2M14.2 9.4c1-1.4 2.1-2.4 3.6-2.4H20M17 4l3 3-3 3"></path></svg></button><button type="button" class="playlist-track-action playlist-track-remove" aria-label="Remove ${Di(e.title)} from playlist">&times;</button></span>` : r ? `<button type="button" class="playlist-track-action playlist-track-add${o ? " added" : ""}" aria-label="${o ? "Already in playlist" : `Add ${Di(e.title)} to playlist`}" ${o ? "disabled" : ""}>${o ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="m8.5 12.5 2.2 2.2 4.8-5.2"></path></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>'}</button>` : "", s = `<span class="alink">${Di(e.artist)}</span>`, c = e.album ? `${s} \xb7 ${Di(e.album)}` : s;
  return a.innerHTML = `\n    <img src="${Di(e.cover)}" alt="" loading="lazy">\n    <div class="t-meta">\n      <div class="t-top">\n        <span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>\n        <span class="t-title">${Di(e.title)}</span>${e.audioAvailable ? '<small class="audio-available">Audio found</small>' : ""}\n      </div>\n      <div class="t-sub">${c}</div>\n    </div>\n    <span class="t-duration">${_i(e.duration)}</span>\n    ${l}\n    <button type="button" class="like-btn${i ? " liked" : ""}" aria-pressed="${i}" aria-label="${i ? "unlike" : "like"}">\n      <i class="${i ? "mingcute--heart-fill" : "ic-heart"}"></i>\n    </button>`, 
  qi(a.querySelector(":scope > img"), e.cover), Ki(a, e), Cr(a, `play ${e.title} by ${e.artist}`, () => el(e, t)), 
  a.addEventListener("click", n => {
    if (!n.target.closest(".like-btn, .playlist-track-action")) return n.target.closest(".alink") && !ai ? (n.stopPropagation(), 
    void (e.artistId && Or("artist", e.artistId, e.artist))) : void el(e, t);
  }), a.querySelector(".playlist-track-add")?.addEventListener("click", t => {
    t.stopPropagation(), ai && po(ai, e) && (t.currentTarget.classList.add("added"), 
    t.currentTarget.disabled = !0, t.currentTarget.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="m8.5 12.5 2.2 2.2 4.8-5.2"></path></svg>', 
    t.currentTarget.setAttribute("aria-label", "Already in playlist"));
  }), a.querySelector(".playlist-track-remove")?.addEventListener("click", t => {
    t.stopPropagation(), go(n.playlistId, e.id);
  }), a.querySelector(".playlist-track-seed")?.addEventListener("click", t => {
    t.stopPropagation(), vo(e, t.currentTarget);
  }), a.querySelector(".playlist-track-shuffle")?.addEventListener("click", e => {
    e.stopPropagation(), ho(n.playlistId);
  }), $r(a.querySelector(".like-btn"), e), a;
}

function Hr(e, t) {
  const n = document.createElement("div");
  n.className = "card";
  const a = e.artist ? e.artist : Number(e.count) > 0 ? `${e.count} ${1 === e.count ? "track" : "tracks"}` : Number(e.position) > 0 ? `#${e.position} this week` : "artist" === t ? "Popular artist" : "Popular album";
  return n.innerHTML = `\n    <div class="card-art">\n      <img src="${Di(e.cover)}" alt="" loading="lazy">\n      <button type="button" class="card-play" aria-label="play ${Di(e.key)}"><i class="line-md--play-filled"></i></button>\n    </div>\n    <span class="c-name">${Di(e.key)}</span>\n    <span class="c-count">${Di(a)}</span>`, 
  qi(n.querySelector(".card-art img"), e.cover), Cr(n, `open ${e.key}`, () => Or(t, e.id, e.key)), 
  n.addEventListener("click", n => {
    n.target.closest(".card-play") || Or(t, e.id, e.key);
  }), n.querySelector(".card-play").addEventListener("click", n => {
    n.stopPropagation(), Or(t, e.id, e.key, !0);
  }), n;
}

function qr(e, t, n = {}) {
  e.innerHTML = "", e.style.display = t.length ? "" : "none", t.forEach(a => e.appendChild(Fr(a, t, n)));
}

function _r(e) {
  Ar(), ha.style.display = "none", qr(ua, e);
}

function Dr(e, t = Mr(e)) {
  Ar(), ha.style.display = "none";
  const n = t;
  ma.innerHTML = "", ma.style.display = n.length ? "" : "none", n.forEach(t => ma.appendChild(Hr(t, e))), 
  n.length || Br(`No ${e}s yet`, "Results will appear here after you search.");
}

function Rr(e, t, n, a = "") {
  const i = document.createElement("section");
  i.className = `home-section ${a}`.trim();
  const r = document.createElement("div");
  r.className = "home-section-head";
  const o = document.createElement("div"), l = document.createElement("h2");
  l.textContent = e;
  const s = document.createElement("p");
  return s.textContent = t, o.append(l, s), r.appendChild(o), i.append(r, n), i;
}

function jr() {
  Ar(), ha.style.display = "none", ya.innerHTML = "";
  const e = document.createElement("div");
  e.className = "home-track-list", qr(e, Za.tracks.slice(0, 12)), ya.appendChild(Rr("Popular tracks this week", "What people are playing right now.", e, "home-tracks"));
  const t = document.createElement("div");
  t.className = "cards home-cards", Za.artists.slice(0, 8).forEach(e => t.appendChild(Hr(e, "artist"))), 
  ya.appendChild(Rr("Popular artists", "Artists trending across the current chart.", t));
  const n = document.createElement("div");
  n.className = "cards home-cards", Za.albums.slice(0, 8).forEach(e => n.appendChild(Hr(e, "album"))), 
  ya.appendChild(Rr("Popular albums", "Albums listeners are coming back to this week.", n)), 
  ya.style.display = "";
}

function Ur() {
  Ar(), ha.style.display = "none";
  const e = Mr("artist"), t = Mr("album");
  ya.innerHTML = "";
  const n = document.createElement("div");
  if (qr(n, Zt), ya.appendChild(n), e.length) {
    const t = document.createElement("div");
    t.className = "cards", e.forEach(e => t.appendChild(Hr(e, "artist"))), ya.appendChild(t);
  }
  if (t.length > 1) {
    const e = document.createElement("div");
    e.className = "cards", t.forEach(t => e.appendChild(Hr(t, "album"))), ya.appendChild(e);
  }
  ya.style.display = "";
}

function zr(e, t, n, a) {
  const i = document.createElement("div");
  return i.className = "group-head", i.innerHTML = `\n    <img src="${Di(e)}" alt="">\n    <div>\n      <div class="g-name">${Di(t)}</div>\n      <div class="g-sub">${Di(n)}</div>\n    </div>\n    <div class="g-actions">\n      <button type="button" class="g-play" aria-label="play all"><i class="line-md--play-filled"></i>Play</button>\n    </div>`, 
  i.querySelector(".g-play").addEventListener("click", () => {
    a.length && el(a[0], a);
  }), i;
}

async function Or(e, t, n, a) {
  const i = ++ei;
  Xa = {
    type: e,
    id: t,
    name: n,
    data: null
  }, Pr(n);
  try {
    const n = await Ri(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/${e}/${t}`);
    if (i !== ei) return;
    Xa.data = n, Jr(), a && n.tracks.length && el(n.tracks[0], n.tracks);
  } catch (r) {
    if (i !== ei) return;
    Xa = null, Br("Could not load " + e, r.message, !0);
  }
}

function Jr() {
  const e = Xa.data, t = "artist" === Xa.type && e.total ? e.total : e.tracks.length;
  if (Ar(), ha.style.display = "", va.textContent = `${Xa.name} \xb7 ${t} tracks`, 
  ya.innerHTML = "", ya.appendChild(zr(e.cover, e.name, e.artist ? `${e.artist} \xb7 ${t} tracks` : `${t} tracks`, e.tracks)), 
  "artist" === Xa.type && e.albums.length) {
    const t = document.createElement("div");
    t.className = "cards", e.albums.forEach(e => {
      const n = document.createElement("div");
      n.className = "card", n.innerHTML = `\n        <div class="card-art">\n          <img src="${Di(e.cover)}" alt="" loading="lazy">\n          <button type="button" class="card-play" aria-label="play ${Di(e.title)}"><i class="line-md--play-filled"></i></button>\n        </div>\n        <span class="c-name">${Di(e.title)}</span>`, 
      Cr(n, `open ${e.title}`, () => Or("album", e.id, e.title)), n.addEventListener("click", t => {
        t.target.closest(".card-play") || Or("album", e.id, e.title);
      }), n.querySelector(".card-play").addEventListener("click", t => {
        t.stopPropagation(), Or("album", e.id, e.title, !0);
      }), t.appendChild(n);
    }), ya.appendChild(t);
  }
  const n = document.createElement("div");
  qr(n, e.tracks), ya.appendChild(n), ya.style.display = "";
}

function Vr() {
  return io(), ni ? co() : ai ? mo() : Xa ? Xa.data ? Jr() : Pr(Xa.name) : Ya ? Zt.length ? "home" === Wa ? Ur() : "artists" === Wa ? Dr("artist") : "albums" === Wa ? Dr("album") : _r(Zt) : Br("No results", `Nothing matched "${Ya}".`) : Ga ? Pr() : Ka && !Za.tracks.length ? Br("Home is unavailable", Ka, !0) : "home" === Wa ? jr() : "artists" === Wa ? Dr("artist", Za.artists) : "albums" === Wa ? Dr("album", Za.albums) : Za.tracks.length ? _r(Za.tracks) : void Br("Nothing is charting yet", "Try searching for a song, artist, or album.");
}

async function Yr() {
  Ga = !0, Ka = "", Ya || ni || Xa || Vr();
  try {
    const e = await Ri("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/home");
    Za = {
      tracks: Array.isArray(e.tracks) ? e.tracks : [],
      artists: Array.isArray(e.artists) ? e.artists : [],
      albums: Array.isArray(e.albums) ? e.albums : []
    };
  } catch (e) {
    Ka = e.message || "The weekly chart could not load.";
  } finally {
    Ga = !1, Ya || ni || Xa || ai || Vr();
  }
}

function Wr(e, t, n) {
  if (e.innerHTML = "", !t.length) {
    const t = document.createElement("div");
    return t.className = "mod-empty", t.textContent = n, void e.appendChild(t);
  }
  t.forEach(n => {
    const a = document.createElement("div");
    a.className = "mini" + (Va && Va.id === n.id ? " playing" : ""), a.dataset.id = n.id;
    const i = wr(n.id);
    a.innerHTML = `\n      <img src="${Di(n.cover)}" alt="" loading="lazy">\n      <div class="mini-m">\n        <div class="mini-t">${Di(n.title)}</div>\n        <div class="mini-a">${Di(n.artist)}</div>\n      </div>\n      <button type="button" class="like-btn${i ? " liked" : ""}" aria-pressed="${i}" aria-label="${i ? "unlike" : "like"}"><i class="${i ? "mingcute--heart-fill" : "ic-heart"}"></i></button>`, 
    Ki(a, n), Cr(a, `play ${n.title} by ${n.artist}`, () => el(n, t)), a.addEventListener("click", e => {
      e.target.closest(".like-btn") || el(n, t);
    }), $r(a.querySelector(".like-btn"), n), e.appendChild(a);
  });
}

function Zr(e, t = !1) {
  const n = document.createElement("span");
  n.className = "playlist-cover" + (t ? " compact" : "");
  const a = e?.cover ? [ e.cover ] : [];
  if (!a.length) for (const i of e?.tracks || []) if (i.cover && !a.includes(i.cover) && (a.push(i.cover), 
  4 === a.length)) break;
  if (n.dataset.count = String(a.length), !a.length) {
    const e = document.createElement("i");
    return e.className = "mingcute--music-line", n.appendChild(e), n;
  }
  return a.forEach(e => {
    const t = document.createElement("img");
    t.src = e, t.alt = "", t.loading = "lazy", n.appendChild(t);
  }), n;
}

function Gr(e, t) {
  if (!e || !zl(t)) return;
  const n = Ol(t), a = .299 * n[0] + .587 * n[1] + .114 * n[2];
  e.style.setProperty("--playlist-cover-rgb", n.join(", ")), e.style.setProperty("--playlist-cover-ink", a > 158 ? "#06070a" : "#f7f8fb");
}

function Kr(e) {
  const t = e.getContext("2d", {
    willReadFrequently: !0
  }), {width: n, height: a} = e, i = t.getImageData(0, 0, n, a).data, r = Math.max(1, Math.round(.16 * n)), o = Math.max(1, Math.round(.16 * a)), l = new Map;
  for (let u = 0; u < a; u += 2) for (let e = 0; e < n; e += 2) {
    if (e >= r && e < n - r && u >= o && u < a - o) continue;
    const t = 4 * (u * n + e);
    if (i[t + 3] < 180) continue;
    const s = i[t], c = i[t + 1], d = i[t + 2], m = Math.max(s, c, d), y = Math.min(s, c, d), p = m ? (m - y) / m : 0, g = `${s >> 5}-${c >> 5}-${d >> 5}`, f = l.get(g) || {
      count: 0,
      score: 0,
      r: 0,
      g: 0,
      b: 0
    };
    f.count += 1, f.score += .7 + .7 * p, f.r += s, f.g += c, f.b += d, l.set(g, f);
  }
  const s = [ ...l.values() ].sort((e, t) => t.score - e.score)[0];
  if (!s) return "#777b86";
  let c = [ s.r, s.g, s.b ].map(e => Math.round(e / s.count));
  const d = .299 * c[0] + .587 * c[1] + .114 * c[2];
  return d < 42 && (c = c.map(e => Math.round(e + .22 * (255 - e)))), d > 225 && (c = c.map(e => Math.round(.82 * e))), 
  `#${c.map(e => e.toString(16).padStart(2, "0")).join("")}`;
}

function Qr(e) {
  return new Promise((t, n) => {
    const a = new Image;
    a.decoding = "async", a.onload = () => t(a), a.onerror = () => n(new Error("That image could not be opened.")), 
    a.src = e;
  });
}

function Xr(e) {
  return new Promise((t, n) => {
    const a = new FileReader;
    a.onerror = () => n(new Error("That image could not be read.")), a.onload = () => t(String(a.result || "")), 
    a.readAsDataURL(e);
  });
}

async function to(e) {
  if (!e || !new Set([ "image/jpeg", "image/png", "image/webp" ]).has(e.type)) throw new Error("Choose a PNG, JPG, or WebP image.");
  if (e.size > mi) throw new Error("Playlist covers must be 8 MB or smaller.");
  const t = await Xr(e), n = await Qr(t), a = Math.min(n.naturalWidth, n.naturalHeight);
  if (!a) throw new Error("That image has no usable pixels.");
  const i = (n.naturalWidth - a) / 2, r = (n.naturalHeight - a) / 2, o = document.createElement("canvas");
  o.width = 128, o.height = 128, o.getContext("2d", {
    alpha: !1
  }).drawImage(n, i, r, a, a, 0, 0, 128, 128);
  const l = Kr(o), s = [ [ 320, .82 ], [ 288, .74 ], [ 256, .66 ], [ 224, .58 ], [ 192, .52 ], [ 160, .46 ], [ 128, .42 ] ];
  for (const [c, d] of s) {
    const e = document.createElement("canvas");
    e.width = c, e.height = c, e.getContext("2d", {
      alpha: !1
    }).drawImage(n, i, r, a, a, 0, 0, c, c);
    const t = e.toDataURL("image/webp", d);
    if (t.length <= ui) return {
      cover: t,
      accent: l
    };
  }
  throw new Error("That image could not be compressed enough. Try a simpler image.");
}

async function no(e) {
  return e ? (yi.has(e) || yi.set(e, (async () => {
    try {
      const t = await Qr(e), n = Math.min(t.naturalWidth, t.naturalHeight), a = document.createElement("canvas");
      return a.width = 64, a.height = 64, a.getContext("2d", {
        alpha: !1
      }).drawImage(t, (t.naturalWidth - n) / 2, (t.naturalHeight - n) / 2, n, n, 0, 0, 64, 64), 
      Kr(a);
    } catch (t) {
      return "";
    }
  })()), yi.get(e)) : "";
}

function ao(e) {
  const t = document.createElement("div");
  t.className = "playlist-cover-editor";
  const n = document.createElement("button");
  n.type = "button", n.className = "playlist-cover-change", n.setAttribute("aria-label", `Change cover for ${e.name}`), 
  n.appendChild(Zr(e));
  const a = document.createElement("span");
  a.className = "playlist-cover-prompt", a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 6.5 9.5 4h5l1.3 2.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3.2Z"></path><circle cx="12" cy="13" r="3.5"></circle></svg><span>Change cover</span>', 
  n.appendChild(a);
  const i = document.createElement("input");
  return i.className = "playlist-cover-input", i.type = "file", i.accept = "image/png,image/jpeg,image/webp", 
  i.hidden = !0, n.addEventListener("click", () => i.click()), i.addEventListener("change", async () => {
    const t = i.files?.[0];
    if (!t) return;
    const a = ya.querySelector(".playlist-cover-status");
    n.disabled = !0, a && (a.textContent = "Preparing cover\u2026");
    try {
      const n = await to(t);
      e.cover = n.cover, e.accent = n.accent;
      const a = await yo({
        verifyCover: {
          id: e.id,
          cover: n.cover
        }
      });
      co();
      const i = ya.querySelector(".playlist-cover-status");
      i && (a.synced ? i.textContent = "Cover synced to your account." : a.error ? i.textContent = `Cover saved on this device. ${a.error.message}` : i.textContent = "Cover saved on this device. Sign in to sync it.");
    } catch (r) {
      n.disabled = !1, a && (a.textContent = r.message);
    } finally {
      i.value = "";
    }
  }), t.append(n, i), zl(e.accent) && Gr(t, e.accent), t;
}

function io() {
  if (La.innerHTML = "", !ri.length) {
    const e = document.createElement("span");
    return e.className = "sidebar-playlist-empty", e.textContent = "No playlists yet", 
    void La.appendChild(e);
  }
  ri.forEach(e => {
    const t = document.createElement("button");
    t.type = "button", t.className = "sidebar-playlist", t.classList.toggle("active", ni === e.id);
    const n = document.createElement("span"), a = document.createElement("strong");
    a.textContent = e.name;
    const i = document.createElement("small");
    i.textContent = `${e.tracks.length} songs`, n.append(a, i), t.append(Zr(e, !0), n), 
    t.addEventListener("click", () => so(e.id)), La.appendChild(t);
  });
}

function ro() {
  if (xa.innerHTML = "", io(), Co(), !ri.length) {
    const e = document.createElement("div");
    return e.className = "mod-empty", e.textContent = "Create a playlist to save songs together.", 
    void xa.appendChild(e);
  }
  ri.forEach(e => {
    const t = document.createElement("div");
    t.className = "playlist-entry", zl(e.accent) && Gr(t, e.accent);
    const n = document.createElement("button");
    n.type = "button", n.className = "playlist-open";
    const a = document.createElement("span");
    a.className = "playlist-open-meta";
    const i = document.createElement("strong");
    i.textContent = e.name;
    const r = document.createElement("small");
    r.textContent = `${e.tracks.length} ${1 === e.tracks.length ? "track" : "tracks"}`, 
    a.append(i, r), n.append(Zr(e, !0), a), n.addEventListener("click", () => so(e.id));
    const o = document.createElement("button");
    o.type = "button", o.className = "playlist-delete", o.textContent = "\xd7", o.setAttribute("aria-label", `Delete ${e.name}`), 
    o.addEventListener("click", () => {
      confirm(`Delete "${e.name}"?`) && (ri = ri.filter(t => t.id !== e.id), ni === e.id && (ni = ""), 
      ai === e.id && (ai = ""), yo(), Vr());
    }), t.append(n, o), xa.appendChild(t);
  });
}

function oo() {
  if (Sa.innerHTML = "", !ri.length) {
    const e = document.createElement("div");
    return e.className = "mod-empty", e.textContent = "No playlists yet.", void Sa.appendChild(e);
  }
  ri.forEach(e => {
    const t = document.createElement("button");
    t.type = "button", t.className = "playlist-choice";
    const n = document.createElement("span");
    n.textContent = e.name;
    const a = document.createElement("small");
    a.textContent = `${e.tracks.length} tracks`, t.append(n, a), t.addEventListener("click", () => {
      ii ? po(e.id, ii) : (Ia.close(), so(e.id));
    }), Sa.appendChild(t);
  });
}

function lo(e = null) {
  ii = e ? Qi(e) : null, Ma.textContent = "", document.getElementById("playlistDialogHint").textContent = ii ? `Add \u201c${ii.title}\u201d to a playlist.` : "Create a playlist or choose one below.", 
  oo(), Ia.showModal(), $a.focus();
}

function so(e) {
  ri.find(t => t.id === e) && (ni = e, ai = "", Xa = null, io(), co());
}

function co() {
  const e = ri.find(e => e.id === ni);
  if (!e) return ni = "", Vr();
  Ar(), ha.style.display = "", va.textContent = "Playlists", ya.innerHTML = "";
  const t = document.createElement("section");
  t.className = "playlist-hero";
  const n = dr(e.accent);
  n ? Gr(t, n) : no(e.cover || e.tracks.find(e => e.cover)?.cover || "").then(e => {
    t.isConnected && e && Gr(t, e);
  });
  const a = document.createElement("div");
  a.className = "playlist-hero-info";
  const i = document.createElement("span");
  i.className = "playlist-eyebrow", i.textContent = "Playlist";
  const r = document.createElement("h2");
  r.textContent = e.name;
  const o = document.createElement("p");
  o.textContent = `${e.tracks.length} ${1 === e.tracks.length ? "song" : "songs"} \xb7 Nyxify/built in music`;
  const l = document.createElement("div");
  l.className = "playlist-hero-actions";
  const s = document.createElement("button");
  s.type = "button", s.className = "playlist-play-all", s.disabled = !e.tracks.length, 
  s.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.8v12.4L18 12Z"></path></svg><span>Play</span>', 
  s.addEventListener("click", () => {
    e.tracks.length && el(e.tracks[0], e.tracks);
  });
  const c = document.createElement("button");
  if (c.type = "button", c.className = "playlist-add-songs", c.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg><span>Add songs</span>', 
  c.addEventListener("click", () => uo(e.id)), l.append(s, c), e.cover) {
    const t = document.createElement("button");
    t.type = "button", t.className = "playlist-reset-cover", t.textContent = "Use song covers", 
    t.addEventListener("click", async () => {
      e.cover = "", e.accent = "", await yo(), co();
    }), l.appendChild(t);
  }
  const d = document.createElement("span");
  if (d.className = "playlist-cover-status", d.setAttribute("role", "status"), a.append(i, r, o, l, d), 
  t.append(ao(e), a), ya.appendChild(t), e.tracks.length) {
    const t = document.createElement("div");
    t.className = "playlist-seed-hint", t.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 .9 3.1L16 7l-3.1.9L12 11l-.9-3.1L8 7l3.1-.9L12 3Zm6 8 .7 2.3L21 14l-2.3.7L18 17l-.7-2.3L15 14l2.3-.7L18 11ZM8 11l1.4 4.6L14 17l-4.6 1.4L8 23l-1.4-4.6L2 17l4.6-1.4L8 11Z"></path></svg><span>Sparkle creates a separate playlist from a song. Shuffle randomizes this playlist for playback.</span>', 
    ya.appendChild(t);
    const n = document.createElement("div");
    n.className = "playlist-track-list", qr(n, e.tracks, {
      playlistId: e.id,
      playlistName: e.name
    }), ya.appendChild(n);
  } else {
    const e = document.createElement("section");
    e.className = "playlist-empty", e.innerHTML = "<strong>Your playlist is empty</strong><span>Use Add songs to find music for it.</span>", 
    ya.appendChild(e);
  }
  ya.style.display = "";
}

function uo(e) {
  ri.find(t => t.id === e) && (ai = e, ni = "", Xa = null, Ya = "", Zt = [], ka.value = "", 
  mo(), ka.focus());
}

function mo() {
  const e = ri.find(e => e.id === ai);
  if (!e) return ai = "", Vr();
  Ar(), ha.style.display = "", va.textContent = `Back to ${e.name}`, ya.innerHTML = "";
  const t = document.createElement("section");
  t.className = "playlist-add-heading";
  const n = document.createElement("div");
  if (n.innerHTML = `<span>Add to playlist</span><strong>${Di(e.name)}</strong><small>Search above, then use + beside any song.</small>`, 
  t.append(Zr(e, !0), n), ya.appendChild(t), Zt.length) {
    const e = document.createElement("div");
    e.className = "playlist-track-list playlist-add-results", qr(e, Zt), ya.appendChild(e);
  } else {
    const e = document.createElement("section");
    e.className = "playlist-empty compact", e.innerHTML = `<strong>${Ya ? "No songs found" : "Find songs for this playlist"}</strong><span>${Ya ? `Nothing matched \u201c${Di(Ya)}\u201d.` : "Type a song or artist into the search bar."}</span>`, 
    ya.appendChild(e);
  }
  ya.style.display = "";
}

async function yo(e = {}) {
  const t = ++di, n = JSON.parse(JSON.stringify(ri));
  yr(), ro(), oo();
  const a = async () => {
    const t = await vr("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/playlists", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        playlists: n
      })
    });
    if (!t) return {
      synced: !1,
      reason: "signed-out"
    };
    if (e.verifyCover) {
      const n = Xi(e.verifyCover.cover), a = (Array.isArray(t.playlists) ? t.playlists : []).find(t => t?.id === e.verifyCover.id);
      if (!n || Xi(a?.cover) !== n) throw new Error("Account sync did not retain the custom cover. Try it again.");
    }
    return {
      synced: !0,
      payload: t
    };
  }, i = ci.then(a, a);
  ci = i.catch(() => {});
  try {
    const e = await i;
    return t === di && (Ca.textContent = e.synced ? "Synced to your account" : "Saved on this device"), 
    e;
  } catch (r) {
    return t === di && (Ca.textContent = "Saved locally \xb7 account sync unavailable"), 
    Ma.textContent = r.message || "Account sync is unavailable.", {
      synced: !1,
      reason: "error",
      error: r
    };
  }
}

function po(e, t) {
  const n = ri.find(t => t.id === e);
  return !(!n || !t || (n.tracks.some(e => e.id === t.id) ? (Ma.textContent = `Already in ${n.name}.`, 
  1) : n.tracks.length >= 150 ? (Ma.textContent = "This playlist has reached 150 tracks.", 
  1) : (n.tracks.push(Qi(t)), Ma.textContent = `Added to ${n.name}.`, yo(), 0)));
}

function go(e, t) {
  const n = ri.find(t => t.id === e);
  if (!n) return;
  const a = n.tracks.filter(e => e.id !== t);
  a.length !== n.tracks.length && (n.tracks = a, Ma.textContent = `Removed from ${n.name}.`, 
  yo(), co());
}

function fo(e) {
  const t = `${String(e?.title || "Song").trim() || "Song"} Mix`, n = new Set(ri.map(e => e.name.toLowerCase()));
  for (let a = 1; a <= ri.length + 2; a++) {
    const e = 1 === a ? "" : ` ${a}`, i = `${t.slice(0, 48 - e.length).trim()}${e}`;
    if (!n.has(i.toLowerCase())) return i;
  }
  return `New Mix ${Date.now().toString(36).slice(-5)}`;
}

function ho(e) {
  const t = ri.find(t => t.id === e);
  if (!t?.tracks.length) return;
  const n = t.tracks.map(Qi);
  for (let a = n.length - 1; a > 0; a--) {
    const e = Math.floor(Math.random() * (a + 1));
    [n[a], n[e]] = [ n[e], n[a] ];
  }
  el(n[0], n), Ma.textContent = `Shuffling ${t.name}.`;
}

async function vo(e, t) {
  if (!e || t?.disabled) return;
  if (ri.length >= 16) return void (Ma.textContent = "You can have up to 16 playlists.");
  const n = ri.reduce((e, t) => e + t.tracks.length, 0), a = Math.max(0, 1200 - n);
  if (!a) return void (Ma.textContent = "Your playlist library has reached its track limit.");
  t && (t.disabled = !0), Ma.textContent = `Creating a new playlist from ${e.title}\u2026`;
  let i = [], r = !1;
  try {
    const t = String(e.artist || e.title || "").trim();
    if (!t) throw new Error("This song does not have enough catalog information.");
    const n = await Ri(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/search?q=${encodeURIComponent(t)}`);
    i = Array.isArray(n.data) ? n.data : [];
  } catch (o) {
    r = !0;
  }
  try {
    const t = new Set([ String(e.id) ]), n = Math.max(0, Math.min(17, a - 1)), o = i.filter(e => {
      const n = String(e?.id || "");
      return !(!n || t.has(n) || (t.add(n), 0));
    }).slice(0, n).map(Qi), l = {
      id: br(),
      name: fo(e),
      cover: "",
      accent: await no(e.cover),
      tracks: [ Qi(e), ...o ]
    };
    ri.push(l), await yo(), so(l.id), Ma.textContent = r ? `Created ${l.name} with ${e.title}; more matches were unavailable.` : `Created ${l.name} with ${l.tracks.length} ${1 === l.tracks.length ? "song" : "songs"}.`;
  } catch (l) {
    Ma.textContent = `Could not create the playlist: ${l.message}`, t?.isConnected && (t.disabled = !1);
  }
}

async function bo() {
  ri = mr(), ro();
  const e = di;
  try {
    const t = await vr("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/playlists");
    if (!t) return void (Ca.textContent = "Saved on this device");
    if (di !== e) return void await ci;
    const n = Array.isArray(t.playlists) ? t.playlists : [];
    if (!n.length && ri.length) return void await yo();
    ri = n, yr(), ro(), Ca.textContent = "Synced to your account";
  } catch (t) {
    Ca.textContent = "Saved locally \xb7 account sync unavailable";
  }
}

function Eo() {
  const e = Er();
  document.getElementById("likedCount").textContent = e.length, Wr(document.getElementById("likedList"), e, "Songs you like will appear here."), 
  Wr(document.getElementById("historyList"), xr(), "Songs you play will appear here."), 
  Va && Ir(document.getElementById("pLike"), wr(Va.id)), document.querySelectorAll("#trackList .row, #detailView .row").forEach(e => {
    const t = e.querySelector(".like-btn");
    t && Ir(t, wr(e.dataset.id));
  });
}

Oi(), ha.addEventListener("click", () => {
  if (ai) {
    const e = ai;
    return ai = "", so(e);
  }
  Xa = null, ni = "", Vr();
}), document.querySelectorAll(".filter").forEach(e => {
  e.addEventListener("click", () => {
    ai = "", Xa = null, ni = "", Tr(e.dataset.filter), "home" === e.dataset.filter && (Ya = "", 
    Zt = [], ka.value = ""), Vr();
  });
}), document.getElementById("newPlaylistBtn").addEventListener("click", () => lo()), 
document.getElementById("sidebarNewPlaylist").addEventListener("click", () => lo()), 
document.getElementById("playlistDialogClose").addEventListener("click", () => Ia.close()), 
document.getElementById("playlistCreateForm").addEventListener("submit", e => {
  e.preventDefault();
  const t = $a.value.trim().slice(0, 48);
  if (!t) return Ma.textContent = "Enter a playlist name.", void $a.focus();
  if (ri.length >= 16) return void (Ma.textContent = "You can have up to 16 playlists.");
  if (ri.some(e => e.name.toLowerCase() === t.toLowerCase())) return void (Ma.textContent = "A playlist with that name already exists.");
  const n = {
    id: br(),
    name: t,
    cover: "",
    accent: "",
    tracks: ii ? [ Qi(ii) ] : []
  };
  ri.push(n), $a.value = "", Ma.textContent = ii ? `Created ${t} and added the song.` : `Created ${t}.`, 
  yo(), ii || (Ia.close(), so(n.id));
}), Na.disabled = !0, Na.addEventListener("click", () => {
  Va && lo(Va);
}), document.getElementById("searchForm").addEventListener("submit", async e => {
  e.preventDefault();
  const t = ka.value.trim();
  if (t) {
    Pr();
    try {
      const e = await Ri(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxify/search?q=${encodeURIComponent(t)}`);
      Ya = t, Zt = e.data || [], Xa = null, ni = "", Tr("home"), Vr();
    } catch (n) {
      ai ? (Ya = t, Zt = [], mo(), Ma.textContent = `Search failed: ${n.message}`) : Br("Search failed", n.message, !0);
    }
  }
});

const wo = document.getElementById("dlBtn");

function ko() {
  if (!Pi) return void (document.body.style.paddingBottom = "");
  const e = da.getBoundingClientRect().height;
  document.body.style.paddingBottom = Math.ceil(e + 14 + 26) + "px";
}

function xo(e) {
  Pi !== e && (Pi = e, da.classList.toggle("visible", e), da.toggleAttribute("inert", !e), 
  e || pl(!1), requestAnimationFrame(ko));
}

function Lo(e) {
  const t = ri.find(e => e.id === ni) || ri.find(t => t.tracks === e);
  return t ? `Playlist \xb7 ${t.name}` : Xa?.name ? `${"artist" === Xa.type ? "Artist" : "Album"} \xb7 ${Xa.name}` : Ya ? `Search \xb7 ${Ya}` : e === Za.tracks || Array.isArray(e) && e.length && e.every(e => Za.tracks.some(t => t.id === e.id)) ? "Popular this week" : "Nyxify";
}

function Co() {
  if (Ta.hidden = !Va, !Va) return;
  qi(Ba, Va.cover, `${Va.title} cover`), Pa.textContent = Qa || "Nyxify", Fa.textContent = Va.title, 
  Ha.textContent = Va.artist || "Unknown artist", Ha.disabled = !Va.artistId, Ha.onclick = () => {
    Va?.artistId && Or("artist", Va.artistId, Va.artist);
  }, qa.hidden = !Va.album, qa.textContent = Va.album || "", qa.disabled = !Va.albumId, 
  qa.onclick = () => {
    Va?.albumId && Or("album", Va.albumId, Va.album);
  };
  const e = ri.filter(e => e.tracks.some(e => e.id === Va.id));
  if (_a.innerHTML = "", e.length) {
    const t = document.createElement("span");
    t.textContent = "In your playlists", _a.appendChild(t), e.forEach(e => {
      const t = document.createElement("button");
      t.type = "button", t.textContent = e.name, t.addEventListener("click", () => so(e.id)), 
      _a.appendChild(t);
    });
  }
  const t = pi[gi + 1];
  if (Da.innerHTML = "", t) {
    const e = document.createElement("span");
    e.textContent = "Next in queue";
    const n = document.createElement("button");
    n.type = "button", n.textContent = `${t.title} \xb7 ${t.artist}`, n.addEventListener("click", () => tl(gi + 1)), 
    Da.append(e, n);
  }
}

function Io() {
  let e = document.getElementById("fullTrackFrame");
  if (!e || "IFRAME" === e.tagName) {
    const t = document.createElement("div");
    t.id = "fullTrackFrame", e ? e.replaceWith(t) : Aa.appendChild(t), e = t;
  }
  return e;
}

function So() {
  return /\bCrOS\b/i.test(navigator.userAgent) ? Promise.resolve(Ci) : window.YT?.Player ? Promise.resolve(window.YT) : wi || (wi = new Promise(e => {
    const t = window.onYouTubeIframeAPIReady;
    let n = !1;
    const a = t => {
      n || (n = !0, clearTimeout(i), e(t));
    }, i = setTimeout(() => a(Ci), 5e3);
    window.onYouTubeIframeAPIReady = () => {
      try {
        t?.();
      } catch (e) {}
      a(window.YT?.Player ? window.YT : Ci);
    };
    let r = document.querySelector("script[data-nyx-octave-player]");
    r || (r = document.createElement("script"), r.src = "https://www.youtube.com/iframe_api", 
    r.async = !0, r.dataset.nyxOctavePlayer = "1", r.addEventListener("error", () => a(Ci), {
      once: !0
    }), document.head.appendChild(r));
  }), wi);
}

function $o() {
  null != Ei && clearInterval(Ei), Ei = null;
}

function Mo() {
  $o(), Ei = setInterval(() => {
    if ("octave" !== fi || ti || !hi) return;
    const e = Number(hi.getCurrentTime?.()) || 0, t = Number(hi.getDuration?.()) || Number(Va?.duration) || 0;
    t && (document.getElementById("timeTotal").textContent = _i(t)), kl(e), Zl();
  }, 500);
}

function No() {
  $o();
  try {
    hi?.stopVideo?.();
  } catch (e) {}
  try {
    hi?.destroy?.();
  } catch (e) {}
  hi = null, vi = !1, ki = !1, Io(), Ra.hidden = !0, Ra.dataset.playbackState = "idle";
}

function To(e, t = !1) {
  t && (Li = Boolean(e), sa.setItem("nyx_nyxify_video_in_cover", Li ? "1" : "0"));
  const n = Boolean(e && xi);
  if (Aa.classList.toggle("is-video", n), za.setAttribute("aria-pressed", String(n)), 
  za.setAttribute("aria-label", n ? "Switch to album cover" : xi ? "Switch to music video" : "Music video unavailable"), 
  Oa.textContent = n ? "Switch to cover" : "Switch to video", Ja.hidden = !n, Ja.disabled = !n, 
  !n && (document.fullscreenElement === Aa || document.webkitFullscreenElement === Aa)) {
    const e = document.exitFullscreen || document.webkitExitFullscreen;
    e && Promise.resolve(e.call(document)).catch(() => {});
  }
}

function Ao() {
  const e = document.fullscreenElement === Aa || document.webkitFullscreenElement === Aa;
  Ja.setAttribute("aria-label", e ? "Exit fullscreen" : "Enter fullscreen"), Ja.title = e ? "Exit fullscreen" : "Enter fullscreen";
}

async function Bo() {
  if (!Aa.classList.contains("is-video")) return;
  const e = document.fullscreenElement === Aa || document.webkitFullscreenElement === Aa, t = e ? document.exitFullscreen || document.webkitExitFullscreen : Aa.requestFullscreen || Aa.webkitRequestFullscreen;
  if (t) {
    try {
      await Promise.resolve(t.call(e ? document : Aa));
    } catch {
      const e = document.querySelector("#fullTrackFrame iframe"), t = e?.requestFullscreen || e?.webkitRequestFullscreen;
      t && await Promise.resolve(t.call(e)).catch(() => {});
    }
    Ao();
  }
}

function Po(e = null) {
  xi = e && /^[A-Za-z0-9_-]{11}$/.test(String(e.videoId || "")) ? e : null, za.disabled = !xi, 
  za.hidden = !xi, To(Boolean(xi && Li));
}

function Fo() {
  bi += 1, No(), Po(), fi = "idle", qo = !1, document.getElementById("playBtn").classList.remove("is-loading"), 
  ca.pause(), ca.removeAttribute("src"), ca.load(), wo.hidden = !0, wa.className = "line-md--play-filled";
}

function Ho(e) {
  Vo(e);
}

let qo = !1, _o = !0, Do = 0, Ro = performance.now(), jo = 0;

const Uo = document.getElementById("musicPlaybackStatus");

function zo(e, t = !1) {
  Uo.textContent = e, document.getElementById("playerPlaybackStatus").textContent = e, 
  Ua.textContent = e, document.getElementById("playBtn").classList.toggle("is-loading", t), 
  requestAnimationFrame(ko);
}

function Oo(e, t) {
  return new Promise((n, a) => {
    const i = e => {
      clearTimeout(l), ca.removeEventListener("loadedmetadata", r), ca.removeEventListener("error", o), 
      e ? a(e) : n();
    }, r = () => {
      if (!t()) return i(new DOMException("Superseded playback", "AbortError"));
      const n = Number(ca.duration), a = Number(e);
      if (!(Number.isFinite(n) && n > 0 && a > 0) || Math.abs(n - a) > Math.max(4, .03 * a)) return i(new Error("The provider returned a different or incomplete recording."));
      i();
    }, o = () => i(new Error("Full audio could not load.")), l = setTimeout(() => i(new Error("Full audio took too long to load.")), 2e4);
    ca.addEventListener("loadedmetadata", r), ca.addEventListener("error", o), ca.load();
  });
}

async function Jo(e, t, n = 0) {
  qo = !0, Ro = performance.now(), jo = n, fi = "meting", Po(), ca.pause(), ca.removeAttribute("src"), 
  ca.load(), ja.textContent = e.title || "Full track", zo("Finding the full song\u2026", !0), 
  wa.className = _o ? "material-symbols--pause-rounded" : "line-md--play-filled";
  try {
    const i = await Wi(e);
    if (t !== bi || Va !== e) return;
    if (!Ui(i)) throw new Error("No matching full recording is available.");
    if (hl = n > 0 ? n : null, ca.src = i.streamUrl, await Oo(i.durationSeconds, () => t === bi && Va === e), 
    t !== bi || Va !== e) return;
    if (qo = !1, Ro = performance.now(), zo("Loading full song\u2026", !0), wo.hidden = !0, 
    Zi(), _o) try {
      await ca.play();
    } catch (a) {
      if (t !== bi || Va !== e) return;
      "NotAllowedError" === a.name ? (_o = !1, zo("Full song ready \u2014 press play.")) : "AbortError" === a.name || ca.error || zo("Unable to start audio. Press play to retry.");
    } else zo("Full song ready \u2014 press play.");
  } catch (a) {
    if (t !== bi || Va !== e) return;
    if (!navigator.onLine) return qo = !1, void zo("You\u2019re offline. Playback will retry when connected.");
    if ("Full audio could not load." === a.message && Do < 1) return qo = !1, void Yo(a.message);
    Vo(a.message);
  }
}

function Vo(e) {
  Vi(Va), Fo(), zo(e + " Full-song playback is unavailable. Press play to retry.");
}

function Yo(e) {
  if ("meting" === fi && !qo && Va) if (0 === Do++) {
    const e = ca.currentTime || 0;
    Vi(Va), Jo(Va, bi, e);
  } else Vo(e);
}

function Wo() {
  return qo ? !_o : "octave" === fi ? !vi : ca.paused;
}

function Zo() {
  if (_o = !0, Ro = performance.now(), !qo) return "idle" === fi && Va ? (Do = 0, 
  void Jo(Va, bi)) : void ("octave" === fi || ki ? hi?.playVideo?.() : ca.play().catch(() => zo("Unable to play. Select the song again to retry.")));
  wa.className = "material-symbols--pause-rounded";
}

function Go() {
  _o = !1, qo ? (wa.className = "line-md--play-filled", zo("Song is loading \u2014 playback paused.")) : "meting" === fi && zo("Full song paused"), 
  "octave" === fi ? hi?.pauseVideo?.() : ca.pause();
}

function Ko() {
  return "octave" === fi ? Number(hi?.getCurrentTime?.()) || 0 : Number(ca.currentTime) || 0;
}

function Qo() {
  return "octave" === fi ? Number(hi?.getDuration?.()) || Number(Va?.duration) || 0 : isFinite(ca.duration) && ca.duration ? ca.duration : Number(Va?.duration) || 0;
}

function Xo(e) {
  "octave" === fi ? hi?.seekTo?.(e, !0) : ca.currentTime = e;
}

function el(e, t, n = "") {
  ++Ti;
  for (const [i, r] of Si) i !== ji(e) && r.controller.abort();
  Sl();
  const a = n || Lo(t);
  Va = e, pi = (t || Zt).slice(), gi = pi.findIndex(t => t.id === e.id), -1 === gi && (pi.unshift(e), 
  gi = 0), Qa = a, Lr(e), Fo(), Do = 0, _o = !0, Jo(e, bi), qi(document.getElementById("pArt"), e.cover, `${e.title} cover`), 
  document.getElementById("pTitle").textContent = e.title, document.getElementById("pTitle").title = e.title, 
  document.getElementById("pArtist").textContent = e.artist, document.getElementById("pArtist").title = e.artist, 
  document.getElementById("timeTotal").textContent = _i(e.duration), wo.removeAttribute("href"), 
  wo.hidden = !0, wo.setAttribute("download", `${e.artist || "unknown"} - ${e.title || "song"}.mp3`.replace(/["\\]/g, "")), 
  wo.setAttribute("aria-label", `download ${e.title}`), Na.disabled = !1, Wl(e), ba.value = 0, 
  ba.style.setProperty("--fill", "0%"), document.getElementById("timeCur").textContent = "0:00", 
  Nr(e.id), Eo(), gl(), Co(), xo(!0);
}

function tl(e) {
  e >= 0 && e < pi.length && el(pi[e], pi, Qa);
}

function nl() {
  wa.className = "line-md--play-filled", ba.value = 0, ba.style.setProperty("--fill", "0%"), 
  document.getElementById("timeCur").textContent = "0:00";
}

function al(e) {
  if (!pi.length) return;
  if (Ai && pi.length > 1) {
    let e;
    do {
      e = Math.floor(Math.random() * pi.length);
    } while (e === gi);
    return tl(e);
  }
  let t = gi + 1;
  if (t >= pi.length) {
    if ("all" !== Bi && !e) return nl();
    t = 0;
  }
  tl(t);
}

function il() {
  Ko() > 3 ? Xo(0) : gi > 0 ? tl(gi - 1) : Xo(0);
}

ca.addEventListener("playing", () => {
  "meting" === fi && zo("Playing full song");
}), ca.addEventListener("waiting", () => {
  "meting" === fi && _o && zo("Buffering full song\u2026", !0);
}), ca.addEventListener("canplay", () => {
  "meting" === fi && ca.paused && zo("Full song ready \u2014 press play.");
}), ca.addEventListener("error", () => {
  "meting" === fi && !qo && Va && ca.error && (navigator.onLine ? Yo("Full audio is unavailable right now.") : zo("You\u2019re offline. Playback will retry when connected."));
}), ca.addEventListener("timeupdate", () => {
  ca.currentTime !== jo && (jo = ca.currentTime, Ro = performance.now());
}), setInterval(() => {
  "meting" === fi && !qo && _o && !ca.ended && navigator.onLine && performance.now() - Ro > 45e3 && Yo("Full audio stopped responding.");
}, 5e3), window.addEventListener("offline", () => {
  "meting" === fi && zo("You\u2019re offline. Buffered audio may continue playing.");
}), window.addEventListener("online", () => {
  "meting" === fi && _o && (ca.error || ca.readyState < 3) && Yo("Full audio could not reconnect.");
}), za.addEventListener("click", () => {
  xi && To(!Aa.classList.contains("is-video"), !0);
}), Ja.addEventListener("click", Bo), document.addEventListener("fullscreenchange", Ao), 
document.addEventListener("webkitfullscreenchange", Ao), Po(), document.getElementById("nextBtn").addEventListener("click", () => al(!0)), 
document.getElementById("prevBtn").addEventListener("click", il), ca.addEventListener("ended", () => {
  if ("octave" !== fi) return ki && hi ? (wa.className = "line-md--play-filled", Ra.dataset.playbackState = "ready", 
  void (Ua.textContent = "Full song ready - press play")) : "one" === Bi ? (ca.currentTime = 0, 
  void Zo()) : void al(!1);
});

const rl = document.getElementById("shuffleBtn");

rl.classList.toggle("on", Ai), rl.setAttribute("aria-pressed", String(Ai)), rl.title = "shuffle: " + (Ai ? "on" : "off"), 
rl.addEventListener("click", () => {
  Ai = !Ai, sa.setItem("nyx_nyxify_shuffle", Ai ? "1" : "0"), rl.classList.toggle("on", Ai), 
  rl.setAttribute("aria-pressed", String(Ai)), rl.title = "shuffle: " + (Ai ? "on" : "off");
});

const ol = document.getElementById("repeatBtn"), ll = document.getElementById("repeatIcon"), sl = {
  off: "all",
  all: "one",
  one: "off"
};

function cl() {
  const e = "all" === Bi ? "Queue" : "one" === Bi ? "Song" : "Off", t = "off" === Bi ? "repeat the queue" : "all" === Bi ? "repeat this song" : "turn repeat off";
  ll.className = "one" === Bi ? "ic-repeat-one" : "ic-repeat", ol.classList.toggle("on", "off" !== Bi), 
  ol.setAttribute("aria-pressed", String("off" !== Bi)), ol.setAttribute("aria-label", "Repeat: " + e + ". Click to " + t + "."), 
  ol.title = "Repeat: " + e + ". Click to " + t + ".";
}

cl(), ol.addEventListener("click", () => {
  Bi = sl[Bi], sa.setItem("nyx_nyxify_repeat", Bi), cl(), Zi();
}), Ea.addEventListener("click", () => {
  Va ? ki || Wo() ? Zo() : Go() : Zt.length ? el(Zt[0]) : Za.tracks.length ? el(Za.tracks[0], Za.tracks, "Popular this week") : Er().length && el(Er()[0]);
}), ca.addEventListener("play", () => {
  "octave" !== fi && (wa.className = "material-symbols--pause-rounded");
}), ca.addEventListener("pause", () => {
  "octave" !== fi && (wa.className = "line-md--play-filled");
});

const dl = document.getElementById("pLike");

dl.addEventListener("click", e => {
  if (e.stopPropagation(), !Va) return;
  const t = kr(Va);
  Ir(dl, t), Sr(dl), Eo();
});

const ul = document.getElementById("queueToggle"), ml = document.getElementById("queuePanel"), yl = document.getElementById("qBadge");

function pl(e) {
  Fi = e, ml.classList.toggle("open", e), ul.classList.toggle("on", e), ul.setAttribute("aria-expanded", String(e)), 
  ml.setAttribute("aria-hidden", String(!e));
}

function gl() {
  const e = document.getElementById("qList"), t = pi.slice(gi + 1);
  if (e.innerHTML = "", yl.textContent = t.length, yl.hidden = 0 === t.length, !t.length) {
    const t = document.createElement("div");
    return t.className = "q-empty", t.textContent = Va ? "End of queue. Turn on repeat to keep listening." : "Play a song to start a queue.", 
    void e.appendChild(t);
  }
  t.forEach((t, n) => {
    const a = gi + 1 + n, i = document.createElement("div");
    i.className = "mini", i.innerHTML = `\n      <img src="${Di(t.cover)}" alt="">\n      <div class="mini-m">\n        <div class="mini-t">${Di(t.title)}</div>\n        <div class="mini-a">${Di(t.artist)}</div>\n      </div>`, 
    Cr(i, `play ${t.title}`, () => tl(a)), i.addEventListener("click", () => tl(a)), 
    e.appendChild(i);
  });
}

ul.addEventListener("click", () => pl(!Fi)), document.getElementById("qHide").addEventListener("click", () => pl(!1)), 
document.getElementById("qClear").addEventListener("click", () => {
  pi = pi.slice(0, gi + 1), gl(), Co();
});

const fl = document.getElementById("timeCur");

let hl = null, vl = null, bl = null;

function El() {
  return Qo();
}

function wl() {
  let e = 0;
  const t = Number(ca.duration);
  if (Number.isFinite(t) && t > 0) for (let n = 0; n < ca.buffered.length; n++) ca.buffered.start(n) <= ca.currentTime && ca.buffered.end(n) >= ca.currentTime && (e = ca.buffered.end(n));
  ba.style.setProperty("--buffered", t > 0 ? Math.min(100, e / t * 100) + "%" : "0%");
}

function kl(e) {
  wl();
  const t = El();
  if (!t) return;
  const n = Math.min(100, Math.max(0, e / t * 100));
  ba.value = n, ba.style.setProperty("--fill", n + "%"), fl.textContent = _i(e);
}

function xl() {
  let e = Math.min(100, Math.max(0, Number.parseFloat(ba.value) || 0)) / 100 * El();
  e = Math.max(e, 0);
  const t = Qo();
  return t && (e = Math.min(e, Math.max(t - .25, 0))), e;
}

function Ll(e) {
  if (Va) {
    if ("octave" === fi) return Xo(e), void (hl = null);
    if (ca.readyState >= HTMLMediaElement.HAVE_METADATA && isFinite(ca.duration) && ca.duration) try {
      return ca.currentTime = e, void (hl = null);
    } catch (t) {}
    hl = e;
  }
}

function Cl(e) {
  vl = e, null == bl && (bl = setTimeout(() => {
    bl = null;
    const e = vl;
    vl = null, Ll(e);
  }, 75));
}

function Il(e) {
  null != bl && clearTimeout(bl), bl = null, vl = null, Ll(e);
}

function Sl() {
  null != bl && clearTimeout(bl), bl = null, vl = null, hl = null, ti = !1, ba.classList.remove("dragging");
}

function $l() {
  ti = !0, ba.classList.add("dragging");
}

function Ml() {
  if (ba.classList.remove("dragging"), ti = !1, !Va) return;
  const e = xl();
  Il(e), kl(e);
}

function Nl(e) {
  if (!Va) return;
  const t = El(), n = Ko(), a = Math.min(Math.max(n + e, 0), Math.max(t - .25, 0));
  try {
    Xo(a);
  } catch (i) {}
  kl(a);
}

ca.addEventListener("progress", wl), ca.addEventListener("emptied", wl), ca.addEventListener("loadedmetadata", () => {
  if ("meting" === fi && !qo && Number(Va?.duration) > 0 && Number.isFinite(ca.duration) && Math.abs(ca.duration - Number(Va.duration)) > Math.max(4, .03 * Number(Va.duration))) Vo("The provider returned a different or incomplete recording."); else if (document.getElementById("timeTotal").textContent = _i(ca.duration), 
  null != hl) {
    try {
      ca.currentTime = hl;
    } catch (e) {}
    hl = null;
  }
}), ca.addEventListener("seeked", () => {
  ti || kl(ca.currentTime);
}), ca.addEventListener("timeupdate", () => {
  ti || ca.seeking || kl(ca.currentTime);
}), ba.addEventListener("pointerdown", $l), ba.addEventListener("input", () => {
  $l();
  const e = xl();
  ba.style.setProperty("--fill", ba.value + "%"), fl.textContent = _i(e), Cl(e);
}), ba.addEventListener("change", Ml), ba.addEventListener("pointerup", Ml), ba.addEventListener("pointercancel", Ml), 
ba.addEventListener("blur", Ml);

const Tl = document.getElementById("volBar"), Al = document.getElementById("volBtn"), Bl = document.getElementById("volIcon"), Pl = document.getElementById("volWrap"), Fl = document.getElementById("volPopup");

let Hl = !1;

function ql(e) {
  e = Math.min(100, Math.max(0, e)), ca.volume = e / 100, ca.muted = !1, "octave" === fi && (hi?.unMute?.(), 
  hi?.setVolume?.(e)), Tl.value = e, Tl.style.setProperty("--fill", e + "%"), sa.setItem("nyx_nyxify_volume", e), 
  _l();
}

function _l() {
  const e = "octave" === fi ? (Number(hi?.getVolume?.()) || 0) / 100 : ca.volume, t = "octave" === fi ? Boolean(hi?.isMuted?.()) || 0 === e : ca.muted || 0 === e;
  Bl.className = t ? "lucide--volume-x" : e < .5 ? "lucide--volume-1" : "lucide--volume-2";
}

function Dl(e) {
  Hl = e, Fl.classList.toggle("open", e), Al.setAttribute("aria-expanded", String(e));
}

Al.addEventListener("click", e => {
  e.stopPropagation(), Dl(!Hl);
}), document.addEventListener("click", e => {
  Hl && !Pl.contains(e.target) && Dl(!1);
}), Tl.addEventListener("input", () => {
  ql(parseFloat(Tl.value));
});

const Rl = sa.getItem("nyx_nyxify_volume"), jl = null !== Rl && "" !== Rl && Number.isFinite(Number(Rl)) ? Math.min(100, Math.max(0, Number(Rl))) : 80;

Tl.value = jl, ca.volume = jl / 100, Tl.style.setProperty("--fill", jl + "%"), _l(), 
document.addEventListener("keydown", e => {
  const t = (e.target.tagName || "").toLowerCase(), n = "input" === t || "textarea" === t || e.target.isContentEditable;
  if ("Escape" === e.key) return Fi && pl(!1), void (Hl && Dl(!1));
  "/" !== e.key ? n || ("ArrowRight" !== e.key || e.target.matches('input[type="range"]') ? "ArrowLeft" !== e.key || e.target.matches('input[type="range"]') ? "ArrowUp" !== e.key || e.target.matches('input[type="range"]') ? "ArrowDown" !== e.key || e.target.matches('input[type="range"]') ? "Space" !== e.code || "button" === t || e.target.closest('[role="button"]') || (e.preventDefault(), 
  Ea.click()) : (e.preventDefault(), ql(("octave" === fi ? Number(hi?.getVolume?.()) || 0 : ca.muted ? 0 : 100 * ca.volume) - 5)) : (e.preventDefault(), 
  ql(("octave" === fi ? Number(hi?.getVolume?.()) || 0 : ca.muted ? 0 : 100 * ca.volume) + 5)) : (e.preventDefault(), 
  Nl(-10)) : (e.preventDefault(), Nl(10))) : n || (e.preventDefault(), ka.focus());
}), window.addEventListener("resize", ko);

const Ul = Object.freeze({
  default: "#9b8cf5",
  midnight: "#9eb7d9",
  ruby: "#d58b9a",
  emerald: "#82c4ae",
  sakura: "#d5a2c6",
  fresh: "#a6c99c"
});

function zl(e) {
  return /^#[0-9a-f]{6}$/i.test(String(e || "").trim());
}

function Ol(e) {
  const t = zl(e) ? e.slice(1) : Ul.default.slice(1);
  return [ 0, 2, 4 ].map(e => parseInt(t.slice(e, e + 2), 16));
}

let Jl = null;

function Vl() {
  if ("tutsi" === document.documentElement.dataset.appShell) return;
  const e = sa.getItem("nyx.theme") || "default";
  let t = "custom" === e ? sa.getItem("nyx.customThemeColor") : Ul[e];
  zl(t) || (t = Ul.default);
  const n = Ol(t);
  Math.max(...n) < 72 && (t = "#f1f3f7"), document.documentElement.dataset.nyxifyTheme = e, 
  document.documentElement.style.setProperty("--accent", t), document.documentElement.style.setProperty("--accent-rgb", Ol(t).join(", ")), 
  Jl?.refreshColor();
}

function Yl(e) {
  if (!e) return null;
  const t = e.getContext("2d"), n = window.matchMedia("(prefers-reduced-motion: reduce)").matches, a = Array.from({
    length: 54
  }, (e, t) => ({
    x: 47 * t % 101 / 100,
    y: (71 * t + 13) % 103 / 102,
    r: .45 + t % 4 * .18,
    o: .12 + t % 5 * .035
  })), i = [ {
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
  let r = 0, o = 0, l = Ol(getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()), s = 0;
  function c() {
    const n = Math.min(2, window.devicePixelRatio || 1);
    r = window.innerWidth, o = window.innerHeight, e.width = Math.round(r * n), e.height = Math.round(o * n), 
    e.style.width = `${r}px`, e.style.height = `${o}px`, t.setTransform(n, 0, 0, n, 0, 0);
  }
  function d() {
    l = Ol(getComputedStyle(document.documentElement).getPropertyValue("--accent").trim());
  }
  return window.addEventListener("resize", c, {
    passive: !0
  }), c(), d(), function e(c = 0) {
    if (!n && c - s < 42) return void requestAnimationFrame(e);
    s = c, t.clearRect(0, 0, r, o);
    const d = n ? 0 : .035 * Math.sin(c / 1700);
    for (const n of a) t.beginPath(), t.arc(n.x * r, n.y * o, n.r, 0, 2 * Math.PI), 
    t.fillStyle = `rgba(${l.join(",")},${n.o + d})`, t.fill();
    for (let a = 0; a < i.length; a += 1) {
      const e = i[a], s = n ? 0 : 2 * Math.sin(c / 2600 + a), d = e.points.map(([t, n]) => [ e.x * r + t * e.s, e.y * o + n * e.s + s ]);
      t.lineWidth = 1, t.strokeStyle = `rgba(${l.join(",")},.16)`;
      for (const [n, a] of e.lines) t.beginPath(), t.moveTo(...d[n]), t.lineTo(...d[a]), 
      t.stroke();
      for (const [n, a] of d) t.beginPath(), t.arc(n, a, 1.45, 0, 2 * Math.PI), t.fillStyle = `rgba(${l.join(",")},.72)`, 
      t.fill();
    }
    n || requestAnimationFrame(e);
  }(), {
    refreshColor: d
  };
}

function Wl(e) {
  "mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
    title: e.title,
    artist: e.artist,
    album: e.album || "mizu",
    artwork: e.cover ? [ {
      src: e.cover,
      sizes: "250x250",
      type: "image/jpeg"
    } ] : []
  }));
}

function Zl() {
  if (!("mediaSession" in navigator) || !navigator.mediaSession.setPositionState) return;
  const e = Qo(), t = Math.min(Ko(), Math.max(e - .01, 0));
  if (isFinite(e) && e) try {
    navigator.mediaSession.setPositionState({
      duration: e,
      position: t,
      playbackRate: "octave" === fi ? Number(hi?.getPlaybackRate?.()) || 1 : ca.playbackRate
    });
  } catch (n) {}
}

Vl(), Jl = Yl(document.getElementById("stars")), window.addEventListener("storage", e => {
  "nyx.theme" !== e.key && "nyx.customThemeColor" !== e.key || Vl();
}), xo(!1), Eo(), gl(), bo(), Yr(), "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("play", Zo), 
navigator.mediaSession.setActionHandler("pause", Go), navigator.mediaSession.setActionHandler("previoustrack", il), 
navigator.mediaSession.setActionHandler("nexttrack", () => al(!0))), ca.addEventListener("loadedmetadata", Zl), 
ca.addEventListener("seeked", Zl);
