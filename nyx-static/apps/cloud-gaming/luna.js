(() => {
  "use strict";
  const e = document.querySelector("[data-luna-dialog]"), t = document.querySelector("[data-luna-host]"), n = document.querySelector("[data-luna-status]"), a = document.querySelector("[data-luna-open]");
  let l;
  function c(e) {
    document.documentElement.classList.toggle("cloud-session-active", e), parent !== window && parent.postMessage({
      type: "nyx:cloud-player",
      active: e
    }, location.origin);
  }
  a.addEventListener("click", () => {
    if (e.open || document.documentElement.classList.contains("cloud-session-active")) return;
    const a = document.createElement("iframe");
    a.title = "Luna cloud gaming", a.allow = "autoplay; fullscreen; gamepad; clipboard-read; clipboard-write", 
    a.allowFullscreen = !0, a.referrerPolicy = "no-referrer", n.textContent = "Loading Luna\u2026", 
    l = setTimeout(() => {
      n.textContent = "Taking longer than expected. Try opening Luna in a new tab.";
    }, 2e4), a.addEventListener("load", () => {
      clearTimeout(l), n.textContent = "CloudMoon games";
    }), a.src = "https://luna.loan/", t.replaceChildren(a), e.showModal(), c(!0);
  }), document.querySelector("[data-luna-close]").addEventListener("click", () => e.close()), 
  e.addEventListener("close", () => {
    clearTimeout(l), t.replaceChildren(), document.fullscreenElement === e && document.exitFullscreen().catch(() => {}), 
    c(!document.querySelector("[data-player-layer]").hidden || !document.querySelector("[data-launch-layer]").hidden), 
    a.focus();
  }), document.querySelector("[data-luna-fullscreen]").addEventListener("click", async () => {
    try {
      document.fullscreenElement === e ? await document.exitFullscreen() : await e.requestFullscreen();
    } catch {
      n.textContent = "Fullscreen is unavailable in this browser.";
    }
  }), "stratus" !== new URLSearchParams(location.search).get("provider") && a.click();
})();
