import { readResponse as i } from "./@r30e5b755a8942777cddfc0ef!.js";

import { renderReply as e } from "./@r30db43030bb8e80f711a5429!.js";

export function setupDeveloper({account: t, user: a, nook: o, secret: n, refresh: s}) {
  const l = e => document.getElementById(e);
  let r, c = 0;
  l("keyDialog").classList.toggle("nook-developer", o);
  const u = () => {
    c++, r?.abort(), r = null, l("playKey").value = "", l("playResult").replaceChildren(), 
    l("playStatus").textContent = "", l("playRun").disabled = !1, l("playCancel").hidden = !0;
  };
  function d(e) {
    document.querySelectorAll("[data-key-tab]").forEach(t => t.setAttribute("aria-selected", String(t.dataset.keyTab === e))), 
    document.querySelectorAll("[data-key-page]").forEach(t => t.hidden = t.dataset.keyPage !== e), 
    "playground" !== e || l("playKey").value || (l("playKey").value = l("createdKey").value || n()), 
    "usage" === e && s();
  }
  function p(e, t = "") {
    if (e) {
      for (const [a, o] of [ [ "Total", e.total ], [ "Expensive", e.expensive ] ]) l(t + "usage" + a).textContent = e.unlimited ? "Unlimited" : o.remaining.toLocaleString() + " / " + o.limit.toLocaleString() + " left", 
      l(t + "meter" + a).max = o.limit || 1, l(t + "meter" + a).value = e.unlimited ? 1 : Math.max(0, o.limit - o.used);
      l(t + "usageReset").textContent = e.unlimited ? "Your account has no token quota." : e.resetAt ? "Resets " + new Date(e.resetAt).toLocaleString() : "The four-day window starts with your first request.";
    }
  }
  function y() {
    const e = l("playModel").value || "MODEL_ID";
    l("nodeExample").textContent = `const key = process.env.NOOK_API_KEY;\nif (!key) throw new Error('Set NOOK_API_KEY first');\n\nconst response = await fetch(${JSON.stringify(location.origin + "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/v1/ai")}, {\n  method: 'POST',\n  headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },\n  body: JSON.stringify({\n    model: ${JSON.stringify(e)},\n    messages: [{ role: 'user', content: 'Explain this code: const sum = (a, b) => a + b;' }],\n    max_tokens: 512\n  })\n});\nconst data = await response.json();\nif (!response.ok) throw new Error(data.error || 'Nook request failed');\nconsole.log(data.choices?.[0]?.message?.content);`, 
    l("apiEndpoint").textContent = location.origin + "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/v1/ai", l("apiExample").textContent = `curl "${location.origin}/api/v1/ai" \\\n  -H "Authorization: Bearer $NOOK_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify({
      model: e,
      messages: [ {
        role: "user",
        content: "Hello"
      } ],
      max_tokens: 512
    })}'`;
  }
  return document.querySelectorAll("[data-key-tab]").forEach(e => e.onclick = () => d(e.dataset.keyTab)), 
  l("usagePage").hidden = !o, l("developerTabs").hidden = !o, l("usagePage").onclick = () => {
    a() ? (l("keyDialog").showModal(), d("usage")) : l("account").click();
  }, l("refreshUsage").onclick = () => {
    s();
  }, l("enableNookKey").onclick = async () => {
    try {
      l("enableNookKey").disabled = !0, await t("/enable", {}), await s();
    } catch (e) {
      l("keyError").textContent = e.message;
    } finally {
      l("enableNookKey").disabled = !1;
    }
  }, l("playModel").onchange = y, l("playForm").onsubmit = async t => {
    if (t.preventDefault(), r) return;
    const a = l("playKey").value.trim();
    if (!/^n_api_[A-Za-z0-9_-]{43}$/.test(a)) return void (l("playStatus").textContent = "Enter your account API key.");
    const o = ++c, n = new AbortController;
    r = n;
    const u = setTimeout(() => n.abort(), 125e3), d = performance.now();
    l("playRun").disabled = !0, l("playCancel").hidden = !1, l("playStatus").textContent = "Generating\u2026", 
    l("playResult").textContent = "";
    try {
      const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/v1/ai", {
        method: "POST",
        signal: n.signal,
        headers: {
          Authorization: "Bearer " + a,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: l("playModel").value,
          messages: [ {
            role: "user",
            content: l("playPrompt").value
          } ],
          max_tokens: Number(l("playTokens").value)
        })
      }), s = await i(t);
      if (o !== c) return;
      const r = s.choices?.[0];
      e(l("playResult"), r?.message?.content || "The model returned no text."), l("playStatus").textContent = `${((performance.now() - d) / 1e3).toFixed(1)}s \xb7 ${s.usage?.prompt_tokens ?? 0} input + ${s.usage?.completion_tokens ?? 0} output tokens` + ("length" === r?.finish_reason ? " \xb7 Output limit reached" : "");
    } catch (p) {
      o === c && (l("playStatus").textContent = n.signal.aborted ? "Stopped. Check Usage for tokens already processed." : p.message.replaceAll(a, "[key]"));
    } finally {
      clearTimeout(u), o === c && (r = null, l("playRun").disabled = !1, l("playCancel").hidden = !0, 
      await s());
    }
  }, l("playCancel").onclick = () => r?.abort(), l("copyExample").onclick = async () => {
    try {
      await navigator.clipboard.writeText(l("apiExample").textContent), l("copyExample").textContent = "Copied";
    } catch {
      l("keyError").textContent = "Select and copy the example manually.";
    }
  }, window.addEventListener("pagehide", u), {
    tab: d,
    update: function(e) {
      if (!o) return;
      l("enableNookKey").hidden = !e.key || "nook" === e.key.app;
      const t = l("playModel").value;
      l("playModel").replaceChildren();
      for (const o of e.catalog || []) {
        const e = document.createElement("option");
        e.value = o.id, e.textContent = o.label || o.id, l("playModel").append(e);
      }
      [ ...l("playModel").options ].some(e => e.value === t) && (l("playModel").value = t), 
      l("modelAccess").textContent = (e.models?.length || 0) + " models \xb7 same access as your account", 
      p(e.usage), l("otherBrowserUsage").hidden = !e.currentBrowserUsage, e.currentBrowserUsage && p(e.currentBrowserUsage, "current");
      const a = e.usage?.haiku;
      a && (l("usageHaiku").textContent = null === a.limitUsd ? "Unlimited" : `$${a.remainingUsd.toFixed(4)} / $${a.limitUsd.toFixed(2)} left`, 
      l("meterHaiku").max = a.limitUsd || 1, l("meterHaiku").value = null === a.limitUsd ? 1 : a.remainingUsd, 
      l("haikuReset").textContent = null === a.limitUsd ? "No account usage cap" : a.resetAt ? "Resets " + new Date(a.resetAt).toLocaleString() : "Per account, every four days. Starts with your first Haiku request.");
      const n = e.usage?.requestsToday || 0;
      l("usageRequests").textContent = n.toLocaleString() + (1 === n ? " request today" : " requests today") + (e.usage?.pending ? " \xb7 request in progress" : ""), 
      l("usageScope").textContent = e.key && "nook" !== e.key.app ? "Your existing key uses the older API allowance. In Keys, choose \u201cUse Nook models and allowance\u201d to share the pool shown here." : e.keyUsesCurrentBrowser ? "Chat and Nook keys share this browser\u2019s allowance." : "Your key uses the browser allowance it was first created with. This browser\u2019s chat allowance is shown separately.", 
      y();
    },
    clear: u
  };
}
