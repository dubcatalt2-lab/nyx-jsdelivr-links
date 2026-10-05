(() => {
  const e = document.createElement("style");
  e.textContent = "html,body{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#05070d}canvas,object,embed,ruffle-player,ruffle-object{max-width:100%;max-height:100%}", 
  (document.head || document.documentElement).append(e);
  let t = !1;
  function n() {
    t = !1;
    let e = !1;
    for (const t of document.querySelectorAll("canvas,object,embed,ruffle-player,ruffle-object")) {
      const n = [];
      for (let e = t.parentElement; e && e !== document.body; e = e.parentElement) n.unshift(e);
      for (const t of n) {
        if ("none" === getComputedStyle(t).display) break;
        const n = t.getBoundingClientRect();
        n.height < 1 && "100%" !== t.style.height && (t.style.height = "100%", e = !0), 
        n.width < 1 && "100%" !== t.style.width && (t.style.width = "100%", e = !0);
      }
    }
    e && window.dispatchEvent(new Event("resize"));
  }
  const o = () => {
    t || (t = !0, requestAnimationFrame(n));
  };
  new MutationObserver(o).observe(document.documentElement, {
    childList: !0,
    subtree: !0
  }), addEventListener("DOMContentLoaded", o), addEventListener("resize", o), addEventListener("load", o);
})();
