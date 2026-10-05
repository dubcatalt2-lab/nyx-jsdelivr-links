(() => {
  "use strict";
  const e = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker", t = "nyx.linkChecker.history.v1", n = "nyx.linkChecker.settings.v1", r = "nyx.linkChecker.freedns.v1", a = "nyx.linkChecker.freednsVerdicts.v1", o = 3e5, s = [ "theme-default", "theme-ruby", "theme-emerald", "theme-sakura", "theme-fresh" ], i = e => document.querySelector(e), d = e => [ ...document.querySelectorAll(e) ], c = {
    form: i("[data-check-form]"),
    input: i("[data-url-input]"),
    filter: i("[data-filter-select]"),
    button: i("[data-check-button]"),
    apiStatus: i("[data-api-status]"),
    notice: i("[data-notice]"),
    resultsSection: i("[data-results-section]"),
    resultsTitle: i("[data-results-title]"),
    resultList: i("[data-result-list]"),
    domainSection: i("[data-domain-section]"),
    domainTitle: i("[data-domain-title]"),
    domainSource: i("[data-domain-source]"),
    domainDetails: i("[data-domain-details]"),
    dashboardList: i("[data-dashboard-list]"),
    dashboardEmpty: i("[data-dashboard-empty]"),
    dashboardPager: i("[data-dashboard-pager]"),
    historyList: i("[data-history-list]"),
    historyEmpty: i("[data-history-empty]"),
    freednsStart: i("[data-freedns-start]"),
    freednsCheckAll: i("[data-freedns-check-all]"),
    freednsCheckPage: i("[data-freedns-check-page]"),
    freednsGodDomains: i("[data-freedns-god-domains]"),
    freednsDoubleCheck: i("[data-freedns-double-check]"),
    freednsStop: i("[data-freedns-stop]"),
    freednsList: i("[data-freedns-list]"),
    freednsEmpty: i("[data-freedns-empty]"),
    freednsPager: i("[data-freedns-pager]"),
    freednsSearch: i("[data-freedns-search]"),
    freednsStatus: i("[data-freedns-status]"),
    freednsVendor: i("[data-freedns-vendor]"),
    freednsProgress: i("[data-freedns-progress]"),
    freednsDetail: i("[data-freedns-detail]"),
    freednsDetailTitle: i("[data-freedns-detail-title]"),
    freednsDetailLink: i("[data-freedns-detail-link]"),
    freednsDetailSummary: i("[data-freedns-detail-summary]"),
    freednsDetailMessage: i("[data-freedns-detail-message]"),
    freednsDetailVendors: i("[data-freedns-detail-vendors]"),
    freednsRegistration: i("[data-freedns-registration]"),
    freednsRegistrationSource: i("[data-freedns-registration-source]")
  }, l = {
    pageSize: 25,
    notifications: !0,
    theme: "inherit"
  };
  let u = U(n, l), m = U(t, []);
  Array.isArray(m) || (m = []);
  let h = [], f = null, p = null, g = "", b = 1, v = "", y = U(r, {
    domains: [],
    totalPages: 0,
    totalDomains: 0,
    lastScrapedAt: "",
    complete: !1
  });
  y && Array.isArray(y.domains) || (y = {
    domains: [],
    totalPages: 0,
    totalDomains: 0,
    lastScrapedAt: "",
    complete: !1
  });
  let k = 1, S = null, w = !1, E = null, C = !1, x = !1, L = !1, $ = 0, A = !1, N = null, D = {
    resolved: !1,
    premium: !1,
    expiresAt: 0,
    error: "",
    promise: null
  }, M = new Set, P = null;
  const T = U(a, {
    vendors: [],
    verdicts: {},
    updatedAt: ""
  });
  let O = Boolean(T?.verdicts && !Array.isArray(T?.values) && (T.updatedAt || Object.keys(T.verdicts).length)), j = function(e) {
    if (!e || !Array.isArray(e.vendors)) return {
      vendors: [],
      verdicts: {},
      updatedAt: ""
    };
    if (Array.isArray(e.values)) {
      const t = {};
      return e.values.forEach((e, n) => {
        const r = y.domains[n]?.domain;
        r && "string" == typeof e && e && (t[r] = e);
      }), {
        vendors: e.vendors.map(String),
        verdicts: t,
        updatedAt: String(e.updatedAt || "")
      };
    }
    return e.verdicts && "object" == typeof e.verdicts ? {
      vendors: e.vendors.map(String),
      verdicts: e.verdicts,
      updatedAt: String(e.updatedAt || "")
    } : {
      vendors: [],
      verdicts: {},
      updatedAt: ""
    };
  }(T);
  const R = new Set, I = B();
  function U(e, t) {
    try {
      const n = JSON.parse(localStorage.getItem(e) || "null");
      return null === n ? t : n;
    } catch {
      return t;
    }
  }
  function z(e, t) {
    try {
      return localStorage.setItem(e, JSON.stringify(t)), !0;
    } catch {
      return !1;
    }
  }
  function B({render: e = !1, notify: t = !1} = {}) {
    if (w || C || x) return !1;
    const n = Math.max(Date.parse(y.lastScrapedAt || "") || 0, Date.parse(j.updatedAt || "") || 0);
    if (!n || Date.now() - n < 288e5) return !1;
    y = {
      domains: [],
      totalPages: 0,
      totalDomains: 0,
      lastScrapedAt: "",
      complete: !1
    }, j = {
      vendors: [],
      verdicts: {},
      updatedAt: ""
    }, O = !1, k = 1, L = !1, $ = 0;
    try {
      localStorage.removeItem(r), localStorage.removeItem(a);
    } catch {}
    return e && Ue(), t && q("Cached FreeDNS domains and verdicts expired after eight hours and were removed from this device."), 
    !0;
  }
  function F() {
    if ("tutsi" === document.documentElement.dataset.appShell) return;
    document.body.classList.remove(...s);
    const e = "inherit" === u.theme ? function() {
      try {
        return localStorage.getItem("nyx.theme") || "default";
      } catch {
        return "default";
      }
    }() : u.theme;
    e && "default" !== e && document.body.classList.add(`theme-${e}`);
  }
  function q(e, t = "", n = !1) {
    if (!e) return c.notice.textContent = "", void (c.notice.hidden = !0);
    (n || "error" === t || u.notifications) && (c.notice.textContent = e, c.notice.className = "notice global-notice" + (t ? ` ${t}` : ""), 
    c.notice.hidden = !e);
  }
  function V(e) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = document.createElementNS("http://www.w3.org/2000/svg", "use");
    return t.setAttribute("class", "lc-icon"), t.setAttribute("aria-hidden", "true"), 
    n.setAttribute("href", `#icon-${e}`), t.append(n), t;
  }
  function G(e) {
    document.body.classList.toggle("loading", e), c.button.disabled = e, c.button.querySelector("span").textContent = e ? "Checking..." : "Check";
  }
  function J(e, t = (e ? "API online" : "API unavailable")) {
    c.apiStatus.classList.toggle("online", e), c.apiStatus.classList.toggle("offline", !e), 
    c.apiStatus.querySelector("span").textContent = t;
  }
  function K(e) {
    const t = String("string" == typeof e ? e : e?.filter || e?.key || "").trim().toLowerCase(), n = String("string" == typeof e ? e : e?.label || e?.filter || e?.key || "Filter"), r = {
      blocksi_ai: "Blocksi AI",
      cisco: "Cisco Umbrella",
      dnsfilter: "DNSFilter",
      fortiguard: "FortiGuard",
      goguardian: "GoGuardian",
      iboss: "iBoss",
      lanschool: "LanSchool",
      paloalto: "Palo Alto"
    };
    return r[t] ? r[t] : /^cisco talos$/i.test(n) ? "Cisco Umbrella" : n === t ? t.replace(/_/g, " ").replace(/\b\w/g, e => e.toUpperCase()) : n;
  }
  async function _(e, t = {}) {
    const n = await fetch(e, {
      ...t,
      headers: {
        Accept: "application/json",
        ...t.headers || {}
      }
    }), r = await n.text();
    let a = null;
    try {
      a = r ? JSON.parse(r) : null;
    } catch {
      const t = (() => {
        try {
          return new URL(e, location.href).pathname;
        } catch {
          return String(e);
        }
      })();
      throw new Error(`Nyx received a web page instead of API data from ${t}. Refresh Nyx and try again.`);
    }
    if (!n.ok) {
      let e = `Request failed (${n.status})`;
      e = a?.error || a?.message || e;
      const t = String(n.headers.get("retry-after") || "").trim(), r = /^\d+$/.test(t) ? 1e3 * Number(t) : Math.max(0, (Date.parse(t) || 0) - Date.now()), o = new Error(e);
      throw o.status = n.status, o.retryAfterMs = r, o;
    }
    if (null === a) throw new Error("Nyx received an empty API response.");
    return a;
  }
  function H(e, t) {
    const n = e?.vendors && "object" == typeof e.vendors ? e.vendors : {}, r = Object.entries(n).map(([e, t]) => ({
      filter: e,
      label: K(e),
      blocked: !0 === t?.blocked || !1 !== t?.blocked && null,
      category: String(t?.category || ""),
      error: String(t?.error || ""),
      ms: Number.isFinite(Number(t?.ms)) ? Number(t.ms) : null
    }));
    if (!r.length) throw new Error("The Link Checker returned no vendor results.");
    return {
      target: String(e?.host || new URL(t).hostname),
      url: t,
      blocked: !0 === e?.blocked,
      blockedBy: Array.isArray(e?.blockedBy) ? e.blockedBy.map(String) : r.filter(e => !0 === e.blocked).map(e => e.filter),
      cached: !0 === e?.cached,
      plan: String(e?.plan || ""),
      usage: e?.usage || null,
      results: r
    };
  }
  async function Y() {
    if (window.parent === window) return null;
    const e = `lc-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    return new Promise(t => {
      let n = !1;
      const r = e => {
        n || (n = !0, clearTimeout(o), window.removeEventListener("message", a), t(e));
      }, a = t => {
        t.source === window.parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data?.requestId === e && r({
          available: !0,
          token: String(t.data.token || "")
        });
      }, o = setTimeout(() => r(null), 2500);
      window.addEventListener("message", a), window.parent.postMessage({
        type: "nyx:account-token-request",
        requestId: e
      }, location.origin);
    });
  }
  async function Q(e = !1) {
    if (!e && D.resolved && D.expiresAt > Date.now()) return D;
    if (D.promise) return D.promise;
    const t = (async () => {
      const e = await async function() {
        const e = await Y();
        if (e?.available) return {
          currentUser: e.token ? {
            getIdToken: async () => String((await Y())?.token || "")
          } : null
        };
        N || (N = (async () => {
          const e = await _("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
            cache: "no-store"
          });
          if (!e?.enabled) throw new Error("Nyx account sign-in is not configured.");
          const [{initializeApp: t, getApps: n}, {getAuth: r, setPersistence: a, browserLocalPersistence: o}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), s = r(n().find(e => "nyx-founder-owner" === e.name) || t({
            apiKey: e.apiKey,
            authDomain: `${e.projectId}.firebaseapp.com`,
            projectId: e.projectId
          }, "nyx-founder-owner"));
          try {
            await a(s, o);
          } catch {}
          return "function" == typeof s.authStateReady && await s.authStateReady(), s;
        })());
        try {
          return await N;
        } catch (t) {
          throw N = null, t;
        }
      }();
      if (!e.currentUser) return {
        resolved: !0,
        premium: !1,
        expiresAt: Date.now() + o,
        error: "Sign in to Nyx to use Premium full scans.",
        auth: e
      };
      const t = await e.currentUser.getIdToken(), n = await _("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/me", {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${t}`
        }
      }), r = [ "owner", "co_owner", "admin", "manager", "developer", "moderator" ].includes(String(n?.role || "")), a = !0 === n?.premiumAccess || r;
      return {
        resolved: !0,
        premium: a,
        staffAccess: r,
        expiresAt: Date.now() + o,
        error: a ? "" : "Premium, Trial, or Moderator access is required to check all domains.",
        auth: e
      };
    })();
    D = {
      ...D,
      promise: t
    };
    try {
      return D = {
        ...await t,
        promise: null
      };
    } catch (n) {
      throw D = {
        resolved: !0,
        premium: !1,
        expiresAt: Date.now() + 3e4,
        error: n.message || "Premium access could not be checked.",
        promise: null
      }, n;
    } finally {
      Ee();
    }
  }
  async function W({force: e = !1} = {}) {
    const t = await Q(e);
    if (!t.auth?.currentUser) throw new Error(t.error || "Sign in to Nyx on the homepage before starting a full registry scan.");
    if (!t.premium) throw new Error(t.error || "Premium, Trial, or Moderator access is required to check all domains.");
    return t.auth.currentUser.getIdToken();
  }
  async function X(t, n = "", r, {bulk: a = !1} = {}) {
    const o = {
      "Content-Type": "application/json"
    };
    return a && (o.Authorization = `Bearer ${await W()}`), H(await _(`${e}/check`, {
      method: "POST",
      signal: r,
      headers: o,
      body: JSON.stringify({
        url: t,
        ...n ? {
          vendor: n
        } : {},
        ...a ? {
          bulk: !0
        } : {}
      })
    }), t);
  }
  function Z(e) {
    return e?.error ? {
      key: "error",
      label: "Error"
    } : !0 === e?.blocked ? {
      key: "blocked",
      label: "Blocked"
    } : !1 === e?.blocked ? {
      key: "allowed",
      label: "Allowed"
    } : {
      key: "info",
      label: "Unknown"
    };
  }
  function ee(e) {
    const t = {
      blocked: 0,
      allowed: 0,
      info: 0,
      error: 0
    };
    return (e?.results || []).forEach(e => {
      t[Z(e).key] += 1;
    }), t;
  }
  function te(e) {
    const t = ee(e);
    c.resultList.replaceChildren(), e.results.forEach(e => {
      const t = Z(e), n = document.createElement("article");
      n.className = `result-row ${t.key}`;
      const r = document.createElement("span");
      r.className = "result-dot", r.setAttribute("aria-hidden", "true");
      const a = document.createElement("div");
      a.className = "result-copy";
      const o = document.createElement("strong");
      o.textContent = e.label || K(e.filter);
      const s = document.createElement("span");
      s.textContent = e.error || e.category || "No category returned", a.append(o, s);
      const i = document.createElement("div");
      i.className = "result-meta";
      const d = document.createElement("span");
      d.className = "result-state", d.textContent = t.label;
      const l = document.createElement("span");
      l.className = "result-time", l.textContent = Number.isFinite(e.ms) ? `${Math.round(e.ms)} ms` : "\u2014", 
      i.append(d, l), n.append(r, a, i), c.resultList.append(n);
    }), Object.entries(t).forEach(([e, t]) => {
      const n = i(`[data-count-${e}]`);
      n && (n.textContent = String(t));
    }), c.resultsTitle.textContent = `Results for ${e.target}`;
    const n = i("[data-results-summary]");
    n && (n.textContent = e.blocked ? `Blocked by ${e.blockedBy.length} vendor${1 === e.blockedBy.length ? "" : "s"}${e.cached ? " \xb7 cached result" : ""}` : "Not blocked by any reporting vendor" + (e.cached ? " \xb7 cached result" : "")), 
    c.resultsSection.hidden = !1, p = e;
  }
  function ne(e, t) {
    return e.find(e => e.action === t)?.date || "";
  }
  function re(e) {
    if (!e) return "Not reported";
    const t = new Date(e);
    return Number.isNaN(t.getTime()) ? String(e) : t.toLocaleString();
  }
  function ae(e, t) {
    const n = document.createElement("article"), r = document.createElement("span"), a = document.createElement("strong");
    r.textContent = e, a.textContent = Array.isArray(t) ? t.join(", ") || "Not reported" : t || "Not reported", 
    n.append(r, a), c.domainDetails.append(n);
  }
  async function oe(t, n) {
    c.domainSection.hidden = !0;
    try {
      r = await _(`${e}/domain-info`, {
        method: "POST",
        signal: n,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: t
        })
      }), c.domainDetails.replaceChildren(), c.domainTitle.textContent = r.domain || "Domain details", 
      c.domainSource.textContent = r.source || "RDAP", ae("Registrar", r.registrar), ae("Created", re(ne(r.events || [], "registration"))), 
      ae("Updated", re(ne(r.events || [], "last changed"))), ae("Expires", re(ne(r.events || [], "expiration"))), 
      ae("Status", r.status), ae("DNSSEC", r.dnssec ? "Signed" : "Not reported as signed"), 
      ae("Nameservers", r.nameservers), c.domainSection.hidden = !1;
    } catch (a) {
      if ("AbortError" === a.name) return;
    }
    var r;
  }
  function se(e, n = "single", r = !0) {
    const a = {
      ...e,
      id: globalThis.crypto?.randomUUID?.() || `scan-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      checkedAt: (new Date).toISOString(),
      source: n
    };
    return m.unshift(a), m = m.slice(0, 500), z(t, m), r && Ue(), a;
  }
  async function ie(e) {
    let t;
    e?.preventDefault();
    try {
      t = function(e) {
        const t = String(e || "").trim();
        if (!t) throw new Error("Enter a website to check.");
        const n = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`;
        let r;
        try {
          r = new URL(n);
        } catch {
          throw new Error("Enter a valid website or URL.");
        }
        if (![ "http:", "https:" ].includes(r.protocol)) throw new Error("Only HTTP and HTTPS links can be checked.");
        return r.hash = "", r.href;
      }(c.input.value);
    } catch (n) {
      return q(n.message, "error", !0), void c.input.focus();
    }
    f?.abort(), f = new AbortController, g = t, c.resultsSection.hidden = !0, c.domainSection.hidden = !0, 
    q(""), G(!0);
    try {
      const e = await X(t, c.filter.value, f.signal);
      te(e), se(e, "single"), J(!0, e.plan ? `${h.length} vendors \xb7 ${e.plan}` : `${h.length} vendors ready`), 
      oe(t, f.signal), c.resultsSection.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
    } catch (n) {
      "AbortError" !== n.name && (q(`Check failed: ${n.message}`, "error", !0), J(!1, "Request failed"));
    } finally {
      G(!1);
    }
  }
  function de() {
    const e = new Map;
    return m.forEach(t => {
      const n = String(t.target || "").toLowerCase();
      n && !e.has(n) && e.set(n, t);
    }), [ ...e.values() ];
  }
  function ce(e, t = "") {
    if (t) return Z((e.results || []).find(e => e.filter === t)).key;
    const n = ee(e);
    return n.blocked ? "blocked" : n.allowed ? "allowed" : "unknown";
  }
  function le(e) {
    const t = ce(e), n = document.createElement("span");
    return n.className = `verdict-pill ${t}`, n.textContent = "blocked" === t ? "Blocked" : "allowed" === t ? "Allowed" : "Unknown", 
    n;
  }
  function ue() {
    const e = de();
    i("[data-stat-domains]").textContent = String(e.length), i("[data-stat-checks]").textContent = String(m.length);
    const t = e.filter(e => "blocked" === ce(e)).length;
    i("[data-stat-blocked]").textContent = String(t), i("[data-stat-vendors]").textContent = String(h.length);
    const n = i("[data-usage-bar]");
    n && (n.style.width = `${e.length ? Math.max(5, Math.round(t / e.length * 100)) : 0}%`);
    const r = function() {
      const e = String(i("[data-dashboard-search]")?.value || "").trim().toLowerCase(), t = i("[data-dashboard-vendor]")?.value || "", n = v;
      return de().filter(r => !(e && !`${r.target} ${r.url}`.toLowerCase().includes(e) || t && !(r.results || []).some(e => e.filter === t) || n && ce(r, t) !== n));
    }(), a = Number(u.pageSize) || 25, o = Math.max(1, Math.ceil(r.length / a));
    b = Math.min(Math.max(1, b), o);
    const s = r.slice((b - 1) * a, b * a);
    c.dashboardList.replaceChildren(), s.forEach(e => {
      const t = document.createElement("article");
      t.className = "domain-row";
      const n = document.createElement("div");
      n.className = "domain-identity";
      const r = document.createElement("strong");
      r.textContent = e.target;
      const a = document.createElement("span");
      a.textContent = e.url || e.target, n.append(r, a);
      const o = document.createElement("time");
      o.dateTime = e.checkedAt || "", o.textContent = re(e.checkedAt);
      const s = le(e), i = document.createElement("span");
      i.className = "domain-vendor-count", i.textContent = String(e.results?.length || 0);
      const d = document.createElement("button");
      d.className = "btn-secondary", d.type = "button", d.append(V("eye"), "Open"), d.addEventListener("click", () => Be(e)), 
      t.append(n, o, s, i, d), c.dashboardList.append(t);
    }), c.dashboardEmpty.hidden = r.length > 0, c.dashboardPager.hidden = r.length <= a, 
    i("[data-dashboard-page-label]").textContent = `Page ${b} of ${o} \xb7 ${r.length} domains`, 
    i("[data-dashboard-prev]").disabled = b <= 1, i("[data-dashboard-next]").disabled = b >= o;
  }
  function me(e) {
    const t = String(e?.domain || "").trim().toLowerCase();
    return t && /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(t) ? {
      id: String(e?.id || t),
      domain: t,
      status: "public" === e?.status ? "public" : "private",
      hosts: Math.max(0, Number(e?.hosts) || 0),
      owner: String(e?.owner || "").trim().slice(0, 100),
      added: String(e?.added || "").trim().slice(0, 40)
    } : null;
  }
  function he(e) {
    const t = new Map;
    let n = "";
    m.forEach(r => {
      String(r?.target || "").trim().toLowerCase() === e && (n || (n = r.checkedAt || ""), 
      (r.results || []).forEach(e => {
        const n = String(e?.filter || "");
        n && !t.has(n) && t.set(n, e);
      }));
    });
    const r = String(j.verdicts[e] || "");
    return r && !n && (n = j.updatedAt || ""), j.vendors.forEach((e, n) => {
      if (t.has(e)) return;
      const a = r[n];
      "a" === a ? t.set(e, {
        filter: e,
        blocked: !1
      }) : "b" === a ? t.set(e, {
        filter: e,
        blocked: !0
      }) : "e" === a ? t.set(e, {
        filter: e,
        blocked: null,
        error: "Stored vendor error"
      }) : "u" === a && t.set(e, {
        filter: e,
        blocked: null
      });
    }), {
      results: t,
      checkedAt: n
    };
  }
  function fe(e = h) {
    return e.map(String).join("\x1f");
  }
  function pe(e, t = null) {
    const n = String(j.verdicts[e] || "");
    if (n) {
      const e = (n.match(/a/g) || []).length, t = (n.match(/b/g) || []).length;
      return {
        allowed: e,
        blocked: t,
        unknown: n.length - e - t,
        checked: n.length
      };
    }
    if (t && !t.has(e)) return {
      allowed: 0,
      blocked: 0,
      unknown: 0,
      checked: 0
    };
    const r = [ ...he(e).results.values() ], a = r.filter(e => !1 === e?.blocked && !e?.error).length, o = r.filter(e => !0 === e?.blocked).length;
    return {
      allowed: a,
      blocked: o,
      unknown: r.length - a - o,
      checked: r.length
    };
  }
  function ge(e, t = e?.target) {
    fe(j.vendors) !== fe() && (j = {
      vendors: [ ...h ],
      verdicts: {},
      updatedAt: ""
    });
    const n = new Map((e?.results || []).map(e => [ String(e?.filter || ""), e ]));
    j.verdicts[String(t || "").toLowerCase()] = h.map(e => {
      const t = n.get(e);
      return t ? t.error ? "e" : !0 === t.blocked ? "b" : !1 === t.blocked ? "a" : "u" : "u";
    }).join(""), j.updatedAt = (new Date).toISOString();
  }
  function be() {
    const e = z(a, {
      version: 2,
      vendors: [ ...j.vendors ],
      values: y.domains.map(e => String(j.verdicts[e.domain] || "")),
      updatedAt: j.updatedAt
    });
    return e && (O = !1), e;
  }
  function ve(e, t) {
    const n = document.createElement("article"), r = document.createElement("span"), a = document.createElement("strong");
    r.textContent = e, a.textContent = String(t || "Not reported"), n.append(r, a), 
    c.freednsDetailSummary.append(n);
  }
  function ye(e) {
    const t = e?.results instanceof Map ? e.results : new Map((e?.results || []).map(e => [ String(e?.filter || ""), e ]));
    c.freednsDetailVendors.replaceChildren(), h.forEach(e => {
      const n = t.get(e), r = n ? Z(n) : {
        key: "unchecked",
        label: "Not checked"
      }, a = document.createElement("article");
      a.className = `freedns-detail-vendor ${r.key}`;
      const o = document.createElement("span");
      o.className = "freedns-detail-vendor-icon", o.append(V("blocked" === r.key ? "shield-x" : "allowed" === r.key ? "shield-check" : "shield-question"));
      const s = document.createElement("strong");
      s.textContent = K(e);
      const i = document.createElement("span");
      i.className = "freedns-detail-vendor-state", i.textContent = "allowed" === r.key ? "Unblocked" : "error" === r.key ? "Unknown" : r.label;
      const d = document.createElement("small");
      d.textContent = n?.error || n?.category || (n ? "Category not stored" : "Not checked"), 
      a.append(o, s, i, d), c.freednsDetailVendors.append(a);
    });
  }
  function ke() {
    P?.abort(), P = null, c.freednsDetail?.open && c.freednsDetail.close();
  }
  async function Se(t) {
    const n = he(t.domain);
    if (!n.results.size) return;
    P?.abort();
    const r = new AbortController;
    P = r;
    const {signal: a} = r;
    c.freednsDetailTitle.textContent = t.domain, c.freednsDetailLink.href = `https://${t.domain}/`, 
    c.freednsDetailSummary.replaceChildren(), ve("Subdomains", t.hosts.toLocaleString()), 
    ve("Owner", t.owner), ve("Added", t.added), ve("Status", t.status), ye(n), c.freednsDetailMessage.textContent = n.checkedAt ? `Saved results from ${re(n.checkedAt)}. Loading categories...` : "Saved compact results. Loading categories...", 
    c.freednsRegistrationSource.textContent = "RDAP", c.freednsRegistration.textContent = "Loading public registration details...", 
    c.freednsDetail.open || ("function" == typeof c.freednsDetail.showModal ? c.freednsDetail.showModal() : c.freednsDetail.setAttribute("open", ""));
    const o = `https://${t.domain}/`, s = X(o, "", a, {
      bulk: !0 === D.premium
    }).then(e => {
      a.aborted || P !== r || (ye(e), c.freednsDetailMessage.textContent = `All ${e.results.length} vendor details loaded${e.cached ? " from the provider cache" : ""}.`);
    }).catch(e => {
      "AbortError" === e.name || a.aborted || P !== r || (c.freednsDetailMessage.textContent = `Showing saved compact states. Categories could not be refreshed: ${e.message}`);
    }), i = _(`${e}/domain-info`, {
      method: "POST",
      signal: a,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: o
      })
    }).then(e => {
      a.aborted || P !== r || (c.freednsRegistrationSource.textContent = e.source || "RDAP", 
      c.freednsRegistration.textContent = function(e) {
        const t = [], n = (e, n) => {
          (Array.isArray(n) ? n : [ n ]).filter(Boolean).forEach(n => t.push(`${e}: ${n}`));
        };
        return n("Domain Name", e?.domain), n("Registry Domain ID", e?.handle), n("Registrar", e?.registrar), 
        n("Created", ne(e?.events || [], "registration")), n("Updated", ne(e?.events || [], "last changed")), 
        n("Expires", ne(e?.events || [], "expiration")), n("Domain Status", e?.status), 
        n("Name Server", e?.nameservers), n("DNSSEC", e?.dnssec ? "signedDelegation" : "unsigned"), 
        t.join("\n") || "No public registration details were reported for this domain.";
      }(e));
    }).catch(e => {
      "AbortError" === e.name || a.aborted || P !== r || (c.freednsRegistration.textContent = `Registration details unavailable: ${e.message}`);
    });
    await Promise.allSettled([ s, i ]);
  }
  function we() {
    const e = function() {
      const e = String(c.freednsSearch?.value || "").trim().toLowerCase(), t = c.freednsStatus?.value || "all", n = y.domains.filter(n => (!e || n.domain.includes(e)) && ("all" === t || n.status === t));
      if (!L) return n;
      const r = new Set(m.map(e => String(e?.target || "").trim().toLowerCase()).filter(Boolean));
      return n.map(e => ({
        entry: e,
        score: pe(e.domain, r)
      })).filter(e => e.score.checked > 0).sort((e, t) => t.score.allowed - e.score.allowed || e.score.blocked - t.score.blocked || e.score.unknown - t.score.unknown || t.score.checked - e.score.checked || Number("public" === t.entry.status) - Number("public" === e.entry.status) || t.entry.hosts - e.entry.hosts || e.entry.domain.localeCompare(t.entry.domain)).map(e => e.entry);
    }(), t = Math.max(1, Math.ceil(e.length / 25));
    return k = Math.min(Math.max(1, k), t), {
      domains: e,
      pages: t,
      visible: e.slice(25 * (k - 1), 25 * k)
    };
  }
  function Ee() {
    const e = w || C || x, t = w || C;
    c.freednsStart.disabled = e, c.freednsStart.querySelector("span").textContent = w ? "Scraping\u2026" : "Scrape registry", 
    c.freednsCheckAll.disabled = e || !h.length || !y.complete || !D.premium, c.freednsCheckAll.querySelector("span").textContent = x ? "Checking all\u2026" : D.resolved ? D.premium ? "Check all domains" : "Premium or Moderator" : "Checking access\u2026", 
    c.freednsCheckAll.title = D.premium ? "Check every cached domain with all vendors" : D.error || "Premium access is being checked.", 
    c.freednsCheckPage.disabled = e || !h.length || !we().visible.length, c.freednsCheckPage.querySelector("span").textContent = C ? "Checking\u2026" : "Check this page", 
    c.freednsGodDomains.disabled = !y.domains.length, c.freednsGodDomains.classList.toggle("active", L), 
    c.freednsGodDomains.setAttribute("aria-pressed", String(L)), c.freednsDoubleCheck.hidden = e || $ <= 0, 
    c.freednsDoubleCheck.disabled = e || !D.premium, c.freednsDoubleCheck.querySelector("span").textContent = `Double check (${$.toLocaleString()})`, 
    c.freednsDoubleCheck.title = D.premium ? "Retry only the domains still missing results" : D.error || "Premium, Trial, or Moderator access is required.", 
    c.freednsStop.hidden = !e, c.freednsSearch.disabled = t, c.freednsStatus.disabled = t, 
    c.freednsVendor.disabled = t, i("[data-freedns-clear]").disabled = e, i("[data-freedns-prev]").disabled = t || k <= 1, 
    i("[data-freedns-next]").disabled = t || k >= we().pages;
  }
  function Ce() {
    const {domains: e, pages: t, visible: n} = we();
    M = new Set(n.map(e => e.domain)), i("[data-freedns-count]").textContent = y.domains.length.toLocaleString(), 
    i("[data-freedns-pages]").textContent = y.totalPages ? String(y.totalPages) : "\u2014", 
    i("[data-freedns-public]").textContent = y.domains.filter(e => "public" === e.status).length.toLocaleString(), 
    i("[data-freedns-private]").textContent = y.domains.filter(e => "private" === e.status).length.toLocaleString(), 
    i("[data-freedns-updated]").textContent = y.lastScrapedAt ? `${y.complete ? "Updated" : "Partial scrape"} ${re(y.lastScrapedAt)} \xb7 clears after 8 hours` : "Not scraped on this device", 
    c.freednsList.replaceChildren(), n.forEach(e => {
      const t = document.createElement("article");
      t.className = "freedns-row";
      const n = document.createElement("div");
      n.className = "freedns-identity";
      const r = document.createElement("strong");
      r.textContent = e.domain;
      const a = document.createElement("span"), o = L ? pe(e.domain) : null;
      a.textContent = o ? `${o.allowed}/${o.checked} blockers unblocked \xb7 FreeDNS #${e.id}` : `FreeDNS #${e.id}`, 
      n.append(r, a);
      const s = document.createElement("span");
      s.className = "freedns-hosts", s.textContent = e.hosts.toLocaleString();
      const i = document.createElement("span");
      i.className = `freedns-status ${e.status}`, i.textContent = e.status;
      const d = he(e.domain), l = c.freednsVendor?.value || "", u = l ? [ l ] : h, m = document.createElement("div");
      if (m.className = "freedns-vendor-states", u.length) if (u.some(e => d.results.has(e))) u.forEach(e => m.append(function(e, t) {
        const n = t ? Z(t) : {
          key: "unchecked",
          label: "Not checked"
        }, r = document.createElement("span");
        return r.className = `freedns-vendor-icon ${n.key}`, r.title = `${K(e)}: ${n.label}`, 
        r.setAttribute("aria-label", r.title), r.append(V("blocked" === n.key ? "shield-x" : "allowed" === n.key ? "shield-check" : "shield-question")), 
        r;
      }(e, d.results.get(e)))); else {
        const e = document.createElement("span");
        e.className = "freedns-not-checked", e.textContent = "not checked", m.append(e);
      } else {
        const e = document.createElement("span");
        e.className = "freedns-not-checked", e.textContent = "vendors loading", m.append(e);
      }
      d.results.size > 0 ? (m.classList.add("has-details"), m.tabIndex = 0, m.setAttribute("role", "button"), 
      m.setAttribute("aria-label", `Open detailed blocker results for ${e.domain}`), m.title = "Open detailed results" + (d.checkedAt ? ` \xb7 checked ${re(d.checkedAt)}` : ""), 
      m.addEventListener("click", () => {
        Se(e);
      }), m.addEventListener("keydown", t => {
        "Enter" !== t.key && " " !== t.key || (t.preventDefault(), Se(e));
      })) : d.checkedAt && (m.title = `Last checked ${re(d.checkedAt)}`);
      const f = R.has(e.domain), p = document.createElement("button");
      p.className = "btn-secondary freedns-check-button" + (f ? " checking" : ""), p.type = "button", 
      p.disabled = f || x || C || w || !h.length, p.title = l ? `Check ${e.domain} with ${K(l)}` : `Check ${e.domain} with all vendors`, 
      p.setAttribute("aria-label", p.title), p.append(V("refresh")), p.addEventListener("click", () => {
        !async function(e) {
          if (R.has(e) || x || C || w) return;
          const t = c.freednsVendor?.value || "", n = new AbortController;
          R.add(e), Ce(), q("");
          try {
            const r = await X(`https://${e}/`, t, n.signal);
            se(r, "freedns"), q(t ? `${e} checked with ${K(t)}.` : `${e} checked across ${r.results.length} vendors.`);
          } catch (r) {
            "AbortError" !== r.name && q(`Could not check ${e}: ${r.message}`, "error", !0);
          } finally {
            R.delete(e), Ce();
          }
        }(e.domain);
      }), t.append(n, s, i, m, p), c.freednsList.append(t);
    }), c.freednsEmpty.querySelector("strong").textContent = L ? "No God Domains yet" : "No registry cache yet", 
    c.freednsEmpty.querySelector("span").textContent = L ? "Run a domain check or full scan to rank domains by unblocked vendors." : "Scrape FreeDNS to build a searchable local list.", 
    c.freednsEmpty.hidden = e.length > 0, c.freednsPager.hidden = e.length <= 25, i("[data-freedns-page-label]").textContent = `Page ${k} of ${t} \xb7 ${e.length.toLocaleString()} domains`, 
    i("[data-freedns-prev]").disabled = k <= 1, i("[data-freedns-next]").disabled = k >= t, 
    Ee();
  }
  function xe(e) {
    w = e, Ee();
  }
  function Le(e, t, n) {
    const r = t ? Math.min(100, Math.round(e / t * 100)) : 0;
    c.freednsProgress.hidden = !1, i("[data-freedns-progress-label]").textContent = `Scraping page ${e.toLocaleString()} of ${t.toLocaleString()}`, 
    i("[data-freedns-progress-count]").textContent = `${r}% \xb7 ${n.toLocaleString()} domains`, 
    i("[data-freedns-progress-bar]").style.width = `${r}%`, i("[data-freedns-progress-detail]").textContent = "The scrape runs one bounded page at a time so FreeDNS is not overloaded.";
  }
  function $e(e, t, n = 0) {
    const r = t ? Math.min(100, Math.round(e / t * 100)) : 0;
    c.freednsProgress.hidden = !1, i("[data-freedns-progress-label]").textContent = e >= t ? `Checked ${t.toLocaleString()} domains` : `Checking domain ${(e + 1).toLocaleString()} of ${t.toLocaleString()}`, 
    i("[data-freedns-progress-count]").textContent = `${r}%${n ? ` \xb7 ${n.toLocaleString()} failed` : ""}`, 
    i("[data-freedns-progress-bar]").style.width = `${r}%`, i("[data-freedns-progress-detail]").textContent = "Results are saved on this device as each domain finishes. You can stop without losing completed checks.";
  }
  function Ae(e, t, n = 0) {
    const r = t ? Math.min(100, Math.round(e / t * 100)) : 0;
    c.freednsProgress.hidden = !1, i("[data-freedns-progress-label]").textContent = e >= t ? `Checked all ${t.toLocaleString()} domains` : `Full scan: ${e.toLocaleString()} of ${t.toLocaleString()} domains`, 
    i("[data-freedns-progress-count]").textContent = `${r}%${n ? ` \xb7 ${n.toLocaleString()} failed` : ""}`, 
    i("[data-freedns-progress-bar]").style.width = `${r}%`, i("[data-freedns-progress-detail]").textContent = "Keep this tab open. Saved verdicts let a stopped full scan resume without repeating completed domains.";
  }
  function Ne(e, t) {
    return t.aborted ? Promise.reject(new DOMException("Stopped", "AbortError")) : new Promise((n, r) => {
      const a = setTimeout(n, e);
      t.addEventListener("abort", () => {
        clearTimeout(a), r(new DOMException("Stopped", "AbortError"));
      }, {
        once: !0
      });
    });
  }
  function De() {
    const e = z(r, y);
    return e && j.vendors.length && be(), e;
  }
  function Me() {
    S?.abort(), E?.abort();
  }
  function Pe() {
    if (w || C || x) q("Stop the active work before clearing the cache.", "error", !0); else if (y.domains.length && confirm("Clear the FreeDNS registry cache stored on this device?")) {
      y = {
        domains: [],
        totalPages: 0,
        totalDomains: 0,
        lastScrapedAt: "",
        complete: !1
      }, j = {
        vendors: [],
        verdicts: {},
        updatedAt: ""
      }, O = !1, k = 1, L = !1, $ = 0;
      try {
        localStorage.removeItem(r), localStorage.removeItem(a);
      } catch {}
      Ce(), q("Local FreeDNS registry cache and saved verdicts cleared.");
    }
  }
  function Te() {
    if (!y.domains.length) return void q("Scrape the FreeDNS registry before exporting it.", "error", !0);
    const e = [ [ "id", "domain", "status", "hostsInUse", "owner", "added" ], ...y.domains.map(e => [ e.id, e.domain, e.status, e.hosts, e.owner, e.added ]) ].map(e => e.map(qe).join(",")).join("\n"), t = new Blob([ e ], {
      type: "text/csv"
    }), n = URL.createObjectURL(t), r = document.createElement("a");
    r.href = n, r.download = `nyx-freedns-registry-${(new Date).toISOString().slice(0, 10)}.csv`, 
    r.click(), setTimeout(() => URL.revokeObjectURL(n), 1e3), q("FreeDNS registry CSV created.");
  }
  function Oe(e, t = "") {
    const n = he(e);
    return t ? !n.results.has(t) : !h.every(e => n.results.has(e));
  }
  async function je({automatic: t = !1} = {}) {
    if (w || C || x || !h.length) return;
    const n = c.freednsVendor?.value || "", r = we().visible.filter(e => Oe(e.domain, n));
    if (!r.length) return void (t || q("Every domain on this page already has results for the selected vendors."));
    E?.abort(), E = new AbortController;
    const {signal: a} = E;
    C = !0, r.forEach(e => R.add(e.domain)), Ee(), Ce(), q(""), $e(0, r.length), i("[data-freedns-progress-detail]").textContent = "Nyx is checking this page through the paid server session. The page will not pause between domains.";
    let o = 0, s = 0, d = null;
    try {
      const t = await _(`${e}/page-scan`, {
        method: "POST",
        signal: a,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          urls: r.map(e => `https://${e.domain}/`),
          ...n ? {
            vendor: n
          } : {}
        })
      });
      for (const e of Array.isArray(t.results) ? t.results : []) {
        if (a.aborted) throw new DOMException("Stopped", "AbortError");
        const t = new URL(e.url).hostname.toLowerCase();
        e.report ? se(H(e.report, e.url), "freedns", !1) : s += 1, R.delete(t), o += 1, 
        $e(o, r.length, s), Ce();
      }
      o < r.length && (s += r.length - o);
    } catch (l) {
      "AbortError" === l.name ? d = l : (d = l, s = r.length, o = r.length, $e(o, r.length, s));
    } finally {
      C = !1, R.clear(), Ue(), a.aborted || "AbortError" === d?.name ? q(`Page scan stopped after ${o.toLocaleString()} of ${r.length.toLocaleString()} domains. Completed results were saved.`) : d ? q(`The page scan could not finish: ${d.message}`, "error", !0) : q(`Page scan complete: ${o.toLocaleString()} domains checked${s ? `, ${s.toLocaleString()} failed` : ""}.`, s ? "error" : "", s > 0);
    }
  }
  async function Re() {
    if (w || C || x || !h.length) return;
    if (!y.complete) return void q("Finish scraping the FreeDNS registry before checking every domain.", "error", !0);
    try {
      await W({
        force: !0
      });
    } catch (b) {
      return void q(b.message, "error", !0);
    }
    const t = y.domains.length, n = y.domains.filter(e => {
      return t = e.domain, !(fe(j.vendors) === fe() && String(j.verdicts[t] || "").length === h.length);
      var t;
    });
    if (!n.length) return $ = 0, Ee(), q(`All ${t.toLocaleString()} cached FreeDNS domains already have saved vendor results.`), 
    void Ae(t, t);
    E?.abort(), E = new AbortController;
    const {signal: r} = E;
    x = !0, $ = 0, Ee(), q("");
    const a = t - n.length, o = new Set(n.map(e => e.domain));
    let s = 0, d = 0, c = Object.keys(j.verdicts).length, l = !1;
    Ae(a, t);
    const u = () => {
      if (!d) return !0;
      const e = be();
      return e && (d = 0, c = Object.keys(j.verdicts).length), e;
    }, m = async (t, n = {}) => {
      let a = 0;
      for (;!r.aborted; ) try {
        return await _(`${e}${t}`, {
          ...n,
          signal: r,
          headers: {
            Authorization: `Bearer ${await W()}`,
            ...n.headers || {}
          }
        });
      } catch (b) {
        if (r.aborted || "AbortError" === b.name) throw b;
        const t = Number(b.status);
        if (!([ 429, 502, 504 ].includes(t) || 503 === t && Number(b.retryAfterMs) > 0 || b instanceof TypeError)) throw b;
        a += 1;
        const n = Math.max(3e3, Math.min(6e4, Number(b.retryAfterMs) || 3e3 + 1e3 * a));
        i("[data-freedns-progress-detail]").textContent = "Nocturne is busy. Nyx is retrying automatically without stopping the full scan.", 
        await Ne(n, r);
      }
      throw new DOMException("Stopped", "AbortError");
    }, f = e => {
      const n = Math.max(0, Number(e?.checked) || 0), r = a + s;
      Ae(Math.max(r, Math.min(t, n)), t), i("[data-freedns-progress-detail]").textContent = `${r.toLocaleString()} saved verdicts loaded. Nocturne's server has checked ${n.toLocaleString()} in the current refresh.`;
    }, p = e => ({
      target: e.domain,
      url: `https://${e.domain}/`,
      results: Object.entries(e.vendors || {}).map(([e, t]) => ({
        filter: e,
        blocked: !0 === t?.blocked || !1 !== t?.blocked && null,
        category: String(t?.category || ""),
        error: String(t?.error || "")
      }))
    }), g = async (e = "Loading saved Nocturne verdicts") => {
      const n = (n, r, c) => {
        for (const e of Array.isArray(n.domains) ? n.domains : []) if (o.has(e.domain) && e.vendors && Object.keys(e.vendors).length && (ge(p(e), e.domain), 
        o.delete(e.domain), s += 1, d += 1, d >= 100 && !u())) throw l = !0, new Error("This browser could not save more verdicts.");
        Ae(a + s, t), i("[data-freedns-progress-detail]").textContent = `${e}: page ${r.toLocaleString()} of ${c.toLocaleString()} \xb7 ${(a + s).toLocaleString()} ready.`;
      }, c = await m("/full-scan/results?page=1"), h = Math.max(1, Number(c.totalPages) || 1);
      n(c, 1, h);
      for (let t = 2; t <= h && !r.aborted && o.size; t += 2) {
        const e = Array.from({
          length: Math.min(2, h - t + 1)
        }, (e, n) => t + n);
        (await Promise.all(e.map(e => m(`/full-scan/results?page=${e}`)))).forEach((t, r) => n(t, e[r], h));
      }
    };
    let b = null;
    try {
      if (await g(), !u()) throw new Error("This browser could not save more verdicts.");
      if (o.size) {
        let e = await m("/full-scan/start", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: "{}"
        }), t = !0 === e.running, n = 0;
        for (f(e); !r.aborted; ) {
          if (!0 === e.running) t = !0, n = 0; else if (n >= 2 && (t || !1 === e.started)) break;
          await Ne(2500, r), e = await m("/full-scan/status"), f(e), e.running || (n += 1);
        }
        r.aborted || await g("Importing refreshed Nocturne verdicts");
      }
    } catch (v) {
      "AbortError" !== v.name && (b = v);
    } finally {
      u() || (l = !0), $ = l || b || r.aborted ? 0 : o.size, x = !1, R.clear(), Ue(), 
      l ? q(`The full scan stopped because this browser could not save more verdicts. ${c.toLocaleString()} domain results remain saved.`, "error", !0) : b ? q(`The full scan could not finish: ${b.message}`, "error", !0) : r.aborted ? q("Nyx stopped watching the full scan. The Nocturne server job may continue; click Check all domains to reconnect and import its results.") : o.size ? q(`The server scan finished and imported ${s.toLocaleString()} new domains. ${o.size.toLocaleString()} ${1 === o.size ? "domain still needs" : "domains still need"} results; use Double check to retry only ${1 === o.size ? "that domain" : "those domains"}.`, "error", !0) : q(`Full scan complete: all ${t.toLocaleString()} cached domains have saved vendor results.`);
    }
  }
  async function Ie() {
    if (i('[data-view="scraper"]')?.hidden || A || w || C || x || !h.length) return;
    const e = we().visible;
    e.length && !e.some(e => !Oe(e.domain, "")) && (A = !0, await je({
      automatic: !0
    }));
  }
  function Ue() {
    ue(), c.historyList.replaceChildren(), m.forEach(e => {
      const t = document.createElement("article");
      t.className = "history-row";
      const n = document.createElement("time");
      n.dateTime = e.checkedAt || "", n.textContent = re(e.checkedAt);
      const r = document.createElement("span");
      r.className = "history-action", r.textContent = "check";
      const a = document.createElement("div"), o = document.createElement("strong");
      o.textContent = e.target;
      const s = document.createElement("span");
      s.textContent = e.url || e.target, a.append(o, s);
      const i = document.createElement("div");
      i.className = "history-result", i.append(le(e));
      const d = document.createElement("span");
      d.textContent = String(e.results?.length || 0), i.append(d);
      const l = document.createElement("button");
      l.className = "btn-secondary", l.type = "button", l.append(V("eye"), "View"), l.addEventListener("click", () => Be(e)), 
      t.append(n, r, a, i, l), c.historyList.append(t);
    }), c.historyEmpty.hidden = m.length > 0, Ce();
  }
  function ze(e) {
    d("[data-view]").forEach(t => {
      const n = t.dataset.view === e;
      t.hidden = !n, t.classList.toggle("active", n);
    }), d("[data-view-button]").forEach(t => t.classList.toggle("active", t.dataset.viewButton === e)), 
    i("[data-sidebar]")?.classList.remove("open");
    const t = i("[data-sidebar-shade]");
    t && (t.hidden = !0), window.scrollTo({
      top: 0,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    }), "scraper" === e && (Q(!0).catch(() => {}), Ie());
  }
  function Be(e) {
    g = e.url || e.target, c.input.value = g, te(e), c.domainSection.hidden = !0, ze("checker");
    const t = new AbortController;
    oe(g, t.signal);
  }
  async function Fe() {
    if (!p) return;
    const e = [ `Link Checker report for ${p.target}` ];
    p.results.forEach(t => {
      const n = Z(t);
      e.push(`${t.label || K(t.filter)}: ${n.label}${t.category ? ` \u2014 ${t.category}` : ""}`);
    });
    try {
      await navigator.clipboard.writeText(e.join("\n")), q("Report copied to the clipboard.");
    } catch {
      q("Clipboard access was unavailable.", "error", !0);
    }
  }
  function qe(e) {
    const t = String(e ?? "");
    return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
  }
  function Ve() {
    m.length && confirm("Clear all Link Checker history stored on this device?") && (m = [], 
    z(t, m), Ue(), q("Local scan history cleared."));
  }
  function Ge() {
    z(n, u), F(), ue();
  }
  u = {
    ...l,
    ...u
  };
  const Je = O && !be();
  F(), function() {
    i("[data-back-to-nyx]").addEventListener("click", e => {
      window.parent !== window && (e.preventDefault(), window.parent.postMessage({
        type: "nyx:close-tab"
      }, location.origin));
    }), c.form.addEventListener("submit", ie), i("[data-copy-results]").addEventListener("click", Fe), 
    i("[data-recheck]").addEventListener("click", () => {
      g && (c.input.value = g, ie());
    }), d("[data-view-button]").forEach(e => e.addEventListener("click", () => ze(e.dataset.viewButton))), 
    i("[data-dashboard-search-form]").addEventListener("submit", e => {
      e.preventDefault(), b = 1, ue();
    }), i("[data-dashboard-search]").addEventListener("input", () => {
      b = 1, ue();
    }), i("[data-dashboard-vendor]").addEventListener("change", () => {
      b = 1, ue();
    }), d("[data-dashboard-verdict]").forEach(e => e.addEventListener("click", () => {
      v = e.dataset.dashboardVerdict || "", d("[data-dashboard-verdict]").forEach(t => t.classList.toggle("active", t === e)), 
      b = 1, ue();
    })), i("[data-dashboard-prev]").addEventListener("click", () => {
      b -= 1, ue();
    }), i("[data-dashboard-next]").addEventListener("click", () => {
      b += 1, ue();
    }), c.freednsStart.addEventListener("click", () => {
      !async function() {
        if (w) return;
        A = !1, $ = 0, S?.abort(), S = new AbortController;
        const t = S.signal;
        xe(!0), q("");
        const n = new Map;
        let r = 1, a = 0, o = 0;
        try {
          for (let i = 1; i <= r; i += 1) {
            const s = await _(`${e}/freedns-registry?page=${i}`, {
              signal: t
            });
            1 === i && (r = Math.max(1, Math.min(500, Number(s.totalPages) || 1)), a = Math.max(0, Number(s.totalDomains) || 0)), 
            (Array.isArray(s.domains) ? s.domains : []).forEach(e => {
              const t = me(e);
              t && n.set(t.id, t);
            }), o = i, Le(i, r, n.size), 1 !== i && i % 10 != 0 && i !== r || (y = {
              domains: [ ...n.values() ],
              totalPages: r,
              totalDomains: a,
              lastScrapedAt: (new Date).toISOString(),
              complete: i === r
            }, Ce()), i < r && await Ne(175, t);
          }
          y = {
            domains: [ ...n.values() ],
            totalPages: r,
            totalDomains: a,
            lastScrapedAt: (new Date).toISOString(),
            complete: !0
          };
          const s = De();
          Ce(), q(s ? `FreeDNS scrape complete: ${y.domains.length.toLocaleString()} domains cached on this device.` : "The scrape completed, but this browser could not save the registry cache.", s ? "" : "error", !s);
        } catch (s) {
          n.size && (y = {
            domains: [ ...n.values() ],
            totalPages: r,
            totalDomains: a,
            lastScrapedAt: (new Date).toISOString(),
            complete: !1
          }, De(), Ce()), "AbortError" === s.name ? q(`FreeDNS scrape stopped after ${o.toLocaleString()} pages. The partial cache was saved.`) : q(`FreeDNS scrape failed on page ${(o + 1).toLocaleString()}: ${s.message}`, "error", !0);
        } finally {
          xe(!1), y.complete && Ie();
        }
      }();
    }), c.freednsCheckAll.addEventListener("click", () => {
      Re();
    }), c.freednsCheckPage.addEventListener("click", () => {
      je();
    }), c.freednsGodDomains.addEventListener("click", () => {
      L = !L, k = 1, Ce();
    }), c.freednsDoubleCheck.addEventListener("click", () => {
      Re();
    }), c.freednsStop.addEventListener("click", Me), c.freednsSearch.addEventListener("input", () => {
      k = 1, Ce();
    }), c.freednsStatus.addEventListener("change", () => {
      k = 1, Ce();
    }), c.freednsVendor.addEventListener("change", Ce), i("[data-freedns-export]").addEventListener("click", Te), 
    i("[data-freedns-clear]").addEventListener("click", Pe), i("[data-freedns-prev]").addEventListener("click", () => {
      k -= 1, Ce();
    }), i("[data-freedns-next]").addEventListener("click", () => {
      k += 1, Ce();
    }), i("[data-freedns-detail-close]").addEventListener("click", ke), c.freednsDetail.addEventListener("click", e => {
      e.target === c.freednsDetail && ke();
    }), c.freednsDetail.addEventListener("close", () => {
      P?.abort(), P = null;
    }), d("[data-export]").forEach(e => e.addEventListener("click", () => function(e) {
      if (!m.length) return void q("There is no scan data to export.", "error", !0);
      const t = m.map(e => ({
        checkedAt: e.checkedAt,
        source: e.source,
        url: e.url,
        target: e.target,
        verdict: ce(e),
        blockedBy: (e.blockedBy || []).join("|"),
        vendors: e.results || []
      })), n = "csv" === e ? [ [ "checkedAt", "source", "url", "target", "verdict", "blockedBy", "vendorResults" ], ...t.map(e => [ e.checkedAt, e.source, e.url, e.target, e.verdict, e.blockedBy, JSON.stringify(e.vendors) ]) ].map(e => e.map(qe).join(",")).join("\n") : JSON.stringify(t, null, 2), r = new Blob([ n ], {
        type: "csv" === e ? "text/csv" : "application/json"
      }), a = URL.createObjectURL(r), o = document.createElement("a");
      o.href = a, o.download = `nyx-link-checker-${(new Date).toISOString().slice(0, 10)}.${e}`, 
      o.click(), setTimeout(() => URL.revokeObjectURL(a), 1e3), q(`${e.toUpperCase()} export created.`);
    }(e.dataset.export))), d("[data-clear-history]").forEach(e => e.addEventListener("click", Ve));
    const t = i("[data-setting-page-size]");
    t.value = String(u.pageSize || 25), t.addEventListener("change", () => {
      u.pageSize = Number(t.value) || 25, b = 1, Ge();
    });
    const n = i("[data-setting-notifications]"), r = () => {
      n.textContent = u.notifications ? "On" : "Off", n.setAttribute("aria-pressed", String(u.notifications));
    };
    r(), n.addEventListener("click", () => {
      u.notifications = !u.notifications, r(), Ge();
    });
    const a = i("[data-setting-theme]");
    a.value = u.theme || "inherit", a.addEventListener("change", () => {
      u.theme = a.value, Ge();
    });
    const o = i("[data-sidebar]"), s = i("[data-sidebar-shade]");
    i("[data-sidebar-toggle]").addEventListener("click", () => {
      o.classList.add("open"), s.hidden = !1;
    }), s.addEventListener("click", () => {
      o.classList.remove("open"), s.hidden = !0;
    });
  }(), Ue(), async function() {
    try {
      const t = await _(`${e}/vendors`);
      h = (Array.isArray(t) ? t : t.vendors || []).map(String).filter(Boolean), d("[data-vendor-select]").forEach(e => {
        const t = e.value, n = e.options[0];
        e.replaceChildren(n), h.forEach(t => {
          const n = document.createElement("option");
          n.value = t, n.textContent = K(t), e.append(n);
        }), [ ...e.options ].some(e => e.value === t) && (e.value = t);
      }), i("[data-stat-vendors]").textContent = String(h.length), J(!0, `${h.length} vendors ready`), 
      Ce(), Ie();
    } catch (t) {
      J(!1), q(`Could not load vendor filters: ${t.message}`, "error", !0);
    }
  }(), Q().catch(() => {}), I ? q("Cached FreeDNS domains and verdicts expired after eight hours and were removed from this device.") : Je && q("Nyx could not compact the existing verdict cache. Clear the FreeDNS cache before starting another full scan.", "error", !0), 
  setInterval(() => B({
    render: !0,
    notify: !0
  }), 3e5);
})();
