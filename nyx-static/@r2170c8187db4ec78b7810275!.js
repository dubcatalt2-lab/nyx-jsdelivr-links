importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λd13fdd47ef5e = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λd461d555306b => {
    "function" == typeof λd461d555306b && queueMicrotask(() => λd461d555306b(λd13fdd47ef5e));
  }, λd461d555306b = Object.freeze({
    getCurrentPosition(λd13fdd47ef5e, λd461d555306b) {
      t(λd461d555306b);
    },
    watchPosition: (λd13fdd47ef5e, λd461d555306b) => (t(λd461d555306b), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λd461d555306b
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λd461d555306b
    });
  } catch {}
  const λba12fa53ba8a = navigator.permissions?.query?.bind(navigator.permissions);
  if (λba12fa53ba8a) try {
    navigator.permissions.query = λd13fdd47ef5e => {
      if ("geolocation" === String(λd13fdd47ef5e?.name || "").toLowerCase()) {
        const λd13fdd47ef5e = new EventTarget;
        return Object.defineProperties(λd13fdd47ef5e, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λd13fdd47ef5e);
      }
      return λba12fa53ba8a(λd13fdd47ef5e);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λd13fdd47ef5e) {
  try {
    const λd461d555306b = new URL(λd13fdd47ef5e).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λd461d555306b ? {
      id: λd461d555306b[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λd461d555306b[1]}/`,
      dbName: `__nyx_uv_tab_${λd461d555306b[1]}`
    } : {
      id: "",
      prefix: self.__uv$config?.prefix || "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/",
      dbName: "__op"
    };
  } catch {
    return {
      id: "",
      prefix: self.__uv$config?.prefix || "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/",
      dbName: "__op"
    };
  }
}

function ip(λd13fdd47ef5e) {
  const λd461d555306b = cp(λd13fdd47ef5e), λba12fa53ba8a = λd461d555306b.id || "legacy";
  let λ814e64450d09 = sp.get(λba12fa53ba8a);
  if (!λ814e64450d09) {
    const λd13fdd47ef5e = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λd13fdd47ef5e.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ814e64450d09 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λd461d555306b.prefix,
      cookieDbName: λd461d555306b.dbName,
      inject: λd13fdd47ef5e
    }), sp.set(λba12fa53ba8a, λ814e64450d09);
  }
  return {
    engine: λ814e64450d09,
    session: λd461d555306b
  };
}

function up(λd13fdd47ef5e) {
  return new Promise(λd461d555306b => {
    let λba12fa53ba8a;
    try {
      λba12fa53ba8a = indexedDB.open(λd13fdd47ef5e);
    } catch {
      return void λd461d555306b(!1);
    }
    λba12fa53ba8a.onerror = () => λd461d555306b(!1), λba12fa53ba8a.onupgradeneeded = () => {}, 
    λba12fa53ba8a.onsuccess = () => {
      const λd13fdd47ef5e = λba12fa53ba8a.result;
      if (!λd13fdd47ef5e.objectStoreNames.contains("cookies")) return λd13fdd47ef5e.close(), 
      void λd461d555306b(!0);
      const λ814e64450d09 = λd13fdd47ef5e.transaction("cookies", "readwrite");
      λ814e64450d09.objectStore("cookies").clear(), λ814e64450d09.oncomplete = () => {
        λd13fdd47ef5e.close(), λd461d555306b(!0);
      }, λ814e64450d09.onerror = () => {
        λd13fdd47ef5e.close(), λd461d555306b(!1);
      }, λ814e64450d09.onabort = () => {
        λd13fdd47ef5e.close(), λd461d555306b(!1);
      };
    };
  });
}

function lp(λd13fdd47ef5e) {
  try {
    const λd461d555306b = new URL(λd13fdd47ef5e), λba12fa53ba8a = cp(λd13fdd47ef5e).prefix;
    return λd461d555306b.pathname.startsWith(λba12fa53ba8a) ? self.__uv$config.decodeUrl(λd461d555306b.pathname.slice(λba12fa53ba8a.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λd13fdd47ef5e => {
  const λd461d555306b = λd13fdd47ef5e.data;
  if ("nyx:destroy-proxy-session" !== λd461d555306b?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λd461d555306b.sessionId || ""))) return;
  const λba12fa53ba8a = String(λd461d555306b.sessionId);
  sp.delete(λba12fa53ba8a), λd13fdd47ef5e.waitUntil?.(up(`__nyx_uv_tab_${λba12fa53ba8a}`));
}), self.addEventListener("install", λd13fdd47ef5e => {
  λd13fdd47ef5e.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λd13fdd47ef5e => {
  λd13fdd47ef5e.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λd13fdd47ef5e) {
  const λd461d555306b = String(λd13fdd47ef5e || "").toLowerCase();
  return dp.some(λd13fdd47ef5e => λd461d555306b === λd13fdd47ef5e || λd461d555306b.endsWith(`.${λd13fdd47ef5e}`));
}

function mp(λd13fdd47ef5e) {
  const λd461d555306b = lp(λd13fdd47ef5e.request.url);
  if (!λd461d555306b) return !1;
  try {
    const λd13fdd47ef5e = new URL(λd461d555306b);
    return pp(λd13fdd47ef5e.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λd13fdd47ef5e.pathname) || "serve.app.playsaurus.com" === λd13fdd47ef5e.hostname && /\/ad-campaigns\//i.test(λd13fdd47ef5e.pathname);
  } catch {
    return !1;
  }
}

function fp(λd13fdd47ef5e) {
  const λd461d555306b = λd13fdd47ef5e.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λd13fdd47ef5e.request.destination) || /javascript|ecmascript/i.test(λd461d555306b) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λd13fdd47ef5e.request.destination || /text\/css/i.test(λd461d555306b) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λd13fdd47ef5e.request.destination || "iframe" === λd13fdd47ef5e.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λd13fdd47ef5e) {
  if (![ "script", "worker", "sharedworker" ].includes(λd13fdd47ef5e.request.destination)) return !1;
  try {
    const λd461d555306b = new URL(lp(λd13fdd47ef5e.request.url));
    return λd461d555306b.hostname.endsWith("cookielaw.org") || λd461d555306b.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λd13fdd47ef5e) {
  const λd461d555306b = λd13fdd47ef5e.request.headers.get("accept") || "", λba12fa53ba8a = new URL(λd13fdd47ef5e.request.url).pathname, λ814e64450d09 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λba12fa53ba8a);
  return [ "script", "worker", "sharedworker" ].includes(λd13fdd47ef5e.request.destination) || /javascript|ecmascript/i.test(λd461d555306b) || λ814e64450d09 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λd13fdd47ef5e) {
  if ("style" === λd13fdd47ef5e.request.destination) return !0;
  const λd461d555306b = λd13fdd47ef5e.request.headers.get("accept") || "";
  if (/text\/css/i.test(λd461d555306b)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λd13fdd47ef5e.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λd13fdd47ef5e) {
  if ([ "script", "worker", "sharedworker" ].includes(λd13fdd47ef5e.request.destination)) return !0;
  const λd461d555306b = λd13fdd47ef5e.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λd461d555306b)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λd13fdd47ef5e.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λd13fdd47ef5e) {
  return yp(λd13fdd47ef5e) || wp(λd13fdd47ef5e);
}

function jp(λd13fdd47ef5e) {
  const λd461d555306b = λd13fdd47ef5e?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λd461d555306b);
}

async function xp(λd13fdd47ef5e, λd461d555306b) {
  if (!vp(λd13fdd47ef5e)) return λd461d555306b.fetch(λd13fdd47ef5e);
  let λba12fa53ba8a = null, λ814e64450d09 = null;
  for (let λ4943aa7be8f1 = 0; λ4943aa7be8f1 < ap.length; λ4943aa7be8f1 += 1) {
    const λb00c91718507 = ap[λ4943aa7be8f1];
    λb00c91718507 && await new Promise(λd13fdd47ef5e => setTimeout(λd13fdd47ef5e, λb00c91718507));
    try {
      if (λba12fa53ba8a = await λd461d555306b.fetch(λd13fdd47ef5e), λ814e64450d09 = null, 
      λba12fa53ba8a.status < 400 && !jp(λba12fa53ba8a)) return λba12fa53ba8a;
    } catch (λd13fdd47ef5e) {
      λ814e64450d09 = λd13fdd47ef5e;
    }
  }
  if (λba12fa53ba8a) return λba12fa53ba8a;
  throw λ814e64450d09 || new Error("UV asset request failed");
}

async function _p(λd13fdd47ef5e, λd461d555306b) {
  if (!wp(λd13fdd47ef5e) || λd461d555306b.status >= 400) return λd461d555306b;
  let λba12fa53ba8a;
  try {
    λba12fa53ba8a = new URL(lp(λd13fdd47ef5e.request.url));
  } catch {
    return λd461d555306b;
  }
  if (!/unityloader\.js$/i.test(λba12fa53ba8a.pathname)) return λd461d555306b;
  const λ814e64450d09 = await λd461d555306b.clone().text().catch(() => ""), λ4943aa7be8f1 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ814e64450d09.includes(λ4943aa7be8f1)) return λd461d555306b;
  const λb00c91718507 = new Headers(λd461d555306b.headers);
  λb00c91718507.delete("content-length"), λb00c91718507.delete("content-encoding"), 
  λb00c91718507.set("cache-control", "no-store");
  const λ2ca19ed3d2de = `${λ4943aa7be8f1}(e.data.decompressed)`, λ646d40396c65 = λ814e64450d09.replaceAll(λ2ca19ed3d2de, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ4943aa7be8f1, "this.callbacks[e.data.id]");
  return new Response(λ646d40396c65, {
    status: λd461d555306b.status,
    statusText: λd461d555306b.statusText,
    headers: λb00c91718507
  });
}

function bp(λd13fdd47ef5e) {
  const λd461d555306b = λd13fdd47ef5e.request.headers.get("accept") || "", λba12fa53ba8a = new URL(λd13fdd47ef5e.request.url).pathname;
  let λ814e64450d09 = "";
  try {
    λ814e64450d09 = new URL(lp(λd13fdd47ef5e.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λd13fdd47ef5e.request.destination) || /javascript|ecmascript|text\/css/i.test(λd461d555306b) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λba12fa53ba8a) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ814e64450d09);
}

function qp(λd13fdd47ef5e) {
  return /^\s*</.test(λd13fdd47ef5e) || /^\s*\)\]\}'/.test(λd13fdd47ef5e) || /^\s*\)\]/.test(λd13fdd47ef5e);
}

async function kp(λd13fdd47ef5e) {
  if (mp(λd13fdd47ef5e)) return fp(λd13fdd47ef5e);
  const {engine: λd461d555306b} = ip(λd13fdd47ef5e.request.url);
  if (hp(λd13fdd47ef5e)) return gp(λd13fdd47ef5e);
  const λba12fa53ba8a = await _p(λd13fdd47ef5e, await xp(λd13fdd47ef5e, λd461d555306b)), λ814e64450d09 = λba12fa53ba8a.headers.get("content-type") || "", λ4943aa7be8f1 = bp(λd13fdd47ef5e), λb00c91718507 = λ4943aa7be8f1 && (λ814e64450d09.includes("text/html") || λ814e64450d09.includes("application/json") || λ814e64450d09.includes("text/json"));
  return λ4943aa7be8f1 && λb00c91718507 ? Response.error() : λ4943aa7be8f1 && λba12fa53ba8a.status >= 400 ? λba12fa53ba8a : λ4943aa7be8f1 && qp(await λba12fa53ba8a.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λd13fdd47ef5e.request.destination), 
  λba12fa53ba8a);
}

self.addEventListener("fetch", λd13fdd47ef5e => {
  λd13fdd47ef5e.respondWith(kp(λd13fdd47ef5e).catch(() => Response.error()));
});
