(() => {
  const e = document.documentElement;
  try {
    if (window.parent !== window && parent.location.origin === location.origin && ("tutsi" === window.frameElement?.dataset.appShell || "tutsi" === parent.document.documentElement.dataset.appShell)) {
      e.dataset.appShell = "tutsi";
      const t = () => document.querySelectorAll('link[rel="stylesheet"]').forEach(e => {
        "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/obsidian.css" === new URL(e.href, location.href).pathname && e.remove();
      });
      t(), new MutationObserver(t).observe(document.head, {
        childList: !0
      });
    }
  } catch {}
  const t = document.createElement("style");
  let n;
  t.textContent = 'html[data-app-presentation="pending"] body{visibility:hidden!important}', 
  document.head.append(t), e.dataset.appPresentation = "pending";
  const o = () => {
    clearTimeout(n), delete e.dataset.appPresentation, t.remove();
  };
  n = setTimeout(o, 8e3);
  const a = () => {
    try {
      window.frameElement?.dispatchEvent(new Event("nyx:app-dom-ready"));
    } catch {}
    const e = [ ...document.querySelectorAll("#tutsi-embedded-style") ].filter(e => !e.disabled && !e.sheet);
    e.length ? Promise.all(e.map(e => new Promise(t => {
      const n = () => {
        e.removeEventListener("load", n), e.removeEventListener("error", n), t();
      };
      e.addEventListener("load", n, {
        once: !0
      }), e.addEventListener("error", n, {
        once: !0
      }), e.sheet && n();
    }))).then(o) : o();
  };
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", a, {
    once: !0
  }) : a();
})();
