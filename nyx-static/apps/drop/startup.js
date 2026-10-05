window.dropStartupReady = new Promise(e => {
  const t = document.getElementById("studyready-startup");
  let n, o = !1, r = !1;
  const a = new AbortController, c = new WeakSet, d = () => {
    o || r || (o = !0, clearTimeout(n), clearTimeout(m), a.abort(), clearInterval(u), 
    t?.remove(), document.title = "Drop", document.documentElement.classList.remove("startup-covered"), 
    e());
  }, s = e => {
    !e.isTrusted || o || r || (r = !0, clearTimeout(n), clearTimeout(m), a.abort(), 
    clearInterval(u), t.dataset.staying = "true");
  }, i = () => {
    if (!o && !r) try {
      const e = t.contentDocument;
      if (!e || c.has(e)) return;
      c.add(e);
      for (const t of [ "pointerdown", "keydown", "wheel", "touchstart" ]) e.addEventListener(t, s, {
        capture: !0,
        passive: !0,
        signal: a.signal
      });
    } catch {}
  }, l = () => {
    o || r || (i(), n || (n = setTimeout(d, 3e3)));
  }, u = setInterval(i, 25);
  i();
  const m = setTimeout(d, 8e3);
  t?.addEventListener("load", l, {
    once: !0
  }), t?.addEventListener("error", l, {
    once: !0
  });
  try {
    (!t || "complete" === t.contentDocument?.readyState && t.contentWindow.location.pathname.endsWith("/studyready/index.html")) && l();
  } catch {
    l();
  }
});
