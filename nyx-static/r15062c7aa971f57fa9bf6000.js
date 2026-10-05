importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λc7f9eb5cb650 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ22cb3189c87c => {
    "function" == typeof λ22cb3189c87c && queueMicrotask(() => λ22cb3189c87c(λc7f9eb5cb650));
  }, λ22cb3189c87c = Object.freeze({
    getCurrentPosition(λc7f9eb5cb650, λ22cb3189c87c) {
      t(λ22cb3189c87c);
    },
    watchPosition: (λc7f9eb5cb650, λ22cb3189c87c) => (t(λ22cb3189c87c), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ22cb3189c87c
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ22cb3189c87c
    });
  } catch {}
  const λb9f3c4e07d9e = navigator.permissions?.query?.bind(navigator.permissions);
  if (λb9f3c4e07d9e) try {
    navigator.permissions.query = λc7f9eb5cb650 => {
      if ("geolocation" === String(λc7f9eb5cb650?.name || "").toLowerCase()) {
        const λc7f9eb5cb650 = new EventTarget;
        return Object.defineProperties(λc7f9eb5cb650, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λc7f9eb5cb650);
      }
      return λb9f3c4e07d9e(λc7f9eb5cb650);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λc7f9eb5cb650) {
  try {
    const λ22cb3189c87c = new URL(λc7f9eb5cb650).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ22cb3189c87c ? {
      id: λ22cb3189c87c[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ22cb3189c87c[1]}/`,
      dbName: `__nyx_uv_tab_${λ22cb3189c87c[1]}`
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

function ip(λc7f9eb5cb650) {
  const λ22cb3189c87c = cp(λc7f9eb5cb650), λb9f3c4e07d9e = λ22cb3189c87c.id || "legacy";
  let λ1266bc7e2238 = sp.get(λb9f3c4e07d9e);
  if (!λ1266bc7e2238) {
    const λc7f9eb5cb650 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λc7f9eb5cb650.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ1266bc7e2238 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ22cb3189c87c.prefix,
      cookieDbName: λ22cb3189c87c.dbName,
      inject: λc7f9eb5cb650
    }), sp.set(λb9f3c4e07d9e, λ1266bc7e2238);
  }
  return {
    engine: λ1266bc7e2238,
    session: λ22cb3189c87c
  };
}

function up(λc7f9eb5cb650) {
  return new Promise(λ22cb3189c87c => {
    let λb9f3c4e07d9e;
    try {
      λb9f3c4e07d9e = indexedDB.open(λc7f9eb5cb650);
    } catch {
      return void λ22cb3189c87c(!1);
    }
    λb9f3c4e07d9e.onerror = () => λ22cb3189c87c(!1), λb9f3c4e07d9e.onupgradeneeded = () => {}, 
    λb9f3c4e07d9e.onsuccess = () => {
      const λc7f9eb5cb650 = λb9f3c4e07d9e.result;
      if (!λc7f9eb5cb650.objectStoreNames.contains("cookies")) return λc7f9eb5cb650.close(), 
      void λ22cb3189c87c(!0);
      const λ1266bc7e2238 = λc7f9eb5cb650.transaction("cookies", "readwrite");
      λ1266bc7e2238.objectStore("cookies").clear(), λ1266bc7e2238.oncomplete = () => {
        λc7f9eb5cb650.close(), λ22cb3189c87c(!0);
      }, λ1266bc7e2238.onerror = () => {
        λc7f9eb5cb650.close(), λ22cb3189c87c(!1);
      }, λ1266bc7e2238.onabort = () => {
        λc7f9eb5cb650.close(), λ22cb3189c87c(!1);
      };
    };
  });
}

function lp(λc7f9eb5cb650) {
  try {
    const λ22cb3189c87c = new URL(λc7f9eb5cb650), λb9f3c4e07d9e = cp(λc7f9eb5cb650).prefix;
    return λ22cb3189c87c.pathname.startsWith(λb9f3c4e07d9e) ? self.__uv$config.decodeUrl(λ22cb3189c87c.pathname.slice(λb9f3c4e07d9e.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λc7f9eb5cb650 => {
  const λ22cb3189c87c = λc7f9eb5cb650.data;
  if ("nyx:destroy-proxy-session" !== λ22cb3189c87c?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ22cb3189c87c.sessionId || ""))) return;
  const λb9f3c4e07d9e = String(λ22cb3189c87c.sessionId);
  sp.delete(λb9f3c4e07d9e), λc7f9eb5cb650.waitUntil?.(up(`__nyx_uv_tab_${λb9f3c4e07d9e}`));
}), self.addEventListener("install", λc7f9eb5cb650 => {
  λc7f9eb5cb650.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λc7f9eb5cb650 => {
  λc7f9eb5cb650.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λc7f9eb5cb650) {
  const λ22cb3189c87c = String(λc7f9eb5cb650 || "").toLowerCase();
  return dp.some(λc7f9eb5cb650 => λ22cb3189c87c === λc7f9eb5cb650 || λ22cb3189c87c.endsWith(`.${λc7f9eb5cb650}`));
}

function mp(λc7f9eb5cb650) {
  const λ22cb3189c87c = lp(λc7f9eb5cb650.request.url);
  if (!λ22cb3189c87c) return !1;
  try {
    const λc7f9eb5cb650 = new URL(λ22cb3189c87c);
    return pp(λc7f9eb5cb650.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λc7f9eb5cb650.pathname) || "serve.app.playsaurus.com" === λc7f9eb5cb650.hostname && /\/ad-campaigns\//i.test(λc7f9eb5cb650.pathname);
  } catch {
    return !1;
  }
}

function fp(λc7f9eb5cb650) {
  const λ22cb3189c87c = λc7f9eb5cb650.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λc7f9eb5cb650.request.destination) || /javascript|ecmascript/i.test(λ22cb3189c87c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λc7f9eb5cb650.request.destination || /text\/css/i.test(λ22cb3189c87c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λc7f9eb5cb650.request.destination || "iframe" === λc7f9eb5cb650.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λc7f9eb5cb650) {
  if (![ "script", "worker", "sharedworker" ].includes(λc7f9eb5cb650.request.destination)) return !1;
  try {
    const λ22cb3189c87c = new URL(lp(λc7f9eb5cb650.request.url));
    return λ22cb3189c87c.hostname.endsWith("cookielaw.org") || λ22cb3189c87c.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λc7f9eb5cb650) {
  const λ22cb3189c87c = λc7f9eb5cb650.request.headers.get("accept") || "", λb9f3c4e07d9e = new URL(λc7f9eb5cb650.request.url).pathname, λ1266bc7e2238 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λb9f3c4e07d9e);
  return [ "script", "worker", "sharedworker" ].includes(λc7f9eb5cb650.request.destination) || /javascript|ecmascript/i.test(λ22cb3189c87c) || λ1266bc7e2238 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λc7f9eb5cb650) {
  if ("style" === λc7f9eb5cb650.request.destination) return !0;
  const λ22cb3189c87c = λc7f9eb5cb650.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ22cb3189c87c)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λc7f9eb5cb650.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λc7f9eb5cb650) {
  if ([ "script", "worker", "sharedworker" ].includes(λc7f9eb5cb650.request.destination)) return !0;
  const λ22cb3189c87c = λc7f9eb5cb650.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ22cb3189c87c)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λc7f9eb5cb650.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λc7f9eb5cb650) {
  return yp(λc7f9eb5cb650) || wp(λc7f9eb5cb650);
}

function jp(λc7f9eb5cb650) {
  const λ22cb3189c87c = λc7f9eb5cb650?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ22cb3189c87c);
}

async function xp(λc7f9eb5cb650, λ22cb3189c87c) {
  if (!vp(λc7f9eb5cb650)) return λ22cb3189c87c.fetch(λc7f9eb5cb650);
  let λb9f3c4e07d9e = null, λ1266bc7e2238 = null;
  for (let λ93bf11a88c88 = 0; λ93bf11a88c88 < ap.length; λ93bf11a88c88 += 1) {
    const λbecc5a197e35 = ap[λ93bf11a88c88];
    λbecc5a197e35 && await new Promise(λc7f9eb5cb650 => setTimeout(λc7f9eb5cb650, λbecc5a197e35));
    try {
      if (λb9f3c4e07d9e = await λ22cb3189c87c.fetch(λc7f9eb5cb650), λ1266bc7e2238 = null, 
      λb9f3c4e07d9e.status < 400 && !jp(λb9f3c4e07d9e)) return λb9f3c4e07d9e;
    } catch (λc7f9eb5cb650) {
      λ1266bc7e2238 = λc7f9eb5cb650;
    }
  }
  if (λb9f3c4e07d9e) return λb9f3c4e07d9e;
  throw λ1266bc7e2238 || new Error("UV asset request failed");
}

async function _p(λc7f9eb5cb650, λ22cb3189c87c) {
  if (!wp(λc7f9eb5cb650) || λ22cb3189c87c.status >= 400) return λ22cb3189c87c;
  let λb9f3c4e07d9e;
  try {
    λb9f3c4e07d9e = new URL(lp(λc7f9eb5cb650.request.url));
  } catch {
    return λ22cb3189c87c;
  }
  if (!/unityloader\.js$/i.test(λb9f3c4e07d9e.pathname)) return λ22cb3189c87c;
  const λ1266bc7e2238 = await λ22cb3189c87c.clone().text().catch(() => ""), λ93bf11a88c88 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ1266bc7e2238.includes(λ93bf11a88c88)) return λ22cb3189c87c;
  const λbecc5a197e35 = new Headers(λ22cb3189c87c.headers);
  λbecc5a197e35.delete("content-length"), λbecc5a197e35.delete("content-encoding"), 
  λbecc5a197e35.set("cache-control", "no-store");
  const λc8e6b15074ee = `${λ93bf11a88c88}(e.data.decompressed)`, λ261be6b5b797 = λ1266bc7e2238.replaceAll(λc8e6b15074ee, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ93bf11a88c88, "this.callbacks[e.data.id]");
  return new Response(λ261be6b5b797, {
    status: λ22cb3189c87c.status,
    statusText: λ22cb3189c87c.statusText,
    headers: λbecc5a197e35
  });
}

function bp(λc7f9eb5cb650) {
  const λ22cb3189c87c = λc7f9eb5cb650.request.headers.get("accept") || "", λb9f3c4e07d9e = new URL(λc7f9eb5cb650.request.url).pathname;
  let λ1266bc7e2238 = "";
  try {
    λ1266bc7e2238 = new URL(lp(λc7f9eb5cb650.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λc7f9eb5cb650.request.destination) || /javascript|ecmascript|text\/css/i.test(λ22cb3189c87c) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λb9f3c4e07d9e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ1266bc7e2238);
}

function qp(λc7f9eb5cb650) {
  return /^\s*</.test(λc7f9eb5cb650) || /^\s*\)\]\}'/.test(λc7f9eb5cb650) || /^\s*\)\]/.test(λc7f9eb5cb650);
}

async function kp(λc7f9eb5cb650) {
  if (mp(λc7f9eb5cb650)) return fp(λc7f9eb5cb650);
  const {engine: λ22cb3189c87c} = ip(λc7f9eb5cb650.request.url);
  if (hp(λc7f9eb5cb650)) return gp(λc7f9eb5cb650);
  const λb9f3c4e07d9e = await _p(λc7f9eb5cb650, await xp(λc7f9eb5cb650, λ22cb3189c87c)), λ1266bc7e2238 = λb9f3c4e07d9e.headers.get("content-type") || "", λ93bf11a88c88 = bp(λc7f9eb5cb650), λbecc5a197e35 = λ93bf11a88c88 && (λ1266bc7e2238.includes("text/html") || λ1266bc7e2238.includes("application/json") || λ1266bc7e2238.includes("text/json"));
  return λ93bf11a88c88 && λbecc5a197e35 ? Response.error() : λ93bf11a88c88 && λb9f3c4e07d9e.status >= 400 ? λb9f3c4e07d9e : λ93bf11a88c88 && qp(await λb9f3c4e07d9e.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λc7f9eb5cb650.request.destination), 
  λb9f3c4e07d9e);
}

self.addEventListener("fetch", λc7f9eb5cb650 => {
  λc7f9eb5cb650.respondWith(kp(λc7f9eb5cb650).catch(() => Response.error()));
});
