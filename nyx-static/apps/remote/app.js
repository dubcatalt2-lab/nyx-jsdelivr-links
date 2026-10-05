import { enhanceDesktop as ec } from "./@rb54686d0715983ed3d8de6af!.js";

const m = e => document.getElementById(e);

let C, os, ns, tc, nc, oc, ic, as, ac = 0, rs = 0, cc = 0;

const I = e => {
  m("notice").textContent = e;
}, sc = e => ![ 401, 403, 404 ].includes(e.status) && ![ "auth/user-disabled", "auth/user-token-expired", "auth/invalid-user-token" ].includes(e.code), rc = e => e instanceof TypeError || [ "TimeoutError", "auth/network-request-failed" ].includes(e.name) || "auth/network-request-failed" === e.code ? "The connection request could not reach the server." : e.message;

let dc, uc, lc = 0;

async function $(e, t, n, o = !1) {
  const i = await (C?.currentUser?.getIdToken(o));
  if (!i) throw Object.assign(Error("Sign in to Nyx with your owner account."), {
    status: 401
  });
  const a = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/private-remote" + e, {
    method: n || (t ? "POST" : "GET"),
    headers: {
      Authorization: "Bearer " + i,
      ...t ? {
        "Content-Type": "application/json"
      } : {}
    },
    ...t ? {
      body: JSON.stringify(t)
    } : {},
    cache: "no-store",
    signal: AbortSignal.timeout(15e3)
  });
  if (401 === a.status && !o) return $(e, t, n, !0);
  if (!a.ok) {
    const e = await a.json().catch(() => ({}));
    throw Object.assign(Error(e.error || "Not available."), {
      status: a.status
    });
  }
  return a;
}

function pc(e, t, n, o = 6e4) {
  as = setTimeout(async () => {
    if (n === rs) {
      try {
        await $("/renew", {
          session: e
        });
      } catch (o) {
        return void (n === rs && (409 !== o.status && sc(o) ? pc(e, t, n, 5e3) : vc(t, rc(o), sc(o))));
      }
      n === rs && pc(e, t, n);
    }
  }, o);
}

const mc = e => async t => {
  t?.preventDefault();
  try {
    await e(t);
  } catch (n) {
    I(n.message);
  }
};

function hc(e) {
  1 === os?.readyState && os.send(JSON.stringify(e));
}

function fc() {
  clearTimeout(oc), clearTimeout(ic), clearTimeout(as), m("cancelReconnect").hidden = !0, 
  rs++, nc?.destroy(), nc = null, ns?.disconnect(), ns = null, hc({
    type: "release"
  }), os?.close(), os = null, tc && URL.revokeObjectURL(tc), tc = null, m("frame").removeAttribute("src"), 
  m("frame").hidden = !1, m("screen").replaceChildren(m("frame")), m("screen").classList.remove("vnc-screen"), 
  m("secureAttention").hidden = !0, m("session").hidden = !0, m("setup").hidden = !1;
}

async function wc() {
  const e = await (await $("/devices")).json();
  if (m("devices").replaceChildren(), !e.devices.length) {
    const e = document.createElement("p");
    e.textContent = "No paired computers.", m("devices").append(e);
  }
  for (const t of e.devices) {
    const e = document.createElement("div");
    e.className = "device";
    const n = document.createElement("span");
    n.textContent = t.name;
    const o = document.createElement("small");
    o.textContent = t.connected ? "In use" : t.online ? "Online" : "Offline", n.append(o);
    const i = document.createElement("button");
    i.textContent = "Connect", i.disabled = !t.online || t.connected, i.onclick = mc(() => yc(t));
    const a = document.createElement("button");
    a.textContent = "Remove", a.onclick = mc(async () => {
      confirm("Remove " + t.name + " and revoke its remote access?") && (await $("/devices/" + t.id, null, "DELETE"), 
      await wc());
    });
    const c = document.createElement("button");
    c.textContent = "Generate new code", c.onclick = mc(async () => {
      const e = await (await $("/devices/" + t.id + "/code", {})).json();
      I("Code: " + e.code.match(/.{1,4}/g).join("-") + " ? valid for 5 minutes, for your owner account only.");
    }), e.append(n, i), document.documentElement.hasAttribute("data-direct-desktop") || e.append(c, a), 
    m("devices").append(e);
  }
}

function vc(e, t, n = !0) {
  if (fc(), wc().catch(() => {}), !n) return void I(t);
  const o = ++cc, i = rs, a = Math.min(3e4, 3e3 * 2 ** Math.min(o - 1, 4));
  I(t + " Reconnecting in " + a / 1e3 + " seconds..."), m("cancelReconnect").hidden = !1, 
  oc = setTimeout(() => {
    rs === i && yc(e, !0).catch(t => {
      rs === i + 2 && vc(e, t.message, ![ 401, 403, 404 ].includes(t.status) && ![ "auth/user-disabled", "auth/user-token-expired", "auth/invalid-user-token" ].includes(t.code));
    });
  }, a);
}

async function yc(e, t = !1) {
  t || (cc = 0), fc();
  const n = ++rs;
  m("cancelReconnect").hidden = !1;
  try {
    const t = "vnc" === e.mode ? (await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/vendor/novnc/core/rfb.js"))).default : null, o = "vnc" === e.mode ? (await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/vendor/novnc/core/util/events.js"))).releaseCapture : null;
    if (n !== rs) return;
    const {ticket: i} = await (await $("/connect", {
      id: e.id
    })).json();
    if (n !== rs) return;
    m("session").hidden = !1, m("setup").hidden = !0, m("computerName").textContent = e.name, 
    m("sessionState").textContent = "Connecting\u2026", I(""), os = new WebSocket(location.origin.replace(/^http/, "ws") + "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/private-remote/socket"), 
    os.binaryType = "blob";
    const a = os;
    let c = 1006, s = !1;
    a.addEventListener("close", e => {
      c = e.code;
    }, {
      capture: !0
    });
    const r = () => {
      n === rs && vc(e, s ? "Windows desktop authentication failed." : {
        4001: "Session authorization needs refreshing.",
        4003: "Remote access was refused.",
        4008: "Remote traffic limit reached.",
        4009: "Computer is already in use.",
        4010: "Connection could not keep up with the desktop stream.",
        4011: "The Windows desktop stream ended.",
        4012: "The Windows bridge disconnected."
      }[c] || "Desktop connection interrupted (code " + c + ").", !s && ![ 4003, 4009 ].includes(c));
    }, d = () => {
      clearTimeout(ic), cc = 0, m("cancelReconnect").hidden = !0;
    };
    ic = setTimeout(() => {
      n === rs && vc(e, "The desktop connection timed out.");
    }, 15e3), os.onopen = () => a.send(JSON.stringify({
      type: "viewer",
      ticket: i
    })), os.onmessage = i => {
      if (n === rs) if (i.data instanceof Blob) {
        d();
        const e = URL.createObjectURL(i.data), t = tc;
        tc = e, m("frame").src = e, t && URL.revokeObjectURL(t), m("sessionState").textContent = "Connected";
      } else {
        const c = JSON.parse(i.data);
        "ready" === c.type && c.session && pc(c.session, e, n), "status" === c.type && (m("sessionState").textContent = c.message), 
        "vnc" === c.type && t && (m("frame").hidden = !0, b.classList.add("vnc-screen"), 
        ns = new t(b, a, {
          credentials: {
            password: c.password
          }
        }), nc = ec(ns, b, o), ns.scaleViewport = !0, ns.qualityLevel = 6, ns.compressionLevel = 2, 
        ns.addEventListener("connect", () => {
          n === rs && (d(), m("sessionState").textContent = "Connected \xb7 Windows service", 
          m("secureAttention").hidden = !1);
        }), ns.addEventListener("disconnect", () => setTimeout(r, 0)), ns.addEventListener("securityfailure", () => {
          s = !0, I("Windows desktop authentication failed.");
        }));
      }
    }, os.onclose = r, os.onerror = () => {
      n === rs && I("Connection unavailable. Check that your PC is awake and the helper is running.");
    };
  } catch (o) {
    n === rs && vc(e, rc(o), sc(o));
  }
}

function kc(e) {
  const t = m("frame").getBoundingClientRect();
  return t.width && m("frame").naturalWidth ? {
    x: Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)),
    y: Math.max(0, Math.min(1, (e.clientY - t.top) / t.height))
  } : null;
}

const b = m("screen");

b.addEventListener("pointerdown", e => {
  if (ns) return;
  const t = kc(e);
  t && (e.preventDefault(), b.focus(), b.setPointerCapture(e.pointerId), hc({
    type: "pointer",
    action: "down",
    button: e.button,
    ...t
  }));
}), b.addEventListener("pointerup", e => {
  if (ns) return;
  const t = kc(e);
  t && hc({
    type: "pointer",
    action: "up",
    button: e.button,
    ...t
  });
}), b.addEventListener("pointermove", e => {
  if (ns || performance.now() - ac < 35) return;
  ac = performance.now();
  const t = kc(e);
  t && hc({
    type: "pointer",
    action: "move",
    button: 0,
    ...t
  });
}), b.addEventListener("pointercancel", () => hc({
  type: "release"
})), b.addEventListener("contextmenu", e => e.preventDefault()), b.addEventListener("wheel", e => {
  ns || (e.preventDefault(), hc({
    type: "wheel",
    delta: Math.sign(e.deltaY)
  }));
}, {
  passive: !1
});

for (const e of [ "keydown", "keyup" ]) b.addEventListener(e, t => {
  if (!ns) {
    if ("Escape" === t.key) return hc({
      type: "release"
    }), void b.blur();
    t.preventDefault(), hc({
      type: "key",
      action: "keydown" === e ? "down" : "up",
      key: t.keyCode
    });
  }
});

async function Q() {
  try {
    const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
      cache: "no-store",
      signal: AbortSignal.timeout(15e3)
    });
    if (!e.ok) throw Error("Account service is temporarily unavailable.");
    const t = await e.json();
    if (!t.enabled) throw Error("Account sign-in is unavailable.");
    const [n, o] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), i = n.getApps().find(e => "nyx-founder-owner" === e.name) || n.initializeApp({
      apiKey: t.apiKey,
      authDomain: t.projectId + ".firebaseapp.com",
      projectId: t.projectId
    }, "nyx-founder-owner");
    C = o.getAuth(i), await o.setPersistence(C, o.browserLocalPersistence), o.onAuthStateChanged(C, e => {
      fc(), clearTimeout(dc);
      const t = ++lc;
      m("workspace").hidden = !0, m("locked").hidden = !1, e ? bc(e, t) : m("accessState").textContent = "Sign in to Nyx, then return here.";
    });
  } catch (e) {
    m("accessState").textContent = rc(e) + " Retrying\u2026", uc = setTimeout(Q, 5e3);
  }
}

async function bc(e, t) {
  try {
    if (await $("/access"), t !== lc || C.currentUser !== e) return;
    if (await wc(), t !== lc || C.currentUser !== e) return;
    m("locked").hidden = !0, m("workspace").hidden = !1;
  } catch (n) {
    if (t !== lc || C.currentUser !== e) return;
    const o = sc(n);
    m("accessState").textContent = o ? "Connection unavailable. Retrying\u2026" : "This workspace is not available to your account.", 
    o && (dc = setTimeout(() => bc(e, t), 5e3));
  }
}

b.addEventListener("blur", () => hc({
  type: "release"
})), window.addEventListener("blur", () => hc({
  type: "release"
})), window.addEventListener("pagehide", fc), m("refresh").onclick = mc(wc), m("disconnect").onclick = m("cancelReconnect").onclick = () => {
  fc(), I("Disconnected."), wc().catch(() => {});
}, m("fullscreen").onclick = mc(async () => {
  if (document.fullscreenElement) return document.exitPointerLock(), void await document.exitFullscreen();
  const e = nc?.lock(), t = b.requestFullscreen();
  await Promise.all([ e, t ]);
}), m("lockMouse").onclick = mc(() => nc?.lock()), m("secureAttention").onclick = () => ns?.sendCtrlAltDel(), 
m("pair").onsubmit = mc(async () => {
  await $("/pair/approve", {
    code: m("code").value
  }), m("code").value = "", I("Computer paired. It should appear online shortly."), 
  await wc();
}), m("download").onclick = mc(async () => {
  const e = await (await $("/host.zip")).blob(), t = URL.createObjectURL(e), n = document.createElement("a");
  n.href = t, n.download = "Nyx-Remote.zip", n.click(), setTimeout(() => URL.revokeObjectURL(t), 1e3);
}), window.addEventListener("pagehide", () => {
  lc++, clearTimeout(dc), clearTimeout(uc);
}), Q();
