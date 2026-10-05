window.createNyxChatSocial = function({request: e, me: n, members: t, avatar: o, name: r, badge: a, startDm: i, changed: d, closeDrawers: c}) {
  const s = document.querySelector("[data-member-dialog]"), l = document.querySelector("[data-member-dialog-content]"), p = document.querySelector("[data-friends-dialog]"), u = document.querySelector("[data-friends-list]"), m = document.querySelector("[data-friends-error]");
  let f = new Map, b = "", g = !1, h = null, y = 0, v = 0, M = "", S = null, q = "accepted", w = !1, A = "";
  const k = (e, n, t) => {
    const o = document.createElement(e);
    return o.className = n, void 0 !== t && (o.textContent = t), o;
  }, E = {
    "Add friend": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 8h6M19 5v6M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    "Remove friend": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 8h6M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    Accept: "m5 12 4 4L19 6",
    Decline: "m6 6 12 12M6 18 18 6",
    "Cancel request": "m6 6 12 12M6 18 18 6",
    Block: "M5.6 5.6 18.4 18.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
    Unblock: "m8 12 3 3 5-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
    Ignore: "m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.3A10 10 0 0 1 12 5c7 0 10 7 10 7a16 16 0 0 1-3 4M6 6.5A16 16 0 0 0 2 12s3 7 10 7a10 10 0 0 0 4-1",
    Unignore: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
    Message: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-1 2V11.5a8.5 8.5 0 0 1 17 0Z",
    Retry: "M3 10a9 9 0 1 1 1 7M3 4v6h6"
  }, L = (e, n, t = "social-button") => {
    const o = k("button", t, e);
    o.type = "button";
    const r = E[e] || E[e.startsWith("Retry") ? "Retry" : ""];
    if (r) {
      o.replaceChildren();
      const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("aria-hidden", "true");
      const a = document.createElementNS(n.namespaceURI, "path");
      a.setAttribute("d", r), n.append(a), o.append(n);
      const i = k("span", t.includes("social-button") ? "social-action-label" : "", e);
      o.append(i), o.setAttribute("aria-label", e), o.title = e;
    }
    return o.disabled = w || !g, o.addEventListener("click", n), o;
  }, R = e => !1 !== f.get(e)?.canMessage;
  function C() {
    b = n()?.uid || "", y++, v++, M = "", S = null, g = !1, h = null, f = new Map, A = "", 
    w = !1, s.close(), p.close(), x();
  }
  function N(e) {
    const n = JSON.stringify(e || []);
    return !(g && M === n && !A || (M = n, f = new Map((Array.isArray(e) ? e : []).map(e => [ e.uid, e ])), 
    g = !0, A = "", x(), d(), 0));
  }
  async function U() {
    if (b !== n()?.uid && C(), !b) return;
    if (h) return h;
    const t = b, o = v, r = e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/relationships", {
      cache: "no-store"
    }).then(e => {
      t === b && t === n()?.uid && o === v && N(e.relationships) && s.open && S && D(S);
    }).catch(e => {
      t === b && (A = e.message || "Relationships could not load.", x());
    }).finally(() => {
      h === r && (h = null);
    });
    return h = r, r;
  }
  function I(t, o, r = !1) {
    const a = f.get(t.uid) || {}, i = (r, a, i) => o.append(L(r, () => {
      !async function(t, o) {
        if (w || !g) return;
        w = !0, v++, A = "", x(), S && D(S);
        const r = b;
        try {
          const a = await e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/relationships/" + encodeURIComponent(t.uid), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              action: o
            })
          });
          b === r && n()?.uid === r && (v++, N(a.relationships));
        } catch (a) {
          b === r && (A = a.message || "The change could not be saved.");
        } finally {
          b === r && (w = !1, x(), S && s.open && D(S));
        }
      }(t, a);
    }, i));
    a.blocked ? i("Unblock", "unblock") : ("incoming" === a.friend ? (i("Accept", "accept"), 
    i("Decline", "decline")) : "outgoing" === a.friend ? i("Cancel request", "cancel") : "accepted" === a.friend ? i("Remove friend", "remove") : !r && R(t.uid) && i("Add friend", "request", "social-button friend-request"), 
    r || i("Block", "block", "social-button social-danger")), r && "ignored" !== q || i(a.ignored ? "Unignore" : "Ignore", a.ignored ? "unignore" : "ignore");
  }
  function x() {
    m.textContent = A;
    const e = [ ...f.values() ].filter(e => "incoming" === e.friend).length, n = document.querySelector("[data-request-count]");
    n.textContent = e, n.hidden = !e, u.replaceChildren();
    const a = [ ...f.values() ].filter(e => "pending" === q ? [ "incoming", "outgoing" ].includes(e.friend) : [ "blocked", "ignored" ].includes(q) ? e[q] : "accepted" === e.friend);
    a.length || u.append(k("p", "friends-empty", g ? {
      accepted: "No friends yet.",
      pending: "No pending requests.",
      blocked: "No blocked accounts.",
      ignored: "No ignored accounts."
    }[q] : "Loading relationships\u2026"));
    for (const i of a) {
      const e = t().find(e => e.uid === i.uid) || i.member, n = k("article", "friend-row"), a = L("", () => {
        B(e);
      }, "friend-identity");
      a.disabled = !1, a.append(o(e, e.online));
      const d = k("span", "friend-copy");
      d.append(r(e)), d.append(k("small", "", "incoming" === i.friend ? "Incoming request" : "outgoing" === i.friend ? "Request sent" : e.handle || "")), 
      a.append(d), n.append(a);
      const c = k("div", "friend-actions");
      I(e, c, !0), n.append(c), u.append(n);
    }
    if (A) {
      const e = L("Retry", () => {
        U();
      });
      e.disabled = !1, u.append(e);
    }
  }
  function D(e) {
    if (l.replaceChildren(), l.className = "", /^fx-[a-z0-9-]+$/.test(e.profileEffect || "")) {
      l.className = "nyx-user-profile-effect-" + e.profileEffect;
      const n = k("i", "nyx-user-profile-effect");
      n.setAttribute("aria-hidden", "true"), l.append(n);
    }
    const t = k("div", "member-card-banner");
    if (/^#[0-9a-f]{6}$/i.test(e.bannerColor || "") && (t.style.backgroundColor = e.bannerColor), 
    e.bannerUrl) try {
      const n = new URL(e.bannerUrl, location.origin);
      if ([ "http:", "https:" ].includes(n.protocol) || /^data:image\/(png|jpeg|webp|gif);base64,[a-z0-9+/=\s]+$/i.test(e.bannerUrl)) {
        const e = k("img", "member-banner-image");
        e.alt = "", e.src = n.href, e.addEventListener("error", () => e.remove(), {
          once: !0
        }), t.append(e);
      }
    } catch {}
    const d = k("div", "member-card-body");
    d.append(o(e, e.online));
    const c = k("div", "member-card-title"), s = k("h2", "");
    s.append(r(e)), c.append(s), e.role && "member" !== e.role && c.append(k("span", "profile-role", e.roleLabel || e.role.replaceAll("_", " "))), 
    e.caffeine && c.append(a()), d.append(c, k("p", "member-handle", e.handle || "")), 
    e.customStatus && d.append(k("p", "member-status", e.customStatus)), e.bio && d.append(k("p", "member-bio", e.bio));
    const u = new Date(e.createdAt);
    Number.isFinite(u.getTime()) && d.append(k("p", "member-joined", "Joined " + u.toLocaleDateString(void 0, {
      month: "long",
      year: "numeric"
    })));
    const m = k("p", "profile-status", e.loading ? "Loading profile\u2026" : e.profileError || "");
    if (m.setAttribute("role", "status"), d.append(m), e.profileError) {
      const n = L("Retry profile", () => {
        B(e);
      });
      n.disabled = !1, d.append(n);
    }
    if (e.uid !== n()?.uid) {
      const n = L("Message", () => {
        p.close(), i(e);
      }, "member-dm-button");
      n.disabled = !R(e.uid) || w, d.append(n);
      const t = k("div", "member-social-actions");
      I(e, t), d.append(t);
      const o = f.get(e.uid);
      o?.blocked ? d.append(k("p", "member-social-hint", "Blocked. Direct messages and friend requests are disabled.")) : o?.ignored ? d.append(k("p", "member-social-hint", "Ignored. Their messages and notifications are hidden for you.")) : !1 === o?.canMessage && d.append(k("p", "member-social-hint", "Direct messages are unavailable."));
      const r = k("p", "profile-status", A);
      if (r.setAttribute("role", "status"), d.append(r), !g && A) {
        const e = L("Retry relationships", () => {
          U().then(() => S && D(S));
        });
        e.disabled = !1, d.append(e);
      }
    }
    l.append(t, d);
  }
  async function B(t) {
    if (!t?.uid) return;
    b !== n()?.uid && C();
    const o = ++y;
    S = {
      ...t,
      loading: !0,
      profileError: ""
    }, D(S), c(), s.open || s.showModal(), U();
    try {
      const n = await e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/profiles/" + encodeURIComponent(t.uid), {
        cache: "no-store"
      });
      if (o !== y || !s.open) return;
      S = {
        ...t,
        ...n.profile,
        uid: t.uid,
        role: n.role,
        roleLabel: n.roleLabel,
        customRole: n.customRole,
        online: n.online,
        createdAt: n.createdAt
      };
    } catch (r) {
      if (o !== y || !s.open) return;
      S = {
        ...t,
        profileError: r.message || "Profile unavailable."
      };
    }
    D(S);
  }
  s.addEventListener("close", () => {
    y++, S = null;
  }), document.querySelector("[data-open-friends]").addEventListener("click", () => {
    x(), c(), p.showModal(), U();
  }), document.querySelector("[data-friends-close]").addEventListener("click", () => p.close()), 
  p.addEventListener("click", e => {
    e.target === p && p.close();
  }), document.querySelector("[data-find-friend]").addEventListener("click", () => {
    p.close(), document.querySelector("[data-new-dm]").click();
  }), document.querySelectorAll("[data-friend-filter]").forEach(e => e.addEventListener("click", () => {
    q = e.dataset.friendFilter, document.querySelectorAll("[data-friend-filter]").forEach(n => n.setAttribute("aria-pressed", String(n === e))), 
    x();
  }));
  const T = setInterval(() => {
    !document.hidden && n()?.uid && U();
  }, 15e3);
  return window.addEventListener("beforeunload", () => clearInterval(T), {
    once: !0
  }), {
    open: B,
    refresh: U,
    reset: C,
    muted: e => Boolean(f.get(e)?.blocked || f.get(e)?.ignored),
    canMessage: R
  };
};
