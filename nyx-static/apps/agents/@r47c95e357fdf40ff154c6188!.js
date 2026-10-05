import { supportsConversationVoice as r } from "./@rebf6eb055a8f45edc8ae21e6!.js";

import "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@r905cbda8fc37fc16b4a72a77!.js";

const be = e => String(e).replace(/[&<>"']/g, e => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[e])), ve = {
  openai: [ "OpenAI", "openai" ],
  anthropic: [ "Anthropic", "anthropic" ],
  google: [ "Google", "gemini" ],
  deepseek: [ "DeepSeek", "deepseek" ],
  qwen: [ "Qwen", "qwen" ],
  "x-ai": [ "xAI", "xai" ],
  xai: [ "xAI", "xai" ],
  mistralai: [ "Mistral", "mistral" ],
  moonshotai: [ "Moonshot", "moonshot" ],
  "z-ai": [ "Z.ai", "zai" ],
  inception: [ "Inception", "inception" ],
  nvidia: [ "NVIDIA", "nvidia" ],
  "meta-llama": [ "Meta", "meta" ],
  cohere: [ "Cohere", "cohere" ],
  minimax: [ "MiniMax", "minimax" ],
  openrouter: [ "OpenRouter", "openrouter" ],
  xiaomi: [ "Xiaomi", "xiaomimimo" ],
  amazon: [ "Amazon", "aws" ],
  microsoft: [ "Microsoft", "microsoft" ],
  perplexity: [ "Perplexity", "perplexity" ],
  stepfun: [ "StepFun", "stepfun" ],
  baidu: [ "Baidu", "baidu" ],
  bytedance: [ "ByteDance", "bytedance" ],
  arcee: [ "Arcee", "arcee" ],
  ai21: [ "AI21", "ai21" ],
  "arcee-ai": [ "Arcee", "arcee" ],
  "bytedance-seed": [ "ByteDance", "bytedance" ],
  meta: [ "Meta", "meta" ],
  "aion-labs": [ "Aion Labs", "aionlabs" ],
  tencent: [ "Tencent", "tencent" ],
  sakana: [ "Sakana AI", "sakana" ],
  poolside: [ "Poolside", "poolside" ],
  upstage: [ "Upstage", "upstage" ],
  nousresearch: [ "Nous Research", "nousresearch" ],
  perceptron: [ "Perceptron", "perceptron" ],
  "inference-net": [ "Inference.net", "inference" ],
  "ibm-granite": [ "IBM", "ibm" ],
  rekaai: [ "Reka", "reka" ],
  relace: [ "Relace", "relace" ],
  morph: [ "Morph", "morph" ],
  fireworks: [ "Fireworks", "fireworks" ],
  "dots-studio": [ "Dots", "dotsstudio" ],
  liquid: [ "Liquid AI", "liquid" ],
  kwaipilot: [ "Kwai", "kwaipilot" ],
  meituan: [ "Meituan", "longcat" ],
  thinkingmachines: [ "Thinking Machines", "thinkingmachines" ],
  inclusionai: [ "InclusionAI", "inclusionai" ],
  thedrummer: [ "TheDrummer", "thedrummer" ],
  typesafe: [ "TypeSafe", "typesafe" ],
  unbiased: [ "Unbiased", "unbiased" ],
  writer: [ "Writer", "writer" ],
  stealth: [ "Stealth", "stealth" ],
  sao10k: [ "Sao10K", "sao10k" ],
  "anthracite-org": [ "Anthracite", "anthracite-org" ],
  gryphe: [ "Gryphe", "gryphe" ],
  undi95: [ "Undi95", "undi95" ],
  cognitivecomputations: [ "Cognitive Computations", "cognitivecomputations" ],
  "prism-ml": [ "PrismML", "prism-ml" ],
  mancer: [ "Mancer", "mancer" ],
  "black-forest-labs": [ "Black Forest Labs", "flux" ],
  recraft: [ "Recraft", "recraft" ],
  runway: [ "Runway", "runway" ],
  kwaivgi: [ "Kling", "kling" ],
  elevenlabs: [ "ElevenLabs", "elevenlabs" ],
  assemblyai: [ "AssemblyAI", "assemblyai" ],
  suno: [ "Suno", "suno" ],
  alibaba: [ "Alibaba", "alibaba" ]
};

function we(e) {
  const t = e.id.split("/")[0].toLowerCase().replace(/^~/, ""), a = ve[t];
  return {
    key: a?.[1] || t,
    label: a?.[0] || e.company || t || "Other",
    icon: a?.[1] || ""
  };
}

const Ae = new Set([ "kling", "assemblyai", "alibaba", "aionlabs", "arcee", "aws", "baidu", "bytedance", "claude", "cohere", "deepseek", "fireworks", "gemini", "gemma", "hunyuan", "kimi", "kwaipilot", "longcat", "meta", "microsoft", "minimax", "mistral", "morph", "nvidia", "openrouter", "perplexity", "poolside", "qwen", "sakana", "stepfun", "tencent", "upstage" ]), Me = {
  thinkingmachines: "thinkingmachines-author.png",
  inclusionai: "inclusionai-author.png",
  thedrummer: "thedrummer-author.png",
  typesafe: "typesafe-author.png",
  unbiased: "unbiased-author.png",
  writer: "writer-author.png",
  stealth: "stealth-author.svg",
  sao10k: "sao10k-author.webp",
  "anthracite-org": "anthracite-org-author.webp",
  gryphe: "gryphe-author.webp",
  undi95: "undi95-author.webp",
  cognitivecomputations: "cognitivecomputations-author.png",
  "prism-ml": "prism-ml-author.png",
  mancer: "mancer-author.png"
};

function xe(e) {
  return [ "aws", "longcat" ].includes(e.icon) ? `<span class="ai-company-themed"><img class="ai-company-logo ai-company-logo-color ai-logo-dark" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/agents/icons/${e.icon}-dark.svg" alt="" aria-hidden="true"><img class="ai-company-logo ai-company-logo-color ai-logo-light" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${e.icon}-color.svg" alt="" aria-hidden="true"></span>` : Me[e.icon] ? `<img class="ai-company-logo ai-company-logo-color" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${Me[e.icon]}" alt="" aria-hidden="true" width="22" height="22">` : Ae.has(e.icon) ? `<img class="ai-company-logo ai-company-logo-color" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${e.icon}-color.svg" alt="" aria-hidden="true" width="22" height="22">` : e.icon ? `<img class="ai-company-logo ai-company-logo-mono" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${e.icon}.svg" alt="" aria-hidden="true" width="22" height="22">` : `<span class="ai-company-initial" aria-hidden="true">${be(e.label.slice(0, 2).toUpperCase())}</span>`;
}

function Ce(e) {
  const t = we(e), a = e.id.toLowerCase().replace(/^~/, ""), o = a.startsWith("anthropic/claude") ? "claude" : a.startsWith("google/gemma") ? "gemma" : a.startsWith("moonshotai/kimi") ? "kimi" : a.startsWith("x-ai/grok") ? "grok" : a.startsWith("tencent/hunyuan") ? "hunyuan" : "";
  return xe(o ? {
    ...t,
    icon: o
  } : t);
}

const Ee = [ "openai", "anthropic", "xai", "deepseek", "gemini", "meta", "qwen", "mistral", "moonshot", "zai", "minimax" ], Le = e => Ee.includes(e) ? Ee.indexOf(e) : Ee.length, Ie = (e, t) => Le(e.key) - Le(t.key) || e.label.localeCompare(t.label);

export function setupPicker(e, {compact: t = !1} = {}) {
  const a = document.getElementById("modelMenu"), o = document.getElementById("modelSearch"), i = document.getElementById("modelCompanies"), n = document.getElementById("modelOptions"), s = document.getElementById("modelTrigger");
  let l = [], c = "", m = 0;
  function d() {
    cancelAnimationFrame(m);
    const e = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (a.querySelector('[data-model-company=""]').setAttribute("aria-pressed", String(!c)), 
    i.querySelectorAll("[data-loop-copy]").forEach(t => t.hidden = e), a.hidden || e || t) return;
    let o = 0;
    const n = e => {
      const t = o ? Math.min(e - o, 50) : 0;
      o = e, i.querySelectorAll(".ai-company-rail").forEach((e, a) => {
        const o = e.firstElementChild;
        if (o.offsetHeight <= e.clientHeight) return void (e.lastElementChild.hidden = !0);
        if (e.matches(":focus-within") || e.matches(":hover") && !e._continueOnHover || document.hidden) return;
        const i = (e._loopOffset ?? e.scrollTop) + .018 * t * (0 === a ? 1 : -1);
        e._loopOffset = (i % o.offsetHeight + o.offsetHeight) % o.offsetHeight, e.scrollTop = e._loopOffset;
      }), m = requestAnimationFrame(n);
    };
    m = requestAnimationFrame(n);
  }
  function p() {
    const s = /^(voice|speech|speak|tts)$/i.test(o.value.trim()), m = globalThis.NyxModelSearch.search(l.filter(e => (!s || r(e)) && (!c || we(e).key === c)), o.value.trim().toLowerCase(), we);
    document.querySelector("[data-model-count]").textContent = m.length + " of " + l.length;
    const d = new Map;
    for (const e of m) {
      const t = we(e);
      d.has(t.key) || d.set(t.key, {
        company: t,
        items: []
      }), d.get(t.key).items.push(e);
    }
    const p = e => Number.isFinite(Number(e.created)) ? Number(e.created) : 0;
    n.innerHTML = [ ...d.values() ].sort((e, t) => Ie(e.company, t.company)).map(t => {
      t.items.sort((e, t) => p(t) - p(e) || e.label.localeCompare(t.label, void 0, {
        numeric: !0
      }));
      const a = Math.max(0, ...l.filter(e => we(e).key === t.company.key).map(p));
      return '<section class="ai-model-group" role="group" aria-label="' + be(t.company.label) + '"><h3 class="ai-model-group-label">' + be(t.company.label) + " <span>" + t.items.length + '</span></h3><div class="ai-model-group-grid">' + t.items.map(t => ((t, a) => '<button type="button" class="ai-model-option" role="option" aria-selected="' + (t.id === e.value) + '" data-id="' + be(t.id) + '">' + Ce(t) + '<span class="ai-model-option-label"><strong>' + be(t.label) + (a ? " <em>Newest</em>" : "") + "</strong><small>" + be(we(t).label) + (r(t) ? " &middot; Native voice" : t.outputModalities?.includes("audio") ? " &middot; Music / audio" : "") + (t.vision ? " &middot; Vision" : "") + (t.reasoning ? " &middot; Reasoning" : "") + (p(t) ? " &middot; " + new Date(1e3 * p(t)).toLocaleDateString(void 0, {
        month: "short",
        year: "numeric"
      }) : "") + (t.allowanceLabel ? " &middot; " + be(t.allowanceLabel) : "") + '</small></span><span class="ai-model-option-check"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg></span></button>')(t, a > 0 && p(t) === a)).join("") + "</div></section>";
    }).join(""), m.length || (n.textContent = "No matching models."), n.scrollTop = 0, 
    a.querySelectorAll("[data-model-company]").forEach(e => e.setAttribute("aria-pressed", String(e.dataset.modelCompany === c))), 
    m[0] && (o.value || c) && function(e) {
      if (!e || a.hidden) return;
      if (t) return void [ ...i.querySelectorAll("button") ].find(t => t.dataset.modelCompany === e)?.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
      const o = [ ...i.querySelectorAll(".ai-company-track:not([data-loop-copy]) button") ].find(t => t.dataset.modelCompany === e), n = o?.closest(".ai-company-rail");
      if (!n) return;
      const s = n.firstElementChild, r = o.getBoundingClientRect().top - n.getBoundingClientRect().top + n.scrollTop - (n.clientHeight - o.offsetHeight) / 2, l = !n.lastElementChild.hidden && s.offsetHeight > n.clientHeight;
      n._loopOffset = l ? (r % s.offsetHeight + s.offsetHeight) % s.offsetHeight : Math.max(0, Math.min(r, n.scrollHeight - n.clientHeight)), 
      n.scrollTop = n._loopOffset;
    }(we(m[0]).key);
  }
  function u() {
    const t = l.find(t => t.id === e.value);
    s.innerHTML = t ? Ce(t) + "<span>" + be(t.label) + "</span>" : "Choose model", s.disabled = e.disabled || !l.length;
  }
  return matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", d), 
  s.onclick = () => {
    a.hidden = !1, a.showModal(), s.setAttribute("aria-expanded", "true"), p(), d(), 
    o.focus();
  }, document.getElementById("modelMenuClose").onclick = () => a.close(), a.addEventListener("close", () => {
    a.hidden = !0, cancelAnimationFrame(m), s.setAttribute("aria-expanded", "false"), 
    s.focus();
  }), o.oninput = p, a.addEventListener("click", t => {
    const o = t.target.closest("[data-model-company]");
    if (o) return c = o.dataset.modelCompany, p(), void d();
    const i = t.target.closest("[data-id]");
    i && (e.value = i.dataset.id, e.dispatchEvent(new Event("change")), u(), a.close());
  }), e.addEventListener("change", u), new MutationObserver(u).observe(e, {
    attributes: !0,
    childList: !0
  }), {
    icon: e => Ce(l.find(t => t.id === e) || {
      id: e,
      company: "Assistant"
    }),
    openVoice() {
      c = "", s.click(), o.value = "voice", p();
    },
    set(e) {
      l = e.map(e => ({
        ...e,
        label: e.label || e.id
      })), function() {
        const e = [ ...new Map(l.map(e => {
          const t = we(e);
          return [ t.key, t ];
        })).values() ].sort(Ie);
        e.some(e => e.key === c) || (c = "");
        const a = e => `<button type="button" data-model-company="${be(e.key)}" title="${be(e.label)}" aria-label="${be(e.label)} models" aria-pressed="${c === e.key}">${xe(e)}</button>`;
        if (t) return i.innerHTML = e.map(e => a(e).replace("</button>", "<span>" + be(e.label) + "</span></button>")).join(""), 
        void d();
        i.innerHTML = [ e.filter((e, t) => t % 2 == 0), e.filter((e, t) => t % 2 == 1) ].map((e, t) => `<div class="ai-company-rail" aria-label="${t ? "Right" : "Left"} company filters"><div class="ai-company-track">${e.map(a).join("")}</div></div>`).join(""), 
        i.querySelectorAll(".ai-company-rail").forEach(e => {
          const t = e.firstElementChild.cloneNode(!0);
          t.setAttribute("aria-hidden", "true"), t.dataset.loopCopy = "", t.querySelectorAll("button").forEach(e => e.tabIndex = -1), 
          e.append(t), e.addEventListener("pointerleave", () => {
            e._loopOffset = e.scrollTop, e._continueOnHover = !1;
          }), e.addEventListener("focusout", () => {
            e._loopOffset = e.scrollTop;
          });
        }), d();
      }(), p(), u();
    }
  };
}

document.addEventListener("error", e => {
  const t = e.target;
  if (!(t instanceof HTMLImageElement && t.classList.contains("ai-company-logo"))) return;
  const a = document.createElement("span");
  a.className = "ai-company-initial", a.textContent = t.closest("[aria-label]")?.getAttribute("aria-label")?.slice(0, 2).toUpperCase() || "AI", 
  a.setAttribute("aria-hidden", "true"), t.replaceWith(a);
}, !0);
