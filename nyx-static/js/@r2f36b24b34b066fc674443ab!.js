(() => {
  let e = 0, t = 0, n = [];
  function a(e) {
    n.forEach(({element: e, hadInert: t}) => {
      e?.isConnected && !t && e.removeAttribute("inert");
    }), n = [], document.body?.classList.remove("nyx-loading-active"), e?.blur?.();
  }
  function r(n, a) {
    return a !== e || document.hidden || t === a ? Promise.resolve() : new Promise(t => {
      let r = 0;
      const i = () => {
        clearTimeout(r), document.removeEventListener("visibilitychange", o), t();
      }, o = () => {
        (document.hidden || a !== e) && i();
      };
      document.addEventListener("visibilitychange", o), r = setTimeout(i, Math.max(0, Number(n) || 0));
    });
  }
  function i(e, t, n, a = !0, r = !0) {
    const i = e.querySelector(".nyx-loading-progress"), o = i?.querySelector("span"), s = e.querySelector("[data-nyx-loading-percent]"), c = e.querySelector("[data-nyx-loading-stage]"), d = Math.max(0, Math.min(100, Number(t) || 0)), l = Math.round(d);
    o && r && (o.style.transform = `scaleX(${d / 100})`), s && (s.textContent = `${l}%`), 
    c && n && (c.textContent = n), i?.setAttribute("aria-valuenow", String(l)), n && i?.setAttribute("aria-valuetext", n), 
    a && window.dispatchEvent(new CustomEvent("nyx:loading-progress", {
      detail: {
        value: l,
        label: n || ""
      }
    }));
  }
  function o(e) {
    return Number(e.querySelector(".nyx-loading-progress")?.getAttribute("aria-valuenow")) || 0;
  }
  function s(n, a, r, s, c) {
    const d = o(n), l = Math.max(d, Math.min(100, Number(a) || 0)), u = n.querySelector(".nyx-loading-progress span");
    return l === d || document.hidden || t === c ? (i(n, l, r), Promise.resolve()) : new Promise(a => {
      const o = Date.now(), m = u?.animate([ {
        transform: `scaleX(${d / 100})`
      }, {
        transform: `scaleX(${l / 100})`
      } ], {
        duration: Math.max(1, s),
        easing: "linear",
        fill: "forwards"
      });
      let h = 0, y = !1;
      const v = (e = !0) => {
        y || (y = !0, clearTimeout(h), document.removeEventListener("visibilitychange", g), 
        m?.cancel(), e && (u && (u.style.transform = `scaleX(${l / 100})`), i(n, l, r, !0)), 
        a());
      }, g = () => {
        c !== e ? v(!1) : document.hidden || t === c ? v() : p();
      }, p = () => {
        if (c !== e) return void v(!1);
        if (document.hidden || t === c) return void v();
        const a = Math.min(1, (Date.now() - o) / Math.max(1, s));
        i(n, d + (l - d) * a, r, !1, !1), a < 1 ? h = setTimeout(p, 32) : v();
      };
      document.addEventListener("visibilitychange", g), h = setTimeout(p, 0);
    });
  }
  document.addEventListener("visibilitychange", () => {
    document.hidden && e && (t = e);
  }), [ "pointerdown", "pointerup", "click", "dblclick", "contextmenu", "wheel", "touchstart", "touchmove", "keydown", "keyup" ].forEach(e => {
    window.addEventListener(e, e => {
      document.body?.classList.contains("nyx-loading-active") && (e.preventDefault(), 
      e.stopImmediatePropagation());
    }, {
      capture: !0,
      passive: !1
    });
  }), window.nyxLoadingScreen = {
    show() {
      const c = document.getElementById("setupLaunchScreen"), d = c?.querySelector(".nyx-loading-progress span");
      if (!c || !d) return null;
      const l = ++e;
      return document.hidden && (t = l), c.classList.remove("show", "leaving"), d.getAnimations().forEach(e => e.cancel()), 
      i(c, 0, "Preparing Nyx"), c.offsetWidth, c.classList.add("show"), c.setAttribute("aria-hidden", "false"), 
      function(e) {
        a(e), n = Array.from(document.body?.children || []).filter(t => t !== e && "nyxStudyHubStartup" !== t.id && ![ "SCRIPT", "STYLE", "LINK" ].includes(t.tagName)).map(e => {
          const t = e.hasAttribute("inert");
          return t || e.setAttribute("inert", ""), {
            element: e,
            hadInert: t
          };
        }), document.body?.classList.add("nyx-loading-active"), e.setAttribute("role", "dialog"), 
        e.setAttribute("aria-modal", "true"), e.tabIndex = -1, e.focus({
          preventScroll: !0
        });
      }(c), {
        async step(t, n, a, r = 360) {
          if (l !== e) return {
            ok: !1,
            cancelled: !0
          };
          i(c, o(c), n);
          const d = performance.now();
          let u, m = null;
          try {
            u = await Promise.resolve().then(a);
          } catch (y) {
            m = y, console.warn(`Startup task failed: ${n}`, y);
          }
          const h = Math.max(480, Number(r) - (performance.now() - d));
          return await s(c, t, m ? `${n} (warning)` : n, h, l), l !== e ? {
            ok: !1,
            cancelled: !0
          } : {
            ok: !m,
            result: u,
            error: m
          };
        },
        async complete(t = "Nyx is ready") {
          l === e && (await s(c, 100, t, 300, l), await r(620, l), l === e && (c.classList.add("leaving"), 
          await r(780, l), l === e && (c.classList.remove("show", "leaving"), c.setAttribute("aria-hidden", "true"), 
          i(c, 0, "Preparing Nyx"), a(c))));
        }
      };
    }
  };
})();
