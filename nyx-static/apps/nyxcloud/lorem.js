export function loremDesktop({api: e, screen: t, status: o, connected: n, reconnect: r}) {
  let s, i, a, c, l, d = !1, u = !1, p = !1, v = "", h = null, m = !1;
  function f() {
    if (d || !p || !m) return;
    if (!h) return void o("Desktop open");
    const n = Math.max(0, Math.ceil((h - Date.now()) / 1e3));
    if (!n) return p = !1, t.replaceChildren(y), y.querySelector("h1").textContent = "Session ended", 
    q("Your session is over. Reconnect to join the queue again."), x.hidden = !1, void e("/lorem/queue").catch(() => {});
    o("Desktop open \xb7 " + Math.floor(n / 60) + ":" + String(n % 60).padStart(2, "0") + " remaining");
  }
  const b = () => {
    const e = t.querySelector("iframe");
    if (!e || d) return;
    if ("fit" === t.dataset.scale) return void (e.style.cssText = "");
    const {width: o, height: n} = t.getBoundingClientRect();
    if (!o || !n) return;
    const r = Math.max(720, Math.round(n)), s = Math.round(16 * r / 9);
    e.style.cssText = "position:absolute;left:0;top:0;transform-origin:top left;width:" + s + "px;height:" + r + "px;transform:scale(" + o / s + "," + n / r + ")";
  };
  t.addEventListener("nyx:display-scale", b);
  const y = document.createElement("div");
  y.className = "vm-loading", y.setAttribute("role", "status"), y.innerHTML = '<section class="boot-card">\n    <div class="boot-scene" aria-hidden="true">\n      <div class="boot-halo"></div>\n      <div class="boot-desktop">\n        <div class="boot-window-bar"><span></span><span></span><span></span><b>NYXCLOUD</b></div>\n        <div class="boot-window-body"><div class="boot-orbit"><svg viewBox="0 0 24 24"><path d="m5 17 4-10 6 10 4-10"/></svg></div><div class="boot-scan"></div></div>\n        <div class="boot-window-dock"><i></i><i></i><i></i><i></i></div>\n      </div>\n      <div class="boot-stand"></div>\n    </div>\n    <p class="boot-eyebrow">YOUR PRIVATE WORKSPACE</p>\n    <h1>Booting your desktop</h1>\n    <div class="boot-status"><span class="boot-status-dot" aria-hidden="true"></span><p class="boot-message" aria-live="polite"></p></div>\n    <div class="boot-steps" aria-hidden="true"><span class="boot-step active"><i>1</i>Prepare</span><span class="boot-step"><i>2</i>Boot</span><span class="boot-step"><i>3</i>Display</span></div>\n    <p class="boot-session-note">Save your files before the session timer ends.</p>\n    <button class="boot-cancel boot-retry" hidden>Leave queue</button>\n    <button class="boot-retry boot-reconnect" hidden>Reconnect</button>\n  </section>';
  const g = y.querySelector(".boot-message"), w = y.querySelector(".boot-orbit"), x = y.querySelector(".boot-reconnect"), k = y.querySelector(".boot-cancel");
  function q(e, t = 0) {
    d || (g.textContent = e, o(e), y.querySelectorAll(".boot-step").forEach((e, o) => {
      e.classList.toggle("active", o === t), e.classList.toggle("done", o < t);
    }));
  }
  function S(e) {
    d || (w.hidden = !0, y.dataset.error = "true", y.querySelector("h1").textContent = "Unable to open desktop", 
    x.hidden = !r, q(e.message || "The desktop could not start."));
  }
  function T(e, o) {
    if (d) return;
    p = !0, v = e.url, h = Number(o) || null, m = !1, k.hidden = !0, y.querySelector("h1").textContent = "Opening your desktop";
    const r = new URL(e.url);
    if ("https://loremgroup.org" !== r.origin || r.username || r.password || r.search || r.hash || !/^\/vm\/[A-Za-z0-9_-]+\/$/.test(r.pathname)) throw Error("Unsupported desktop URL.");
    const s = document.createElement("iframe");
    s.title = "NyxCloud desktop", s.src = r.href, s.referrerPolicy = "no-referrer", 
    s.allow = "clipboard-read; clipboard-write; autoplay; fullscreen; display-capture; microphone; gamepad", 
    s.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-downloads allow-pointer-lock"), 
    s.allowFullscreen = !0, s.addEventListener("load", () => {
      d || (clearTimeout(a), y.remove(), m = !0, f(), n());
    }, {
      once: !0
    }), t.replaceChildren(s, y), l?.disconnect(), l = new ResizeObserver(b), l.observe(t), 
    b(), q("Opening your display...", 2), a = setTimeout(() => {
      d || S(Error("The display is taking longer than expected. You can reconnect."));
    }, 45e3);
  }
  async function E() {
    try {
      const t = await e("/lorem/queue");
      if (d || u) return;
      if ("ready" === t.status) return void T(t.vm, t.expiresAt);
      if ("recovering" === t.status) throw Error(t.message);
      if ("queued" !== t.status) throw Error("Your queue reservation ended. Use Reconnect to join again.");
      k.hidden = !1, y.querySelector("h1").textContent = "service_unavailable" === t.reason ? "Desktop service unavailable" : t.position ? "You\u2019re #" + t.position + " in line" : "Waiting for a desktop", 
      q("isolated_desktop_pending" === t.reason ? "Waiting for a separate desktop. Your place is saved." : "service_unavailable" === t.reason ? "The service is reconnecting. Your place is saved." : t.providerPosition ? "Waiting for provider capacity \xb7 provider position " + t.providerPosition : "Desktops are busy. Yours will open automatically."), 
      s = setTimeout(E, 5e3);
    } catch (t) {
      if (d || u) return;
      t.status >= 500 || "TypeError" === t.name || "TimeoutError" === t.name ? (y.querySelector("h1").textContent = "Reconnecting to desktop service", 
      q("Reconnecting to the queue. Your place is saved."), s = setTimeout(E, 1e4)) : S(t);
    }
  }
  k.onclick = async () => {
    u = !0, clearTimeout(s), k.disabled = !0;
    try {
      const t = await e("/lorem/cancel", "POST");
      if (d) return;
      if ("ready" === t.status) return void T(t.vm, t.expiresAt);
      k.hidden = !0, y.querySelector("h1").textContent = "You left the queue", q("Your place has been released."), 
      x.textContent = "Join queue", x.hidden = !1;
    } catch (t) {
      d || (u = !1, S(t));
    } finally {
      k.disabled = !1;
    }
  }, x.onclick = () => r?.(), t.replaceChildren(y);
  let C = !1;
  function R() {
    d = !0, l?.disconnect(), t.removeEventListener("nyx:display-scale", b), clearTimeout(s), 
    clearTimeout(a), clearInterval(i), clearInterval(c);
  }
  return i = setInterval(async () => {
    if (p && !d && !C) {
      C = !0;
      try {
        const o = await e("/lorem/queue");
        if (d) return;
        "ready" === o.status && o.vm?.url === v || (t.replaceChildren(y), p = !1, S(Error(o.message || "Your desktop session ended. Reconnect to start a new session.")));
      } catch (n) {
        if (d) return;
        [ 401, 403, 404 ].includes(n.status) ? (t.replaceChildren(), R(), o("Sign in again to reconnect.")) : o(n.message);
      } finally {
        C = !1;
      }
    }
  }, 3e4), async function t(o = !1) {
    q("Preparing your workspace...");
    const n = await e("/lorem/vms");
    if (d) return;
    const r = n.vms.find(e => e.url && /running|started/i.test(e.state)) || n.vms.find(e => e.url);
    if (r) {
      if (/stopped|exited/i.test(r.state) && (q("Starting the virtual machine...", 1), 
      await e("/lorem/start/" + encodeURIComponent(r.id), "POST"), d)) return;
      return void T(r, n.expiresAt);
    }
    if (n.queued) return void await E();
    if (n.vms.length) throw Error("Your VM is not ready to connect. Use Reconnect to check again.");
    if (o) throw Error("The desktop is still being prepared. Use Reconnect to check again.");
    let s;
    q("Allocating your virtual machine...", 1);
    try {
      s = await e("/lorem/create", "POST");
    } catch (i) {
      if (409 === i.status && !d) return t(!0);
      throw i;
    }
    if (!d) if ("ready" === s.status) T(s.vm, s.expiresAt); else {
      if ("queued" !== s.status) throw "recovering" === s.status ? Error(s.message) : Error("The VM service returned an unexpected response.");
      await E();
    }
  }().catch(S), c = setInterval(f, 1e3), R;
}
