import es from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/vendor/novnc/core/rfb.js";

import { loremDesktop as ts } from "./@r2ef72f9b05ea89de16614001!.js";

const m = e => document.getElementById(e);

let C, ns, os, cs, as, is, rs = 0, ls = 0, ds = !1, us = "fill";

try {
  us = "fit" === localStorage.getItem("nyx.vm.displayScale") ? "fit" : "fill";
} catch {}

function ps() {
  m("screen").dataset.scale = us, m("display-scale").textContent = "Fill screen: " + ("fill" === us ? "On" : "Off"), 
  m("display-scale").setAttribute("aria-pressed", String("fill" === us)), m("screen").dispatchEvent(new Event("nyx:display-scale"));
}

m("display-scale").onclick = () => {
  us = "fill" === us ? "fit" : "fill";
  try {
    localStorage.setItem("nyx.vm.displayScale", us);
  } catch {}
  ps();
}, ps();

const ms = e => {
  m("status").textContent = e;
};

function I(e, t) {
  ms(t);
  const n = document.createElement("div");
  n.className = "vm-loading";
  const s = document.createElement("section");
  s.className = "boot-card";
  const o = document.createElement("h1");
  o.textContent = e;
  const c = document.createElement("p");
  c.className = "boot-session-note", c.textContent = t, s.append(o, c), n.append(s), 
  m("screen").replaceChildren(n);
}

async function $(e, t = "GET", n = !1) {
  const s = await (C?.currentUser?.getIdToken(n));
  if (!s) throw Object.assign(Error("Sign in to Nyx to open a desktop."), {
    status: 401
  });
  const o = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxcloud" + e, {
    method: t,
    headers: {
      Authorization: "Bearer " + s
    },
    cache: "no-store",
    signal: AbortSignal.timeout(e.startsWith("/lorem/") ? 65e3 : 12e3)
  });
  if (401 === o.status && !n) return $(e, t, !0);
  const c = await o.json().catch(() => ({}));
  if (!o.ok) throw Object.assign(Error(c.error || "Not available."), {
    status: o.status
  });
  return c;
}

function ce() {
  rs++, is?.(), is = null, clearTimeout(cs), clearTimeout(as), ns?.disconnect(), ns = null, 
  os?.close(), os = null, m("screen").replaceChildren(), m("fullscreen").disabled = !0, 
  m("disconnect").disabled = !0, m("end-session").disabled = !0;
}

function fs(e, t = 6e4) {
  as = setTimeout(async () => {
    if (e === rs) {
      try {
        await $("/session", "POST");
      } catch (t) {
        return void (e === rs && ([ 401, 403, 404 ].includes(t.status) ? bs(t) : fs(e, 5e3)));
      }
      e === rs && fs(e);
    }
  }, t);
}

function bs(e) {
  if (ce(), [ 401, 403, 404 ].includes(e.status)) return ds = !1, void ms("Sign in to Nyx again to reconnect.");
  if (!ds) return;
  const t = Math.min(3e4, 2e3 * 2 ** Math.min(ls++, 4));
  ms(e.message + " Retrying in " + t / 1e3 + " seconds\u2026"), cs = setTimeout(ys, t), 
  m("disconnect").disabled = !1;
}

async function ys() {
  if ("local" !== new URLSearchParams(location.search).get("desktop")) {
    ce(), ds = !1;
    const e = rs;
    m("connect").disabled = !0;
    try {
      if (await $("/lorem/status"), e !== rs) return;
      is = ts({
        api: $,
        screen: m("screen"),
        status: ms,
        reconnect: ys,
        connected: () => {
          m("fullscreen").disabled = !1, m("disconnect").disabled = !1, m("end-session").disabled = !1;
        }
      }), m("disconnect").disabled = !1;
    } catch (t) {
      e === rs && I("Unable to open desktop", t.message);
    } finally {
      e === rs && (m("connect").disabled = !1);
    }
    return;
  }
  ce(), ds = !0;
  const e = rs;
  m("connect").disabled = !0, ms("Connecting\u2026");
  try {
    await $("/session", "POST");
    const {ticket: t} = await $("/connect", "POST");
    if (e !== rs) return;
    os = new WebSocket(location.origin.replace(/^http/, "ws") + "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxcloud/socket");
    const n = os;
    n.binaryType = "arraybuffer";
    const s = t => {
      e === rs && bs({
        message: t,
        status: 503
      });
    };
    cs = setTimeout(() => s("The VM connection timed out."), 15e3), n.onopen = () => n.send(JSON.stringify({
      ticket: t
    })), n.onmessage = t => {
      if (e !== rs || "string" != typeof t.data) return;
      let o;
      try {
        o = JSON.parse(t.data);
      } catch {
        return;
      }
      o.ready && (ns = new es(m("screen"), n, {
        credentials: {
          password: o.password
        }
      }), ns.scaleViewport = !0, ns.resizeSession = !1, ns.qualityLevel = 9, ns.compressionLevel = 2, 
      ns.addEventListener("connect", () => {
        e === rs && (clearTimeout(cs), ls = 0, fs(e), ms("Connected"), m("fullscreen").disabled = !1, 
        m("disconnect").disabled = !1);
      }), ns.addEventListener("disconnect", () => setTimeout(() => {
        e === rs && s("VM connection ended.");
      }, 0)), ns.addEventListener("securityfailure", () => {
        ds = !1, ce(), ms("VM authentication failed."), m("connect").disabled = !1;
      }));
    }, n.addEventListener("close", t => {
      e === rs && bs({
        message: "VM connection ended.",
        status: 4003 === t.code ? 403 : 503
      });
    }), n.onerror = () => {};
  } catch (t) {
    e === rs && bs(t);
  } finally {
    e === rs && (m("connect").disabled = !1);
  }
}

async function Q() {
  try {
    const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
      cache: "no-store"
    });
    if (!e.ok) throw Error("Account service unavailable.");
    const t = await e.json(), [n, s] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), o = n.getApps().find(e => "nyx-founder-owner" === e.name) || n.initializeApp({
      apiKey: t.apiKey,
      authDomain: t.projectId + ".firebaseapp.com",
      projectId: t.projectId
    }, "nyx-founder-owner");
    C = s.getAuth(o), await s.setPersistence(C, s.browserLocalPersistence), s.onAuthStateChanged(C, async e => {
      ds = !1, ce();
      const t = rs;
      if (m("connect").disabled = !0, e) try {
        if (await $("local" === new URLSearchParams(location.search).get("desktop") ? "/access" : "/lorem/status"), 
        t !== rs) return;
        m("connect").disabled = !1, ys();
      } catch (n) {
        if (t !== rs) return;
        m("connect").disabled = !1, I("Unable to open desktop", n.message);
      } else I("Sign in to use VMs", "Sign in to Nyx, then reopen VMs. Desktops are available to all accounts.");
    });
  } catch (e) {
    ms(e.message);
  }
}

m("connect").onclick = () => {
  document.querySelector(".session-menu").open = !1, ls = 0, ys();
}, m("end-session").onclick = async () => {
  if (confirm("End this desktop session? Unsaved files will be deleted.")) {
    m("end-session").disabled = !0;
    try {
      await $("/lorem/end", "POST"), ds = !1, ce(), ms("Session ended. The desktop slot is available again."), 
      m("connect").disabled = !1;
    } catch (e) {
      ms(e.message), m("end-session").disabled = !1;
    }
  }
}, m("disconnect").onclick = () => {
  document.querySelector(".session-menu").open = !1, ds = !1, ce(), ms("Disconnected"), 
  m("connect").disabled = !1;
  const e = document.createElement("div");
  e.className = "vm-loading", e.innerHTML = '<section class="boot-card"><p class="boot-eyebrow">NYXCLOUD</p><h1>Desktop disconnected</h1><p class="boot-message">Your desktop follows its normal inactivity limits.</p><button class="boot-retry">Open desktop</button></section>', 
  e.querySelector("button").onclick = ys, m("screen").append(e);
}, m("fullscreen").onclick = async () => {
  try {
    document.fullscreenElement ? await document.exitFullscreen() : await m("screen").requestFullscreen();
  } catch {
    ms("Fullscreen is unavailable in this browser.");
  }
}, window.addEventListener("pagehide", () => {
  ds = !1, ce();
}), Q();
