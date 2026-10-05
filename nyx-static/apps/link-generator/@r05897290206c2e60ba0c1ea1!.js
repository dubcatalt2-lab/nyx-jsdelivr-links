(() => {
  "use strict";
  const e = document.body.hasAttribute("data-single-link");
  let t = !1, a = !1, n = !1;
  const r = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker", i = "nyx.linkGenerator.firebaseSession", o = e => document.querySelector(e), s = {
    form: o("[data-generator-form]"),
    label: o("[data-label-input]"),
    filter: o("[data-filter-select]"),
    accessCode: o("[data-access-code]"),
    button: o("[data-generate-button]"),
    status: o("[data-service-status]"),
    origin: o("[data-origin]"),
    notice: o("[data-notice]"),
    resultCard: o("[data-result-card]"),
    resultUrl: o("[data-result-url]"),
    resultCount: o("[data-result-count]"),
    resultTitle: o("[data-result-title]"),
    resultSubtitle: o("[data-result-subtitle]"),
    copy: o("[data-copy]"),
    open: o("[data-open]"),
    filterCheck: o("[data-filter-check]"),
    filterCheckLabel: o("[data-filter-check-label]"),
    filterCheckState: o("[data-filter-check-state]"),
    filterCheckDetail: o("[data-filter-check-detail]"),
    modeButtons: [ ...document.querySelectorAll("[data-access-mode]") ],
    accountPanel: o("[data-account-access]"),
    administratorPanel: o("[data-administrator-access]"),
    accountFields: o("[data-account-fields]"),
    email: o("[data-account-email]"),
    password: o("[data-account-password]"),
    accountStatus: o("[data-account-status]"),
    signIn: o("[data-account-sign-in]"),
    createAccount: o("[data-account-create]"),
    refreshAccount: o("[data-account-refresh]"),
    signOut: o("[data-account-sign-out]"),
    wizardCard: o("[data-wizard-card]"),
    wizardSteps: [ ...document.querySelectorAll("[data-wizard-step]") ],
    wizardIndicators: [ ...document.querySelectorAll("[data-wizard-indicator]") ],
    wizardProgress: o("[data-wizard-progress]"),
    wizardNext: [ ...document.querySelectorAll("[data-wizard-next]") ],
    wizardBack: [ ...document.querySelectorAll("[data-wizard-back]") ],
    wizardRestart: o("[data-wizard-restart]"),
    reviewAccess: o("[data-review-access]"),
    reviewLabel: o("[data-review-label]"),
    reviewFilter: o("[data-review-filter]"),
    reviewOrigin: o("[data-review-origin]"),
    reviewMethod: o("[data-review-method]"),
    reviewAmountRow: o("[data-review-amount-row]"),
    reviewAmount: o("[data-review-amount]"),
    confirm: o("[data-confirm]"),
    confirmText: o("[data-confirm-text]"),
    amount: o("[data-premium-amount]"),
    amountField: o("[data-premium-amount-field]"),
    amountHint: o("[data-premium-amount-hint]"),
    detailsGrid: o("[data-details-grid]"),
    generationMethod: o("[data-generation-method]"),
    generationMethodHint: o("[data-generation-method-hint]")
  };
  let c = "account", l = 0, u = 100, d = 1e3, h = 100, m = 60, f = 5, p = 30, g = 10, w = {
    enabled: !1,
    apiKey: ""
  }, b = function() {
    try {
      return JSON.parse(sessionStorage.getItem(i) || "null");
    } catch {
      return null;
    }
  }();
  const y = new Set([ "cdn.jsdelivr.net", "gcore.jsdelivr.net", "fastly.jsdelivr.net", "quantil.jsdelivr.net", "originfastly.jsdelivr.net", "testingcf.jsdelivr.net", "jsdelivr.b-cdn.net", "esm.sh", "raw.esm.sh" ]), k = o("[data-cdn-host]"), v = o("[data-provider]");
  let C = "jsdelivr", S = null;
  function x() {
    if (!S) return;
    const e = A(), t = "bunny" === e ? S.bunnyAvailable : "surge" === e ? S.surgeAvailable : S.globalPublisherConfigured;
    P(Boolean(t), t ? "Ready" : "Unavailable");
  }
  function A() {
    return [ "bunny", "surge" ].includes(v.value) ? v.value : "jsdelivr";
  }
  function $() {
    const e = "bunny" === A(), t = "surge" === A();
    (e || t) && (s.generationMethod.value = "managed"), s.generationMethod.closest("label").hidden = e || t, 
    k.closest("label").hidden = e || t, o("[data-provider-hint]").textContent = t ? "Publish one new surge.sh site on the configured Surge account. The label gets a random suffix; existing sites are not replaced." : e ? "Create separate b-cdn.net hostnames pointing to Nyx. Bunny bandwidth charges and account limits apply; these still share the Nyx backend." : "Publish the static Nyx app and choose a delivery hostname.", 
    s.confirm.checked = !1, ee(), x();
  }
  function N() {
    return y.has(k.value) ? k.value : "cdn.jsdelivr.net";
  }
  function T(e, t) {
    const a = new URL(e);
    return "https:" === a.protocol && y.has(a.hostname) && a.pathname.startsWith("/gh/") && (a.hostname = t), 
    a.href;
  }
  const L = o("[data-bulk-job]") ? import("./@r26f2a0db389e97bde76ba2dc!.js?v=20260907-cdn-options-v2").then(e => e.attachBulkJobs({
    access: async () => {
      if (!b?.idToken) throw new Error("Sign in to your account above before starting or resuming a large job.");
      const e = await W();
      return {
        uid: (await D(e.idToken)).uid,
        token: e.idToken,
        limit: _() ? d : h,
        method: _() ? "p2p" : "managed"
      };
    }
  })) : Promise.resolve(null);
  function E(e, t = "") {
    s.notice.textContent = e, s.notice.className = "notice" + (t ? ` ${t}` : ""), s.notice.hidden = !e;
  }
  function P(e, t) {
    s.status.classList.toggle("online", e), s.status.classList.toggle("offline", !e), 
    s.status.querySelector("span").textContent = t;
  }
  function I(t, a = "") {
    k.disabled = t;
    const n = o("[data-bulk-setup] button");
    n && (n.disabled = t), e && [ ...s.wizardNext, ...s.wizardBack, ...document.querySelectorAll("[data-method-choice]"), s.label, s.filter ].forEach(e => e.disabled = t), 
    s.button.disabled = t;
    const r = Q();
    s.button.querySelector("span").textContent = t ? a || `Creating ${r} link${1 === r ? "" : "s"}...` : e ? "Create link" : "Generate " + (1 === r ? "link" : `${r} links`);
  }
  function M(e) {
    [ s.signIn, s.createAccount, s.refreshAccount, s.signOut ].forEach(t => {
      t.disabled = e;
    });
  }
  async function z(e) {
    let t = {};
    try {
      t = await e.json();
    } catch {}
    if (!e.ok) throw new Error(t.error || t.message || `Request failed (${e.status})`);
    return t;
  }
  function j(e) {
    b = e;
    try {
      e?.viaHost ? sessionStorage.removeItem(i) : sessionStorage.setItem(i, JSON.stringify(e));
    } catch {}
    return Y(), e;
  }
  function O() {
    b = null;
    try {
      sessionStorage.removeItem(i);
    } catch {}
    Y();
  }
  function B(e) {
    const t = String(e?.message || e || "Authentication failed.").replace(/^Firebase:\s*/i, "");
    return {
      EMAIL_EXISTS: "That email already has an account.",
      EMAIL_NOT_FOUND: "Email or password is incorrect.",
      INVALID_PASSWORD: "Email or password is incorrect.",
      INVALID_LOGIN_CREDENTIALS: "Email or password is incorrect.",
      WEAK_PASSWORD: "Choose a stronger password.",
      TOO_MANY_ATTEMPTS_TRY_LATER: "Too many attempts. Try again later.",
      USER_DISABLED: "This account has been disabled."
    }[t] || t.replaceAll("_", " ").toLowerCase().replace(/^./, e => e.toUpperCase());
  }
  async function q(e, t, a, n = !1) {
    if (!w.enabled || !w.apiKey) throw new Error("Free account access is not configured yet.");
    const r = "token" === e ? "https://securetoken.googleapis.com/v1" : "https://identitytoolkit.googleapis.com/v1", i = await fetch(`${r}/${t}?key=${encodeURIComponent(w.apiKey)}`, {
      method: "POST",
      headers: {
        "Content-Type": n ? "application/x-www-form-urlencoded" : "application/json"
      },
      body: n ? new URLSearchParams(a) : JSON.stringify(a)
    });
    let o = {};
    try {
      o = await i.json();
    } catch {}
    if (!i.ok) throw new Error(o?.error?.message || `Authentication failed (${i.status})`);
    return o;
  }
  function U(e, t = {}) {
    return {
      idToken: e.idToken || e.id_token,
      refreshToken: e.refreshToken || e.refresh_token || t.refreshToken,
      expiresAt: Date.now() + 1e3 * Number(e.expiresIn || e.expires_in || 3600),
      email: e.email || t.email || "",
      emailVerified: Boolean(t.emailVerified),
      subscriptionStatus: t.subscriptionStatus || "free",
      premiumAccess: Boolean(t.premiumAccess)
    };
  }
  async function D(e) {
    const t = await q("identity", "accounts:lookup", {
      idToken: e
    }), a = t.users?.[0];
    return {
      uid: a?.localId || "",
      email: a?.email || "",
      emailVerified: Boolean(a?.emailVerified)
    };
  }
  async function R(e) {
    const t = await z(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/me", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${e}`
      },
      cache: "no-store"
    }));
    return {
      subscriptionStatus: String(t.subscriptionStatus || "free").toLowerCase(),
      premiumAccess: Boolean(t.premiumAccess || [ "premium", "trialing" ].includes(String(t.subscriptionStatus || "").toLowerCase()))
    };
  }
  function _() {
    return Boolean(b?.premiumAccess || [ "premium", "trialing" ].includes(String(b?.subscriptionStatus || "").toLowerCase()));
  }
  function G() {
    return "administrator" === c || "account" === c && _();
  }
  function F() {
    return "surge" === A() ? 1 : "p2p" === s.generationMethod.value && G() ? d : G() ? u : h;
  }
  async function H() {
    if (!b?.idToken) return b;
    const e = await R(b.idToken);
    return j({
      ...b,
      ...e
    });
  }
  async function V() {
    if (!b?.refreshToken) throw new Error("Sign in again.");
    return j(U(await q("token", "token", {
      grant_type: "refresh_token",
      refresh_token: b.refreshToken
    }, !0), b));
  }
  function J() {
    return parent === window ? Promise.resolve("") : new Promise(e => {
      const t = "link-generator-" + crypto.randomUUID(), a = t => {
        clearTimeout(r), removeEventListener("message", n), e("string" == typeof t ? t : "");
      }, n = e => {
        e.source === parent && e.origin === location.origin && "nyx:account-token-response" === e.data?.type && e.data.requestId === t && a(e.data.token);
      }, r = setTimeout(() => a(""), 4e3);
      addEventListener("message", n), parent.postMessage({
        type: "nyx:account-token-request",
        requestId: t
      }, location.origin);
    });
  }
  async function W() {
    if (!b) throw new Error("Sign in to use the Link Generator.");
    if (b.viaHost) {
      const e = await J();
      if (!e) throw O(), new Error("Sign in to Nyx again to continue.");
      b = {
        ...b,
        idToken: e
      };
    } else b.expiresAt - Date.now() < 6e4 && await V();
    return await H(), b;
  }
  function Y() {
    const a = Boolean(b?.idToken), n = a && _();
    s.accountFields.hidden = a, s.signIn.hidden = a, s.createAccount.hidden = a, s.signOut.hidden = !a, 
    s.refreshAccount.hidden = !0, s.accountStatus.className = "account-status" + (a ? " good" : ""), 
    s.accountStatus.textContent = a ? n ? `${b.email || "Account"} has Premium access. No access code is required.` : `Signed in. You can create up to ${h} links per ${m}-minute window.` : `Sign in to create up to ${h} links per hour.`;
    const r = s.modeButtons.find(e => "account" === e.dataset.accessMode);
    r && (r.textContent = n ? "Premium account" : "Account"), e && (o("[data-access-gate]").hidden = !t || a, 
    a && (s.accountStatus.textContent = "Signed in" + (b.email ? " as " + b.email : "") + ".")), 
    "account" === c && K();
  }
  function K() {
    const t = G(), a = "p2p" === s.generationMethod.value, n = F();
    s.amountField.hidden = e || "surge" === A(), s.detailsGrid.classList.add("premium"), 
    s.amount.max = String(n), Number.parseInt(s.amount.value, 10) > n && (s.amount.value = String(n)), 
    s.amountHint.textContent = t && a ? `P2P can publish up to ${d.toLocaleString()} links per run through your GitHub token. Automatic repositories roll over at 1,000 SVGs.` : t ? `Choosing ${f}-${u} links starts a ${g}-minute cooldown. Smaller batches start it after ${p} total links.` : `Regular accounts can create up to ${h} links during each ${m}-minute window.`, 
    Z();
  }
  function X(e) {
    c = e, s.accountPanel.hidden = "account" !== e, s.administratorPanel.hidden = "administrator" !== e, 
    K(), s.modeButtons.forEach(t => {
      const a = t.dataset.accessMode === e;
      t.classList.toggle("active", a), t.setAttribute("aria-selected", String(a));
    });
  }
  function Q() {
    if (e) return 1;
    const t = F(), a = Number.parseInt(s.amount.value, 10);
    return Number.isInteger(a) ? Math.max(1, Math.min(t, a)) : 1;
  }
  function Z() {
    const t = Q(), a = "p2p" === s.generationMethod.value;
    s.reviewAmountRow.hidden = !1, s.reviewAmount.textContent = `${t} link${1 === t ? "" : "s"}`, 
    s.confirmText.textContent = "surge" === A() ? "I understand this publishes a public Nyx wrapper on the configured Surge account. Surge account limits apply." : "bunny" === A() ? `I understand this creates ${t} Bunny pull zone${1 === t ? "" : "s"} on the configured Bunny account, with its bandwidth charges and limits.` : a ? `I understand P2P bulk-publishes ${1 === t ? "one Nyx launcher" : `${t} Nyx launchers`} through Nyx's protected server publisher.` : `I understand this publishes ${1 === t ? "one Nyx launcher" : `${t} Nyx launchers`} through a GitHub repository.`, 
    s.button.disabled || (s.button.querySelector("span").textContent = e ? "Create link" : "Generate " + (1 === t ? "link" : `${t} links`));
  }
  function ee() {
    document.querySelectorAll("[data-method-choice]").forEach(e => e.setAttribute("aria-pressed", String(e.dataset.methodChoice === s.generationMethod.value)));
    const e = "p2p" === s.generationMethod.value;
    s.generationMethodHint.textContent = e ? `P2P bulk-publishes up to ${d.toLocaleString()} Nyx links directly and keeps the GitHub credential on the Nyx server.` : "Nyx managed uses the protected server publisher; its GitHub credential never reaches your browser.", 
    K();
  }
  function te(a, n = (a >= l ? "forward" : "back")) {
    const r = Math.max(0, Math.min(s.wizardSteps.length - 1, Number(a) || 0));
    l = r, s.wizardCard.classList.remove("wizard-forward", "wizard-back"), s.wizardCard.offsetWidth, 
    s.wizardCard.classList.add("back" === n ? "wizard-back" : "wizard-forward"), s.wizardSteps.forEach((e, t) => {
      const a = t === r;
      e.hidden = !a, e.classList.toggle("active", a);
    }), s.form.hidden = 3 === r, s.wizardIndicators.forEach((e, t) => {
      e.classList.toggle("active", t === r), e.classList.toggle("complete", t < r), t === r ? e.setAttribute("aria-current", "step") : e.removeAttribute("aria-current");
    }), e && t && requestAnimationFrame(() => s.wizardSteps[r].querySelector("h2")?.focus({
      preventScroll: !0
    })), document.dispatchEvent(new CustomEvent("nyx-generator-step", {
      detail: r
    })), s.wizardProgress.style.width = r / (s.wizardSteps.length - 1) * 100 + "%";
  }
  function ae() {
    o("[data-review-cdn]").textContent = "surge" === A() ? "Surge - new .surge.sh address" : "bunny" === A() ? "Bunny.net \xb7 b-cdn.net" : N(), 
    s.reviewAccess.textContent = "account" === c ? _() ? `${b?.email || "Account"} \xb7 Premium` : b?.email || "Free account" : "Premium access code", 
    s.reviewLabel.textContent = s.label.value.trim() || "Automatic", s.reviewFilter.textContent = s.filter.options[s.filter.selectedIndex]?.textContent || "Not selected", 
    s.reviewOrigin.textContent = s.origin.textContent || "Official Nyx origin", s.reviewMethod.textContent = "surge" === A() ? "Nyx Surge publisher" : "p2p" === s.generationMethod.value ? "P2P" : e ? "Nyx" : "Nyx managed", 
    Z();
  }
  async function ne() {
    if (E(""), "administrator" === c) {
      if (!s.accessCode.value) return E("Enter your Premium access code to continue.", "error"), 
      s.accessCode.focus(), !1;
      try {
        if (E("Checking your Premium access code..."), !0 !== (await z(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/validate-access", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            accessCode: s.accessCode.value
          })
        }))).valid) throw new Error("The Premium access code could not be verified.");
        return !0;
      } catch (t) {
        return E(t.message || "The Premium access code is incorrect.", "error"), s.accessCode.focus(), 
        s.accessCode.select(), !1;
      }
    }
    if (!w.enabled) return E("Free account access is not configured yet. Choose Premium users to continue.", "error"), 
    !1;
    if (!b?.idToken) return e && (o("[data-access-gate]").hidden = !1), E("Sign in or create a free account before continuing.", "error"), 
    s.email.focus(), !1;
    try {
      return await W(), Y(), !0;
    } catch (t) {
      return E(B(t), "error"), !1;
    }
  }
  async function re(t) {
    if (n) return;
    n = !0;
    const a = t?.currentTarget;
    a && (a.disabled = !0);
    try {
      if (e) {
        if (0 === l) {
          if (!s.label.value.trim()) return E("Give your link a name.", "error"), void s.label.focus();
          if (!await ne()) return;
          return E(""), ae(), void te(1);
        }
        return 1 === l ? (s.confirm.checked = !0, E(""), void te(2)) : void 0;
      }
      if (0 === l) {
        if (!await ne()) return;
        return E(""), void te(1);
      }
      if (1 === l) {
        if (!s.filter.value) return E("Choose a content filter before continuing.", "error"), 
        void s.filter.focus();
        const e = Number.parseInt(s.amount.value, 10), t = F();
        if (!Number.isInteger(e) || e < 1 || e > t) return E(`Choose an amount from 1 to ${t}.`, "error"), 
        void s.amount.focus();
        E(""), ae(), te(2);
      }
    } finally {
      n = !1, a && (a.disabled = !1);
    }
  }
  function ie(e) {
    return String("string" == typeof e ? e : e?.key || e?.filter || "").trim().toLowerCase();
  }
  function oe(e, t, a, n) {
    s.filterCheck.className = `filter-check ${e}`, s.filterCheckLabel.textContent = t, 
    s.filterCheckState.textContent = a, s.filterCheckDetail.textContent = n;
  }
  function se(t, a = "") {
    s.open.dataset.ready = String(Boolean(t)), s.open.classList.toggle("disabled", !t), 
    s.open.setAttribute("aria-disabled", String(!t)), s.open.textContent = t ? e ? "Open link" : "Open first" : "Starting CDN...", 
    s.open.dataset.readinessMessage = a || "";
  }
  async function ce(e) {
    return z(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/readiness", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: e
      })
    }));
  }
  async function le(e, t = 12) {
    se(!1, "This link is still being prepared.");
    let a = "This link is still being prepared.";
    for (let r = 0; r < t; r += 1) {
      try {
        const t = await ce(e);
        if (a = t.message || a, t.ready) return se(!0, ""), !0;
        if ("disabled" === t.state || "suspended" === t.state) return se(!1, a), !1;
      } catch (n) {
        a = n.message || a;
      }
      r < t - 1 && await new Promise(e => setTimeout(e, 2500));
    }
    return se(!1, a), !1;
  }
  async function ue(e, t) {
    try {
      const a = await z(await fetch(`${r}/check`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: e,
          vendor: t
        }),
        cache: "no-store"
      })), n = a?.vendors && "object" == typeof a.vendors ? a.vendors : {}, i = n[t] || Object.values(n)[0] || (Array.isArray(a?.results) ? a.results[0] : a?.result || a);
      return i?.error || !1 === i?.ok ? "error" : !0 === i?.blocked ? "blocked" : !1 === i?.blocked ? "allowed" : "info";
    } catch {
      return "error";
    }
  }
  async function de(e, t, a) {
    const n = {
      allowed: 0,
      blocked: 0,
      info: 0,
      error: 0
    }, r = function(e) {
      const t = new Map;
      return e.forEach(e => {
        let a = `url:${e}`;
        try {
          const t = new URL(e), n = y.has(t.hostname.toLowerCase()) && t.pathname.match(/^\/gh\/([^/]+)\/([^/]+@[^/]+)\/[^/]+\.svg$/i);
          n && (a = `cdn:${t.hostname}:${n[1].toLowerCase()}/${n[2].toLowerCase()}`);
        } catch {}
        const n = t.get(a);
        n ? n.count += 1 : t.set(a, {
          url: e,
          count: 1
        });
      }), [ ...t.values() ];
    }(e), i = r.length < e.length;
    oe("checking", a, `Checking 0 of ${e.length}`, i ? `Nyx is checking ${r.length} shared CDN source${1 === r.length ? "" : "s"} for ${e.length} identical generated links.` : `Nyx is checking ${1 === e.length ? "this link" : "each generated link"} once.`);
    let o = 0, s = 0;
    await Promise.all(Array.from({
      length: Math.min(5, r.length)
    }, async () => {
      for (;o < r.length; ) {
        const i = o;
        o += 1;
        const c = r[i], l = await ue(c.url, t);
        n[l] += c.count, s += c.count, oe("checking", a, `Checking ${s} of ${e.length}`, "Completed checks appear here when the batch finishes.");
      }
    })), n.blocked ? oe("blocked", a, `${n.blocked} blocked`, `Sorry, but ${n.blocked === e.length ? "all of those links are" : `${n.blocked} of ${e.length} links are`} currently blocked.`) : n.error ? oe("error", a, `${n.error} unchecked`, `${n.allowed} allowed; ${n.error} could not be checked.`) : n.info ? oe("info", a, `${n.info} informational`, `${n.allowed} allowed; ${n.info} did not return a blocked or allowed decision.`) : oe("allowed", a, `${n.allowed} allowed`, 1 === e.length ? "The selected filter currently reports this link as allowed." : i ? `One representative check covered all ${e.length} identical Nyx SVG links from the shared CDN source.` : "The selected filter currently reports every generated link as allowed.");
  }
  L.catch(() => {}), s.modeButtons.forEach(e => e.addEventListener("click", () => X(e.dataset.accessMode))), 
  o("[data-bulk-label]")?.addEventListener("input", () => {
    o("[data-bulk-filename]").textContent = `${o("[data-bulk-label]").value.toLowerCase() || "nyx"}-learning-[random 32-character code].svg`;
  }), o("[data-bulk-setup]")?.addEventListener("submit", async e => {
    if (e.preventDefault(), s.button.disabled) return;
    const t = Number(o("[data-bulk-amount]").value);
    if (!(!Number.isSafeInteger(t) || t < 1 || t > 1e5)) if (t > F()) try {
      (await L).start({
        total: t,
        label: o("[data-bulk-label]").value,
        host: o("[data-bulk-host]").value
      }), o("[data-bulk-job]").hidden = !1;
    } catch (a) {
      E(a.message, "error");
    } else s.label.value = o("[data-bulk-label]").value, v.value = "jsdelivr", $(), 
    s.generationMethod.value = "managed", ee(), s.amount.value = String(Math.min(F(), Number(o("[data-bulk-amount]").value))), 
    k.value = o("[data-bulk-host]").value, s.confirm.checked = !1, Z(), te(0), E("Your link options are ready. Continue through access, details, and review to publish."), 
    s.wizardCard.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }), o("[data-download-links]").addEventListener("click", () => {
    if (!s.resultUrl.value) return;
    const e = URL.createObjectURL(new Blob([ s.resultUrl.value + "\n" ], {
      type: "text/plain;charset=utf-8"
    })), t = document.createElement("a");
    t.href = e, t.download = `nyx-${C}-links.txt`, document.body.appendChild(t), t.click(), 
    t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
  }), document.querySelectorAll("[data-method-choice]").forEach(e => e.addEventListener("click", () => {
    s.generationMethod.value = e.dataset.methodChoice, s.confirm.checked = !1, ee();
  })), s.amount.addEventListener("input", Z), s.generationMethod.addEventListener("change", ee), 
  v.addEventListener("change", $), s.wizardNext.forEach(e => e.addEventListener("click", re)), 
  s.wizardBack.forEach(e => e.addEventListener("click", () => {
    E(""), te(l - 1, "back");
  })), s.wizardRestart.addEventListener("click", () => {
    s.label.value = "", s.filter.value = "", s.confirm.checked = !1, s.resultCard.hidden = !0, 
    E(""), te(e ? 0 : 1, "back");
  }), s.signIn.addEventListener("click", async function() {
    const e = s.email.value.trim(), t = s.password.value;
    if (!e || !t) return s.accountStatus.textContent = "Enter your email and password.", 
    void (s.accountStatus.className = "account-status error");
    M(!0);
    try {
      j(U(await q("identity", "accounts:signInWithPassword", {
        email: e,
        password: t,
        returnSecureToken: !0
      })));
      const [a, n] = await Promise.all([ D(b.idToken), R(b.idToken) ]);
      j({
        ...b,
        ...a,
        ...n
      }), s.password.value = "";
    } catch (a) {
      s.accountStatus.textContent = B(a), s.accountStatus.className = "account-status error";
    } finally {
      M(!1);
    }
  }), s.createAccount.addEventListener("click", async function() {
    const e = s.email.value.trim(), t = s.password.value;
    if (!e || t.length < 6) return s.accountStatus.textContent = "Enter an email and a password with at least 6 characters.", 
    void (s.accountStatus.className = "account-status error");
    M(!0);
    try {
      j(U(await q("identity", "accounts:signUp", {
        email: e,
        password: t,
        returnSecureToken: !0
      }), {
        email: e,
        emailVerified: !1
      })), await H(), s.password.value = "", Y();
    } catch (a) {
      s.accountStatus.textContent = B(a), s.accountStatus.className = "account-status error";
    } finally {
      M(!1);
    }
  }), s.signOut.addEventListener("click", O), s.form.addEventListener("submit", async t => {
    if (t.preventDefault(), a) return;
    if (e && l < 2) return void await re();
    if (e && !s.confirm.checked) return E("Confirm your link details first.", "error"), 
    void te(1);
    if (!s.filter.value) return E("Choose a blocker before creating the link.", "error"), 
    void s.filter.focus();
    const n = s.filter.value, r = s.filter.options[s.filter.selectedIndex]?.textContent || n;
    E(""), s.resultCard.hidden = !0, a = !0, I(!0);
    try {
      const t = {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, a = "p2p" === s.generationMethod.value ? "p2p" : "managed", i = A(), o = {
        label: s.label.value,
        provider: i,
        method: "bunny" === i ? "managed" : a
      };
      if ("account" === c) {
        const e = await W();
        t.Authorization = `Bearer ${e.idToken}`, o.amount = Q();
      } else {
        if (!s.accessCode.value) throw new Error("Enter your Premium access code.");
        o.accessCode = s.accessCode.value, o.amount = Q();
      }
      let l;
      for (;;) {
        const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator", {
          method: "POST",
          headers: t,
          body: JSON.stringify(o)
        });
        if (429 === e.status) {
          const t = await e.clone().json().catch(() => ({}));
          if ("STATIC_PACKAGE_PREPARING" === t.code) {
            E(t.error), await new Promise(t => setTimeout(t, 1e3 * Math.max(1, Math.min(60, Number(e.headers.get("Retry-After")) || 10))));
            continue;
          }
        }
        l = await z(e);
        break;
      }
      const u = (Array.isArray(l.links) ? l.links : []).map(e => "string" == typeof e ? e : e?.url).filter(Boolean).map(e => T(e, N()));
      if (!u.length && l.url && u.push(T(l.url, N())), !u.length) throw new Error("The link provider did not return any generated links.");
      C = i;
      const d = "bunny" !== i;
      s.resultUrl.value = u.join("\n"), s.resultCount.textContent = `${u.length} link${1 === u.length ? "" : "s"}`, 
      s.resultTitle.textContent = 1 === u.length ? "Your Nyx link is ready" : "Your Nyx links are ready", 
      s.resultSubtitle.textContent = l.partial ? `${u.length} of ${l.requested} requested links were created.` : (1 === u.length ? "The link was" : "All links were") + " created successfully.", 
      s.open.href = u[0], se(d), s.resultCard.hidden = !1, s.accessCode.value = "", te(3), 
      requestAnimationFrame(() => s.resultCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      }));
      const [, h] = await Promise.all([ de(u, n, r), d ? Promise.resolve(!0) : le(u[0]) ]), m = l.premiumCooldown, f = "administrator" === l.access || "premium" === l.access, w = m?.triggered ? `${u.length} link${1 === u.length ? " was" : "s were"} created. A ${m.minutes || g}-minute Premium cooldown is now active.` : `${u.length} link${1 === u.length ? " was" : "s were"} created with Premium access. ${m?.accumulated || 0} of ${m?.accumulatedLimit || p} links accumulated before cooldown.`;
      l.partial ? E(l.warning || `${u.length} of ${l.requested} links were created.`, "error") : h ? E(e ? m?.triggered ? `Link created. You can create another in ${m.minutes || g} minutes.` : "" : f ? w : `${u.length} link${1 === u.length ? " was" : "s were"} created. ${l.remaining} link${1 === l.remaining ? "" : "s"} remaining in your current hourly window.`) : E(`${f ? `${w} ` : ""}${s.open.dataset.readinessMessage || "The link was created, but the CDN is still provisioning it. Try Open first again shortly."}`, "error");
    } catch (i) {
      E(i.message, "error");
    } finally {
      a = !1, I(!1);
    }
  }), s.open.addEventListener("click", async e => {
    if ("true" === s.open.dataset.ready) return;
    e.preventDefault();
    const t = s.open.href;
    E(s.open.dataset.readinessMessage || "This link is still being prepared. Checking again...", "error");
    const a = await le(t, 1);
    E(a ? "The CDN link is ready. Select Open first again." : s.open.dataset.readinessMessage || "The CDN link is not ready yet.", a ? "" : "error");
  }), s.copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(s.resultUrl.value), s.copy.textContent = e ? "Copied" : "Copied all", 
      setTimeout(() => {
        s.copy.textContent = e ? "Copy link" : "Copy all";
      }, 1400);
    } catch {
      s.resultUrl.select(), document.execCommand("copy");
    }
  }), function() {
    if ("tutsi" === document.documentElement.dataset.appShell) return;
    let e = "default";
    try {
      e = localStorage.getItem("nyx.theme") || "default";
    } catch {}
    e && "default" !== e && document.body.classList.add(`theme-${e}`);
  }(), Y(), $(), te(0), s.wizardNext[0].disabled = !0, Promise.all([ async function() {
    try {
      const e = await z(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/status", {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      })), t = v.querySelector('[value="surge"]');
      t.hidden = !0 !== e.surgeAvailable, t.disabled = !0 !== e.surgeAvailable, "surge" !== A() || e.surgeAvailable || (v.value = "jsdelivr", 
      $());
      const a = v.querySelector('[value="bunny"]');
      a.disabled = !e.bunnyAvailable, a.textContent = e.bunnyAvailable ? "Bunny.net pull zones" : "Bunny.net pull zones (server key not configured)", 
      h = Math.max(1, Math.min(100, Number.parseInt(e.freeHourlyLimit, 10) || 100)), m = Math.max(1, Number.parseInt(e.freeWindowMinutes, 10) || 60), 
      u = Math.max(h, Math.min(1e4, Number.parseInt(e.premiumBatchLimit, 10) || h)), d = Math.max(u, Math.min(1e4, Number.parseInt(e.p2pPremiumBatchLimit, 10) || 1e3)), 
      f = Math.max(1, Number.parseInt(e.premiumImmediateCooldownAt, 10) || 5), p = Math.max(f, Number.parseInt(e.premiumAccumulatedLimit, 10) || 30), 
      g = Math.max(1, Number.parseInt(e.premiumCooldownMinutes, 10) || 10), Y(), K(), 
      s.origin.textContent = e.origin || "Not configured", S = e, x(), e.available || E("The Nyx administrator still needs to finish the Link Generator server settings.", "error");
    } catch (e) {
      s.origin.textContent = "Unavailable", P(!1, "Unavailable"), E(`Could not check the generator: ${e.message}`, "error");
    }
  }(), async function() {
    try {
      w = await z(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/auth-config", {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      }));
    } catch {
      w = {
        enabled: !1,
        apiKey: ""
      };
    }
    s.modeButtons.find(e => "account" === e.dataset.accessMode).disabled = !w.enabled, 
    w.enabled || X("administrator");
    const e = w.enabled ? await J() : "";
    if (e) try {
      const [t, a] = await Promise.all([ D(e), R(e) ]);
      j({
        ...t,
        ...a,
        idToken: e,
        viaHost: !0
      });
    } catch {}
    if (b?.idToken) try {
      !b.viaHost && b.expiresAt - Date.now() < 6e4 && await V(), await H();
    } catch {
      O();
    }
    t = !0, Y();
  }(), async function() {
    try {
      const t = await z(await fetch(`${r}/vendors`, {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      })), a = Array.isArray(t) ? t : t.vendors;
      if (!Array.isArray(a) || !a.length) throw new Error("No filters are currently available.");
      s.filter.textContent = "";
      const n = document.createElement("option");
      n.value = "", n.textContent = e ? "Choose a blocker" : "Choose a content filter", 
      s.filter.append(n), a.forEach(e => {
        const t = ie(e);
        if (!t) return;
        const a = document.createElement("option");
        a.value = t, a.textContent = function(e) {
          const t = ie(e), a = String("string" == typeof e ? e : e?.label || e?.filter || e?.key || "Content filter"), n = {
            blocksi_ai: "Blocksi AI",
            cisco: "Cisco Umbrella",
            dnsfilter: "DNSFilter",
            fortiguard: "FortiGuard",
            goguardian: "GoGuardian",
            iboss: "iBoss",
            lanschool: "LanSchool",
            paloalto: "Palo Alto"
          };
          return n[t] ? n[t] : /^cisco talos$/i.test(a) ? "Cisco Umbrella" : a === t ? t.replace(/_/g, " ").replace(/\b\w/g, e => e.toUpperCase()) : a;
        }(e), s.filter.append(a);
      }), s.filter.disabled = !1;
    } catch (t) {
      s.filter.innerHTML = '<option value="">Filter list unavailable</option>', s.filter.disabled = !0, 
      E(`Could not load the content filters: ${t.message}`, "error");
    }
  }() ]).finally(() => {
    s.wizardNext[0].disabled = !1;
  });
})();
