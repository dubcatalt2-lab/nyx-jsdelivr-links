import { warmBrowser as Se } from "../tutsi/@r2931fd1ced1f82891e21ea5e!.js";

import { watchWebsiteFrame as Ne } from "../tutsi/@rbb67d7dcaa90043b6c3b5e1b!.js";

import { setupDropPresence as Fe } from "./@rdee1237bb6a7318540ab65f2!.js";

import { browse as Be, control as Te, closeBrowser as Pe, currentWebsiteUrl as De, testRelay as He } from "../tutsi/@r2931fd1ced1f82891e21ea5e!.js";

import { websiteAddress as We } from "../tutsi/@rc0dd68bfae021c67a5257319!.js";

import { protectionSandbox as Ue, installShellPopupProtection as ze, installGameProtectionHost as je } from "../tutsi/@re1b4b200751d64fdd56726f8!.js";

import { trafficMeter as Oe } from "./@r6a249696b59d7622cdfdfd08!.js";

const m = e => document.getElementById(e), Je = {
  game: "M8 9h8a5 5 0 0 1 4.6 6.9l-.8 2a2 2 0 0 1-3.2.8L14.8 17H9.2l-1.8 1.7a2 2 0 0 1-3.2-.8l-.8-2A5 5 0 0 1 8 9z M8 12v4M6 14h4M16.5 13.2h.1M18.2 15h.1",
  bookmark: "M6 3h12v18l-6-4-6 4z",
  pin: "M8 3h8l-1 6 4 4v2H5v-2l4-4z M12 15v6",
  panel: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M9 3v18",
  plus: "M12 5v14 M5 12h14",
  home: "m3 10 9-7 9 7v11h-6v-7H9v7H3z",
  ai: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z M20 2v4 M18 4h4 M3 18v4 M1 20h4",
  settings: "M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1z M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  account: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",
  search: "M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
  enter: "M20 5v9H4m5-5-5 5 5 5",
  close: "m6 6 12 12 M18 6 6 18",
  back: "m14 5-7 7 7 7",
  forward: "m10 5 7 7-7 7",
  reload: "M20 11a8 8 0 1 0-2 6 M20 4v7h-7",
  file: "M6 3h8l4 4v14H6z M14 3v5h5",
  video: "M3 5h18v14H3z m7 4 6 3-6 3z",
  github: "M9 19c-4 1-4-2-6-2 m12 5v-4a4 4 0 0 0-1-3c3 0 6-1 6-6a5 5 0 0 0-1-3 5 5 0 0 0 0-3s-2 0-4 2a13 13 0 0 0-6 0C7 3 5 3 5 3a5 5 0 0 0 0 3 5 5 0 0 0-1 3c0 5 3 6 6 6a4 4 0 0 0-1 3v4",
  key: "M21 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0 M12 11 3 20h4v-4h4v-4",
  chevron: "m9 5 7 7-7 7"
}, p = e => "game" === e ? '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="6" width="20" height="13" rx="2.5"/><path d="M7.5 10v5M5 12.5h5"/><circle cx="15" cy="14" r=".9" fill="currentColor" stroke="none"/><circle cx="18" cy="11" r=".9" fill="currentColor" stroke="none"/></svg>' : "settings" === e ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' : "ai" === e ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 3 2.1 6.9L19 12l-6.9 2.1L10 21l-2.1-6.9L1 12l6.9-2.1L10 3Z"/><path d="M20 2v6m-3-3h6"/><rect x="2" y="19" width="3" height="3" rx="1"/></svg>' : "panel" === e ? '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + Je[e] + '"/></svg>';

document.querySelectorAll("[data-icon]").forEach(e => e.innerHTML = p(e.dataset.icon));

const Ve = window.open.bind(window), Ke = {
  engine: "duckduckgo",
  restore: !0,
  popupBlock: !0,
  adBlock: !0,
  downloadBlock: !0,
  transport: "textlib",
  autoRelay: !0,
  blocker: "auto"
};

let Ge = {};

try {
  Ge = JSON.parse(localStorage.getItem("drop.settings") || "{}");
} catch {}

const Ye = {
  ...Ke,
  closePrevention: !0 === Ge.closePrevention,
  engine: [ "duckduckgo", "google", "bing" ].includes(Ge.engine) ? Ge.engine : Ke.engine,
  restore: !1 !== Ge.restore,
  popupBlock: !1 !== Ge.popupBlock,
  adBlock: !1 !== Ge.adBlock
};

function Ze() {
  Ye.httpBridge = "direct" !== Ye.connection, Ye.autoRelay = "bridge" !== Ye.connection;
}

Ye.connection = [ "auto", "bridge", "direct" ].includes(Ge.connection) ? Ge.connection : "auto", 
Ze();

const $e = Oe();

Ye.onTraffic = (e, t) => $e.add(e, t), ze(() => Ye, () => "browser" === et || "games" === et), 
je(() => Ye, () => [ m("gamesFrame") ]);

let _e, Qe = [], Xe = null, et = "home", tt = !1, nt = [], ot = !1;

function I(e) {
  m("notice").textContent = e, m("notice").hidden = !1, clearTimeout(_e), _e = setTimeout(() => m("notice").hidden = !0, 6500);
}

function at() {
  try {
    localStorage.setItem("drop.settings", JSON.stringify(Ye));
  } catch {
    I("Browser storage is unavailable.");
  }
}

function rt() {
  try {
    Ye.restore ? localStorage.setItem("drop.tabs", JSON.stringify(Qe.map(({url: e, title: t, pinned: n}) => ({
      url: e,
      title: t,
      pinned: !!n
    })))) : localStorage.removeItem("drop.tabs");
  } catch {}
}

function it(e) {
  et = e, document.body.dataset.view = e;
  for (const t of [ "home", "browser", "ai", "games", "tube", "bookmarks" ]) m(t).hidden = t !== e;
  m("homeNav").toggleAttribute("aria-current", "home" === e), m("homeNav").setAttribute("aria-current", "home" === e ? "page" : "false"), 
  m("aiNav").setAttribute("aria-current", "ai" === e ? "page" : "false"), "home" === e && (m("query").value = "", 
  m("query").focus()), "ai" === e && mt(), "games" !== e || m("gamesFrame").getAttribute("src") || (m("gamesFrame").src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/drop/games.html", 
  mt()), "tube" !== e || m("tubeFrame").getAttribute("src") || (m("tubeFrame").src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/drop/tube.html", 
  mt()), "tube" !== e && m("tubeFrame").contentWindow && m("tubeFrame").contentWindow.postMessage({
    type: "drop:tube-pause"
  }, location.origin), "bookmarks" === e && yt();
  for (const t of [ "games", "tube", "bookmarks" ]) m(t + "Nav").setAttribute("aria-current", e === t ? "page" : "false");
  ct();
}

function ct() {
  Qe.sort((e, t) => Number(!!t.pinned) - Number(!!e.pinned)), kt(), m("tabCount").textContent = Qe.length, 
  m("tabs").replaceChildren(...Qe.map(e => {
    const t = document.createElement("div");
    t.className = "tab" + (e.pinned ? " pinned" : ""), t.setAttribute("role", "tab"), 
    t.setAttribute("aria-selected", String("browser" === et && Xe === e));
    const n = document.createElement("button");
    n.innerHTML = p(e.pinned ? "pin" : "file");
    const o = document.createElement("span");
    o.className = "label", o.textContent = e.title || new URL(e.url).hostname, n.append(o), 
    n.title = o.textContent, n.onclick = () => st(e);
    const a = document.createElement("button");
    a.className = "icon close-tab", a.innerHTML = p("close"), a.setAttribute("aria-label", "Close " + o.textContent), 
    a.onclick = () => lt(e);
    const r = document.createElement("button");
    return r.className = "icon pin-tab", r.innerHTML = p("pin"), r.setAttribute("aria-label", (e.pinned ? "Unpin " : "Pin ") + o.textContent), 
    r.setAttribute("aria-pressed", String(!!e.pinned)), r.onclick = () => ft(e), t.append(n, r, a), 
    t;
  }));
}

function st(e) {
  Xe = e, it("browser");
  for (const t of Qe) t.frame && (t.frame.hidden = t !== e);
  m("address").value = e.url, m("loading").textContent = e.loading ? "Loading..." : "", 
  ht(e.error), e.frame || ut(e, e.url);
}

function lt(e) {
  e.stopNavigationWatch?.(), clearTimeout(e.loadTimer);
  const t = Qe.indexOf(e);
  Qe = Qe.filter(t => t !== e), e.frame && (Pe(e.frame), e.frame.remove()), Xe === e && (Xe = null, 
  Qe.length ? st(Qe[Math.max(0, t - 1)]) : it("home")), ct(), rt();
}

function dt(e) {
  if (Qe.length >= 20) return void I("Close a tab before opening another.");
  const t = {
    id: crypto.randomUUID(),
    url: e,
    title: new URL(e).hostname,
    version: 0
  };
  Qe.push(t), st(t), rt();
}

async function ut(e, t) {
  const n = ++e.version;
  let o;
  e.stopNavigationWatch?.();
  try {
    o = e.frame?.contentDocument;
  } catch {}
  if (e.url = t, e.title = new URL(t).hostname, e.loading = !0, e.error = "", Xe === e && ht(""), 
  !e.frame) {
    const t = document.createElement("iframe");
    t.title = e.title, t.setAttribute("sandbox", Ue(Ye)), t.setAttribute("allow", "fullscreen; autoplay; clipboard-write"), 
    t.referrerPolicy = "no-referrer", t.hidden = Xe !== e, e.frame = t, m("stage").append(t), 
    t.addEventListener("load", () => {
      if (!Qe.includes(e) || e.loading) return;
      const n = De(t);
      n && (e.url = n, rt());
    });
  }
  Xe === e && (m("address").value = t, m("loading").textContent = "Loading..."), ct(), 
  e.stopNavigationWatch = Ne(e.frame, {
    previousDocument: o,
    onError: t => function(e, t) {
      Qe.includes(e) && e.version === t && (e.stopNavigationWatch?.(), clearTimeout(e.loadTimer), 
      e.loading = !1, e.error = "", Xe === e && (m("loading").textContent = "", ht(""), 
      I("This website is not responding. You can open another address.")));
    }(e, n),
    reload: () => Be(t, Ye, e.frame, {
      reconnect: !0
    }),
    onReady: () => {
      if (n !== e.version || !Qe.includes(e)) return;
      const t = De(e.frame);
      t && (e.url = t);
      try {
        e.title = e.frame.contentDocument?.title || new URL(e.url).hostname;
      } catch {}
      e.loading = !1, e.error = "", Xe === e && (ht(""), document.activeElement !== m("address") && (m("address").value = e.url), 
      m("loading").textContent = ""), ct(), rt();
    }
  });
  try {
    await Be(t, Ye, e.frame), n === e.version && Qe.includes(e) && rt();
  } catch (a) {
    n === e.version && e.stopNavigationWatch.failed(a.message || "Could not open this page.");
  }
}

function pt(e) {
  document.body.classList.toggle("collapsed", e), m("collapse").setAttribute("aria-expanded", String(!e)), 
  m("collapse").setAttribute("aria-label", e ? "Expand sidebar" : "Collapse sidebar"), 
  m("collapse").title = e ? "Expand sidebar" : "Collapse sidebar";
  try {
    localStorage.setItem("drop.collapsed", String(e));
  } catch {}
}

m("search").onsubmit = e => {
  e.preventDefault();
  try {
    dt(We(m("query").value, Ye.engine));
  } catch (t) {
    I(t.message);
  }
}, m("addressForm").onsubmit = e => {
  if (e.preventDefault(), Xe) try {
    ut(Xe, We(m("address").value, Ye.engine));
  } catch (t) {
    I(t.message);
  }
}, m("back").onclick = () => Te("back", Xe?.frame), m("forward").onclick = () => Te("forward", Xe?.frame), 
m("reload").onclick = m("retryPage").onclick = () => {
  Xe && ut(Xe, De(Xe.frame) || Xe.url);
}, m("newTab").onclick = m("homeNav").onclick = () => it("home"), m("aiNav").onclick = () => it("ai"), 
m("tubeNav").onclick = () => it("tube"), m("gamesNav").onclick = () => it("games"), 
m("bookmarksNav").onclick = () => it("bookmarks"), m("astraNav").onclick = () => dt("https://astra-education.top/"), 
m("shortcuts").onclick = e => {
  const t = e.target.closest("[data-url]");
  t && ("https://youtube.com" === t.dataset.url ? it("tube") : dt(t.dataset.url));
}, m("collapse").onclick = () => pt(!document.body.classList.contains("collapsed"));

try {
  pt(matchMedia("(max-width:700px)").matches || "true" === localStorage.getItem("drop.collapsed"));
} catch {}

m("connectionMode").value = Ye.connection, m("connectionMode").onchange = () => {
  Ye.connection = m("connectionMode").value, Ze(), at(), m("connectionStatus").textContent = "Ready for next navigation", 
  I("Connection preference saved. Reload an open page to apply it.");
}, m("testConnection").onclick = async () => {
  const e = m("testConnection");
  e.disabled = !0;
  try {
    await He(Ye);
  } catch (t) {
    m("connectionStatus").textContent = "Unavailable", I(t.message);
  } finally {
    e.disabled = !1;
  }
}, addEventListener("tutsi:relay-status", ({detail: e}) => {
  const t = e.url?.includes("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-relay/socket/");
  m("connectionStatus").textContent = [ "connected", "available", "switched" ].includes(e.state) ? t ? "HTTP bridge connected" : "WebSocket connected" : "checking" === e.state ? "Connecting..." : "Unavailable";
}), setInterval(() => {
  if (document.hidden || "browser" !== et || !Xe?.frame || Xe.loading) return;
  const e = De(Xe.frame);
  if (!e || !/^https?:/.test(e)) return;
  let t = Xe.title;
  try {
    t = Xe.frame.contentDocument?.title || new URL(e).hostname;
  } catch {}
  e === Xe.url && t === Xe.title || (Xe.url = e, Xe.title = t, document.activeElement !== m("address") && (m("address").value = e), 
  ct(), rt());
}, 500), m("engine").value = Ye.engine, m("restore").checked = Ye.restore, m("popups").checked = Ye.popupBlock, 
m("ads").checked = Ye.adBlock, m("settingsButton").onclick = () => m("settings").showModal(), 
document.querySelectorAll("[data-close]").forEach(e => e.onclick = () => m(e.dataset.close).close());

for (const [e, t] of [ [ "engine", "engine" ], [ "restore", "restore" ], [ "popups", "popupBlock" ], [ "ads", "adBlock" ] ]) m(e).onchange = () => {
  if (Ye[t] = "engine" === e ? m(e).value : m(e).checked, at(), rt(), "popups" === e || "ads" === e) {
    for (const e of Qe) e.frame && e.frame.setAttribute("sandbox", Ue(Ye));
    import("../tutsi/@r2931fd1ced1f82891e21ea5e!.js").then(e => e.updateProtectionPolicy(Ye));
  }
};

function mt() {
  m("aiFrame").getAttribute("src") || (m("aiFrame").src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/agents/?shell=drop");
}

function gt(e) {
  mt(), tt ? m("aiFrame").contentWindow.postMessage({
    type: "drop:command",
    action: e
  }, location.origin) : nt.push(e);
}

if (m("clearTabs").onclick = () => {
  for (const e of [ ...Qe ]) lt(e);
  try {
    localStorage.removeItem("drop.tabs");
  } catch {}
  I("Tabs cleared.");
}, m("keys").onclick = m("accountKeys").onclick = () => {
  m("settings").close(), m("accountMenu").close(), it("ai"), gt("keys");
}, m("createAccount").onclick = () => {
  m("accountMenu").close(), it("ai"), gt("signup");
}, m("profile").onclick = () => {
  m("accountMenu").showModal(), mt();
}, m("accountAction").onclick = () => {
  m("accountMenu").close(), it("ai"), gt(ot ? "signout" : "signin");
}, addEventListener("message", e => {
  if (e.origin !== location.origin || e.source !== m("aiFrame").contentWindow) return;
  const t = e.data;
  if ("drop:activity" === t?.type && [ "start", "end", "up", "down" ].includes(t.kind)) $e.add(t.kind, t.bytes); else {
    if ("drop:ready" === t?.type) {
      tt = !0;
      for (const e of nt) gt(e);
      nt = [];
    }
    "drop:account" === t?.type && (ot = !0 === t.signedIn, Mt = {
      uid: t.uid || "",
      signedIn: ot,
      displayName: t.name || "Drop account",
      avatarUrl: t.avatarUrl || ""
    }, m("createAccount").hidden = ot, xt && m("tubeFrame").contentWindow?.postMessage({
      type: "nyx:nyxtube-profile",
      requestId: xt,
      profile: Mt
    }, location.origin), m("accountName").textContent = t.name || "Account", m("accountAction").textContent = ot ? "Sign out" : "Sign in", 
    m("profile").title = ot ? t.name || "Account" : "Sign in");
  }
}), setInterval(() => {
  const e = $e.sample();
  m("speed").textContent = e.mbps.toFixed(2) + " Mbps";
  const t = {
    traffic: "Traffic: " + e.download.toFixed(2) + " down / " + e.upload.toFixed(2) + " up Mbps",
    requests: "Requests: " + e.rps.toFixed(1) + "/s / " + e.totalRequests + " total",
    data: "Data: " + (n = e.totalBytes, (n >= 1e9 ? (n / 1e9).toFixed(2) + " GB" : n >= 1e6 ? (n / 1e6).toFixed(2) + " MB" : n >= 1e3 ? (n / 1e3).toFixed(1) + " KB" : n + " B") + " transferred"),
    processing: "Processing: " + Math.round(e.processing) + "% active time / " + e.active + " in flight"
  };
  var n;
  m("transferDetail").replaceChildren(...Object.entries(t).map(([e, t]) => {
    const n = document.createElement("div");
    return n.dataset.series = e, n.textContent = t, n;
  })), m("traffic").setAttribute("aria-label", "Activity. " + Object.values(t).join(". "));
  for (const [o, a] of Object.entries(e.history)) {
    const e = "processing" === o ? 100 : Math.max("traffic" === o ? .1 : 1, ...a);
    m("graph").querySelector("[data-series=" + o + "]").setAttribute("d", a.map((t, n) => (n ? "L" : "M") + (90 * n / (a.length - 1)).toFixed(1) + " " + (26 - t / e * 23).toFixed(1)).join(" "));
  }
}, 1e3), addEventListener("keydown", e => {
  e.altKey && "n" === e.key && (e.preventDefault(), it("home")), e.altKey && "w" === e.key && "browser" === et && Xe && (e.preventDefault(), 
  lt(Xe)), e.altKey && /^[1-9]$/.test(e.key) && Qe[Number(e.key) - 1] && (e.preventDefault(), 
  st(Qe[Number(e.key) - 1]));
}), Ye.restore) try {
  const e = JSON.parse(localStorage.getItem("drop.tabs") || "[]");
  Array.isArray(e) && (Qe = e.slice(0, 20).filter(e => "string" == typeof e.url && /^https?:\/\//.test(e.url)).map(e => ({
    id: crypto.randomUUID(),
    url: new URL(e.url).href,
    title: String(e.title || new URL(e.url).hostname).slice(0, 100),
    pinned: !0 === e.pinned,
    version: 0
  })));
} catch {}

function ht(e) {
  m("browseError").hidden = !e, m("browseErrorText").textContent = e || "";
}

function ft(e) {
  e.pinned = !e.pinned, ct(), rt();
}

let bt = [];

try {
  const e = JSON.parse(localStorage.getItem("drop.bookmarks") || "[]");
  Array.isArray(e) && (bt = e.filter(e => "string" == typeof e.url && /^https?:\/\//.test(e.url)).map(e => ({
    url: new URL(e.url).href,
    title: String(e.title || e.url).slice(0, 200)
  })));
} catch {}

function vt() {
  try {
    localStorage.setItem("drop.bookmarks", JSON.stringify(bt));
  } catch {
    I("Bookmarks could not be saved. Browser storage may be full.");
  }
  kt(), yt();
}

function kt() {
  const e = !!Xe && bt.some(e => e.url === Xe.url);
  for (const [t, n, o] of [ [ "bookmarkPage", e, e ? "Remove bookmark" : "Bookmark page" ], [ "pinPage", !!Xe?.pinned, Xe?.pinned ? "Unpin tab" : "Pin tab" ] ]) m(t).setAttribute("aria-pressed", String(n)), 
  m(t).setAttribute("aria-label", o), m(t).title = o;
}

function yt() {
  const e = m("bookmarkSearch").value.trim().toLowerCase(), t = bt.filter(t => (t.title + " " + t.url).toLowerCase().includes(e));
  m("bookmarkList").replaceChildren(...t.map(e => {
    const t = document.createElement("div");
    t.className = "bookmark-row";
    const n = document.createElement("button");
    n.innerHTML = p("bookmark");
    const o = document.createElement("span"), a = document.createElement("strong"), r = document.createElement("small");
    a.textContent = e.title, r.textContent = e.url, o.append(a, r), n.append(o), n.onclick = () => dt(e.url);
    const i = document.createElement("button");
    return i.className = "icon", i.innerHTML = p("close"), i.setAttribute("aria-label", "Remove bookmark " + e.title), 
    i.onclick = () => {
      bt = bt.filter(t => t !== e), vt();
    }, t.append(n, i), t;
  })), m("bookmarkEmpty").hidden = t.length > 0, m("bookmarkEmpty").textContent = bt.length ? "No matching bookmarks." : "Save a page with the bookmark icon in the address bar.";
}

m("bookmarkPage").onclick = () => {
  if (!Xe) return;
  const e = bt.findIndex(e => e.url === Xe.url);
  e >= 0 ? bt.splice(e, 1) : bt.unshift({
    url: Xe.url,
    title: Xe.title
  }), vt();
}, m("pinPage").onclick = () => {
  Xe && ft(Xe);
}, m("bookmarkSearch").oninput = yt, addEventListener("message", e => {
  if (e.origin !== location.origin) return;
  const t = e.data;
  if (e.source === m("gamesFrame").contentWindow && [ "nyx:cloud-game-load", "nyx:cloud-game-save", "nyx:account-token-request" ].includes(t?.type)) {
    mt();
    const e = () => m("aiFrame").contentWindow.postMessage({
      type: "drop:game-account",
      request: t
    }, location.origin);
    if (tt) e(); else {
      const t = setInterval(() => {
        tt && (clearInterval(t), e());
      }, 100);
      setTimeout(() => clearInterval(t), 5e3);
    }
  }
  e.source === m("aiFrame").contentWindow && "drop:game-result" === t?.type && m("gamesFrame").contentWindow?.postMessage(t.result, location.origin);
}), it("home");

let wt, xt = "", Mt = {
  signedIn: !1,
  displayName: "Drop account"
};

function Ct(e) {
  e.preventDefault(), e.returnValue = "";
}

function Lt() {
  removeEventListener("beforeunload", Ct), Ye.closePrevention && addEventListener("beforeunload", Ct), 
  m("closePrevention").checked = Ye.closePrevention;
}

function Et(e) {
  e && (Ye.engine = m("setupEngine").value, Ye.closePrevention = m("setupClose").checked, 
  m("engine").value = Ye.engine, at(), Lt());
  try {
    localStorage.setItem("drop.setupComplete", "1");
  } catch {}
  m("setupWizard").close();
}

async function St() {
  await (window.dropStartupReady || Promise.resolve());
  try {
    if ("1" === localStorage.getItem("drop.setupComplete")) return;
  } catch {}
  m("setupEngine").value = Ye.engine, m("setupClose").checked = Ye.closePrevention, 
  m("setupWizard").showModal();
}

addEventListener("message", e => {
  if (e.origin !== location.origin || e.source !== m("tubeFrame").contentWindow) return;
  const t = e.data;
  "nyx:nyxtube-profile-request" === t?.type && (xt = t.requestId, e.source.postMessage({
    type: "nyx:nyxtube-profile",
    requestId: t.requestId,
    profile: Mt
  }, location.origin)), "nyx:nyxtube-open-profile" === t?.type && m("profile").click();
}), Fe({
  frame: m("aiFrame"),
  ensureAccount: mt,
  notice: I
}), m("closePrevention").onchange = () => {
  Ye.closePrevention = m("closePrevention").checked, at(), Lt();
}, Lt(), addEventListener("storage", e => {
  if ("drop.settings" === e.key) try {
    Ye.closePrevention = !0 === JSON.parse(e.newValue || "{}").closePrevention, Lt();
  } catch {}
}), m("blankCloak").onclick = () => {
  try {
    if (parent !== window && "about:blank" === parent.location.href) return void I("Drop is already open in about:blank.");
  } catch {}
  const e = Ve("about:blank", "_blank");
  if (e) try {
    const t = e.document;
    t.title = "New Tab", t.documentElement.style.cssText = "height:100%;background:#202020", 
    t.body.style.cssText = "margin:0;height:100%;overflow:hidden";
    const n = t.createElement("iframe");
    n.title = "Drop", n.src = location.href, n.style.cssText = "display:block;width:100%;height:100%;border:0", 
    n.allow = "autoplay; fullscreen; gamepad; microphone; display-capture; clipboard-read; clipboard-write", 
    n.allowFullscreen = !0, t.body.replaceChildren(n), e.opener = null, e.focus(), m("settings").close();
  } catch {
    e.close(), I("Could not open the about:blank window. Try again.");
  } else I("Allow popups for this site, then try again.");
}, m("setupForm").onsubmit = e => {
  e.preventDefault(), Et(!0);
}, m("setupSkip").onclick = () => Et(!1), m("setupWizard").addEventListener("cancel", e => {
  e.preventDefault(), Et(!1);
}), "complete" === document.readyState ? St() : document.addEventListener("DOMContentLoaded", () => {
  St();
}, {
  once: !0
});

const At = () => {
  document.hidden || wt || (wt = Se(Ye).finally(() => {
    wt = null;
  }));
};

m("query").addEventListener("focus", At), m("query").addEventListener("pointerdown", At, {
  passive: !0
}), "function" == typeof requestIdleCallback ? requestIdleCallback(At, {
  timeout: 1e3
}) : setTimeout(At, 700);
