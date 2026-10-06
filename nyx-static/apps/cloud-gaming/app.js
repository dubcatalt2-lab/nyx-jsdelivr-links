(() => {
  "use strict";
  const e = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/cloud-gaming", t = {
    games: [],
    filtered: [],
    configured: !1,
    token: "",
    tokenExpiresAt: 0,
    directAuthPromise: null,
    parentAuth: !1,
    session: null,
    launching: !1,
    cancelled: !1,
    launchController: null,
    launchDeadlineTimer: null,
    launchTimedOut: !1,
    retryUntil: 0,
    retryTimer: null,
    pingTimer: null,
    elapsedTimer: null,
    pingFailures: 0
  }, n = {
    network: document.querySelector("[data-network-mode]"),
    provider: document.querySelector("[data-provider-state]"),
    notice: document.querySelector("[data-notice]"),
    grid: document.querySelector("[data-grid]"),
    empty: document.querySelector("[data-empty]"),
    search: document.querySelector("[data-search]"),
    tag: document.querySelector("[data-tag]"),
    launchLayer: document.querySelector("[data-launch-layer]"),
    launchTitle: document.querySelector("[data-launch-title]"),
    launchStatus: document.querySelector("[data-launch-status]"),
    launchProgress: document.querySelector("[data-launch-progress]"),
    cancel: document.querySelector("[data-cancel]"),
    playerLayer: document.querySelector("[data-player-layer]"),
    player: document.querySelector("[data-player]"),
    playerTitle: document.querySelector("[data-player-title]"),
    playerTime: document.querySelector("[data-player-time]"),
    fullscreen: document.querySelector("[data-fullscreen]"),
    close: document.querySelector("[data-close]")
  }, a = e => new Promise(t => setTimeout(t, e));
  function r(e, t = "") {
    n.notice.textContent = e, n.notice.className = "notice" + (t ? ` ${t}` : "");
  }
  function o(e, t = "") {
    n.provider.querySelector("b").textContent = e, n.provider.className = "provider-state" + (t ? ` ${t}` : "");
  }
  async function i(e = !1) {
    if (!e && t.token && t.tokenExpiresAt > Date.now() + 3e4) return t.token;
    const n = await async function() {
      if (window.parent === window) return null;
      const e = `cloud-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      return new Promise(t => {
        let n = !1;
        const a = e => {
          n || (n = !0, clearTimeout(o), window.removeEventListener("message", r), t(e));
        }, r = t => {
          t.source === window.parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data?.requestId === e && a({
            available: !0,
            token: String(t.data.token || "")
          });
        }, o = setTimeout(() => a(null), 2500);
        window.addEventListener("message", r), window.parent.postMessage({
          type: "nyx:account-token-request",
          requestId: e
        }, location.origin);
      });
    }();
    if (n?.available) return t.parentAuth = !0, t.token = n.token, t.tokenExpiresAt = t.token ? Date.now() + 27e5 : 0, 
    t.token;
    t.parentAuth = !1;
    const a = await async function() {
      if (t.directAuthPromise) return t.directAuthPromise;
      t.directAuthPromise = (async () => {
        const e = await c("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
          cache: "no-store"
        }, !1);
        if (!e?.enabled) return null;
        const [{initializeApp: t, getApps: n}, {getAuth: a, setPersistence: r, browserLocalPersistence: o}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), i = a(n().find(e => "nyx-founder-owner" === e.name) || t({
          apiKey: e.apiKey,
          authDomain: `${e.projectId}.firebaseapp.com`,
          projectId: e.projectId
        }, "nyx-founder-owner"));
        try {
          await r(i, o);
        } catch {}
        return "function" == typeof i.authStateReady && await i.authStateReady(), i;
      })();
      try {
        return await t.directAuthPromise;
      } catch (e) {
        throw t.directAuthPromise = null, e;
      }
    }();
    return t.token = a?.currentUser ? await a.currentUser.getIdToken(e) : "", t.tokenExpiresAt = t.token ? Date.now() + 27e5 : 0, 
    t.token;
  }
  function s(e, t = "Cloud Gaming received an invalid provider response. Try again in a moment.") {
    const n = String(e || "").trim();
    return !n || /<!doctype\s+html|<html\b|<body\b|cloudflare|unexpected token.+json|not valid json/i.test(n) || /<[a-z][\s\S]*>/i.test(n) ? t : n.replace(/\s+/g, " ").slice(0, 240);
  }
  async function c(e, t = {}, n = !0, a = !0) {
    const r = new Headers(t.headers || {});
    if (n) {
      const e = await i(!a);
      if (!e) {
        const e = new Error("Sign in to use Cloud Gaming.");
        throw e.status = 401, e;
      }
      r.set("Authorization", `Bearer ${e}`);
    }
    const o = await fetch(e, {
      ...t,
      headers: r
    });
    let l = null;
    if ((o.headers.get("content-type") || "").includes("application/json")) try {
      l = await o.json();
    } catch {
      l = {
        error: s("", `Cloud Gaming returned an unreadable response (${o.status}). Try again in a moment.`)
      };
    } else l = {
      error: s(await o.text(), `Cloud Gaming returned an invalid response (${o.status}). Try again in a moment.`)
    };
    if (!o.ok) {
      if (401 === o.status && n && a) return c(e, t, !0, !1);
      const r = new Error(s(l?.error, `Cloud Gaming is temporarily unavailable (${o.status}). Try again in a moment.`));
      throw r.status = o.status, r;
    }
    return l;
  }
  function l(e, a) {
    const o = document.createElement("article");
    o.className = "game-card";
    const i = document.createElement("div");
    i.className = "game-art";
    const s = function(e) {
      try {
        const t = new URL(String(e || ""), location.href);
        return "https:" === t.protocol ? t.href : "";
      } catch {
        return "";
      }
    }(e.image || e.cover);
    if (s) {
      const e = document.createElement("img");
      e.src = s, e.alt = "", e.loading = a < 18 ? "eager" : "lazy", e.decoding = "async", 
      a < 8 && (e.fetchPriority = "high"), e.referrerPolicy = "same-origin", e.addEventListener("error", () => e.remove(), {
        once: !0
      }), i.append(e);
    }
    const c = document.createElement("div");
    c.className = "game-copy";
    const l = document.createElement("h3");
    l.textContent = e.name, l.title = e.name;
    const w = document.createElement("div");
    w.className = "tags", (e.tags || []).slice(0, 3).forEach(e => {
      const t = document.createElement("span");
      t.textContent = e, w.append(t);
    });
    const f = document.createElement("button");
    return f.type = "button", f.className = "play", f.textContent = "Play", f.disabled = !t.configured || t.launching || Date.now() < t.retryUntil, 
    f.addEventListener("click", () => {
      !async function(e) {
        if (!(t.launching || Date.now() < t.retryUntil) && p()) {
          t.launching = !0, t.cancelled = !1, t.launchTimedOut = !1, t.launchController = new AbortController, 
          clearTimeout(t.launchDeadlineTimer), t.launchDeadlineTimer = setTimeout(() => {
            t.launchTimedOut = !0, t.launchController?.abort();
          }, 15e4), u(), n.launchLayer.hidden = !1, m(!0), n.launchTitle.textContent = e.name, 
          d("starting");
          try {
            const n = await g(e);
            if (t.cancelled) return;
            if ("queue" === n?.status && await y(), t.cancelled) return;
            if (!t.session?.id) throw new Error("Cloud Gaming did not create a session.");
            await h();
          } catch (a) {
            t.cancelled || (r(t.launchTimedOut ? "The provider took too long to prepare this game. Try again in a moment." : "AbortError" === a?.name ? "Cloud Gaming could not finish preparing this game." : a.message || "Cloud Gaming could not launch this game.", "error"), 
            a.retryUntil && function(e) {
              t.retryUntil = e, clearInterval(t.retryTimer);
              const n = () => {
                const e = Math.max(0, Math.ceil((t.retryUntil - Date.now()) / 1e3));
                if (!e) return clearInterval(t.retryTimer), t.retryTimer = null, t.retryUntil = 0, 
                r("You can try launching a game again.", "ready"), void u();
                r(`Please wait ${e} seconds before trying again.`, "error");
              };
              n(), t.retryTimer = setInterval(n, 1e3), u();
            }(a.retryUntil)), await T(!1);
          } finally {
            clearTimeout(t.launchDeadlineTimer), t.launchDeadlineTimer = null, t.launchController = null, 
            t.launching = !1, n.launchLayer.hidden = !0, u();
          }
        }
      }(e);
    }), c.append(l, w, f), o.append(i, c), o;
  }
  function u() {
    n.network.disabled = t.launching;
    const e = n.search.value.trim().toLowerCase(), a = n.tag.value.toLowerCase();
    t.filtered = t.games.filter(t => (!e || `${t.name} ${t.description} ${(t.tags || []).join(" ")}`.toLowerCase().includes(e)) && (!a || (t.tags || []).some(e => e.toLowerCase() === a))), 
    n.grid.replaceChildren(...t.filtered.map(l)), n.empty.hidden = t.filtered.length > 0;
  }
  function d(e, t) {
    n.launchProgress.style.width = `${{
      creating_account: 18,
      account_ready: 40,
      requesting_game: 58,
      queue: 70,
      finished_queue: 88
    }[e] || 12}%`;
    const a = {
      creating_account: "Preparing a provider session\u2026",
      account_ready: "Provider session ready.",
      requesting_game: "Requesting a game server\u2026",
      queue: `Waiting for a game server${Number.isFinite(t) ? ` \xb7 position ${t}` : ""}.`,
      finished_queue: "Game server acquired. Starting stream\u2026"
    };
    n.launchStatus.textContent = a[e] || "Connecting to the cloud provider\u2026";
  }
  function m(e) {
    document.documentElement.classList.toggle("cloud-session-active", Boolean(e)), window.parent !== window && window.parent.postMessage({
      type: "nyx:cloud-player",
      active: Boolean(e)
    }, location.origin);
  }
  async function g(n, a = !0) {
    const r = new Headers({
      "Content-Type": "application/json"
    }), o = await i(!a);
    if (!o) throw new Error("Sign in to use Cloud Gaming.");
    r.set("Authorization", `Bearer ${o}`);
    const c = await fetch(`${e}/sessions`, {
      method: "POST",
      headers: r,
      body: JSON.stringify({
        gameKey: n.key
      }),
      signal: t.launchController?.signal
    });
    if (401 === c.status && a) return g(n, !1);
    if (!c.ok) {
      let e = {};
      try {
        e = await c.json();
      } catch {}
      const t = new Error(s(e.error, `Cloud Gaming is temporarily unavailable (${c.status}). Try again in a moment.`));
      if (429 === c.status) {
        const e = c.headers.get("Retry-After"), n = Number(e), a = e && Number.isFinite(n) ? Date.now() + 1e3 * Math.max(0, n) : Date.parse(e || "");
        Number.isFinite(a) && a > Date.now() && (t.retryUntil = a);
      }
      throw t;
    }
    if (!c.body) throw new Error("Cloud Gaming did not return session progress.");
    const l = c.body.getReader(), u = new TextDecoder;
    let m = "", y = null;
    for (;;) {
      const {done: e, value: a} = await l.read();
      m += u.decode(a || new Uint8Array, {
        stream: !e
      });
      const r = m.split(/\r?\n/);
      m = e ? "" : r.pop() || "";
      for (const o of r) {
        if (!o.trim()) continue;
        let e;
        try {
          e = JSON.parse(o);
        } catch {
          continue;
        }
        if (e.id && (t.session = {
          id: e.id,
          gameKey: n.key,
          gameName: n.name,
          state: "queue" === e.status ? "queued" : "ready"
        }), d(e.status, e.queuePosition), y = e, "error" === e.status) throw new Error(s(e.error, "The cloud provider could not prepare this game. Try again in a moment."));
      }
      if (e) break;
    }
    return y;
  }
  async function y() {
    for (;!t.cancelled && "queued" === t.session?.state; ) {
      if (await a(4e3), t.cancelled) return;
      const n = await c(`${e}/sessions/${encodeURIComponent(t.session.id)}/queue`);
      if (t.session = n.session || t.session, d(n.status, n.queuePosition), "finished_queue" === n.status || "ready" === t.session.state) return;
    }
    if (t.cancelled) throw new Error("Launch cancelled.");
  }
  async function h() {
    const n = await c(`${e}/sessions/${encodeURIComponent(t.session.id)}/start`, {
      method: "POST"
    });
    if (t.session = n.session, !t.session?.embedUrl) throw new Error("Cloud Gaming did not return a player address.");
    w();
  }
  function p() {
    let e;
    try {
      if ("function" != typeof RTCPeerConnection) throw new Error;
      return e = new RTCPeerConnection({
        iceServers: []
      }), e.createDataChannel("support-check"), !0;
    } catch {
      return r("WebRTC is unavailable in this browser. Cloud streaming needs it. Try Browser games, another browser, or ask your device administrator to enable it.", "error"), 
      !1;
    } finally {
      e?.close();
    }
  }
  function w() {
    n.playerTitle.textContent = t.session.gameName || "Cloud Gaming";
    const e = new URL(t.session.embedUrl, location.href);
    "restricted" === n.network.value ? e.searchParams.set("network", "restricted") : e.searchParams.delete("network"), 
    n.player.src = e.href, n.playerLayer.hidden = !1, n.launchLayer.hidden = !0, m(!0), 
    t.pingFailures = 0, clearInterval(t.pingTimer), t.pingTimer = setInterval(() => {
      v();
    }, 15e3), clearInterval(t.elapsedTimer), t.elapsedTimer = setInterval(f, 1e3), f(), 
    v();
  }
  function f() {
    if (!t.session?.startedAtMs) return void (n.playerTime.textContent = "Connected");
    const e = Math.max(0, Math.floor((Date.now() - t.session.startedAtMs) / 1e3)), a = Math.max(0, Number(t.session.maxSeconds || 0));
    n.playerTime.textContent = a ? `${Math.floor(e / 60)}:${String(e % 60).padStart(2, "0")} / ${Math.floor(a / 60)}:${String(a % 60).padStart(2, "0")}` : `${Math.floor(e / 60)}:${String(e % 60).padStart(2, "0")}`;
  }
  async function v() {
    if (t.session?.id && "active" === t.session.state) try {
      const n = await c(`${e}/sessions/${encodeURIComponent(t.session.id)}/ping`, {
        method: "POST"
      });
      t.pingFailures = 0, n.sessionTimeLimitSeconds && (t.session.maxSeconds = n.sessionTimeLimitSeconds, 
      t.session.startedAtMs = Date.now() - 1e3 * n.sessionTimeUsedSeconds, f());
    } catch (n) {
      t.pingFailures += 1, t.pingFailures >= 2 && r(n.message || "The Cloud Gaming session lost its keepalive.", "error");
    }
  }
  async function T(a = !0) {
    const o = t.session;
    if (t.cancelled = !0, clearTimeout(t.launchDeadlineTimer), t.launchDeadlineTimer = null, 
    t.launchController?.abort(), t.session = null, clearInterval(t.pingTimer), clearInterval(t.elapsedTimer), 
    t.pingTimer = null, t.elapsedTimer = null, n.player.removeAttribute("src"), n.playerLayer.hidden = !0, 
    m(!1), o?.id) try {
      await c(`${e}/sessions/${encodeURIComponent(o.id)}`, {
        method: "DELETE"
      });
    } catch {}
    a && r("Cloud Gaming session ended.", "ready");
  }
  async function S() {
    try {
      n.network.value = "restricted" === localStorage.getItem("nyx-cloud-network") ? "restricted" : "auto";
    } catch {}
    n.network.addEventListener("change", () => {
      try {
        localStorage.setItem("nyx-cloud-network", n.network.value);
      } catch {}
    }), n.search.addEventListener("input", u), n.tag.addEventListener("change", u), 
    n.cancel.addEventListener("click", () => {
      T(!1);
    }), n.close.addEventListener("click", () => {
      T();
    }), n.fullscreen.addEventListener("click", () => n.playerLayer.requestFullscreen?.()), 
    document.addEventListener("visibilitychange", () => {
      document.hidden || v();
    }), addEventListener("online", () => {
      v();
    }), addEventListener("message", e => {
      e.origin === location.origin && e.source === n.player.contentWindow && "nyx:cloud-player-error" === e.data?.type && (r(s(e.data.message, "The cloud stream could not play on this device."), "error"), 
      T(!1));
    }), document.querySelector("[data-home]").addEventListener("click", e => {
      window.parent !== window && (e.preventDefault(), window.parent.postMessage({
        type: "nyx:go-home"
      }, location.origin));
    });
    try {
      const a = await c(`${e}/status`, {}, !1);
      if (!0 === a.maintenance) return t.configured = !1, o("Stratus unavailable", "error"), 
      r("Stratus is currently unavailable. Luna is available above.", "error"), n.network.disabled = !0, 
      n.search.disabled = !0, void (n.tag.disabled = !0);
      if (!p()) return void o("Streaming unavailable", "error");
      if (t.configured = !0 === a.configured, o(t.configured ? "Stratus ready" : "Setup required", t.configured ? "ready" : "error"), 
      t.configured || r(a.setupMessage || "Cloud Gaming needs a configured provider account. Ask the owner to finish setup.", "error"), 
      !await i()) throw new Error("Sign in to view and launch Cloud Gaming titles.");
      const s = await c(`${e}/catalog`);
      t.games = Array.isArray(s.games) ? s.games : [], function() {
        const e = [ ...new Set(t.games.flatMap(e => e.tags || [])) ].sort((e, t) => e.localeCompare(t));
        n.tag.replaceChildren(new Option("All categories", ""), ...e.map(e => new Option(e, e)));
      }(), u(), t.configured && r(`${t.games.length} games available.`, "ready"), await async function() {
        const a = await c(`${e}/session`);
        if (a.session) if (t.session = a.session, "active" === t.session.state && t.session.embedUrl) w(); else if ("queued" === t.session.state) {
          t.launching = !0, n.launchLayer.hidden = !1, m(!0), n.launchTitle.textContent = t.session.gameName || "Cloud game";
          try {
            await y(), t.cancelled || await h();
          } finally {
            t.launching = !1, n.launchLayer.hidden = !0, u();
          }
        } else if ("ready" === t.session.state) {
          t.launching = !0;
          try {
            await h();
          } finally {
            t.launching = !1, u();
          }
        }
      }();
    } catch (a) {
      r(a.message || "Cloud Gaming is unavailable.", "error"), t.games.length || (n.empty.hidden = !1);
    }
  }
  const C = document.querySelector("[data-luna-dialog]");
  C?.open ? C.addEventListener("close", () => {
    S();
  }, {
    once: !0
  }) : S();
})();
