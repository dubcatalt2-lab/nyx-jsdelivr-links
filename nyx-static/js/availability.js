(() => {
  let e = 0, t = 0, n = 0, o = "", i = null, r = null, a = !1, l = null, d = null, s = 0, c = !1, u = !1, p = null;
  const h = new Set;
  let m = "";
  function f() {
    const e = !1 === navigator.onLine;
    if (e || h.delete("offline"), c || h.delete("host"), !u) for (const o of h) o.startsWith("relay:") && h.delete(o);
    m = e ? "offline" : c ? "host" : u ? "relay:" + o : "";
    const t = e ? "You are offline. Check your internet connection." : c ? "Nyx VPS is unreachable and may be down. Report to vdrtes on Discord immediately!" : u ? i?.().custom ? "Having trouble connecting to your custom Wisp relay. Retrying automatically..." : "Having trouble connecting to Wisp. Retrying automatically..." : "";
    if (!t || h.has(m)) return void (p && (p.hidden = !0));
    if (!p) {
      p = document.createElement("div"), p.id = "nyxAvailabilityWarning";
      const e = p.attachShadow({
        mode: "open"
      });
      e.innerHTML = '<style>:host{position:fixed!important;left:12px!important;right:12px!important;bottom:14px!important;z-index:2147483647!important;pointer-events:none!important}:host([hidden]){display:none!important}.notice{box-sizing:border-box;display:flex;align-items:center;gap:12px;max-width:650px;margin:auto;padding:14px 18px;border:1px solid #9c3f49;border-radius:14px;background:#201014;color:#ff9aa5;box-shadow:0 6px 24px #0006;font:600 14px/1.5 system-ui,sans-serif;overflow-wrap:anywhere}svg{width:25px;height:25px;flex:none;fill:none;stroke:currentColor;stroke-width:1.8}@media(max-width:480px){.notice{padding:12px;font-size:13px}}</style><div class="notice" role="alert" aria-atomic="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.3 4.2 2.1 18.5A1.7 1.7 0 0 0 3.6 21h16.8a1.7 1.7 0 0 0 1.5-2.5L13.7 4.2a2 2 0 0 0-3.4 0Z"/><path d="M12 9v5m0 3v1"/></svg><span></span></div>', 
      document.body.append(p);
      const t = document.createElement("button");
      t.type = "button", t.setAttribute("aria-label", "Dismiss connection warning"), t.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg>', 
      t.style.cssText = "pointer-events:auto;display:grid;place-items:center;flex:none;margin-left:auto;width:32px;height:32px;border:0;border-radius:8px;background:transparent;color:inherit;cursor:pointer", 
      t.querySelector("svg").style.cssText = "width:18px;height:18px", t.addEventListener("click", () => {
        h.add(m), p.hidden = !0;
      }), e.querySelector(".notice").append(t);
    }
    const n = p.shadowRoot.querySelector("span");
    n.textContent !== t && (n.textContent = t), p.hidden = !1;
  }
  function x() {
    e = 0, t = 0, c = !1, n = 0, u = !1;
  }
  function v(e) {
    clearTimeout(l), l = setTimeout(() => {
      g();
    }, e);
  }
  function y() {
    s++, d?.(), clearTimeout(l), n = 0, document.hidden || !1 === navigator.onLine || v(0);
  }
  async function g() {
    if (a || document.hidden || !1 === navigator.onLine || c || !i) return;
    const e = i();
    if (!/^wss?:\/\//i.test(e.url)) return o = "", n = 0, u = !1, f(), void v(3e4);
    o !== e.url && (o = e.url, n = 0, u = !1, f());
    const t = s;
    a = !0;
    try {
      const o = await (l = e.url, new Promise(e => {
        let t, n, o = !1;
        const i = i => {
          if (!o) {
            if (o = !0, clearTimeout(n), d = null, t) {
              t.onopen = t.onerror = t.onclose = null;
              try {
                t.close();
              } catch {}
            }
            e(i);
          }
        };
        d = () => i(null), n = setTimeout(() => i(!1), 1e4);
        try {
          t = new WebSocket(l), t.onopen = () => i(!0), t.onerror = t.onclose = () => i(!1);
        } catch {
          i(!1);
        }
      }));
      if (t !== s || null === o || document.hidden || !1 === navigator.onLine) return;
      if (i().url !== e.url) return n = 0, u = !1, f(), void v(0);
      n = o ? 0 : n + 1, u = !o && (u || n >= 3), !o && n >= 3 && await (r?.(e.url)), 
      f(), v(o ? 3e4 : 5e3);
    } finally {
      a = !1;
    }
    var l;
  }
  window.NyxAvailability = {
    recordHealth: function(n) {
      if (!1 === navigator.onLine) return x(), void f();
      if (n) {
        const n = c;
        e = 0, t = 0, c = !1, n && v(0);
      } else e || (t = Date.now()), e++, e >= 3 && Date.now() - t >= 1e4 && (c = !0);
      f();
    },
    start(e, t) {
      i || (i = e, r = t, g(), addEventListener("offline", () => {
        x(), y(), f();
      }), addEventListener("online", () => {
        x(), y(), f();
      }), document.addEventListener("visibilitychange", y));
    }
  };
})();
