importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λbc60a3a0f771 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ4abf680d86ab => {
    "function" == typeof λ4abf680d86ab && queueMicrotask(() => λ4abf680d86ab(λbc60a3a0f771));
  }, λ4abf680d86ab = Object.freeze({
    getCurrentPosition(λbc60a3a0f771, λ4abf680d86ab) {
      t(λ4abf680d86ab);
    },
    watchPosition: (λbc60a3a0f771, λ4abf680d86ab) => (t(λ4abf680d86ab), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ4abf680d86ab
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ4abf680d86ab
    });
  } catch {}
  const λ012fff6e48c7 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ012fff6e48c7) try {
    navigator.permissions.query = λbc60a3a0f771 => {
      if ("geolocation" === String(λbc60a3a0f771?.name || "").toLowerCase()) {
        const λbc60a3a0f771 = new EventTarget;
        return Object.defineProperties(λbc60a3a0f771, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λbc60a3a0f771);
      }
      return λ012fff6e48c7(λbc60a3a0f771);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λbc60a3a0f771) {
  try {
    const λ4abf680d86ab = new URL(λbc60a3a0f771).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ4abf680d86ab ? {
      id: λ4abf680d86ab[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ4abf680d86ab[1]}/`,
      dbName: `__nyx_uv_tab_${λ4abf680d86ab[1]}`
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

function ip(λbc60a3a0f771) {
  const λ4abf680d86ab = cp(λbc60a3a0f771), λ012fff6e48c7 = λ4abf680d86ab.id || "legacy";
  let λa8d58ed42b81 = sp.get(λ012fff6e48c7);
  if (!λa8d58ed42b81) {
    const λbc60a3a0f771 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λbc60a3a0f771.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λa8d58ed42b81 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ4abf680d86ab.prefix,
      cookieDbName: λ4abf680d86ab.dbName,
      inject: λbc60a3a0f771
    }), sp.set(λ012fff6e48c7, λa8d58ed42b81);
  }
  return {
    engine: λa8d58ed42b81,
    session: λ4abf680d86ab
  };
}

function up(λbc60a3a0f771) {
  return new Promise(λ4abf680d86ab => {
    let λ012fff6e48c7;
    try {
      λ012fff6e48c7 = indexedDB.open(λbc60a3a0f771);
    } catch {
      return void λ4abf680d86ab(!1);
    }
    λ012fff6e48c7.onerror = () => λ4abf680d86ab(!1), λ012fff6e48c7.onupgradeneeded = () => {}, 
    λ012fff6e48c7.onsuccess = () => {
      const λbc60a3a0f771 = λ012fff6e48c7.result;
      if (!λbc60a3a0f771.objectStoreNames.contains("cookies")) return λbc60a3a0f771.close(), 
      void λ4abf680d86ab(!0);
      const λa8d58ed42b81 = λbc60a3a0f771.transaction("cookies", "readwrite");
      λa8d58ed42b81.objectStore("cookies").clear(), λa8d58ed42b81.oncomplete = () => {
        λbc60a3a0f771.close(), λ4abf680d86ab(!0);
      }, λa8d58ed42b81.onerror = () => {
        λbc60a3a0f771.close(), λ4abf680d86ab(!1);
      }, λa8d58ed42b81.onabort = () => {
        λbc60a3a0f771.close(), λ4abf680d86ab(!1);
      };
    };
  });
}

function lp(λbc60a3a0f771) {
  try {
    const λ4abf680d86ab = new URL(λbc60a3a0f771), λ012fff6e48c7 = cp(λbc60a3a0f771).prefix;
    return λ4abf680d86ab.pathname.startsWith(λ012fff6e48c7) ? self.__uv$config.decodeUrl(λ4abf680d86ab.pathname.slice(λ012fff6e48c7.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λbc60a3a0f771 => {
  const λ4abf680d86ab = λbc60a3a0f771.data;
  if ("nyx:destroy-proxy-session" !== λ4abf680d86ab?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ4abf680d86ab.sessionId || ""))) return;
  const λ012fff6e48c7 = String(λ4abf680d86ab.sessionId);
  sp.delete(λ012fff6e48c7), λbc60a3a0f771.waitUntil?.(up(`__nyx_uv_tab_${λ012fff6e48c7}`));
}), self.addEventListener("install", λbc60a3a0f771 => {
  λbc60a3a0f771.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λbc60a3a0f771 => {
  λbc60a3a0f771.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λbc60a3a0f771) {
  const λ4abf680d86ab = String(λbc60a3a0f771 || "").toLowerCase();
  return dp.some(λbc60a3a0f771 => λ4abf680d86ab === λbc60a3a0f771 || λ4abf680d86ab.endsWith(`.${λbc60a3a0f771}`));
}

function mp(λbc60a3a0f771) {
  const λ4abf680d86ab = lp(λbc60a3a0f771.request.url);
  if (!λ4abf680d86ab) return !1;
  try {
    const λbc60a3a0f771 = new URL(λ4abf680d86ab);
    return pp(λbc60a3a0f771.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λbc60a3a0f771.pathname) || "serve.app.playsaurus.com" === λbc60a3a0f771.hostname && /\/ad-campaigns\//i.test(λbc60a3a0f771.pathname);
  } catch {
    return !1;
  }
}

function fp(λbc60a3a0f771) {
  const λ4abf680d86ab = λbc60a3a0f771.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λbc60a3a0f771.request.destination) || /javascript|ecmascript/i.test(λ4abf680d86ab) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λbc60a3a0f771.request.destination || /text\/css/i.test(λ4abf680d86ab) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λbc60a3a0f771.request.destination || "iframe" === λbc60a3a0f771.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λbc60a3a0f771) {
  if (![ "script", "worker", "sharedworker" ].includes(λbc60a3a0f771.request.destination)) return !1;
  try {
    const λ4abf680d86ab = new URL(lp(λbc60a3a0f771.request.url));
    return λ4abf680d86ab.hostname.endsWith("cookielaw.org") || λ4abf680d86ab.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λbc60a3a0f771) {
  const λ4abf680d86ab = λbc60a3a0f771.request.headers.get("accept") || "", λ012fff6e48c7 = new URL(λbc60a3a0f771.request.url).pathname, λa8d58ed42b81 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ012fff6e48c7);
  return [ "script", "worker", "sharedworker" ].includes(λbc60a3a0f771.request.destination) || /javascript|ecmascript/i.test(λ4abf680d86ab) || λa8d58ed42b81 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λbc60a3a0f771) {
  if ("style" === λbc60a3a0f771.request.destination) return !0;
  const λ4abf680d86ab = λbc60a3a0f771.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ4abf680d86ab)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λbc60a3a0f771.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λbc60a3a0f771) {
  if ([ "script", "worker", "sharedworker" ].includes(λbc60a3a0f771.request.destination)) return !0;
  const λ4abf680d86ab = λbc60a3a0f771.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ4abf680d86ab)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λbc60a3a0f771.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λbc60a3a0f771) {
  return yp(λbc60a3a0f771) || wp(λbc60a3a0f771);
}

function jp(λbc60a3a0f771) {
  const λ4abf680d86ab = λbc60a3a0f771?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ4abf680d86ab);
}

async function xp(λbc60a3a0f771, λ4abf680d86ab) {
  if (!vp(λbc60a3a0f771)) return λ4abf680d86ab.fetch(λbc60a3a0f771);
  let λ012fff6e48c7 = null, λa8d58ed42b81 = null;
  for (let λ8abb01bf2eb3 = 0; λ8abb01bf2eb3 < ap.length; λ8abb01bf2eb3 += 1) {
    const λ361d0512292c = ap[λ8abb01bf2eb3];
    λ361d0512292c && await new Promise(λbc60a3a0f771 => setTimeout(λbc60a3a0f771, λ361d0512292c));
    try {
      if (λ012fff6e48c7 = await λ4abf680d86ab.fetch(λbc60a3a0f771), λa8d58ed42b81 = null, 
      λ012fff6e48c7.status < 400 && !jp(λ012fff6e48c7)) return λ012fff6e48c7;
    } catch (λbc60a3a0f771) {
      λa8d58ed42b81 = λbc60a3a0f771;
    }
  }
  if (λ012fff6e48c7) return λ012fff6e48c7;
  throw λa8d58ed42b81 || new Error("UV asset request failed");
}

async function _p(λbc60a3a0f771, λ4abf680d86ab) {
  if (!wp(λbc60a3a0f771) || λ4abf680d86ab.status >= 400) return λ4abf680d86ab;
  let λ012fff6e48c7;
  try {
    λ012fff6e48c7 = new URL(lp(λbc60a3a0f771.request.url));
  } catch {
    return λ4abf680d86ab;
  }
  if (!/unityloader\.js$/i.test(λ012fff6e48c7.pathname)) return λ4abf680d86ab;
  const λa8d58ed42b81 = await λ4abf680d86ab.clone().text().catch(() => ""), λ8abb01bf2eb3 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λa8d58ed42b81.includes(λ8abb01bf2eb3)) return λ4abf680d86ab;
  const λ361d0512292c = new Headers(λ4abf680d86ab.headers);
  λ361d0512292c.delete("content-length"), λ361d0512292c.delete("content-encoding"), 
  λ361d0512292c.set("cache-control", "no-store");
  const λ024dcf47a901 = `${λ8abb01bf2eb3}(e.data.decompressed)`, λ1bead8983e56 = λa8d58ed42b81.replaceAll(λ024dcf47a901, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ8abb01bf2eb3, "this.callbacks[e.data.id]");
  return new Response(λ1bead8983e56, {
    status: λ4abf680d86ab.status,
    statusText: λ4abf680d86ab.statusText,
    headers: λ361d0512292c
  });
}

function bp(λbc60a3a0f771) {
  const λ4abf680d86ab = λbc60a3a0f771.request.headers.get("accept") || "", λ012fff6e48c7 = new URL(λbc60a3a0f771.request.url).pathname;
  let λa8d58ed42b81 = "";
  try {
    λa8d58ed42b81 = new URL(lp(λbc60a3a0f771.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λbc60a3a0f771.request.destination) || /javascript|ecmascript|text\/css/i.test(λ4abf680d86ab) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ012fff6e48c7) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λa8d58ed42b81);
}

function qp(λbc60a3a0f771) {
  return /^\s*</.test(λbc60a3a0f771) || /^\s*\)\]\}'/.test(λbc60a3a0f771) || /^\s*\)\]/.test(λbc60a3a0f771);
}

async function kp(λbc60a3a0f771) {
  if (mp(λbc60a3a0f771)) return fp(λbc60a3a0f771);
  const {engine: λ4abf680d86ab} = ip(λbc60a3a0f771.request.url);
  if (hp(λbc60a3a0f771)) return gp(λbc60a3a0f771);
  const λ012fff6e48c7 = await _p(λbc60a3a0f771, await xp(λbc60a3a0f771, λ4abf680d86ab)), λa8d58ed42b81 = λ012fff6e48c7.headers.get("content-type") || "", λ8abb01bf2eb3 = bp(λbc60a3a0f771), λ361d0512292c = λ8abb01bf2eb3 && (λa8d58ed42b81.includes("text/html") || λa8d58ed42b81.includes("application/json") || λa8d58ed42b81.includes("text/json"));
  return λ8abb01bf2eb3 && λ361d0512292c ? Response.error() : λ8abb01bf2eb3 && λ012fff6e48c7.status >= 400 ? λ012fff6e48c7 : λ8abb01bf2eb3 && qp(await λ012fff6e48c7.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λbc60a3a0f771.request.destination), 
  λ012fff6e48c7);
}

self.addEventListener("fetch", λbc60a3a0f771 => {
  λbc60a3a0f771.respondWith(kp(λbc60a3a0f771).catch(() => Response.error()));
});
