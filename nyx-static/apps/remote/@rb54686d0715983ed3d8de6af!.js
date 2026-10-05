export function enhanceDesktop(e, t, n) {
  const o = e._canvas, s = e._display, i = s.absX.bind(s), c = s.absY.bind(s), u = (e, t) => Math.max(0, Math.min(t - 1, e));
  s.absX = e => document.fullscreenElement === t ? Math.floor(u(e / o.getBoundingClientRect().width * o.width, o.width)) : i(e), 
  s.absY = e => document.fullscreenElement === t ? Math.floor(u(e / o.getBoundingClientRect().height * o.height, o.height)) : c(e);
  let d = 0, r = 0, l = 0;
  const a = document.createElement("span");
  a.className = "locked-pointer", a.hidden = !0, t.append(a);
  const m = () => document.pointerLockElement === o, h = () => {
    e._handleMouseButton(d, r, 0), e._keyboard._allKeysUp(), l = 0, a.hidden = !0;
  }, p = () => {
    const e = o.getBoundingClientRect(), n = t.getBoundingClientRect();
    a.style.left = e.left - n.left + d + "px", a.style.top = e.top - n.top + r + "px";
  }, v = () => {
    if (m()) {
      const t = o.getBoundingClientRect();
      d = t.width / 2, r = t.height / 2, a.hidden = !1, p(), e.focus();
    } else h();
  }, f = t => {
    if (!m()) return;
    t.preventDefault(), t.stopImmediatePropagation();
    const n = o.getBoundingClientRect();
    if ("mousemove" === t.type) d = u(d + t.movementX, n.width), r = u(r + t.movementY, n.height), 
    e._handleMouseMove(d, r), p(); else if ("mousedown" === t.type || "mouseup" === t.type) l = 1 & t.buttons | (2 & t.buttons) << 1 | (4 & t.buttons) >> 1, 
    e._handleMouseButton(d, r, l); else if ("wheel" === t.type) {
      const n = t.deltaY < 0 ? 8 : 16;
      e._handleMouseButton(d, r, l | n), e._handleMouseButton(d, r, l);
    }
  }, g = () => queueMicrotask(n);
  t.addEventListener("mouseup", g, !0);
  const b = () => {
    n(), !document.fullscreenElement && m() && document.exitPointerLock();
  };
  document.addEventListener("fullscreenchange", b);
  const w = [ "mousemove", "mousedown", "mouseup", "click", "contextmenu", "wheel" ];
  for (const L of w) t.addEventListener(L, f, {
    capture: !0,
    passive: !1
  });
  document.addEventListener("pointerlockchange", v);
  const E = () => {
    m() && document.exitPointerLock();
  };
  return window.addEventListener("blur", E), {
    async lock() {
      if (!o.requestPointerLock) throw Error("Mouse lock is unavailable in this browser.");
      await o.requestPointerLock();
    },
    destroy() {
      h(), n(), t.removeEventListener("mouseup", g, !0), document.removeEventListener("fullscreenchange", b), 
      m() && document.exitPointerLock();
      for (const e of w) t.removeEventListener(e, f, !0);
      document.removeEventListener("pointerlockchange", v), window.removeEventListener("blur", E), 
      a.remove(), s.absX = i, s.absY = c;
    }
  };
}
