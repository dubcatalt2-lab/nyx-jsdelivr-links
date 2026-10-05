(() => {
  let n = 0, e = 0, t = 0, o = "", i = null, r = null, a = !1, l = null, d = null, s = 0, c = !1, u = !1, p = null;
  function m() {
    const n = !1 === navigator.onLine ? "You are offline. Check your internet connection." : c ? "Nyx VPS is unreachable and may be down. Report to vdrtes on Discord immediately!" : u ? i?.().custom ? "Having trouble connecting to your custom Wisp relay. Retrying automatically..." : "Having trouble connecting to Wisp. Retrying automatically..." : "";
    if (!n) return void (p && (p.hidden = !0));
    p || (p = document.createElement("div"), p.id = "nyxAvailabilityWarning", p.attachShadow({
      mode: "open"
    }).innerHTML = '<style>:host{position:fixed!important;left:12px!important;right:12px!important;bottom:14px!important;z-index:2147483647!important;pointer-events:none!important}:host([hidden]){display:none!important}.notice{box-sizing:border-box;display:flex;align-items:center;gap:12px;max-width:650px;margin:auto;padding:14px 18px;border:1px solid #9c3f49;border-radius:14px;background:#201014;color:#ff9aa5;box-shadow:0 6px 24px #0006;font:600 14px/1.5 system-ui,sans-serif;overflow-wrap:anywhere}svg{width:25px;height:25px;flex:none;fill:none;stroke:currentColor;stroke-width:1.8}@media(max-width:480px){.notice{padding:12px;font-size:13px}}</style><div class="notice" role="alert" aria-atomic="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.3 4.2 2.1 18.5A1.7 1.7 0 0 0 3.6 21h16.8a1.7 1.7 0 0 0 1.5-2.5L13.7 4.2a2 2 0 0 0-3.4 0Z"/><path d="M12 9v5m0 3v1"/></svg><span></span></div>', 
    document.body.append(p));
    const e = p.shadowRoot.querySelector("span");
    e.textContent !== n && (e.textContent = n), p.hidden = !1;
  }
  function f() {
    n = 0, e = 0, c = !1, t = 0, u = !1;
  }
  function x(n) {
    clearTimeout(l), l = setTimeout(() => {
      v();
    }, n);
  }
  function h() {
    s++, d?.(), clearTimeout(l), t = 0, document.hidden || !1 === navigator.onLine || x(0);
  }
  async function v() {
    if (a || document.hidden || !1 === navigator.onLine || c || !i) return;
    const n = i();
    if (!/^wss?:\/\//i.test(n.url)) return o = "", t = 0, u = !1, m(), void x(3e4);
    o !== n.url && (o = n.url, t = 0, u = !1, m());
    const e = s;
    a = !0;
    try {
      const o = await (l = n.url, new Promise(n => {
        let e, t, o = !1;
        const i = i => {
          if (!o) {
            if (o = !0, clearTimeout(t), d = null, e) {
              e.onopen = e.onerror = e.onclose = null;
              try {
                e.close();
              } catch {}
            }
            n(i);
          }
        };
        d = () => i(null), t = setTimeout(() => i(!1), 1e4);
        try {
          e = new WebSocket(l), e.onopen = () => i(!0), e.onerror = e.onclose = () => i(!1);
        } catch {
          i(!1);
        }
      }));
      if (e !== s || null === o || document.hidden || !1 === navigator.onLine) return;
      if (i().url !== n.url) return t = 0, u = !1, m(), void x(0);
      t = o ? 0 : t + 1, u = !o && (u || t >= 3), !o && t >= 3 && await (r?.(n.url)), 
      m(), x(o ? 3e4 : 5e3);
    } finally {
      a = !1;
    }
    var l;
  }
  window.NyxAvailability = {
    recordHealth: function(t) {
      if (!1 === navigator.onLine) return f(), void m();
      if (t) {
        const t = c;
        n = 0, e = 0, c = !1, t && x(0);
      } else n || (e = Date.now()), n++, n >= 3 && Date.now() - e >= 1e4 && (c = !0);
      m();
    },
    start(n, e) {
      i || (i = n, r = e, v(), addEventListener("offline", () => {
        f(), h(), m();
      }), addEventListener("online", () => {
        f(), h(), m();
      }), document.addEventListener("visibilitychange", h));
    }
  };
})();
