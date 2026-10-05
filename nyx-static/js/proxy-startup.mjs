const Re = new Map, Zu = new Set;

"undefined" != typeof navigator && navigator.serviceWorker && navigator.serviceWorker.addEventListener("message", e => {
  if (!e.data?.$controller$swrevive || !e.source?.scriptURL) return;
  const r = e.source;
  if ("undefined" != typeof ServiceWorker && r instanceof ServiceWorker && [ "activating", "activated" ].includes(r.state)) for (const o of Zu) {
    const e = o.serviceWorkerController;
    if (e && e !== r) try {
      const t = new URL(e.scriptURL), n = new URL(r.scriptURL);
      if (t.origin !== n.origin || t.pathname !== n.pathname) continue;
      o.serviceWorkerController = r, o.guardServiceWorkerRevive = !1;
    } catch {}
  }
});

export function trackProxyController(e) {
  return Zu.add(e), () => Zu.delete(e);
}

export function loadProxyScript(e, r, {timeoutMs: o = 2e4} = {}) {
  if (r()) return Promise.resolve();
  const t = new URL(e, location.href).href;
  if (Re.has(t)) return Re.get(t);
  const n = () => new Promise((t, n) => {
    if (r()) return t();
    const i = document.createElement("script");
    i.src = e, i.async = !1;
    const a = e => {
      clearTimeout(c), i.onload = null, i.onerror = null, e ? (i.remove(), n(e)) : t();
    }, c = setTimeout(() => a(new Error("The browser engine took too long to load. Please retry.")), o);
    i.onload = () => a(r() ? null : new Error("The browser engine returned an incomplete script.")), 
    i.onerror = () => a(Object.assign(new Error("The browser engine could not load. Please retry."), {
      retryable: !0
    })), document.head.append(i);
  }), i = n().catch(e => {
    if (!e.retryable) throw e;
    return n();
  }).finally(() => {
    Re.get(t) === i && Re.delete(t);
  });
  return Re.set(t, i), i;
}

export function waitForProxyController(e, r = 2e4) {
  let o;
  return Promise.race([ e.wait(), new Promise((e, t) => {
    o = setTimeout(() => t(new Error("The browser controller took too long to start. Please retry.")), r);
  }) ]).finally(() => clearTimeout(o));
}
