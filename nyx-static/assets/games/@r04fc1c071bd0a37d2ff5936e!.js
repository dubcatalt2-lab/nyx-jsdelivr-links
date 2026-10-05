const md = document.body.classList.contains("drop-games"), ud = !md && "tutsi" !== document.documentElement.dataset.appShell && !document.documentElement.dataset.tutsiApp, fd = {
  grid: document.getElementById("gameGrid"),
  search: document.getElementById("gameSearch"),
  libraryTabs: document.getElementById("gameLibraryTabs"),
  sort: document.getElementById("gameSort"),
  count: document.getElementById("gameCount"),
  progress: document.getElementById("catalogProgress"),
  empty: document.getElementById("emptyState"),
  pagination: document.getElementById("gamePagination"),
  previousPage: document.getElementById("previousPage"),
  nextPage: document.getElementById("nextPage"),
  pageInfo: document.getElementById("pageInfo"),
  player: document.getElementById("gamePlayer"),
  playerTitle: document.getElementById("playerTitle"),
  playerLoading: document.getElementById("playerLoading"),
  playerLoadingText: document.getElementById("playerLoadingText"),
  playerRetry: document.getElementById("retryGame"),
  frame: document.getElementById("gameFrame"),
  provider: document.getElementById("gameProvider"),
  performance: document.getElementById("performanceGame"),
  performanceLabel: document.getElementById("performanceGameLabel"),
  close: document.getElementById("closePlayer"),
  reload: document.getElementById("reloadGame"),
  fullscreen: document.getElementById("fullscreenGame"),
  viewButtons: [ ...document.querySelectorAll("[data-game-view]") ],
  localView: document.getElementById("localGamesView"),
  cloudView: document.getElementById("cloudGamesView"),
  cloudFrame: document.getElementById("cloudGamingFrame")
}, pd = localStorage.getItem("nyx.gamePerformanceMode"), gd = "on" === pd ? "balanced" : [ "auto", "balanced", "boost", "off" ].includes(pd) ? pd : "auto", hd = {
  games: [],
  gamesByKey: new Map,
  manifest: null,
  lastFocused: null,
  activeGame: null,
  activeSourceIndex: 0,
  sourceAttempt: 0,
  sourceTimer: 0,
  failedSources: new Set,
  performancePreference: gd,
  performanceLevel: 0,
  performanceReason: "ready",
  performanceFrame: 0,
  performanceObserver: null,
  performanceLongTasks: 0,
  performanceSamples: [],
  performanceStableWindows: 0,
  performanceLastTune: 0,
  page: 1,
  pageSize: 30,
  activeLibrary: "all"
}, yd = Object.freeze([ {
  id: "all",
  label: "All games",
  shortLabel: "All",
  description: "Every available game"
}, {
  id: "lumin",
  label: "LuminSDK",
  shortLabel: "Lumin",
  description: "Games delivered through LuminSDK"
}, {
  id: "gn",
  label: "GN Math",
  shortLabel: "GN",
  description: "The GN Math collection"
}, {
  id: "gms",
  label: "GMS",
  shortLabel: "GMS",
  description: "The GMS collection"
}, {
  id: "local",
  label: md ? "Archive" : "Nyx Archive",
  shortLabel: md ? "Archive" : "Nyx",
  description: md ? "The Drop game archive" : "Games stored with Nyx"
}, {
  id: "catclass",
  label: "CatClass",
  shortLabel: "CatClass",
  description: "Community game sources"
}, {
  id: "duckmath",
  label: "DuckMath",
  shortLabel: "DuckMath",
  description: "Extra fallback sources"
}, {
  id: "misc",
  label: "Miscellaneous",
  shortLabel: "Misc",
  description: "Games without cover art"
} ]), vd = new Map;

let bd = 0, wd = {};

const Ld = new Map, Sd = new Map;

let Ed = null, xd = null;

const kd = 8e3, Id = 2, Pd = 9e3;

let Cd, Md, Ad = "";

if (ud) {
  document.body.classList.add("nyx-arcade");
  const e = document.querySelector(".cove-header");
  e.querySelector(".eyebrow").textContent = "NYX", e.querySelector("h1").textContent = "ARCADE";
  const t = document.createElement("div");
  t.className = "arcade-masthead", e.before(t), t.append(e, document.querySelector(".game-view-switch")), 
  Cd = document.createElement("section"), Cd.className = "arcade-featured", Cd.setAttribute("aria-label", "Featured games"), 
  Cd.hidden = !0, fd.localView.prepend(Cd);
  const a = document.createElement("div");
  a.className = "arcade-collection", a.innerHTML = '<h2>Game library<span class="arcade-heading-line" aria-hidden="true"></span></h2>';
  const r = document.querySelector(".catalog-tools");
  r.before(a), a.append(r), Md = document.createElement("button"), Md.type = "button", 
  Md.className = "arcade-random", Md.setAttribute("aria-label", "Random game"), Md.title = "Random game", 
  Md.disabled = !0, Md.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h3c4 0 8 12 12 12h3m-4-4 4 4-4 4M3 18h3c1.7 0 3.4-2.2 5-5m2-3c1.7-2.5 3.3-4 5-4h3m-4-4 4 4-4 4"/></svg><span>Random game</span>', 
  r.append(Md), Md.addEventListener("click", () => {
    const e = dm();
    e.length && $m(e[Math.floor(Math.random() * e.length)], !0, [ "all", "misc" ].includes(hd.activeLibrary) ? "" : hd.activeLibrary);
  }), Cd.addEventListener("click", e => {
    const t = e.target.closest("[data-game-key]");
    t && $m(hd.gamesByKey.get(t.dataset.gameKey));
  });
}

function Gd(e) {
  if (!Cd) return;
  if (Md.disabled = 0 === e.length, Cd.hidden = Boolean(fd.search.value.trim()) || "all" !== hd.activeLibrary || 1 !== hd.page, 
  Cd.hidden) return;
  const t = [ "Slope", "Retro Bowl", "Geometry Dash" ].map(e => hd.games.find(t => t.hasIcon && t.title.toLowerCase() === e.toLowerCase())).filter(Boolean);
  Cd.hidden = !t.length;
  const a = JSON.stringify(t.map(e => [ e.key, e.covers ]));
  if (a === Ad) return;
  Ad = a;
  const r = document.createDocumentFragment();
  for (const [n, o] of t.entries()) {
    const e = document.createElement("button");
    e.className = "arcade-feature", e.type = "button", e.dataset.gameKey = o.key, e.setAttribute("aria-label", `Launch ${o.title}`);
    const t = document.createElement("span");
    t.className = "arcade-feature-copy";
    const a = document.createElement("span");
    a.className = "arcade-feature-label", a.textContent = 0 === n ? "In the spotlight" : "Arcade pick";
    const c = document.createElement("span");
    c.className = "arcade-feature-title", c.textContent = o.title;
    const s = document.createElement("span");
    s.className = "arcade-feature-play", s.innerHTML = 'Play now <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>', 
    t.append(a, c, s);
    const i = document.createElement("span");
    i.className = "arcade-feature-number", i.textContent = `0${n + 1}`, i.setAttribute("aria-hidden", "true"), 
    e.append(sm(o), i, t), r.append(e);
  }
  Cd.replaceChildren(r);
}

function $d(e) {
  return new Promise(t => setTimeout(t, e));
}

function Bd(e, t, a) {
  let r = 0;
  return Promise.race([ Promise.resolve(e), new Promise((e, n) => {
    r = setTimeout(() => n(new Error(`${a} timed out`)), t);
  }) ]).finally(() => clearTimeout(r));
}

async function Td(e, t, a = {}) {
  const r = Math.max(1, Number(a.attempts) || 2), n = Math.max(1e3, Number(a.timeout) || kd);
  let o = null;
  for (let s = 0; s < r; s += 1) {
    const a = new AbortController, i = setTimeout(() => a.abort(), n);
    try {
      const r = await fetch(e, {
        cache: "no-cache",
        signal: a.signal
      });
      if (!r.ok) throw new Error(`${t} returned ${r.status}`);
      return await r.json();
    } catch (c) {
      o = "AbortError" === c?.name ? new Error(`${t} timed out`) : c;
    } finally {
      clearTimeout(i);
    }
    s + 1 < r && await $d(250 * (s + 1));
  }
  throw o || new Error(`${t} is unavailable`);
}

function Fd(e, t = "") {
  return window.Lumin?.init ? Promise.resolve(window.Lumin) : Ed || (Ed = new Promise((a, r) => {
    const n = document.createElement("script");
    let o = !1;
    n.src = e, n.async = !0, n.referrerPolicy = "no-referrer", t && (n.integrity = t, 
    n.crossOrigin = "anonymous");
    const c = (e, t) => {
      o || (o = !0, clearTimeout(s), e ? r(e) : a(t));
    }, s = setTimeout(() => c(new Error("LuminSDK timed out")), Pd);
    n.addEventListener("load", () => window.Lumin?.init ? c(null, window.Lumin) : c(new Error("LuminSDK loaded without exposing its API")), {
      once: !0
    }), n.addEventListener("error", () => c(new Error("LuminSDK could not be loaded")), {
      once: !0
    }), document.head.append(n);
  }).catch(e => {
    throw Ed = null, e;
  }), Ed);
}

async function Nd(e = hd.manifest?.catalogs?.find(e => "lumin" === e.format)?.sdkUrl, t = hd.manifest?.catalogs?.find(e => "lumin" === e.format)?.sdkIntegrity) {
  return xd || (xd = (async () => {
    const a = await Fd(e, t);
    return await Bd(a.init({
      headless: !0
    }), Pd, "LuminSDK setup"), a;
  })().catch(e => {
    throw xd = null, e;
  }), xd);
}

function Rd(e, t = !0) {
  const a = "cloud" === e ? "cloud" : "all";
  fd.localView.hidden = "all" !== a, fd.cloudView.hidden = "cloud" !== a;
  for (const r of fd.viewButtons) {
    const e = r.dataset.gameView === a;
    r.classList.toggle("active", e), r.setAttribute("aria-pressed", String(e));
  }
  if ("cloud" !== a || fd.cloudFrame.src || (fd.cloudFrame.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/cloud-gaming/?embedded=games"), 
  t) try {
    const e = new URL(location.href);
    e.hash = "cloud" === a ? "cloud" : "", H.replaceState(null, "", e);
  } catch {}
}

for (const e of fd.viewButtons) e.addEventListener("click", () => Rd(e.dataset.gameView));

function Dd() {
  const e = {};
  let t = 0;
  try {
    for (let a = 0; a < localStorage.length && Object.keys(e).length < 64; a += 1) {
      const r = localStorage.key(a);
      if (!r || /^(?:nyx\.|drop\.|nook\.|tutsi\.|firebase:)/.test(r) || /[\u0000-\u001f]/.test(r)) continue;
      const n = localStorage.getItem(r);
      if (!("string" != typeof n || (new TextEncoder).encode(n).length > 24e3)) {
        if (t += (new TextEncoder).encode(r).length + (new TextEncoder).encode(n).length, 
        t > 28e4) break;
        e[r] = n;
      }
    }
  } catch {}
  return e;
}

function Wd(e, t = {}) {
  if (parent === window) return Promise.resolve({});
  const a = `game-${Date.now().toString(36)}-${(++bd).toString(36)}`;
  return new Promise((r, n) => {
    const o = setTimeout(() => {
      vd.delete(a), n(new Error("Cloud save did not respond."));
    }, 7e3);
    vd.set(a, {
      resolve: r,
      reject: n,
      timer: o
    }), parent.postMessage({
      type: e,
      requestId: a,
      ...t
    }, location.origin);
  });
}

async function Ud(e) {
  if (!e?.key) return {};
  try {
    const t = await Wd("nyx:cloud-game-load", {
      gameKey: e.key
    }), a = t?.storage && "object" == typeof t.storage ? t.storage : {};
    Object.entries(a).forEach(([e, t]) => {
      "string" != typeof e || "string" != typeof t || /^(?:nyx\.|drop\.|nook\.|tutsi\.|firebase:)/.test(e) || localStorage.setItem(e, t);
    });
  } catch {}
  return Dd();
}

function zd(e, t = {}) {
  if (!e?.key) return;
  const a = Dd(), r = {};
  Object.entries(a).forEach(([e, a]) => {
    t[e] !== a && (r[e] = a);
  });
  const n = Object.keys(t).filter(e => !(e in a));
  (Object.keys(r).length || n.length) && Wd("nyx:cloud-game-save", {
    gameKey: e.key,
    storage: r,
    removed: n
  }).catch(() => {});
}

function qd() {
  if (parent !== window) try {
    const e = getComputedStyle(parent.document.documentElement), t = getComputedStyle(parent.document.body), a = [ t.getPropertyValue("--theme-accent"), t.getPropertyValue("--theme-a"), t.getPropertyValue("--accent"), e.getPropertyValue("--theme-accent"), e.getPropertyValue("--theme-a"), e.getPropertyValue("--accent") ].map(e => e.trim()).find(e => e && CSS.supports("color", e));
    a && document.documentElement.style.setProperty("--accent", a);
  } catch {}
}

function Od() {
  if (qd(), parent !== window) try {
    const e = new MutationObserver(qd);
    e.observe(parent.document.documentElement, {
      attributes: !0,
      attributeFilter: [ "class", "style" ]
    }), e.observe(parent.document.body, {
      attributes: !0,
      attributeFilter: [ "class", "style" ]
    });
  } catch {}
}

Rd("#cloud" === location.hash.toLowerCase() ? "cloud" : "all", !1), Od();

const Kd = new Map([ [ "F/clfnafps.html", "https://classroomlesson.github.io/basic-ruffle-player/html/fnaf_pizzeria_simulator/index.html" ], [ "F/clfnafsl.html", "https://classroomlesson.github.io/basic-ruffle-player/html/fnaf5/index.html" ], [ "minecraft/Dragonxclient.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/EaglercraftL_1.9_v0_7_0_Offline_Signed.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/EaglercraftX 1.8.8(u29).html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/EaglercraftZ_1.11.2.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/eaglercraft.1.5.2.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ] ]);

function jd(e) {
  return String(e || "Game").replace(/\.html?$/i, "").replace(/\bindex$/i, "").replace(/[-_]+/g, " ").replace(/([a-z])([A-Z0-9])/g, "$1 $2").replace(/([0-9])([a-z])/gi, "$1 $2").replace(/[\\/]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, e => e.toUpperCase()) || "Game";
}

const Vd = new Map([ [ "1v1lol", "1v1.LOL" ], [ "attackhole", "Attack Hole" ], [ "achievmentunlocked", "Achievement Unlocked" ], [ "achievmentunlocked2", "Achievement Unlocked 2" ], [ "achievmentunlocked3", "Achievement Unlocked 3" ], [ "amongus", "Among Us" ], [ "animalcrossingwildworld", "Animal Crossing: Wild World" ], [ "aquaparkio", "Aquapark.io" ], [ "armormayhem2", "Armor Mayhem 2" ], [ "bloonstd1", "Bloons TD 1" ], [ "bloonstd3", "Bloons TD 3" ], [ "bobtherobber", "Bob the Robber" ], [ "bobtherobber2", "Bob the Robber 2" ], [ "buckshotroulette", "Buckshot Roulette" ], [ "burritobisonlaunchalibre", "Burrito Bison: Launcha Libre" ], [ "colorwatersort3d", "Color Water Sort 3D" ], [ "crazycattle3d", "Crazy Cattle 3D" ], [ "dadnme", "Dad 'n Me" ], [ "deadestate", "Dead Estate" ], [ "deadzed", "Dead Zed" ], [ "deadzed2", "Dead Zed 2" ], [ "deepersleep", "Deeper Sleep" ], [ "deepestsword", "Deepest Sword" ], [ "deepsleep", "Deep Sleep" ], [ "defendyournuts", "Defend Your Nuts" ], [ "defendyournuts2", "Defend Your Nuts 2" ], [ "eaglercraft188u29", "Eaglercraft 1.8.8" ], [ "eaglercraftalpha126offline", "Eaglercraft Alpha 1.2.6" ], [ "eaglercraftbeta13offline", "Eaglercraft Beta 1.3" ], [ "eaglercraftindevoffline", "Eaglercraft Indev" ], [ "593275fpaworld3", "Fancy Pants Adventures: World 3" ], [ "750785fpaworld4p1", "Fancy Pants Adventures: World 4 Part 1" ], [ "752737fpaworld4p2", "Fancy Pants Adventures: World 4 Part 2" ], [ "fancypantsadventuresworld3", "Fancy Pants Adventures: World 3" ], [ "fancypantsadventuresworld4part1", "Fancy Pants Adventures: World 4 Part 1" ], [ "fancypantsadventuresworld4part2", "Fancy Pants Adventures: World 4 Part 2" ], [ "fivenightsatfreddysworld", "Five Nights at Freddy's World" ], [ "gunspin", "Gun Spin" ], [ "gunmayhem", "Gun Mayhem" ], [ "gunmayhem2", "Gun Mayhem 2" ], [ "gunmayhemredux", "Gun Mayhem Redux" ], [ "html5doodlejump", "Doodle Jump" ], [ "1datedanger", "1 Date Danger" ], [ "clickteamfusiondeveloper25html5runtime", "Five Nights at Freddy's World Refreshed" ], [ "antonblastdemov12", "Antonblast" ], [ "shapezdemofactoryautomationgame", "shapez" ], [ "ducklife2worldchampion", "Duck Life 2: World Champion" ], [ "pacmanworld", "Pac-Man World" ], [ "roadoffury", "Road of Fury" ], [ "stateioyt", "State.io" ], [ "tombofthemask", "Tomb of the Mask" ], [ "vex2", "Vex 2" ], [ "worldshardestgame", "World's Hardest Game" ], [ "worldshardestgame2", "World's Hardest Game 2" ], [ "worldshardestgame3", "World's Hardest Game 3" ], [ "worldshardestgame4", "World's Hardest Game 4" ], [ "theworldshardestgame", "World's Hardest Game" ], [ "theworldshardestgame2", "World's Hardest Game 2" ], [ "theworldshardestgame3", "World's Hardest Game 3" ], [ "theworldshardestgame4", "World's Hardest Game 4" ], [ "worlds4", "World's Hardest Game 4" ], [ "worldbox", "WorldBox" ], [ "wormsworldparty", "Worms World Party" ] ]);

function Hd(e, t = "") {
  let a = String(e || "").replace(/@[a-f0-9]{8,}$/i, "").replace(/\?s\b/gi, "'s").replace(/\s*[-|]\s*(?:play online\b.*|poki\b.*|free (?:online )?.*|demo)\s*$/i, "").replace(/\s+html5\s*$/i, "").replace(/\s+/g, " ").trim();
  if (!a) return "";
  a = jd(a).replace(/\b(\d)\s+D\b/g, "$1D").replace(/\b(\d)\s+V\s+(\d)\b/gi, "$1v$2");
  const r = a.toLowerCase().replace(/[^a-z0-9]/g, "");
  return "gn" === t && (/^(?:ytgamewrapperwebgltemplate|piplayables|runnertemplate|fix|f|a|win|manifest|offlineclient|internetexplorer|jquerymin|easeljs\d+combined|emulatorjsdemo|youtubeplayable|ruffleplayer|soundboard|coolgames|\d*firebasefirestore|aaafunworld)$/i.test(r) || /^\d{2,}$/.test(r)) ? "" : Vd.get(r) || a;
}

function _d(e, t = "") {
  const a = String(e || "").trim();
  if (!a) return -1 / 0;
  const r = a.split(/\s+/).filter(Boolean);
  let n = Math.min(a.length, 36) + 9 * r.length;
  return 1 === r.length && a.length > 11 && (n -= 16), a.length > 48 && (n -= a.length - 48), 
  /[?@]|(?:template|wrapper|play online|demo)$/i.test(a) && (n -= 35), "duckmath" === t && (n += 5), 
  "lumin" === t && (n += 3), n;
}

function Zd(e) {
  const t = jd(e).toLowerCase().replace(/[^a-z0-9]/g, "");
  return {
    "10minutestilldawn": "10minutestildawn",
    fnaf: "fivenightsatfreddys1",
    fnaf2: "fivenightsatfreddys2",
    fnaf3: "fivenightsatfreddys3",
    fnaf4: "fivenightsatfreddys4",
    fnaf4halloween: "fivenightsatfreddys4halloween",
    fnafworld: "fivenightsatfreddysworld",
    fnafps: "fivenightsatfreddyspizzeriasimulator",
    fnafsl: "fivenightsatfreddyssisterlocation",
    fnafucn: "fivenightsatfreddysucn",
    fivenightsatfreddys: "fivenightsatfreddys1",
    fivenightsatfreddys5: "fivenightsatfreddyssisterlocation",
    theworldshardestgame: "worldshardestgame",
    theworldshardestgame2: "worldshardestgame2",
    theworldshardestgame3: "worldshardestgame3",
    theworldshardestgame4: "worldshardestgame4"
  }[t] || t;
}

function Yd(e, t) {
  return String(e || "").replace(/\{(\w+)\}/g, (e, a) => encodeURIComponent(t[a] ?? ""));
}

function Jd(e) {
  try {
    const t = new URL(String(e || "").trim());
    return /^https?:$/.test(t.protocol) ? (t.username = "", t.password = "", t.hash = "", 
    `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/games/remote-play.html?v=20260805-selected-proxy-engine-v3&url=${encodeURIComponent(t.href)}`) : "";
  } catch {
    return "";
  }
}

function Xd(e) {
  return String(e).replace(/\.[^.]+$/, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() + ".png";
}

function Qd(e) {
  if (!e) return "";
  try {
    const t = new URL(e, location.href);
    return new Set([ "raw.githubusercontent.com", "cdn.jsdelivr.net", "rawcdn.githack.com", "raw.githack.com" ]).has(t.hostname) ? `/gms-games-proxy?url=${encodeURIComponent(t.href)}` : t.href;
  } catch {
    return "";
  }
}

function em(e) {
  if (!e) return "";
  try {
    const t = new URL(e, location.href);
    if ("raw.githubusercontent.com" === t.hostname) {
      const e = t.pathname.split("/").filter(Boolean);
      if (e.length >= 4) {
        const [t, a, r, ...n] = e;
        return "gn-math" === t.toLowerCase() && "covers" === a.toLowerCase() ? `https://raw.githack.com/${encodeURIComponent(t)}/${encodeURIComponent(a)}/${encodeURIComponent(r)}/${n.map(encodeURIComponent).join("/")}` : `https://cdn.jsdelivr.net/gh/${encodeURIComponent(t)}/${encodeURIComponent(a)}@${encodeURIComponent(r)}/${n.map(encodeURIComponent).join("/")}`;
      }
    }
    return "https:" === t.protocol ? t.href : "";
  } catch {
    return "";
  }
}

function tm(e) {
  return Array.isArray(e) ? e : Array.isArray(e?.games) ? e.games : [];
}

function am(e) {
  const t = [ e?.title, e?.name, e?.path, e?.url, e?.cover, e?.img, e?.thumbnail ].map(e => String(e || "").toLowerCase().replace(/[^a-z0-9]+/g, "")).join(" ");
  return t.includes("amirrorscursesfw") || t.includes("amatyamirrorscurse");
}

async function rm(e) {
  if ("lumin" === e.format) {
    const t = await Nd(e.sdkUrl, e.sdkIntegrity), a = [], r = 100;
    let n = 1, o = 1;
    do {
      const e = await Bd(t.getGames({
        page: n,
        limit: r
      }), Pd, `LuminSDK catalog page ${n}`), c = Array.isArray(e?.games) ? e.games : [];
      a.push(...c), o = Math.max(1, Number(e?.pages) || 1), n += 1;
    } while (n <= o);
    return a.flatMap(t => {
      const a = String(t?.id || "").trim(), r = Hd(t?.name || a, "lumin");
      if (!a || !r) return [];
      const n = `lumin-game:${a}`, o = t?.image_token ? `lumin-cover:${t.image_token}` : "";
      return [ {
        key: Zd(r),
        title: r,
        url: n,
        cover: o,
        covers: o ? [ o ] : [],
        priority: Number(e.priority) || 0,
        source: e.id,
        sources: [ {
          url: n,
          source: e.id,
          priority: Number(e.priority) || 0,
          title: r,
          luminId: a
        } ]
      } ];
    });
  }
  const t = tm(await Td(e.url, e.id));
  let a = new Set;
  if (e.coversUrl) try {
    a = new Set(await Td(e.coversUrl, `${e.id} covers`, {
      attempts: 1
    }));
  } catch {
    a = new Set;
  }
  return t.flatMap(t => {
    if (am(t)) return [];
    const r = String(t.path || "").replace(/^\/+/, "");
    if (!r && "duckmath" !== e.format && "external" !== e.format) return [];
    const n = String(t.title || t.name || "").replace(/\s+/g, " ").trim();
    if (/^@[a-f0-9]{24,}$/i.test(n)) return [];
    const o = Hd("duckmath" === e.format ? jd(n || r) : n || jd(r), e.format);
    if (!o) return [];
    let c = "duckmath" === e.format ? String(t.url || "") : "external" === e.format ? Jd(t.url) : Yd(e.player, {
      path: r
    });
    if (!c) return [];
    let s = [];
    if ("ugs" === e.format) {
      c = Kd.get(r) || c;
      const e = Xd(r);
      a.has(e) && s.push(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/ugs/thumbs/${encodeURIComponent(e)}`);
    } else "gn" === e.format ? s.push(t.cover, em(t.coverFallback), em(t.cover)) : "gms" === e.format ? ("gba" === t.type && t.romId && e.gbaPlayer && (c = Yd(e.gbaPlayer, {
      romId: t.romId
    })), s.push(Qd(t.cover), em(t.cover))) : "external" === e.format && s.push(Qd(t.cover), Qd(t.coverFallback), em(t.cover));
    return s = [ ...new Set(s.filter(Boolean)) ], [ {
      key: Zd(o),
      title: o,
      url: c,
      cover: s[0] || "",
      covers: s,
      priority: Number(e.priority) || 0,
      source: e.id,
      fallbackOnly: Boolean(e.fallbackOnly),
      sources: [ {
        url: c,
        source: e.id,
        priority: Number(e.priority) || 0,
        title: o
      } ]
    } ];
  });
}

function nm(e) {
  const t = Number(e?.priority) || 0;
  return "gn" === e?.source ? t - 1e3 : t;
}

function om(e) {
  const t = new Map;
  for (const r of e.flat()) {
    if (!r.key || !r.url) continue;
    const e = t.get(r.key);
    if (r.fallbackOnly && !e) continue;
    const a = [ ...e?.sources || [], ...r.sources || [] ].filter(e => e?.url).filter((e, t, a) => a.findIndex(t => t.url === e.url) === t).sort((e, t) => nm(t) - nm(e)), n = [ ...new Set([ ...e?.covers || [], ...r.covers || [], r.cover ].filter(Boolean)) ], o = !e || nm(r) > nm(e) ? {
      ...r
    } : {
      ...e
    }, c = a[0];
    o.url = c.url, o.source = c.source, o.priority = c.priority, o.sources = a, o.title = a.map(e => ({
      title: e.title,
      score: _d(e.title, e.source)
    })).sort((e, t) => t.score - e.score)[0]?.title || o.title, o.covers = n, t.set(r.key, o);
  }
  const a = hd.manifest?.fallbackCover || "";
  return [ ...t.values() ].map(e => {
    const t = [ ...new Set(e.covers.filter(Boolean)) ];
    return {
      ...e,
      hasIcon: t.length > 0,
      covers: t.length ? [ ...new Set([ ...t, a ? Yd(a, {
        title: e.title
      }) : "" ].filter(Boolean)) ] : []
    };
  });
}

function cm(e) {
  const t = document.createElement("span");
  return t.className = "cover-fallback", t.textContent = e.trim().charAt(0).toUpperCase() || "?", 
  t;
}

function sm(e) {
  const t = document.createElement("span");
  t.className = "game-cover";
  const a = cm(e.title);
  if (t.append(a), !e.covers.length) return t;
  const r = document.createElement("img");
  r.alt = "", r.loading = "eager", r.decoding = "async", r.referrerPolicy = "no-referrer";
  let n = 0;
  const o = async e => {
    if (!e.startsWith("lumin-cover:")) return void (r.src = e);
    const t = e.slice(12);
    try {
      let e = Sd.get(t);
      if (!e) {
        const a = await Nd();
        e = await a.getImageUrl(t), e && Sd.set(t, e);
      }
      e ? r.src = e : r.dispatchEvent(new Event("error"));
    } catch {
      r.dispatchEvent(new Event("error"));
    }
  };
  return o(e.covers[n]), r.addEventListener("load", () => {
    r.classList.add("loaded"), a.remove();
  }), r.addEventListener("error", () => {
    n += 1, n < e.covers.length ? o(e.covers[n]) : r.remove();
  }), t.append(r), t;
}

function im(e) {
  const t = document.createElement("button");
  t.className = "game-card", t.type = "button", t.dataset.gameKey = e.key, t.dataset.gameSource = e.source, 
  t.dataset.preferredSource = [ "all", "misc" ].includes(hd.activeLibrary) ? "" : hd.activeLibrary, 
  t.setAttribute("aria-label", `Play ${e.title}`), t.append(sm(e));
  const a = document.createElement("span");
  a.className = "game-source-badge";
  const r = [ "all", "misc" ].includes(hd.activeLibrary) ? e.source : hd.activeLibrary;
  a.textContent = yd.find(e => e.id === r)?.shortLabel || "Game", t.append(a);
  const n = document.createElement("span");
  return n.className = "game-name", n.textContent = e.title, t.append(n), t;
}

function lm() {
  return md || !0 === hd.manifest?.includeUnillustrated;
}

function dm() {
  const e = fd.search.value.trim().toLowerCase();
  return hd.games.filter(t => ("misc" === hd.activeLibrary ? !t.hasIcon : (t.hasIcon || e || lm()) && ("all" === hd.activeLibrary || km(t).some(e => e.source === hd.activeLibrary))) && (!e || t.title.toLowerCase().includes(e))).sort((e, t) => "za" === fd.sort.value ? t.title.localeCompare(e.title, void 0, {
    numeric: !0
  }) : e.title.localeCompare(t.title, void 0, {
    numeric: !0
  }));
}

function mm() {
  const e = dm(), t = Math.max(1, Math.ceil(e.length / hd.pageSize));
  hd.page = Math.min(Math.max(1, hd.page), t), Gd(e);
  const a = (hd.page - 1) * hd.pageSize, r = e.slice(a, a + hd.pageSize), n = document.createDocumentFragment();
  for (const o of r) n.append(im(o));
  fd.grid.replaceChildren(n), fd.empty.hidden = e.length > 0, fd.count.textContent = `${e.length.toLocaleString()} game${1 === e.length ? "" : "s"}`, 
  fd.pagination.hidden = e.length <= hd.pageSize, fd.previousPage.disabled = hd.page <= 1, 
  fd.nextPage.disabled = hd.page >= t, fd.pageInfo.textContent = `Page ${hd.page} of ${t}`;
}

function um(e) {
  return "all" === e ? hd.games.filter(e => e.hasIcon || lm()).length : "misc" === e ? hd.games.filter(e => !e.hasIcon).length : hd.games.filter(t => (t.hasIcon || lm()) && km(t).some(t => t.source === e)).length;
}

function fm() {
  const e = document.createDocumentFragment();
  for (const t of yd) {
    const a = um(t.id);
    if ("all" !== t.id && 0 === a) continue;
    const r = document.createElement("button");
    r.type = "button", r.className = "library-tab", r.dataset.library = t.id, r.title = t.description, 
    r.setAttribute("aria-pressed", String(hd.activeLibrary === t.id)), r.classList.toggle("active", hd.activeLibrary === t.id);
    const n = document.createElement("span");
    n.textContent = t.label;
    const o = document.createElement("span");
    o.className = "library-tab-count", o.textContent = a.toLocaleString(), r.append(n, o), 
    e.append(r);
  }
  fd.libraryTabs.replaceChildren(e);
}

function pm() {
  hd.page = 1, mm();
}

function gm(e) {
  const t = dm(), a = Math.max(1, Math.ceil(t.length / hd.pageSize)), r = Math.min(Math.max(1, e), a);
  r !== hd.page && (hd.page = r, mm(), fd.grid.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start"
  }));
}

function hm(e) {
  try {
    const t = new URL(location.href);
    e ? t.searchParams.set("game", e) : t.searchParams.delete("game"), H.replaceState(null, "", t);
  } catch {}
}

function ym() {
  clearTimeout(hd.sourceTimer), hd.sourceTimer = 0;
}

function vm() {
  const e = Number(navigator.hardwareConcurrency || 8), t = Number(navigator.deviceMemory || 8);
  return matchMedia("(max-width: 480px) and (max-height: 520px)").matches || e <= 4 || t <= 4 ? 2 : e <= 6 || t <= 6 ? 1 : 0;
}

function bm() {
  return hd.activeGame && "off" !== hd.performancePreference ? "balanced" === hd.performancePreference ? 1 : "boost" === hd.performancePreference ? 2 : hd.performanceLevel : 0;
}

function wm(e, t = "") {
  const a = Math.max(0, Math.min(2, Math.round(Number(e) || 0)));
  (a !== hd.performanceLevel || t && t !== hd.performanceReason) && (hd.performanceLevel = a, 
  t && (hd.performanceReason = t), Lm());
}

function Lm() {
  const e = bm(), t = e > 0;
  document.body.classList.toggle("game-active", Boolean(hd.activeGame)), document.body.classList.toggle("game-performance-active", t), 
  document.body.dataset.gamePerformanceLevel = String(e);
  const a = "auto" === hd.performancePreference ? 2 === e ? "Auto \xb7 Boost" : 1 === e ? "Auto \xb7 Balanced" : "Auto" : "balanced" === hd.performancePreference ? "Balanced" : "boost" === hd.performancePreference ? "Boost" : "Off";
  fd.performanceLabel && (fd.performanceLabel.textContent = a), fd.performance && (fd.performance.dataset.mode = hd.performancePreference, 
  fd.performance.dataset.level = String(e), fd.performance.classList.toggle("active", t), 
  fd.performance.setAttribute("aria-pressed", String(t)), fd.performance.setAttribute("aria-label", `Game optimizer: ${a}`), 
  fd.performance.title = `Game optimizer: ${a}. Select to change Auto, Balanced, Boost, or Off.`);
}

function Sm() {
  hd.performanceFrame && cancelAnimationFrame(hd.performanceFrame), hd.performanceFrame = 0, 
  hd.performanceObserver?.disconnect?.(), hd.performanceObserver = null, hd.performanceSamples = [], 
  hd.performanceLongTasks = 0, hd.performanceStableWindows = 0, hd.performanceLastTune = 0;
}

function Em() {
  if (Sm(), !hd.activeGame) return;
  "auto" === hd.performancePreference && (hd.performanceLevel = vm(), hd.performanceReason = hd.performanceLevel ? "device" : "ready", 
  Lm());
  try {
    hd.performanceObserver = new PerformanceObserver(e => {
      hd.performanceLongTasks += e.getEntries().filter(e => e.duration >= 50).length;
    }), hd.performanceObserver.observe({
      type: "longtask"
    });
  } catch {
    hd.performanceObserver = null;
  }
  let e = performance.now();
  hd.performanceLastTune = e;
  const t = a => {
    if (hd.performanceFrame = 0, !hd.activeGame) return;
    const r = a - e;
    if (e = a, "visible" === document.visibilityState && r > 0 && r < 250 && (hd.performanceSamples.push(r), 
    hd.performanceSamples.length > 180 && hd.performanceSamples.shift()), "auto" === hd.performancePreference && "visible" === document.visibilityState && a - hd.performanceLastTune >= 2e3) {
      const e = hd.performanceSamples.splice(0), t = e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0, r = e.filter(e => e >= 38).length, n = vm(), o = e.length >= 12 && (t >= 25 || r >= 5 || hd.performanceLongTasks >= 2), c = e.length >= 40 && t > 0 && t < 19.5 && 0 === r && 0 === hd.performanceLongTasks;
      fd.performance && (fd.performance.dataset.averageFrame = t.toFixed(1), fd.performance.dataset.slowFrames = String(r), 
      fd.performance.dataset.longTasks = String(hd.performanceLongTasks)), o ? (hd.performanceStableWindows = 0, 
      wm(Math.max(n, hd.performanceLevel + 1), "slowdown")) : c && hd.performanceLevel > n ? (hd.performanceStableWindows += 1, 
      hd.performanceStableWindows >= 4 && (hd.performanceStableWindows = 0, wm(hd.performanceLevel - 1, "recovered"))) : hd.performanceStableWindows = 0, 
      hd.performanceLongTasks = 0, hd.performanceLastTune = a;
    }
    hd.performanceFrame = requestAnimationFrame(t);
  };
  hd.performanceFrame = requestAnimationFrame(t);
}

function xm(e, t = !1) {
  fd.playerLoading.classList.remove("done"), fd.playerLoading.classList.toggle("failed", t), 
  fd.playerLoadingText.textContent = e, fd.playerRetry.hidden = !t;
}

function km(e = hd.activeGame) {
  return e ? e.sources?.length ? e.sources : [ {
    url: e.url,
    source: e.source || "game",
    priority: e.priority || 0
  } ] : [];
}

function Im(e, t) {
  return {
    local: md ? "Archive" : "Nyx Archive",
    gn: "GN Math",
    gms: "GMS",
    lumin: "LuminSDK",
    catclass: "CatClass",
    duckmath: "DuckMath"
  }[e?.source] || `Provider ${t + 1}`;
}

function Pm() {
  if (!fd.provider) return;
  const e = km(), t = e.map(Im), a = new Map, r = new Map;
  t.forEach(e => a.set(e, (a.get(e) || 0) + 1));
  const n = e.map((e, n) => {
    const o = document.createElement("option"), c = t[n], s = (r.get(c) || 0) + 1;
    return r.set(c, s), o.value = String(n), o.textContent = a.get(c) > 1 ? `${c} ${s}` : c, 
    o;
  });
  fd.provider.replaceChildren(...n), fd.provider.value = String(Math.min(hd.activeSourceIndex, Math.max(0, e.length - 1))), 
  fd.provider.disabled = e.length < 2, fd.provider.title = e.length > 1 ? `${e.length} providers available` : "Only one provider is available for this game";
}

function Cm() {
  if (hd.activeGame) {
    ym(), fd.playerLoading.classList.add("done");
    try {
      parent.postMessage({
        type: "nyx:game-launched"
      }, "*");
    } catch {}
  }
}

function Mm() {
  ym(), fd.frame.src = "about:blank", xm("This game could not load from any available source.", !0);
  try {
    parent.postMessage({
      type: "nyx:game-failed"
    }, "*");
  } catch {}
}

async function Am(e, t = "") {
  const a = km();
  if (!hd.activeGame || e < 0 || e >= a.length) return void Mm();
  ym(), hd.activeSourceIndex = e, Pm(), hd.sourceAttempt += 1;
  const r = hd.sourceAttempt, n = a[e];
  xm(t && a.length > 1 ? `Trying another source\u2026 ${e + 1} of ${a.length}` : "Loading game\u2026" + (a.length > 1 ? ` Source ${e + 1} of ${a.length}` : ""));
  try {
    let e = window;
    for (let t = 0; t < 4; t += 1) {
      if ("function" == typeof e.nyxInstallGameAdProtection) {
        e.nyxInstallGameAdProtection(fd.frame);
        break;
      }
      if (e.parent === e) break;
      e = e.parent;
    }
  } catch {}
  let o = n.url;
  if ("lumin" === n.source) try {
    const e = await Nd(), t = await e.getGameUrl(n.luminId || n.url.slice(11));
    if (o = String(t?.url || ""), !o) throw new Error("LuminSDK did not return a playable URL");
  } catch {
    return void (r === hd.sourceAttempt && hd.activeGame && Gm("The Lumin game could not be prepared."));
  }
  if (r !== hd.sourceAttempt || !hd.activeGame) return;
  fd.frame.src = o;
  let c = !1;
  try {
    c = new URL(o, location.href).origin === location.origin;
  } catch {}
  (c || "lumin" === n.source) && (hd.sourceTimer = setTimeout(() => {
    r === hd.sourceAttempt && hd.activeGame && Am(e + 1, "The current source did not finish loading.");
  }, "lumin" === n.source ? 25e3 : 18e3));
}

function Gm(e = "") {
  if (!hd.activeGame) return;
  const t = km(), a = t[hd.activeSourceIndex];
  a?.url && hd.failedSources.add(a.url);
  let r = hd.activeSourceIndex + 1;
  for (;r < t.length && hd.failedSources.has(t[r].url); ) r += 1;
  r < t.length ? Am(r, e) : Mm();
}

async function $m(e, t = !0, a = "") {
  if (!e) return;
  hd.lastFocused = document.activeElement, hd.activeGame = e, hd.performanceLevel = "auto" === hd.performancePreference ? vm() : "balanced" === hd.performancePreference ? 1 : "boost" === hd.performancePreference ? 2 : 0, 
  hd.performanceReason = "auto" === hd.performancePreference && hd.performanceLevel ? "device" : "ready";
  const r = km(e), n = a ? r.findIndex(e => e.source === a && !hd.failedSources.has(e.url)) : -1, o = n >= 0 ? n : r.findIndex(e => !hd.failedSources.has(e.url));
  if (hd.activeSourceIndex = o >= 0 ? o : 0, Pm(), fd.playerTitle.textContent = e.title, 
  fd.frame.title = e.title, fd.player.hidden = !1, Lm(), Em(), wd = await Ud(e), hd.activeGame === e) {
    Am(hd.activeSourceIndex), fd.close.focus(), t && hm(e.key);
    try {
      parent.postMessage({
        type: "nyx:game-loading"
      }, "*");
    } catch {}
  }
}

function Bm() {
  zd(hd.activeGame, wd), wd = {}, ym(), hd.sourceAttempt += 1, hd.activeGame = null, 
  hd.performanceLevel = 0, hd.performanceReason = "ready", Sm(), fd.frame.src = "about:blank", 
  fd.player.hidden = !0, Lm(), xm("Loading game\u2026"), hm(""), hd.lastFocused?.focus?.();
}

async function Tm() {
  hd.manifest = await Td("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/games/games.json", "Catalog manifest", {
    attempts: 3
  });
  const e = Array.isArray(hd.manifest.catalogs) ? hd.manifest.catalogs : [], t = new Map, a = [];
  let r = 0, n = !1;
  const o = new URLSearchParams(location.search).get("game");
  if (!e.length) throw new Error("Catalog manifest did not contain any libraries");
  if (await Promise.all(e.map(async c => {
    try {
      t.set(c.id, await rm(c));
    } catch (s) {
      a.push({
        id: c.id,
        error: s
      }), console.warn(`Game library ${c.id} is unavailable`, s);
    } finally {
      r += 1, (() => {
        hd.games = om([ ...t.values() ]), hd.gamesByKey = new Map(hd.games.map(e => [ e.key, e ])), 
        "all" === hd.activeLibrary || um(hd.activeLibrary) || (hd.activeLibrary = "all"), 
        fm(), mm();
        const c = e.length - r;
        c > 0 && (fd.count.textContent += ` \xb7 ${c} ${1 === c ? "library" : "libraries"} loading`), 
        r === e.length && a.length && (fd.count.textContent += ` \xb7 ${a.length} unavailable`), 
        fd.progress.classList.toggle("done", hd.games.length > 0 || r === e.length), 0 === hd.games.length && r < e.length && (fd.empty.hidden = !0), 
        !n && o && hd.gamesByKey.has(o) && (n = !0, $m(hd.gamesByKey.get(o), !1));
      })();
    }
  })), !hd.games.length) throw new Error("No game library was available");
}

fd.grid.addEventListener("click", e => {
  const t = e.target.closest("[data-game-key]");
  t && $m(hd.gamesByKey.get(t.dataset.gameKey), !0, t.dataset.preferredSource);
}), fd.search.addEventListener("input", pm), fd.libraryTabs.addEventListener("click", e => {
  const t = e.target.closest("[data-library]");
  t && t.dataset.library !== hd.activeLibrary && (hd.activeLibrary = t.dataset.library, 
  fm(), pm());
}), fd.sort.addEventListener("change", pm), fd.previousPage.addEventListener("click", () => gm(hd.page - 1)), 
fd.nextPage.addEventListener("click", () => gm(hd.page + 1)), fd.close.addEventListener("click", Bm), 
fd.provider?.addEventListener("change", () => {
  const e = Number(fd.provider.value), t = km();
  !Number.isInteger(e) || e < 0 || e >= t.length || (hd.failedSources.delete(t[e].url), 
  Am(e, "Switching provider..."));
}), fd.performance?.addEventListener("click", () => {
  const e = [ "auto", "balanced", "boost", "off" ];
  hd.performancePreference = e[(e.indexOf(hd.performancePreference) + 1) % e.length], 
  hd.performanceLevel = "auto" === hd.performancePreference ? vm() : "balanced" === hd.performancePreference ? 1 : "boost" === hd.performancePreference ? 2 : 0, 
  hd.performanceReason = "auto" === hd.performancePreference && hd.performanceLevel ? "device" : "manual", 
  hd.performanceSamples = [], hd.performanceLongTasks = 0, hd.performanceStableWindows = 0, 
  localStorage.setItem("nyx.gamePerformanceMode", hd.performancePreference), Lm();
}), fd.reload.addEventListener("click", () => {
  hd.activeGame && Am(hd.activeSourceIndex);
}), fd.playerRetry.addEventListener("click", () => {
  for (const e of km()) hd.failedSources.delete(e.url);
  Am(0);
}), fd.fullscreen.addEventListener("click", async () => {
  try {
    document.fullscreenElement ? await document.exitFullscreen() : await fd.frame.parentElement.requestFullscreen();
  } catch {}
}), fd.frame.addEventListener("load", () => {
  if (fd.player.hidden || !hd.activeGame || "about:blank" === fd.frame.src) return;
  const e = km()[hd.activeSourceIndex];
  let t = !1, a = !1;
  try {
    const r = new URL(e?.url || "", location.href);
    t = r.origin === location.origin, a = t && /^\/assets\/(?:ugs|gn-math|gms-games|reds-misc)\/play\.html$/i.test(r.pathname), 
    t && "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/games/remote-play.html" === r.pathname && (a = !0);
  } catch {}
  t && !a || setTimeout(Cm, 900);
}), fd.frame.addEventListener("error", () => Gm("The current source could not be opened.")), 
window.addEventListener("message", e => {
  if (e.origin === location.origin && e.source === fd.cloudFrame.contentWindow && "nyx:account-token-request" === e.data?.type) {
    const t = String(e.data.requestId || "").slice(0, 120);
    if (!t || parent === window) return;
    const a = `games-cloud-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
    return Ld.set(a, {
      childRequestId: t,
      source: e.source
    }), setTimeout(() => Ld.delete(a), 5e3), void parent.postMessage({
      type: "nyx:account-token-request",
      requestId: a
    }, location.origin);
  }
  if (e.origin === location.origin && e.source === parent && "nyx:account-token-response" === e.data?.type) {
    const t = String(e.data.requestId || ""), a = Ld.get(t);
    if (!a) return;
    return Ld.delete(t), void a.source?.postMessage({
      type: "nyx:account-token-response",
      requestId: a.childRequestId,
      token: String(e.data.token || "")
    }, location.origin);
  }
  if (e.origin !== location.origin || e.source !== fd.cloudFrame.contentWindow || "nyx:games-view" !== e.data?.type) if (e.origin !== location.origin || e.source !== fd.cloudFrame.contentWindow || "nyx:cloud-player" !== e.data?.type) {
    if (e.origin === location.origin && "nyx:cloud-game-result" === e.data?.type) {
      const t = vd.get(String(e.data.requestId || ""));
      return void (t && (clearTimeout(t.timer), vd.delete(String(e.data.requestId || "")), 
      e.data.error ? t.reject(new Error(e.data.error)) : t.resolve(e.data)));
    }
    e.source === fd.frame.contentWindow && hd.activeGame && ("nyx:game-launched" === e.data?.type && Cm(), 
    "nyx:game-failed" === e.data?.type && Gm("The current source reported a loading error."));
  } else document.body.classList.toggle("cloud-session-active", !0 === e.data.active); else Rd(e.data.view);
}), fd.cloudFrame.addEventListener("load", () => {
  document.body.classList.remove("cloud-session-active");
}), addEventListener("pagehide", () => zd(hd.activeGame, wd), {
  passive: !0
}), document.addEventListener("keydown", e => {
  "Escape" !== e.key || fd.player.hidden || document.fullscreenElement || Bm();
}), Tm().catch(e => {
  console.error("Unable to load game library", e), fd.progress.classList.add("done"), 
  fd.count.textContent = "Could not load the game library", fd.empty.querySelector("h2").textContent = "Library unavailable", 
  fd.empty.querySelector("p").textContent = md ? "Reload Drop and try again." : "Reload Nyx and try again.", 
  fd.empty.hidden = !1;
});
