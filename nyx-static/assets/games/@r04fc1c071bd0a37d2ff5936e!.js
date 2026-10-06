import "../../js/@r90cd04e868ae2a748f635dc3!.js";

import { createGameSponsors as md } from "../../js/@r27ba486955a88d43128de721!.js";

const ud = document.body.classList.contains("drop-games"), fd = !ud && "tutsi" !== document.documentElement.dataset.appShell && !document.documentElement.dataset.tutsiApp, pd = e => fd ? globalThis.nyxDisplayName(e) : e, gd = {
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
}, hd = fd ? md(gd.grid) : null, yd = localStorage.getItem("nyx.gamePerformanceMode"), vd = "on" === yd ? "balanced" : [ "auto", "balanced", "boost", "off" ].includes(yd) ? yd : "auto", bd = {
  games: [],
  gamesByKey: new Map,
  manifest: null,
  lastFocused: null,
  activeGame: null,
  activeSourceIndex: 0,
  sourceAttempt: 0,
  sourceTimer: 0,
  failedSources: new Set,
  performancePreference: vd,
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
}, wd = Object.freeze([ {
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
  label: ud ? "Archive" : "Nyx Archive",
  shortLabel: ud ? "Archive" : "Nyx",
  description: ud ? "The Drop game archive" : "Games stored with Nyx"
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
} ]), Ld = new Map;

let Sd = 0, Ed = {};

const xd = new Map, kd = new Map;

let Id = null, Pd = null;

const Cd = 8e3, Md = 2, Ad = 9e3;

let Gd, $d, Bd = "";

if (fd) {
  document.body.classList.add("nyx-arcade");
  const e = document.querySelector(".cove-header");
  e.querySelector(".eyebrow").textContent = "NYX", e.querySelector("h1").textContent = "ARCADE";
  const t = document.createElement("div");
  t.className = "arcade-masthead", e.before(t), t.append(e, document.querySelector(".game-view-switch")), 
  Gd = document.createElement("section"), Gd.className = "arcade-featured", Gd.setAttribute("aria-label", "Featured games"), 
  Gd.hidden = !0, gd.localView.prepend(Gd);
  const a = document.createElement("div");
  a.className = "arcade-collection", a.innerHTML = '<h2>Game library<span class="arcade-heading-line" aria-hidden="true"></span></h2>';
  const r = document.querySelector(".catalog-tools");
  r.before(a), a.append(r), $d = document.createElement("button"), $d.type = "button", 
  $d.className = "arcade-random", $d.setAttribute("aria-label", "Random game"), $d.title = "Random game", 
  $d.disabled = !0, $d.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h3c4 0 8 12 12 12h3m-4-4 4 4-4 4M3 18h3c1.7 0 3.4-2.2 5-5m2-3c1.7-2.5 3.3-4 5-4h3m-4-4 4 4-4 4"/></svg><span>Random game</span>', 
  r.append($d), $d.addEventListener("click", () => {
    const e = fm();
    e.length && Fm(e[Math.floor(Math.random() * e.length)], !0, [ "all", "misc" ].includes(bd.activeLibrary) ? "" : bd.activeLibrary);
  }), Gd.addEventListener("click", e => {
    const t = e.target.closest("[data-game-key]");
    t && Fm(bd.gamesByKey.get(t.dataset.gameKey));
  });
}

function Td(e) {
  if (!Gd) return;
  if ($d.disabled = 0 === e.length, Gd.hidden = Boolean(gd.search.value.trim()) || "all" !== bd.activeLibrary || 1 !== bd.page, 
  Gd.hidden) return;
  const t = [ "Slope", "Retro Bowl", "Geometry Dash" ].map(e => bd.games.find(t => t.hasIcon && t.title.toLowerCase() === e.toLowerCase())).filter(Boolean);
  Gd.hidden = !t.length;
  const a = JSON.stringify(t.map(e => [ e.key, e.covers ]));
  if (a === Bd) return;
  Bd = a;
  const r = document.createDocumentFragment();
  for (const [n, o] of t.entries()) {
    const e = document.createElement("button");
    e.className = "arcade-feature", e.type = "button", e.dataset.gameKey = o.key, e.setAttribute("aria-label", `Launch ${o.title}`);
    const t = document.createElement("span");
    t.className = "arcade-feature-copy";
    const a = document.createElement("span");
    a.className = "arcade-feature-label", a.textContent = 0 === n ? "In the spotlight" : "Arcade pick";
    const c = document.createElement("span");
    c.className = "arcade-feature-title", c.textContent = pd(o.title);
    const s = document.createElement("span");
    s.className = "arcade-feature-play", s.innerHTML = 'Play now <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>', 
    t.append(a, c, s);
    const i = document.createElement("span");
    i.className = "arcade-feature-number", i.textContent = `0${n + 1}`, i.setAttribute("aria-hidden", "true"), 
    e.append(dm(o), i, t), r.append(e);
  }
  Gd.replaceChildren(r);
}

function Fd(e) {
  return new Promise(t => setTimeout(t, e));
}

function Nd(e, t, a) {
  let r = 0;
  return Promise.race([ Promise.resolve(e), new Promise((e, n) => {
    r = setTimeout(() => n(new Error(`${a} timed out`)), t);
  }) ]).finally(() => clearTimeout(r));
}

async function Rd(e, t, a = {}) {
  const r = Math.max(1, Number(a.attempts) || 2), n = Math.max(1e3, Number(a.timeout) || Cd);
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
    s + 1 < r && await Fd(250 * (s + 1));
  }
  throw o || new Error(`${t} is unavailable`);
}

function Dd(e, t = "") {
  return window.Lumin?.init ? Promise.resolve(window.Lumin) : Id || (Id = new Promise((a, r) => {
    const n = document.createElement("script");
    let o = !1;
    n.src = e, n.async = !0, n.referrerPolicy = "no-referrer", t && (n.integrity = t, 
    n.crossOrigin = "anonymous");
    const c = (e, t) => {
      o || (o = !0, clearTimeout(s), e ? r(e) : a(t));
    }, s = setTimeout(() => c(new Error("LuminSDK timed out")), Ad);
    n.addEventListener("load", () => window.Lumin?.init ? c(null, window.Lumin) : c(new Error("LuminSDK loaded without exposing its API")), {
      once: !0
    }), n.addEventListener("error", () => c(new Error("LuminSDK could not be loaded")), {
      once: !0
    }), document.head.append(n);
  }).catch(e => {
    throw Id = null, e;
  }), Id);
}

async function Wd(e = bd.manifest?.catalogs?.find(e => "lumin" === e.format)?.sdkUrl, t = bd.manifest?.catalogs?.find(e => "lumin" === e.format)?.sdkIntegrity) {
  return Pd || (Pd = (async () => {
    const a = await Dd(e, t);
    return await Nd(a.init({
      headless: !0
    }), Ad, "LuminSDK setup"), a;
  })().catch(e => {
    throw Pd = null, e;
  }), Pd);
}

function Ud(e, t = !0) {
  const a = "cloud" === e ? "cloud" : "all";
  gd.localView.hidden = "all" !== a, gd.cloudView.hidden = "cloud" !== a;
  for (const r of gd.viewButtons) {
    const e = r.dataset.gameView === a;
    r.classList.toggle("active", e), r.setAttribute("aria-pressed", String(e));
  }
  if ("cloud" !== a || gd.cloudFrame.src || (gd.cloudFrame.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/cloud-gaming/?embedded=games"), 
  t) try {
    const e = new URL(location.href);
    e.hash = "cloud" === a ? "cloud" : "", H.replaceState(null, "", e);
  } catch {}
}

for (const e of gd.viewButtons) e.addEventListener("click", () => Ud(e.dataset.gameView));

function zd() {
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

function qd(e, t = {}) {
  if (parent === window) return Promise.resolve({});
  const a = `game-${Date.now().toString(36)}-${(++Sd).toString(36)}`;
  return new Promise((r, n) => {
    const o = setTimeout(() => {
      Ld.delete(a), n(new Error("Cloud save did not respond."));
    }, 7e3);
    Ld.set(a, {
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

async function Od(e) {
  if (!e?.key) return {};
  try {
    const t = await qd("nyx:cloud-game-load", {
      gameKey: e.key
    }), a = t?.storage && "object" == typeof t.storage ? t.storage : {};
    Object.entries(a).forEach(([e, t]) => {
      "string" != typeof e || "string" != typeof t || /^(?:nyx\.|drop\.|nook\.|tutsi\.|firebase:)/.test(e) || localStorage.setItem(e, t);
    });
  } catch {}
  return zd();
}

function jd(e, t = {}) {
  if (!e?.key) return;
  const a = zd(), r = {};
  Object.entries(a).forEach(([e, a]) => {
    t[e] !== a && (r[e] = a);
  });
  const n = Object.keys(t).filter(e => !(e in a));
  (Object.keys(r).length || n.length) && qd("nyx:cloud-game-save", {
    gameKey: e.key,
    storage: r,
    removed: n
  }).catch(() => {});
}

function Kd() {
  if (parent !== window) try {
    const e = getComputedStyle(parent.document.documentElement), t = getComputedStyle(parent.document.body), a = [ t.getPropertyValue("--theme-accent"), t.getPropertyValue("--theme-a"), t.getPropertyValue("--accent"), e.getPropertyValue("--theme-accent"), e.getPropertyValue("--theme-a"), e.getPropertyValue("--accent") ].map(e => e.trim()).find(e => e && CSS.supports("color", e));
    a && document.documentElement.style.setProperty("--accent", a);
  } catch {}
}

function Vd() {
  if (Kd(), parent !== window) try {
    const e = new MutationObserver(Kd);
    e.observe(parent.document.documentElement, {
      attributes: !0,
      attributeFilter: [ "class", "style" ]
    }), e.observe(parent.document.body, {
      attributes: !0,
      attributeFilter: [ "class", "style" ]
    });
  } catch {}
}

Ud("#cloud" === location.hash.toLowerCase() ? "cloud" : "all", !1), Vd();

const Hd = new Map([ [ "F/clfnafps.html", "https://classroomlesson.github.io/basic-ruffle-player/html/fnaf_pizzeria_simulator/index.html" ], [ "F/clfnafsl.html", "https://classroomlesson.github.io/basic-ruffle-player/html/fnaf5/index.html" ], [ "minecraft/Dragonxclient.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/EaglercraftL_1.9_v0_7_0_Offline_Signed.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/EaglercraftX 1.8.8(u29).html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/EaglercraftZ_1.11.2.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ], [ "minecraft/eaglercraft.1.5.2.html", "https://classroomlesson.github.io/basic-ruffle-player/html/minecraft/index.html" ] ]);

function _d(e) {
  return String(e || "Game").replace(/\.html?$/i, "").replace(/\bindex$/i, "").replace(/[-_]+/g, " ").replace(/([a-z])([A-Z0-9])/g, "$1 $2").replace(/([0-9])([a-z])/gi, "$1 $2").replace(/[\\/]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, e => e.toUpperCase()) || "Game";
}

const Zd = new Map([ [ "1v1lol", "1v1.LOL" ], [ "attackhole", "Attack Hole" ], [ "achievmentunlocked", "Achievement Unlocked" ], [ "achievmentunlocked2", "Achievement Unlocked 2" ], [ "achievmentunlocked3", "Achievement Unlocked 3" ], [ "amongus", "Among Us" ], [ "animalcrossingwildworld", "Animal Crossing: Wild World" ], [ "aquaparkio", "Aquapark.io" ], [ "armormayhem2", "Armor Mayhem 2" ], [ "bloonstd1", "Bloons TD 1" ], [ "bloonstd3", "Bloons TD 3" ], [ "bobtherobber", "Bob the Robber" ], [ "bobtherobber2", "Bob the Robber 2" ], [ "buckshotroulette", "Buckshot Roulette" ], [ "burritobisonlaunchalibre", "Burrito Bison: Launcha Libre" ], [ "colorwatersort3d", "Color Water Sort 3D" ], [ "crazycattle3d", "Crazy Cattle 3D" ], [ "dadnme", "Dad 'n Me" ], [ "deadestate", "Dead Estate" ], [ "deadzed", "Dead Zed" ], [ "deadzed2", "Dead Zed 2" ], [ "deepersleep", "Deeper Sleep" ], [ "deepestsword", "Deepest Sword" ], [ "deepsleep", "Deep Sleep" ], [ "defendyournuts", "Defend Your Nuts" ], [ "defendyournuts2", "Defend Your Nuts 2" ], [ "eaglercraft188u29", "Eaglercraft 1.8.8" ], [ "eaglercraftalpha126offline", "Eaglercraft Alpha 1.2.6" ], [ "eaglercraftbeta13offline", "Eaglercraft Beta 1.3" ], [ "eaglercraftindevoffline", "Eaglercraft Indev" ], [ "593275fpaworld3", "Fancy Pants Adventures: World 3" ], [ "750785fpaworld4p1", "Fancy Pants Adventures: World 4 Part 1" ], [ "752737fpaworld4p2", "Fancy Pants Adventures: World 4 Part 2" ], [ "fancypantsadventuresworld3", "Fancy Pants Adventures: World 3" ], [ "fancypantsadventuresworld4part1", "Fancy Pants Adventures: World 4 Part 1" ], [ "fancypantsadventuresworld4part2", "Fancy Pants Adventures: World 4 Part 2" ], [ "fivenightsatfreddysworld", "Five Nights at Freddy's World" ], [ "gunspin", "Gun Spin" ], [ "gunmayhem", "Gun Mayhem" ], [ "gunmayhem2", "Gun Mayhem 2" ], [ "gunmayhemredux", "Gun Mayhem Redux" ], [ "html5doodlejump", "Doodle Jump" ], [ "1datedanger", "1 Date Danger" ], [ "clickteamfusiondeveloper25html5runtime", "Five Nights at Freddy's World Refreshed" ], [ "antonblastdemov12", "Antonblast" ], [ "shapezdemofactoryautomationgame", "shapez" ], [ "ducklife2worldchampion", "Duck Life 2: World Champion" ], [ "pacmanworld", "Pac-Man World" ], [ "roadoffury", "Road of Fury" ], [ "stateioyt", "State.io" ], [ "tombofthemask", "Tomb of the Mask" ], [ "vex2", "Vex 2" ], [ "worldshardestgame", "World's Hardest Game" ], [ "worldshardestgame2", "World's Hardest Game 2" ], [ "worldshardestgame3", "World's Hardest Game 3" ], [ "worldshardestgame4", "World's Hardest Game 4" ], [ "theworldshardestgame", "World's Hardest Game" ], [ "theworldshardestgame2", "World's Hardest Game 2" ], [ "theworldshardestgame3", "World's Hardest Game 3" ], [ "theworldshardestgame4", "World's Hardest Game 4" ], [ "worlds4", "World's Hardest Game 4" ], [ "worldbox", "WorldBox" ], [ "wormsworldparty", "Worms World Party" ] ]);

function Yd(e, t = "") {
  let a = String(e || "").replace(/@[a-f0-9]{8,}$/i, "").replace(/\?s\b/gi, "'s").replace(/\s*[-|]\s*(?:play online\b.*|poki\b.*|free (?:online )?.*|demo)\s*$/i, "").replace(/\s+html5\s*$/i, "").replace(/\s+/g, " ").trim();
  if (!a) return "";
  a = _d(a).replace(/\b(\d)\s+D\b/g, "$1D").replace(/\b(\d)\s+V\s+(\d)\b/gi, "$1v$2");
  const r = a.toLowerCase().replace(/[^a-z0-9]/g, "");
  return "gn" === t && (/^(?:ytgamewrapperwebgltemplate|piplayables|runnertemplate|fix|f|a|win|manifest|offlineclient|internetexplorer|jquerymin|easeljs\d+combined|emulatorjsdemo|youtubeplayable|ruffleplayer|soundboard|coolgames|\d*firebasefirestore|aaafunworld)$/i.test(r) || /^\d{2,}$/.test(r)) ? "" : Zd.get(r) || a;
}

function Jd(e, t = "") {
  const a = String(e || "").trim();
  if (!a) return -1 / 0;
  const r = a.split(/\s+/).filter(Boolean);
  let n = Math.min(a.length, 36) + 9 * r.length;
  return 1 === r.length && a.length > 11 && (n -= 16), a.length > 48 && (n -= a.length - 48), 
  /[?@]|(?:template|wrapper|play online|demo)$/i.test(a) && (n -= 35), "duckmath" === t && (n += 5), 
  "lumin" === t && (n += 3), n;
}

function Xd(e) {
  const t = _d(e).toLowerCase().replace(/[^a-z0-9]/g, "");
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

function Qd(e, t) {
  return String(e || "").replace(/\{(\w+)\}/g, (e, a) => encodeURIComponent(t[a] ?? ""));
}

function em(e) {
  try {
    const t = new URL(String(e || "").trim());
    return /^https?:$/.test(t.protocol) ? (t.username = "", t.password = "", t.hash = "", 
    `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/games/remote-play.html?v=20260805-selected-proxy-engine-v3&url=${encodeURIComponent(t.href)}`) : "";
  } catch {
    return "";
  }
}

function tm(e) {
  return String(e).replace(/\.[^.]+$/, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() + ".png";
}

function am(e) {
  if (!e) return "";
  try {
    const t = new URL(e, location.href);
    return new Set([ "raw.githubusercontent.com", "cdn.jsdelivr.net", "rawcdn.githack.com", "raw.githack.com" ]).has(t.hostname) ? `/gms-games-proxy?url=${encodeURIComponent(t.href)}` : t.href;
  } catch {
    return "";
  }
}

function rm(e) {
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

function nm(e) {
  return Array.isArray(e) ? e : Array.isArray(e?.games) ? e.games : [];
}

function om(e) {
  const t = [ e?.title, e?.name, e?.path, e?.url, e?.cover, e?.img, e?.thumbnail ].map(e => String(e || "").toLowerCase().replace(/[^a-z0-9]+/g, "")).join(" ");
  return t.includes("amirrorscursesfw") || t.includes("amatyamirrorscurse");
}

async function cm(e) {
  if ("lumin" === e.format) {
    const t = await Wd(e.sdkUrl, e.sdkIntegrity), a = [], r = 100;
    let n = 1, o = 1;
    do {
      const e = await Nd(t.getGames({
        page: n,
        limit: r
      }), Ad, `LuminSDK catalog page ${n}`), c = Array.isArray(e?.games) ? e.games : [];
      a.push(...c), o = Math.max(1, Number(e?.pages) || 1), n += 1;
    } while (n <= o);
    return a.flatMap(t => {
      const a = String(t?.id || "").trim(), r = Yd(t?.name || a, "lumin");
      if (!a || !r) return [];
      const n = `lumin-game:${a}`, o = t?.image_token ? `lumin-cover:${t.image_token}` : "";
      return [ {
        key: Xd(r),
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
  const t = nm(await Rd(e.url, e.id));
  let a = new Set;
  if (e.coversUrl) try {
    a = new Set(await Rd(e.coversUrl, `${e.id} covers`, {
      attempts: 1
    }));
  } catch {
    a = new Set;
  }
  return t.flatMap(t => {
    if (om(t)) return [];
    const r = String(t.path || "").replace(/^\/+/, "");
    if (!r && "duckmath" !== e.format && "external" !== e.format) return [];
    const n = String(t.title || t.name || "").replace(/\s+/g, " ").trim();
    if (/^@[a-f0-9]{24,}$/i.test(n)) return [];
    const o = Yd("duckmath" === e.format ? _d(n || r) : n || _d(r), e.format);
    if (!o) return [];
    let c = "duckmath" === e.format ? String(t.url || "") : "external" === e.format ? em(t.url) : Qd(e.player, {
      path: r
    });
    if (!c) return [];
    let s = [];
    if ("ugs" === e.format) {
      c = Hd.get(r) || c;
      const e = tm(r);
      a.has(e) && s.push(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/ugs/thumbs/${encodeURIComponent(e)}`);
    } else "gn" === e.format ? s.push(t.cover, rm(t.coverFallback), rm(t.cover)) : "gms" === e.format ? ("gba" === t.type && t.romId && e.gbaPlayer && (c = Qd(e.gbaPlayer, {
      romId: t.romId
    })), s.push(am(t.cover), rm(t.cover))) : "external" === e.format && s.push(am(t.cover), am(t.coverFallback), rm(t.cover));
    return s = [ ...new Set(s.filter(Boolean)) ], [ {
      key: Xd(o),
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

function sm(e) {
  const t = Number(e?.priority) || 0;
  return "gn" === e?.source ? t - 1e3 : t;
}

function im(e) {
  const t = new Map;
  for (const r of e.flat()) {
    if (!r.key || !r.url) continue;
    const e = t.get(r.key);
    if (r.fallbackOnly && !e) continue;
    const a = [ ...e?.sources || [], ...r.sources || [] ].filter(e => e?.url).filter((e, t, a) => a.findIndex(t => t.url === e.url) === t).sort((e, t) => sm(t) - sm(e)), n = [ ...new Set([ ...e?.covers || [], ...r.covers || [], r.cover ].filter(Boolean)) ], o = !e || sm(r) > sm(e) ? {
      ...r
    } : {
      ...e
    }, c = a[0];
    o.url = c.url, o.source = c.source, o.priority = c.priority, o.sources = a, o.title = a.map(e => ({
      title: e.title,
      score: Jd(e.title, e.source)
    })).sort((e, t) => t.score - e.score)[0]?.title || o.title, o.covers = n, t.set(r.key, o);
  }
  const a = bd.manifest?.fallbackCover || "";
  return [ ...t.values() ].map(e => {
    const t = [ ...new Set(e.covers.filter(Boolean)) ];
    return {
      ...e,
      hasIcon: t.length > 0,
      covers: t.length ? [ ...new Set([ ...t, a ? Qd(a, {
        title: e.title
      }) : "" ].filter(Boolean)) ] : []
    };
  });
}

function lm(e) {
  const t = document.createElement("span");
  return t.className = "cover-fallback", t.textContent = e.trim().charAt(0).toUpperCase() || "?", 
  t;
}

function dm(e) {
  const t = document.createElement("span");
  t.className = "game-cover";
  const a = lm(e.title);
  if (t.append(a), !e.covers.length) return t;
  const r = document.createElement("img");
  r.alt = "", r.loading = "eager", r.decoding = "async", r.referrerPolicy = "no-referrer";
  let n = 0;
  const o = async e => {
    if (!e.startsWith("lumin-cover:")) return void (r.src = e);
    const t = e.slice(12);
    try {
      let e = kd.get(t);
      if (!e) {
        const a = await Wd();
        e = await a.getImageUrl(t), e && kd.set(t, e);
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

function mm(e) {
  const t = document.createElement("button");
  t.className = "game-card", t.type = "button", t.dataset.gameKey = e.key, t.dataset.gameSource = e.source, 
  t.dataset.preferredSource = [ "all", "misc" ].includes(bd.activeLibrary) ? "" : bd.activeLibrary, 
  t.setAttribute("aria-label", `Play ${e.title}`), t.append(dm(e));
  const a = document.createElement("span");
  a.className = "game-source-badge";
  const r = [ "all", "misc" ].includes(bd.activeLibrary) ? e.source : bd.activeLibrary;
  a.textContent = wd.find(e => e.id === r)?.shortLabel || "Game", t.append(a);
  const n = document.createElement("span");
  return n.className = "game-name", n.textContent = pd(e.title), t.append(n), t;
}

function um() {
  return ud || !0 === bd.manifest?.includeUnillustrated;
}

function fm() {
  const e = gd.search.value.normalize("NFKC").trim().toLowerCase();
  return bd.games.filter(t => ("misc" === bd.activeLibrary ? !t.hasIcon : (t.hasIcon || e || um()) && ("all" === bd.activeLibrary || Cm(t).some(e => e.source === bd.activeLibrary))) && (!e || t.title.toLowerCase().includes(e))).sort((e, t) => "za" === gd.sort.value ? t.title.localeCompare(e.title, void 0, {
    numeric: !0
  }) : e.title.localeCompare(t.title, void 0, {
    numeric: !0
  }));
}

function pm() {
  const e = fm(), t = Math.max(1, Math.ceil(e.length / bd.pageSize));
  bd.page = Math.min(Math.max(1, bd.page), t), Td(e);
  const a = (bd.page - 1) * bd.pageSize, r = e.slice(a, a + bd.pageSize);
  if (hd) hd.render(r, mm); else {
    const e = document.createDocumentFragment();
    for (const t of r) e.append(mm(t));
    gd.grid.replaceChildren(e);
  }
  gd.empty.hidden = e.length > 0, gd.count.textContent = `${e.length.toLocaleString()} game${1 === e.length ? "" : "s"}`, 
  gd.pagination.hidden = e.length <= bd.pageSize, gd.previousPage.disabled = bd.page <= 1, 
  gd.nextPage.disabled = bd.page >= t, gd.pageInfo.textContent = `Page ${bd.page} of ${t}`;
}

function gm(e) {
  return "all" === e ? bd.games.filter(e => e.hasIcon || um()).length : "misc" === e ? bd.games.filter(e => !e.hasIcon).length : bd.games.filter(t => (t.hasIcon || um()) && Cm(t).some(t => t.source === e)).length;
}

function hm() {
  const e = document.createDocumentFragment();
  for (const t of wd) {
    const a = gm(t.id);
    if ("all" !== t.id && 0 === a) continue;
    const r = document.createElement("button");
    r.type = "button", r.className = "library-tab", r.dataset.library = t.id, r.title = t.description, 
    r.setAttribute("aria-pressed", String(bd.activeLibrary === t.id)), r.classList.toggle("active", bd.activeLibrary === t.id);
    const n = document.createElement("span");
    n.textContent = t.label;
    const o = document.createElement("span");
    o.className = "library-tab-count", o.textContent = a.toLocaleString(), r.append(n, o), 
    e.append(r);
  }
  gd.libraryTabs.replaceChildren(e);
}

function ym() {
  bd.page = 1, pm();
}

function vm(e) {
  const t = fm(), a = Math.max(1, Math.ceil(t.length / bd.pageSize)), r = Math.min(Math.max(1, e), a);
  r !== bd.page && (bd.page = r, pm(), gd.grid.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start"
  }));
}

function bm(e) {
  try {
    const t = new URL(location.href);
    e ? t.searchParams.set("game", e) : t.searchParams.delete("game"), H.replaceState(null, "", t);
  } catch {}
}

function wm() {
  clearTimeout(bd.sourceTimer), bd.sourceTimer = 0;
}

function Lm() {
  const e = Number(navigator.hardwareConcurrency || 8), t = Number(navigator.deviceMemory || 8);
  return matchMedia("(max-width: 480px) and (max-height: 520px)").matches || e <= 4 || t <= 4 ? 2 : e <= 6 || t <= 6 ? 1 : 0;
}

function Sm() {
  return bd.activeGame && "off" !== bd.performancePreference ? "balanced" === bd.performancePreference ? 1 : "boost" === bd.performancePreference ? 2 : bd.performanceLevel : 0;
}

function Em(e, t = "") {
  const a = Math.max(0, Math.min(2, Math.round(Number(e) || 0)));
  (a !== bd.performanceLevel || t && t !== bd.performanceReason) && (bd.performanceLevel = a, 
  t && (bd.performanceReason = t), xm());
}

function xm() {
  const e = Sm(), t = e > 0;
  document.body.classList.toggle("game-active", Boolean(bd.activeGame)), document.body.classList.toggle("game-performance-active", t), 
  document.body.dataset.gamePerformanceLevel = String(e);
  const a = "auto" === bd.performancePreference ? 2 === e ? "Auto \xb7 Boost" : 1 === e ? "Auto \xb7 Balanced" : "Auto" : "balanced" === bd.performancePreference ? "Balanced" : "boost" === bd.performancePreference ? "Boost" : "Off";
  gd.performanceLabel && (gd.performanceLabel.textContent = a), gd.performance && (gd.performance.dataset.mode = bd.performancePreference, 
  gd.performance.dataset.level = String(e), gd.performance.classList.toggle("active", t), 
  gd.performance.setAttribute("aria-pressed", String(t)), gd.performance.setAttribute("aria-label", `Game optimizer: ${a}`), 
  gd.performance.title = `Game optimizer: ${a}. Select to change Auto, Balanced, Boost, or Off.`);
}

function km() {
  bd.performanceFrame && cancelAnimationFrame(bd.performanceFrame), bd.performanceFrame = 0, 
  bd.performanceObserver?.disconnect?.(), bd.performanceObserver = null, bd.performanceSamples = [], 
  bd.performanceLongTasks = 0, bd.performanceStableWindows = 0, bd.performanceLastTune = 0;
}

function Im() {
  if (km(), !bd.activeGame) return;
  "auto" === bd.performancePreference && (bd.performanceLevel = Lm(), bd.performanceReason = bd.performanceLevel ? "device" : "ready", 
  xm());
  try {
    bd.performanceObserver = new PerformanceObserver(e => {
      bd.performanceLongTasks += e.getEntries().filter(e => e.duration >= 50).length;
    }), bd.performanceObserver.observe({
      type: "longtask"
    });
  } catch {
    bd.performanceObserver = null;
  }
  let e = performance.now();
  bd.performanceLastTune = e;
  const t = a => {
    if (bd.performanceFrame = 0, !bd.activeGame) return;
    const r = a - e;
    if (e = a, "visible" === document.visibilityState && r > 0 && r < 250 && (bd.performanceSamples.push(r), 
    bd.performanceSamples.length > 180 && bd.performanceSamples.shift()), "auto" === bd.performancePreference && "visible" === document.visibilityState && a - bd.performanceLastTune >= 2e3) {
      const e = bd.performanceSamples.splice(0), t = e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0, r = e.filter(e => e >= 38).length, n = Lm(), o = e.length >= 12 && (t >= 25 || r >= 5 || bd.performanceLongTasks >= 2), c = e.length >= 40 && t > 0 && t < 19.5 && 0 === r && 0 === bd.performanceLongTasks;
      gd.performance && (gd.performance.dataset.averageFrame = t.toFixed(1), gd.performance.dataset.slowFrames = String(r), 
      gd.performance.dataset.longTasks = String(bd.performanceLongTasks)), o ? (bd.performanceStableWindows = 0, 
      Em(Math.max(n, bd.performanceLevel + 1), "slowdown")) : c && bd.performanceLevel > n ? (bd.performanceStableWindows += 1, 
      bd.performanceStableWindows >= 4 && (bd.performanceStableWindows = 0, Em(bd.performanceLevel - 1, "recovered"))) : bd.performanceStableWindows = 0, 
      bd.performanceLongTasks = 0, bd.performanceLastTune = a;
    }
    bd.performanceFrame = requestAnimationFrame(t);
  };
  bd.performanceFrame = requestAnimationFrame(t);
}

function Pm(e, t = !1) {
  gd.playerLoading.classList.remove("done"), gd.playerLoading.classList.toggle("failed", t), 
  gd.playerLoadingText.textContent = e, gd.playerRetry.hidden = !t;
}

function Cm(e = bd.activeGame) {
  return e ? e.sources?.length ? e.sources : [ {
    url: e.url,
    source: e.source || "game",
    priority: e.priority || 0
  } ] : [];
}

function Mm(e, t) {
  return {
    local: ud ? "Archive" : "Nyx Archive",
    gn: "GN Math",
    gms: "GMS",
    lumin: "LuminSDK",
    catclass: "CatClass",
    duckmath: "DuckMath"
  }[e?.source] || `Provider ${t + 1}`;
}

function Am() {
  if (!gd.provider) return;
  const e = Cm(), t = e.map(Mm), a = new Map, r = new Map;
  t.forEach(e => a.set(e, (a.get(e) || 0) + 1));
  const n = e.map((e, n) => {
    const o = document.createElement("option"), c = t[n], s = (r.get(c) || 0) + 1;
    return r.set(c, s), o.value = String(n), o.textContent = a.get(c) > 1 ? `${c} ${s}` : c, 
    o;
  });
  gd.provider.replaceChildren(...n), gd.provider.value = String(Math.min(bd.activeSourceIndex, Math.max(0, e.length - 1))), 
  gd.provider.disabled = e.length < 2, gd.provider.title = e.length > 1 ? `${e.length} providers available` : "Only one provider is available for this game";
}

function Gm() {
  if (bd.activeGame) {
    wm(), gd.playerLoading.classList.add("done");
    try {
      parent.postMessage({
        type: "nyx:game-launched"
      }, "*");
    } catch {}
  }
}

function $m() {
  wm(), gd.frame.src = "about:blank", Pm("This game could not load from any available source.", !0);
  try {
    parent.postMessage({
      type: "nyx:game-failed"
    }, "*");
  } catch {}
}

async function Bm(e, t = "") {
  const a = Cm();
  if (!bd.activeGame || e < 0 || e >= a.length) return void $m();
  wm(), bd.activeSourceIndex = e, Am(), bd.sourceAttempt += 1;
  const r = bd.sourceAttempt, n = a[e];
  Pm(t && a.length > 1 ? `Trying another source\u2026 ${e + 1} of ${a.length}` : "Loading game\u2026" + (a.length > 1 ? ` Source ${e + 1} of ${a.length}` : ""));
  try {
    let e = window;
    for (let t = 0; t < 4; t += 1) {
      if ("function" == typeof e.nyxInstallGameAdProtection) {
        e.nyxInstallGameAdProtection(gd.frame);
        break;
      }
      if (e.parent === e) break;
      e = e.parent;
    }
  } catch {}
  let o = n.url;
  if ("lumin" === n.source) try {
    const e = await Wd(), t = await e.getGameUrl(n.luminId || n.url.slice(11));
    if (o = String(t?.url || ""), !o) throw new Error("LuminSDK did not return a playable URL");
  } catch {
    return void (r === bd.sourceAttempt && bd.activeGame && Tm("The Lumin game could not be prepared."));
  }
  if (r !== bd.sourceAttempt || !bd.activeGame) return;
  gd.frame.src = o;
  let c = !1;
  try {
    c = new URL(o, location.href).origin === location.origin;
  } catch {}
  (c || "lumin" === n.source) && (bd.sourceTimer = setTimeout(() => {
    r === bd.sourceAttempt && bd.activeGame && Bm(e + 1, "The current source did not finish loading.");
  }, "lumin" === n.source ? 25e3 : 18e3));
}

function Tm(e = "") {
  if (!bd.activeGame) return;
  const t = Cm(), a = t[bd.activeSourceIndex];
  a?.url && bd.failedSources.add(a.url);
  let r = bd.activeSourceIndex + 1;
  for (;r < t.length && bd.failedSources.has(t[r].url); ) r += 1;
  r < t.length ? Bm(r, e) : $m();
}

async function Fm(e, t = !0, a = "") {
  if (!e) return;
  bd.lastFocused = document.activeElement, bd.activeGame = e, bd.performanceLevel = "auto" === bd.performancePreference ? Lm() : "balanced" === bd.performancePreference ? 1 : "boost" === bd.performancePreference ? 2 : 0, 
  bd.performanceReason = "auto" === bd.performancePreference && bd.performanceLevel ? "device" : "ready";
  const r = Cm(e), n = a ? r.findIndex(e => e.source === a && !bd.failedSources.has(e.url)) : -1, o = n >= 0 ? n : r.findIndex(e => !bd.failedSources.has(e.url));
  if (bd.activeSourceIndex = o >= 0 ? o : 0, Am(), gd.playerTitle.textContent = pd(e.title), 
  gd.playerTitle.setAttribute("aria-label", e.title), gd.frame.title = e.title, gd.player.hidden = !1, 
  xm(), Im(), Ed = await Od(e), bd.activeGame === e) {
    Bm(bd.activeSourceIndex), gd.close.focus(), t && bm(e.key);
    try {
      parent.postMessage({
        type: "nyx:game-loading"
      }, "*");
    } catch {}
  }
}

function Nm() {
  jd(bd.activeGame, Ed), Ed = {}, wm(), bd.sourceAttempt += 1, bd.activeGame = null, 
  bd.performanceLevel = 0, bd.performanceReason = "ready", km(), gd.frame.src = "about:blank", 
  gd.player.hidden = !0, xm(), Pm("Loading game\u2026"), bm(""), bd.lastFocused?.focus?.();
}

async function Rm() {
  bd.manifest = await Rd("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/games/games.json", "Catalog manifest", {
    attempts: 3
  });
  const e = Array.isArray(bd.manifest.catalogs) ? bd.manifest.catalogs : [], t = new Map, a = [];
  let r = 0, n = !1;
  const o = new URLSearchParams(location.search).get("game");
  if (!e.length) throw new Error("Catalog manifest did not contain any libraries");
  if (await Promise.all(e.map(async c => {
    try {
      t.set(c.id, await cm(c));
    } catch (s) {
      a.push({
        id: c.id,
        error: s
      }), console.warn(`Game library ${c.id} is unavailable`, s);
    } finally {
      r += 1, (() => {
        bd.games = im([ ...t.values() ]), bd.gamesByKey = new Map(bd.games.map(e => [ e.key, e ])), 
        "all" === bd.activeLibrary || gm(bd.activeLibrary) || (bd.activeLibrary = "all"), 
        hm(), pm();
        const c = e.length - r;
        c > 0 && (gd.count.textContent += ` \xb7 ${c} ${1 === c ? "library" : "libraries"} loading`), 
        r === e.length && a.length && (gd.count.textContent += ` \xb7 ${a.length} unavailable`), 
        gd.progress.classList.toggle("done", bd.games.length > 0 || r === e.length), 0 === bd.games.length && r < e.length && (gd.empty.hidden = !0), 
        !n && o && bd.gamesByKey.has(o) && (n = !0, Fm(bd.gamesByKey.get(o), !1));
      })();
    }
  })), !bd.games.length) throw new Error("No game library was available");
}

gd.grid.addEventListener("click", e => {
  const t = e.target.closest("[data-game-key]");
  t && Fm(bd.gamesByKey.get(t.dataset.gameKey), !0, t.dataset.preferredSource);
}), gd.search.addEventListener("input", ym), gd.libraryTabs.addEventListener("click", e => {
  const t = e.target.closest("[data-library]");
  t && t.dataset.library !== bd.activeLibrary && (bd.activeLibrary = t.dataset.library, 
  hm(), ym());
}), gd.sort.addEventListener("change", ym), gd.previousPage.addEventListener("click", () => vm(bd.page - 1)), 
gd.nextPage.addEventListener("click", () => vm(bd.page + 1)), gd.close.addEventListener("click", Nm), 
gd.provider?.addEventListener("change", () => {
  const e = Number(gd.provider.value), t = Cm();
  !Number.isInteger(e) || e < 0 || e >= t.length || (bd.failedSources.delete(t[e].url), 
  Bm(e, "Switching provider..."));
}), gd.performance?.addEventListener("click", () => {
  const e = [ "auto", "balanced", "boost", "off" ];
  bd.performancePreference = e[(e.indexOf(bd.performancePreference) + 1) % e.length], 
  bd.performanceLevel = "auto" === bd.performancePreference ? Lm() : "balanced" === bd.performancePreference ? 1 : "boost" === bd.performancePreference ? 2 : 0, 
  bd.performanceReason = "auto" === bd.performancePreference && bd.performanceLevel ? "device" : "manual", 
  bd.performanceSamples = [], bd.performanceLongTasks = 0, bd.performanceStableWindows = 0, 
  localStorage.setItem("nyx.gamePerformanceMode", bd.performancePreference), xm();
}), gd.reload.addEventListener("click", () => {
  bd.activeGame && Bm(bd.activeSourceIndex);
}), gd.playerRetry.addEventListener("click", () => {
  for (const e of Cm()) bd.failedSources.delete(e.url);
  Bm(0);
}), gd.fullscreen.addEventListener("click", async () => {
  try {
    document.fullscreenElement ? await document.exitFullscreen() : await gd.frame.parentElement.requestFullscreen();
  } catch {}
}), gd.frame.addEventListener("load", () => {
  if (gd.player.hidden || !bd.activeGame || "about:blank" === gd.frame.src) return;
  const e = Cm()[bd.activeSourceIndex];
  let t = !1, a = !1;
  try {
    const r = new URL(e?.url || "", location.href);
    t = r.origin === location.origin, a = t && /^\/assets\/(?:ugs|gn-math|gms-games|reds-misc)\/play\.html$/i.test(r.pathname), 
    t && "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/games/remote-play.html" === r.pathname && (a = !0);
  } catch {}
  t && !a || setTimeout(Gm, 900);
}), gd.frame.addEventListener("error", () => Tm("The current source could not be opened.")), 
window.addEventListener("message", e => {
  if (e.origin === location.origin && e.source === gd.cloudFrame.contentWindow && "nyx:account-token-request" === e.data?.type) {
    const t = String(e.data.requestId || "").slice(0, 120);
    if (!t || parent === window) return;
    const a = `games-cloud-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
    return xd.set(a, {
      childRequestId: t,
      source: e.source
    }), setTimeout(() => xd.delete(a), 5e3), void parent.postMessage({
      type: "nyx:account-token-request",
      requestId: a
    }, location.origin);
  }
  if (e.origin === location.origin && e.source === parent && "nyx:account-token-response" === e.data?.type) {
    const t = String(e.data.requestId || ""), a = xd.get(t);
    if (!a) return;
    return xd.delete(t), void a.source?.postMessage({
      type: "nyx:account-token-response",
      requestId: a.childRequestId,
      token: String(e.data.token || "")
    }, location.origin);
  }
  if (e.origin !== location.origin || e.source !== gd.cloudFrame.contentWindow || "nyx:games-view" !== e.data?.type) if (e.origin !== location.origin || e.source !== gd.cloudFrame.contentWindow || "nyx:cloud-player" !== e.data?.type) {
    if (e.origin === location.origin && "nyx:cloud-game-result" === e.data?.type) {
      const t = Ld.get(String(e.data.requestId || ""));
      return void (t && (clearTimeout(t.timer), Ld.delete(String(e.data.requestId || "")), 
      e.data.error ? t.reject(new Error(e.data.error)) : t.resolve(e.data)));
    }
    e.source === gd.frame.contentWindow && bd.activeGame && ("nyx:game-launched" === e.data?.type && Gm(), 
    "nyx:game-failed" === e.data?.type && Tm("The current source reported a loading error."));
  } else document.body.classList.toggle("cloud-session-active", !0 === e.data.active); else Ud(e.data.view);
}), gd.cloudFrame.addEventListener("load", () => {
  document.body.classList.remove("cloud-session-active");
}), addEventListener("pagehide", () => jd(bd.activeGame, Ed), {
  passive: !0
}), document.addEventListener("keydown", e => {
  "Escape" !== e.key || gd.player.hidden || document.fullscreenElement || Nm();
}), Rm().catch(e => {
  console.error("Unable to load game library", e), gd.progress.classList.add("done"), 
  gd.count.textContent = "Could not load the game library", gd.empty.querySelector("h2").textContent = "Library unavailable", 
  gd.empty.querySelector("p").textContent = ud ? "Reload Drop and try again." : "Reload Nyx and try again.", 
  gd.empty.hidden = !1;
});
