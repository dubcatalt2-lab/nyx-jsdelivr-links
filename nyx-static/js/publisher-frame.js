export function createPublisherFrame({path: e, width: t, height: n, onReady: a, onUnavailable: o, dynamicHeight: i = !1}) {
  const r = document.createElement("iframe");
  r.title = "Advertisement", r.width = t, r.height = n, r.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"), 
  r.dataset.nyxSponsorPath = e, r.referrerPolicy = "strict-origin-when-cross-origin", 
  r.style.visibility = "hidden", r.src = "data:text/html;charset=utf-8,";
  const s = new AbortController;
  let l = !1;
  const c = setTimeout(p, 18e3);
  function h(e = !1) {
    clearTimeout(c), s.abort(), e || window.removeEventListener("message", d), r.removeEventListener("error", p);
  }
  function p() {
    l || (l = !0, h(), r.remove(), o?.());
  }
  function d(e) {
    if (e.source === r.contentWindow) if (i && "nyx:sponsor-size" === e.data?.type && Number.isFinite(e.data.height)) r.style.height = Math.max(120, Math.min(1200, Math.ceil(e.data.height))) + "px"; else if (!l) return "nyx:sponsor-unavailable" === e.data?.type ? p() : void ("nyx:sponsor-ready" === e.data?.type && (l = !0, 
    h(i), r.style.visibility = "visible", a?.()));
  }
  return (async () => {
    try {
      const t = new URL(e, location.href);
      if (t.origin !== location.origin || ![ "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/banner.html", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/side.html", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/native.html", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/social.html" ].includes(t.pathname)) throw new Error("Unknown placement");
      const n = await fetch(t, {
        signal: s.signal
      });
      if (!n.ok) throw new Error("Placement unavailable");
      const a = await n.text();
      if (l) return;
      const o = new URL(".", t).href.replaceAll("&", "&amp;").replaceAll('"', "&quot;"), i = a.replace(/<head(?:\s[^>]*)?>/i, e => e + '<base href="' + o + '">');
      r.src = "data:text/html;charset=utf-8," + encodeURIComponent(i);
    } catch {
      l || p();
    }
  })(), window.addEventListener("message", d), r.addEventListener("error", p), {
    element: r,
    destroy() {
      l = !0, h(), r.remove();
    }
  };
}
