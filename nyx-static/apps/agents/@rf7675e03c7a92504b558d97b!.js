export function setupMedia({notice: e, sizePrompt: t, canSend: o, voiceModel: i}) {
  const n = e => document.getElementById(e), a = e => '<svg viewBox="0 0 24 24" aria-hidden="true">' + e + "</svg>";
  n("attachImage").innerHTML = a('<path d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 5-5 4 4 3-3 6 6M19 2v6M16 5h6"/>'), 
  n("dictate").innerHTML = a('<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>'), 
  n("voice").innerHTML = a('<path d="M3 10v4M7 6v12M12 3v18M17 6v12M21 10v4"/>'), 
  n("removeImage").innerHTML = a('<path d="m6 6 12 12M18 6 6 18"/>');
  let r, c = null, d = !1, s = 0, l = null, u = !1, m = !1, h = !1, p = "", g = "", v = "", w = null, f = "";
  const y = window.SpeechRecognition || window.webkitSpeechRecognition;
  function b(e = "") {
    n("voiceStatus").textContent = e, n("voiceStatus").hidden = !e, n("voice").setAttribute("aria-pressed", String(u)), 
    n("dictate").setAttribute("aria-pressed", String(!!l && "dictation" === p));
  }
  function M() {
    s++, c = null, n("attachment").hidden = !0, n("attachmentImage").removeAttribute("src"), 
    n("imageInput").value = "";
  }
  async function k(t) {
    if (!t) return;
    if (!/^image\/(png|jpeg|webp|gif)$/.test(t.type)) return void e("Choose a PNG, JPEG, WebP or GIF image.");
    if (t.size > 10485760) return void e("Choose an image under 10 MB.");
    const o = ++s;
    d = !0, n("attachImage").disabled = !0;
    try {
      const e = await createImageBitmap(t), i = Math.min(1, 1280 / Math.max(e.width, e.height)), a = document.createElement("canvas");
      a.width = Math.max(1, Math.round(e.width * i)), a.height = Math.max(1, Math.round(e.height * i));
      const r = a.getContext("2d");
      let d;
      r.fillStyle = "#fff", r.fillRect(0, 0, a.width, a.height), r.drawImage(e, 0, 0, a.width, a.height), 
      e.close();
      for (const t of [ .85, .7, .5, .3 ]) if (d = a.toDataURL("image/jpeg", t), d.length < 28e4) break;
      if (d.length >= 28e4) throw Error("This image is too detailed. Crop it or choose a smaller image.");
      if (o !== s) return;
      c = {
        dataUrl: d
      }, n("attachmentImage").src = d, n("attachmentName").textContent = t.name || "Pasted image", 
      n("attachment").hidden = !1;
    } catch (i) {
      e(i.message || "Could not open that image.");
    } finally {
      d = !1, n("attachImage").disabled = !1;
    }
  }
  function I() {
    const e = l;
    l = null, e && (e.onend = null, e.onresult = null, e.onerror = null, e.abort());
  }
  function C() {
    u = !1, h = !1, m = !1, clearTimeout(r), I(), w && (w.pause(), w.removeAttribute("src"), 
    w = null), f && (URL.revokeObjectURL(f), f = ""), b();
  }
  function L(i) {
    if (!y) return void e("Voice input is unavailable in this browser. Try Chrome or Edge.");
    I(), p = i, g = n("prompt").value, v = "";
    const a = new y;
    l = a, a.lang = navigator.language || "en-US", a.continuous = "dictation" === i, 
    a.interimResults = !0, a.onresult = e => {
      l === a && (v = Array.from(e.results).map(e => e[0].transcript).join(" "), n("prompt").value = (g + (g ? " " : "") + v).slice(0, 3500), 
      t());
    }, a.onerror = t => {
      C(), e("not-allowed" === t.error ? "Microphone permission was denied. Allow it in your browser to use voice." : {
        network: "The browser speech service could not connect. Check your connection and try again.",
        "audio-capture": "No microphone was found. Check your microphone settings.",
        "no-speech": "No speech was heard. Click the microphone to try again."
      }[t.error] || "Voice input stopped: " + t.error);
    }, a.onend = () => {
      l === a && (l = null, b(), "conversation" === i && u && (v.trim() && o() ? n("composer").requestSubmit() : (u = !1, 
      b())));
    };
    try {
      a.start(), b("conversation" === i ? "Listening \u2014 speak your task. Click the waveform to end." : "Listening \u2014 your words will appear above.");
    } catch {
      C(), e("Could not start the microphone. Try again.");
    }
  }
  function S() {
    !u || h || m || !o() || l || (clearTimeout(r), r = setTimeout(() => {
      u && !m && o() && L("conversation");
    }, 250));
  }
  return n("attachImage").onclick = () => n("imageInput").click(), n("imageInput").onchange = () => {
    k(n("imageInput").files[0]), n("imageInput").value = "";
  }, n("removeImage").onclick = M, n("prompt").addEventListener("paste", e => {
    const t = [ ...e.clipboardData.items ].find(e => e.type.startsWith("image/"))?.getAsFile();
    t && (e.preventDefault(), k(t));
  }), n("dictate").onclick = () => {
    l && "dictation" === p ? l.stop() : (C(), L("dictation"));
  }, n("voice").onclick = () => {
    u ? C() : y ? o() ? i() && (C(), u = !0, L("conversation")) : e("Sign in and select a model first. Computer mode also needs a connected folder.") : e("Voice conversation is unavailable in this browser. Try Chrome or Edge.");
  }, window.addEventListener("pagehide", C), document.addEventListener("visibilitychange", () => {
    document.hidden && C();
  }), {
    voiceActive: () => u,
    image: () => c,
    preparing: () => d,
    clearImage: M,
    stopVoice: C,
    pause: function() {
      h = !0, I(), u && b("Working \u2014 click the waveform to end voice.");
    },
    reply: function(t, o) {
      if (u) {
        if (!o?.data || ![ "audio/mpeg", "audio/wav" ].includes(o.mime)) return C(), void e("No model audio was returned. Browser read-aloud is not used.");
        try {
          const t = atob(o.data), i = Uint8Array.from(t, e => e.charCodeAt(0));
          f = URL.createObjectURL(new Blob([ i ], {
            type: o.mime
          })), w = new Audio(f), m = !0, w.onended = () => {
            m = !1, URL.revokeObjectURL(f), f = "", w = null, S();
          }, w.onerror = () => {
            C(), e("Could not play the model voice.");
          }, b("Speaking - click the waveform to end voice."), w.play().catch(() => {
            C(), e("Audio playback was blocked. Start voice again to retry.");
          });
        } catch {
          C(), e("The model returned invalid audio.");
        }
      }
    },
    resume() {
      h = !1, S();
    },
    reset() {
      C(), M();
    }
  };
}
