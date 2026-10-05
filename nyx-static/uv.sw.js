importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ770535f5497c = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ93190fc21d14 => {
    "function" == typeof λ93190fc21d14 && queueMicrotask(() => λ93190fc21d14(λ770535f5497c));
  }, λ93190fc21d14 = Object.freeze({
    getCurrentPosition(λ770535f5497c, λ93190fc21d14) {
      t(λ93190fc21d14);
    },
    watchPosition: (λ770535f5497c, λ93190fc21d14) => (t(λ93190fc21d14), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ93190fc21d14
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ93190fc21d14
    });
  } catch {}
  const λ19bce3bd39e2 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ19bce3bd39e2) try {
    navigator.permissions.query = λ770535f5497c => {
      if ("geolocation" === String(λ770535f5497c?.name || "").toLowerCase()) {
        const λ770535f5497c = new EventTarget;
        return Object.defineProperties(λ770535f5497c, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ770535f5497c);
      }
      return λ19bce3bd39e2(λ770535f5497c);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ770535f5497c) {
  try {
    const λ93190fc21d14 = new URL(λ770535f5497c).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ93190fc21d14 ? {
      id: λ93190fc21d14[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ93190fc21d14[1]}/`,
      dbName: `__nyx_uv_tab_${λ93190fc21d14[1]}`
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

function ip(λ770535f5497c) {
  const λ93190fc21d14 = cp(λ770535f5497c), λ19bce3bd39e2 = λ93190fc21d14.id || "legacy";
  let λ0426915b0d4c = sp.get(λ19bce3bd39e2);
  if (!λ0426915b0d4c) {
    const λ770535f5497c = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ770535f5497c.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ0426915b0d4c = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ93190fc21d14.prefix,
      cookieDbName: λ93190fc21d14.dbName,
      inject: λ770535f5497c
    }), sp.set(λ19bce3bd39e2, λ0426915b0d4c);
  }
  return {
    engine: λ0426915b0d4c,
    session: λ93190fc21d14
  };
}

function up(λ770535f5497c) {
  return new Promise(λ93190fc21d14 => {
    let λ19bce3bd39e2;
    try {
      λ19bce3bd39e2 = indexedDB.open(λ770535f5497c);
    } catch {
      return void λ93190fc21d14(!1);
    }
    λ19bce3bd39e2.onerror = () => λ93190fc21d14(!1), λ19bce3bd39e2.onupgradeneeded = () => {}, 
    λ19bce3bd39e2.onsuccess = () => {
      const λ770535f5497c = λ19bce3bd39e2.result;
      if (!λ770535f5497c.objectStoreNames.contains("cookies")) return λ770535f5497c.close(), 
      void λ93190fc21d14(!0);
      const λ0426915b0d4c = λ770535f5497c.transaction("cookies", "readwrite");
      λ0426915b0d4c.objectStore("cookies").clear(), λ0426915b0d4c.oncomplete = () => {
        λ770535f5497c.close(), λ93190fc21d14(!0);
      }, λ0426915b0d4c.onerror = () => {
        λ770535f5497c.close(), λ93190fc21d14(!1);
      }, λ0426915b0d4c.onabort = () => {
        λ770535f5497c.close(), λ93190fc21d14(!1);
      };
    };
  });
}

function lp(λ770535f5497c) {
  try {
    const λ93190fc21d14 = new URL(λ770535f5497c), λ19bce3bd39e2 = cp(λ770535f5497c).prefix;
    return λ93190fc21d14.pathname.startsWith(λ19bce3bd39e2) ? self.__uv$config.decodeUrl(λ93190fc21d14.pathname.slice(λ19bce3bd39e2.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ770535f5497c => {
  const λ93190fc21d14 = λ770535f5497c.data;
  if ("nyx:destroy-proxy-session" !== λ93190fc21d14?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ93190fc21d14.sessionId || ""))) return;
  const λ19bce3bd39e2 = String(λ93190fc21d14.sessionId);
  sp.delete(λ19bce3bd39e2), λ770535f5497c.waitUntil?.(up(`__nyx_uv_tab_${λ19bce3bd39e2}`));
}), self.addEventListener("install", λ770535f5497c => {
  λ770535f5497c.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ770535f5497c => {
  λ770535f5497c.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ770535f5497c) {
  const λ93190fc21d14 = String(λ770535f5497c || "").toLowerCase();
  return dp.some(λ770535f5497c => λ93190fc21d14 === λ770535f5497c || λ93190fc21d14.endsWith(`.${λ770535f5497c}`));
}

function mp(λ770535f5497c) {
  const λ93190fc21d14 = lp(λ770535f5497c.request.url);
  if (!λ93190fc21d14) return !1;
  try {
    const λ770535f5497c = new URL(λ93190fc21d14);
    return pp(λ770535f5497c.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ770535f5497c.pathname) || "serve.app.playsaurus.com" === λ770535f5497c.hostname && /\/ad-campaigns\//i.test(λ770535f5497c.pathname);
  } catch {
    return !1;
  }
}

function fp(λ770535f5497c) {
  const λ93190fc21d14 = λ770535f5497c.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ770535f5497c.request.destination) || /javascript|ecmascript/i.test(λ93190fc21d14) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ770535f5497c.request.destination || /text\/css/i.test(λ93190fc21d14) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ770535f5497c.request.destination || "iframe" === λ770535f5497c.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ770535f5497c) {
  if (![ "script", "worker", "sharedworker" ].includes(λ770535f5497c.request.destination)) return !1;
  try {
    const λ93190fc21d14 = new URL(lp(λ770535f5497c.request.url));
    return λ93190fc21d14.hostname.endsWith("cookielaw.org") || λ93190fc21d14.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ770535f5497c) {
  const λ93190fc21d14 = λ770535f5497c.request.headers.get("accept") || "", λ19bce3bd39e2 = new URL(λ770535f5497c.request.url).pathname, λ0426915b0d4c = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ19bce3bd39e2);
  return [ "script", "worker", "sharedworker" ].includes(λ770535f5497c.request.destination) || /javascript|ecmascript/i.test(λ93190fc21d14) || λ0426915b0d4c ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ770535f5497c) {
  if ("style" === λ770535f5497c.request.destination) return !0;
  const λ93190fc21d14 = λ770535f5497c.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ93190fc21d14)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ770535f5497c.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ770535f5497c) {
  if ([ "script", "worker", "sharedworker" ].includes(λ770535f5497c.request.destination)) return !0;
  const λ93190fc21d14 = λ770535f5497c.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ93190fc21d14)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ770535f5497c.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ770535f5497c) {
  return yp(λ770535f5497c) || wp(λ770535f5497c);
}

function jp(λ770535f5497c) {
  const λ93190fc21d14 = λ770535f5497c?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ93190fc21d14);
}

async function xp(λ770535f5497c, λ93190fc21d14) {
  if (!vp(λ770535f5497c)) return λ93190fc21d14.fetch(λ770535f5497c);
  let λ19bce3bd39e2 = null, λ0426915b0d4c = null;
  for (let λb278d1a10d93 = 0; λb278d1a10d93 < ap.length; λb278d1a10d93 += 1) {
    const λ6a9d79f23e67 = ap[λb278d1a10d93];
    λ6a9d79f23e67 && await new Promise(λ770535f5497c => setTimeout(λ770535f5497c, λ6a9d79f23e67));
    try {
      if (λ19bce3bd39e2 = await λ93190fc21d14.fetch(λ770535f5497c), λ0426915b0d4c = null, 
      λ19bce3bd39e2.status < 400 && !jp(λ19bce3bd39e2)) return λ19bce3bd39e2;
    } catch (λ770535f5497c) {
      λ0426915b0d4c = λ770535f5497c;
    }
  }
  if (λ19bce3bd39e2) return λ19bce3bd39e2;
  throw λ0426915b0d4c || new Error("UV asset request failed");
}

async function _p(λ770535f5497c, λ93190fc21d14) {
  if (!wp(λ770535f5497c) || λ93190fc21d14.status >= 400) return λ93190fc21d14;
  let λ19bce3bd39e2;
  try {
    λ19bce3bd39e2 = new URL(lp(λ770535f5497c.request.url));
  } catch {
    return λ93190fc21d14;
  }
  if (!/unityloader\.js$/i.test(λ19bce3bd39e2.pathname)) return λ93190fc21d14;
  const λ0426915b0d4c = await λ93190fc21d14.clone().text().catch(() => ""), λb278d1a10d93 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ0426915b0d4c.includes(λb278d1a10d93)) return λ93190fc21d14;
  const λ6a9d79f23e67 = new Headers(λ93190fc21d14.headers);
  λ6a9d79f23e67.delete("content-length"), λ6a9d79f23e67.delete("content-encoding"), 
  λ6a9d79f23e67.set("cache-control", "no-store");
  const λ9f68334f2033 = `${λb278d1a10d93}(e.data.decompressed)`, λ7e0f4848d166 = λ0426915b0d4c.replaceAll(λ9f68334f2033, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λb278d1a10d93, "this.callbacks[e.data.id]");
  return new Response(λ7e0f4848d166, {
    status: λ93190fc21d14.status,
    statusText: λ93190fc21d14.statusText,
    headers: λ6a9d79f23e67
  });
}

function bp(λ770535f5497c) {
  const λ93190fc21d14 = λ770535f5497c.request.headers.get("accept") || "", λ19bce3bd39e2 = new URL(λ770535f5497c.request.url).pathname;
  let λ0426915b0d4c = "";
  try {
    λ0426915b0d4c = new URL(lp(λ770535f5497c.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ770535f5497c.request.destination) || /javascript|ecmascript|text\/css/i.test(λ93190fc21d14) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ19bce3bd39e2) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ0426915b0d4c);
}

function qp(λ770535f5497c) {
  return /^\s*</.test(λ770535f5497c) || /^\s*\)\]\}'/.test(λ770535f5497c) || /^\s*\)\]/.test(λ770535f5497c);
}

async function kp(λ770535f5497c) {
  if (mp(λ770535f5497c)) return fp(λ770535f5497c);
  const {engine: λ93190fc21d14} = ip(λ770535f5497c.request.url);
  if (hp(λ770535f5497c)) return gp(λ770535f5497c);
  const λ19bce3bd39e2 = await _p(λ770535f5497c, await xp(λ770535f5497c, λ93190fc21d14)), λ0426915b0d4c = λ19bce3bd39e2.headers.get("content-type") || "", λb278d1a10d93 = bp(λ770535f5497c), λ6a9d79f23e67 = λb278d1a10d93 && (λ0426915b0d4c.includes("text/html") || λ0426915b0d4c.includes("application/json") || λ0426915b0d4c.includes("text/json"));
  return λb278d1a10d93 && λ6a9d79f23e67 ? Response.error() : λb278d1a10d93 && λ19bce3bd39e2.status >= 400 ? λ19bce3bd39e2 : λb278d1a10d93 && qp(await λ19bce3bd39e2.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ770535f5497c.request.destination), 
  λ19bce3bd39e2);
}

self.addEventListener("fetch", λ770535f5497c => {
  λ770535f5497c.respondWith(kp(λ770535f5497c).catch(() => Response.error()));
});
