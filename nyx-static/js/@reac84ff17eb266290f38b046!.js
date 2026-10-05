!function() {
  "use strict";
  const e = "nyx.aiMessages", t = "nyx.aiThreads.v1", n = "nyx.aiActiveThread", a = "nyx.aiModel", o = "nyx.aiResponseDepth", i = "nyx.aiUsage.v1", r = "";
  let s = !1;
  const l = 12e5, c = 1600, d = 18e3, m = new Set([ "image/png", "image/jpeg", "image/webp", "image/gif" ]), u = new Set, g = document.querySelector("[data-ai-app]"), p = document.getElementById("feed"), h = document.getElementById("conversation"), f = document.getElementById("form"), y = document.getElementById("input"), v = document.getElementById("send"), b = document.getElementById("model"), w = document.getElementById("providerSelect"), x = document.getElementById("providerState"), E = document.getElementById("modelPicker"), k = document.getElementById("modelTrigger"), S = document.getElementById("modelSelected"), I = document.getElementById("modelMenu"), A = document.getElementById("modelOptions"), C = document.getElementById("clear"), L = document.getElementById("threadTitle"), M = document.getElementById("characterCount"), $ = document.getElementById("aiSidebar"), N = document.getElementById("sidebarToggle"), T = document.getElementById("sidebarClose"), B = document.getElementById("sidebarScrim"), R = document.getElementById("newChat"), D = document.getElementById("temporaryChat"), j = document.getElementById("threadList"), U = document.getElementById("threadCount"), O = document.getElementById("historyEmpty"), q = document.getElementById("threadSearch"), _ = [ ...document.querySelectorAll("[data-response-depth]") ], P = document.getElementById("sidebarModelName"), H = document.getElementById("usageWeek"), F = document.getElementById("usageAll"), z = document.getElementById("usageRequests"), W = document.getElementById("aiProfile"), J = document.getElementById("profileAvatar"), K = document.getElementById("profileInitial"), G = document.getElementById("profileName"), V = document.getElementById("profileHandle"), Y = document.getElementById("imageInput"), Z = document.getElementById("attachImage"), X = document.getElementById("attachmentPreview"), Q = document.getElementById("attachmentThumbnail"), ee = document.getElementById("attachmentName"), te = document.getElementById("attachmentStatus"), ne = document.getElementById("removeAttachment"), ae = document.getElementById("screenPreview"), oe = document.getElementById("screenVideo"), ie = document.getElementById("screenStatus"), re = document.getElementById("shareScreen"), se = document.getElementById("stopScreenShare");
  if (!(g && p && h && f && y && v && b && w && E && k && S && I && A && C && L && $ && N && T && B && R && D && j && U && O && q && 3 === _.length && P && H && F && z && W && J && K && G && V && Y && Z && X && Q && ee && te && ne && ae && oe && ie && re && se)) return;
  let le, ce = null, de = 0;
  const me = document.createElement("div");
  me.className = "ai-send-cooldown", me.hidden = !0, me.setAttribute("role", "status"), 
  me.style.cssText = "font-size:12px;text-align:center;padding:4px;", f.before(me);
  let ue = !0, ge = [], pe = !1, he = [], fe = "", ye = !1, ve = [], be = null, we = null, xe = null, Ee = null, ke = [];
  async function Se(e = {}) {
    const t = await async function() {
      const e = await async function() {
        if (parent === window) return "";
        const e = `ai-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise(t => {
          let n = !1;
          const a = e => {
            n || (n = !0, clearTimeout(i), removeEventListener("message", o), t(String(e || "")));
          }, o = t => {
            t.source === parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data.requestId === e && a(t.data.token);
          }, i = setTimeout(() => a(""), 2500);
          addEventListener("message", o), parent.postMessage({
            type: "nyx:account-token-request",
            requestId: e
          }, location.origin);
        });
      }();
      if (e) return e;
      Ee || (Ee = (async () => {
        try {
          const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
            cache: "no-store"
          }), t = await e.json();
          if (!t?.enabled || !t?.apiKey || !t?.projectId) return null;
          const [{initializeApp: n, getApps: a}, {getAuth: o, setPersistence: i, browserLocalPersistence: r, onAuthStateChanged: s}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), l = o(a().find(e => "nyx-founder-owner" === e.name) || n({
            apiKey: t.apiKey,
            authDomain: `${t.projectId}.firebaseapp.com`,
            projectId: t.projectId
          }, "nyx-founder-owner"));
          try {
            await i(l, r);
          } catch {}
          return "function" == typeof l.authStateReady && await l.authStateReady(), "function" == typeof s && s(l, () => {
            Re();
          }), l;
        } catch {
          return null;
        }
      })());
      const t = await Ee;
      try {
        return t?.currentUser ? await t.currentUser.getIdToken() : "";
      } catch {
        return "";
      }
    }();
    return {
      ...e,
      "x-nyx-ai-provider": "shared",
      ...t ? {
        Authorization: `Bearer ${t}`
      } : {}
    };
  }
  let Ie = "";
  const Ae = () => Ie.startsWith("n_api_") ? "nyx" : "openrouter", Ce = document.getElementById("customKeyDialog");
  function Le() {
    w.innerHTML = ke.map(e => `<option value="${je(e.id)}">${je(e.label)}</option>`).join("") || '<option value="shared">OpenRouter</option>', 
    w.value = "shared", w.disabled = !0, w.title = Ie ? "nyx" === Ae() ? "Nyx custom key" : "OpenRouter custom key" : "Nyx shared", 
    Ie && (w.options[0].textContent = w.title), x && (x.hidden = !0);
  }
  function Me() {
    const e = localStorage.getItem(o) || "normal";
    return [ "off", "normal", "extended" ].includes(e) ? e : "normal";
  }
  function $e() {
    const e = Me();
    _.forEach(t => {
      const n = t.dataset.responseDepth === e;
      t.classList.toggle("is-active", n), t.setAttribute("aria-pressed", String(n));
    });
  }
  Ce?.addEventListener("close", () => {
    document.getElementById("customKeyInput").value = "";
  }), document.getElementById("customKeyButton")?.addEventListener("click", () => Ce.showModal()), 
  document.getElementById("customKeyClose")?.addEventListener("click", () => Ce.close()), 
  document.getElementById("customKeyRemove")?.addEventListener("click", () => {
    Ie = "", document.getElementById("customKeyInput").value = "", Ce.close(), Le(), 
    tn(), Re();
  }), document.getElementById("customKeyForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const t = document.getElementById("customKeyInput"), n = t.value.trim();
    /^n_api_[A-Za-z0-9_-]{43}$/.test(n) || /^sk-or-[A-Za-z0-9_-]{20,}$/.test(n) ? (Ie = n, 
    t.value = "", document.getElementById("customKeyError").textContent = "", Ce.close(), 
    Le(), tn(), Re()) : document.getElementById("customKeyError").textContent = "Enter a valid Nyx or OpenRouter API key.";
  });
  let Ne, Te = 0;
  const Be = document.createElement("p");
  async function Re() {
    const e = ++Te;
    Ne?.abort(), Ne = new AbortController;
    const t = Ne.signal, n = [ H, F, z ];
    if ([ "Remaining", "Used", "Pending" ].forEach((e, t) => n[t].parentElement.querySelector("small").textContent = e), 
    n.forEach(e => e.textContent = "\u2014"), Ie) Be.textContent = "nyx" === Ae() ? "Custom key balance is available in your API account." : "Usage is billed to your own OpenRouter key."; else {
      Be.textContent = "Checking allowance...";
      try {
        const n = await Se({
          accept: "application/json"
        });
        if (e !== Te) return;
        const a = await fetch(_t() ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-ai/usage" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/usage", {
          headers: n,
          signal: t,
          cache: "no-store"
        }), o = await a.json();
        if (e !== Te) return;
        if (!a.ok) throw new Error(401 === a.status ? "Sign in to see your allowance." : o.error || "Allowance unavailable.");
        const i = o.tokens;
        if (!i || !Number.isFinite(i.used) || !Number.isFinite(i.pending)) throw new Error("Allowance unavailable.");
        const r = e => (new Intl.NumberFormat).format(e);
        H.textContent = o.unlimited ? "Unlimited" : r(i.remaining), F.textContent = r(i.used), 
        z.textContent = r(i.pending);
        const s = "browser" === o.scope ? "Shared browser" : "expensive-models" === o.scope ? "Expensive models" : "Account", l = o.resetAt ? ` Resets ${new Date(o.resetAt).toLocaleString()}.` : " Starts with your first request.";
        Be.textContent = o.unlimited ? "Owner - no account token limit." : `${s} - ${r(i.limit)} tokens / 4 days.${l}`, 
        i.pending && (Be.textContent += " Pending tokens are reserved for requests awaiting final usage."), 
        o.pendingCostsUsd > 0 && (Be.textContent += ` Provider costs awaiting confirmation: $${o.pendingCostsUsd.toFixed(4)}.`);
        const c = "anthropic/claude-haiku-4.5" === b.value ? o.modelCaps?.haiku : /^~?anthropic\/claude-(opus|fable)/.test(b.value) ? o.modelCaps?.claude : null;
        c && null !== c.limit && (Be.textContent += ` Claude: $${c.remaining.toFixed(4)} of $${c.limit.toFixed(2)} remaining.`), 
        !o.unlimited && "anthropic/claude-opus-5.5" === b.value && o.modelCaps?.opus55 && (Be.textContent += ` Opus: ${r(o.modelCaps.opus55.remaining)} tokens remaining.`), 
        !o.unlimited && "google/gemini-2.5-flash-image" === b.value && o.modelCaps?.images && (Be.textContent += ` Images: ${o.modelCaps.images.remaining} remaining.`), 
        Be.textContent += " Counts input, conversation history and output tokens.";
      } catch (a) {
        e === Te && "AbortError" !== a.name && (Be.textContent = a.message || "Allowance unavailable. Try again shortly.");
      }
    }
  }
  function De(e = localStorage.getItem("nyx.theme") || "default") {
    if ("tutsi" === document.documentElement.dataset.appShell) return;
    const t = String(e || "default").trim().toLowerCase() || "default", n = document.documentElement;
    Object.entries({
      "--ai-bg": "#000000",
      "--ai-bg-deep": "#000000",
      "--ai-surface": "#080808",
      "--ai-surface-raised": "#0e0e0e",
      "--ai-surface-hover": "#141414",
      "--ai-border": "rgba(255,255,255,.10)",
      "--ai-border-strong": "rgba(255,255,255,.18)",
      "--ai-text": "#f7f7f8",
      "--ai-text-soft": "#d7d7db",
      "--ai-muted": "#929299",
      "--ai-muted-dark": "#68686f",
      "--ai-accent": "#d7d7dc",
      "--ai-accent-bright": "#f7f7f8",
      "--ai-accent-soft": "rgba(255,255,255,.07)",
      "--ai-accent-border": "rgba(255,255,255,.18)",
      "--ai-accent-foreground": "#050505",
      "--ai-accent-glow": "rgba(255,255,255,.08)",
      "--ai-theme-hover-border": "#8aaee2"
    }).forEach(([e, t]) => n.style.setProperty(e, t)), n.dataset.nyxTheme = t, document.body.dataset.nyxTheme = t, 
    document.body.className = document.body.className.replace(/\btheme-[\w-]+\b/g, "").trim(), 
    document.body.classList.add(`theme-${t}`), Qe(t);
  }
  function je(e) {
    return String(e ?? "").replace(/[&<>"']/g, e => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[e]));
  }
  function Ue(e) {
    const t = String(e?.content || "");
    if (!t || t.length > d) return null;
    const n = String(e?.name || "pasted-text.txt").replace(/[\\/:*?"<>|\x00-\x1f]/g, "-").slice(0, 100) || "pasted-text.txt";
    return {
      name: n.toLowerCase().endsWith(".txt") ? n : `${n}.txt`,
      content: t,
      size: Number(e?.size) || new Blob([ t ], {
        type: "text/plain"
      }).size
    };
  }
  Be.id = "usageStatus", Be.setAttribute("role", "status"), Be.style.cssText = "font-size:12px;line-height:1.5;color:var(--ai-muted);margin:10px 0 0;overflow-wrap:anywhere", 
  H.closest("section").append(Be);
  const Oe = new Map;
  function qe() {
    return new Promise((e, t) => {
      const n = indexedDB.open("nyx-ai-images", 1);
      n.onupgradeneeded = () => n.result.createObjectStore("images", {
        keyPath: "id"
      }), n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
    });
  }
  async function _e(e) {
    if ("string" != typeof e || e.length > 6291456 || !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(e)) throw new Error("The model returned an unsupported or oversized image.");
    const t = new Image;
    if (t.src = e, await t.decode().catch(() => {
      throw new Error("The model returned invalid image data.");
    }), t.naturalWidth * t.naturalHeight > 2e7) throw new Error("The generated image dimensions are too large.");
    const n = {
      id: crypto.randomUUID(),
      dataUrl: e,
      createdAt: Date.now(),
      saved: !1
    };
    for (Oe.set(n.id, n); Oe.size > 20; ) Oe.delete(Oe.keys().next().value);
    if (!ye) {
      let e;
      try {
        e = await qe(), await new Promise((t, a) => {
          const o = e.transaction("images", "readwrite"), i = o.objectStore("images"), r = i.getAll();
          r.onsuccess = () => {
            const e = r.result.sort((e, t) => e.createdAt - t.createdAt);
            for (;e.length >= 20; ) i.delete(e.shift().id);
            i.put({
              ...n,
              saved: !0
            });
          }, o.oncomplete = t, o.onerror = () => a(o.error), o.onabort = () => a(o.error);
        }), n.saved = !0;
      } catch {} finally {
        e?.close();
      }
    }
    return n.id;
  }
  async function Pe(e, t) {
    let n, a = Oe.get(t);
    if (!a) try {
      n = await qe(), a = await new Promise((e, a) => {
        const o = n.transaction("images").objectStore("images").get(t);
        o.onsuccess = () => e(o.result), o.onerror = () => a(o.error);
      });
    } catch {} finally {
      n?.close();
    }
    const o = document.createElement("figure");
    if (o.className = "ai-message-attachment ai-generated-image", a && /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(a.dataUrl) && a.dataUrl.length <= 6291456) {
      const e = document.createElement("img");
      e.src = a.dataUrl, e.alt = "AI-generated image", e.loading = "lazy";
      const t = document.createElement("figcaption"), n = document.createElement("a");
      n.href = a.dataUrl, n.download = "nyx-image." + (a.dataUrl.startsWith("data:image/jpeg") ? "jpg" : a.dataUrl.startsWith("data:image/webp") ? "webp" : "png"), 
      n.textContent = "Download image", t.append(n, document.createTextNode(a.saved ? " ? Last 20 images saved on this device." : " ? Download to keep this image; it is only available in this session.")), 
      o.append(e, t);
    } else o.textContent = "This image is no longer stored on this device.";
    e.querySelector(".ai-message-content")?.after(o), an();
  }
  const He = new Map;
  async function Fe(e, t) {
    const n = document.createElement("figure");
    n.className = "ai-message-attachment ai-generated-video";
    const a = document.createElement("p"), o = document.createElement("button");
    o.type = "button", o.textContent = "Check progress", n.append(a, o), e.querySelector(".ai-message-content")?.after(n);
    let i = null, r = !1, s = 0;
    const l = async () => {
      if (clearTimeout(i), n.isConnected && !r) {
        r = !0, o.disabled = !0;
        try {
          const r = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/media/" + t, {
            headers: await Se({
              accept: "application/json"
            })
          }), c = await r.json();
          if (!r.ok) throw new Error(c.error || "Could not check this generation.");
          const d = "image" === c.kind ? "image" : "video";
          "completed" === c.status ? (a.textContent = "image" === d ? "Image ready" : "Video ready", 
          o.textContent = "image" === d ? "Load image" : "Load video", o.onclick = async () => {
            o.disabled = !0, a.textContent = "Loading " + d + "...";
            try {
              const a = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/media/" + t + "/content", {
                headers: await Se({})
              });
              if (!a.ok) throw new Error("This " + d + " is unavailable or has expired.");
              if ("image" === d) {
                const o = await a.json(), i = await _e(o.images?.[0]?.dataUrl);
                if (!n.isConnected) return;
                return await Pe(e, i), n.remove(), Xe(Ze().map(e => e.mediaJobId === t ? {
                  ...e,
                  mediaJobId: void 0,
                  imageId: i,
                  content: "Generated image."
                } : e)), void gt(e, "Generated image.");
              }
              const o = await a.blob();
              if (o.size > 104857600) throw new Error("This video is too large.");
              const i = URL.createObjectURL(o);
              if (!n.isConnected) return void URL.revokeObjectURL(i);
              He.set(n, i);
              const r = document.createElement("video");
              r.controls = !0, r.playsInline = !0, r.src = i, r.style.cssText = "max-width:100%;max-height:480px;border-radius:12px";
              const s = document.createElement("a");
              s.href = i, s.download = "nyx-video.mp4", s.textContent = "Download video", n.replaceChildren(r, s);
            } catch (i) {
              a.textContent = i.message, o.disabled = !1;
            }
          }, "image" === d && await o.onclick()) : [ "failed", "cancelled", "expired" ].includes(c.status) ? (a.textContent = "Generation " + c.status + ". Try a different prompt or model.", 
          o.hidden = !0) : (a.textContent = "Rendering " + d + "... You can keep chatting.", 
          ++s < 60 ? i = setTimeout(l, "image" === d ? 5e3 : 3e4) : a.textContent = "This is taking longer than usual. Check again when ready.");
        } catch (c) {
          a.textContent = c.message;
        } finally {
          r = !1, o.disabled = !1;
        }
      }
    };
    o.onclick = l, await l();
  }
  function ze(e) {
    return Array.isArray(e) ? e.map(e => {
      if (!e || ![ "user", "assistant" ].includes(e.role)) return null;
      const t = "assistant" === e.role ? ct(e.content).answer.trim() : String(e.content || "").trim();
      if (!t) return null;
      const n = {
        role: e.role,
        content: t,
        ..."length" === e.finishReason ? {
          finishReason: "length"
        } : {}
      };
      "assistant" === e.role && e.metadata && (n.metadata = dt(e.metadata)), "assistant" === e.role && "string" == typeof e.modelId && (n.modelId = e.modelId.slice(0, 200), 
      n.modelName = String(e.modelName || "").slice(0, 200)), "assistant" === e.role && e.timing && (n.timing = pt(e.timing)), 
      "assistant" === e.role && /^[a-f0-9-]{36}$/.test(e.imageId || "") && (n.imageId = e.imageId), 
      "assistant" === e.role && /^[a-f0-9-]{36}$/.test(e.mediaJobId || "") && (n.mediaJobId = e.mediaJobId);
      const a = "user" === e.role ? Ue(e.textAttachment) : null;
      return a && (n.textAttachment = a), n;
    }).filter(Boolean) : [];
  }
  function We(e) {
    const t = ze(e).find(e => "user" === e.role)?.content.trim() || "New conversation";
    return t.length > 46 ? `${t.slice(0, 46)}\u2026` : t;
  }
  function Je(e) {
    const t = ze(e?.messages), n = Number(e?.createdAt) || Date.now();
    return {
      id: String(e?.id || ""),
      title: String(e?.title || We(t)).trim().slice(0, 64) || "New conversation",
      messages: t,
      model: String(e?.model || r),
      createdAt: n,
      updatedAt: Number(e?.updatedAt) || n
    };
  }
  function Ke() {
    try {
      const e = JSON.parse(localStorage.getItem(t) || "[]");
      return Array.isArray(e) ? e.map(Je).filter(e => e.id && e.messages.length).sort((e, t) => t.updatedAt - e.updatedAt) : [];
    } catch {
      return [];
    }
  }
  function Ge() {
    he = he.filter(e => e.id && e.messages.length).sort((e, t) => t.updatedAt - e.updatedAt);
    try {
      localStorage.setItem(t, JSON.stringify(he)), document.getElementById("ai-save-warning")?.remove();
    } catch {
      if (document.getElementById("ai-save-warning")) return;
      const e = document.createElement("div");
      e.id = "ai-save-warning", e.className = "ai-save-warning", e.setAttribute("role", "alert"), 
      e.append("Nyx could not save your chat on this device. Download your chats before reloading. ");
      const t = document.createElement("button");
      t.type = "button", t.textContent = "Download chats", t.addEventListener("click", () => {
        const e = URL.createObjectURL(new Blob([ JSON.stringify({
          version: 1,
          threads: he
        }, null, 2) ], {
          type: "application/json"
        })), t = document.createElement("a");
        t.href = e, t.download = "nyx-ai-chats.json", document.body.append(t), t.click(), 
        t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
      }), e.append(t), f.before(e);
    }
  }
  function Ve(t) {
    try {
      t.length ? localStorage.setItem(e, JSON.stringify(t.slice(-40))) : localStorage.removeItem(e);
    } catch {}
  }
  function Ye() {
    return he.find(e => e.id === fe) || null;
  }
  function Ze() {
    return ze(ye ? ve : Ye()?.messages || []);
  }
  function Xe(e) {
    const t = ze(e);
    if (ye) return void (ve = t);
    const a = Date.now();
    let o = Ye();
    if (!o && t.length) {
      o = Je({
        id: `chat-${a.toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        messages: t,
        model: b.value || r,
        createdAt: a,
        updatedAt: a
      }), he.unshift(o), fe = o.id;
      try {
        localStorage.setItem(n, fe);
      } catch {}
    } else o && (o.messages = t, o.title = We(t), o.model = b.value || o.model || r, 
    o.updatedAt = a);
    Ge(), Ve(t), bt();
  }
  function Qe(e) {
    return window.NyxLogo?.apply(e || localStorage.getItem("nyx.theme") || "default", document).catch?.(() => {});
  }
  function et(e) {
    return window.NyxMarkdown.render(e);
  }
  function tt(e) {
    te.textContent = String(e || "");
  }
  function nt(e) {
    const t = Math.max(0, Number(e) || 0);
    return t < 1024 ? `${t} B` : `${(t / 1024).toFixed(t < 10240 ? 1 : 0)} KB`;
  }
  function at() {
    const e = new Date, t = e => String(e).padStart(2, "0");
    return `pasted-text-${e.getFullYear()}${t(e.getMonth() + 1)}${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}.txt`;
  }
  function ot() {
    be = null, we = null, Y.value = "", X.hidden = !0, X.classList.remove("is-error", "is-file-error", "is-text-file"), 
    Q.hidden = !1, Q.removeAttribute("src"), ee.textContent = "", tt("Ready to send"), 
    Z.classList.remove("has-attachment"), Z.setAttribute("aria-label", "Attach an image"), 
    ne.title = "Remove attachment", ne.setAttribute("aria-label", "Remove attachment");
  }
  function it(e, t = "Image not attached") {
    ot(), X.hidden = !1, X.classList.add("is-error", "is-file-error"), Q.hidden = !0, 
    ee.textContent = t, tt(e);
  }
  function rt(e) {
    return e && m.has(String(e.type || "").toLowerCase()) ? e.size > 8388608 ? (it("Choose an image smaller than 8 MB."), 
    Promise.resolve(null)) : new Promise(t => {
      const n = new FileReader;
      n.onload = () => {
        const a = {
          name: e.name || "Attached image",
          size: e.size,
          type: e.type,
          dataUrl: String(n.result || "")
        };
        !function(e) {
          lt(), we = null, be = e, X.hidden = !1, X.classList.remove("is-error", "is-file-error", "is-text-file"), 
          Q.hidden = !1, Q.src = e.dataUrl, ee.textContent = e.name, tt("Ready to send"), 
          Z.classList.add("has-attachment"), Z.setAttribute("aria-label", `Replace attached image: ${e.name}`), 
          ne.title = "Remove image", ne.setAttribute("aria-label", "Remove attached image");
        }(a), t(a);
      }, n.onerror = () => {
        it("Nyx could not read that image."), t(null);
      }, n.readAsDataURL(e);
    }) : (it("Choose a PNG, JPG, WebP, or GIF image."), Promise.resolve(null));
  }
  new MutationObserver(() => {
    for (const [e, t] of He) e.isConnected || (URL.revokeObjectURL(t), He.delete(e));
  }).observe(document.body, {
    childList: !0,
    subtree: !0
  });
  const st = window.createNyxScreenChat({
    conversation: h,
    input: y,
    form: f,
    stop: lt,
    status: ie,
    brand: () => mt()
  });
  function lt() {
    st.destroy();
    const e = xe;
    xe = null, e && e.getTracks().forEach(e => e.stop()), oe.srcObject = null, ae.hidden = !0, 
    re.classList.remove("has-attachment"), re.setAttribute("aria-pressed", "false"), 
    ie.textContent = "A fresh frame is attached only when you send.";
  }
  function ct(e) {
    const t = String(e || ""), n = /<\/?think\b[^>]*>/gi;
    let a, o = "", i = "", r = 0, s = !1;
    for (;a = n.exec(t); ) {
      const e = t.slice(r, a.index);
      s ? i += e : o += e, s = !/^<\//.test(a[0]), r = a.index + a[0].length;
    }
    const l = t.slice(r);
    if (s ? i += l : o += l, !s) {
      const e = o.match(/<\/?t(?:h(?:i(?:n(?:k)?)?)?)?$/i);
      e && (o = o.slice(0, -e[0].length));
    }
    return {
      answer: o,
      reasoning: i
    };
  }
  function dt(e) {
    const t = [];
    for (const n of (Array.isArray(e?.sources) ? e.sources : []).slice(0, 12)) try {
      const e = new URL(String(n.url || ""));
      if (![ "https:", "http:" ].includes(e.protocol) || e.username || e.password || e.href.length > 2048) continue;
      t.some(t => t.url === e.href) || t.push({
        url: e.href,
        title: String(n.title || e.hostname).slice(0, 160)
      });
    } catch {}
    return {
      sources: t,
      summary: String(e?.summary || "").slice(0, 2400)
    };
  }
  const mt = () => "ai" === document.documentElement.dataset.tutsiApp ? "Tutsi AI" : "Nyx AI", ut = e => String(e || "").replace(/\bNyx AI\b/g, mt());
  function gt(e, t, {error: n = !1, thinking: a = !1} = {}) {
    const o = e.querySelector(".ai-message-content");
    if (!o) return;
    if (e.classList.toggle("ai-message-error", n), e.classList.toggle("is-thinking", a), 
    a) return e._nyxMessageText = "", void (o.innerHTML = `<span class="ai-thinking" aria-label="${mt()} is thinking"><i></i><i></i><i></i></span>`);
    if (e.classList.contains("ai-message-user") || n) {
      const a = n ? ut(t) : String(t || "");
      return e._nyxMessageText = a, void (o.textContent = a);
    }
    const i = ct(t), r = dt(e._nyxMetadata), s = o.querySelector(".ai-reasoning")?.open;
    if (e._nyxMessageText = i.answer.trim(), o.replaceChildren(), (r.summary || i.reasoning.trim()) && (function(e, t) {
      const n = document.createElement("details");
      n.className = "ai-reasoning";
      const a = document.createElement("summary");
      a.textContent = "Reasoning summary";
      const o = document.createElement("div");
      o.className = "ai-reasoning-body", o.innerHTML = et(t), n.append(a, o), e.appendChild(n);
    }(o, r.summary || i.reasoning.trim()), s && (o.querySelector(".ai-reasoning").open = !0)), 
    i.answer.trim()) {
      const e = document.createElement("div");
      e.className = "ai-answer", e.innerHTML = et(i.answer.trim()), o.appendChild(e);
    }
    !function(e, t) {
      if (!t.length) return;
      const n = document.createElement("section");
      n.className = "ai-sources", n.setAttribute("aria-label", "Web sources");
      const a = document.createElement("h3");
      a.textContent = "Sources";
      const o = document.createElement("div");
      o.className = "ai-source-links", t.forEach((e, t) => {
        const n = document.createElement("a");
        n.className = "ai-source", n.href = e.url, n.target = "_blank", n.rel = "noopener noreferrer";
        const a = document.createElement("span");
        a.className = "ai-source-number", a.textContent = String(t + 1);
        const i = document.createElement("span"), r = document.createElement("strong");
        r.textContent = e.title;
        const s = document.createElement("small");
        s.textContent = new URL(e.url).hostname.replace(/^www\./, ""), i.append(r, s), n.append(a, i), 
        o.appendChild(n);
      }), n.append(a, o), e.appendChild(n);
    }(o, r.sources);
  }
  function pt(e) {
    return !e || !Number.isFinite(e.elapsedMs) || e.elapsedMs < 0 ? null : {
      elapsedMs: Math.min(e.elapsedMs, 36e5),
      firstTextMs: Number.isFinite(e.firstTextMs) ? Math.max(0, Math.min(e.firstTextMs, e.elapsedMs)) : null,
      tokens: Number.isFinite(e.tokens) ? Math.max(0, Math.min(e.tokens, 1e6)) : 0,
      estimated: !1 !== e.estimated
    };
  }
  function ht(e, t, n = !1) {
    const a = pt(t);
    if (!a) return;
    let o = e.querySelector(".ai-response-stats");
    o || (o = document.createElement("div"), o.className = "ai-response-stats", e.querySelector(".ai-message-body").append(o));
    const i = (a.elapsedMs / 1e3).toFixed(1), r = null === a.firstTextMs ? n ? "Waiting " + i + "s" : "No answer text" : "First text " + (a.firstTextMs / 1e3).toFixed(1) + "s", s = a.tokens > 0 && a.elapsedMs > 0 ? " | " + (a.estimated ? "~" : "") + (a.tokens / (a.elapsedMs / 1e3)).toFixed(1) + " tok/s" + (a.estimated ? " (estimated)" : "") : "";
    o.textContent = r + s + (n ? "" : " | " + i + "s total"), o.title = "Measured on this device. Tokens per second averages the entire request, including waiting. Estimates use roughly four characters per token; reported usage may include reasoning tokens.";
  }
  function ft(e) {
    if (e.querySelector(".continue-response")) return;
    const t = document.createElement("button");
    t.type = "button", t.className = "continue-response", t.textContent = "Continue response", 
    t.title = "This reply reached its response limit. Continue using your remaining allowance.", 
    t.onclick = () => {
      v.disabled || h.querySelector(".ai-message:last-child") === e && (y.value.trim() ? y.focus() : (y.value = "Continue your previous response from where it stopped, without repeating it.", 
      ln()));
    }, e.querySelector(".ai-message-body").append(t);
  }
  function yt(e, t, {error: n = !1, thinking: a = !1, attachment: o = null, imageId: i = null, mediaJobId: r = null, metadata: s = null, timing: l = null, modelId: c = "", modelName: d = "", finishReason: m = null} = {}) {
    h.querySelector("[data-ai-welcome]")?.remove(), h.classList.remove("is-empty");
    const u = "user" !== e, g = document.createElement("article");
    if (g._nyxMetadata = dt(s), g.className = "ai-message ai-message-" + (u ? "assistant" : "user"), 
    g.innerHTML = `\n      <div class="ai-message-avatar" aria-hidden="true">${u ? "" : "You"}</div>\n      <div class="ai-message-body">\n        <div class="ai-message-meta"><strong>${u ? "Assistant" : "You"}</strong><div class="ai-message-actions"><button class="ai-message-copy" type="button" data-copy-message title="Copy message" aria-label="Copy message"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg></button></div></div>\n        <div class="ai-message-content"></div>\n      </div>`, 
    u && qt(g, c, d), u && l && ht(g, l), o?.dataUrl && !u) {
      const e = document.createElement("figure");
      e.className = "ai-message-attachment";
      const t = document.createElement("img");
      t.src = o.dataUrl, t.alt = o.name || "Attached image";
      const n = document.createElement("figcaption");
      n.textContent = o.name || "Attached image", e.append(t, n), g.querySelector(".ai-message-content")?.before(e);
    } else if (o?.content && !u) {
      const e = Ue(o);
      if (e) {
        const t = document.createElement("button");
        t.className = "ai-message-attachment ai-message-text-attachment", t.type = "button", 
        t.dataset.downloadTextAttachment = "", t.title = `Download ${e.name}`, t.innerHTML = `<span class="ai-text-file-icon" aria-hidden="true">TXT</span><span class="ai-text-file-copy"><strong>${je(e.name)}</strong><small>${je(nt(e.size))} \xb7 Download</small></span>`, 
        t._nyxTextAttachment = e, g.querySelector(".ai-message-content")?.before(t);
      }
    }
    return gt(g, t, {
      error: n,
      thinking: a
    }), "length" === m && ft(g), h.appendChild(g), i && Pe(g, i), r && Fe(g, r), Qe(), 
    an(!0), g;
  }
  function vt(e, t, n) {
    return `<button class="ai-starter" type="button" data-prompt="${je(e)}"><span class="ai-starter-icon">${function(e) {
      const t = {
        project: '<path d="M4 7.5h16M7.5 4v7M16.5 4v7M5 12h14v8H5z"/>',
        explain: '<path d="M12 3a7 7 0 0 0-4 12.74V19h8v-3.26A7 7 0 0 0 12 3Z"/><path d="M9 22h6M9.5 15h5"/>',
        code: '<path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/>',
        ideas: '<path d="M12 3v3M4.22 6.22l2.12 2.12M3 14h3M18 14h3M17.66 8.34l2.12-2.12"/><path d="M8.5 18h7M9.5 21h5M12 8a5 5 0 0 0-3 9h6a5 5 0 0 0-3-9Z"/>'
      };
      return `<svg aria-hidden="true" viewBox="0 0 24 24">${t[e] || t.ideas}</svg>`;
    }(n)}</span><span class="ai-starter-copy"><strong>${je(t)}</strong></span></button>`;
  }
  function bt() {
    const e = [ ...he ].sort((e, t) => t.updatedAt - e.updatedAt), t = q.value.trim().toLowerCase(), n = t ? e.filter(e => `${e.title}\n${e.messages.map(e => e.content).join("\n")}`.toLowerCase().includes(t)) : e;
    U.textContent = t ? `${n.length}/${e.length}` : String(e.length), O.hidden = n.length > 0, 
    O.textContent = e.length && t ? "No matching chats." : "No chats yet.", j.innerHTML = n.map(e => `<div role="listitem"><button class="ai-thread-button" type="button" data-thread-id="${je(e.id)}" aria-current="${ye || e.id !== fe ? "false" : "true"}"><span class="ai-thread-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5h14v11H9l-4 3V5Z"/></svg></span><span class="ai-thread-copy"><strong>${je(e.title)}</strong><small>${je(function(e) {
      const t = new Date(Number(e) || Date.now()), n = new Date;
      if (t.toDateString() === n.toDateString()) return t.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      });
      const a = new Date(n);
      return a.setDate(n.getDate() - 1), t.toDateString() === a.toDateString() ? "Yesterday" : t.toLocaleDateString([], {
        month: "short",
        day: "numeric"
      });
    }(e.updatedAt))}</small></span></button></div>`).join(""), D.setAttribute("aria-pressed", String(ye));
  }
  function wt() {
    ce?.abort(), ce = null, on(!1);
  }
  function xt(e) {
    g.classList.toggle("is-sidebar-open", Boolean(e)), N.setAttribute("aria-expanded", String(Boolean(e)));
  }
  function Et({temporary: e = !1} = {}) {
    if (wt(), ot(), ye = e, ve = [], fe = "", !e) {
      try {
        localStorage.removeItem(n);
      } catch {}
      Ve([]);
    }
    bt(), Lt(), y.value = "", nn(), y.focus();
  }
  const kt = Object.freeze({
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
  });
  function St(e) {
    return String(e || "").replace(/&[0-9a-fklmnor]/gi, "").trim();
  }
  function It(e = {}) {
    const t = String(localStorage.getItem("nyx.userName") || "Profile").trim() || "Profile", n = String(e.displayName || t).trim() || "Profile", a = String(e.handle || "Open your Nyx profile").trim(), o = String(e.avatarUrl || "").trim();
    !function(e, t) {
      const n = String(t || ""), a = /&([0-9a-fklmnor])/gi, o = document.createDocumentFragment();
      let i, r = 0, s = {};
      const l = e => {
        if (!e) return;
        const t = document.createElement("span");
        t.textContent = e, s.color && (t.style.color = s.color), s.bold && (t.style.fontWeight = "900"), 
        s.italic && (t.style.fontStyle = "italic");
        const n = [];
        s.underline && n.push("underline"), s.strike && n.push("line-through"), n.length && (t.style.textDecoration = n.join(" ")), 
        s.magic && t.classList.add("ai-minecraft-magic"), o.append(t);
      };
      for (;i = a.exec(n); ) {
        l(n.slice(r, i.index)), r = a.lastIndex;
        const e = i[1].toLowerCase();
        kt[e] ? s = {
          color: kt[e]
        } : "l" === e ? s.bold = !0 : "o" === e ? s.italic = !0 : "n" === e ? s.underline = !0 : "m" === e ? s.strike = !0 : "k" === e ? s.magic = !0 : "r" === e && (s = {});
      }
      l(n.slice(r)), e.replaceChildren(o), e.title = St(n) || "Profile";
    }(G, n), V.textContent = a, K.textContent = (Array.from(St(n))[0] || "N").toUpperCase(), 
    /^(?:https?:|blob:|data:image\/|\/)/i.test(o) ? (J.src = o, J.hidden = !1, K.hidden = !0) : (J.removeAttribute("src"), 
    J.hidden = !0, K.hidden = !1);
  }
  function At() {
    It(), parent !== window && parent.postMessage({
      type: "nyx:ai-profile-request"
    }, location.origin);
  }
  function Ct(e) {
    const t = e.find(e => "user" === e.role)?.content || "";
    L.textContent = ye && !t ? "Temporary chat" : t ? t.length > 58 ? `${t.slice(0, 58)}\u2026` : t : "New conversation";
  }
  function Lt() {
    const e = Ze();
    if (h.innerHTML = "", e.length) {
      h.classList.remove("is-empty");
      let t = Math.max(0, e.length - 40);
      const n = e => yt(e.role, e.content, {
        attachment: e.textAttachment || null,
        imageId: e.imageId,
        mediaJobId: e.mediaJobId,
        metadata: e.metadata,
        timing: e.timing,
        modelId: e.modelId,
        modelName: e.modelName,
        finishReason: e.finishReason
      });
      if (e.slice(t).forEach(n), t) {
        const a = document.createElement("button");
        a.type = "button", a.className = "ai-history-earlier", a.textContent = "Load earlier messages", 
        a.addEventListener("click", () => {
          const o = p.scrollHeight, i = p.scrollTop, r = Math.max(0, t - 40), l = document.createDocumentFragment();
          s = !0;
          try {
            e.slice(r, t).forEach(e => l.append(n(e)));
          } finally {
            s = !1;
          }
          a.after(l), t = r, t || a.remove(), p.scrollTop = i + p.scrollHeight - o;
        }), h.prepend(a);
      }
    } else h.classList.add("is-empty"), h.innerHTML = `<section class="ai-welcome" data-ai-welcome>\n      <h2>What's on your mind?</h2>\n      <div class="ai-starters">\n        ${vt("Help me plan and build a new project from scratch", "Plan a project", "project")}\n        ${vt("Explain quantum computing in simple terms with a useful analogy", "Explain something", "explain")}\n        ${vt("Review this code for bugs, clarity, and performance improvements", "Review my code", "code")}\n        ${vt("Brainstorm ten original ideas for a creative side project", "Brainstorm ideas", "ideas")}\n      </div>\n    </section>`;
    Ct(e), Qe();
  }
  function Mt(e) {
    return ge.find(t => t.id === e)?.label || e;
  }
  const $t = {
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
    alibaba: [ "Alibaba", "alibaba" ],
    apodex: [ "Apodex", "apodex" ],
    heygen: [ "HeyGen", "heygen" ],
    togethercomputer: [ "Together", "togethercomputer" ],
    voyageai: [ "Voyage AI", "voyageai" ],
    respan: [ "Respan", "respan" ],
    jaredpalmer: [ "Jared Palmer", "jaredpalmer" ],
    "fish-audio": [ "Fish Audio", "fish-audio" ],
    "nex-agi": [ "Nex AGI", "nex-agi" ],
    deepgram: [ "Deepgram", "deepgram" ],
    krea: [ "Krea", "krea" ],
    sourceful: [ "Sourceful", "sourceful" ],
    canopylabs: [ "Canopy Labs", "canopylabs" ],
    sesame: [ "Sesame", "sesame" ],
    hexgrad: [ "Hexgrad", "hexgrad" ],
    thenlper: [ "Thenlper", "thenlper" ],
    intfloat: [ "Intfloat", "intfloat" ],
    "sentence-transformers": [ "Sentence Transformers", "sentence-transformers" ],
    baai: [ "BAAI", "baai" ]
  };
  let Nt = "";
  const Tt = document.getElementById("modelSearch"), Bt = document.getElementById("modelCompanies");
  function Rt(e) {
    const t = e.id.split("/")[0].toLowerCase().replace(/^~/, ""), n = $t[t];
    return {
      key: n?.[1] || t,
      label: n?.[0] || e.company || t || "Other",
      icon: n?.[1] || ""
    };
  }
  const Dt = new Set([ "kling", "assemblyai", "alibaba", "aionlabs", "arcee", "aws", "baidu", "bytedance", "claude", "cohere", "deepseek", "fireworks", "gemini", "gemma", "hunyuan", "kimi", "kwaipilot", "longcat", "meta", "microsoft", "minimax", "mistral", "morph", "nvidia", "openrouter", "perplexity", "poolside", "qwen", "sakana", "stepfun", "tencent", "upstage" ]), jt = {
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
  function Ut(e) {
    const t = {
      apodex: "svg",
      heygen: "png",
      togethercomputer: "svg",
      voyageai: "svg",
      respan: "png",
      jaredpalmer: "png",
      "fish-audio": "svg",
      "nex-agi": "svg",
      deepgram: "svg",
      krea: "svg",
      sourceful: "png",
      canopylabs: "png",
      sesame: "png",
      hexgrad: "png",
      thenlper: "png",
      intfloat: "png",
      "sentence-transformers": "png",
      baai: "svg"
    };
    if (t[e.icon]) {
      const n = `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${e.icon}-author.${t[e.icon]}`;
      return [ "baai", "fish-audio", "krea", "deepgram", "voyageai" ].includes(e.icon) ? `<span class="ai-company-logo" style="--company-logo:url('${n}')" aria-hidden="true"></span>` : `<img class="ai-company-logo ai-company-logo-color" src="${n}" alt="" aria-hidden="true" width="22" height="22">`;
    }
    return jt[e.icon] ? `<img class="ai-company-logo ai-company-logo-color" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${jt[e.icon]}" alt="" aria-hidden="true" width="22" height="22">` : Dt.has(e.icon) ? `<img class="ai-company-logo ai-company-logo-color" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${e.icon}-color.svg" alt="" aria-hidden="true" width="22" height="22">` : e.icon ? `<span class="ai-company-logo" style="--company-logo:url('/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/ai-companies/${e.icon}.svg')" aria-hidden="true"></span>` : '<svg class="ai-company-logo ai-company-logo-color" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/></svg>';
  }
  function Ot(e) {
    const t = Rt(e), n = e.id.toLowerCase().replace(/^~/, ""), a = n.startsWith("anthropic/claude") ? "claude" : n.startsWith("google/gemma") ? "gemma" : n.startsWith("moonshotai/kimi") ? "kimi" : n.startsWith("x-ai/grok") ? "grok" : n.startsWith("tencent/hunyuan") ? "hunyuan" : "";
    return Ut(a ? {
      ...t,
      icon: a
    } : t);
  }
  function qt(e, t, n = "") {
    const a = "string" == typeof t ? t.trim().slice(0, 200) : "", o = ge.find(e => e.id === a), i = a && !a.includes("/") ? ge.filter(e => e.id.split("/").slice(1).join("/") === a) : [], r = o || (1 === i.length ? i[0] : null);
    e._modelId = r?.id || a, e._modelName = r?.label || String(n || a || "Assistant").slice(0, 200), 
    e.querySelector(".ai-message-meta strong").textContent = e._modelName, e.querySelector(".ai-message-avatar").innerHTML = e._modelId ? Ot({
      id: e._modelId,
      company: "Assistant"
    }) : '<span class="ai-company-initial" aria-hidden="true">AI</span>';
  }
  const _t = () => "tutsi" === document.documentElement.dataset.appShell || "ai" === document.documentElement.dataset.tutsiApp;
  function Pt() {
    const e = [ "openai", "anthropic", "gemini", "deepseek", "meta", "qwen", "xai", "mistral" ], t = t => e.includes(t) ? e.indexOf(t) : e.length, n = [ ...new Map([ {
      id: "openai/"
    }, {
      id: "anthropic/"
    }, ...ge ].map(e => {
      const t = Rt(e);
      return [ t.key, t ];
    })).values() ].sort((e, n) => t(e.key) - t(n.key) || e.label.localeCompare(n.label));
    n.some(e => e.key === Nt) || (Nt = "");
    const a = _t();
    Bt.dataset.layout = a ? "tutsi" : "nyx";
    const o = (e, t = a) => `<button type="button" data-model-company="${je(e.key)}" title="${je(e.label)}" aria-label="${je(e.label)} models" aria-pressed="${Nt === e.key}">${Ut(e)}${t ? `<span class="ai-company-filter-label">${je(e.label)}</span>` : ""}</button>`;
    if (a) return Bt.innerHTML = n.map(e => o(e)).join(""), void Ft();
    const i = n.filter(e => ![ "openai", "anthropic" ].includes(e.key));
    Bt.innerHTML = [ 0, 1 ].map(e => `<div class="ai-company-column"><div class="ai-company-pinned">${o(n.find(t => t.key === (e ? "anthropic" : "openai")), !0)}</div><div class="ai-company-rail" aria-label="${e ? "Right" : "Left"} company filters"><div class="ai-company-track">${i.filter((t, n) => n % 2 === e).map(e => o(e)).join("")}</div></div></div>`).join(""), 
    Bt.querySelectorAll(".ai-company-rail").forEach(e => {
      const t = e.firstElementChild.cloneNode(!0);
      t.setAttribute("aria-hidden", "true"), t.dataset.loopCopy = "", t.querySelectorAll("button").forEach(e => e.tabIndex = -1), 
      e.append(t), e.addEventListener("pointerleave", () => {
        e._loopOffset = e.scrollTop, e._continueOnHover = !1;
      }), e.addEventListener("focusout", () => {
        e._loopOffset = e.scrollTop;
      });
    }), Ft();
  }
  let Ht = 0;
  function Ft() {
    if (cancelAnimationFrame(Ht), Bt.dataset.layout !== (_t() ? "tutsi" : "nyx")) return void Pt();
    const e = matchMedia("(prefers-reduced-motion: reduce)").matches || _t();
    if (I.querySelector('[data-model-company=""]').setAttribute("aria-pressed", String(!Nt)), 
    Bt.querySelectorAll("[data-loop-copy]").forEach(t => t.hidden = e), I.hidden || e) return;
    let t = 0;
    const n = e => {
      const a = t ? Math.min(e - t, 50) : 0;
      t = e, Bt.querySelectorAll(".ai-company-rail").forEach((e, t) => {
        const n = e.firstElementChild;
        if (n.offsetHeight <= e.clientHeight) return void (e.lastElementChild.hidden = !0);
        if (e.matches(":focus-within") || e.matches(":hover") && !e._continueOnHover || document.hidden) return;
        const o = (e._loopOffset ?? e.scrollTop) + .018 * a * (0 === t ? 1 : -1);
        e._loopOffset = (o % n.offsetHeight + n.offsetHeight) % n.offsetHeight, e.scrollTop = e._loopOffset;
      }), Ht = requestAnimationFrame(n);
    };
    Ht = requestAnimationFrame(n);
  }
  function zt(e) {
    if (!e || I.hidden) return;
    if (_t()) {
      const t = [ ...Bt.querySelectorAll("button") ].find(t => t.dataset.modelCompany === e);
      return void t?.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
    const t = [ ...Bt.querySelectorAll(".ai-company-track:not([data-loop-copy]) button") ].find(t => t.dataset.modelCompany === e), n = t?.closest(".ai-company-rail");
    if (!n) return;
    const a = n.firstElementChild, o = t.getBoundingClientRect().top - n.getBoundingClientRect().top + n.scrollTop - (n.clientHeight - t.offsetHeight) / 2, i = !n.lastElementChild.hidden && a.offsetHeight > n.clientHeight;
    n._loopOffset = i ? (o % a.offsetHeight + a.offsetHeight) % a.offsetHeight : Math.max(0, Math.min(o, n.scrollHeight - n.clientHeight)), 
    n.scrollTop = n._loopOffset;
  }
  function Wt() {
    const e = (Tt.value || "").trim().toLowerCase(), t = ge.filter(e => !Nt || Rt(e).key === Nt), n = NyxModelSearch.search(t, e, Rt);
    A.innerHTML = n.length ? function(e, t, n = !1) {
      return (n ? [ [ "Best matches", e ] ] : Jt(e)).map(([e, n], a) => {
        const o = `modelGroup${a}`;
        return `<section class="ai-model-group" role="group" aria-labelledby="${o}">\n        <p class="ai-model-group-label" id="${o}">${je(e)}</p>\n        <div class="ai-model-group-grid">${n.map(e => `<button class="ai-model-option" type="button" role="option" data-model-id="${je(e.id)}" aria-selected="${e.id === t ? "true" : "false"}">\n          ${Ot(e)}<span class="ai-model-option-label"><strong>${je(e.label)}</strong><small>${je(Rt(e).label)} &middot; ${je(Kt(e))}${Gt(e) ? " \xb7 Open in OpenRouter \u2197" : ""}</small></span>\n          <span class="ai-model-option-check" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m5 10 3 3 7-7"/></svg></span>\n        </button>`).join("")}</div>\n      </section>`;
      }).join("");
    }(n, b.value, Boolean(e)) : `<p class="ai-model-empty" role="status">${Nt && !e ? "No models from this provider are available for this account." : "No matching models."}</p>`, 
    A.scrollTop = 0;
    const a = n.find(t => Rt(t).label.toLowerCase() === e) || n[0];
    e && a ? zt(Rt(a).key) : Nt && zt(Nt);
    const o = I.querySelector("[data-model-count]");
    o && (o.textContent = e || Nt ? `${n.length} of ${ge.length}` : `${ge.length} available`);
  }
  function Jt(e) {
    const t = [ "openai/gpt-6-astra", "anthropic/claude-fable-5.1", "openai/gpt-6-sol", "openai/gpt-5.6-sol-pro", "openai/gpt-6-luna-pro", "openai/gpt-6-luna", "openai/gpt-5.6-luna" ], n = e => e.free || e.id.endsWith(":free") || "openrouter/free" === e.id, a = e => Rt(e).label, o = e => {
      const n = t.indexOf(e.id);
      return n < 0 ? t.length : n;
    }, i = [ ...e ].sort((e, t) => Number(n(e)) - Number(n(t)) || Number("OpenAI" === a(t)) - Number("OpenAI" === a(e)) || a(e).localeCompare(a(t)) || o(e) - o(t) || e.label.localeCompare(t.label)), r = new Map;
    return i.forEach(e => {
      const t = `${n(e) ? "Free" : "Paid"} \xb7 ${a(e)}`;
      r.has(t) || r.set(t, []), r.get(t).push(e);
    }), [ ...r ];
  }
  function Kt(e) {
    const t = {
      text: "Text",
      image: "Image generation",
      video: "Video generation",
      audio: "Audio",
      speech: "Speech",
      transcription: "Transcription",
      embeddings: "Embeddings",
      rerank: "Rerank",
      decisions: "Decisions"
    }, n = e.outputModalities || [ ...!1 !== e.text ? [ "text" ] : [], ...e.imageGeneration ? [ "image" ] : [] ];
    return [ ...new Set([ ...n.map(e => t[e] || e), e.vision ? "Vision" : "", e.reasoning ? "Reasoning" : "" ]) ].filter(Boolean).join(" \xb7 ");
  }
  function Gt(e) {
    return e && !1 === e.text && !e.imageGeneration && !e.outputModalities?.includes("video");
  }
  function Vt() {
    const e = b.value || r, t = Mt(e);
    S.textContent = t, k.title = `Model: ${t}${e.endsWith(":free") || "openrouter/free" === e ? ". Uses your account\u2019s token allowance. Provider rate limits also apply." : ""}`, 
    k.setAttribute("aria-label", `AI model: ${t}`), P.textContent = t, A.querySelectorAll("[data-model-id]").forEach(t => {
      t.setAttribute("aria-selected", String(t.dataset.modelId === e));
    });
  }
  function Yt(e, t) {
    b.innerHTML = function(e) {
      return Jt(e).map(([e, t]) => `<optgroup label="${je(e)}">${t.map(e => `<option value="${je(e.id)}"${Gt(e) ? " disabled" : ""}>${je(e.label)} \xb7 ${je(Kt(e))}</option>`).join("")}</optgroup>`).join("");
    }(e), b.value = t, Pt(), Wt(), Vt();
  }
  function Zt() {
    return [ ...A.querySelectorAll("[data-model-id]") ];
  }
  function Xt({restoreFocus: e = !1} = {}) {
    I.hidden || (cancelAnimationFrame(Ht), I.close(), I.hidden = !0, E.classList.remove("is-open"), 
    k.setAttribute("aria-expanded", "false"), e && k.focus());
  }
  function Qt(e = 0) {
    k.disabled || (I.hidden = !1, I.showModal(), Ft(), Nt || Tt.value.trim() || (zt("openai"), 
    zt("anthropic")), E.classList.add("is-open"), k.setAttribute("aria-expanded", "true"), 
    requestAnimationFrame(() => {
      const t = Zt(), n = Math.max(0, t.findIndex(e => "true" === e.getAttribute("aria-selected"))), a = e < 0 ? t.length - 1 : e > 0 ? 0 : n;
      e ? (t[a]?.focus({
        preventScroll: !0
      }), t[a]?.scrollIntoView({
        block: "nearest"
      })) : Tt.focus();
    }));
  }
  function en(e) {
    ge.some(t => t.id === e) && (Gt(ge.find(t => t.id === e)) ? window.open("https://openrouter.ai/" + encodeURI(e), "_blank", "noopener") : (b.value = e, 
    b.dispatchEvent(new Event("change", {
      bubbles: !0
    })), Xt({
      restoreFocus: !0
    })));
  }
  async function tn() {
    const e = document.querySelector(".ai-model-status");
    b.disabled = !0, k.disabled = !0, k.setAttribute("aria-busy", "true");
    try {
      const t = await fetch((_t() ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-ai/models" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/models") + (Ie ? "?custom=1" : ""), {
        headers: await Se({
          accept: "application/json"
        })
      }), n = await t.json();
      if (!t.ok) throw new Error(n?.error || `Model catalog failed (${t.status})`);
      pe = !0 === n.ownerMediaAccess;
      const o = Array.isArray(n?.models) ? n.models.flatMap(e => {
        if (Ie && "nyx" === Ae() && e?.imageGeneration) return [];
        const t = String(e?.id || "").trim(), n = String(e?.label || t).trim(), a = String(e?.company || "").trim();
        return t && n ? [ {
          id: t,
          label: n,
          company: a,
          catalogRank: Number.isFinite(e.catalogRank) ? e.catalogRank : 9999,
          codingRank: e.codingRank,
          outputModalities: e.outputModalities,
          inputModalities: e.inputModalities,
          poolTokenLimit: Number.isSafeInteger(e?.poolTokenLimit) && e.poolTokenLimit > 0 ? e.poolTokenLimit : null,
          free: Boolean(e?.free),
          text: !1 !== e?.text,
          imageGeneration: !(Ie && "nyx" === Ae()) && Boolean(e?.imageGeneration),
          vision: (!Ie || "nyx" !== Ae()) && (Boolean(e?.vision) || u.has(t)),
          reasoning: Boolean(e?.reasoning)
        } ] : [];
      }) : [];
      if (!o.length) throw new Error("No models are currently available.");
      const i = Ye()?.model || localStorage.getItem(a) || r, s = ge.find(e => e.id === i)?.label || i;
      ge = o;
      const l = o.some(e => e.id === i) ? i : o.some(e => e.id === r) ? r : o[0].id;
      return Yt(o, l), l === i ? (localStorage.setItem(a, l), e && (e.classList.remove("is-warning"), 
      e.title = `${o.length} models available`)) : e && (e.classList.add("is-warning"), 
      e.title = `${s} is temporarily unavailable. Nyx will restore it when it returns.`), 
      !0;
    } catch (t) {
      return console.warn("Nyx AI model catalog could not be loaded:", t), ge = [], Yt([], ""), 
      S.textContent = "Models unavailable", e && (e.classList.add("is-warning"), e.title = "The model list could not be verified"), 
      !1;
    } finally {
      const e = ge.length > 0;
      b.disabled = !e, k.disabled = !e, k.removeAttribute("aria-busy");
    }
  }
  function nn() {
    y.style.height = "auto", y.style.height = `${Math.min(y.scrollHeight, 190)}px`, 
    M && (M.textContent = `${y.value.length} / ${y.maxLength}`);
  }
  function an(e = !1) {
    s || !e && !ue || requestAnimationFrame(() => {
      p.scrollTop = p.scrollHeight;
    });
  }
  function on(e) {
    p.setAttribute("aria-busy", String(e)), f.classList.toggle("is-busy", e), y.disabled = e, 
    v.disabled = e || Date.now() < de, Y.disabled = e, Z.disabled = e, re.disabled = e, 
    ne.disabled = e, v.setAttribute("aria-label", e ? `Waiting for ${mt()}` : "Send message");
  }
  async function rn(e) {
    if (navigator.clipboard?.writeText) return void await navigator.clipboard.writeText(String(e || ""));
    const t = document.createElement("textarea");
    t.value = String(e || ""), t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), 
    t.select(), document.execCommand("copy"), t.remove();
  }
  function sn(e) {
    const t = e.querySelector("span"), n = t?.textContent || "";
    e.classList.add("is-copied"), e.setAttribute("aria-label", "Copied"), t && (t.textContent = "Copied"), 
    setTimeout(() => {
      e.classList.remove("is-copied"), e.setAttribute("aria-label", e.hasAttribute("data-copy-code") ? "Copy code" : "Copy message"), 
      t && (t.textContent = n || "Copy");
    }, 1200);
  }
  async function ln() {
    const e = y.value.trim();
    let t = be;
    const n = we, a = Boolean(xe);
    if (!e && !t && !n && !a || v.disabled) return;
    if (a) try {
      ie.textContent = "Capturing the current frame\u2026", t = await function() {
        if (!xe || "ended" === xe.getVideoTracks()[0]?.readyState) return Promise.reject(new Error("Screen sharing has ended. Start it again to attach your screen."));
        const e = Math.max(1, oe.videoWidth || Number(xe.getVideoTracks()[0]?.getSettings?.().width) || 0), t = Math.max(1, oe.videoHeight || Number(xe.getVideoTracks()[0]?.getSettings?.().height) || 0);
        if (e <= 1 || t <= 1) return Promise.reject(new Error("The shared screen is not ready yet. Wait a moment and try again."));
        const n = Math.min(1, c / Math.max(e, t)), a = document.createElement("canvas"), o = a.getContext("2d");
        if (!o) return Promise.reject(new Error("Screen capture is unavailable in this browser."));
        a.width = Math.max(1, Math.round(e * n)), a.height = Math.max(1, Math.round(t * n)), 
        o.drawImage(oe, 0, 0, a.width, a.height);
        let i = .88, r = a.toDataURL("image/jpeg", i);
        for (;r.length > l && i > .5; ) i -= .08, r = a.toDataURL("image/jpeg", i);
        return r.length > l ? Promise.reject(new Error("Nyx could not prepare that screen frame within the upload limit.")) : Promise.resolve({
          name: "Shared screen",
          size: Math.ceil(.75 * r.length),
          type: "image/jpeg",
          dataUrl: r,
          screenCapture: !0
        });
      }();
    } catch (B) {
      return void (ie.textContent = B?.message || "Nyx could not capture the shared screen.");
    }
    const o = b.value || r, s = ge.find(e => e.id === o);
    if (Gt(s)) return void window.open("https://openrouter.ai/" + encodeURI(o), "_blank", "noopener");
    const d = Boolean(s?.outputModalities?.includes("video")), m = d || (pe || !1 === s?.text) && s?.imageGeneration;
    if (m && Ie) return void yt("assistant", "Use Nyx shared for dedicated image and video generation, or open the model on OpenRouter.", {
      error: !0,
      modelId: o
    });
    const u = Boolean(s?.imageGeneration) && !d, g = e || (a ? "Please analyze what is currently on my screen." : t ? "Please analyze this image." : "Please review the attached text file."), p = Ze();
    p.length || Ct([ {
      role: "user",
      content: g
    } ]), p.push({
      role: "user",
      content: g,
      ...n ? {
        textAttachment: n
      } : {}
    }), Xe(p), yt("user", g, {
      attachment: t || n
    }), y.value = "", nn();
    const h = yt("assistant", "", {
      thinking: !0,
      modelId: o,
      modelName: Mt(o)
    });
    ce = new AbortController, on(!0);
    let w = "", x = null;
    const E = performance.now();
    let k = null, S = 0;
    const I = () => ({
      elapsedMs: performance.now() - E,
      firstTextMs: k,
      tokens: S || Math.ceil(w.length / 4),
      estimated: !S
    }), A = setInterval(() => ht(h, I(), !0), 500);
    ht(h, I(), !0);
    let C = null, L = null, M = !1, $ = 0;
    const N = () => {
      $ = 0, gt(h, w), an();
    };
    try {
      const e = t ? await (T = t, T?.dataUrl ? new Promise((e, t) => {
        const n = new Image;
        n.onload = () => {
          try {
            const t = Math.max(1, n.naturalWidth || 1), a = Math.max(1, n.naturalHeight || 1);
            if (T.dataUrl.length <= l && Math.max(t, a) <= c) return void e({
              dataUrl: T.dataUrl,
              mime: T.type,
              width: t,
              height: a,
              screenCapture: !0 === T.screenCapture
            });
            const o = document.createElement("canvas"), i = o.getContext("2d");
            if (!i) throw new Error("Image preparation is unavailable.");
            let r = Math.min(1, c / Math.max(t, a)), s = "";
            for (let e = 0; e < 7 && (o.width = Math.max(1, Math.round(t * r)), o.height = Math.max(1, Math.round(a * r)), 
            i.fillStyle = "#ffffff", i.fillRect(0, 0, o.width, o.height), i.drawImage(n, 0, 0, o.width, o.height), 
            s = o.toDataURL("image/jpeg", Math.max(.52, .9 - .07 * e)), !(s.length <= l)); e += 1) r *= .82;
            if (!s || s.length > l) throw new Error("Nyx could not prepare that image within the upload limit.");
            e({
              dataUrl: s,
              mime: "image/jpeg",
              width: t,
              height: a,
              screenCapture: !0 === T.screenCapture
            });
          } catch (B) {
            t(B);
          }
        }, n.onerror = () => t(new Error("Nyx could not decode that image.")), n.src = T.dataUrl;
      }) : Promise.reject(new Error("The attached image is unavailable."))) : null, r = e ? `Original image dimensions: ${e.width}x${e.height}px.` : "";
      let s;
      if (e && (a ? ie.textContent = `Nyx is reading this screen frame for ${Mt(o)}\u2026` : tt(`Nyx is reading this image for ${Mt(o)}\u2026`)), 
      Ie) {
        const t = Ae();
        if ((e || u) && "nyx" === t) throw new Error("Nyx API keys currently support text only. Use Nyx shared or an OpenRouter key for images.");
        const n = p.slice(-20).map(e => ({
          role: e.role,
          content: e.content + (e.textAttachment ? "\n\n" + e.textAttachment.content : "")
        }));
        if (e && (n[n.length - 1].content = [ {
          type: "text",
          text: n[n.length - 1].content
        }, {
          type: "image_url",
          image_url: {
            url: e.dataUrl
          }
        } ]), s = await fetch("nyx" === t ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/v1/ai" : "https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          signal: ce.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Ie
          },
          body: JSON.stringify({
            model: o,
            messages: n,
            max_tokens: u ? 2200 : 512,
            stream: !u && "nyx" !== t,
            ...u ? {
              modalities: [ "text", "image" ]
            } : {}
          })
        }), "nyx" === t && s.ok) {
          const e = await s.json(), t = e.choices?.[0]?.message?.content || "";
          s = new Response("data: " + JSON.stringify({
            model: e.model,
            choices: [ {
              delta: {
                content: t
              },
              finish_reason: e.choices?.[0]?.finish_reason
            } ]
          }) + "\n\ndata: [DONE]\n\n", {
            headers: {
              "Content-Type": "text/event-stream"
            }
          });
        }
      } else s = await fetch(m ? _t() ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-ai/media" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/media" : _t() ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/tutsi-ai" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai", {
        method: "POST",
        signal: ce.signal,
        headers: await Se({
          "content-type": "application/json"
        }),
        body: JSON.stringify({
          historyNoticeVersion: 1,
          temporaryChat: ye,
          model: o,
          message: g,
          messages: p.slice(-20),
          textAttachment: n,
          imageContext: r,
          image: e,
          responseDepth: Me(),
          generateImage: u,
          stream: !u
        })
      });
      if (!s.ok) {
        !function(e) {
          const t = Number(e.headers.get("retry-after"));
          if (429 !== e.status || !Number.isFinite(t) || t < 1 || t > 60) return;
          de = Date.now() + 1e3 * t, clearInterval(le);
          const n = () => {
            const e = Math.max(0, Math.ceil((de - Date.now()) / 1e3));
            me.hidden = !e, me.textContent = e ? `You can send another message in ${e}s.` : "", 
            v.disabled = !!e || f.classList.contains("is-busy"), e || clearInterval(le);
          };
          n(), le = setInterval(n, 250);
        }(s);
        const e = await s.json().catch(() => ({}));
        throw new Error(e?.error?.message || e?.error || (u && [ 502, 504 ].includes(s.status) ? "The image provider failed or timed out before finishing. Try again or choose another image model." : `Nyx AI failed (${s.status})`));
      }
      if (m) {
        const e = await s.json();
        if (!/^[a-f0-9-]{36}$/.test(e.jobId || "")) throw new Error("The video request did not return a job.");
        L = e.jobId, w = "image" === e.kind ? "Rendering your image. You can keep chatting while it finishes." : `Rendering a ${e.duration}-second video${e.resolution ? " at " + e.resolution : ""}. It may take a few minutes.`, 
        Fe(h, L);
      } else if (u) {
        const e = s.body.getReader(), t = new TextDecoder;
        let n = "", a = 0;
        for (;;) {
          const o = await e.read();
          if (o.done) break;
          if (a += o.value.byteLength, a > 8388608) throw await e.cancel(), new Error("The generated image response is too large.");
          n += t.decode(o.value, {
            stream: !0
          });
        }
        n += t.decode();
        const o = JSON.parse(n);
        if ("string" == typeof o.model && o.model.trim() && qt(h, o.model), o.error) throw new Error(o.error.message || o.error);
        const i = o.choices?.[0]?.message;
        w = "string" == typeof o.text ? o.text : "string" == typeof i?.content ? i.content : "";
        const r = o.images || i?.images || (Array.isArray(i?.content) ? i.content.filter(e => "image_url" === e.type) : []);
        if (r.length > 1) throw new Error("Ask for one image at a time.");
        r.length && (C = await _e(r[0].dataUrl || r[0].image_url?.url), w.trim() || (w = "Generated image."), 
        await Pe(h, C));
      } else if (s.headers.get("content-type")?.includes("text/event-stream")) {
        if (!s.body) throw new Error("The selected model did not return a stream.");
        const e = s.body.getReader(), t = new TextDecoder;
        let n = "", a = "";
        const o = e => {
          if (!e.startsWith("data:")) return;
          const t = e.slice(5).trim();
          if (t && "[DONE]" !== t) try {
            const e = JSON.parse(t);
            if ("string" == typeof e.model && e.model.trim() && qt(h, e.model), e.error) return void (a = String(e.error.message || e.error));
            x = e.choices?.[0]?.finish_reason || x;
            const n = Number(e.nyx_usage?.completion_tokens ?? e.usage?.completion_tokens);
            if (Number.isFinite(n) && n > 0 && (S = n), e.nyx_metadata) {
              const t = h._nyxMetadata || {
                sources: [],
                summary: ""
              };
              h._nyxMetadata = dt({
                sources: [ ...t.sources, ...e.nyx_metadata.sources || [] ],
                summary: t.summary + (e.nyx_metadata.summary || "")
              }), $ || ($ = requestAnimationFrame(N));
            }
            const o = e?.choices?.[0]?.delta?.content || e?.choices?.[0]?.text || "";
            o && (null === k && (k = performance.now() - E), w = !0 === e?.nyx_replace ? String(o) : w + o, 
            $ || ($ = requestAnimationFrame(N)));
          } catch {}
        };
        for (;;) {
          const a = await e.read();
          if (a.done) break;
          n += t.decode(a.value, {
            stream: !0
          });
          const i = n.split(/\r?\n/);
          n = i.pop() || "", i.forEach(o);
        }
        if (n += t.decode(), n.split(/\r?\n/).forEach(o), a) throw new Error(a);
        $ && (cancelAnimationFrame($), N());
      } else {
        const e = await s.json();
        if (e.error) throw new Error(e.error.message || e.error);
        w = e.text || e.choices?.[0]?.message?.content || "", x = e.finishReason || e.choices?.[0]?.finish_reason || null, 
        e.model && qt(h, e.model), e.metadata && (h._nyxMetadata = dt(e.metadata));
      }
      w && null === k && (k = performance.now() - E);
      const d = w.trim(), y = ct(d).answer.trim();
      if (!y) throw new Error("This model did not produce a final answer. Try again or choose another available model.");
      gt(h, d), "length" === x && ft(h), p.push({
        role: "assistant",
        content: y,
        finishReason: x,
        modelId: h._modelId,
        modelName: h._modelName,
        metadata: h._nyxMetadata,
        timing: I(),
        ...C ? {
          imageId: C
        } : {},
        ...L ? {
          mediaJobId: L
        } : {}
      }), Xe(p), function(e, t) {
        const n = function() {
          try {
            const e = JSON.parse(localStorage.getItem(i) || "[]");
            return Array.isArray(e) ? e.filter(e => Number.isFinite(e?.at) && Number.isFinite(e?.tokens) && e.tokens > 0).slice(-1e3) : [];
          } catch {
            return [];
          }
        }();
        n.push({
          at: Date.now(),
          tokens: Math.max(1, Math.ceil((String(e || "").length + String(t || "").length) / 4))
        });
        try {
          localStorage.setItem(i, JSON.stringify(n.slice(-1e3)));
        } catch {}
      }(g, y), M = !0;
    } catch (B) {
      if ("AbortError" === B?.name) return;
      gt(h, B?.message || "Nyx AI could not complete that request.", {
        error: !0
      }), Ie || tn();
    } finally {
      clearInterval(A), ht(h, I()), $ && cancelAnimationFrame($), ce = null, on(!1), M && ot(), 
      xe && (ie.textContent = "A fresh frame is attached only when you send."), y.focus(), 
      an(), Re();
    }
    var T;
  }
  matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", Ft), De(), 
  addEventListener("message", e => {
    e.origin === location.origin && (e.source === parent && "nyx:theme-sync" === e.data?.type && De(e.data.theme), 
    e.source === parent && "nyx:ai-profile" === e.data?.type && (It(e.data.profile || {}), 
    Re()));
  }), addEventListener("focus", () => {
    At(), Re();
  }), document.addEventListener("visibilitychange", () => {
    document.hidden || Re();
  }), b.addEventListener("change", () => {
    Re();
  }), addEventListener("storage", e => {
    [ "nyx.theme", "nyx.customThemeColor" ].includes(e.key) && De(), e.key === t && (he = Ke(), 
    fe && !he.some(e => e.id === fe) && (fe = ""), bt(), Lt()), "nyx.userName" === e.key && At();
  }), p.addEventListener("scroll", () => {
    ue = p.scrollHeight - p.scrollTop - p.clientHeight < 100;
  }, {
    passive: !0
  }), p.addEventListener("click", async e => {
    const t = e.target.closest("[data-prompt]");
    if (t) return y.value = t.dataset.prompt || "", nn(), y.focus(), void f.requestSubmit();
    const n = e.target.closest("[data-download-text-attachment]");
    if (n) return void function(e) {
      const t = Ue(e);
      if (!t) return;
      const n = URL.createObjectURL(new Blob([ t.content ], {
        type: "text/plain;charset=utf-8"
      })), a = document.createElement("a");
      a.href = n, a.download = t.name, document.body.appendChild(a), a.click(), a.remove(), 
      setTimeout(() => URL.revokeObjectURL(n), 1e3);
    }(n._nyxTextAttachment);
    const a = e.target.closest("[data-copy-code]");
    if (a) return await rn(a.closest(".ai-code-block")?.querySelector("pre code")?.textContent || ""), 
    void sn(a);
    const o = e.target.closest("[data-copy-message]");
    if (o) {
      const e = o.closest(".ai-message");
      await rn(e?._nyxMessageText || ""), sn(o);
    }
  }), f.addEventListener("submit", e => {
    e.preventDefault(), ln();
  }), Z.addEventListener("click", () => Y.click()), re.addEventListener("click", () => {
    !async function() {
      if (navigator.mediaDevices?.getDisplayMedia) {
        lt(), ot();
        try {
          const e = await navigator.mediaDevices.getDisplayMedia({
            video: {
              frameRate: {
                ideal: 5,
                max: 10
              }
            },
            audio: !1
          }), t = e.getVideoTracks()[0];
          if (!t) throw new Error("No screen was selected.");
          xe = e, t.addEventListener("ended", lt, {
            once: !0
          }), oe.srcObject = e, ae.hidden = !1, re.classList.add("has-attachment"), re.setAttribute("aria-pressed", "true"), 
          ie.textContent = "A fresh frame is attached only when you send.", await oe.play().catch(() => {}), 
          xe === e && st.start();
        } catch (e) {
          lt(), "NotAllowedError" !== e?.name && it(e?.message || "Nyx could not start screen sharing.", "Screen sharing unavailable");
        }
      } else it("Screen sharing is not supported by this browser.", "Screen sharing unavailable");
    }();
  }), se.addEventListener("click", () => {
    lt(), y.focus();
  }), Y.addEventListener("change", () => {
    rt(Y.files?.[0]);
  }), ne.addEventListener("click", () => {
    ot(), y.focus();
  }), y.addEventListener("paste", e => {
    const t = [ ...e.clipboardData?.files || [] ].find(e => String(e.type || "").startsWith("image/"));
    if (t) return void rt(t);
    const n = String(e.clipboardData?.getData("text/plain") || ""), a = Math.max(0, (y.selectionEnd || 0) - (y.selectionStart || 0)), o = y.value.length - a + n.length;
    n && o > Number(y.maxLength || 4e3) && (e.preventDefault(), function(e) {
      const t = String(e || "");
      if (!t) return null;
      if (lt(), t.length > d) return it(`Pasted text is limited to ${d.toLocaleString()} characters.`, "Text file not attached"), 
      null;
      const n = Ue({
        name: at(),
        content: t
      });
      n && (be = null, we = n, Y.value = "", X.hidden = !1, X.classList.remove("is-error", "is-file-error"), 
      X.classList.add("is-text-file"), Q.hidden = !0, Q.removeAttribute("src"), ee.textContent = n.name, 
      tt(`${nt(n.size)} \xb7 Ready to send`), Z.classList.remove("has-attachment"), Z.setAttribute("aria-label", "Attach an image (replaces the text file)"), 
      ne.title = "Remove text file", ne.setAttribute("aria-label", "Remove attached text file"));
    }(n), nn());
  }), f.addEventListener("dragenter", e => {
    [ ...e.dataTransfer?.items || [] ].some(e => "file" === e.kind) && f.classList.add("is-dragging");
  }), f.addEventListener("dragover", e => {
    [ ...e.dataTransfer?.items || [] ].some(e => "file" === e.kind) && e.preventDefault();
  }), f.addEventListener("dragleave", e => {
    f.contains(e.relatedTarget) || f.classList.remove("is-dragging");
  }), f.addEventListener("drop", e => {
    f.classList.remove("is-dragging");
    const t = [ ...e.dataTransfer?.files || [] ][0];
    t && (e.preventDefault(), rt(t));
  }), y.addEventListener("input", nn), y.addEventListener("keydown", e => {
    "Enter" !== e.key || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || e.isComposing || (e.preventDefault(), 
    f.requestSubmit());
  }), k.addEventListener("click", () => {
    I.hidden ? Qt() : Xt();
  }), k.addEventListener("keydown", e => {
    "ArrowDown" === e.key || "ArrowUp" === e.key ? (e.preventDefault(), Qt("ArrowDown" === e.key ? 1 : -1)) : "Escape" === e.key && (e.preventDefault(), 
    Xt());
  }), document.getElementById("modelMenuClose").addEventListener("click", () => Xt({
    restoreFocus: !0
  })), I.addEventListener("cancel", e => {
    e.preventDefault(), Xt({
      restoreFocus: !0
    });
  }), Tt.addEventListener("input", () => {
    Nt = "", I.querySelectorAll("[data-model-company]").forEach(e => e.setAttribute("aria-pressed", String("" === e.dataset.modelCompany))), 
    Wt();
  }), I.addEventListener("click", e => {
    const t = e.target.closest("[data-model-company]");
    if (!t) return;
    Nt = t.dataset.modelCompany, Tt.value = "", I.querySelectorAll("[data-model-company]").forEach(e => e.setAttribute("aria-pressed", String(e.dataset.modelCompany === Nt))), 
    Ft(), Wt();
    const n = t.closest(".ai-company-rail");
    n && (n._continueOnHover = !0), Tt.focus({
      preventScroll: !0
    });
  }), I.addEventListener("click", e => {
    const t = e.target.closest("[data-model-id]");
    t && en(t.dataset.modelId || "");
  }), I.addEventListener("keydown", e => {
    const t = e.target.closest("[data-model-id]");
    if (!t && "ArrowDown" !== e.key && "Escape" !== e.key) return;
    const n = Zt(), a = Math.max(0, n.indexOf(t));
    let o = -1;
    if ("ArrowDown" === e.key) o = t ? Math.min(n.length - 1, a + 1) : 0; else if ("ArrowUp" === e.key) o = Math.max(0, a - 1); else if ("Home" === e.key) o = 0; else if ("End" === e.key) o = n.length - 1; else {
      if ("Enter" === e.key || " " === e.key) return e.preventDefault(), void (t && en(t.dataset.modelId || ""));
      if ("Escape" === e.key) return e.preventDefault(), e.stopPropagation(), void Xt({
        restoreFocus: !0
      });
    }
    o >= 0 && (e.preventDefault(), n[o]?.focus(), n[o]?.scrollIntoView({
      block: "nearest"
    }));
  }), document.addEventListener("pointerdown", e => {
    if (!I.hidden && e.target === I) {
      const t = I.getBoundingClientRect();
      (e.clientX < t.left || e.clientX > t.right || e.clientY < t.top || e.clientY > t.bottom) && Xt({
        restoreFocus: !0
      });
    }
  }), b.addEventListener("change", () => {
    localStorage.setItem(a, b.value || r), b.title = Mt(b.value);
    const e = Ye();
    e && (e.model = b.value || r, e.updatedAt = Date.now(), Ge(), bt()), Vt();
  }), C.addEventListener("click", function() {
    const e = Ze().map(e => e.imageId).filter(Boolean);
    for (const t of e) Oe.delete(t);
    if (e.length && qe().then(t => {
      const n = t.transaction("images", "readwrite");
      for (const a of e) n.objectStore("images").delete(a);
      n.oncomplete = () => t.close(), n.onerror = () => t.close();
    }).catch(() => {}), wt(), lt(), ot(), ye) ve = []; else if (fe) {
      he = he.filter(e => e.id !== fe), fe = "";
      try {
        localStorage.removeItem(n);
      } catch {}
      Ge();
    }
    Ve([]), bt(), Lt(), y.value = "", nn(), y.focus();
  }), R.addEventListener("click", () => Et()), D.addEventListener("click", () => Et({
    temporary: !0
  })), j.addEventListener("click", e => {
    const t = e.target.closest("[data-thread-id]");
    t && function(e) {
      const t = he.find(t => t.id === e);
      if (t) {
        wt(), ot(), ye = !1, ve = [], fe = t.id;
        try {
          localStorage.setItem(n, fe);
        } catch {}
        Ve(t.messages), ge.some(e => e.id === t.model) && (b.value = t.model, localStorage.setItem(a, t.model), 
        Vt()), bt(), Lt(), y.focus();
      }
    }(t.dataset.threadId || "");
  }), q.addEventListener("input", bt), _.forEach(e => e.addEventListener("click", () => {
    localStorage.setItem(o, e.dataset.responseDepth || "normal"), $e();
  })), N.addEventListener("click", () => xt(!g.classList.contains("is-sidebar-open"))), 
  T.addEventListener("click", () => xt(!1)), B.addEventListener("click", () => xt(!1)), 
  W.addEventListener("click", () => {
    At(), parent !== window ? parent.postMessage({
      type: "nyx:ai-open-profile"
    }, location.origin) : location.href = "/";
  }), J.addEventListener("error", () => {
    J.hidden = !0, K.hidden = !1;
  }), document.addEventListener("keydown", e => {
    "Escape" === e.key && g.classList.contains("is-sidebar-open") && (e.preventDefault(), 
    xt(!1), N.focus());
  }), addEventListener("pagehide", lt), xt(!0), function() {
    if (he = Ke(), !he.length) {
      const t = function() {
        try {
          return ze(JSON.parse(localStorage.getItem(e) || "[]"));
        } catch {
          return [];
        }
      }();
      if (t.length) {
        const e = Date.now(), n = Je({
          id: `chat-${e.toString(36)}`,
          messages: t,
          model: localStorage.getItem(a) || r,
          createdAt: e,
          updatedAt: e
        });
        he = [ n ], fe = n.id, Ge();
      }
    }
    if (!fe) {
      const e = localStorage.getItem(n) || "";
      fe = he.some(t => t.id === e) ? e : he[0]?.id || "";
    }
    if (fe) {
      try {
        localStorage.setItem(n, fe);
      } catch {}
      Ve(Ye()?.messages || []);
    }
  }(), Yt(ge, b.value || r), bt(), Lt(), nn(), $e(), Re(), At(), (async () => {
    await async function() {
      try {
        const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/providers", {
          headers: await Se({
            accept: "application/json"
          })
        }), t = await e.json();
        if (!e.ok) throw new Error(t?.error || "Shared providers are unavailable.");
        ke = Array.isArray(t?.providers) ? t.providers.flatMap(e => {
          const t = String(e?.id || "").trim();
          return String(e?.label || t).trim(), "shared" === t ? [ {
            id: t,
            label: "OpenRouter"
          } ] : [];
        }) : [];
      } catch {
        ke = [];
      }
      Le();
    }(), await tn();
  })(), y.focus();
}();
