import { measureFetch as qe } from "./@r6a249696b59d7622cdfdfd08!.js";

export function setupDropEmbed({user: e = () => null, signup: t = () => {}} = {}) {
  window.fetch = qe(window.fetch.bind(window), (e, t) => parent.postMessage({
    type: "drop:activity",
    kind: e,
    bytes: t
  }, location.origin)), document.documentElement.classList.add("drop-ai"), document.documentElement.dataset.theme = "dark", 
  document.title = "Drop AI", document.getElementById("accountKeyLabel").value = "Drop";
  const o = document.createElement("link");
  o.rel = "stylesheet", o.href = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/drop/ai.css", document.head.append(o);
  const n = document.querySelector(".brand");
  n.textContent = "AI chats", n.removeAttribute("href"), n.setAttribute("aria-label", "Drop AI chats"), 
  document.getElementById("useCreatedKey").textContent = "Use in Drop", document.querySelector('link[rel="icon"]').href = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/drop/logo.svg", 
  document.querySelector(".footnote").textContent = "", new MutationObserver(() => {
    "dark" !== document.documentElement.dataset.theme && (document.documentElement.dataset.theme = "dark");
  }).observe(document.documentElement, {
    attributes: !0,
    attributeFilter: [ "data-theme" ]
  }), addEventListener("message", e => {
    if (e.origin !== location.origin || e.source !== parent || "drop:command" !== e.data?.type) return;
    const o = e.data.action;
    "signup" === o && t(), "keys" === o && document.getElementById("apiKeys").click(), 
    "signin" === o && document.getElementById("account").textContent.includes("Sign in") && document.getElementById("account").click(), 
    "signout" === o && document.getElementById("account").textContent.includes("Sign out") && document.getElementById("account").click();
  }), addEventListener("message", async t => {
    if (t.origin !== location.origin || t.source !== parent || "drop:game-account" !== t.data?.type) return;
    const o = t.data.request;
    if (![ "nyx:cloud-game-load", "nyx:cloud-game-save", "nyx:account-token-request" ].includes(o?.type)) return;
    const n = {
      type: "nyx:account-token-request" === o.type ? "nyx:account-token-response" : "nyx:cloud-game-result",
      requestId: o.requestId
    };
    try {
      const t = await (e()?.getIdToken());
      if ("nyx:account-token-request" === o.type) n.token = t || ""; else if (t) {
        const e = "nyx:cloud-game-save" === o.type, a = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/cloud-games/" + encodeURIComponent(String(o.gameKey || "")), {
          method: e ? "PUT" : "GET",
          headers: {
            Authorization: "Bearer " + t,
            "Content-Type": "application/json"
          },
          ...e ? {
            body: JSON.stringify({
              storage: o.storage,
              removed: o.removed
            })
          } : {}
        }), r = await a.json();
        if (!a.ok) throw Error(r.error || "Cloud save unavailable.");
        Object.assign(n, r);
      } else n.storage = {};
    } catch (a) {
      n.error = a.message;
    }
    parent.postMessage({
      type: "drop:game-result",
      result: n
    }, location.origin);
  }), addEventListener("message", async t => {
    if (t.origin !== location.origin || t.source !== parent || "drop:session-token" !== t.data?.type) return;
    let o = "";
    try {
      o = await (e()?.getIdToken()) || "";
    } catch {}
    parent.postMessage({
      type: "drop:session-token-result",
      requestId: t.data.requestId,
      token: o
    }, location.origin);
  });
  const a = document.createElement("button");
  a.id = "dropHistory", a.type = "button", a.title = "Chat history", a.setAttribute("aria-label", "Chat history"), 
  a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H9l-5 4z"/></svg>', 
  document.querySelector(".chat-toolbar").prepend(a), a.onclick = () => {
    document.body.classList.remove("sidebar-collapsed"), document.body.classList.toggle("history-open");
  }, document.getElementById("collapseChats").onclick = () => document.body.classList.remove("history-open"), 
  parent.postMessage({
    type: "drop:ready"
  }, location.origin);
}
