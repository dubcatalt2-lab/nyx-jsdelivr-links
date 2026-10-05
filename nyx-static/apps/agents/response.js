export async function readResponse(e, t, r) {
  if (!e.ok || !e.headers.get("content-type")?.includes("text/event-stream")) {
    const t = await e.text();
    let r;
    try {
      r = JSON.parse(t);
    } catch {
      throw Error(e.status >= 500 ? "The AI service is temporarily unavailable (" + e.status + "). Please retry in a moment." : "The AI service returned an unexpected response. Reload the page and try again.");
    }
    if (!e.ok) throw Object.assign(new Error("string" == typeof r.error ? r.error : r.error?.message || "AI request failed (" + e.status + ")."), {
      status: e.status,
      code: r.code
    });
    return r;
  }
  const o = e.body.getReader(), a = new TextDecoder, i = {
    text: "",
    model: "",
    metadata: {
      summary: ""
    }
  };
  let s = "", n = !1, c = 0, d = "";
  const l = [];
  function h(e) {
    if (!e.startsWith("data:")) return;
    const o = e.slice(5).trim();
    if (!o) return;
    if ("[DONE]" === o) return void (n = !0);
    let a;
    try {
      a = JSON.parse(o);
    } catch {
      throw Error("The AI service returned an unreadable reply. Please retry.");
    }
    if (a.error) throw Error("string" == typeof a.error ? a.error : a.error.message || "The model could not finish its reply.");
    a.model && (i.model = a.model);
    const s = a.choices?.[0]?.delta || {}, h = s.content;
    if (r && s.audio?.data) {
      const e = Uint8Array.from(atob(s.audio.data), e => e.charCodeAt(0));
      if (c += e.length, c > 8388608) throw Error("Voice reply is too large.");
      l.push(e);
    }
    if (r && "string" == typeof s.audio?.transcript && (d += s.audio.transcript), d.length > 6e4) throw Error("Voice transcript is too long.");
    if (a.choices?.[0]?.finish_reason && (i.finishReason = a.choices[0].finish_reason), 
    "string" == typeof h && (i.text = a.nyx_replace ? h : i.text + h), a.nyx_metadata?.summary && (i.metadata.summary = (i.metadata.summary + a.nyx_metadata.summary).slice(0, 2400)), 
    i.text.length > 2e5) throw Error("This reply is too long. Ask for a shorter answer.");
    ("string" == typeof h || a.nyx_metadata?.summary) && t?.(i);
  }
  try {
    for (;!n; ) {
      const {value: e, done: t} = await o.read();
      if (t) break;
      if (s += a.decode(e, {
        stream: !0
      }), s.length > 1e6) throw Error("The AI response exceeded its size limit.");
      let r;
      for (;(r = s.indexOf("\n")) >= 0 && (h(s.slice(0, r).trimEnd()), s = s.slice(r + 1), 
      !n); ) ;
    }
    if (s += a.decode(), !n && s.trim() && h(s.trim()), !n) throw Error("The connection ended before the reply finished. Please retry.");
    if (r) {
      if (!c) throw Error("This model returned no audio.");
      const e = "pcm16" === r;
      if (e && c % 2) throw Error("The voice audio was incomplete.");
      const t = new Uint8Array(c + (e ? 44 : 0));
      if (e) {
        const e = new DataView(t.buffer), r = (e, r) => [ ...r ].forEach((r, o) => t[e + o] = r.charCodeAt(0));
        r(0, "RIFF"), e.setUint32(4, c + 36, !0), r(8, "WAVEfmt "), e.setUint32(16, 16, !0), 
        e.setUint16(20, 1, !0), e.setUint16(22, 1, !0), e.setUint32(24, 24e3, !0), e.setUint32(28, 48e3, !0), 
        e.setUint16(32, 2, !0), e.setUint16(34, 16, !0), r(36, "data"), e.setUint32(40, c, !0);
      }
      let o = e ? 44 : 0;
      for (const r of l) t.set(r, o), o += r.length;
      let a = "";
      for (let r = 0; r < t.length; r += 8192) a += String.fromCharCode(...t.subarray(r, r + 8192));
      i.audio = {
        mime: e ? "audio/wav" : "audio/mpeg",
        data: btoa(a)
      }, i.text = d || i.text;
    }
    return i;
  } finally {
    await o.cancel().catch(() => {}), o.releaseLock();
  }
}
