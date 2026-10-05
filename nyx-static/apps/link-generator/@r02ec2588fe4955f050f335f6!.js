(() => {
  const e = "nyx.linkGenerator.walkthrough.v1", t = [ [ [ ".access-tabs", "Start with your Nyx account", "Sign in below, or use your Premium access code. Then select Continue. Nothing is published yet." ] ], [ [ "[data-provider]", "Choose where to host it", "jsDelivr uses the Nyx publisher. Other configured providers appear here when available." ], [ "[data-label-input]", "Give it a name", "Choose a short label, such as study-room. A random suffix keeps each new link separate." ], [ "[data-filter-select]", "Check your network", "Select a filter for a one-time availability report. A report cannot guarantee a link will work on every network." ], [ '[data-wizard-step="1"] .wizard-actions', "Review before publishing", "Choose the amount if shown, then select Review. Surge creates one link at a time." ] ], [ [ ".review-panel", "Check these details", "Review the destination and provider, tick the confirmation, then select Generate link once. Wait for it to finish." ] ], [ [ ".bulk-link-actions", "Your link is ready", "Copy it, download the list, or open it. The report below shows what the selected filter returned." ] ] ];
  let n = !0, o = 0, i = 0, r = [], a = null;
  try {
    const t = JSON.parse(localStorage.getItem(e) || "null");
    n = !t?.done, r = t?.ack || [];
  } catch {}
  const c = document.createElement("div");
  c.className = "generator-tour-ring", c.hidden = !0, c.setAttribute("aria-hidden", "true");
  const l = document.createElement("section");
  l.className = "generator-tour", l.hidden = !0, l.setAttribute("role", "dialog"), 
  l.setAttribute("aria-labelledby", "generator-tour-title"), l.tabIndex = -1, l.innerHTML = '<small data-tour-count></small><h3 id="generator-tour-title"></h3><p data-tour-copy></p><div><button type="button" data-tour-skip>Skip tutorial</button><button type="button" data-tour-next>Got it</button></div>', 
  document.body.append(c, l);
  const s = t => {
    try {
      localStorage.setItem(e, JSON.stringify({
        done: t,
        ack: r
      }));
    } catch {}
  };
  function d() {
    c.hidden = !0, l.hidden = !0, l.contains(document.activeElement) && a?.isConnected && a.focus({
      preventScroll: !0
    });
  }
  function u() {
    if (l.hidden) return;
    const e = document.querySelector(t[o]?.[i]?.[0]);
    if (!e || !e.getClientRects().length) return void d();
    const n = e.getBoundingClientRect();
    Object.assign(c.style, {
      left: n.left - 5 + "px",
      top: n.top - 5 + "px",
      width: `${n.width + 10}px`,
      height: `${n.height + 10}px`
    });
    const r = l.offsetWidth, a = l.offsetHeight, s = n.bottom + 18, u = s + a < innerHeight - 12 ? s : Math.max(12, n.top - a - 18);
    Object.assign(l.style, {
      left: `${Math.max(12, Math.min(innerWidth - r - 12, n.left))}px`,
      top: `${Math.min(u, Math.max(12, innerHeight - a - 12))}px`
    });
  }
  function h() {
    if (!n || r.includes(o)) return void d();
    const [e, s, h] = t[o][i], p = document.querySelector(e);
    p && (l.contains(document.activeElement) || (a = document.activeElement), p.scrollIntoView({
      block: "center",
      behavior: "instant"
    }), l.querySelector("h3").textContent = s, l.querySelector("[data-tour-copy]").textContent = h, 
    l.querySelector("[data-tour-count]").textContent = `${[ "Access", "Details", "Review", "Done" ][o]} \xb7 ${i + 1} / ${t[o].length}`, 
    l.querySelector("[data-tour-next]").textContent = i < t[o].length - 1 ? "Next tip" : 3 === o ? "Finish" : "Got it", 
    l.hidden = !1, c.hidden = !1, u());
  }
  l.querySelector("[data-tour-next]").addEventListener("click", () => {
    if (++i < t[o].length) return h(), void l.querySelector("[data-tour-next]").focus();
    r.push(o), 3 === o && (n = !1), s(!n), d();
  }), l.querySelector("[data-tour-skip]").addEventListener("click", () => {
    n = !1, s(!0), d();
  }), document.addEventListener("keydown", e => {
    "Escape" !== e.key || l.hidden || (n = !1, s(!0), d());
  }), document.addEventListener("nyx-generator-step", e => {
    o = e.detail, i = 0, d(), requestAnimationFrame(h);
  }), document.querySelector("[data-tutorial-replay]").addEventListener("click", () => {
    n = !0, r = [], i = 0, s(!1), h(), l.focus();
  }), addEventListener("resize", u), addEventListener("scroll", u, !0);
})();
