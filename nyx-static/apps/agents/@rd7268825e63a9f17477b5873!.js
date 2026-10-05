import { setupDeveloper as ye } from "./@ra471f2edc716491995358cbd!.js?v=20261002-haiku-v1";

import { readResponse as i } from "./@r30e5b755a8942777cddfc0ef!.js";

import { agentInstruction as ke } from "./@re855d9abb9cf6816c12aa27f!.js";

import { supportsConversationVoice as r } from "./@rebf6eb055a8f45edc8ae21e6!.js";

export function setupKeys({user: e, busy: t, changed: a, notice: o, appName: n = "Nook"}) {
  const c = e => document.getElementById(e);
  let s = "", l = "", u = 0, d = [], y = !1;
  const p = "Nook" === n, m = () => s.startsWith("n_api_") ? "account" : "openrouter";
  async function h(t, a, o) {
    const r = await (e()?.getIdToken());
    if (!r) throw Error("Sign in first.");
    return i(await fetch((p ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nook-developer" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/developer") + t, {
      method: o || (a ? "POST" : "GET"),
      headers: {
        Authorization: "Bearer " + r,
        "Content-Type": "application/json"
      },
      ...a ? {
        body: JSON.stringify(a)
      } : {},
      cache: "no-store"
    }));
  }
  const f = ye({
    account: h,
    user: e,
    nook: p,
    secret: () => s,
    refresh: () => v()
  });
  function k() {
    c("apiKeys").setAttribute("aria-pressed", String(!!s)), c("keyConnection").textContent = s ? "account" === m() ? "Using your account API key" : "Using your OpenRouter key" : "Using shared access";
  }
  function g() {
    c("createdKey").value = "", c("createdKeyPanel").hidden = !0, c("personalKey").value = "";
  }
  async function v() {
    const e = u;
    try {
      const t = await h("/me");
      if (e !== u) return;
      c("createAccountKey").disabled = !!t.key || !t.configured, c("revokeAccountKey").hidden = !t.key, 
      f.update(t), c("accountKeyStatus").textContent = t.key ? "Active key: " + t.key.prefix + "..." : "No active account API key.";
    } catch (t) {
      if (e !== u) return;
      c("accountKeyStatus").textContent = t.message, c("createAccountKey").disabled = !0;
    }
  }
  return c("apiKeys").onclick = () => {
    t() || (k(), f.tab("keys"), c("keyError").textContent = "", c("keyDialog").showModal(), 
    v());
  }, c("closeKeys").onclick = () => {
    y || (g(), f.clear(), c("keyDialog").close());
  }, c("keyDialog").addEventListener("cancel", e => {
    y ? e.preventDefault() : (g(), f.clear());
  }), c("keyDialog").addEventListener("close", () => {
    g(), f.clear();
  }), c("personalKeyForm").onsubmit = async e => {
    if (e.preventDefault(), t() || y) return;
    const o = c("personalKey").value.trim();
    if (!/^sk-or-[A-Za-z0-9_-]{20,}$/.test(o) && !/^n_api_[A-Za-z0-9_-]{43}$/.test(o)) return void (c("keyError").textContent = "Enter an OpenRouter or account API key.");
    y = !0;
    const r = u;
    c("usePersonalKey").disabled = !0;
    try {
      if (o.startsWith("sk-or-") && await i(await fetch("https://openrouter.ai/api/v1/key", {
        headers: {
          Authorization: "Bearer " + o
        },
        redirect: "error",
        cache: "no-store"
      })), r !== u) return;
      s = o, u++, k(), c("keyDialog").close(), await a();
    } catch (n) {
      r === u && (c("keyError").textContent = n.message.replaceAll(o, "[key]"));
    } finally {
      y = !1, c("usePersonalKey").disabled = !1;
    }
  }, c("useSharedKey").onclick = async () => {
    t() || y || (s = "", u++, k(), c("keyDialog").close(), await a());
  }, c("createAccountKey").onclick = async () => {
    if (y || t()) return;
    y = !0, c("createAccountKey").disabled = !0;
    const e = u;
    try {
      const t = await h("/keys", {
        label: c("accountKeyLabel").value.trim() || n
      });
      if (e !== u) return;
      c("createdKey").value = t.key, c("createdKeyPanel").hidden = !1, await v();
    } catch (a) {
      if (e !== u) return;
      c("keyError").textContent = a.message, await v();
    } finally {
      y = !1;
    }
  }, c("revokeAccountKey").onclick = async () => {
    if (y || t()) return;
    y = !0;
    const e = u;
    try {
      if (await h("/keys", null, "DELETE"), e !== u) return;
      g(), s && "account" === m() && (s = "", u++, k(), await a()), await v();
    } catch (o) {
      if (e !== u) return;
      c("keyError").textContent = o.message;
    } finally {
      y = !1;
    }
  }, c("copyCreatedKey").onclick = async () => {
    try {
      await navigator.clipboard.writeText(c("createdKey").value), o("Key copied.");
    } catch {
      o("Select the key and copy it manually.");
    }
  }, c("useCreatedKey").onclick = async () => {
    t() || y || !c("createdKey").value || (s = c("createdKey").value, u++, k(), c("keyDialog").close(), 
    await a());
  }, window.addEventListener("pagehide", () => {
    s = "", g();
  }), {
    revision: () => u,
    active: () => !!s,
    bind(e) {
      l !== e && (l = e, u++, s = "", d = [], f.clear(), g(), c("keyDialog").close(), 
      k());
    },
    async models() {
      if (!s) return null;
      const e = s, t = u;
      if ("account" === m()) {
        const e = await h("/me");
        if (t !== u) throw new DOMException("Account changed", "AbortError");
        return d = e.catalog || (e.models || []).map(e => ({
          id: e,
          label: e,
          text: !0,
          inputModalities: [ "text" ],
          outputModalities: [ "text" ]
        })), {
          models: d
        };
      }
      const a = await i(await fetch("https://openrouter.ai/api/v1/models", {
        headers: {
          Authorization: "Bearer " + e
        },
        redirect: "error",
        cache: "no-store"
      }));
      if (t !== u) throw new DOMException("Account changed", "AbortError");
      return d = (a.data || []).map(e => ({
        id: e.id,
        label: e.name || e.id,
        created: e.created,
        inputModalities: e.architecture?.input_modalities || [],
        outputModalities: e.architecture?.output_modalities || [ "text" ],
        text: (e.architecture?.output_modalities || [ "text" ]).includes("text"),
        vision: e.architecture?.input_modalities?.includes("image"),
        reasoning: e.supported_parameters?.includes("reasoning"),
        supportedParameters: e.supported_parameters || []
      })), {
        models: d
      };
    },
    async send(e, t, a) {
      const o = s, n = "account" === m(), c = d.find(t => t.id === e.model);
      if (n && !p && (e.image || e.generateAudio)) throw Error("Account API keys support text only. Use an OpenRouter key for images and voice.");
      const l = (e.messages || [ {
        role: "user",
        content: e.message
      } ]).map(e => ({
        role: e.role,
        content: e.content
      }));
      if ("computer-agent" === e.task && l.unshift({
        role: "system",
        content: ke
      }), e.image) {
        const t = l.at(-1);
        t.content = [ {
          type: "text",
          text: t.content
        }, {
          type: "image_url",
          image_url: {
            url: e.image.dataUrl
          }
        } ];
      }
      const u = {
        model: e.model,
        messages: l,
        max_tokens: n && !p ? 512 : "computer-agent" === e.task ? 4096 : 2048,
        stream: !(n && !p) && !1 !== e.stream
      };
      let y;
      if (c?.reasoning && (u.reasoning = {
        effort: e.reasoningEffort || "medium"
      }), e.generateAudio) {
        if (!r(c)) throw Error("Choose a conversational voice model.");
        y = e.model.startsWith("openai/") ? "pcm16" : "mp3", u.stream = !0, u.modalities = [ "text", "audio" ], 
        u.audio = {
          voice: e.voice || "alloy",
          format: y
        };
      }
      try {
        const e = await fetch(n ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/v1/ai" : "https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          signal: t,
          redirect: "error",
          headers: {
            Authorization: "Bearer " + o,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(u)
        }), r = await i(e, a, y);
        return r.choices ? {
          text: r.choices[0]?.message?.content || "",
          model: r.model,
          finishReason: r.choices[0]?.finish_reason
        } : r;
      } catch (h) {
        if ("AbortError" === h.name) throw h;
        throw Error(o ? h.message.replaceAll(o, "[key]") : h.message);
      }
    }
  };
}
