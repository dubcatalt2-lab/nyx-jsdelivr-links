(async () => {
  const t = t => document.getElementById(t);
  let e, a, n;
  async function o() {
    const t = await (e.currentUser?.getIdToken());
    if (!t) throw Error("Sign in to continue.");
    const a = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/private-remote/session", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + t
      },
      cache: "no-store",
      signal: AbortSignal.timeout(15e3)
    });
    if (!a.ok) throw Error(404 === a.status ? "This account does not have access." : "Connection unavailable. Try again.");
    location.assign("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/remote/index.html");
  }
  async function i(e) {
    t("status").textContent = "Connecting\u2026", document.querySelectorAll("button").forEach(t => t.disabled = !0);
    try {
      await e();
    } catch (a) {
      t("status").textContent = a.code?.startsWith("auth/") ? "Sign-in failed. Check your account details and connection." : a.message;
    } finally {
      t("password").value = "", document.querySelectorAll("button").forEach(t => t.disabled = !1);
    }
  }
  t("login").addEventListener("submit", n => {
    n.preventDefault(), i(async () => {
      await a(e, t("email").value.trim(), t("password").value), await o();
    });
  }), t("open").onclick = () => i(o), t("signOut").onclick = () => i(async () => {
    await n(e), t("status").textContent = "Signed out.";
  });
  try {
    const o = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
      cache: "no-store",
      signal: AbortSignal.timeout(15e3)
    });
    if (!o.ok) throw Error("Account service unavailable. Reload to try again.");
    const i = await o.json();
    if (!i.enabled) throw Error("Account sign-in is unavailable.");
    const [s, r] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), c = s.getApps().find(t => "nyx-founder-owner" === t.name) || s.initializeApp({
      apiKey: i.apiKey,
      authDomain: i.projectId + ".firebaseapp.com",
      projectId: i.projectId
    }, "nyx-founder-owner");
    e = r.getAuth(c), a = r.signInWithEmailAndPassword, n = r.signOut, await r.setPersistence(e, r.browserLocalPersistence), 
    r.onAuthStateChanged(e, e => {
      t("login").hidden = !!e, t("signedIn").hidden = !e, t("account").textContent = e?.email || "", 
      t("status").textContent = "", t("submit").disabled = !1;
    });
  } catch (s) {
    t("status").textContent = s.message;
  }
})();
