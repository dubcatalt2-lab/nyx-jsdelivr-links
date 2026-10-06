(() => {
  let e = !1;
  const t = new WeakSet, o = new WeakSet, n = [], a = () => {
    e || (e = !0, n.forEach(e => e.disconnect()), clearTimeout(c), parent.postMessage({
      type: "nyx:sponsor-ready"
    }, "*"));
  }, s = o => {
    if (!e) {
      for (const e of o.querySelectorAll("iframe,img,video")) if (!t.has(e)) if (t.add(e), 
      "IMG" === e.tagName) {
        const t = () => {
          e.naturalWidth > 1 && e.naturalHeight > 1 && a();
        };
        e.addEventListener("load", t, {
          once: !0
        }), e.complete && t();
      } else if ("VIDEO" === e.tagName) e.addEventListener("loadeddata", a, {
        once: !0
      }); else {
        const t = () => {
          try {
            const t = e.contentDocument;
            if (t) return void r(t);
          } catch {}
          Number(e.width) > 20 && Number(e.height) > 20 && a();
        };
        e.addEventListener("load", t);
        try {
          "complete" === e.contentDocument?.readyState && t();
        } catch {}
      }
      o !== document && [ ...o.querySelectorAll("a[href]") ].some(e => e.textContent.trim()) && a();
    }
  };
  function r(e) {
    if (!e.body || o.has(e)) return;
    o.add(e);
    const t = new MutationObserver(() => s(e));
    t.observe(e.body, {
      childList: !0,
      subtree: !0
    }), n.push(t), s(e);
  }
  const c = setTimeout(() => {
    e || (n.forEach(e => e.disconnect()), parent.postMessage({
      type: "nyx:sponsor-unavailable"
    }, "*"));
  }, 12e3);
  r(document), document.body.hasAttribute("data-resize-ad") && new ResizeObserver(() => parent.postMessage({
    type: "nyx:sponsor-size",
    height: document.body.scrollHeight
  }, "*")).observe(document.body);
})();
