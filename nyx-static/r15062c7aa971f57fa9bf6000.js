importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ6d78802859ac = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λf84ea919f753 => {
    "function" == typeof λf84ea919f753 && queueMicrotask(() => λf84ea919f753(λ6d78802859ac));
  }, λf84ea919f753 = Object.freeze({
    getCurrentPosition(λ6d78802859ac, λf84ea919f753) {
      t(λf84ea919f753);
    },
    watchPosition: (λ6d78802859ac, λf84ea919f753) => (t(λf84ea919f753), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λf84ea919f753
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λf84ea919f753
    });
  } catch {}
  const λ7d75295d5a53 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ7d75295d5a53) try {
    navigator.permissions.query = λ6d78802859ac => {
      if ("geolocation" === String(λ6d78802859ac?.name || "").toLowerCase()) {
        const λ6d78802859ac = new EventTarget;
        return Object.defineProperties(λ6d78802859ac, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ6d78802859ac);
      }
      return λ7d75295d5a53(λ6d78802859ac);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ6d78802859ac) {
  try {
    const λf84ea919f753 = new URL(λ6d78802859ac).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λf84ea919f753 ? {
      id: λf84ea919f753[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λf84ea919f753[1]}/`,
      dbName: `__nyx_uv_tab_${λf84ea919f753[1]}`
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

function ip(λ6d78802859ac) {
  const λf84ea919f753 = cp(λ6d78802859ac), λ7d75295d5a53 = λf84ea919f753.id || "legacy";
  let λ573d5a0ea4d2 = sp.get(λ7d75295d5a53);
  if (!λ573d5a0ea4d2) {
    const λ6d78802859ac = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ6d78802859ac.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ573d5a0ea4d2 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λf84ea919f753.prefix,
      cookieDbName: λf84ea919f753.dbName,
      inject: λ6d78802859ac
    }), sp.set(λ7d75295d5a53, λ573d5a0ea4d2);
  }
  return {
    engine: λ573d5a0ea4d2,
    session: λf84ea919f753
  };
}

function up(λ6d78802859ac) {
  return new Promise(λf84ea919f753 => {
    let λ7d75295d5a53;
    try {
      λ7d75295d5a53 = indexedDB.open(λ6d78802859ac);
    } catch {
      return void λf84ea919f753(!1);
    }
    λ7d75295d5a53.onerror = () => λf84ea919f753(!1), λ7d75295d5a53.onupgradeneeded = () => {}, 
    λ7d75295d5a53.onsuccess = () => {
      const λ6d78802859ac = λ7d75295d5a53.result;
      if (!λ6d78802859ac.objectStoreNames.contains("cookies")) return λ6d78802859ac.close(), 
      void λf84ea919f753(!0);
      const λ573d5a0ea4d2 = λ6d78802859ac.transaction("cookies", "readwrite");
      λ573d5a0ea4d2.objectStore("cookies").clear(), λ573d5a0ea4d2.oncomplete = () => {
        λ6d78802859ac.close(), λf84ea919f753(!0);
      }, λ573d5a0ea4d2.onerror = () => {
        λ6d78802859ac.close(), λf84ea919f753(!1);
      }, λ573d5a0ea4d2.onabort = () => {
        λ6d78802859ac.close(), λf84ea919f753(!1);
      };
    };
  });
}

function lp(λ6d78802859ac) {
  try {
    const λf84ea919f753 = new URL(λ6d78802859ac), λ7d75295d5a53 = cp(λ6d78802859ac).prefix;
    return λf84ea919f753.pathname.startsWith(λ7d75295d5a53) ? self.__uv$config.decodeUrl(λf84ea919f753.pathname.slice(λ7d75295d5a53.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ6d78802859ac => {
  const λf84ea919f753 = λ6d78802859ac.data;
  if ("nyx:destroy-proxy-session" !== λf84ea919f753?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λf84ea919f753.sessionId || ""))) return;
  const λ7d75295d5a53 = String(λf84ea919f753.sessionId);
  sp.delete(λ7d75295d5a53), λ6d78802859ac.waitUntil?.(up(`__nyx_uv_tab_${λ7d75295d5a53}`));
}), self.addEventListener("install", λ6d78802859ac => {
  λ6d78802859ac.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ6d78802859ac => {
  λ6d78802859ac.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ6d78802859ac) {
  const λf84ea919f753 = String(λ6d78802859ac || "").toLowerCase();
  return dp.some(λ6d78802859ac => λf84ea919f753 === λ6d78802859ac || λf84ea919f753.endsWith(`.${λ6d78802859ac}`));
}

function mp(λ6d78802859ac) {
  const λf84ea919f753 = lp(λ6d78802859ac.request.url);
  if (!λf84ea919f753) return !1;
  try {
    const λ6d78802859ac = new URL(λf84ea919f753);
    return pp(λ6d78802859ac.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ6d78802859ac.pathname) || "serve.app.playsaurus.com" === λ6d78802859ac.hostname && /\/ad-campaigns\//i.test(λ6d78802859ac.pathname);
  } catch {
    return !1;
  }
}

function fp(λ6d78802859ac) {
  const λf84ea919f753 = λ6d78802859ac.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ6d78802859ac.request.destination) || /javascript|ecmascript/i.test(λf84ea919f753) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ6d78802859ac.request.destination || /text\/css/i.test(λf84ea919f753) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ6d78802859ac.request.destination || "iframe" === λ6d78802859ac.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ6d78802859ac) {
  if (![ "script", "worker", "sharedworker" ].includes(λ6d78802859ac.request.destination)) return !1;
  try {
    const λf84ea919f753 = new URL(lp(λ6d78802859ac.request.url));
    return λf84ea919f753.hostname.endsWith("cookielaw.org") || λf84ea919f753.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ6d78802859ac) {
  const λf84ea919f753 = λ6d78802859ac.request.headers.get("accept") || "", λ7d75295d5a53 = new URL(λ6d78802859ac.request.url).pathname, λ573d5a0ea4d2 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ7d75295d5a53);
  return [ "script", "worker", "sharedworker" ].includes(λ6d78802859ac.request.destination) || /javascript|ecmascript/i.test(λf84ea919f753) || λ573d5a0ea4d2 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ6d78802859ac) {
  if ("style" === λ6d78802859ac.request.destination) return !0;
  const λf84ea919f753 = λ6d78802859ac.request.headers.get("accept") || "";
  if (/text\/css/i.test(λf84ea919f753)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ6d78802859ac.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ6d78802859ac) {
  if ([ "script", "worker", "sharedworker" ].includes(λ6d78802859ac.request.destination)) return !0;
  const λf84ea919f753 = λ6d78802859ac.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λf84ea919f753)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ6d78802859ac.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ6d78802859ac) {
  return yp(λ6d78802859ac) || wp(λ6d78802859ac);
}

function jp(λ6d78802859ac) {
  const λf84ea919f753 = λ6d78802859ac?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λf84ea919f753);
}

async function xp(λ6d78802859ac, λf84ea919f753) {
  if (!vp(λ6d78802859ac)) return λf84ea919f753.fetch(λ6d78802859ac);
  let λ7d75295d5a53 = null, λ573d5a0ea4d2 = null;
  for (let λ65d0a0dc67c1 = 0; λ65d0a0dc67c1 < ap.length; λ65d0a0dc67c1 += 1) {
    const λee397eeb5942 = ap[λ65d0a0dc67c1];
    λee397eeb5942 && await new Promise(λ6d78802859ac => setTimeout(λ6d78802859ac, λee397eeb5942));
    try {
      if (λ7d75295d5a53 = await λf84ea919f753.fetch(λ6d78802859ac), λ573d5a0ea4d2 = null, 
      λ7d75295d5a53.status < 400 && !jp(λ7d75295d5a53)) return λ7d75295d5a53;
    } catch (λ6d78802859ac) {
      λ573d5a0ea4d2 = λ6d78802859ac;
    }
  }
  if (λ7d75295d5a53) return λ7d75295d5a53;
  throw λ573d5a0ea4d2 || new Error("UV asset request failed");
}

async function _p(λ6d78802859ac, λf84ea919f753) {
  if (!wp(λ6d78802859ac) || λf84ea919f753.status >= 400) return λf84ea919f753;
  let λ7d75295d5a53;
  try {
    λ7d75295d5a53 = new URL(lp(λ6d78802859ac.request.url));
  } catch {
    return λf84ea919f753;
  }
  if (!/unityloader\.js$/i.test(λ7d75295d5a53.pathname)) return λf84ea919f753;
  const λ573d5a0ea4d2 = await λf84ea919f753.clone().text().catch(() => ""), λ65d0a0dc67c1 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ573d5a0ea4d2.includes(λ65d0a0dc67c1)) return λf84ea919f753;
  const λee397eeb5942 = new Headers(λf84ea919f753.headers);
  λee397eeb5942.delete("content-length"), λee397eeb5942.delete("content-encoding"), 
  λee397eeb5942.set("cache-control", "no-store");
  const λ4ca1e50c9b67 = `${λ65d0a0dc67c1}(e.data.decompressed)`, λ90401dc0f244 = λ573d5a0ea4d2.replaceAll(λ4ca1e50c9b67, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ65d0a0dc67c1, "this.callbacks[e.data.id]");
  return new Response(λ90401dc0f244, {
    status: λf84ea919f753.status,
    statusText: λf84ea919f753.statusText,
    headers: λee397eeb5942
  });
}

function bp(λ6d78802859ac) {
  const λf84ea919f753 = λ6d78802859ac.request.headers.get("accept") || "", λ7d75295d5a53 = new URL(λ6d78802859ac.request.url).pathname;
  let λ573d5a0ea4d2 = "";
  try {
    λ573d5a0ea4d2 = new URL(lp(λ6d78802859ac.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ6d78802859ac.request.destination) || /javascript|ecmascript|text\/css/i.test(λf84ea919f753) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ7d75295d5a53) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ573d5a0ea4d2);
}

function qp(λ6d78802859ac) {
  return /^\s*</.test(λ6d78802859ac) || /^\s*\)\]\}'/.test(λ6d78802859ac) || /^\s*\)\]/.test(λ6d78802859ac);
}

async function kp(λ6d78802859ac) {
  if (mp(λ6d78802859ac)) return fp(λ6d78802859ac);
  const {engine: λf84ea919f753} = ip(λ6d78802859ac.request.url);
  if (hp(λ6d78802859ac)) return gp(λ6d78802859ac);
  const λ7d75295d5a53 = await _p(λ6d78802859ac, await xp(λ6d78802859ac, λf84ea919f753)), λ573d5a0ea4d2 = λ7d75295d5a53.headers.get("content-type") || "", λ65d0a0dc67c1 = bp(λ6d78802859ac), λee397eeb5942 = λ65d0a0dc67c1 && (λ573d5a0ea4d2.includes("text/html") || λ573d5a0ea4d2.includes("application/json") || λ573d5a0ea4d2.includes("text/json"));
  return λ65d0a0dc67c1 && λee397eeb5942 ? Response.error() : λ65d0a0dc67c1 && λ7d75295d5a53.status >= 400 ? λ7d75295d5a53 : λ65d0a0dc67c1 && qp(await λ7d75295d5a53.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ6d78802859ac.request.destination), 
  λ7d75295d5a53);
}

self.addEventListener("fetch", λ6d78802859ac => {
  λ6d78802859ac.respondWith(kp(λ6d78802859ac).catch(() => Response.error()));
});
