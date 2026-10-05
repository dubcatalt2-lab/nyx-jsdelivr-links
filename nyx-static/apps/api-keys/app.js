(() => {
  "use strict";
  const e = e => document.querySelector(e), t = "google/gemini-2.5-flash-lite", n = "openai/gpt-5.6-luna";
  let o = 0, a = 0;
  function r() {
    clearTimeout(o), a++, e("#owner-key-value") && (e("#owner-key-value").value = ""), 
    e("#owner-key-reveal") && (e("#owner-key-reveal").hidden = !0);
  }
  let i = null, s = "", l = "", c = !1, d = null;
  function u(e) {
    "owner" !== e && r(), [ "keys", "usage", "playground", "owner" ].includes(e) || (e = "keys"), 
    "owner" !== e || c || (e = "keys"), document.querySelectorAll("[data-page]").forEach(t => t.hidden = t.dataset.page !== e), 
    document.querySelectorAll("[data-tab]").forEach(t => {
      t.dataset.tab === e ? t.setAttribute("aria-current", "page") : t.removeAttribute("aria-current");
    });
  }
  document.querySelectorAll("[data-tab]").forEach(e => e.onclick = () => {
    location.hash = e.dataset.tab, u(e.dataset.tab);
  }), addEventListener("hashchange", () => u(location.hash.slice(1))), u(location.hash.slice(1));
  const m = window.parent !== window, p = (e, t) => {
    try {
      return localStorage.getItem(e) || t;
    } catch {
      return t;
    }
  };
  function y() {
    if (m) {
      try {
        document.documentElement.style.setProperty("--nyx-font", getComputedStyle(parent.document.body).fontFamily);
      } catch {}
      return;
    }
    const e = {
      outfit: "Outfit",
      raleway: "Raleway",
      nunito: "Nunito",
      inter: "Inter",
      poppins: "Poppins",
      quicksand: "Quicksand",
      lexend: "Lexend",
      montserrat: "Montserrat",
      atkinson: "Atkinson Hyperlegible"
    }[p("nyx.font", "outfit")] || "Outfit";
    document.documentElement.style.setProperty("--nyx-font", `"${e}",Arial,sans-serif`);
    let t = document.getElementById("nyx-api-font");
    t || (t = document.createElement("link"), t.id = "nyx-api-font", t.rel = "stylesheet", 
    document.head.append(t));
    const n = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e).replaceAll("%20", "+")}:wght@400;500;600;700&display=swap`;
    t.href !== n && (t.href = n);
    const o = p("nyx.beamWallpaper", "frost");
    document.documentElement.dataset.nyxBeamWallpaper = o;
    const a = p("nyx.customThemeColor", ""), r = "custom" === p("nyx.theme", "default") && /^#[a-f0-9]{6}$/i.test(a) ? {
      lightColor: a
    } : {};
    window.NyxBeamsWallpaper?.apply(o, r), window.NyxLineWavesWallpaper?.apply(o, {
      colorVariant: p("nyx.lineWaves.colorVariant", "frost")
    });
  }
  if (!m) {
    document.documentElement.classList.add("nyx-api-standalone");
    for (const e of [ "nyxBeamsBg", "nyxLineWavesBg" ]) {
      const t = document.createElement("canvas");
      t.id = e, t.setAttribute("aria-hidden", "true"), document.body.prepend(t);
    }
    (async () => {
      for (const e of [ "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/vendor/three.r134.min.js", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@rb68750c01c864a9ef9f8eae1!.js", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@rd53edf8afd9e3315fe3c5521!.js" ]) await new Promise((t, n) => {
        const o = document.createElement("script");
        o.src = e, o.onload = t, o.onerror = n, document.head.append(o);
      });
      y();
    })().catch(() => {});
  }
  y(), addEventListener("storage", y), addEventListener("message", e => {
    e.source === parent && e.origin === location.origin && "nyx:theme-sync" === e.data?.type && y();
  });
  const g = t => {
    e("#notice").textContent = t;
  };
  async function h(t, n, o) {
    const a = await async function(e = !1) {
      const t = e ? "" : await async function() {
        if (window.parent === window) return "";
        const e = `keys-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise(t => {
          let n = !1;
          const o = e => {
            n || (n = !0, clearTimeout(r), removeEventListener("message", a), t(String(e || "")));
          }, a = t => {
            t.source === parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data.requestId === e && o(t.data.token);
          }, r = setTimeout(() => o(""), 2500);
          addEventListener("message", a), parent.postMessage({
            type: "nyx:account-token-request",
            requestId: e
          }, location.origin);
        });
      }();
      if (t && !e) return t;
      if (m && !e) return t;
      const n = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
        cache: "no-store"
      }), o = await n.json();
      if (!o?.enabled || !o?.apiKey || !o?.projectId) return "";
      const [{initializeApp: a, getApps: r}, {getAuth: s, setPersistence: l, browserLocalPersistence: c}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), d = s(r().find(e => "nyx-founder-owner" === e.name) || a({
        apiKey: o.apiKey,
        authDomain: `${o.projectId}.firebaseapp.com`,
        projectId: o.projectId
      }, "nyx-founder-owner"));
      i = d;
      try {
        await l(d, c);
      } catch {}
      return "function" == typeof d.authStateReady && await d.authStateReady(), d.currentUser ? d.currentUser.getIdToken() : "";
    }();
    if (!a) throw r(), e("#sign-in").hidden = !1, e("#create-button").disabled = !0, 
    e("#account").textContent = "Sign in to Nyx to view your API access.", e("#owner-tab").hidden = !0, 
    c = !1, u("keys"), e("#management").hidden = !0, e("#secret").value = "", e("#playground-key").value = "", 
    e("#reveal").hidden = !0, e("#members-rows").replaceChildren(), l = "", Error("Sign in to Nyx to continue.");
    const s = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/developer" + t, {
      method: o || (n ? "POST" : "GET"),
      cache: "no-store",
      headers: {
        Authorization: "Bearer " + a,
        "Content-Type": "application/json"
      },
      ...n ? {
        body: JSON.stringify(n)
      } : {}
    }), d = await s.json();
    if (!s.ok) throw Error(d.error || "Request failed.");
    return d;
  }
  const k = e => async t => {
    t?.preventDefault();
    const n = t?.submitter || t?.currentTarget;
    "BUTTON" === n?.tagName && (n.disabled = !0);
    try {
      await e(t);
    } catch (o) {
      g(o.message);
    } finally {
      "BUTTON" === n?.tagName && "create-button" !== n.id ? n.disabled = !1 : "create-button" === n?.id && await w().catch(() => {});
    }
  };
  async function w() {
    const o = await h("/me");
    l !== o.uid && (r(), l = o.uid, s = "", e("#secret").value = "", e("#playground-key").value = "", 
    e("#reveal").hidden = !0, e("#members-rows").replaceChildren(), e("#uid").value = ""), 
    e("#sign-in").hidden = !0, e("#account").textContent = `${o.unlimited ? "Unlimited" : o.balance.toLocaleString()} tokens remaining | ${o.usedTokens || 0} used | ${o.dailyRequests} requests/day | ${o.minuteRequests}/minute. User ID: ${o.uid}`, 
    e("#create-button").disabled = Boolean(o.key) || !o.configured, (o.modelAllowances || o.tokenPool) && (e("#account").textContent += " " + b(o)), 
    e("#revoke").hidden = !o.key, e("#key").textContent = o.key ? `${o.key.label}: ${o.key.prefix}...` : "No active key.", 
    c = o.owner, e("#owner-tab").hidden = !o.owner, u(location.hash.slice(1)), function(t) {
      e("#usage-remaining").textContent = t.unlimited ? "Unlimited" : Math.max(0, t.balance).toLocaleString(), 
      e("#usage-used").textContent = (t.usedTokens || 0).toLocaleString(), e("#usage-requests").textContent = `${t.requestsToday || 0} / ${t.dailyRequests}`, 
      e("#usage-meter").max = Math.max(1, t.grantedTokens || t.balance + (t.usedTokens || 0)), 
      e("#usage-meter").value = Math.max(0, t.balance), e("#usage-limits").textContent = `${t.minuteRequests} requests/minute. Maximum ${t.maxOutput} output tokens/request. ${t.tokenPool ? "All accessible AI models share a " + t.tokenPool.limit.toLocaleString() + "-token pool for 4 days. " + t.tokenPool.remaining.toLocaleString() + " tokens remaining; resets " + new Date(t.tokenPool.resetAt).toLocaleDateString() + "." : "Daily requests reset at 00:00 UTC; token balances do not refill automatically."}${t.pending ? " A request is in progress; its tokens are reserved." : ""}`, 
      (t.modelAllowances || t.tokenPool) && (e("#usage-limits").textContent += " " + b(t) + (t.legacyTokens ? " Earlier combined usage is included in both limits until the next monthly reset." : ""));
      const o = e("#usage-rows");
      o.replaceChildren();
      for (const e of t.recent || []) {
        const t = document.createElement("tr");
        for (const o of [ new Date(e.at).toLocaleString(), e.model === n ? "GPT-5.6 Luna" : "Gemini 2.5 Flash Lite", e.tokens.toLocaleString(), {
          completed: "Completed",
          not_sent: "Not sent",
          unconfirmed: "Unconfirmed"
        }[e.status] || "Unconfirmed" ]) {
          const e = document.createElement("td");
          e.textContent = o, t.append(e);
        }
        o.append(t);
      }
      if (!o.children.length) {
        const e = document.createElement("tr"), t = document.createElement("td");
        t.colSpan = 4, t.textContent = "No requests yet. Try your first prompt in the playground.", 
        e.append(t), o.append(e);
      }
    }(o), function(o) {
      const a = e("#playground-model"), r = a.value;
      a.replaceChildren();
      for (const e of o.models || [ t ]) {
        const t = document.createElement("option");
        t.value = e, t.textContent = e === n ? "GPT-5.6 Luna" : "Gemini 2.5 Flash Lite", 
        a.append(t);
      }
      [ ...a.options ].some(e => e.value === r) && (a.value = r);
    }(o), e("#management").hidden = !o.unlocked, o.unlocked || r(), e("#unlock").hidden = Boolean(o.unlocked), 
    e("#uid").value || (e("#uid").value = o.uid), o.unlocked && !e("#members-rows").children.length && await v();
  }
  e("#refresh").onclick = k(async () => {
    await w(), g("Access refreshed.");
  }), e("#sign-in").onclick = e => {
    m && (e.preventDefault(), parent.postMessage({
      type: "nyx:account-open-signin"
    }, location.origin));
  }, addEventListener("message", e => {
    m && e.source === parent && e.origin === location.origin && "nyx:account-changed" === e.data?.type && w().then(() => g("Access refreshed.")).catch(e => g(e.message));
  }), addEventListener("focus", () => w().catch(e => g(e.message))), e("#create").onsubmit = k(async t => {
    const n = await h("/keys", {
      label: t.target.elements.label.value
    });
    e("#secret").value = n.key, e("#playground-key").value = n.key, e("#reveal").hidden = !1, 
    g("Key created. Copy it now."), await w();
  }), e("#revoke").onclick = k(async () => {
    await h("/keys", null, "DELETE"), e("#playground-key").value = "", e("#secret").value = "", 
    e("#reveal").hidden = !0, g("Key revoked. Your balance is preserved."), await w();
  }), e("#copy").onclick = k(async () => {
    await navigator.clipboard.writeText(e("#secret").value), g("Key copied.");
  }), e("#dismiss").onclick = () => {
    e("#secret").value = "", e("#reveal").hidden = !0;
  };
  let f = null;
  async function v(t = "") {
    const n = await h("/owner/accounts" + (t ? "?cursor=" + encodeURIComponent(t) : "")), o = e("#members-rows");
    o.replaceChildren();
    for (const a of n.members || []) {
      const t = document.createElement("tr");
      for (const e of [ a.name || a.uid, a.key?.prefix + "...", a.unlimited ? "Unlimited" : a.balance, a.usedTokens || 0 ]) {
        const n = document.createElement("td");
        n.textContent = String(e), t.append(n);
      }
      const n = document.createElement("td"), r = document.createElement("button");
      r.textContent = "Manage", r.onclick = k(async () => {
        e("#uid").value = a.uid, x(await h("/owner/account/" + encodeURIComponent(a.uid))), 
        e("#limits").scrollIntoView({
          block: "center"
        });
      }), n.append(r), t.append(n), o.append(t);
    }
    if (!o.children.length) {
      const e = document.createElement("tr"), t = document.createElement("td");
      t.colSpan = 5, t.textContent = "No active API keys.", e.append(t), o.append(e);
    }
    f = n.nextCursor, e("#members-next").hidden = !f;
  }
  function b(e) {
    return e.tokenPool ? `${e.tokenPool.remaining.toLocaleString()} / ${e.tokenPool.limit.toLocaleString()} pooled tokens left; resets ${new Date(e.tokenPool.resetAt).toLocaleDateString()}` : e.modelAllowances ? Object.entries(e.modelAllowances).map(([e, t]) => `${e === n ? "Luna" : "Gemini"}: ${t.remaining.toLocaleString()} / ${t.limit.toLocaleString()} tokens left`).join(" | ") : "";
  }
  function x(o) {
    r(), s = o.uid, e("#owner-show-key").disabled = !o.key?.revealAvailable, e("#owner-key-availability").textContent = o.key && !o.key.revealAvailable ? "Older key: only its hash was saved. The user must replace it to enable reveal." : "", 
    e("#target").textContent = `${o.uid}: ${o.unlimited ? "Unlimited" : o.balance} tokens remaining; ${o.usedTokens || 0} tokens used. ${o.key ? "Active key: " + o.key.prefix + "..." : "No key."}`, 
    (o.modelAllowances || o.tokenPool) && (e("#target").textContent += " " + b(o));
    const a = e("#limits").elements;
    for (const e of [ "dailyRequests", "minuteRequests", "maxOutput" ]) a[e].value = o[e];
    a.addTokens.value = 0;
    for (const [e, t] of [ [ "lunaMonthlyLimit", "luna" ], [ "geminiMonthlyLimit", "gemini" ] ]) a[e].value = o.monthlyModelLimits?.[t] ?? 0, 
    a[e].disabled = !0, a[e].closest("label").hidden = a[e].disabled;
    a.gemini.checked = o.models.includes(t), a.luna.checked = o.models.includes(n);
  }
  e("#members-refresh").onclick = k(() => v()), e("#members-next").onclick = k(() => v(f)), 
  e("#unlock").onsubmit = k(async e => {
    try {
      await h("/unlock", {
        password: e.target.elements.password.value
      }), await w(), await v(), g("Owner management unlocked for 15 minutes.");
    } finally {
      e.target.elements.password.value = "";
    }
  }), e("#lock").onclick = k(async () => {
    r(), await h("/lock", {}), await w(), g("Owner management locked.");
  }), e("#uid").oninput = () => {
    s = "";
  }, e("#lookup").onsubmit = k(async () => x(await h("/owner/account/" + encodeURIComponent(e("#uid").value.trim())))), 
  e("#limits").onsubmit = k(async e => {
    if (!s) throw Error("Load an account first.");
    const o = e.target.elements, a = {
      models: [ ...o.gemini.checked ? [ t ] : [], ...o.luna.checked ? [ n ] : [] ]
    };
    for (const t of [ "addTokens", "dailyRequests", "minuteRequests", "maxOutput" ]) a[t] = Number(o[t].value);
    o.lunaMonthlyLimit.disabled || (a.monthlyModelLimits = {
      luna: Number(o.lunaMonthlyLimit.value),
      gemini: Number(o.geminiMonthlyLimit.value)
    }), x(await h("/owner/account/" + encodeURIComponent(s), a)), g("Token balance and limits saved."), 
    await w();
  }), e("#owner-show-key").onclick = k(async function() {
    if (!s) throw Error("Load an account first.");
    r();
    const t = a, n = s, i = await h("/owner/account/" + encodeURIComponent(n) + "/reveal-key", {});
    t !== a || n !== s || e("#management").hidden || (e("#owner-key-value").value = i.key, 
    e("#owner-key-label").textContent = "API key for " + n, e("#owner-key-reveal").hidden = !1, 
    o = setTimeout(r, 6e4));
  }), e("#owner-key-copy").onclick = k(async () => {
    if (!e("#owner-key-value").value) throw Error("Reveal a key first.");
    await navigator.clipboard.writeText(e("#owner-key-value").value), g("Key copied.");
  }), e("#owner-key-hide").onclick = r, addEventListener("pagehide", r), document.addEventListener("visibilitychange", () => {
    document.hidden && r();
  }), e("#owner-revoke").onclick = k(async () => {
    if (r(), !s) throw Error("Load an account first.");
    await h("/owner/account/" + encodeURIComponent(s) + "/key", null, "DELETE"), x(await h("/owner/account/" + encodeURIComponent(s))), 
    g("User key revoked.");
  }), e("#usage-refresh").onclick = k(w), e("#playground").onsubmit = async t => {
    if (t.preventDefault(), d) return;
    d = new AbortController;
    const n = d, o = performance.now(), a = setTimeout(() => n.abort(), 125e3);
    e("#playground-send").disabled = !0, e("#playground-cancel").hidden = !1, e("#playground-send .spinner").hidden = !1, 
    e("#send-label").textContent = "Generating", e("#playground-result").hidden = !1, 
    e("#playground-meta").textContent = "Waiting for a response...", e("#playground-response").textContent = "", 
    e("#playground-limit").hidden = !0;
    try {
      const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/v1/ai", {
        method: "POST",
        signal: n.signal,
        headers: {
          Authorization: "Bearer " + e("#playground-key").value.trim(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: e("#playground-model").value,
          messages: [ {
            role: "user",
            content: e("#playground-prompt").value
          } ],
          max_tokens: Number(e("#playground-tokens").value)
        })
      }), a = await t.json();
      if (!t.ok) throw Error(a.error || "The request failed.");
      e("#playground-response").innerHTML = window.NyxMarkdown.render(a.choices?.[0]?.message?.content || "The model returned no text."), 
      e("#playground-limit").hidden = "length" !== a.choices?.[0]?.finish_reason, e("#playground-limit").textContent = "This response reached its token limit. Increase Maximum output tokens if your key allowance permits, or ask for a shorter answer.", 
      e("#playground-meta").textContent = `${((performance.now() - o) / 1e3).toFixed(1)} seconds | ${a.usage?.prompt_tokens || 0} input + ${a.usage?.completion_tokens || 0} output tokens`;
    } catch (r) {
      e("#playground-meta").textContent = n.signal.aborted ? "Request stopped" : "Request failed", 
      e("#playground-response").textContent = n.signal.aborted ? "The request was stopped. Check Usage for any reserved tokens." : r.message;
    } finally {
      clearTimeout(a), d = null, e("#playground-send").disabled = !1, e("#playground-cancel").hidden = !0, 
      e("#playground-send .spinner").hidden = !0, e("#send-label").textContent = "Run prompt", 
      await w().catch(() => {});
    }
  }, e("#playground-cancel").onclick = () => d?.abort(), e("#example").textContent = String.raw`curl ${location.origin}/api/v1/ai \
  -H "Authorization: Bearer YOUR_NYX_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"${t}","messages":[{"role":"user","content":"Hello"}],"max_tokens":128}'`, 
  w().catch(e => g(e.message));
})(), document.querySelector("#playground-response").addEventListener("click", async e => {
  const t = e.target.closest("[data-copy-code]");
  if (t) try {
    await navigator.clipboard.writeText(t.closest(".ai-code-block").querySelector("code").textContent), 
    t.querySelector("span").textContent = "Copied";
  } catch {
    t.querySelector("span").textContent = "Copy failed";
  }
});
