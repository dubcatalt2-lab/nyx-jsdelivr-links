(() => {
  "use strict";
  const e = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker", t = "nyx.linkGenerator.firebaseSession", a = e => document.querySelector(e), n = {
    form: a("[data-generator-form]"),
    label: a("[data-label-input]"),
    filter: a("[data-filter-select]"),
    accessCode: a("[data-access-code]"),
    button: a("[data-generate-button]"),
    status: a("[data-service-status]"),
    origin: a("[data-origin]"),
    notice: a("[data-notice]"),
    resultCard: a("[data-result-card]"),
    resultUrl: a("[data-result-url]"),
    resultCount: a("[data-result-count]"),
    resultTitle: a("[data-result-title]"),
    resultSubtitle: a("[data-result-subtitle]"),
    copy: a("[data-copy]"),
    open: a("[data-open]"),
    filterCheck: a("[data-filter-check]"),
    filterCheckLabel: a("[data-filter-check-label]"),
    filterCheckState: a("[data-filter-check-state]"),
    filterCheckDetail: a("[data-filter-check-detail]"),
    modeButtons: [ ...document.querySelectorAll("[data-access-mode]") ],
    accountPanel: a("[data-account-access]"),
    administratorPanel: a("[data-administrator-access]"),
    accountFields: a("[data-account-fields]"),
    email: a("[data-account-email]"),
    password: a("[data-account-password]"),
    accountStatus: a("[data-account-status]"),
    signIn: a("[data-account-sign-in]"),
    createAccount: a("[data-account-create]"),
    refreshAccount: a("[data-account-refresh]"),
    signOut: a("[data-account-sign-out]"),
    wizardCard: a("[data-wizard-card]"),
    wizardSteps: [ ...document.querySelectorAll("[data-wizard-step]") ],
    wizardIndicators: [ ...document.querySelectorAll("[data-wizard-indicator]") ],
    wizardProgress: a("[data-wizard-progress]"),
    wizardNext: [ ...document.querySelectorAll("[data-wizard-next]") ],
    wizardBack: [ ...document.querySelectorAll("[data-wizard-back]") ],
    wizardRestart: a("[data-wizard-restart]"),
    reviewAccess: a("[data-review-access]"),
    reviewLabel: a("[data-review-label]"),
    reviewFilter: a("[data-review-filter]"),
    reviewOrigin: a("[data-review-origin]"),
    reviewMethod: a("[data-review-method]"),
    reviewAmountRow: a("[data-review-amount-row]"),
    reviewAmount: a("[data-review-amount]"),
    confirm: a("[data-confirm]"),
    confirmText: a("[data-confirm-text]"),
    amount: a("[data-premium-amount]"),
    amountField: a("[data-premium-amount-field]"),
    amountHint: a("[data-premium-amount-hint]"),
    detailsGrid: a("[data-details-grid]"),
    generationMethod: a("[data-generation-method]"),
    generationMethodHint: a("[data-generation-method-hint]")
  };
  let r = "account", i = 0, o = 100, s = 1e3, c = 100, l = 60, u = 5, d = 30, h = 10, m = {
    enabled: !1,
    apiKey: ""
  }, f = function() {
    try {
      return JSON.parse(sessionStorage.getItem(t) || "null");
    } catch {
      return null;
    }
  }();
  const p = new Set([ "cdn.jsdelivr.net", "gcore.jsdelivr.net", "fastly.jsdelivr.net", "quantil.jsdelivr.net", "originfastly.jsdelivr.net", "testingcf.jsdelivr.net", "jsdelivr.b-cdn.net", "esm.sh", "raw.esm.sh" ]), g = a("[data-cdn-host]"), w = a("[data-provider]");
  let b = "jsdelivr", y = null;
  function k() {
    if (!y) return;
    const e = v(), t = "bunny" === e ? y.bunnyAvailable : "surge" === e ? y.surgeAvailable : y.globalPublisherConfigured;
    N(Boolean(t), t ? "Ready" : "Unavailable");
  }
  function v() {
    return [ "bunny", "surge" ].includes(w.value) ? w.value : "jsdelivr";
  }
  function C() {
    const e = "bunny" === v(), t = "surge" === v();
    (e || t) && (n.generationMethod.value = "managed"), n.generationMethod.closest("label").hidden = e || t, 
    g.closest("label").hidden = e || t, a("[data-provider-hint]").textContent = t ? "Publish one new surge.sh site on the configured Surge account. The label gets a random suffix; existing sites are not replaced." : e ? "Create separate b-cdn.net hostnames pointing to Nyx. Bunny bandwidth charges and account limits apply; these still share the Nyx backend." : "Publish the static Nyx app and choose a delivery hostname.", 
    n.confirm.checked = !1, K(), k();
  }
  function S() {
    return p.has(g.value) ? g.value : "cdn.jsdelivr.net";
  }
  function x(e, t) {
    const a = new URL(e);
    return "https:" === a.protocol && p.has(a.hostname) && a.pathname.startsWith("/gh/") && (a.hostname = t), 
    a.href;
  }
  const A = import("./@r26f2a0db389e97bde76ba2dc!.js?v=20260907-cdn-options-v2").then(e => e.attachBulkJobs({
    access: async () => {
      if (!f?.idToken) throw new Error("Sign in to your account above before starting or resuming a large job.");
      const e = await q();
      return {
        uid: (await O(e.idToken)).uid,
        token: e.idToken,
        limit: R() ? s : c,
        method: R() ? "p2p" : "managed"
      };
    }
  }));
  function $(e, t = "") {
    n.notice.textContent = e, n.notice.className = "notice" + (t ? ` ${t}` : ""), n.notice.hidden = !e;
  }
  function N(e, t) {
    n.status.classList.toggle("online", e), n.status.classList.toggle("offline", !e), 
    n.status.querySelector("span").textContent = t;
  }
  function T(e, t = "") {
    g.disabled = e, a("[data-bulk-setup] button").disabled = e, n.button.disabled = e;
    const r = J();
    n.button.querySelector("span").textContent = e ? t || `Creating ${r} link${1 === r ? "" : "s"}...` : "Generate " + (1 === r ? "link" : `${r} links`);
  }
  function L(e) {
    [ n.signIn, n.createAccount, n.refreshAccount, n.signOut ].forEach(t => {
      t.disabled = e;
    });
  }
  async function E(e) {
    let t = {};
    try {
      t = await e.json();
    } catch {}
    if (!e.ok) throw new Error(t.error || t.message || `Request failed (${e.status})`);
    return t;
  }
  function P(e) {
    f = e;
    try {
      sessionStorage.setItem(t, JSON.stringify(e));
    } catch {}
    return F(), e;
  }
  function I() {
    f = null;
    try {
      sessionStorage.removeItem(t);
    } catch {}
    F();
  }
  function M(e) {
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
  async function j(e, t, a, n = !1) {
    if (!m.enabled || !m.apiKey) throw new Error("Free account access is not configured yet.");
    const r = "token" === e ? "https://securetoken.googleapis.com/v1" : "https://identitytoolkit.googleapis.com/v1", i = await fetch(`${r}/${t}?key=${encodeURIComponent(m.apiKey)}`, {
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
  function z(e, t = {}) {
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
  async function O(e) {
    const t = await j("identity", "accounts:lookup", {
      idToken: e
    }), a = t.users?.[0];
    return {
      uid: a?.localId || "",
      email: a?.email || "",
      emailVerified: Boolean(a?.emailVerified)
    };
  }
  async function B(e) {
    const t = await E(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/me", {
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
  function R() {
    return Boolean(f?.premiumAccess || [ "premium", "trialing" ].includes(String(f?.subscriptionStatus || "").toLowerCase()));
  }
  function U() {
    return "administrator" === r || "account" === r && R();
  }
  function D() {
    return "surge" === v() ? 1 : "p2p" === n.generationMethod.value && U() ? s : U() ? o : c;
  }
  async function _() {
    if (!f?.idToken) return f;
    const e = await B(f.idToken);
    return P({
      ...f,
      ...e
    });
  }
  async function G() {
    if (!f?.refreshToken) throw new Error("Sign in again.");
    return P(z(await j("token", "token", {
      grant_type: "refresh_token",
      refresh_token: f.refreshToken
    }, !0), f));
  }
  async function q() {
    if (!f) throw new Error("Sign in to use the Link Generator.");
    return f.expiresAt - Date.now() < 6e4 && await G(), await _(), f;
  }
  function F() {
    const e = Boolean(f?.idToken), t = e && R();
    n.accountFields.hidden = e, n.signIn.hidden = e, n.createAccount.hidden = e, n.signOut.hidden = !e, 
    n.refreshAccount.hidden = !0, n.accountStatus.className = "account-status" + (e ? " good" : ""), 
    n.accountStatus.textContent = e ? t ? `${f.email || "Account"} has Premium access. No access code is required.` : `Signed in. You can create up to ${c} links per ${l}-minute window.` : `Sign in to create up to ${c} links per hour.`;
    const a = n.modeButtons.find(e => "account" === e.dataset.accessMode);
    a && (a.textContent = t ? "Premium account" : "Account"), "account" === r && V();
  }
  function V() {
    const e = U(), t = "p2p" === n.generationMethod.value, a = D();
    n.amountField.hidden = "surge" === v(), n.detailsGrid.classList.add("premium"), 
    n.amount.max = String(a), Number.parseInt(n.amount.value, 10) > a && (n.amount.value = String(a)), 
    n.amountHint.textContent = e && t ? `P2P can publish up to ${s.toLocaleString()} links per run through your GitHub token. Automatic repositories roll over at 1,000 SVGs.` : e ? `Choosing ${u}-${o} links starts a ${h}-minute cooldown. Smaller batches start it after ${d} total links.` : `Regular accounts can create up to ${c} links during each ${l}-minute window.`, 
    W();
  }
  function H(e) {
    r = e, n.accountPanel.hidden = "account" !== e, n.administratorPanel.hidden = "administrator" !== e, 
    V(), n.modeButtons.forEach(t => {
      const a = t.dataset.accessMode === e;
      t.classList.toggle("active", a), t.setAttribute("aria-selected", String(a));
    });
  }
  function J() {
    const e = D(), t = Number.parseInt(n.amount.value, 10);
    return Number.isInteger(t) ? Math.max(1, Math.min(e, t)) : 1;
  }
  function W() {
    const e = J(), t = "p2p" === n.generationMethod.value;
    n.reviewAmountRow.hidden = !1, n.reviewAmount.textContent = `${e} link${1 === e ? "" : "s"}`, 
    n.confirmText.textContent = "surge" === v() ? "I understand this publishes a public Nyx wrapper on the configured Surge account. Surge account limits apply." : "bunny" === v() ? `I understand this creates ${e} Bunny pull zone${1 === e ? "" : "s"} on the configured Bunny account, with its bandwidth charges and limits.` : t ? `I understand P2P bulk-publishes ${1 === e ? "one Nyx launcher" : `${e} Nyx launchers`} through Nyx's protected server publisher.` : `I understand this publishes ${1 === e ? "one Nyx launcher" : `${e} Nyx launchers`} through a GitHub repository.`, 
    n.button.disabled || (n.button.querySelector("span").textContent = "Generate " + (1 === e ? "link" : `${e} links`));
  }
  function K() {
    const e = "p2p" === n.generationMethod.value;
    n.generationMethodHint.textContent = e ? `P2P bulk-publishes up to ${s.toLocaleString()} Nyx links directly and keeps the GitHub credential on the Nyx server.` : "Nyx managed uses the protected server publisher; its GitHub credential never reaches your browser.", 
    V();
  }
  function Y(e, t = (e >= i ? "forward" : "back")) {
    const a = Math.max(0, Math.min(n.wizardSteps.length - 1, Number(e) || 0));
    i = a, n.wizardCard.classList.remove("wizard-forward", "wizard-back"), n.wizardCard.offsetWidth, 
    n.wizardCard.classList.add("back" === t ? "wizard-back" : "wizard-forward"), n.wizardSteps.forEach((e, t) => {
      const n = t === a;
      e.hidden = !n, e.classList.toggle("active", n);
    }), n.form.hidden = 3 === a, n.wizardIndicators.forEach((e, t) => {
      e.classList.toggle("active", t === a), e.classList.toggle("complete", t < a), t === a ? e.setAttribute("aria-current", "step") : e.removeAttribute("aria-current");
    }), document.dispatchEvent(new CustomEvent("nyx-generator-step", {
      detail: a
    })), n.wizardProgress.style.width = a / (n.wizardSteps.length - 1) * 100 + "%";
  }
  async function X(e) {
    const t = e?.currentTarget;
    t && (t.disabled = !0);
    try {
      if (0 === i) {
        if (!await async function() {
          if ($(""), "administrator" === r) {
            if (!n.accessCode.value) return $("Enter your Premium access code to continue.", "error"), 
            n.accessCode.focus(), !1;
            try {
              if ($("Checking your Premium access code..."), !0 !== (await E(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/validate-access", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  accessCode: n.accessCode.value
                })
              }))).valid) throw new Error("The Premium access code could not be verified.");
              return !0;
            } catch (e) {
              return $(e.message || "The Premium access code is incorrect.", "error"), n.accessCode.focus(), 
              n.accessCode.select(), !1;
            }
          }
          if (!m.enabled) return $("Free account access is not configured yet. Choose Premium users to continue.", "error"), 
          !1;
          if (!f?.idToken) return $("Sign in or create a free account before continuing.", "error"), 
          n.email.focus(), !1;
          try {
            return await q(), F(), !0;
          } catch (e) {
            return $(M(e), "error"), !1;
          }
        }()) return;
        return $(""), void Y(1);
      }
      if (1 === i) {
        if (!n.filter.value) return $("Choose a content filter before continuing.", "error"), 
        void n.filter.focus();
        const e = Number.parseInt(n.amount.value, 10), t = D();
        if (!Number.isInteger(e) || e < 1 || e > t) return $(`Choose an amount from 1 to ${t}.`, "error"), 
        void n.amount.focus();
        $(""), a("[data-review-cdn]").textContent = "surge" === v() ? "Surge - new .surge.sh address" : "bunny" === v() ? "Bunny.net \xb7 b-cdn.net" : S(), 
        n.reviewAccess.textContent = "account" === r ? R() ? `${f?.email || "Account"} \xb7 Premium` : f?.email || "Free account" : "Premium access code", 
        n.reviewLabel.textContent = n.label.value.trim() || "Automatic", n.reviewFilter.textContent = n.filter.options[n.filter.selectedIndex]?.textContent || "Not selected", 
        n.reviewOrigin.textContent = n.origin.textContent || "Official Nyx origin", n.reviewMethod.textContent = "surge" === v() ? "Nyx Surge publisher" : "p2p" === n.generationMethod.value ? "P2P" : "Nyx managed", 
        W(), Y(2);
      }
    } finally {
      t && (t.disabled = !1);
    }
  }
  function Q(e) {
    return String("string" == typeof e ? e : e?.key || e?.filter || "").trim().toLowerCase();
  }
  function Z(e, t, a, r) {
    n.filterCheck.className = `filter-check ${e}`, n.filterCheckLabel.textContent = t, 
    n.filterCheckState.textContent = a, n.filterCheckDetail.textContent = r;
  }
  function ee(e, t = "") {
    n.open.dataset.ready = String(Boolean(e)), n.open.classList.toggle("disabled", !e), 
    n.open.setAttribute("aria-disabled", String(!e)), n.open.textContent = e ? "Open first" : "Starting CDN...", 
    n.open.dataset.readinessMessage = t || "";
  }
  async function te(e) {
    return E(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/readiness", {
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
  async function ae(e, t = 12) {
    ee(!1, "This link is still being prepared.");
    let a = "This link is still being prepared.";
    for (let r = 0; r < t; r += 1) {
      try {
        const t = await te(e);
        if (a = t.message || a, t.ready) return ee(!0, ""), !0;
        if ("disabled" === t.state || "suspended" === t.state) return ee(!1, a), !1;
      } catch (n) {
        a = n.message || a;
      }
      r < t - 1 && await new Promise(e => setTimeout(e, 2500));
    }
    return ee(!1, a), !1;
  }
  async function ne(t, a) {
    try {
      const n = await E(await fetch(`${e}/check`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: t,
          vendor: a
        }),
        cache: "no-store"
      })), r = n?.vendors && "object" == typeof n.vendors ? n.vendors : {}, i = r[a] || Object.values(r)[0] || (Array.isArray(n?.results) ? n.results[0] : n?.result || n);
      return i?.error || !1 === i?.ok ? "error" : !0 === i?.blocked ? "blocked" : !1 === i?.blocked ? "allowed" : "info";
    } catch {
      return "error";
    }
  }
  async function re(e, t, a) {
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
          const t = new URL(e), n = p.has(t.hostname.toLowerCase()) && t.pathname.match(/^\/gh\/([^/]+)\/([^/]+@[^/]+)\/[^/]+\.svg$/i);
          n && (a = `cdn:${t.hostname}:${n[1].toLowerCase()}/${n[2].toLowerCase()}`);
        } catch {}
        const n = t.get(a);
        n ? n.count += 1 : t.set(a, {
          url: e,
          count: 1
        });
      }), [ ...t.values() ];
    }(e), i = r.length < e.length;
    Z("checking", a, `Checking 0 of ${e.length}`, i ? `Nyx is checking ${r.length} shared CDN source${1 === r.length ? "" : "s"} for ${e.length} identical generated links.` : `Nyx is checking ${1 === e.length ? "this link" : "each generated link"} once.`);
    let o = 0, s = 0;
    await Promise.all(Array.from({
      length: Math.min(5, r.length)
    }, async () => {
      for (;o < r.length; ) {
        const i = o;
        o += 1;
        const c = r[i], l = await ne(c.url, t);
        n[l] += c.count, s += c.count, Z("checking", a, `Checking ${s} of ${e.length}`, "Completed checks appear here when the batch finishes.");
      }
    })), n.blocked ? Z("blocked", a, `${n.blocked} blocked`, `Sorry, but ${n.blocked === e.length ? "all of those links are" : `${n.blocked} of ${e.length} links are`} currently blocked.`) : n.error ? Z("error", a, `${n.error} unchecked`, `${n.allowed} allowed; ${n.error} could not be checked.`) : n.info ? Z("info", a, `${n.info} informational`, `${n.allowed} allowed; ${n.info} did not return a blocked or allowed decision.`) : Z("allowed", a, `${n.allowed} allowed`, 1 === e.length ? "The selected filter currently reports this link as allowed." : i ? `One representative check covered all ${e.length} identical Nyx SVG links from the shared CDN source.` : "The selected filter currently reports every generated link as allowed.");
  }
  A.catch(() => {}), n.modeButtons.forEach(e => e.addEventListener("click", () => H(e.dataset.accessMode))), 
  a("[data-bulk-label]").addEventListener("input", () => {
    a("[data-bulk-filename]").textContent = `${a("[data-bulk-label]").value.toLowerCase() || "nyx"}-learning-[random 32-character code].svg`;
  }), a("[data-bulk-setup]").addEventListener("submit", async e => {
    if (e.preventDefault(), n.button.disabled) return;
    const t = Number(a("[data-bulk-amount]").value);
    if (!(!Number.isSafeInteger(t) || t < 1 || t > 1e5)) if (t > D()) try {
      (await A).start({
        total: t,
        label: a("[data-bulk-label]").value,
        host: a("[data-bulk-host]").value
      }), a("[data-bulk-job]").hidden = !1;
    } catch (r) {
      $(r.message, "error");
    } else n.label.value = a("[data-bulk-label]").value, w.value = "jsdelivr", C(), 
    n.generationMethod.value = "managed", K(), n.amount.value = String(Math.min(D(), Number(a("[data-bulk-amount]").value))), 
    g.value = a("[data-bulk-host]").value, n.confirm.checked = !1, W(), Y(0), $("Your link options are ready. Continue through access, details, and review to publish."), 
    n.wizardCard.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }), a("[data-download-links]").addEventListener("click", () => {
    if (!n.resultUrl.value) return;
    const e = URL.createObjectURL(new Blob([ n.resultUrl.value + "\n" ], {
      type: "text/plain;charset=utf-8"
    })), t = document.createElement("a");
    t.href = e, t.download = `nyx-${b}-links.txt`, document.body.appendChild(t), t.click(), 
    t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
  }), n.amount.addEventListener("input", W), n.generationMethod.addEventListener("change", K), 
  w.addEventListener("change", C), n.wizardNext.forEach(e => e.addEventListener("click", X)), 
  n.wizardBack.forEach(e => e.addEventListener("click", () => {
    $(""), Y(i - 1, "back");
  })), n.wizardRestart.addEventListener("click", () => {
    n.label.value = "", n.filter.value = "", n.confirm.checked = !1, n.resultCard.hidden = !0, 
    $(""), Y(1, "back");
  }), n.signIn.addEventListener("click", async function() {
    const e = n.email.value.trim(), t = n.password.value;
    if (!e || !t) return n.accountStatus.textContent = "Enter your email and password.", 
    void (n.accountStatus.className = "account-status error");
    L(!0);
    try {
      P(z(await j("identity", "accounts:signInWithPassword", {
        email: e,
        password: t,
        returnSecureToken: !0
      })));
      const [a, r] = await Promise.all([ O(f.idToken), B(f.idToken) ]);
      P({
        ...f,
        ...a,
        ...r
      }), n.password.value = "";
    } catch (a) {
      n.accountStatus.textContent = M(a), n.accountStatus.className = "account-status error";
    } finally {
      L(!1);
    }
  }), n.createAccount.addEventListener("click", async function() {
    const e = n.email.value.trim(), t = n.password.value;
    if (!e || t.length < 6) return n.accountStatus.textContent = "Enter an email and a password with at least 6 characters.", 
    void (n.accountStatus.className = "account-status error");
    L(!0);
    try {
      P(z(await j("identity", "accounts:signUp", {
        email: e,
        password: t,
        returnSecureToken: !0
      }), {
        email: e,
        emailVerified: !1
      })), await _(), n.password.value = "", F();
    } catch (a) {
      n.accountStatus.textContent = M(a), n.accountStatus.className = "account-status error";
    } finally {
      L(!1);
    }
  }), n.signOut.addEventListener("click", I), n.form.addEventListener("submit", async e => {
    if (e.preventDefault(), !n.filter.value) return $("Choose a content filter before generating the link.", "error"), 
    void n.filter.focus();
    const t = n.filter.value, a = n.filter.options[n.filter.selectedIndex]?.textContent || t;
    $(""), n.resultCard.hidden = !0, T(!0);
    try {
      const e = {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, i = "p2p" === n.generationMethod.value ? "p2p" : "managed", o = v(), s = {
        label: n.label.value,
        provider: o,
        method: "bunny" === o ? "managed" : i
      };
      if ("account" === r) {
        const t = await q();
        e.Authorization = `Bearer ${t.idToken}`, s.amount = J();
      } else {
        if (!n.accessCode.value) throw new Error("Enter your Premium access code.");
        s.accessCode = n.accessCode.value, s.amount = J();
      }
      let c;
      for (;;) {
        const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator", {
          method: "POST",
          headers: e,
          body: JSON.stringify(s)
        });
        if (429 === t.status) {
          const e = await t.clone().json().catch(() => ({}));
          if ("STATIC_PACKAGE_PREPARING" === e.code) {
            $(e.error), await new Promise(e => setTimeout(e, 1e3 * Math.max(1, Math.min(60, Number(t.headers.get("Retry-After")) || 10))));
            continue;
          }
        }
        c = await E(t);
        break;
      }
      const l = (Array.isArray(c.links) ? c.links : []).map(e => "string" == typeof e ? e : e?.url).filter(Boolean).map(e => x(e, S()));
      if (!l.length && c.url && l.push(x(c.url, S())), !l.length) throw new Error("The link provider did not return any generated links.");
      b = o;
      const u = "bunny" !== o;
      n.resultUrl.value = l.join("\n"), n.resultCount.textContent = `${l.length} link${1 === l.length ? "" : "s"}`, 
      n.resultTitle.textContent = 1 === l.length ? "Your Nyx link is ready" : "Your Nyx links are ready", 
      n.resultSubtitle.textContent = c.partial ? `${l.length} of ${c.requested} requested links were created.` : (1 === l.length ? "The link was" : "All links were") + " created successfully.", 
      n.open.href = l[0], ee(u), n.resultCard.hidden = !1, n.accessCode.value = "", Y(3), 
      requestAnimationFrame(() => n.resultCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      }));
      const [, m] = await Promise.all([ re(l, t, a), u ? Promise.resolve(!0) : ae(l[0]) ]), f = c.premiumCooldown, p = "administrator" === c.access || "premium" === c.access, g = f?.triggered ? `${l.length} link${1 === l.length ? " was" : "s were"} created. A ${f.minutes || h}-minute Premium cooldown is now active.` : `${l.length} link${1 === l.length ? " was" : "s were"} created with Premium access. ${f?.accumulated || 0} of ${f?.accumulatedLimit || d} links accumulated before cooldown.`;
      c.partial ? $(c.warning || `${l.length} of ${c.requested} links were created.`, "error") : m ? $(p ? g : `${l.length} link${1 === l.length ? " was" : "s were"} created. ${c.remaining} link${1 === c.remaining ? "" : "s"} remaining in your current hourly window.`) : $(`${p ? `${g} ` : ""}${n.open.dataset.readinessMessage || "The link was created, but the CDN is still provisioning it. Try Open first again shortly."}`, "error");
    } catch (i) {
      $(i.message, "error");
    } finally {
      T(!1);
    }
  }), n.open.addEventListener("click", async e => {
    if ("true" === n.open.dataset.ready) return;
    e.preventDefault();
    const t = n.open.href;
    $(n.open.dataset.readinessMessage || "This link is still being prepared. Checking again...", "error");
    const a = await ae(t, 1);
    $(a ? "The CDN link is ready. Select Open first again." : n.open.dataset.readinessMessage || "The CDN link is not ready yet.", a ? "" : "error");
  }), n.copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(n.resultUrl.value), n.copy.textContent = "Copied all", 
      setTimeout(() => {
        n.copy.textContent = "Copy all";
      }, 1400);
    } catch {
      n.resultUrl.select(), document.execCommand("copy");
    }
  }), function() {
    if ("tutsi" === document.documentElement.dataset.appShell) return;
    let e = "default";
    try {
      e = localStorage.getItem("nyx.theme") || "default";
    } catch {}
    e && "default" !== e && document.body.classList.add(`theme-${e}`);
  }(), F(), C(), Y(0), Promise.all([ async function() {
    try {
      const e = await E(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/status", {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      })), t = w.querySelector('[value="surge"]');
      t.hidden = !0 !== e.surgeAvailable, t.disabled = !0 !== e.surgeAvailable, "surge" !== v() || e.surgeAvailable || (w.value = "jsdelivr", 
      C());
      const a = w.querySelector('[value="bunny"]');
      a.disabled = !e.bunnyAvailable, a.textContent = e.bunnyAvailable ? "Bunny.net pull zones" : "Bunny.net pull zones (server key not configured)", 
      c = Math.max(1, Math.min(100, Number.parseInt(e.freeHourlyLimit, 10) || 100)), l = Math.max(1, Number.parseInt(e.freeWindowMinutes, 10) || 60), 
      o = Math.max(c, Math.min(1e4, Number.parseInt(e.premiumBatchLimit, 10) || c)), s = Math.max(o, Math.min(1e4, Number.parseInt(e.p2pPremiumBatchLimit, 10) || 1e3)), 
      u = Math.max(1, Number.parseInt(e.premiumImmediateCooldownAt, 10) || 5), d = Math.max(u, Number.parseInt(e.premiumAccumulatedLimit, 10) || 30), 
      h = Math.max(1, Number.parseInt(e.premiumCooldownMinutes, 10) || 10), F(), V(), 
      n.origin.textContent = e.origin || "Not configured", y = e, k(), e.available || $("The Nyx administrator still needs to finish the Link Generator server settings.", "error");
    } catch (e) {
      n.origin.textContent = "Unavailable", N(!1, "Unavailable"), $(`Could not check the generator: ${e.message}`, "error");
    }
  }(), async function() {
    try {
      m = await E(await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator/auth-config", {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      }));
    } catch {
      m = {
        enabled: !1,
        apiKey: ""
      };
    }
    if (n.modeButtons.find(e => "account" === e.dataset.accessMode).disabled = !m.enabled, 
    m.enabled || H("administrator"), f?.idToken) try {
      f.expiresAt - Date.now() < 6e4 && await G(), await _();
    } catch {
      I();
    }
    F();
  }(), async function() {
    try {
      const t = await E(await fetch(`${e}/vendors`, {
        headers: {
          Accept: "application/json"
        },
        cache: "no-store"
      })), a = Array.isArray(t) ? t : t.vendors;
      if (!Array.isArray(a) || !a.length) throw new Error("No filters are currently available.");
      n.filter.textContent = "";
      const r = document.createElement("option");
      r.value = "", r.textContent = "Choose a content filter", n.filter.append(r), a.forEach(e => {
        const t = Q(e);
        if (!t) return;
        const a = document.createElement("option");
        a.value = t, a.textContent = function(e) {
          const t = Q(e), a = String("string" == typeof e ? e : e?.label || e?.filter || e?.key || "Content filter"), n = {
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
        }(e), n.filter.append(a);
      }), n.filter.disabled = !1;
    } catch (t) {
      n.filter.innerHTML = '<option value="">Filter list unavailable</option>', n.filter.disabled = !0, 
      $(`Could not load the content filters: ${t.message}`, "error");
    }
  }() ]);
})();
