(() => {
  "use strict";
  const e = e => String(e ?? "").replace(/[&<>"']/g, e => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[e])), t = Object.freeze({
    owner: "Owner",
    co_owner: "Co-owner",
    admin: "Admin",
    manager: "Manager",
    developer: "Developer",
    moderator: "Moderator",
    support: "Support",
    tester: "Tester",
    contributor: "Contributor",
    member: "Member",
    guest: "Guest"
  }), a = Object.freeze({
    co_owner: "owner",
    manager: "admin",
    support: "moderator",
    tester: "developer",
    contributor: "developer",
    guest: "member"
  }), n = Object.freeze([ "member", "contributor", "tester", "support", "moderator", "developer", "manager", "admin", "co_owner", "owner" ]), o = e => t[e] || "Member", r = e => e?.customRole?.label || o(e?.role), s = e => /^#[0-9a-f]{6}$/i.test(String(e?.customRole?.color || "")) ? e.customRole.color : "", i = t => `<img class="nyx-owner-role-icon" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/roles/${e(a[t] || t)}.png" alt="" aria-hidden="true">`, l = (e, t) => e?.querySelectorAll?.("[data-owner-role-option]").forEach(e => {
    const a = e.dataset.ownerRoleOption === t;
    e.classList.toggle("active", a), e.setAttribute("aria-checked", String(a));
  }), c = e => ({
    none: "No account",
    free: "Free",
    premium: "Premium",
    trialing: "Trial",
    past_due: "Past due",
    canceled: "Canceled"
  }[e] || "Free"), d = e => String(e || "").replaceAll("_", " ").replace(/\b\w/g, e => e.toUpperCase()), u = e => {
    const t = new Date(e || "");
    return Number.isNaN(t.getTime()) ? "Never" : new Intl.DateTimeFormat(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(t);
  }, p = e => {
    const t = Date.parse(e || "");
    if (!t) return "Never";
    const a = Math.round((t - Date.now()) / 1e3), n = new Intl.RelativeTimeFormat(void 0, {
      numeric: "auto"
    });
    if (Math.abs(a) < 60) return n.format(a, "second");
    const o = Math.round(a / 60);
    if (Math.abs(o) < 60) return n.format(o, "minute");
    const r = Math.round(o / 60);
    return Math.abs(r) < 24 ? n.format(r, "hour") : n.format(Math.round(r / 24), "day");
  }, m = e => {
    const t = String(e || "").toLowerCase();
    return /(sign.?in|login|session|online)/.test(t) ? "online" : /(sign.?up|create|invite|register)/.test(t) ? "signup" : /(premium|subscription|payment|revenue|billing)/.test(t) ? "premium" : /(user|account|profile|role)/.test(t) ? "users" : "activity";
  }, y = 1125e4, b = new Map, h = new Map;
  function w(e) {
    const t = String(e || "").trim();
    return /^\/api\/profile-media\/[A-Za-z0-9_-]{8,128}\/(?:avatar|banner)\/[A-Za-z0-9_-]{12,80}$/.test(t) ? t : "";
  }
  function f(t, a = "", n = "") {
    const o = w(t);
    return o ? `<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-owner-profile-media="${e(o)}" data-owner-media-fallback="${e(n)}" alt="${e(a)}">` : t ? `<img src="${e(t)}" alt="${e(a)}">` : e(n);
  }
  async function v(e) {
    const t = [ ...e?.querySelectorAll?.("img[data-owner-profile-media]") || [] ];
    await Promise.all(t.map(async e => {
      const t = String(e.dataset.ownerMediaFallback || "");
      try {
        const t = await async function(e) {
          const t = w(e);
          if (!t) return null;
          if (b.has(t)) return b.get(t);
          if (h.has(t)) return h.get(t);
          const a = (async () => {
            const e = await fetch(`${t}/manifest`, {
              cache: "force-cache"
            }), a = await e.json().catch(() => ({})), n = String(a.mime || "").toLowerCase(), o = Number(a.totalChunks || 0);
            if (!e.ok || !/^image\/(?:gif|png|jpeg|webp)$/.test(n) || !Number.isInteger(o) || o < 1 || o > 32) throw new Error("That saved profile image is unavailable.");
            const r = (await Promise.all(Array.from({
              length: o
            }, async (e, a) => {
              const n = await fetch(`${t}/chunks/${a}`, {
                cache: "force-cache"
              }), o = (await n.text()).trim();
              if (!n.ok || !o || !/^[a-z0-9+/=]+$/i.test(o)) throw new Error("That saved profile image is incomplete.");
              return o;
            }))).map(e => {
              const t = atob(e), a = new Uint8Array(t.length);
              for (let n = 0; n < t.length; n += 1) a[n] = t.charCodeAt(n);
              return a;
            }), s = new Blob(r, {
              type: n
            });
            if (Number(a.byteLength || 0) > 0 && s.size !== Number(a.byteLength)) throw new Error("That saved profile image did not pass its size check.");
            const i = {
              url: URL.createObjectURL(s),
              mime: n,
              size: s.size
            };
            return b.set(t, i), i;
          })().finally(() => h.delete(t));
          return h.set(t, a), a;
        }(e.dataset.ownerProfileMedia);
        t && e.isConnected && (e.src = t.url);
      } catch {
        if (!e.isConnected) return;
        t ? e.replaceWith(document.createTextNode(t)) : e.remove();
      }
    }));
  }
  let g = null;
  function $() {
    g?.destroy?.(), g = null;
  }
  function x(e) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${{
      users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
      active: '<path d="M3 12h4l2.5-7 5 14 2.5-7h4"/>',
      online: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
      signup: '<path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6M16 11h6"/>',
      premium: '<path d="m12 3 3 6 6 .9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.9 9 9l3-6Z"/>',
      revenue: '<circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 5v14"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      refresh: '<path d="M20 11a8 8 0 1 0-2.35 5.65"/><path d="M20 4v7h-7"/>',
      download: '<path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 21h14"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      chevron: '<path d="m9 18 6-6-6-6"/>',
      activity: '<path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/>',
      shield: '<path d="M12 3 4.5 6v5c0 4.7 3.1 8.9 7.5 10 4.4-1.1 7.5-5.3 7.5-10V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',
      key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M15 8l3 3M18 5l2 2"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      userOff: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 0 0 2.9-6.8M3 3l18 18"/>',
      userCheck: '<path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8 11a4 4 0 1 0 0-8M16 11l2 2 4-4"/>',
      ban: '<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>',
      trash: '<path d="M4 7h16M9 7V4h6v3M18 7l-1 14H7L6 7M10 11v6M14 11v6"/>',
      save: '<path d="M5 3h12l2 2v16H5z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/>',
      apps: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
    }[e] || ""}</svg>`;
  }
  function S({getToken: t, toast: a, onPresence: b} = {}) {
    if ("function" != typeof t) throw new Error("Owner authentication is unavailable.");
    const h = {
      page: 1,
      pageSize: 25,
      search: "",
      role: "all",
      subscription: "all",
      status: "all",
      segment: "all",
      sort: "lastActiveAt",
      direction: "desc",
      data: null,
      access: null,
      loading: !1,
      controller: null,
      searchTimer: 0,
      selectedUser: null,
      selectedCapabilities: null,
      ipBans: [],
      ipBanClientIp: "",
      customRoles: [],
      customRolePlacements: [],
      customRolePermissions: [],
      customRoleEditorId: "",
      globalApps: []
    }, w = document.createElement("section");
    w.className = "nyx-owner-dashboard-overlay owner-organized", w.setAttribute("role", "dialog"), 
    w.setAttribute("aria-modal", "true"), w.setAttribute("aria-labelledby", "nyxOwnerDashboardTitle"), 
    w.innerHTML = `\n      <main class="nyx-owner-dashboard">\n        <header class="nyx-owner-header">\n          <div><span class="nyx-owner-eyebrow">${x("shield")}NYX ADMINISTRATION</span><h1 id="nyxOwnerDashboardTitle">Owner Dashboard</h1><p data-owner-access-copy>Loading your role permissions\u2026</p></div>\n          <div class="nyx-owner-header-actions">\n            <button type="button" data-owner-refresh>${x("refresh")}<span>Refresh</span></button>\n            <button class="nyx-owner-close" type="button" data-owner-close aria-label="Close owner dashboard">${x("close")}</button>\n          </div>\n        </header>\n        <nav class="nyx-owner-nav" aria-label="Dashboard sections">${[ [ "overview", "Overview" ], [ "users", "Users" ], [ "services", "Services" ], [ "activity", "Activity" ] ].map(([e, t]) => `<button type="button" data-owner-section="${e}" aria-pressed="${"overview" === e}" aria-controls="nyx-owner-section-${e}">${t}</button>`).join("")}</nav>\n        <section class="nyx-owner-section" data-owner-panel="overview" id="nyx-owner-section-overview" aria-label="Overview">\n          <div class="nyx-owner-section-heading"><h2>At a glance</h2><p>Choose a metric to view matching accounts.</p></div>\n          <section class="nyx-owner-metrics" data-owner-metrics aria-label="Account metrics"></section>\n          <section class="nyx-owner-traffic" data-owner-traffic hidden aria-label="Server traffic"></section>\n        </section>\n        <section class="nyx-owner-section" data-owner-panel="services" id="nyx-owner-section-services" aria-label="Services" hidden>\n          <div class="nyx-owner-section-heading"><h2>Services</h2><p>Balances, playback health, and game reports.</p></div>\n          <div class="nyx-owner-service-grid">\n            <section class="nyx-owner-tube-status" data-owner-ai-status hidden aria-live="polite"></section>\n            <section class="nyx-owner-tube-status" data-owner-tube-status hidden aria-live="polite"></section>\n            <section class="nyx-owner-tube-status" data-owner-game-reports hidden></section>\n          </div>\n        </section>\n        <section class="nyx-owner-workspace nyx-owner-section" data-owner-panel="users" id="nyx-owner-section-users" aria-label="Users" hidden>\n          <div class="nyx-owner-users-panel">\n            <header class="nyx-owner-panel-head">\n              <div><h2>${x("users")}Users</h2><span data-owner-user-count>Loading accounts\u2026</span></div>\n              <div class="nyx-owner-quick-actions">\n                <button type="button" data-owner-online-only>${x("online")}Online users</button>\n                <button type="button" data-owner-export>${x("download")}Export page</button>\n                <button type="button" data-owner-global-apps hidden>${x("apps")}Manage apps</button><button type="button" data-owner-studyready hidden>${x("apps")}StudyReady</button>\n                <button type="button" data-owner-custom-roles hidden>${x("users")}Custom roles</button>\n                <button type="button" data-owner-ip-bans hidden>${x("shield")}IP bans</button>\n              </div>\n            </header>\n            <form class="nyx-owner-filters" data-owner-filters>\n              <label class="nyx-owner-search">${x("search")}<input type="search" name="search" placeholder="Search name, username, email, or UID" autocomplete="off"></label>\n              <select name="role" aria-label="Filter by role"><option value="all">All roles</option><option value="guest">Guest</option><option value="owner">Owner</option><option value="co_owner">Co-owner</option><option value="admin">Admin</option><option value="manager">Manager</option><option value="developer">Developer</option><option value="moderator">Moderator</option><option value="support">Support</option><option value="tester">Tester</option><option value="contributor">Contributor</option><option value="member">Member</option></select>\n              <select name="subscription" aria-label="Filter by subscription"><option value="all">All subscriptions</option><option value="none">No account</option><option value="free">Free</option><option value="premium">Premium</option><option value="trialing">Trial</option><option value="past_due">Past due</option><option value="canceled">Canceled</option></select>\n              <select name="status" aria-label="Filter by account status"><option value="all">All accounts</option><option value="enabled">Enabled</option><option value="disabled">Disabled</option><option value="online">Online now</option><option value="offline">Offline</option></select>\n            </form>\n            <div class="nyx-owner-table-wrap" data-owner-table aria-live="polite"></div>\n            <footer class="nyx-owner-pagination" data-owner-pagination></footer>\n          </div>\n        </section>\n        <section class="nyx-owner-section" data-owner-panel="activity" id="nyx-owner-section-activity" aria-label="Activity" hidden>\n          <aside class="nyx-owner-activity-panel">\n            <header><div><h2>${x("activity")}Activity logs</h2><span>Security and account events</span></div></header>\n            <div class="nyx-owner-activity-list" data-owner-activity></div>\n          </aside>\n        </section>\n      </main>\n      <aside class="nyx-owner-user-drawer" data-owner-user-drawer hidden></aside>\n      <section class="nyx-owner-confirm" data-owner-confirm hidden></section>\n      <div class="nyx-owner-toasts" data-owner-toasts aria-live="polite"></div>`, 
    document.body.appendChild(w), requestAnimationFrame(() => w.classList.add("show"));
    const $ = w.querySelector("[data-owner-metrics]"), S = w.querySelector("[data-owner-table]"), C = w.querySelector("[data-owner-pagination]"), A = w.querySelector("[data-owner-activity]"), N = w.querySelector("[data-owner-user-drawer]"), k = w.querySelector("[data-owner-confirm]"), L = function(t, a) {
      let n = !1, o = !0, r = !1, s = null, i = 60, l = null, c = null;
      const d = new Intl.NumberFormat, u = new Intl.DateTimeFormat([], {
        hour: "numeric",
        minute: "2-digit"
      }), p = new Intl.DateTimeFormat([], {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      }), m = e => d.format(Number(e || 0)), y = e => p.format(e);
      t.innerHTML = `<header class="nyx-traffic-heading"><div><span class="nyx-traffic-eyebrow">LIVE ACTIVITY</span><h2>Traffic</h2><p>Requests per minute &middot; all sites on this VPS</p></div><div class="nyx-traffic-ranges" aria-label="Traffic time range">${[ [ 60, "1 hour" ], [ 360, "6 hours" ], [ 1440, "24 hours" ] ].map(([e, t]) => `<button type="button" data-traffic-range="${e}" aria-pressed="${60 === e}">${t}</button>`).join("")}</div></header>\n      <div class="nyx-traffic-stats" data-traffic-stats></div>\n      <div class="nyx-traffic-chart" data-traffic-chart></div>\n      <div class="nyx-traffic-inspector" hidden><input type="range" min="0" max="59" value="59" data-traffic-minute aria-label="Inspect traffic minute"><output data-traffic-detail></output></div>\n      <footer class="nyx-traffic-footer"><span data-traffic-status role="status">Loading traffic...</span><span>Times in ${e(Intl.DateTimeFormat().resolvedOptions().timeZone)}. CDN-only hits and WebSocket stream traffic are excluded. Gaps mean no measurement.</span></footer>`;
      const b = t.querySelector("[data-traffic-status]"), h = t.querySelector("[data-traffic-chart]"), w = t.querySelector("[data-traffic-minute]"), f = t.querySelector("[data-traffic-detail]");
      let v = [], g = 1040;
      const $ = e => 46 + e / Math.max(1, v.length - 1) * (g - 64);
      let x = 1;
      const S = e => 230 - (e || 0) / x * 190;
      let C = null, A = null, N = -1, k = 0, L = null;
      function T(e) {
        if (!v.length) return;
        e = Math.max(0, Math.min(v.length - 1, e));
        const t = Math.round(e), a = v[t];
        if (c = a.at, t !== N) {
          N = t, w.value = t;
          const e = `${y(a.at)} \xb7 ${null === a.requests ? "No measurement" : `${m(a.requests)} requests \xb7 ${m(a.errors)} server errors${null != a.onlinePeak ? ` \xb7 ${m(a.onlinePeak)} people online` : ""}${a.partial ? " \xb7 Partial minute" : ""}`}`;
          w.setAttribute("aria-valuetext", e), f.textContent = e;
        }
        const n = $(e), o = Math.floor(e), r = Math.ceil(e), s = v[o].requests, i = v[r].requests;
        C?.setAttribute("x1", n), C?.setAttribute("x2", n), A?.setAttribute("cx", n), A?.setAttribute("cy", S(s + (i - s) * (e - o))), 
        A?.setAttribute("opacity", null === s || null === i ? "0" : "1");
      }
      function M() {
        if (null === L || !l || !n || !o || r) return;
        const e = h.getBoundingClientRect();
        e.width && T(((L - e.left) / e.width * g - 46) / (g - 64) * (v.length - 1));
      }
      function R() {
        cancelAnimationFrame(k), k = 0, L = null;
      }
      function E() {
        g = Math.max(300, h.clientWidth);
        const a = l.points.findIndex(e => null !== e.requests), n = v = a < 0 ? l.points : l.points.slice(a), o = l.totals, r = l.peak;
        x = Math.max(1, Math.ceil(1.15 * (r?.requests || 1)));
        const s = [ [ "Requests", m(o.requests), "In selected window" ], [ "Peak / min", m(r?.requests), r ? y(r.at) + (r.partial ? " \xb7 partial" : "") : "No measurement" ], [ "Peak online", l.peakOnline ? m(l.peakOnline.count) : "\u2014", l.peakOnline ? y(l.peakOnline.at) + " \xb7 accounts and guests" : "Collecting online history" ], [ "Server errors", m(o.errors), `${m(o.aborted)} interrupted requests` ], [ "Avg. response", null === o.averageMs ? "\u2014" : m(o.averageMs) + " ms", "Completed HTTP responses" ] ];
        t.querySelector("[data-traffic-stats]").innerHTML = s.map(([t, a, n]) => `<div><span>${e(t)}</span><strong>${e(a)}</strong><small>${e(n)}</small></div>`).join("");
        let i = "", d = "", p = [];
        const f = () => {
          if (!p.length) return;
          const e = p.map(([e, t], a) => `${a ? "L" : "M"}${e.toFixed(2)} ${t.toFixed(2)}`).join(" ");
          i += e + " ", d += `${e} L${p.at(-1)[0]} 230 L${p[0][0]} 230 Z `, p = [];
        };
        n.forEach((e, t) => {
          null === e.requests ? f() : p.push([ $(t), S(e.requests) ]);
        }), f();
        const k = [ 0, .5, 1 ].map(e => `<line x1="46" x2="${g - 18}" y1="${230 - 190 * e}" y2="${230 - 190 * e}" class="nyx-traffic-grid"/><text x="36" y="${234 - 190 * e}" text-anchor="end">${m(Math.round(x * e))}</text>`).join(""), L = [ 0, Math.floor((n.length - 1) / 2), n.length - 1 ].map(t => {
          return `<text x="${$(t)}" y="260" text-anchor="${0 === t ? "start" : t === n.length - 1 ? "end" : "middle"}">${e((a = n[t].at, 
          u.format(a)))}</text>`;
          var a;
        }).join("");
        h.innerHTML = `<svg viewBox="0 0 ${g} 275" preserveAspectRatio="none" role="img" aria-label="Requests per minute. Peak ${e(m(r?.requests))}${r ? " at " + e(y(r.at)) : ""}. Use the slider below to inspect a minute.">${k}<path d="${d}" class="nyx-traffic-area"/><path d="${i}" class="nyx-traffic-line"/>${L}<line data-traffic-cursor y1="30" y2="230" class="nyx-traffic-cursor"/><circle data-traffic-dot r="4" class="nyx-traffic-dot"/></svg>`, 
        C = h.querySelector("[data-traffic-cursor]"), A = h.querySelector("[data-traffic-dot]"), 
        N = -1, t.querySelector(".nyx-traffic-inspector").hidden = !1, w.max = n.length - 1;
        let R = null === c ? -1 : n.findIndex(e => e.at === c);
        R < 0 && (R = r ? n.findIndex(e => e.at === r.at) : n.length - 1), T(R), M(), b.textContent = `Recorded from ${y(n[0].at)} \xb7 updated ${new Date(l.generatedAt).toLocaleTimeString()} \xb7 refreshes every 10s \xb7 current minute incomplete`, 
        t.dataset.trafficState = "ready";
      }
      async function q() {
        if (!n || !o || r || document.hidden || s) return;
        const e = new AbortController;
        s = e;
        const c = setTimeout(() => e.abort(), 12e3);
        try {
          const t = await a(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/traffic?minutes=${i}`, {
            signal: e.signal
          });
          if (r || e.signal.aborted || !n) return;
          if (!Array.isArray(t.points) || !t.points.length || !t.totals) throw new Error("Invalid traffic response");
          l = t, E();
        } catch {
          !r && n && s === e && (t.dataset.trafficState = "unavailable", b.textContent = l ? `Update unavailable. Showing data from ${y(l.generatedAt)}; retrying automatically.` : "Traffic is unavailable. Retrying automatically.");
        } finally {
          clearTimeout(c), s === e && (s = null);
        }
      }
      t.addEventListener("click", e => {
        const a = e.target.closest("[data-traffic-range]");
        a && (R(), i = Number(a.dataset.trafficRange), c = null, s?.abort(), s = null, t.querySelectorAll("[data-traffic-range]").forEach(e => e.setAttribute("aria-pressed", String(e === a))), 
        b.textContent = "Updating time range...", q());
      }), h.addEventListener("pointermove", e => {
        L = e.clientX, k || (k = requestAnimationFrame(() => {
          k = 0, M();
        }));
      }), h.addEventListener("pointerleave", R), h.addEventListener("pointercancel", R), 
      w.addEventListener("input", () => {
        R(), T(Number(w.value));
      });
      const P = setInterval(() => {
        q();
      }, 1e4), I = new ResizeObserver(() => {
        l && n && o && h.clientWidth > 0 && Math.abs(Math.max(300, h.clientWidth) - g) > 1 && E();
      });
      return I.observe(h), {
        enable(e) {
          n = e, t.hidden = !e, e ? q() : (R(), s?.abort(), s = null, l = null, h.replaceChildren(), 
          t.querySelector("[data-traffic-stats]").replaceChildren(), f.textContent = "");
        },
        activate(e) {
          o = e, e ? q() : (R(), s?.abort(), s = null);
        },
        destroy() {
          r = !0, R(), clearInterval(P), s?.abort(), I.disconnect();
        }
      };
    }(w.querySelector("[data-owner-traffic]"), E);
    let T = "overview";
    function M(e) {
      [ "overview", "users", "services", "activity" ].includes(e) && (T = e, w.querySelectorAll("[data-owner-panel]").forEach(t => t.hidden = t.dataset.ownerPanel !== e), 
      w.querySelectorAll("[data-owner-section]").forEach(t => t.setAttribute("aria-pressed", String(t.dataset.ownerSection === e))), 
      L.activate("overview" === e));
    }
    function R(e, t = "success") {
      a?.(e);
      const n = document.createElement("div");
      n.className = `nyx-owner-toast nyx-owner-toast-${t}`, n.textContent = e, w.querySelector("[data-owner-toasts]").appendChild(n), 
      requestAnimationFrame(() => n.classList.add("show")), setTimeout(() => {
        n.classList.remove("show"), setTimeout(() => n.remove(), 180);
      }, 3200);
    }
    async function E(e, a = {}) {
      const n = await t();
      if (!n) throw new Error("Your staff session has expired. Sign in again.");
      const o = await fetch(e, {
        ...a,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${n}`,
          ...a.body ? {
            "Content-Type": "application/json"
          } : {},
          ...a.headers || {}
        },
        cache: "no-store"
      }), r = await o.json().catch(() => ({}));
      if (!o.ok) {
        const e = new Error(r.error || "The owner request failed.");
        throw e.status = o.status, e;
      }
      return r;
    }
    E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/private-remote/access").then(e => {
      if (!e.enabled || !w.isConnected) return;
      const t = document.createElement("button");
      t.type = "button", t.textContent = "Remote desktop", t.addEventListener("click", async () => {
        t.disabled = !0;
        try {
          await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/private-remote/session", {
            method: "POST"
          }), window.location.assign("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/remote/");
        } catch {
          t.textContent = "Remote access unavailable";
        } finally {
          t.disabled = !1;
        }
      }), w.querySelector(".nyx-owner-header-actions").prepend(t);
    }).catch(() => {}), E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxcloud/access").then(e => {
      if (!e.allowed || !w.isConnected) return;
      const t = document.createElement("button");
      t.type = "button", t.textContent = "NyxCloud", t.dataset.nyxcloudAccess = "owner", 
      t.title = e.online ? "Open your VM" : "Open NyxCloud (VM currently offline)", t.addEventListener("click", async () => {
        t.disabled = !0;
        try {
          await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxcloud/session", {
            method: "POST"
          }), window.location.assign("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/nyxcloud/");
        } catch {
          t.textContent = "NyxCloud unavailable";
        } finally {
          t.disabled = !1;
        }
      }), w.querySelector(".nyx-owner-header-actions").append(t);
    }).catch(() => {});
    const q = w.querySelector("[data-owner-ai-status]");
    function P(e, t, a) {
      const n = document.createElement("details"), o = document.createElement("summary"), r = document.createElement("div"), s = e.querySelector("strong");
      for (s ? o.append(s) : o.textContent = a, r.className = "nyx-owner-status-body"; e.firstChild; ) r.append(e.firstChild);
      n.append(o, r);
      try {
        n.open = "collapsed" !== localStorage.getItem("nyx.owner.status." + t);
      } catch {
        n.open = !0;
      }
      n.addEventListener("toggle", () => {
        try {
          localStorage.setItem("nyx.owner.status." + t, n.open ? "expanded" : "collapsed");
        } catch {}
      }), e.replaceChildren(n);
    }
    let I = !1;
    async function U() {
      if (w.isConnected && h.access?.founder && !I) {
        I = !0;
        try {
          const t = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ai-status");
          if (!w.isConnected || !h.access?.founder) return;
          q.hidden = !1;
          const a = e => Number(e).toFixed(2), n = {
            ok: "OpenRouter balance",
            low: "Low OpenRouter allowance",
            paused: "Shared AI balance cutoff reached",
            unknown: "OpenRouter balance could not be checked"
          }, o = "low" === t.state || "paused" === t.state;
          q.dataset.aiState = t.state, q.style.borderColor = o ? "#d9ad55" : "", q.innerHTML = `<div><strong>${e(n[t.state] || n.unknown)}${"unknown" !== t.state ? ` <span>$${a(t.balanceUsd)}</span>` : ""}</strong><p>${"unknown" === t.state ? "Balance is unavailable. Shared AI pauses if its balance check fails." : `Account balance: $${a(t.balanceUsd)} &middot; Nyx key allowance: ${null === t.keyRemainingUsd ? "No key limit" : `$${a(t.keyRemainingUsd)}`} &middot; Daily site cap: $${a(t.dailyCapUsd)}`}</p>${o ? `<p>${"paused" === t.state ? "The account balance or key allowance has reached the $0.10 cutoff." : "The account balance or Nyx key allowance is below $0.50."} Add credits or review the key limit in OpenRouter. Daily usage limits still apply.</p>` : ""}<small>Checked ${e(u(t.checkedAt))}</small><p><a href="/api#owner" target="_blank" rel="noopener">Manage AI API keys and token balances</a></p></div>`;
        } catch {
          w.isConnected && h.access?.founder && (q.hidden = !1, q.dataset.aiState = "unknown", 
          q.textContent = "OpenRouter balance could not be checked. Refresh to try again.");
        } finally {
          q.hidden || P(q, "ai", "OpenRouter balance"), I = !1;
        }
      }
    }
    const D = setInterval(() => {
      document.hidden || U();
    }, 6e4);
    let O = !1, F = null;
    const H = w.querySelector("[data-owner-tube-status]");
    function _(t) {
      F = t;
      const a = t.enabled ? {
        working: "Working",
        login_required: "Login needs refreshing",
        trouble: "Service trouble",
        setup_required: "Setup required",
        unchecked: "Not checked yet"
      }[t.state] || "Service trouble" : "Not enabled", n = t.enabled ? "login_required" === t.state ? "Export fresh cookies from the dedicated YouTube account, replace the private server login file, then check again." : "trouble" === t.state ? "A recent request failed. This does not necessarily mean the login expired." : "setup_required" === t.state ? "Check the private login file and required video tools on the server." : "Status comes from real stream checks and video preparations. A single unavailable video does not mark the login expired." : "Native playback is waiting for server setup. YouTube playback remains available.";
      H.innerHTML = `<div><strong>NyxTube <span data-owner-tube-state="${e(t.state)}">${e(a)}</span></strong><p>${e(n)}</p><small>Last success: ${e(u(t.lastSuccess))} &middot; Last check: ${e(u(t.lastChecked))}</small><small>Cache: ${(Number(t.cacheBytes || 0) / 1073741824).toFixed(2)} / ${(Number(t.cacheLimitBytes || 0) / 1073741824).toFixed(0)} GB &middot; Preparing: ${Number(t.activeJobs || 0)} / ${Number(t.maxJobs || 1)} &middot; Up to 720p</small></div><button type="button" data-owner-tube-check ${!t.enabled || O ? "disabled" : ""}>${O ? "Checking..." : "Check now"}</button>`, 
      P(H, "tube", "NyxTube");
    }
    async function B(e = !1) {
      if (w.isConnected && h.access?.founder && !O) {
        H.hidden = !1, e && (O = !0, F && _(F));
        try {
          const t = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/nyxtube" + (e ? "/check" : ""), {
            method: e ? "POST" : "GET"
          });
          if (!w.isConnected || !h.access?.founder) return;
          O = !1, _(t);
        } catch (t) {
          e ? R(t.message || "The video check failed.", "error") : (H.innerHTML = "<p>NyxTube status could not be loaded. Refresh the dashboard to retry.</p>", 
          P(H, "tube", "NyxTube"));
        } finally {
          O = !1;
          const e = H.querySelector("[data-owner-tube-check]");
          e && (e.disabled = !F?.enabled, e.textContent = "Check now");
        }
      }
    }
    const j = setInterval(() => {
      document.hidden || B();
    }, 6e4);
    async function G(e, t, a, n = () => {}) {
      const o = String(a || "").match(/^data:(image\/(?:gif|png|jpeg|webp));base64,([a-z0-9+/=]+)$/i);
      if (!o) throw new Error(`The selected ${t} could not be prepared.`);
      if (a.length > y) throw new Error("Choose an image smaller than 8 MB.");
      const r = o[2], s = [];
      for (let d = 0; d < r.length; d += 42e4) s.push(r.slice(d, d + 42e4));
      if (!s.length || s.length > 32) throw new Error("That image is too large to upload.");
      const i = (globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`).replace(/[^a-z0-9_-]/gi, ""), l = `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(e)}/profile-media/${t}/${i}`;
      for (let d = 0; d < s.length; d += 1) n(Math.round(d / s.length * 90)), await E(`${l}/${d}`, {
        method: "PUT",
        body: JSON.stringify({
          mime: o[1].toLowerCase(),
          totalChunks: s.length,
          chunk: s[d]
        })
      });
      const c = await E(`${l}/complete`, {
        method: "POST",
        body: "{}"
      });
      if (!c.url) throw new Error(`The ${t} image could not be completed.`);
      return n(100), c.url;
    }
    function V() {
      $.innerHTML = Array.from({
        length: 6
      }, () => '<article class="nyx-owner-metric loading"><i></i><div><span></span><strong></strong></div></article>').join(""), 
      S.innerHTML = '<div class="nyx-owner-table-loading"><i></i><i></i><i></i><i></i><i></i></div>', 
      A.innerHTML = '<div class="nyx-owner-activity-loading"><i></i><i></i><i></i><i></i></div>';
    }
    function z(e, t) {
      const a = h.sort === e;
      return `<button type="button" data-owner-sort="${e}" class="${a ? "active" : ""}">${t}${a ? `<span aria-label="${"asc" === h.direction ? "ascending" : "descending"}">${"asc" === h.direction ? "\u2191" : "\u2193"}</span>` : ""}</button>`;
    }
    function W() {
      const t = h.ipBans || [], a = h.ipBanClientIp ? ` Your current IP is ${h.ipBanClientIp}; Nyx will not let you block it from this session.` : "";
      N.innerHTML = `<header><div><span>${x("shield")}</span><h2>Network access</h2><p>IP bans apply to Nyx server and function requests.</p></div><button type="button" data-owner-drawer-close aria-label="Close IP bans">${x("close")}</button></header>\n        <div class="nyx-owner-drawer-scroll nyx-owner-ip-ban-drawer">\n          <section class="nyx-owner-detail-section"><h3>Block an IP address</h3><p class="nyx-owner-action-note">Use a full IPv4 or IPv6 address. This does not configure Cloudflare's edge firewall.${e(a)}</p><form class="nyx-owner-ip-ban-form" data-owner-ip-ban-form><label>IP address<input name="ip" inputmode="text" autocomplete="off" maxlength="45" required placeholder="203.0.113.10 or 2001:db8::10"></label><label>Reason <input name="reason" maxlength="160" autocomplete="off" placeholder="Optional internal note"></label><div class="nyx-owner-detail-actions"><button type="submit">${x("shield")}Block IP</button></div></form></section>\n          <section class="nyx-owner-detail-section"><h3>Blocked IP addresses</h3>${t.length ? `<div class="nyx-owner-ip-ban-list">${t.map(t => `<article><div><strong>${e(t.ip)}</strong><span>${e(t.reason || "No reason recorded")}</span><small>Blocked ${e(p(t.createdAt))}${t.createdBy ? ` by ${e(t.createdBy)}` : ""}</small></div><button class="danger" type="button" data-owner-unban="${e(t.id)}">${x("refresh")}Unblock</button></article>`).join("")}</div>` : '<p class="nyx-owner-action-note">No IP addresses are blocked.</p>'}</section>\n        </div>`;
    }
    async function J({preserveLoading: t = !1} = {}) {
      h.controller?.abort(), h.controller = new AbortController, h.loading = !0, t || V();
      const a = new URLSearchParams({
        page: h.page,
        pageSize: h.pageSize,
        search: h.search,
        role: h.role,
        subscription: h.subscription,
        status: h.status,
        segment: h.segment,
        sort: h.sort,
        direction: h.direction
      });
      try {
        const t = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard?${a}`, {
          signal: h.controller.signal
        });
        h.data = t, b?.(t.metrics?.onlineUsers), h.access = t.access || h.access, L.enable(Boolean(h.access?.founder)), 
        w.querySelector('[data-owner-section="services"]').hidden = !h.access?.founder, 
        w.querySelector("[data-owner-game-reports]").hidden = !h.access?.founder, h.access?.founder || "services" !== T || M("overview"), 
        H.hidden = !h.access?.founder, H.hidden || B(), q.hidden = !h.access?.founder, q.hidden || (U(), 
        async function() {
          const t = w.querySelector("[data-owner-game-reports]");
          if (w.isConnected && h.access?.founder) {
            t.hidden = !1;
            try {
              const a = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/game-reports");
              if (!w.isConnected) return;
              t.innerHTML = "<div><strong>Game loading reports</strong><p>Automatic signals from browsers; reports may include slow loads. Last seven days.</p>" + ((a.reports || []).slice(0, 50).map(t => `<p><strong>${e(t.title)}</strong> &middot; ${e(t.provider)} &middot; ${e(t.brand)} &middot; ${e(t.reason)} &middot; ${Number(t.count) || 1} reports<br><small>${e(u(t.lastSeen))}</small></p>`).join("") || "<p>No recent failures reported.</p>") + "</div>";
            } catch {
              t.textContent = "Game reports could not be loaded. Refresh to retry.";
            }
            P(t, "game-reports", "Game loading reports");
          }
        }()), h.customRoles = Array.isArray(t.customRoles) ? t.customRoles : h.customRoles;
        const n = w.querySelector("[data-owner-ip-bans]");
        n && (n.hidden = !h.access?.permissions?.includes("network:bans"));
        const l = w.querySelector("[data-owner-custom-roles]");
        l && (l.hidden = !h.access?.founder);
        const y = w.querySelector("[data-owner-global-apps]");
        y && (y.hidden = !h.access?.founder), w.querySelector("[data-owner-studyready]").hidden = !h.access?.founder;
        const g = w.querySelector('[name="role"]');
        g && (g.querySelectorAll("option[data-custom-role]").forEach(e => e.remove()), h.customRoles.forEach(t => g.insertAdjacentHTML("beforeend", `<option data-custom-role value="${e(t.id)}">${e(t.label)}</option>`)), 
        g.value = h.role);
        const N = w.querySelector("[data-owner-access-copy]");
        N && h.access && (N.textContent = `${h.access.roleLabel || o(h.access.role)} access \xb7 controls are limited to this role's permissions.`), 
        function(t = {}) {
          const a = [ [ "users", "Total users", t.totalUsers ?? 0, "all" ], [ "active", "Active today", t.activeToday ?? 0, "active_today" ], [ "online", "Online now", t.onlineUsers ?? 0, "online" ], [ "signup", "New signups \xb7 7d", t.newSignups ?? 0, "new_7d" ], [ "premium", "Premium", t.premiumSubscribers ?? 0, "premium" ], [ "revenue", "Monthly revenue", (n = t.monthlyRevenueCents, 
          new Intl.NumberFormat(void 0, {
            style: "currency",
            currency: "USD"
          }).format((Number(n) || 0) / 100)), "revenue" ] ];
          var n;
          $.innerHTML = a.map(([t, a, n, o]) => {
            const r = h.segment === o;
            return `<button class="nyx-owner-metric${r ? " active" : ""}" type="button" data-owner-segment="${o}" aria-pressed="${r}" aria-label="Show ${e(a)}">${x(t)}<div><span>${e(a)}</span><strong>${e(n)}</strong></div></button>`;
          }).join("");
        }(t.metrics), function(t) {
          const a = t.users || [], n = t.pagination || {}, o = Number(n.accounts ?? n.scanned ?? 0), l = Number(n.guests || 0);
          w.querySelector("[data-owner-user-count]").textContent = `${Number(n.total || 0).toLocaleString()} matching \xb7 ${o.toLocaleString()} accounts \xb7 ${l.toLocaleString()} guest${1 === l ? "" : "s"} online${n.truncated ? " (scan capped)" : ""}`, 
          a.length ? S.innerHTML = `<table class="nyx-owner-table">\n          <thead><tr><th>${z("displayName", "User")}</th><th>${z("role", "Role")}</th><th>${z("subscriptionStatus", "Subscription")}</th><th>${z("lastSignInAt", "Last sign-in")}</th><th>${z("lastActiveAt", "Last active")}</th><th>Email verified</th><th>${z("status", "Status")}</th><th><span class="sr-only">Actions</span></th></tr></thead>\n          <tbody>${a.map(t => {
            const a = Boolean(t.guest), n = !a && !0 === t.canReviewSearchHistory;
            return `<tr data-owner-user-row="${e(t.uid)}"${a ? ' data-owner-guest-row="true"' : ""}>\n            <td><div class="nyx-owner-user-entry"><button class="nyx-owner-user-cell" type="button" data-owner-view-user="${e(t.uid)}"><span class="nyx-owner-avatar">${f(t.photoUrl, "", (t.displayName || "?").slice(0, 1).toUpperCase())}<i class="${t.online ? "online" : ""}"></i></span><span><span class="nyx-owner-user-name-row"><strong>${e(t.displayName)}</strong><span class="nyx-owner-presence-state ${t.online ? "online" : "offline"}"><i></i>${t.online ? "Online" : "Offline"}</span></span><small>@${e(t.username)} \xb7 ${e(t.email || (a ? "No account" : "No email"))}</small><span class="nyx-owner-mobile-access"><span class="nyx-owner-badge role-${e(t.role)}${t.customRole ? " custom-role" : ""}"${s(t) ? ` style="--owner-custom-role:${e(s(t))}"` : ""}>${i(t.role)}<span class="nyx-minecraft-text">${e(r(t))}</span></span><span class="nyx-owner-badge subscription-${e(t.subscriptionStatus)}">${e(c(t.subscriptionStatus))}</span></span></span></button>${n ? `<button class="nyx-owner-search-shield" type="button" data-owner-search-history="${e(t.uid)}" aria-label="Review search history for ${e(t.displayName)}" title="Review search history">${x("shield")}</button>` : ""}</div></td>\n            <td><span class="nyx-owner-badge role-${e(t.role)}${t.customRole ? " custom-role" : ""}"${s(t) ? ` style="--owner-custom-role:${e(s(t))}"` : ""}>${i(t.role)}<span class="nyx-minecraft-text">${e(r(t))}</span></span></td>\n            <td><span class="nyx-owner-badge subscription-${e(t.subscriptionStatus)}">${e(c(t.subscriptionStatus))}</span></td>\n            <td><span title="${e(a ? "No account" : u(t.lastSignInAt))}">${e(a ? "Not signed in" : p(t.lastSignInAt))}</span></td>\n            <td><span title="${e(u(t.lastActiveAt))}">${e(p(t.lastActiveAt))}</span></td>\n            <td><span class="nyx-owner-verified ${t.deliverableEmail && t.emailVerified ? "verified" : ""}">${a ? "Guest" : t.deliverableEmail ? t.emailVerified ? "Verified" : "Unverified" : "N/A"}</span></td>\n            <td><span class="nyx-owner-account-state ${a ? "guest" : t.disabled ? "disabled" : "enabled"}"><i></i>${a ? "Guest" : t.disabled ? "Disabled" : "Enabled"}</span></td>\n            <td><button class="nyx-owner-row-action" type="button" data-owner-view-user="${e(t.uid)}" aria-label="View ${e(t.displayName)}">${x("chevron")}</button></td>\n          </tr>`;
          }).join("")}</tbody></table>` : S.innerHTML = '<div class="nyx-owner-empty"><strong>No users found</strong><span>Try changing the search or filters.</span></div>', 
          C.innerHTML = `<span>Page ${n.page || 1} of ${n.pages || 1}</span><div><label>Rows <select data-owner-page-size><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label><button type="button" data-owner-page="${Math.max(1, (n.page || 1) - 1)}" ${(n.page || 1) <= 1 ? "disabled" : ""}>Previous</button><button type="button" data-owner-page="${Math.min(n.pages || 1, (n.page || 1) + 1)}" ${(n.page || 1) >= (n.pages || 1) ? "disabled" : ""}>Next</button></div>`, 
          C.querySelector("[data-owner-page-size]").value = String(h.pageSize), v(S);
        }(t), function(t = []) {
          if (h.access && !h.access.permissions?.includes("audit:view")) return void (A.innerHTML = '<div class="nyx-owner-empty compact"><strong>Activity is protected</strong><span>Your assigned role can manage its permitted account tasks without viewing the full audit log.</span></div>');
          if (!t.length) return void (A.innerHTML = '<div class="nyx-owner-empty compact"><strong>No activity yet</strong><span>Owner and account events will appear here.</span></div>');
          const a = t.reduce((e, t) => {
            const a = (e => {
              const t = new Date(e || "");
              if (Number.isNaN(t.getTime())) return "Recent";
              const a = new Date, n = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime(), o = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(), r = Math.round((n - o) / 864e5);
              return 0 === r ? "Today" : 1 === r ? "Yesterday" : new Intl.DateTimeFormat(void 0, {
                month: "short",
                day: "numeric"
              }).format(t);
            })(t.createdAt), n = e.find(e => e.label === a);
            return n ? n.events.push(t) : e.push({
              label: a,
              events: [ t ]
            }), e;
          }, []);
          A.innerHTML = a.map(t => `<section class="nyx-owner-activity-group"><header><strong>${e(t.label)}</strong><span>${t.events.length} event${1 === t.events.length ? "" : "s"}</span></header>${t.events.map(t => `<article class="nyx-owner-activity-item" data-owner-activity-type="${e(m(t.action))}"><i class="nyx-owner-activity-dot">${x(m(t.action))}</i><div><strong>${e(d(t.action))}</strong><p>${e(t.targetEmail || t.actorEmail || t.targetUid || "System event")}</p><span title="${e(u(t.createdAt))}">${e(p(t.createdAt))}${t.actorEmail && t.actorEmail !== t.targetEmail ? ` \xb7 by ${e(t.actorEmail)}` : ""}</span></div></article>`).join("")}</section>`).join("");
        }(t.recentActivity);
      } catch (n) {
        "AbortError" !== n.name && function(t) {
          M("users"), L.enable(!1), S.innerHTML = `<div class="nyx-owner-error"><strong>Dashboard could not load</strong><span>${e(t.message || "Try again.")}</span><button type="button" data-owner-refresh>Try again</button></div>`, 
          $.innerHTML = "", A.innerHTML = "";
        }(n);
      } finally {
        h.loading = !1;
      }
    }
    function Y(t, a, n = "") {
      return `<div class="nyx-owner-detail-value ${n}"><span>${e(t)}</span><strong>${e(a || "Not available")}</strong></div>`;
    }
    function Z(e, t) {
      return /^#[0-9a-f]{6}$/i.test(String(e || "")) ? String(e).toLowerCase() : t;
    }
    function Q(e, t) {
      return e === t ? " selected" : "";
    }
    async function X(t) {
      N.hidden = !1, N.classList.remove("show");
      const a = (h.data?.users || []).find(e => e.uid === t && e.guest);
      if (a) {
        h.selectedUser = a, h.selectedCapabilities = {};
        const t = Boolean(h.access?.permissions?.includes("network:bans")), n = t ? `${Y("Last seen IP", a.lastSeenIp || "Not recorded yet", "ip-address")}${a.lastSeenIp ? Y("IP last seen", u(a.lastSeenIpAt)) : ""}` : "", o = f("", "", (a.displayName || "G").slice(0, 1).toUpperCase());
        return N.innerHTML = `<header><div class="nyx-owner-detail-avatar">${o}<i class="online"></i></div><div><span>${i("guest")}Guest session</span><h2>${e(a.displayName)}</h2><p class="nyx-owner-drawer-identity">@${e(a.username)} <span class="nyx-owner-presence-state online"><i></i>Online</span></p></div><button type="button" data-owner-drawer-close aria-label="Close guest details">${x("close")}</button></header>\n          <div class="nyx-owner-drawer-scroll">\n            <section class="nyx-owner-detail-grid">${Y("Identity", a.displayName)}${Y("Guest ID", `@${a.username}`)}${Y("Account", "No account created")}${Y("Presence", "Online now")}${Y("First seen", u(a.createdAt))}${Y("Last active", u(a.lastActiveAt))}${n}</section>\n            <section class="nyx-owner-detail-section"><h3>Guest visitor</h3><p class="nyx-owner-action-note">Nyx uses the username saved by this browser's startup wizard. If the visitor skipped it, Nyx assigns a stable random guest name instead.${t ? " The last-seen IP is available only to staff who can manage network bans; shared or changing IPs may represent more than one person." : ""} Account, role, subscription, profile, and account-management controls become available only after the visitor signs in or creates an account.</p></section>\n          </div>`, 
        void requestAnimationFrame(() => N.classList.add("show"));
      }
      N.innerHTML = '<div class="nyx-owner-drawer-loading"><i></i><i></i><i></i></div>', 
      requestAnimationFrame(() => N.classList.add("show"));
      try {
        const {user: a, access: s, capabilities: m = {}} = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(t)}`);
        h.selectedUser = a, h.selectedCapabilities = m, h.access = s || h.access;
        const y = f(a.photoUrl, "", (a.displayName || "?").slice(0, 1).toUpperCase()), b = s?.assignableRoles || [], w = b.map(t => `<option value="${e(t)}"${Q(a.role, t)}>${e(o(t))}</option>`).join(""), g = s?.founder ? h.customRoles.map(t => `<option value="custom:${e(t.id)}"${a.customRole?.id === t.id ? " selected" : ""}>${e(t.label)} \xb7 ${e(o(t.baseRole))} placement</option>`).join("") : "", $ = a.customRole ? `custom:${a.customRole.id}` : a.role, S = a.customRole || b.includes(a.role) ? "" : `<option value="${e(a.role)}" selected disabled>${e(o(a.role))}</option>`, C = m.canSetRole || m.canSetSubscription ? `<section class="nyx-owner-detail-section"><h3>Access</h3>\n          ${m.canSetRole ? `<label>Current role<select data-owner-detail-role>${w}${g}${S}</select></label>${((t, a = []) => {
          const r = new Set(a), s = n.filter(e => r.has(e) || e === t);
          return `<div class="nyx-owner-role-options" role="radiogroup" aria-label="Account role">${s.map(a => `<button class="role-${e(a)}${t === a ? " active" : ""}" type="button" role="radio" aria-checked="${t === a}" data-owner-role-option="${e(a)}" ${r.has(a) ? "" : "disabled"}>${i(a)}<span>${e(o(a))}</span></button>`).join("")}${"owner" !== t || s.includes("owner") ? "" : `<button class="role-owner active" type="button" role="radio" aria-checked="true" disabled>${i("owner")}<span>Owner</span></button>`}</div>`;
        })(a.role, b)}` : `<p class="nyx-owner-action-note">Role: ${e(r(a))}</p>`}\n          ${m.canSetSubscription ? `<label>Subscription<select data-owner-detail-subscription><option value="free">Free</option><option value="premium">Premium</option><option value="trialing">Trial</option><option value="past_due">Past due</option><option value="canceled">Canceled</option></select></label><p class="nyx-owner-premium-note">Premium and Trial accounts receive Premium benefits automatically when they sign in. They do not need a Premium access code.</p><label>Monthly revenue <input data-owner-detail-revenue type="number" min="0" step="0.01" value="${((a.monthlyRevenueCents || 0) / 100).toFixed(2)}"></label>` : `<p class="nyx-owner-action-note">Subscription: ${e(c(a.subscriptionStatus))}</p>`}\n          <div class="nyx-owner-detail-actions"><button type="button" data-owner-save-access>${x("save")}Save access</button></div></section>` : "", A = [ m.canSetPassword ? `<button type="button" data-owner-user-action="set_password">${x("key")}Set custom password</button>` : "", m.canResetPassword ? `<button type="button" data-owner-user-action="create_password_reset_link">${x("key")}Create reset link</button>` : "", m.canResetPassword ? `<button type="button" data-owner-user-action="send_password_reset" ${a.deliverableEmail ? "" : "disabled"}>${x("mail")}Email reset link</button>` : "", m.canVerifyEmail ? `<button type="button" data-owner-user-action="verify_email" ${a.emailVerified || !a.deliverableEmail ? "disabled" : ""}>${x("check")}Verify email</button>` : "", m.canManageAiAccess ? `<button type="button" data-owner-user-action="ai_trust" ${"trusted" === a.aiAccess ? "disabled" : ""}>${x("check")}Approve AI allowance</button><button type="button" data-owner-user-action="ai_restrict" ${"restricted" === a.aiAccess ? "disabled" : ""}>${x("userOff")}Restrict shared AI</button><button type="button" data-owner-user-action="ai_reset" ${"automatic" === a.aiAccess ? "disabled" : ""}>${x("refresh")}Automatic AI access</button>` : "", m.canDisableAccount ? `<button type="button" data-owner-user-action="${a.disabled ? "enable" : "disable"}">${x(a.disabled ? "userCheck" : "userOff")}${a.disabled ? "Re-enable account" : "Disable account"}</button>` : "", m.canDisableAccount && !a.disabled ? `<button class="danger" type="button" data-owner-user-action="ban">${x("ban")}Ban account</button>` : "", m.canDisableAccount && m.canManageNetworkBans && !a.disabled && a.lastSeenIp ? `<button class="danger" type="button" data-owner-user-action="disable_with_ip_ban">${x("ban")}Disable + block IP</button>` : "", m.canDeleteAccount ? `<button class="danger" type="button" data-owner-user-action="delete">${x("trash")}Delete account</button>` : "" ].filter(Boolean).join(""), k = m.canManageNetworkBans ? a.lastSeenIp ? `<p class="nyx-owner-action-note">Last seen IP: ${e(a.lastSeenIp)} \xb7 ${e(u(a.lastSeenIpAt))}. IP addresses can be shared or change over time.</p>` : '<p class="nyx-owner-action-note">No IP has been recorded for this account yet. Nyx records one after its next authenticated activity.</p>' : "", L = A ? `<section class="nyx-owner-detail-section"><h3>Account actions</h3>${!a.deliverableEmail && m.canResetPassword ? '<p class="nyx-owner-action-note">This username-only account has no inbox. Create a secure reset link and give it directly to the account owner.</p>' : ""}${k}<div class="nyx-owner-action-grid">${A}</div></section>` : "", T = m.canViewAudit ? `<section class="nyx-owner-detail-section"><h3>Recent user activity</h3><div class="nyx-owner-user-activity">${(a.recentActivity || []).length ? a.recentActivity.map(t => `<p><strong>${e(d(t.action))}</strong><span>${e(p(t.createdAt))}</span></p>`).join("") : "<span>No recorded account actions.</span>"}</div></section>` : "";
        N.innerHTML = `<header><div class="nyx-owner-detail-avatar">${y}<i class="${a.online ? "online" : ""}"></i></div><div><span>${i(a.role)}<span class="nyx-minecraft-text">${e(r(a))}</span> account</span><h2>${e(a.displayName)}</h2><p class="nyx-owner-drawer-identity">@${e(a.username)} <span class="nyx-owner-presence-state ${a.online ? "online" : "offline"}"><i></i>${a.online ? "Online" : "Offline"}</span></p></div><button type="button" data-owner-drawer-close aria-label="Close user details">${x("close")}</button></header>\n          <div class="nyx-owner-drawer-scroll">\n            <section class="nyx-owner-detail-grid">${Y("Email", a.deliverableEmail ? a.email : "No email added")}${Y("Firebase UID", a.uid, "uid")}${Y("Presence", a.online ? "Online now" : "Offline")}${Y("Last sign-in", u(a.lastSignInAt))}${Y("Last active", u(a.lastActiveAt))}${m.canManageNetworkBans ? Y("Last seen IP", a.lastSeenIp || "Not recorded yet", "ip-address") : ""}${m.canManageNetworkBans && a.lastSeenIp ? Y("IP last seen", u(a.lastSeenIpAt)) : ""}${Y("Email verified", a.deliverableEmail ? a.emailVerified ? "Verified" : "Not verified" : "Not applicable \xb7 username-only")}</section>\n            <section class="nyx-owner-detail-section nyx-owner-profile-management"><h3>Public profile</h3>${function(t) {
          const a = t.profile || {}, n = Z(a.accentPrimary, "#5865f2"), r = Z(a.accentSecondary, "#8ea1ff"), s = Z(a.bannerColor, r), l = Z(a.displayNameColorPrimary, "#ffffff"), c = Z(a.displayNameColorSecondary, r), d = Z(a.customEffectColorPrimary, "#ffffff"), u = Z(a.customEffectColorSecondary, r), p = String(a.profileEffect || "none").toLowerCase(), m = String(a.avatarDecoration || "none").toLowerCase(), y = String(a.displayNameFont || "gg-sans").toLowerCase(), b = String(a.displayNameEffect || "solid").toLowerCase(), h = Math.max(2, Math.min(18, Number(a.customEffectSpeed) || 7)), w = Math.max(20, Math.min(100, Number(a.customEffectIntensity) || 70)), v = f(a.avatarUrl, a.displayName || t.displayName, (a.displayName || t.displayName || "?").slice(0, 1).toUpperCase()), g = f(a.bannerUrl, "");
          return `<article class="nyx-owner-public-profile nyx-owner-effect-${e(p)}" style="--profile-primary:${n};--profile-secondary:${r};--profile-banner:${s};--profile-name-primary:${l};--profile-name-secondary:${c};--profile-custom-primary:${d};--profile-custom-secondary:${u};--profile-effect-speed:${h}s;--profile-effect-opacity:${w / 100}">\n        <i class="nyx-owner-public-effect" aria-hidden="true"></i>\n        <div class="nyx-owner-public-banner">${g}</div>\n        <div class="nyx-owner-public-avatar nyx-owner-decoration-${e(m)}">${v}<em aria-hidden="true"></em><i class="${t.online ? "online" : ""}"></i></div>\n        <div class="nyx-owner-public-body">\n          <strong class="nyx-owner-name-font-${e(y)} nyx-owner-name-effect-${e(b)}">${e(a.displayName || t.displayName)}</strong>\n          <span>${e(a.handle || `@${t.username}`)}</span>\n          ${a.customStatus ? `<p class="status">${e(a.customStatus)}</p>` : ""}\n          <div><b>About me</b><p>${e(a.bio || "No bio yet.")}</p></div>\n          <small>${i(t.role)}${e(o(t.role))} \xb7 ${t.online ? "Online" : "Offline"}</small>\n        </div>\n      </article>`;
        }(a)}${m.canEditProfile ? `<details><summary>Edit this profile</summary>${function(t) {
          const a = t.profile || {}, n = /^https?:\/\//i.test(String(a.avatarUrl || "")) ? a.avatarUrl : "", o = /^https?:\/\//i.test(String(a.bannerUrl || "")) ? a.bannerUrl : "", r = f(a.avatarUrl, "Current avatar", (a.displayName || t.displayName || "?").slice(0, 1).toUpperCase()), s = f(a.bannerUrl, "Current banner"), i = `nyx-owner-avatar-${e(t.uid)}`, l = `nyx-owner-banner-${e(t.uid)}`;
          return `<form class="nyx-owner-profile-editor" data-owner-profile-form>\n        <div class="nyx-owner-media-editors">\n          <article class="nyx-owner-media-editor">\n            <div class="nyx-owner-media-preview avatar" data-owner-media-preview="avatar">${r}</div>\n            <div><strong>Profile avatar</strong><span data-owner-media-name="avatar">PNG, JPG, WebP, or animated GIF \xb7 8 MB max</span></div>\n            <label class="nyx-owner-media-button" for="${i}">Choose avatar</label>\n            <input class="nyx-owner-media-input" id="${i}" name="avatarFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif">\n          </article>\n          <article class="nyx-owner-media-editor banner">\n            <div class="nyx-owner-media-preview banner" data-owner-media-preview="banner" style="--owner-banner-preview:${Z(a.bannerColor, "#8ea1ff")}">${s}</div>\n            <div><strong>Profile banner</strong><span data-owner-media-name="banner">PNG, JPG, WebP, or animated GIF \xb7 8 MB max</span></div>\n            <label class="nyx-owner-media-button" for="${l}">Choose banner</label>\n            <input class="nyx-owner-media-input" id="${l}" name="bannerFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif">\n          </article>\n        </div>\n        <p class="nyx-owner-media-error" data-owner-media-error role="alert"></p>\n        <div class="nyx-owner-profile-fields">\n          <label>Display name<input name="displayName" maxlength="48" required value="${e(a.displayName || t.displayName)}"></label>\n          <label>Username<span class="nyx-owner-prefixed-input"><i>@</i><input name="handle" maxlength="32" required value="${e(String(a.handle || t.username).replace(/^@/, ""))}"></span></label>\n          <label class="wide">About me<textarea name="bio" maxlength="280" rows="4">${e(a.bio || "")}</textarea></label>\n          <label class="wide">Custom status<input name="customStatus" maxlength="80" value="${e(a.customStatus || "")}"></label>\n          <label>Status<select name="status"><option value="online"${Q(a.status, "online")}>Online</option><option value="idle"${Q(a.status, "idle")}>Idle</option><option value="dnd"${Q(a.status, "dnd")}>Do not disturb</option><option value="offline"${Q(a.status, "offline")}>Offline</option></select></label>\n          <label>Name style<select name="displayNameFont"><option value="gg-sans"${Q(a.displayNameFont, "gg-sans")}>Default</option><option value="headline"${Q(a.displayNameFont, "headline")}>Headline</option><option value="rounded"${Q(a.displayNameFont, "rounded")}>Rounded</option><option value="wide"${Q(a.displayNameFont, "wide")}>Wide</option><option value="slab"${Q(a.displayNameFont, "slab")}>Slab</option><option value="condensed"${Q(a.displayNameFont, "condensed")}>Condensed</option><option value="mono-block"${Q(a.displayNameFont, "mono-block")}>Mono block</option><option value="tempo"${Q(a.displayNameFont, "tempo")}>Tempo</option><option value="sakura"${Q(a.displayNameFont, "sakura")}>Sakura</option><option value="jellybean"${Q(a.displayNameFont, "jellybean")}>Jellybean</option><option value="modern"${Q(a.displayNameFont, "modern")}>Modern</option><option value="medieval"${Q(a.displayNameFont, "medieval")}>Medieval</option><option value="eight-bit"${Q(a.displayNameFont, "eight-bit")}>Eight bit</option><option value="vampyre"${Q(a.displayNameFont, "vampyre")}>Vampyre</option></select></label>\n          <label>Primary color<input name="accentPrimary" type="color" value="${Z(a.accentPrimary, "#5865f2")}"></label>\n          <label>Accent color<input name="accentSecondary" type="color" value="${Z(a.accentSecondary, "#8ea1ff")}"></label>\n          <label>Banner fallback<input name="bannerColor" type="color" value="${Z(a.bannerColor, "#8ea1ff")}"></label>\n          <label>Name effect<select name="displayNameEffect"><option value="solid"${Q(a.displayNameEffect, "solid")}>Solid</option><option value="gradient"${Q(a.displayNameEffect, "gradient")}>Gradient</option><option value="neon"${Q(a.displayNameEffect, "neon")}>Neon</option><option value="toon"${Q(a.displayNameEffect, "toon")}>Toon</option><option value="pop"${Q(a.displayNameEffect, "pop")}>Pop</option></select></label>\n          <label>Profile effect<select name="profileEffect"><option value="none"${Q(a.profileEffect, "none")}>None</option><option value="glow"${Q(a.profileEffect, "glow")}>Glow</option><option value="sparkle"${Q(a.profileEffect, "sparkle")}>Sparkle</option><option value="aurora"${Q(a.profileEffect, "aurora")}>Aurora</option><option value="holographic"${Q(a.profileEffect, "holographic")}>Holographic</option><option value="fireflies"${Q(a.profileEffect, "fireflies")}>Fireflies</option><option value="cosmic-dust"${Q(a.profileEffect, "cosmic-dust")}>Cosmic dust</option><option value="electric-storm"${Q(a.profileEffect, "electric-storm")}>Electric storm</option><option value="meteor-shower"${Q(a.profileEffect, "meteor-shower")}>Meteor shower</option><option value="cyber-grid"${Q(a.profileEffect, "cyber-grid")}>Cyber grid</option><option value="plasma"${Q(a.profileEffect, "plasma")}>Plasma</option><option value="snowfall"${Q(a.profileEffect, "snowfall")}>Snowfall</option><option value="embers"${Q(a.profileEffect, "embers")}>Embers</option><option value="bubbles"${Q(a.profileEffect, "bubbles")}>Bubbles</option><option value="custom"${Q(a.profileEffect, "custom")}>Custom</option></select></label>\n          <label>Avatar decoration<select name="avatarDecoration"><option value="none"${Q(a.avatarDecoration, "none")}>None</option><option value="starfall"${Q(a.avatarDecoration, "starfall")}>Starfall</option><option value="orbit"${Q(a.avatarDecoration, "orbit")}>Orbit</option><option value="laurel"${Q(a.avatarDecoration, "laurel")}>Laurel</option><option value="neon-wings"${Q(a.avatarDecoration, "neon-wings")}>Neon wings</option></select></label>\n          <label class="wide">Avatar URL (optional)<input name="avatarUrl" type="url" placeholder="Leave blank to keep the current image" value="${e(n)}"></label>\n          <label class="wide">Banner URL (optional)<input name="bannerUrl" type="url" placeholder="Leave blank to keep the current image" value="${e(o)}"></label>\n        </div>\n        <div class="nyx-owner-media-removal">\n          <label><input name="removeAvatar" type="checkbox"> Remove current avatar</label>\n          <label><input name="removeBanner" type="checkbox"> Remove current banner</label>\n        </div>\n        <p>File uploads preserve animated GIFs. A selected file takes priority over its URL field, and blank fields keep the current media unchanged.</p>\n        <div class="nyx-owner-detail-actions"><button type="submit">Save profile</button></div>\n      </form>`;
        }(a)}</details>` : ""}</section>\n            ${C}\n            ${m.canSetAiLimit ? function(t) {
          return `<section class="nyx-owner-detail-section"><h3>AI models and limits</h3><p>Allow grants this model to this account. Block removes access. Default follows the account plan. Blank limits add no extra message cap; shared token, spending and rate limits still apply.</p><div class="nyx-owner-ai-rules">${(t.aiAssignableModels || []).map(a => {
            const n = (t.aiModelRules || []).find(e => e.model === a) || {
              access: "default",
              messages: null,
              periodDays: 4
            };
            return `<details data-ai-model="${e(a)}"><summary>${e(a)} <small>${e(n.access)}${null !== n.messages ? " / " + n.messages + " messages" : ""}</small></summary><div class="nyx-owner-ai-rule-fields"><label>Access<select data-ai-rule-access>${[ "default", "allow", "deny" ].map(e => `<option value="${e}"${Q(n.access, e)}>${"deny" === e ? "Block" : "allow" === e ? "Allow" : "Default"}</option>`).join("")}</select></label><label>Messages per period<input data-ai-rule-messages type="number" min="0" max="100000" step="1" placeholder="No extra cap" value="${n.messages ?? ""}"></label><label>Reset every (days)<input data-ai-rule-days type="number" min="1" max="30" step="1" value="${n.periodDays}"></label></div></details>`;
          }).join("")}</div><div class="nyx-owner-detail-actions"><button type="button" data-owner-save-ai-models>Save AI access</button><button type="button" data-owner-ai-activity>View usage and chat history</button></div><div data-owner-ai-activity-result aria-live="polite"></div></section>`;
        }(a) : ""}\n            ${L}\n            ${T}\n          </div>`;
        const M = N.querySelector("[data-owner-detail-role]"), R = N.querySelector("[data-owner-detail-subscription]"), q = N.querySelector('[name="profileEffect"]');
        q?.querySelector('[value="custom"]')?.insertAdjacentHTML("beforebegin", '<option value="starlight-ribbon">Starlight ribbon</option><option value="cherry-bloom">Cherry bloom</option><option value="ocean-caustics">Ocean caustics</option>'), 
        q && (q.value = a.profile?.profileEffect || "none");
        const P = N.querySelector('[name="avatarDecoration"]');
        P?.insertAdjacentHTML("beforeend", '<option value="crystal-crown">Crystal crown</option><option value="lunar-halo">Lunar halo</option><option value="rose-vines">Rose vines</option>'), 
        P && (P.value = a.profile?.avatarDecoration || "none"), M && (M.value = $), R && (R.value = a.subscriptionStatus), 
        l(N, $), v(N);
      } catch (s) {
        N.innerHTML = `<div class="nyx-owner-error"><strong>User details could not load</strong><span>${e(s.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
      }
    }
    let K = {
      domains: [],
      targetIps: []
    };
    function ee() {
      N.innerHTML = `<header class="nyx-owner-global-app-header"><div><span>${x("apps")}</span><div><h2>StudyReady domains</h2><p>Manage the learning site on your domains.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close StudyReady">${x("close")}</button></header><div class="nyx-owner-drawer-scroll nyx-owner-global-app-drawer"><section class="nyx-owner-detail-section"><p><a href="/studyready" target="_blank" rel="noopener">Preview StudyReady</a> &middot; <a href="/textbook.pdf" target="_blank" rel="noopener">Textbook PDF</a></p><p>Nyx stays available at <a href="/nyx" target="_blank" rel="noopener">/nyx</a>. These domains show the same learning pages to every visitor.</p><h3>Add or update a domain</h3><form class="nyx-owner-global-app-form" data-owner-studyready-form><label>Domain<input name="hostname" required maxlength="253" placeholder="learn.example.com"></label><label>Page title<input name="title" required maxlength="80" value="StudyReady"></label><button type="submit">Save domain</button></form><p class="nyx-owner-action-note">Point the domain's A record to ${e(K.targetIps.join(" or ") || "your VPS address")}. New domains need working DNS before HTTPS can be issued. Existing sites at the same hostname will use StudyReady as their homepage.</p></section><section class="nyx-owner-detail-section"><h3>Configured domains</h3>${K.domains.map(t => `<article class="nyx-owner-detail-section"><strong>${e(t.hostname)}</strong><p>${e(t.title)}</p><div class="nyx-owner-detail-actions"><a href="https://${e(t.hostname)}/" target="_blank" rel="noopener">Open site</a><button type="button" data-studyready-edit="${e(t.hostname)}">Edit title</button><button type="button" data-studyready-check="${e(t.hostname)}">Check DNS</button><button class="danger" type="button" data-studyready-remove="${e(t.hostname)}">Remove</button></div></article>`).join("") || "<p>No domains configured.</p>"}<p data-studyready-status role="status"></p></section><section class="nyx-owner-detail-section"><h3>Category reviews</h3><p>Publishing lessons does not automatically change a filter category. Lightspeed review tools require administrator access.</p><a href="https://help.lightspeedsystems.com/s/article/kb-4019650636-lightspeed-filter---policies---verifying-access-and-troubleshooting" target="_blank" rel="noopener">Access Checker instructions</a></section></div>`;
    }
    async function te(e, t, a) {
      if ("remove" !== t || confirm(`Remove StudyReady from ${a}? Its homepage will return to the site's existing routing.`)) {
        e.disabled = !0;
        try {
          const e = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/studyready/${encodeURIComponent(a)}${"check" === t ? "/check" : ""}`, {
            method: "check" === t ? "POST" : "DELETE"
          });
          "check" === t ? N.querySelector("[data-studyready-status]").textContent = e.matches ? `${a} resolves to this VPS. HTTPS is prepared on its first visit.` : `${a} currently resolves to ${e.resolvedIps.join(", ") || "no addresses"}. Set its A record to ${e.targetIps.join(" or ")}. A CDN-proxied record may hide the origin IP.` : (K = e, 
          ee(), R("StudyReady domain removed."));
        } catch (n) {
          R(n.message, "error");
        } finally {
          e.isConnected && (e.disabled = !1);
        }
      }
    }
    function ae() {
      window.dispatchEvent(new CustomEvent("nyx:global-apps-changed", {
        detail: {
          apps: h.globalApps
        }
      }));
    }
    function ne() {
      N.innerHTML = `<header class="nyx-owner-global-app-header"><div><span>${x("apps")}</span><div><h2>Apps for everyone</h2><p>Add or remove apps from every user's Apps page.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close global apps">${x("close")}</button></header>\n        <div class="nyx-owner-drawer-scroll nyx-owner-global-app-drawer">\n          <section class="nyx-owner-detail-section"><h3>Add an app</h3><form class="nyx-owner-global-app-form" data-owner-global-app-form><label>Name<input name="name" minlength="2" maxlength="48" autocomplete="off" required placeholder="Example app"></label><label>URL or Nyx path<input name="url" maxlength="2048" autocomplete="off" spellcheck="false" required placeholder="https://example.com/ or /apps/example/"></label><div class="nyx-owner-detail-actions"><button type="submit">${x("apps")}<span>Add for everyone</span></button></div></form></section>\n          <section class="nyx-owner-detail-section"><div class="nyx-owner-global-app-heading"><div><h3>Published apps</h3><p class="nyx-owner-action-note">Changes appear in open Nyx sessions within one minute.</p></div><span>${h.globalApps.length}</span></div>${h.globalApps.length ? `<div class="nyx-owner-global-app-list">${h.globalApps.map(t => `<article><span class="nyx-owner-global-app-icon">${x("apps")}</span><div><strong>${e(t.name)}</strong><small>${e(t.url)}</small></div><button class="danger" type="button" data-owner-global-app-delete="${e(t.id)}" aria-label="Remove ${e(t.name)}">${x("trash")}Remove</button></article>`).join("")}</div>` : '<p class="nyx-owner-action-note">No apps are currently published.</p>'}</section>\n        </div>`;
    }
    function oe(t = "member") {
      return (h.customRolePlacements.length ? h.customRolePlacements : n.map(e => ({
        id: e,
        label: o(e)
      }))).map(a => `<option value="${e(a.id)}"${a.id === t ? " selected" : ""}>${e(a.label)} placement</option>`).join("");
    }
    function re(t = []) {
      const a = new Set(t);
      return `<details class="nyx-owner-custom-role-permission-editor"><summary>${a.size} permission${1 === a.size ? "" : "s"} selected</summary><fieldset class="nyx-owner-custom-role-permissions"><legend>Permissions</legend>${h.customRolePermissions.map(t => `<label><input type="checkbox" name="permissions" value="${e(t.id)}"${a.has(t.id) ? " checked" : ""}><span>${e(t.label)}</span><small>${e(t.id)}</small></label>`).join("")}</fieldset></details>`;
    }
    function se(t = "#8ea1ff") {
      const a = /^#[0-9a-f]{6}$/i.test(String(t || "")) ? String(t).toLowerCase() : "#8ea1ff";
      return `<label class="nyx-owner-custom-role-field nyx-owner-custom-role-color-field">Color / code<span class="nyx-owner-custom-role-color-control"><input class="nyx-owner-custom-role-color-picker" data-owner-custom-role-color-picker type="color" value="${e(a)}" aria-label="Choose role color"><input name="color" type="text" value="${e(a)}" maxlength="7" pattern="(?:#[0-9A-Fa-f]{6}|&amp;[0-9A-Fa-f])" title="Use a six-digit hex color or a Minecraft code from &amp;0 through &amp;f" placeholder="&amp;d or #ff55ff" required></span><small>Pick a color or enter #RRGGBB / &amp;0\u2013&amp;f.</small></label>`;
    }
    function ie() {
      const t = h.customRoleEditorId, a = `<form class="nyx-owner-custom-role-form nyx-owner-custom-role-editor" data-owner-custom-role-create><label class="nyx-owner-custom-role-field">Name<input name="label" maxlength="64" minlength="2" required placeholder="Night Watch"></label><label class="nyx-owner-custom-role-field">Role ID<input name="id" maxlength="32" pattern="[a-z0-9][a-z0-9-]{1,31}" placeholder="night-watch"></label>${se()}<label class="nyx-owner-custom-role-field">Placement<select name="baseRole">${oe("member")}</select></label>${re([])}<div class="nyx-owner-custom-role-editor-actions"><button class="nyx-owner-custom-role-save" type="submit">${x("save")}<span>Create role</span></button><button class="nyx-owner-custom-role-cancel" type="button" data-owner-custom-role-cancel>Cancel</button></div></form>`;
      N.innerHTML = `<header class="nyx-owner-custom-role-header"><div><span>${x("users")}</span><div><h2>Custom roles</h2><p>Colors, hierarchy, permissions, and assignments.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close custom roles">${x("close")}</button></header>\n        <div class="nyx-owner-drawer-scroll nyx-owner-custom-role-drawer">\n          <section class="nyx-owner-detail-section nyx-owner-custom-role-section"><div class="nyx-owner-custom-role-toolbar"><div><h3>Configured roles</h3><p class="nyx-owner-action-note">Placement controls hierarchy; selected permissions control access.</p></div><button type="button" data-owner-custom-role-new>${x("users")}New role</button></div>${"new" === t ? a : ""}${h.customRoles.length ? `<div class="nyx-owner-custom-role-list">${h.customRoles.map(a => `<article class="nyx-owner-custom-role-item${t === a.id ? " editing" : ""}"><div class="nyx-owner-custom-role-row"><span class="nyx-owner-custom-role-dot" style="--owner-custom-role:${e(a.color)}"></span><span class="nyx-owner-custom-role-copy"><strong class="nyx-minecraft-text">${e(a.label)}</strong><small>${e(a.id)}</small></span><span class="nyx-owner-custom-role-placement">${e(o(a.baseRole))}</span><span class="nyx-owner-custom-role-permission-count">${Number(a.permissions?.length || 0)} perms</span><button type="button" data-owner-custom-role-edit="${e(a.id)}">Edit</button><button class="danger" type="button" data-owner-custom-role-delete="${e(a.id)}" aria-label="Delete ${e(a.label)}">${x("trash")}</button></div>${t === a.id ? (t => `<form class="nyx-owner-custom-role-editor" data-owner-custom-role-update="${e(t.id)}"><label class="nyx-owner-custom-role-field">Name<input name="label" maxlength="64" minlength="2" required value="${e(t.label)}"></label>${se(t.color)}<label class="nyx-owner-custom-role-field">Placement<select name="baseRole">${oe(t.baseRole)}</select></label>${re(t.permissions)}<div class="nyx-owner-custom-role-editor-actions"><button class="nyx-owner-custom-role-save" type="submit">${x("save")}<span>Save changes</span></button><button class="nyx-owner-custom-role-cancel" type="button" data-owner-custom-role-cancel>Cancel</button></div></form>`)(a) : ""}</article>`).join("")}</div>` : '<p class="nyx-owner-action-note">No custom roles have been created yet.</p>'}</section>\n        </div>`;
    }
    async function le(t) {
      if (!t || t.guest) return;
      N.hidden = !1, N.classList.remove("show"), h.selectedUser = t;
      const a = f(t.photoUrl, "", (t.displayName || "?").slice(0, 1).toUpperCase());
      N.innerHTML = `<header><div class="nyx-owner-detail-avatar">${a}<i class="${t.online ? "online" : ""}"></i></div><div><span>${x("shield")}Search review</span><h2>${e(t.displayName)}</h2><p class="nyx-owner-drawer-identity">@${e(t.username)}</p></div><button type="button" data-owner-drawer-close aria-label="Close search history">${x("close")}</button></header>\n        <div class="nyx-owner-drawer-scroll"><section class="nyx-owner-detail-section nyx-owner-flagged-searches"><div class="nyx-owner-search-history-heading"><h3>Search history</h3><button type="button" data-owner-clear-search-history="${e(t.uid)}" hidden>${x("trash")}Clear history</button></div><p class="nyx-owner-action-note">Searches made through Nyx while this account is signed in are retained for 30 days. Policy-classified searches are highlighted, but a match is a moderation signal rather than proof.</p><div class="nyx-owner-flagged-search-list"><div class="nyx-owner-drawer-loading"><i></i><i></i><i></i></div></div></section></div>`, 
      requestAnimationFrame(() => N.classList.add("show")), v(N);
      const n = N.querySelector(".nyx-owner-flagged-search-list");
      try {
        const a = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/moderation/search-history?uid=${encodeURIComponent(t.uid)}`);
        if (!n?.isConnected || h.selectedUser?.uid !== t.uid) return;
        const o = Array.isArray(a.searches) ? a.searches : [], r = N.querySelector("[data-owner-clear-search-history]");
        r && (r.hidden = !(a.canClear && o.length)), n.innerHTML = o.length ? o.map(t => `<article class="${t.flagged ? "policy" : ""}"><header><strong>${e(t.category || "Standard search")}</strong><time datetime="${e(t.createdAt)}" title="${e(u(t.createdAt))}">${e(p(t.createdAt))}</time></header><p>${e(t.query)}</p></article>`).join("") : '<div class="nyx-owner-empty compact"><strong>No retained searches</strong><span>This account has no Nyx searches from the last 30 days.</span></div>';
      } catch (o) {
        if (!n?.isConnected) return;
        n.innerHTML = `<div class="nyx-owner-error"><strong>Search history could not load</strong><span>${e(o.message)}</span></div>`;
      }
    }
    function ce() {
      N.classList.remove("show"), setTimeout(() => {
        N.hidden = !0, N.innerHTML = "";
      }, 180), h.selectedUser = null, h.selectedCapabilities = null;
    }
    function de({title: t, message: a, confirmLabel: n = "Continue", danger: o = !1, requireText: r = ""}) {
      return new Promise(s => {
        k.hidden = !1, k.innerHTML = `<form><h2>${e(t)}</h2><p>${e(a)}</p>${r ? `<label>Type <strong>${e(r)}</strong> to confirm<input name="confirmation" autocomplete="off"></label>` : ""}<div><button type="button" data-owner-confirm-cancel>Cancel</button><button class="${o ? "danger" : ""}" type="submit" ${r ? "disabled" : ""}>${e(n)}</button></div></form>`;
        const i = k.querySelector("form"), l = i.elements.confirmation, c = i.querySelector('[type="submit"]'), d = e => {
          k.hidden = !0, k.innerHTML = "", s(e);
        };
        l?.addEventListener("input", () => {
          c.disabled = l.value.trim() !== r;
        }), i.addEventListener("submit", e => {
          e.preventDefault(), d(!0);
        }), i.querySelector("[data-owner-confirm-cancel]").addEventListener("click", () => d(!1)), 
        setTimeout(() => (l || i.querySelector("button"))?.focus(), 0);
      });
    }
    function ue({title: t, message: a, confirmLabel: n, requireText: o = ""}) {
      return new Promise(r => {
        k.hidden = !1, k.innerHTML = `<form><h2>${e(t)}</h2><p>${e(a)}</p><label>Message shown to this member<textarea name="memberMessage" maxlength="500" rows="4" placeholder="Explain what happened and what they should do next." required></textarea><small>Required \xb7 500 characters maximum \xb7 do not include private staff notes</small></label>${o ? `<label>Type <strong>${e(o)}</strong> to confirm<input name="confirmation" autocomplete="off"></label>` : ""}<div><button type="button" data-owner-confirm-cancel>Cancel</button><button class="danger" type="submit" disabled>${e(n)}</button></div></form>`;
        const s = k.querySelector("form"), i = s.elements.memberMessage, l = s.elements.confirmation, c = s.querySelector('[type="submit"]'), d = () => {
          c.disabled = !i.value.trim() || Boolean(o && l?.value.trim() !== o);
        }, u = e => {
          k.hidden = !0, k.innerHTML = "", r(e);
        };
        i.addEventListener("input", d), l?.addEventListener("input", d), s.addEventListener("submit", e => {
          e.preventDefault();
          const t = i.value.trim();
          !t || o && l?.value.trim() !== o || u(t);
        }), s.querySelector("[data-owner-confirm-cancel]").addEventListener("click", () => u(null)), 
        setTimeout(() => i.focus(), 0);
      });
    }
    async function pe(t, a = {}) {
      const n = h.selectedUser;
      if (!n) return;
      const o = {
        enable: [ "Re-enable account?", `${n.email || n.displayName} will be able to sign in again.`, "Re-enable", !1 ],
        verify_email: [ "Verify this email?", `Mark ${n.email} as verified in Firebase Authentication.`, "Verify", !1 ],
        ai_trust: [ "Approve AI allowance?", "This account will use the established-user allowance. Daily limits still apply.", "Approve", !1 ],
        ai_restrict: [ "Restrict shared AI?", "This account will lose shared AI access. Other Nyx features remain available.", "Restrict", !1 ],
        ai_reset: [ "Use automatic AI access?", "This account's shared AI access will follow its account history and subscription again.", "Reset", !1 ],
        create_password_reset_link: [ "Create a password reset link?", "The current password will remain private. Give the generated one-time link only to the account owner.", "Create link", !1 ],
        send_password_reset: [ "Send password reset?", `Firebase will email a password-reset link to ${n.email}.`, "Send email", !1 ]
      };
      if ("set_password" === t) {
        const t = await function(t) {
          return new Promise(a => {
            k.hidden = !1, k.innerHTML = `<form><h2>Set custom password</h2><p>Set a new password for ${e(t.displayName || t.handle || t.uid)}. Their old password will stop working. Give the new password to them privately; no email is required.</p><label>New password<input name="newPassword" type="password" autocomplete="new-password" minlength="8" maxlength="256" required></label><label>Confirm password<input name="confirmPassword" type="password" autocomplete="new-password" minlength="8" maxlength="256" required></label><small data-password-error role="alert"></small><div><button type="button" data-owner-confirm-cancel>Cancel</button><button type="submit">Set password</button></div></form>`;
            const n = k.querySelector("form"), o = n.elements.newPassword, r = n.elements.confirmPassword, s = e => {
              o.value = "", r.value = "", k.hidden = !0, k.innerHTML = "", a(e);
            };
            n.addEventListener("submit", e => {
              e.preventDefault(), n.reportValidity() && (o.value === r.value ? s(o.value) : n.querySelector("[data-password-error]").textContent = "Passwords must match.");
            }), n.querySelector("[data-owner-confirm-cancel]").addEventListener("click", () => s(null)), 
            o.focus();
          });
        }(n);
        if (null === t) return;
        a = {
          password: t
        };
      } else if ("delete" === t) {
        const e = n.email || n.uid, t = await ue({
          title: "Permanently delete account?",
          message: "This removes the Firebase Authentication account and its Nyx profile data. Audit history is retained, and the member will see your message if they try to use this account again.",
          confirmLabel: "Delete permanently",
          requireText: e
        });
        if (null === t) return;
        a = {
          ...a,
          reason: t
        };
      } else if ("disable" === t || "ban" === t || "disable_with_ip_ban" === t) {
        const e = await ue({
          title: "disable" === t ? "Disable account?" : "ban" === t ? "Ban account?" : "Disable account and block its IP?",
          message: "disable" === t ? `${n.email || n.displayName} will immediately lose access until re-enabled.` : "ban" === t ? `${n.email || n.displayName} will immediately lose access and see this as an account ban until re-enabled.` : `${n.email || n.displayName} will lose access, and ${n.lastSeenIp} will be blocked from Nyx server requests. Shared or changing IPs can affect other people.`,
          confirmLabel: "disable" === t ? "Disable" : "ban" === t ? "Ban account" : "Disable and block"
        });
        if (null === e) return;
        a = {
          ...a,
          reason: e
        };
      } else if (o[t]) {
        const [e, a, n, r] = o[t];
        if (!await de({
          title: e,
          message: a,
          confirmLabel: n,
          danger: r
        })) return;
      }
      try {
        const o = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(n.uid)}`, {
          method: "PATCH",
          body: JSON.stringify({
            action: t,
            ...a
          })
        });
        o.deleted ? (R("Account deleted."), ce()) : o.resetLink ? (function(t) {
          k.hidden = !1, k.innerHTML = `<form><h2>Password reset link</h2><p>Give this one-time Firebase link directly to the account owner. Nyx never reveals or stores their password.</p><label>Reset link<input name="resetLink" value="${e(t)}" readonly></label><div><button type="button" data-owner-reset-close>Close</button><button type="button" data-owner-reset-copy>Copy link</button></div></form>`;
          const a = k.querySelector('[name="resetLink"]');
          k.querySelector("[data-owner-reset-close]").addEventListener("click", () => {
            k.hidden = !0, k.innerHTML = "";
          }), k.querySelector("[data-owner-reset-copy]").addEventListener("click", async () => {
            try {
              await navigator.clipboard.writeText(t), R("Password reset link copied.");
            } catch {
              a.focus(), a.select(), R("Select and copy the reset link.", "error");
            }
          }), setTimeout(() => {
            a.focus(), a.select();
          }, 0);
        }(o.resetLink), R("Secure password reset link created.")) : (h.selectedUser = o.user, 
        h.selectedCapabilities = o.capabilities || h.selectedCapabilities, h.access = o.access || h.access, 
        R("set_password" === t ? "Password updated. Share it privately with the account owner." : "send_password_reset" === t ? "Password reset email sent." : "Account updated."), 
        await X(n.uid)), await J({
          preserveLoading: !0
        });
      } catch (r) {
        R(r.message || "The account action failed.", "error");
      } finally {
        delete a.password;
      }
    }
    function me(e) {
      "Escape" === e.key && (k.hidden ? N.hidden ? ye() : ce() : (k.querySelector("[data-owner-confirm-cancel]") || k.querySelector("[data-owner-reset-close]"))?.click());
    }
    function ye() {
      L.destroy(), clearInterval(j), clearInterval(D), h.controller?.abort(), clearTimeout(h.searchTimer), 
      w.classList.remove("show"), document.removeEventListener("keydown", me), window.removeEventListener("nyx:presence", be), 
      setTimeout(() => w.remove(), 180), g?.overlay === w && (g = null);
    }
    function be(e) {
      const t = e.detail?.online;
      if (!Number.isSafeInteger(t) || t < 0 || !h.data?.metrics) return;
      h.data.metrics.onlineUsers = t;
      const a = w.querySelector('[data-owner-segment="online"] strong');
      a && (a.textContent = t.toLocaleString());
    }
    return w.addEventListener("click", function(t) {
      const a = t.target.closest("[data-owner-section]");
      if (a) return M(a.dataset.ownerSection);
      if (t.target.closest("[data-owner-studyready]")) return void async function() {
        N.hidden = !1, N.classList.add("show"), h.selectedUser = null, h.selectedCapabilities = null, 
        N.innerHTML = '<div class="nyx-owner-drawer-loading">Loading StudyReady...</div>';
        try {
          K = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/studyready"), ee();
        } catch (t) {
          N.innerHTML = `<div class="nyx-owner-error"><strong>StudyReady could not load</strong><span>${e(t.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
        }
      }();
      const n = t.target.closest("[data-studyready-edit]");
      if (n) {
        const e = K.domains.find(e => e.hostname === n.dataset.studyreadyEdit), t = N.querySelector("[data-owner-studyready-form]");
        return t.elements.hostname.value = e.hostname, t.elements.title.value = e.title, 
        void t.elements.title.focus();
      }
      const r = t.target.closest("[data-studyready-check]");
      if (r) return void te(r, "check", r.dataset.studyreadyCheck);
      const s = t.target.closest("[data-studyready-remove]");
      if (s) return void te(s, "remove", s.dataset.studyreadyRemove);
      if (t.target.closest("[data-owner-tube-check]")) return void B(!0);
      if (t.target === w || t.target.closest("[data-owner-close]")) return ye();
      if (t.target.closest("[data-owner-refresh]")) return void J();
      if (t.target.closest("[data-owner-export]")) return function() {
        const e = h.data?.users || [];
        if (!e.length) return R("There are no users on this page to export.", "error");
        const t = [ "uid", "accountType", "displayName", "username", "email", "role", "subscriptionStatus", "lastSignInAt", "lastActiveAt", "emailVerified", "disabled" ], a = [ t.join(","), ...e.map(e => t.map(t => {
          return a = e[t], `"${String(a ?? "").replaceAll('"', '""')}"`;
          var a;
        }).join(",")) ].join("\r\n"), n = URL.createObjectURL(new Blob([ a ], {
          type: "text/csv;charset=utf-8"
        })), o = document.createElement("a");
        o.href = n, o.download = `nyx-users-page-${h.page}.csv`, o.click(), setTimeout(() => URL.revokeObjectURL(n), 1e3), 
        R("User page exported.");
      }();
      if (t.target.closest("[data-owner-global-apps]")) return void async function() {
        N.hidden = !1, N.classList.remove("show"), N.innerHTML = '<div class="nyx-owner-drawer-loading"><i></i><i></i><i></i></div>', 
        requestAnimationFrame(() => N.classList.add("show")), h.selectedUser = null, h.selectedCapabilities = null;
        try {
          const e = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/apps");
          h.globalApps = Array.isArray(e.apps) ? e.apps : [], h.access = e.access || h.access, 
          ne();
        } catch (t) {
          N.innerHTML = `<div class="nyx-owner-error"><strong>Apps could not load</strong><span>${e(t.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
        }
      }();
      if (t.target.closest("[data-owner-custom-roles]")) return void async function() {
        N.hidden = !1, N.classList.remove("show"), N.innerHTML = '<div class="nyx-owner-drawer-loading"><i></i><i></i><i></i></div>', 
        requestAnimationFrame(() => N.classList.add("show")), h.selectedUser = null, h.selectedCapabilities = null;
        try {
          const e = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles");
          h.customRoles = e.roles || [], h.customRolePlacements = e.placements || [], h.customRolePermissions = e.permissions || [], 
          h.access = e.access || h.access, ie();
        } catch (t) {
          N.innerHTML = `<div class="nyx-owner-error"><strong>Custom roles could not load</strong><span>${e(t.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
        }
      }();
      if (t.target.closest("[data-owner-ip-bans]")) return void async function() {
        N.hidden = !1, N.classList.remove("show"), N.innerHTML = '<div class="nyx-owner-drawer-loading"><i></i><i></i><i></i></div>', 
        requestAnimationFrame(() => N.classList.add("show")), h.selectedUser = null, h.selectedCapabilities = null;
        try {
          const e = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ip-bans");
          h.ipBans = e.bans || [], h.ipBanClientIp = e.clientIp || "", h.access = e.access || h.access, 
          W();
        } catch (t) {
          N.innerHTML = `<div class="nyx-owner-error"><strong>IP bans could not load</strong><span>${e(t.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
        }
      }();
      if (t.target.closest("[data-owner-custom-role-new]")) return h.customRoleEditorId = "new", 
      ie(), void N.querySelector('[data-owner-custom-role-create] input[name="label"]')?.focus();
      const i = t.target.closest("[data-owner-custom-role-edit]")?.dataset.ownerCustomRoleEdit;
      if (i) return h.customRoleEditorId = i, ie(), void N.querySelector(`[data-owner-custom-role-update="${CSS.escape(i)}"] input[name="label"]`)?.focus();
      if (t.target.closest("[data-owner-custom-role-cancel]")) return h.customRoleEditorId = "", 
      void ie();
      const c = t.target.closest("[data-owner-custom-role-delete]")?.dataset.ownerCustomRoleDelete;
      if (c) return void async function(e) {
        const t = h.customRoles.find(t => t.id === e);
        if (t && await de({
          title: "Delete this custom role?",
          message: `${t.label} will be removed from every assigned account. Those accounts will return to their previous built-in role.`,
          confirmLabel: "Delete role",
          requireText: t.label,
          danger: !0
        })) try {
          await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(e)}`, {
            method: "DELETE"
          }), h.customRoles = h.customRoles.filter(t => t.id !== e), ie(), R("Custom role deleted."), 
          await J({
            preserveLoading: !0
          });
        } catch (a) {
          R(a.message || "The custom role could not be deleted.", "error");
        }
      }(c);
      const d = t.target.closest("[data-owner-global-app-delete]")?.dataset.ownerGlobalAppDelete;
      if (d) return void async function(e) {
        const t = h.globalApps.find(t => t.id === e);
        if (t && await de({
          title: "Remove this app for everyone?",
          message: `${t.name} will disappear from the Nyx app catalog for every user.`,
          confirmLabel: "Remove app",
          danger: !0
        })) try {
          const t = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/apps/${encodeURIComponent(e)}`, {
            method: "DELETE"
          });
          h.globalApps = Array.isArray(t.apps) ? t.apps : h.globalApps.filter(t => t.id !== e), 
          ne(), ae(), R("App removed for everyone.");
        } catch (a) {
          R(a.message || "The app could not be removed.", "error");
        }
      }(d);
      const p = t.target.closest("[data-owner-unban]")?.dataset.ownerUnban;
      if (p) return void async function(e) {
        const t = h.ipBans.find(t => t.id === e);
        if (t && await de({
          title: "Unblock this IP address?",
          message: `${t.ip} will regain access to Nyx server requests.`,
          confirmLabel: "Unblock",
          requireText: t.ip
        })) try {
          await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ip-bans/${encodeURIComponent(e)}`, {
            method: "DELETE"
          }), h.ipBans = h.ipBans.filter(t => t.id !== e), W(), R("IP address unblocked."), 
          await J({
            preserveLoading: !0
          });
        } catch (a) {
          R(a.message || "The IP address could not be unblocked.", "error");
        }
      }(p);
      const m = t.target.closest("[data-owner-segment]")?.dataset.ownerSegment;
      if (m) {
        M("users"), h.segment = m, h.search = "", h.role = "all", h.subscription = "all", 
        h.status = "all", h.page = 1;
        const e = w.querySelector("[data-owner-filters]");
        return e.elements.search.value = "", e.elements.role.value = "all", e.elements.subscription.value = "all", 
        e.elements.status.value = "all", void J();
      }
      if (t.target.closest("[data-owner-online-only]")) return h.segment = "", h.status = "online" === h.status ? "all" : "online", 
      w.querySelector('[name="status"]').value = h.status, h.page = 1, void J();
      const y = t.target.closest("[data-owner-sort]")?.dataset.ownerSort;
      if (y) return h.sort === y ? h.direction = "asc" === h.direction ? "desc" : "asc" : (h.sort = y, 
      h.direction = "asc"), void J({
        preserveLoading: !0
      });
      const b = t.target.closest("[data-owner-page]")?.dataset.ownerPage;
      if (b) return h.page = Number(b) || 1, void J({
        preserveLoading: !0
      });
      const f = t.target.closest("[data-owner-search-history]")?.dataset.ownerSearchHistory;
      if (f) {
        const e = (h.data?.users || []).find(e => e.uid === f);
        if (e) return void le(e);
      }
      const v = t.target.closest("[data-owner-clear-search-history]")?.dataset.ownerClearSearchHistory;
      if (v && h.selectedUser?.uid === v) return void async function(e) {
        if (!e || e.guest) return;
        if (!await de({
          title: "Clear this search history?",
          message: `All retained Nyx searches for ${e.displayName} will be permanently deleted. This cannot be undone.`,
          confirmLabel: "Clear history",
          danger: !0
        })) return;
        const t = N.querySelector("[data-owner-clear-search-history]");
        t && (t.disabled = !0);
        try {
          const t = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/moderation/search-history?uid=${encodeURIComponent(e.uid)}`, {
            method: "DELETE"
          });
          R(`${Number(t.deletedCount || 0).toLocaleString()} search${1 === Number(t.deletedCount || 0) ? "" : "es"} cleared.`), 
          await le(e);
        } catch (a) {
          R(a.message || "Search history could not be cleared.", "error"), t?.isConnected && (t.disabled = !1);
        }
      }(h.selectedUser);
      const g = t.target.closest("[data-owner-view-user]")?.dataset.ownerViewUser;
      if (g) return void X(g);
      if (t.target.closest("[data-owner-drawer-close]")) return ce();
      const $ = t.target.closest("[data-owner-role-option]")?.dataset.ownerRoleOption;
      if ($) {
        const e = N.querySelector("[data-owner-detail-role]");
        if (!e || e.disabled) return;
        return e.value = $, void l(N, $);
      }
      const x = t.target.closest("[data-owner-ai-activity]");
      if (x) return void async function(t) {
        const a = h.selectedUser?.uid, n = N.querySelector("[data-owner-ai-activity-result]");
        if (a && n) {
          t.disabled = !0, n.textContent = "Loading AI activity...";
          try {
            const t = await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(a)}/ai`);
            if (h.selectedUser?.uid !== a || !n.isConnected) return;
            n.innerHTML = `<h3>Usage</h3><p>Shared allowance today: ${Number(t.today?.requests) || 0} requests, ${Number(t.today?.tokens) || 0} tokens charged or reserved.</p><p>Completed provider calls recorded since this feature was enabled. Missing token reports are listed separately.</p>${Object.entries(t.models || {}).map(([t, a]) => `<p><strong>${e(t)}</strong><br>${Number(a.requests) || 0} calls &middot; ${Number(a.input) || 0} input tokens &middot; ${Number(a.output) || 0} output tokens${a.unknownUsage ? " &middot; " + Number(a.unknownUsage) + " calls without token reports" : ""}</p>`).join("") || "<p>No recorded usage yet.</p>"}${t.pool ? `<p>Shared pool: ${Number(t.pool.used) || 0} tokens used &middot; resets ${e(u(t.pool.resetAt))}</p>` : ""}${(t.limits || []).map(t => `<p>${e(t.model)}: ${t.used} / ${t.messages ?? "no extra cap"} messages &middot; ${t.resetAt ? "resets " + e(u(t.resetAt)) : "period starts on first use"}</p>`).join("")}<h3>Recent chat history</h3><p>Up to 50 recent text exchanges. Older device-only chats, temporary chats, images and attachments are not available here. Long messages may be shortened.</p>${(t.entries || []).map(t => `<details class="nyx-owner-ai-exchange"><summary>${e(u(t.at))} &middot; ${e(t.model)}</summary><h4>User</h4><pre>${e(t.prompt)}</pre><h4>Assistant</h4><pre>${e(t.answer || "(No text reply)")}</pre>${t.truncated ? "<p>Long text shortened.</p>" : ""}</details>`).join("") || "<p>No saved exchanges yet.</p>"}`;
          } catch (o) {
            n.textContent = o.message;
          } finally {
            t.isConnected && (t.disabled = !1);
          }
        }
      }(x);
      if (t.target.closest("[data-owner-save-ai-models]")) {
        const e = [ ...N.querySelectorAll("[data-ai-model]") ].map(e => ({
          model: e.dataset.aiModel,
          access: e.querySelector("[data-ai-rule-access]").value,
          messages: "" === e.querySelector("[data-ai-rule-messages]").value.trim() ? null : Number(e.querySelector("[data-ai-rule-messages]").value),
          periodDays: Number(e.querySelector("[data-ai-rule-days]").value)
        })).filter(e => "default" !== e.access || null !== e.messages);
        return e.some(e => null !== e.messages && (!Number.isSafeInteger(e.messages) || e.messages < 0 || e.messages > 1e5) || !Number.isInteger(e.periodDays) || e.periodDays < 1 || e.periodDays > 30) ? R("Use whole numbers: 0-100000 messages and 1-30 reset days.", "error") : void pe("set_ai_models", {
          modelRules: e
        });
      }
      if (t.target.closest("[data-owner-save-ai-limit]")) {
        const e = Object.fromEntries([ "luna", "gemini" ].map(e => [ e, Number(N.querySelector(`[data-owner-ai-limit="${e}"]`).value) ]));
        return Object.values(e).some(e => !Number.isSafeInteger(e) || e < 0 || e > 1e7) ? R("Enter valid token limits.", "error") : void pe("set_ai_limit", {
          monthlyModelLimits: e
        });
      }
      const S = t.target.closest("[data-owner-user-action]")?.dataset.ownerUserAction;
      if (S) pe(S); else if (t.target.closest("[data-owner-save-access]")) {
        const e = N.querySelector("[data-owner-detail-role]"), t = N.querySelector("[data-owner-detail-subscription]"), a = N.querySelector("[data-owner-detail-revenue]"), n = e?.value || (h.selectedUser?.customRole ? `custom:${h.selectedUser.customRole.id}` : h.selectedUser?.role), r = t?.value || h.selectedUser?.subscriptionStatus, s = a ? Math.round(100 * (Number(a.value) || 0)) : h.selectedUser?.monthlyRevenueCents, i = h.selectedUser?.customRole ? `custom:${h.selectedUser.customRole.id}` : h.selectedUser?.role, l = Boolean(e && n !== i), c = Boolean(t && (r !== h.selectedUser?.subscriptionStatus || s !== h.selectedUser?.monthlyRevenueCents));
        return void (async () => {
          if (l) {
            const e = n.startsWith("custom:") ? h.customRoles.find(e => e.id === n.slice(7)) : null, t = e?.label || o(n);
            if (!await de({
              title: "Change account role?",
              message: `${h.selectedUser.email || h.selectedUser.displayName} will become ${t}.`,
              confirmLabel: "Change role"
            })) return;
            e ? (await E(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(e.id)}/assign`, {
              method: "POST",
              body: JSON.stringify({
                uid: h.selectedUser.uid
              })
            }), R(`${e.label} assigned.`), await X(h.selectedUser.uid), await J({
              preserveLoading: !0
            })) : await pe("set_role", {
              role: n
            });
          }
          c && await pe("set_subscription", {
            subscriptionStatus: r,
            monthlyRevenueCents: s
          }), l || c || R("No access changes to save.", "error");
        })();
      }
    }), w.addEventListener("change", function(e) {
      if (e.target.matches(".nyx-owner-media-input")) {
        const t = e.target, a = t.closest("[data-owner-profile-form]"), n = "avatarFile" === t.name ? "avatar" : "banner", o = t.files?.[0], r = a?.querySelector(`[data-owner-media-name="${n}"]`), s = a?.querySelector(`[data-owner-media-preview="${n}"]`), i = a?.querySelector("[data-owner-media-error]");
        if (t._nyxOwnerDataUrl = "", t._nyxOwnerMediaError = null, !o) return;
        r && (r.textContent = `Preparing ${o.name}...`), i && (i.textContent = "");
        const l = a?.querySelector(`[name="remove${n[0].toUpperCase()}${n.slice(1)}"]`);
        l && (l.checked = !1);
        const c = async function(e, t, a) {
          if (!e || !/^image\/(?:png|jpe?g|webp|gif)$/i.test(String(e.type || ""))) throw new Error("Choose a PNG, JPG, WebP, or GIF image.");
          if (e.size > 8388608) throw new Error("Choose an image smaller than 8 MB.");
          if (/^image\/gif$/i.test(String(e.type || ""))) {
            const t = await e.slice(0, 6).text();
            if (!/^GIF8[79]a$/.test(t)) throw new Error("That file is not a valid GIF.");
            const a = await function(e) {
              return new Promise((t, a) => {
                const n = new FileReader;
                n.onload = () => t(String(n.result || "")), n.onerror = () => a(new Error("That GIF could not be opened.")), 
                n.readAsDataURL(e);
              });
            }(e);
            if (!/^data:image\/gif;base64,/i.test(a) || a.length > y) throw new Error("Choose a valid GIF smaller than 8 MB.");
            return a;
          }
          const n = URL.createObjectURL(e);
          try {
            const e = await new Promise((e, t) => {
              const a = new Image;
              a.onload = () => e(a), a.onerror = () => t(new Error("That image could not be opened.")), 
              a.src = n;
            });
            let o = Math.min(1, t / Math.max(1, e.naturalWidth), a / Math.max(1, e.naturalHeight));
            for (let t = 0; t < 4; t += 1) {
              const a = document.createElement("canvas");
              a.width = Math.max(1, Math.round(e.naturalWidth * o)), a.height = Math.max(1, Math.round(e.naturalHeight * o)), 
              a.getContext("2d").drawImage(e, 0, 0, a.width, a.height);
              const n = a.toDataURL("image/webp", Math.max(.52, .86 - .1 * t));
              if (n.length <= 85e4) return n;
              o *= .72;
            }
            throw new Error("That image is too detailed to save. Try a smaller image.");
          } finally {
            URL.revokeObjectURL(n);
          }
        }(o, "avatar" === n ? 512 : 1200, "avatar" === n ? 512 : 480);
        return t._nyxOwnerPreparation = c, void c.then(e => {
          t._nyxOwnerPreparation === c && (t._nyxOwnerDataUrl = e, r && (r.textContent = o.name), 
          s && (s.innerHTML = `<img src="${e}" alt="Selected ${n}">`));
        }).catch(e => {
          t._nyxOwnerPreparation === c && (t._nyxOwnerMediaError = e, t.value = "", r && (r.textContent = "Choose a different image"), 
          i && (i.textContent = e.message || "That image could not be used."));
        }).finally(() => {
          t._nyxOwnerPreparation === c && (t._nyxOwnerPreparation = null);
        });
      }
      if (e.target.matches("[data-owner-page-size]")) return h.pageSize = Number(e.target.value) || 25, 
      h.page = 1, void J();
      e.target.closest("[data-owner-filters]") && ("role" === e.target.name && (h.role = e.target.value), 
      "subscription" === e.target.name && (h.subscription = e.target.value), "status" === e.target.name && (h.status = e.target.value), 
      "search" !== e.target.name && (h.segment = "", h.page = 1, J()));
    }), w.addEventListener("input", function(e) {
      !function(e) {
        const t = e.target.closest('[name="color"], [data-owner-custom-role-color-picker]'), a = t?.closest(".nyx-owner-custom-role-color-control");
        if (a) {
          const e = {
            0: "#000000",
            1: "#0000aa",
            2: "#00aa00",
            3: "#00aaaa",
            4: "#aa0000",
            5: "#aa00aa",
            6: "#ffaa00",
            7: "#aaaaaa",
            8: "#555555",
            9: "#5555ff",
            a: "#55ff55",
            b: "#55ffff",
            c: "#ff5555",
            d: "#ff55ff",
            e: "#ffff55",
            f: "#ffffff"
          }, n = a.querySelector('[name="color"]'), o = a.querySelector("[data-owner-custom-role-color-picker]");
          t === o && n && (n.value = o.value);
          const r = String(n?.value || "").trim().toLowerCase(), s = /^#[0-9a-f]{6}$/.test(r) ? r : e[r.match(/^&([0-9a-f])$/)?.[1]];
          s && o && o.value !== s && (o.value = s);
        }
      }(e), "search" === e.target.name && e.target.closest("[data-owner-filters]") && (clearTimeout(h.searchTimer), 
      h.searchTimer = setTimeout(() => {
        h.segment = "", h.search = e.target.value.trim(), h.page = 1, J();
      }, 280));
    }), w.addEventListener("submit", function(e) {
      const t = e.target.closest("[data-owner-studyready-form]");
      if (t) {
        if (e.preventDefault(), !t.reportValidity()) return;
        const a = t.querySelector("[type=submit]");
        a.disabled = !0;
        const n = new FormData(t);
        return void E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/studyready", {
          method: "POST",
          body: JSON.stringify({
            hostname: n.get("hostname"),
            title: n.get("title")
          })
        }).then(e => {
          K = e, ee(), R("StudyReady domain saved.");
        }).catch(e => R(e.message, "error")).finally(() => {
          a.isConnected && (a.disabled = !1);
        });
      }
      const a = e.target.closest("[data-owner-global-app-form]");
      if (a) {
        if (e.preventDefault(), !a.reportValidity()) return;
        const t = a.querySelector('[type="submit"]');
        return t.disabled = !0, void (async () => {
          try {
            const e = new FormData(a), t = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/apps", {
              method: "POST",
              body: JSON.stringify({
                name: e.get("name"),
                url: e.get("url")
              })
            });
            h.globalApps = Array.isArray(t.apps) ? t.apps : [ ...h.globalApps, t.app ], ne(), 
            ae(), R("App added for everyone.");
          } catch (e) {
            R(e.message || "The app could not be added.", "error");
          }
        })().finally(() => {
          t.isConnected && (t.disabled = !1);
        });
      }
      const n = e.target.closest("[data-owner-custom-role-create], [data-owner-custom-role-update]");
      if (n) {
        if (e.preventDefault(), !n.reportValidity()) return;
        const t = new FormData(n), a = n.dataset.ownerCustomRoleUpdate || "", o = {
          label: t.get("label"),
          color: t.get("color"),
          baseRole: t.get("baseRole"),
          permissions: t.getAll("permissions")
        };
        a || (o.id = t.get("id"));
        const r = n.querySelector('[type="submit"]');
        return r.disabled = !0, void (async () => {
          try {
            const e = await E(a ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(a)}` : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles", {
              method: a ? "PATCH" : "POST",
              body: JSON.stringify(o)
            });
            h.customRoles = a ? h.customRoles.map(t => t.id === a ? e.role : t) : [ ...h.customRoles, e.role ], 
            h.customRoles.sort((e, t) => Number(t.rank || 0) - Number(e.rank || 0) || e.label.localeCompare(t.label)), 
            h.customRoleEditorId = "", ie(), R(a ? "Custom role updated." : "Custom role created."), 
            await J({
              preserveLoading: !0
            });
          } catch (e) {
            R(e.message || "The custom role could not be saved.", "error");
          }
        })().finally(() => {
          r.isConnected && (r.disabled = !1);
        });
      }
      const o = e.target.closest("[data-owner-ip-ban-form]");
      if (o) {
        if (e.preventDefault(), !o.reportValidity()) return;
        const t = o.querySelector('[type="submit"]');
        return t.disabled = !0, void (async () => {
          try {
            const e = new FormData(o), t = await E("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ip-bans", {
              method: "POST",
              body: JSON.stringify({
                ip: e.get("ip"),
                reason: e.get("reason")
              })
            });
            h.ipBans = [ t.ban, ...h.ipBans.filter(e => e.id !== t.ban.id) ], W(), R("IP address blocked."), 
            await J({
              preserveLoading: !0
            });
          } catch (e) {
            R(e.message || "The IP address could not be blocked.", "error");
          }
        })().finally(() => {
          t.isConnected && (t.disabled = !1);
        });
      }
      const r = e.target.closest("[data-owner-profile-form]");
      if (!r) return;
      if (e.preventDefault(), !r.reportValidity()) return;
      const s = r.querySelector('[type="submit"]');
      s.disabled = !0;
      const i = s.textContent;
      (async () => {
        try {
          const e = [ ...r.querySelectorAll(".nyx-owner-media-input") ], t = e.map(e => e._nyxOwnerPreparation).filter(Boolean);
          t.length && (s.textContent = "Preparing media\u2026", await Promise.all(t));
          const a = e.find(e => e._nyxOwnerMediaError)?._nyxOwnerMediaError;
          if (a) throw a;
          const n = new FormData(r), o = {
            displayName: n.get("displayName"),
            handle: n.get("handle"),
            bio: n.get("bio"),
            customStatus: n.get("customStatus"),
            status: n.get("status"),
            accentPrimary: n.get("accentPrimary"),
            accentSecondary: n.get("accentSecondary"),
            bannerColor: n.get("bannerColor"),
            displayNameFont: n.get("displayNameFont"),
            displayNameEffect: n.get("displayNameEffect"),
            profileEffect: n.get("profileEffect"),
            avatarDecoration: n.get("avatarDecoration")
          }, i = {
            avatar: "on" === n.get("removeAvatar"),
            banner: "on" === n.get("removeBanner")
          };
          for (const l of [ "avatar", "banner" ]) {
            const e = r.querySelector(`[name="${l}File"]`), t = String(n.get(`${l}Url`) || "").trim();
            if (e?.files?.[0]) {
              if (!e._nyxOwnerDataUrl) throw new Error(`The selected ${l} is not ready. Choose it again.`);
              i[l] = !1, s.textContent = `Uploading ${l}\u2026`, o[`${l}Url`] = await G(h.selectedUser.uid, l, e._nyxOwnerDataUrl, e => {
                s.textContent = `Uploading ${l} ${e}%`;
              });
            } else t && (o[`${l}Url`] = t);
          }
          s.textContent = "Saving\u2026", await pe("set_profile", {
            profile: o,
            removeAvatar: i.avatar,
            removeBanner: i.banner
          });
        } catch (e) {
          const t = r.querySelector("[data-owner-media-error]");
          t && (t.textContent = e.message || "Profile media could not be saved."), R(e.message || "Profile media could not be saved.", "error");
        }
      })().finally(() => {
        s.isConnected && (s.disabled = !1, s.textContent = i);
      });
    }), window.addEventListener("nyx:presence", be), document.addEventListener("keydown", me), 
    V(), J(), {
      overlay: w,
      destroy: ye,
      refresh: J
    };
  }
  globalThis.NyxOwnerDashboard = Object.freeze({
    open: e => ($(), g = S(e), g),
    close: $
  });
})();
