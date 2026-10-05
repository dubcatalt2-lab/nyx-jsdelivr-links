import "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@rcb3da5446f8f1cd375366cc8!.js";

export function setupDropPresence({frame: e, ensureAccount: t, notice: n}) {
  const o = document.getElementById("onlineCounter"), a = document.getElementById("onlineCount"), r = new Map;
  let s = !1, i = !1, c = 0, d = !1, l = "";
  try {
    l = localStorage.getItem("nyx.presenceSession") || "", /^[a-zA-Z0-9_-]{16,128}$/.test(l) || (l = crypto.randomUUID(), 
    localStorage.setItem("nyx.presenceSession", l));
  } catch {
    l = crypto.randomUUID();
  }
  function u(e) {
    i = e;
    const t = document.getElementById("accountRole");
    t.textContent = i ? "Owner ? Full access" : s ? "Member ? Standard access" : "Guest", 
    t.dataset.role = i ? "owner" : s ? "member" : "guest", o.disabled = !i, o.title = i ? "Open Owner Dashboard" : "Current users online", 
    o.setAttribute("aria-label", i ? "Open Owner Dashboard" : "Current users online");
  }
  function p() {
    t();
    const n = crypto.randomUUID();
    return new Promise(t => {
      const o = setTimeout(() => {
        r.delete(n), t("");
      }, 4e3);
      r.set(n, e => {
        clearTimeout(o), t(e);
      }), e.contentWindow?.postMessage({
        type: "drop:session-token",
        requestId: n
      }, location.origin);
    });
  }
  async function m() {
    const e = ++c;
    u(!1);
    try {
      const t = await p();
      if (!t) return;
      const n = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/owner", {
        headers: {
          Authorization: "Bearer " + t
        },
        cache: "no-store",
        signal: AbortSignal.timeout(8e3)
      }), o = n.ok ? await n.json() : {};
      e === c && u(!0 === o.founder && !0 === o.dashboard);
    } catch {
      e === c && u(!1);
    }
  }
  async function h() {
    if (!d && !document.hidden) {
      d = !0;
      try {
        const e = await p(), t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/presence", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8",
            ...e ? {
              Authorization: "Bearer " + e
            } : {}
          },
          body: JSON.stringify({
            sessionId: l
          }),
          cache: "no-store",
          signal: AbortSignal.timeout(8e3)
        });
        if (!t.ok) throw Error();
        const n = await t.json();
        if (!Number.isFinite(n.online) || n.online < 0) throw Error();
        a.textContent = Math.floor(n.online) + " online", o.classList.remove("unavailable");
      } catch {
        a.textContent = "Online unavailable", o.classList.add("unavailable");
      } finally {
        d = !1;
      }
    }
  }
  addEventListener("message", t => {
    if (t.origin !== location.origin || t.source !== e.contentWindow) return;
    const n = t.data;
    if ("drop:session-token-result" === n?.type) {
      const e = r.get(n.requestId);
      r.delete(n.requestId), e?.("string" == typeof n.token ? n.token : "");
    }
    "drop:account" === n?.type && (s = !0 === n.signedIn, c++, u(!1), globalThis.NyxOwnerDashboard?.close(), 
    n.signedIn && m(), h()), "drop:ready" === n?.type && (m(), h());
  }), o.onclick = async () => {
    i && (await m(), i ? globalThis.NyxOwnerDashboard.open({
      getToken: p,
      toast: n
    }) : n("Owner access is unavailable."));
  }, document.addEventListener("visibilitychange", () => {
    document.hidden || (h(), m());
  }), addEventListener("online", h), u(!1), t(), h(), setInterval(h, 15e3);
}
