import { renderReply as e, scheduleReply as t } from "./@r30db43030bb8e80f711a5429!.js";

const o = "drop" === new URLSearchParams(location.search).get("shell") && parent !== window;

import { setupDropEmbed as n } from "../drop/@rca66fe0ca42ef1648a842b3c!.js";

import { setupKeys as a } from "./@rd7268825e63a9f17477b5873!.js?v=20261002-haiku-v1";

import { readResponse as i } from "./@r30e5b755a8942777cddfc0ef!.js";

import { supportsConversationVoice as r } from "./@rebf6eb055a8f45edc8ae21e6!.js";

import { setupChats as s } from "./@rf4a369b9d15999244ce90400!.js?v=20260928-projects-v1";

import { setupScreen as c } from "./@rd30e506fa7dba9f22f5d3257!.js?v=20260927-chat";

import { setupPicker as l } from "./@r47c95e357fdf40ff154c6188!.js?v=20261002-haiku-v1";

import { setupMedia as d } from "./@rf7675e03c7a92504b558d97b!.js?v=20260928-voice-v2";

const m = e => document.getElementById(e);

m("model").addEventListener("change", () => v.stopVoice());

const u = {
  account: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",
  code: "m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18",
  chat: "M4 4h16v12H9l-5 4z",
  sun: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  moon: "M20 15A8 8 0 0 1 9 4a8 8 0 1 0 11 11z",
  compose: "M9 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5 M16 3a2 2 0 0 1 3 3l-9 9-4 1 1-4z",
  pin: "M8 3h8l-1 6 4 4v2H5v-2l4-4z M12 15v6",
  folder: "M3 7V5h6l2 2h10v13H3z",
  file: "M6 3h8l4 4v14H6z M14 3v5h5",
  refresh: "M20 11a8 8 0 1 0-2.35 5.65 M20 4v7h-7",
  plus: "M12 5v14 M5 12h14",
  send: "m21 3-8.5 18-3.2-7.3L2 10.5 21 3z M9.3 13.7l4.2-4.2",
  stop: "M6 6h12v12H6z",
  close: "m6 6 12 12 M18 6 6 18",
  search: "M21 21l-5-5 M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
  connect: "M8 3v5 M16 3v5 M5 8h14v3a7 7 0 0 1-14 0z M12 18v3",
  download: "m3 7 9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4 M12 11v10 M7 5l9 4",
  spark: "m12 3 2 6 6 3-6 2-2 6-2-6-6-2 6-3z"
};

function p(e) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + u[e] + '"></path></svg>';
}

for (const [fe, we, ve] of [ [ "refresh", "refresh", "" ], [ "newTask", "compose", "New chat" ], [ "send", "send", "" ], [ "stop", "stop", "Stop" ], [ "closeLogin", "close", "" ], [ "connect", "connect", "Connect folder" ], [ "activityTab", "spark", "Activity" ], [ "fileTab", "file", "Preview" ] ]) {
  const e = m(fe);
  e.innerHTML = p(we), ve && e.append(document.createTextNode(ve));
}

function h() {
  const e = "light" === document.documentElement.dataset.theme;
  m("themeToggle").innerHTML = p(e ? "moon" : "sun") + (e ? "Dark mode" : "Light mode"), 
  m("themeToggle").setAttribute("aria-label", e ? "Use dark mode" : "Use light mode");
}

m("themeToggle").onclick = () => {
  const e = "light" === document.documentElement.dataset.theme ? "dark" : "light";
  document.documentElement.dataset.theme = e;
  try {
    localStorage.setItem("nook.theme", e);
  } catch {}
  h();
}, h();

const g = document.querySelector(".aside-bottom a");

g.innerHTML = p("download") + "Download companion";

const f = document.getElementById("welcome").cloneNode(!0), w = l(m("model"), {
  compact: o
}), v = d({
  notice: I,
  sizePrompt: ee,
  canSend: () => !A && (T || N) && !!C?.currentUser && !!m("model").value,
  voiceModel: () => T ? !!r(U.find(e => e.id === m("model").value)) || (w.openVoice(), 
  I("Choose a model with native voice output."), !1) : (I("Switch to Chat for model voice conversations."), 
  !1)
}), y = a({
  appName: o ? "Drop" : "Nook",
  user: () => C?.currentUser,
  busy: () => A,
  notice: I,
  changed: async () => {
    v.stopVoice(), await K();
  }
}), b = c({
  notice: I
}), x = s({
  notice: I,
  busy: () => A,
  changed: ie,
  open: e => {
    v.reset(), b.stop(), H = e.messages || [], "boolean" == typeof e.computer && T === e.computer && le(!e.computer, !1), 
    e.model && [ ...m("model").options ].some(t => t.value === e.model) && (m("model").value = e.model, 
    m("model").dispatchEvent(new Event("change"))), m("effort").value = [ "low", "medium", "high" ].includes(e.effort) ? e.effort : "medium", 
    m("effort").dispatchEvent(new Event("change")), m("feed").replaceChildren(), H.length || re();
    for (const t of H) {
      let e = t.content;
      if (!T && "assistant" === t.role) try {
        e = JSON.parse(e).message || e;
      } catch {}
      q(t.role, e, t.model, t.metadata, t);
    }
    m("taskTitle").textContent = e.temporary ? "Temporary chat" : e.title || "New chat", 
    m("prompt").value = "", ee(), B();
  }
});

let C, M, S = "", k = 0, E = !1, T = !0, N = !1, A = !1, L = null, U = [], H = [], P = "";

const j = new URLSearchParams(location.hash.slice(1));

/^[a-f0-9]{64}$/.test(j.get("companion") || "") && "6768" === j.get("port") && sessionStorage.setItem("nyx.agents.pair", j.get("companion")), 
location.hash && window.history.replaceState(null, "", location.pathname + location.search);

const D = () => sessionStorage.getItem("nyx.agents.pair") || "";

function I(e) {
  m("notice").textContent = e, m("notice").hidden = !1, clearTimeout(I.timer), I.timer = setTimeout(() => m("notice").hidden = !0, 7e3);
}

function q(t, o, n, a, i) {
  m("welcome")?.remove(), "user" !== t && m("feed").querySelector(".thinking-message")?.remove();
  const r = document.createElement("article");
  r.className = "message " + t;
  const s = document.createElement("div");
  s.className = "message-heading";
  const c = n || m("model").value;
  if ("assistant" === t && c) {
    const e = document.createElement("span");
    e.className = "reply-logo", e.innerHTML = w.icon(c), s.append(e);
  }
  const l = document.createElement("strong");
  if (l.textContent = "user" === t ? "You" : "error" === t ? "Stopped" : U.find(e => e.id === c)?.label || c || "Assistant", 
  s.append(l), r.append(s), i && !x.temporary()) {
    i.id ||= crypto.randomUUID(), r.dataset.messageId = i.id;
    const e = document.createElement("button");
    e.type = "button", e.className = "message-pin", e.innerHTML = p("pin");
    const t = () => {
      e.setAttribute("aria-pressed", String(!!i.pinned)), e.setAttribute("aria-label", i.pinned ? "Unpin message" : "Pin message"), 
      e.title = i.pinned ? "Unpin message" : "Pin message";
    };
    t(), e.onclick = () => {
      A || (!i.pinned && H.filter(e => e.pinned).length >= 20 ? I("You can pin up to 20 messages per chat.") : (i.pinned = !i.pinned, 
      t(), x.save(H, m("model").value, !T, m("effort").value)));
    }, s.append(e);
  }
  if ("string" == typeof a?.summary && a.summary.trim()) {
    const e = document.createElement("details");
    e.className = "reasoning-summary";
    const t = document.createElement("summary");
    t.textContent = "Thinking summary";
    const o = document.createElement("div");
    o.textContent = a.summary.slice(0, 2400), e.append(t, o), r.append(e);
  }
  const d = document.createElement("div");
  if (d.className = "message-content", "assistant" === t ? e(d, o) : d.textContent = o, 
  r.append(d), "assistant" === t && "length" === i?.finishReason) {
    const e = document.createElement("button");
    e.type = "button", e.className = "continue-response", e.textContent = "Continue response", 
    e.title = "This reply reached its response limit. Continue using your remaining allowance.", 
    e.onclick = () => {
      A || (H.at(-1) === i ? m("prompt").value.trim() ? I("Send or clear your draft before continuing.") : (m("prompt").value = "Continue your previous response from where it stopped, without repeating it.", 
      m("composer").requestSubmit()) : I("Continue from the latest reply in this chat."));
    }, r.append(e);
  }
  return m("feed").append(r), m("feed").scrollTop = m("feed").scrollHeight, r;
}

function z(e) {
  m("feed").querySelector(".thinking-message")?.remove();
  const t = q("assistant", "", e);
  t.classList.add("thinking-message"), t.setAttribute("role", "status"), t.querySelector(".message-content").innerHTML = '<span class="thinking-dot"></span><span>Thinking...</span>', 
  t.dataset.started = Date.now();
}

let O, R = 0;

const V = document.createElement("div");

function W(e) {
  const t = Number(e.headers.get("retry-after"));
  if (429 !== e.status || !Number.isFinite(t) || t < 1 || t > 60) return;
  R = Date.now() + 1e3 * t, clearInterval(O);
  const o = () => {
    const e = Math.max(0, Math.ceil((R - Date.now()) / 1e3));
    V.hidden = !e, V.textContent = e ? `You can send another message in ${e}s.` : "", 
    B(), e || clearInterval(O);
  };
  o(), O = setInterval(o, 250);
}

function B() {
  m("apiKeys").disabled = A, m("send").disabled = Date.now() < R || A || !T && !N || !C?.currentUser || !m("model").value, 
  m("stop").hidden = !A, m("model").disabled = A, m("effortTrigger").disabled = A, 
  m("newTask").disabled = A, m("chatMode").disabled = A, m("computerMode").disabled = A, 
  m("connection").classList.toggle("online", N), m("connection").innerHTML = N ? "<i></i> Companion connected" : "<i></i> Companion offline";
}

async function J(e, t, o) {
  if (!D()) throw Error("Open this page from Start-Nyx-Agents.cmd to pair your companion.");
  let n;
  try {
    n = await fetch("http://127.0.0.1:6768" + e, {
      method: t ? "POST" : "GET",
      headers: {
        Authorization: "Bearer " + D(),
        ...t ? {
          "Content-Type": "application/json"
        } : {}
      },
      ...t ? {
        body: JSON.stringify(t)
      } : {},
      signal: o,
      targetAddressSpace: "loopback"
    });
  } catch (i) {
    if ("AbortError" === i.name) throw i;
    throw Error("Cannot reach the companion. Keep its window open and allow local-network access in your browser.");
  }
  const a = await n.json();
  if (!n.ok) throw Error(a.error || "Companion request failed.");
  return a;
}

V.hidden = !0, V.className = "ai-send-cooldown", V.setAttribute("role", "status"), 
V.style.cssText = "font-size:12px;text-align:center;padding:4px;", m("composer").before(V);

let Y = !1;

async function $(e, t, n, a) {
  const r = e;
  if ("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai" === e && y.active()) return y.send(t, n, a);
  o && !Y && (e = e.replace(/^\/api\/nyx-ai(?=\/models|$)/, "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/drop-ai")), o || (e = e.replace(/^\/api\/nyx-ai(?=\/models|$)/, "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nook-ai"));
  const s = await (C?.currentUser?.getIdToken());
  if (!s) throw Error("Sign in to your account first.");
  const c = await fetch(e, {
    method: t ? "POST" : "GET",
    headers: {
      Authorization: "Bearer " + s,
      "x-nyx-ai-provider": "shared",
      ...t ? {
        "Content-Type": "application/json"
      } : {}
    },
    ...t ? {
      body: JSON.stringify(t)
    } : {},
    signal: n
  });
  return o && !Y && /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/models" === r && (404 === c.status || c.headers.get("content-type")?.includes("text/html")) ? (Y = !0, 
  document.querySelector(".footnote").textContent = "Local preview uses existing account limits until the Drop backend is deployed.", 
  $(r, t, n, a)) : (W(c), i(c, a));
}

async function K() {
  const e = C?.currentUser?.uid, t = y.revision();
  try {
    const o = await y.models() || await $("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/models" + (y.active() ? "?custom=1" : ""));
    if (e !== C?.currentUser?.uid || t !== y.revision()) return;
    U = (o.models || []).filter(e => (!1 !== e.text || e.outputModalities?.includes("audio")) && !e.id.endsWith(":batch")), 
    m("model").replaceChildren(...U.map(e => new Option(e.label || e.id, e.id))), w.set(U), 
    B();
  } catch (o) {
    I(o.message);
  }
}

async function F(e = "") {
  const t = await J("/tool", {
    tool: "list",
    args: {
      path: e
    }
  });
  P = e, m("files").replaceChildren();
  const o = (e, t, o = !1) => {
    const n = document.createElement("button");
    n.className = "file" + (o ? " directory" : ""), n.innerHTML = p(o ? "folder" : "file"), 
    n.append(document.createTextNode(e)), n.onclick = () => t().catch(e => I(e.message)), 
    m("files").append(n);
  };
  e && o("Parent folder", () => F(e.split("/").slice(0, -1).join("/")), !0);
  for (const n of t.entries) o(n.name, async () => {
    if (n.directory) return F(n.path);
    const e = await J("/tool", {
      tool: "read",
      args: {
        path: n.path
      }
    });
    m("previewPath").textContent = n.path, m("previewContent").textContent = e.content, 
    G(!0);
  }, n.directory);
}

function G(e) {
  m("preview").hidden = !e, m("activity").hidden = e, m("fileTab").classList.toggle("selected", e), 
  m("activityTab").classList.toggle("selected", !e);
}

async function Q() {
  try {
    const e = await (await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
      cache: "no-store"
    })).json();
    if (!e.enabled) throw Error("Account sign-in is unavailable on this server.");
    const [t, n] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]);
    M = n;
    const a = t.getApps().find(e => "nyx-founder-owner" === e.name) || t.initializeApp({
      apiKey: e.apiKey,
      authDomain: e.projectId + ".firebaseapp.com",
      projectId: e.projectId
    }, "nyx-founder-owner");
    C = n.getAuth(a), await n.setPersistence(C, n.browserLocalPersistence), n.onAuthStateChanged(C, e => {
      y.bind(e?.uid || ""), o && parent.postMessage({
        type: "drop:account",
        signedIn: !!e,
        name: e?.displayName || "Drop account",
        uid: e?.uid || "",
        avatarUrl: e?.photoURL || ""
      }, location.origin), S = te(e?.displayName), k = 0, x.bind(e?.uid), e && ne(e), 
      m("account").innerHTML = p("account") + (e ? "Sign out" : "Sign in"), m("account").title = e ? "Sign out" : "Sign in", 
      m("account").setAttribute("aria-label", e ? "Sign out" : "Sign in"), e ? K() : (m("model").replaceChildren(new Option("Sign in to load models", "")), 
      w.set([]), v.reset()), B();
    });
  } catch (e) {
    I(e.message);
  }
}

m("activityTab").onclick = () => G(!1), m("fileTab").onclick = () => G(!0), m("refresh").onclick = () => F(P).catch(e => I(e.message)), 
m("connect").onclick = async () => {
  try {
    if (!C?.currentUser) return void m("login").showModal();
    I("Confirm the connection in the Windows dialog.");
    const e = await J("/connect", {});
    if (N = e.connected, !N) throw Error("Connection declined.");
    const t = await J("/status");
    m("folder").textContent = t.workspace, await F(), I("Connected to " + t.workspace);
  } catch (e) {
    N = !1, I(e.message);
  } finally {
    B();
  }
}, m("account").onclick = async () => {
  C?.currentUser ? (await ce(), await M.signOut(C), N = !1, H = [], m("feed").replaceChildren(), 
  B()) : (o && _(!1), m("login").showModal());
};

let X = !1, Z = !1;

function _(e) {
  Z || (X = e, m("authTitle").textContent = o ? e ? "Create your Drop account" : "Sign in to Drop" : e ? "Create an account" : "Sign in", 
  m("authSubmit").textContent = e ? "Create account" : "Sign in", m("authSwitchHint").textContent = e ? "Already have an account?" : "New here?", 
  m("authSwitch").textContent = e ? "Sign in" : "Create an account", m("confirmPasswordLabel").hidden = !e, 
  m("confirmPassword").disabled = !e, m("confirmPassword").required = e, m("password").autocomplete = e ? "new-password" : "current-password", 
  m("password").minLength = e ? 8 : 1, m("password").maxLength = 256, m("signupUsernameLabel").hidden = !e, 
  m("signupUsername").disabled = !e, m("signupUsername").required = e, m("confirmPassword").value = "", 
  m("loginError").textContent = "");
}

function ee() {
  const e = m("prompt");
  e.style.height = "40px", e.style.height = Math.min(180, Math.max(40, e.scrollHeight)) + "px";
}

function te(e) {
  return String(e || "").replace(/^[ @]+/, "").replace(/[&\xa7][0-9a-fk-or]/gi, "").trim().slice(0, 48);
}

function oe(e = !1) {
  const t = document.querySelector("#welcome h1");
  if (!t) return;
  const o = S ? [ `What's on your mind, ${S}?`, "How can I help?", "What are we exploring?", "What's next?" ] : [ "What's on your mind?", "How can I help?", "What are we exploring?", "What's next?" ];
  t.textContent = o[k % o.length], e && !matchMedia("(prefers-reduced-motion: reduce)").matches && t.animate([ {
    opacity: 0,
    transform: "translateY(5px)"
  }, {
    opacity: 1,
    transform: "translateY(0)"
  } ], {
    duration: 350,
    easing: "ease-out"
  });
}

async function ne(e) {
  try {
    const t = await $("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/profiles/me");
    if (C?.currentUser?.uid !== e.uid) return;
    S = te(t.profile?.username || t.profile?.handle || t.profile?.displayName || e.displayName), 
    oe();
  } catch {}
}

function ae(e) {
  if ("github" === e) return '<img class="recent-brand" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/agents/icons/github.svg" alt="GitHub">';
  const t = {
    chat: "M4 4h16v12H9l-5 4z",
    code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18",
    image: "M3 3h18v18H3z M3 16l5-5 4 4 3-3 6 6 M8 7h.01",
    deploy: "M7 17H5a4 4 0 0 1-.8-7.9A7 7 0 0 1 18 8a4.5 4.5 0 0 1 1 9h-2 M12 21V11m-4 4 4-4 4 4",
    search: u.search,
    file: u.file
  };
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + (t[e] || t.chat) + '"/></svg>';
}

function ie() {
  const e = m("welcome");
  if (!e) return;
  e.querySelector(".recent-suggestions")?.remove();
  const t = x.recent();
  if (!t.length) return;
  const o = document.createElement("div");
  o.className = "recent-suggestions", o.setAttribute("aria-label", "Continue a recent chat");
  for (const n of t) {
    const e = document.createElement("button");
    e.type = "button", e.innerHTML = ae(n.activity), e.dataset.activity = n.activity;
    const t = document.createElement("span"), a = document.createElement("small");
    a.textContent = "Continue";
    const i = document.createElement("strong");
    i.textContent = n.title, t.append(a, i), e.append(t), e.title = "Continue: " + n.title, 
    e.onclick = () => x.resume(n.id), o.append(e);
  }
  e.append(o);
}

function re() {
  m("feed").replaceChildren(f.cloneNode(!0)), oe(), ie();
}

function se(e) {
  G(!1), m("activity").querySelector(".muted")?.remove();
  const t = document.createElement("article");
  t.className = "action";
  const o = document.createElement("strong");
  o.textContent = e.tool + " \xb7 " + (e.args.path || e.args.cwd || "workspace");
  const n = document.createElement("pre");
  n.textContent = "write" === e.tool ? e.args.content : JSON.stringify(e.args, null, 2);
  const a = document.createElement("p");
  return a.textContent = [ "write", "delete", "command" ].includes(e.tool) ? "Waiting for desktop approval\u2026" : "Reading workspace\u2026", 
  t.append(o, n, a), m("activity").append(t), {
    row: t,
    status: a
  };
}

async function ce() {
  v.stopVoice(), L?.abort();
  try {
    D() && await J("/stop", {});
  } catch {}
}

function le(e, t = !0) {
  if (!A && T !== e) {
    if (T = e, v.reset(), b.stop(), t && (H = [], m("feed").replaceChildren()), document.body.classList.toggle("chat-mode", e), 
    !matchMedia("(prefers-reduced-motion: reduce)").matches) for (const [e, t] of [ ...document.querySelectorAll("main,.code-panels") ].entries()) t.getAnimations().forEach(e => e.cancel()), 
    "none" !== getComputedStyle(t).display && t.animate([ {
      opacity: 0,
      transform: "translateY(10px)"
    }, {
      opacity: 1,
      transform: "translateY(0)"
    } ], {
      duration: 320,
      delay: 45 * e,
      easing: "cubic-bezier(.22,1,.36,1)",
      fill: "backwards"
    });
    m("chatMode").setAttribute("aria-pressed", String(e)), m("computerMode").setAttribute("aria-pressed", String(!e)), 
    m("taskTitle").textContent = e ? "New chat" : "New task", m("newTask").innerHTML = p("compose") + (e ? "New chat" : "New task"), 
    m("modeHint").textContent = e ? "Chat with your selected model. Code mode is optional." : "Code mode: file edits and commands require desktop approval.", 
    m("prompt").placeholder = e ? "Message your model..." : "Describe a task...", B(), 
    m("prompt").focus();
  }
}

m("authSwitch").onclick = () => _(!X), m("closeLogin").onclick = () => {
  Z || m("login").close();
}, m("login").addEventListener("cancel", e => {
  Z && e.preventDefault();
}), m("login").addEventListener("close", () => {
  m("password").value = "", m("confirmPassword").value = "", m("loginError").textContent = "";
}), m("loginForm").onsubmit = async e => {
  if (e.preventDefault(), !Z) {
    if (m("loginError").textContent = "", X && m("password").value !== m("confirmPassword").value) return m("loginError").textContent = "Passwords do not match.", 
    void m("confirmPassword").focus();
    Z = !0;
    for (const e of [ "authSubmit", "authSwitch", "closeLogin", "email", "password", "confirmPassword", "signupUsername" ]) m(e).disabled = !0;
    m("authSubmit").textContent = X ? "Creating account..." : "Signing in...";
    try {
      if (!C) throw Error("Sign-in is still loading. Try again shortly.");
      if (X) {
        const e = await fetch(o ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/register" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nook-account/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: m("signupUsername").value.trim().toLowerCase(),
            email: m("email").value.trim(),
            password: m("password").value
          })
        }), t = await e.json();
        if (!e.ok) throw Object.assign(new Error(t.error || "Could not create your account."), {
          registration: !0
        });
        if (!t.customToken) throw Error("Missing sign-in token");
        try {
          await M.signInWithCustomToken(C, t.customToken);
        } catch {
          throw Object.assign(new Error("Account created. Switch to Sign in to access it."), {
            registration: !0
          });
        }
      } else await M.signInWithEmailAndPassword(C, m("email").value.trim(), m("password").value);
      m("login").close(), X && I("Account created. You are signed in.");
    } catch (t) {
      const e = {
        "auth/invalid-credential": "Email or password is incorrect.",
        "auth/email-already-in-use": "This email already has an account. Sign in instead.",
        "auth/weak-password": "Choose a stronger password with at least 6 characters.",
        "auth/password-does-not-meet-requirements": "This password does not meet the account password requirements.",
        "auth/invalid-email": "Enter a valid email address.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/network-request-failed": "Could not connect. Check your connection and try again.",
        "auth/operation-not-allowed": "Account registration is not enabled on this server."
      };
      m("loginError").textContent = t.registration ? t.message : e[t.code] || "Unable to continue. Please try again.";
    } finally {
      Z = !1;
      for (const e of [ "authSubmit", "authSwitch", "closeLogin", "email", "password" ]) m(e).disabled = !1;
      m("confirmPassword").disabled = !X, m("signupUsername").disabled = !X, m("authSubmit").textContent = X ? "Create account" : "Sign in";
    }
  }
}, m("prompt").addEventListener("input", ee), setInterval(() => {
  !document.hidden && document.querySelector("#welcome h1") && (k++, oe(!0));
}, 7e3), m("newTask").onclick = () => x.fresh(!1), m("stop").onclick = ce, m("composer").onsubmit = async e => {
  if (e.preventDefault(), Date.now() < R || A || !T && !N || !C?.currentUser) return;
  const o = v.voiceActive();
  let n = v.image();
  if (E) return;
  if (!n) {
    E = !0;
    try {
      n = await b.capture();
    } catch (r) {
      return void I(r.message);
    } finally {
      E = !1;
    }
  }
  const a = m("prompt").value.trim() || (n ? "Use this image as context for the task." : "");
  if (!a || v.preparing()) return;
  if (v.pause(), A = !0, L = new AbortController, B(), m("prompt").value = "", ee(), 
  m("taskTitle").textContent = a, H.push({
    role: "user",
    content: a,
    id: crypto.randomUUID()
  }), q("user", a, null, null, H.at(-1)), n) {
    const e = document.createElement("img");
    e.src = n.dataUrl, e.alt = "Attached image", e.className = "message-image", m("feed").lastElementChild.append(e);
  }
  v.clearImage();
  const i = m("model").value;
  try {
    if (T) {
      if ([ ...x.context(), ...H ].reduce((e, t) => e + t.content.length, 0) > 21e3) throw Error("This conversation is full. Start a new chat to continue.");
      let e;
      z(i);
      const r = o => {
        if (!o.text) return;
        e ||= q("assistant", "", o.model || i);
        const n = m("feed").scrollHeight - m("feed").scrollTop - m("feed").clientHeight < 100;
        t(e.querySelector(".message-content"), o.text, () => {
          n && (m("feed").scrollTop = m("feed").scrollHeight);
        });
      }, s = await $("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai", {
        model: i,
        message: a,
        messages: [ ...x.context(), ...H.slice(-18) ],
        stream: !o,
        temporaryChat: !0,
        responseDepth: {
          low: "off",
          medium: "normal",
          high: "extended"
        }[m("effort").value],
        reasoningEffort: m("effort").value,
        ...o ? {
          generateAudio: !0,
          voice: m("voiceName").value.trim() || "alloy"
        } : {},
        ...n ? {
          image: n
        } : {}
      }, L.signal, r);
      if ("string" != typeof s.text || !s.text.trim()) throw Error("The model returned no text. Try again or select another model.");
      return e?.remove(), H.push({
        role: "assistant",
        content: s.text,
        model: s.model || i,
        finishReason: s.finishReason,
        metadata: {
          summary: String(s.metadata?.summary || "").slice(0, 2400)
        }
      }), q("assistant", s.text, s.model || i, s.metadata, H.at(-1)), void v.reply(s.text, s.audio);
    }
    for (let e = 0; e < 12; e++) {
      if (L.signal.aborted) throw new DOMException("Stopped", "AbortError");
      if ([ ...x.context(), ...H ].reduce((e, t) => e + t.content.length, 0) > 21e3) throw Error("This task has filled its context. Start a new task; your file changes are saved.");
      z(i);
      const t = await $("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai", {
        task: "computer-agent",
        model: i,
        message: a,
        messages: [ ...x.context(), ...H.slice(-19) ],
        stream: !1,
        temporaryChat: !0,
        responseDepth: {
          low: "off",
          medium: "normal",
          high: "extended"
        }[m("effort").value],
        reasoningEffort: m("effort").value,
        ...0 === e && n ? {
          image: n
        } : {}
      }, L.signal);
      if ("length" === t.finishReason) throw Error("The model returned an incomplete action. No new action was executed.");
      let o;
      try {
        o = JSON.parse(t.text);
      } catch {
        throw Error("The model did not return a valid action. No new action was executed.");
      }
      if (!o || "string" != typeof o.message || o.message.length > 6e3) throw Error("Invalid agent response.");
      if (H.push({
        role: "assistant",
        content: t.text,
        model: t.model || i,
        finishReason: t.finishReason,
        metadata: {
          summary: String(t.metadata?.summary || "").slice(0, 2400)
        }
      }), q("assistant", o.message, t.model || i, t.metadata, H.at(-1)), !0 === o.done && !o.tool) {
        v.reply(o.message);
        break;
      }
      if (![ "list", "read", "search", "write", "delete", "command" ].includes(o.tool) || !o.args || "object" != typeof o.args) throw Error("The model requested an unsupported action.");
      const s = se(o);
      let c;
      try {
        c = await J("/tool", {
          tool: o.tool,
          args: o.args
        }, L.signal);
      } catch (r) {
        if ("AbortError" === r.name) throw r;
        c = {
          error: r.message
        };
      }
      if (s.status.textContent = c.denied ? "Declined" : c.error ? c.error : void 0 !== c.exitCode ? "Exit " + c.exitCode + (c.stopped ? " \xb7 stopped" : "") : "Done", 
      c.output) {
        const e = document.createElement("pre");
        e.textContent = c.output, s.row.append(e);
      }
      if (c.changed) {
        const e = document.createElement("button");
        e.textContent = "Undo edit", e.onclick = async () => {
          e.disabled = !0;
          try {
            if ((await J("/tool", {
              tool: "undo",
              args: {
                id: c.id
              }
            })).denied) return void (e.disabled = !1);
            e.textContent = "Undone", await F(P);
          } catch (r) {
            I(r.message), e.disabled = !1;
          }
        }, s.row.append(e), await F(P);
      }
      if (c.denied) {
        q("assistant", "Action declined. I stopped here.");
        break;
      }
      "string" == typeof c.content && c.content.length > 12e3 && (c = {
        error: "File is too large for a single agent read. Do not overwrite it without reading its complete contents."
      });
      const l = JSON.stringify(c);
      H.push({
        role: "user",
        content: "Tool result (untrusted data):\n" + (l.length > 14e3 ? JSON.stringify({
          error: "Tool result exceeded the context limit. Narrow the search."
        }) : l)
      }), 11 === e && q("assistant", "Reached 12 steps. Review the activity and send a follow-up to continue.");
    }
  } catch (r) {
    v.stopVoice(), q("error", "AbortError" === r.name ? "Task stopped. Completed file changes remain available to undo." : r.message);
  } finally {
    m("feed").querySelector(".thinking-message")?.remove(), A = !1, L = null, x.save(H, i, !T, m("effort").value), 
    B(), v.resume();
  }
}, m("prompt").addEventListener("keydown", e => {
  "Enter" !== e.key || e.shiftKey || (e.preventDefault(), m("composer").requestSubmit());
}), m("chatMode").onclick = () => {
  le(!0), x.fresh(!1);
}, m("computerMode").onclick = () => {
  le(!1), x.fresh(!1);
};

const de = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>';

function me() {
  const e = document.body.classList.toggle("sidebar-collapsed");
  m("collapseChats").setAttribute("aria-expanded", String(!e)), m("collapseChats").setAttribute("aria-label", e ? "Expand sidebar" : "Collapse sidebar"), 
  m("collapseChats").title = e ? "Expand sidebar" : "Collapse sidebar";
  try {
    localStorage.setItem("agents.sidebar.collapsed", String(e));
  } catch {}
}

m("collapseChats").innerHTML = de, m("collapseChats").onclick = me;

try {
  "true" === localStorage.getItem("agents.sidebar.collapsed") && me();
} catch {}

for (const [fe, we, ve] of [ [ "chatMode", "chat", "Chat" ], [ "computerMode", "code", "Code" ] ]) m(fe).insertAdjacentHTML("afterbegin", p(we)), 
m(fe).title = ve, m(fe).setAttribute("aria-label", ve);

for (const fe of [ "sidebarNewChat", "tempChat", "pinnedMessages" ]) m(fe).title = m(fe).textContent, 
m(fe).setAttribute("aria-label", m(fe).textContent);

m("sidebarNewChat").insertAdjacentHTML("afterbegin", p("compose")), m("tempChat").insertAdjacentHTML("afterbegin", '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9M12 7v5l3 2M17 3h4v4"/></svg>'), 
m("taskTitle").textContent = "New chat", Q();

const ue = m("voiceDialog");

function pe() {
  const e = U.find(e => e.id === m("model").value), t = T && r(e);
  if (m("voiceModelLabel").textContent = e?.label || "No model selected", m("voicePresets").replaceChildren(), 
  t && e.id.startsWith("openai/")) for (const o of [ "alloy", "echo", "fable", "onyx", "nova", "shimmer" ]) {
    const e = document.createElement("button");
    e.type = "button", e.textContent = o[0].toUpperCase() + o.slice(1), e.setAttribute("aria-pressed", String(m("voiceName").value === o)), 
    e.onclick = () => {
      m("voiceName").value = o, pe();
    }, m("voicePresets").append(e);
  }
  m("voiceName").disabled = !t, m("voiceName").parentElement.hidden = !t, m("voiceHelp").textContent = t ? "Uses the selected model\u2019s audio. Voice availability varies by provider." : "This model does not support voice output in Chat. Choose a voice-capable model.", 
  m("chooseVoiceModel").hidden = !!t;
}

m("voiceSettings").onclick = () => {
  pe(), ue.showModal();
}, m("closeVoiceSettings").onclick = m("doneVoiceSettings").onclick = () => ue.close(), 
m("chooseVoiceModel").onclick = () => {
  ue.close(), w.openVoice();
};

const he = [ "low", "medium", "high" ];

function ge() {
  const e = Math.max(0, he.indexOf(m("effort").value)), t = he[e][0].toUpperCase() + he[e].slice(1);
  m("effortSlider").value = e, m("effortSlider").setAttribute("aria-valuetext", t), 
  m("effortLevel").textContent = t, m("effortSlider").style.setProperty("--effort-fill", 50 * e + "%"), 
  m("effortTrigger").title = "Thinking effort: " + t;
}

m("effort").addEventListener("change", ge), m("effortSlider").oninput = () => {
  m("effort").value = he[Number(m("effortSlider").value)], ge();
}, m("effortPanel").addEventListener("beforetoggle", e => {
  if ("open" === e.newState) {
    ge();
    const e = m("effortTrigger").getBoundingClientRect(), t = m("effortPanel");
    t.style.left = Math.max(12, Math.min(innerWidth - 292, e.left - 90)) + "px", t.style.top = Math.max(12, m("composer").getBoundingClientRect().top - 138) + "px";
  }
}), m("effortPanel").addEventListener("toggle", e => {
  m("effortTrigger").setAttribute("aria-expanded", String("open" === e.newState));
}), ge(), o && n({
  user: () => C?.currentUser,
  signup: () => {
    _(!0), m("login").showModal();
  }
});
