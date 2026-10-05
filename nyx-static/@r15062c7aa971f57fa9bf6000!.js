importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ73c743f47251 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ68b0328555b5 => {
    "function" == typeof λ68b0328555b5 && queueMicrotask(() => λ68b0328555b5(λ73c743f47251));
  }, λ68b0328555b5 = Object.freeze({
    getCurrentPosition(λ73c743f47251, λ68b0328555b5) {
      t(λ68b0328555b5);
    },
    watchPosition: (λ73c743f47251, λ68b0328555b5) => (t(λ68b0328555b5), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ68b0328555b5
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ68b0328555b5
    });
  } catch {}
  const λ22d362b62f0b = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ22d362b62f0b) try {
    navigator.permissions.query = λ73c743f47251 => {
      if ("geolocation" === String(λ73c743f47251?.name || "").toLowerCase()) {
        const λ73c743f47251 = new EventTarget;
        return Object.defineProperties(λ73c743f47251, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ73c743f47251);
      }
      return λ22d362b62f0b(λ73c743f47251);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ73c743f47251) {
  try {
    const λ68b0328555b5 = new URL(λ73c743f47251).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ68b0328555b5 ? {
      id: λ68b0328555b5[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ68b0328555b5[1]}/`,
      dbName: `__nyx_uv_tab_${λ68b0328555b5[1]}`
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

function ip(λ73c743f47251) {
  const λ68b0328555b5 = cp(λ73c743f47251), λ22d362b62f0b = λ68b0328555b5.id || "legacy";
  let λ7b71947b9906 = sp.get(λ22d362b62f0b);
  if (!λ7b71947b9906) {
    const λ73c743f47251 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ73c743f47251.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ7b71947b9906 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ68b0328555b5.prefix,
      cookieDbName: λ68b0328555b5.dbName,
      inject: λ73c743f47251
    }), sp.set(λ22d362b62f0b, λ7b71947b9906);
  }
  return {
    engine: λ7b71947b9906,
    session: λ68b0328555b5
  };
}

function up(λ73c743f47251) {
  return new Promise(λ68b0328555b5 => {
    let λ22d362b62f0b;
    try {
      λ22d362b62f0b = indexedDB.open(λ73c743f47251);
    } catch {
      return void λ68b0328555b5(!1);
    }
    λ22d362b62f0b.onerror = () => λ68b0328555b5(!1), λ22d362b62f0b.onupgradeneeded = () => {}, 
    λ22d362b62f0b.onsuccess = () => {
      const λ73c743f47251 = λ22d362b62f0b.result;
      if (!λ73c743f47251.objectStoreNames.contains("cookies")) return λ73c743f47251.close(), 
      void λ68b0328555b5(!0);
      const λ7b71947b9906 = λ73c743f47251.transaction("cookies", "readwrite");
      λ7b71947b9906.objectStore("cookies").clear(), λ7b71947b9906.oncomplete = () => {
        λ73c743f47251.close(), λ68b0328555b5(!0);
      }, λ7b71947b9906.onerror = () => {
        λ73c743f47251.close(), λ68b0328555b5(!1);
      }, λ7b71947b9906.onabort = () => {
        λ73c743f47251.close(), λ68b0328555b5(!1);
      };
    };
  });
}

function lp(λ73c743f47251) {
  try {
    const λ68b0328555b5 = new URL(λ73c743f47251), λ22d362b62f0b = cp(λ73c743f47251).prefix;
    return λ68b0328555b5.pathname.startsWith(λ22d362b62f0b) ? self.__uv$config.decodeUrl(λ68b0328555b5.pathname.slice(λ22d362b62f0b.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ73c743f47251 => {
  const λ68b0328555b5 = λ73c743f47251.data;
  if ("nyx:destroy-proxy-session" !== λ68b0328555b5?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ68b0328555b5.sessionId || ""))) return;
  const λ22d362b62f0b = String(λ68b0328555b5.sessionId);
  sp.delete(λ22d362b62f0b), λ73c743f47251.waitUntil?.(up(`__nyx_uv_tab_${λ22d362b62f0b}`));
}), self.addEventListener("install", λ73c743f47251 => {
  λ73c743f47251.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ73c743f47251 => {
  λ73c743f47251.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ73c743f47251) {
  const λ68b0328555b5 = String(λ73c743f47251 || "").toLowerCase();
  return dp.some(λ73c743f47251 => λ68b0328555b5 === λ73c743f47251 || λ68b0328555b5.endsWith(`.${λ73c743f47251}`));
}

function mp(λ73c743f47251) {
  const λ68b0328555b5 = lp(λ73c743f47251.request.url);
  if (!λ68b0328555b5) return !1;
  try {
    const λ73c743f47251 = new URL(λ68b0328555b5);
    return pp(λ73c743f47251.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ73c743f47251.pathname) || "serve.app.playsaurus.com" === λ73c743f47251.hostname && /\/ad-campaigns\//i.test(λ73c743f47251.pathname);
  } catch {
    return !1;
  }
}

function fp(λ73c743f47251) {
  const λ68b0328555b5 = λ73c743f47251.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ73c743f47251.request.destination) || /javascript|ecmascript/i.test(λ68b0328555b5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ73c743f47251.request.destination || /text\/css/i.test(λ68b0328555b5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ73c743f47251.request.destination || "iframe" === λ73c743f47251.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ73c743f47251) {
  if (![ "script", "worker", "sharedworker" ].includes(λ73c743f47251.request.destination)) return !1;
  try {
    const λ68b0328555b5 = new URL(lp(λ73c743f47251.request.url));
    return λ68b0328555b5.hostname.endsWith("cookielaw.org") || λ68b0328555b5.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ73c743f47251) {
  const λ68b0328555b5 = λ73c743f47251.request.headers.get("accept") || "", λ22d362b62f0b = new URL(λ73c743f47251.request.url).pathname, λ7b71947b9906 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ22d362b62f0b);
  return [ "script", "worker", "sharedworker" ].includes(λ73c743f47251.request.destination) || /javascript|ecmascript/i.test(λ68b0328555b5) || λ7b71947b9906 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ73c743f47251) {
  if ("style" === λ73c743f47251.request.destination) return !0;
  const λ68b0328555b5 = λ73c743f47251.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ68b0328555b5)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ73c743f47251.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ73c743f47251) {
  if ([ "script", "worker", "sharedworker" ].includes(λ73c743f47251.request.destination)) return !0;
  const λ68b0328555b5 = λ73c743f47251.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ68b0328555b5)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ73c743f47251.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ73c743f47251) {
  return yp(λ73c743f47251) || wp(λ73c743f47251);
}

function jp(λ73c743f47251) {
  const λ68b0328555b5 = λ73c743f47251?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ68b0328555b5);
}

async function xp(λ73c743f47251, λ68b0328555b5) {
  if (!vp(λ73c743f47251)) return λ68b0328555b5.fetch(λ73c743f47251);
  let λ22d362b62f0b = null, λ7b71947b9906 = null;
  for (let λc1ade56de9a1 = 0; λc1ade56de9a1 < ap.length; λc1ade56de9a1 += 1) {
    const λadc4846a033c = ap[λc1ade56de9a1];
    λadc4846a033c && await new Promise(λ73c743f47251 => setTimeout(λ73c743f47251, λadc4846a033c));
    try {
      if (λ22d362b62f0b = await λ68b0328555b5.fetch(λ73c743f47251), λ7b71947b9906 = null, 
      λ22d362b62f0b.status < 400 && !jp(λ22d362b62f0b)) return λ22d362b62f0b;
    } catch (λ73c743f47251) {
      λ7b71947b9906 = λ73c743f47251;
    }
  }
  if (λ22d362b62f0b) return λ22d362b62f0b;
  throw λ7b71947b9906 || new Error("UV asset request failed");
}

async function _p(λ73c743f47251, λ68b0328555b5) {
  if (!wp(λ73c743f47251) || λ68b0328555b5.status >= 400) return λ68b0328555b5;
  let λ22d362b62f0b;
  try {
    λ22d362b62f0b = new URL(lp(λ73c743f47251.request.url));
  } catch {
    return λ68b0328555b5;
  }
  if (!/unityloader\.js$/i.test(λ22d362b62f0b.pathname)) return λ68b0328555b5;
  const λ7b71947b9906 = await λ68b0328555b5.clone().text().catch(() => ""), λc1ade56de9a1 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ7b71947b9906.includes(λc1ade56de9a1)) return λ68b0328555b5;
  const λadc4846a033c = new Headers(λ68b0328555b5.headers);
  λadc4846a033c.delete("content-length"), λadc4846a033c.delete("content-encoding"), 
  λadc4846a033c.set("cache-control", "no-store");
  const λe0bd270942e6 = `${λc1ade56de9a1}(e.data.decompressed)`, λb1991f80cfa5 = λ7b71947b9906.replaceAll(λe0bd270942e6, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λc1ade56de9a1, "this.callbacks[e.data.id]");
  return new Response(λb1991f80cfa5, {
    status: λ68b0328555b5.status,
    statusText: λ68b0328555b5.statusText,
    headers: λadc4846a033c
  });
}

function bp(λ73c743f47251) {
  const λ68b0328555b5 = λ73c743f47251.request.headers.get("accept") || "", λ22d362b62f0b = new URL(λ73c743f47251.request.url).pathname;
  let λ7b71947b9906 = "";
  try {
    λ7b71947b9906 = new URL(lp(λ73c743f47251.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ73c743f47251.request.destination) || /javascript|ecmascript|text\/css/i.test(λ68b0328555b5) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ22d362b62f0b) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ7b71947b9906);
}

function qp(λ73c743f47251) {
  return /^\s*</.test(λ73c743f47251) || /^\s*\)\]\}'/.test(λ73c743f47251) || /^\s*\)\]/.test(λ73c743f47251);
}

async function kp(λ73c743f47251) {
  if (mp(λ73c743f47251)) return fp(λ73c743f47251);
  const {engine: λ68b0328555b5} = ip(λ73c743f47251.request.url);
  if (hp(λ73c743f47251)) return gp(λ73c743f47251);
  const λ22d362b62f0b = await _p(λ73c743f47251, await xp(λ73c743f47251, λ68b0328555b5)), λ7b71947b9906 = λ22d362b62f0b.headers.get("content-type") || "", λc1ade56de9a1 = bp(λ73c743f47251), λadc4846a033c = λc1ade56de9a1 && (λ7b71947b9906.includes("text/html") || λ7b71947b9906.includes("application/json") || λ7b71947b9906.includes("text/json"));
  return λc1ade56de9a1 && λadc4846a033c ? Response.error() : λc1ade56de9a1 && λ22d362b62f0b.status >= 400 ? λ22d362b62f0b : λc1ade56de9a1 && qp(await λ22d362b62f0b.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ73c743f47251.request.destination), 
  λ22d362b62f0b);
}

self.addEventListener("fetch", λ73c743f47251 => {
  λ73c743f47251.respondWith(kp(λ73c743f47251).catch(() => Response.error()));
});
