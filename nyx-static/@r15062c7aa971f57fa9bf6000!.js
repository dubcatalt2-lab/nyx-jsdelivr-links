importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λd77806a850a8 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ8be65daefca1 => {
    "function" == typeof λ8be65daefca1 && queueMicrotask(() => λ8be65daefca1(λd77806a850a8));
  }, λ8be65daefca1 = Object.freeze({
    getCurrentPosition(λd77806a850a8, λ8be65daefca1) {
      t(λ8be65daefca1);
    },
    watchPosition: (λd77806a850a8, λ8be65daefca1) => (t(λ8be65daefca1), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ8be65daefca1
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ8be65daefca1
    });
  } catch {}
  const λ15cbd8abd04b = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ15cbd8abd04b) try {
    navigator.permissions.query = λd77806a850a8 => {
      if ("geolocation" === String(λd77806a850a8?.name || "").toLowerCase()) {
        const λd77806a850a8 = new EventTarget;
        return Object.defineProperties(λd77806a850a8, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λd77806a850a8);
      }
      return λ15cbd8abd04b(λd77806a850a8);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λd77806a850a8) {
  try {
    const λ8be65daefca1 = new URL(λd77806a850a8).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ8be65daefca1 ? {
      id: λ8be65daefca1[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ8be65daefca1[1]}/`,
      dbName: `__nyx_uv_tab_${λ8be65daefca1[1]}`
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

function ip(λd77806a850a8) {
  const λ8be65daefca1 = cp(λd77806a850a8), λ15cbd8abd04b = λ8be65daefca1.id || "legacy";
  let λ81d77a3c87bb = sp.get(λ15cbd8abd04b);
  if (!λ81d77a3c87bb) {
    const λd77806a850a8 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λd77806a850a8.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ81d77a3c87bb = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ8be65daefca1.prefix,
      cookieDbName: λ8be65daefca1.dbName,
      inject: λd77806a850a8
    }), sp.set(λ15cbd8abd04b, λ81d77a3c87bb);
  }
  return {
    engine: λ81d77a3c87bb,
    session: λ8be65daefca1
  };
}

function up(λd77806a850a8) {
  return new Promise(λ8be65daefca1 => {
    let λ15cbd8abd04b;
    try {
      λ15cbd8abd04b = indexedDB.open(λd77806a850a8);
    } catch {
      return void λ8be65daefca1(!1);
    }
    λ15cbd8abd04b.onerror = () => λ8be65daefca1(!1), λ15cbd8abd04b.onupgradeneeded = () => {}, 
    λ15cbd8abd04b.onsuccess = () => {
      const λd77806a850a8 = λ15cbd8abd04b.result;
      if (!λd77806a850a8.objectStoreNames.contains("cookies")) return λd77806a850a8.close(), 
      void λ8be65daefca1(!0);
      const λ81d77a3c87bb = λd77806a850a8.transaction("cookies", "readwrite");
      λ81d77a3c87bb.objectStore("cookies").clear(), λ81d77a3c87bb.oncomplete = () => {
        λd77806a850a8.close(), λ8be65daefca1(!0);
      }, λ81d77a3c87bb.onerror = () => {
        λd77806a850a8.close(), λ8be65daefca1(!1);
      }, λ81d77a3c87bb.onabort = () => {
        λd77806a850a8.close(), λ8be65daefca1(!1);
      };
    };
  });
}

function lp(λd77806a850a8) {
  try {
    const λ8be65daefca1 = new URL(λd77806a850a8), λ15cbd8abd04b = cp(λd77806a850a8).prefix;
    return λ8be65daefca1.pathname.startsWith(λ15cbd8abd04b) ? self.__uv$config.decodeUrl(λ8be65daefca1.pathname.slice(λ15cbd8abd04b.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λd77806a850a8 => {
  const λ8be65daefca1 = λd77806a850a8.data;
  if ("nyx:destroy-proxy-session" !== λ8be65daefca1?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ8be65daefca1.sessionId || ""))) return;
  const λ15cbd8abd04b = String(λ8be65daefca1.sessionId);
  sp.delete(λ15cbd8abd04b), λd77806a850a8.waitUntil?.(up(`__nyx_uv_tab_${λ15cbd8abd04b}`));
}), self.addEventListener("install", λd77806a850a8 => {
  λd77806a850a8.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λd77806a850a8 => {
  λd77806a850a8.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λd77806a850a8) {
  const λ8be65daefca1 = String(λd77806a850a8 || "").toLowerCase();
  return dp.some(λd77806a850a8 => λ8be65daefca1 === λd77806a850a8 || λ8be65daefca1.endsWith(`.${λd77806a850a8}`));
}

function mp(λd77806a850a8) {
  const λ8be65daefca1 = lp(λd77806a850a8.request.url);
  if (!λ8be65daefca1) return !1;
  try {
    const λd77806a850a8 = new URL(λ8be65daefca1);
    return pp(λd77806a850a8.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λd77806a850a8.pathname) || "serve.app.playsaurus.com" === λd77806a850a8.hostname && /\/ad-campaigns\//i.test(λd77806a850a8.pathname);
  } catch {
    return !1;
  }
}

function fp(λd77806a850a8) {
  const λ8be65daefca1 = λd77806a850a8.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λd77806a850a8.request.destination) || /javascript|ecmascript/i.test(λ8be65daefca1) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λd77806a850a8.request.destination || /text\/css/i.test(λ8be65daefca1) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λd77806a850a8.request.destination || "iframe" === λd77806a850a8.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λd77806a850a8) {
  if (![ "script", "worker", "sharedworker" ].includes(λd77806a850a8.request.destination)) return !1;
  try {
    const λ8be65daefca1 = new URL(lp(λd77806a850a8.request.url));
    return λ8be65daefca1.hostname.endsWith("cookielaw.org") || λ8be65daefca1.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λd77806a850a8) {
  const λ8be65daefca1 = λd77806a850a8.request.headers.get("accept") || "", λ15cbd8abd04b = new URL(λd77806a850a8.request.url).pathname, λ81d77a3c87bb = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ15cbd8abd04b);
  return [ "script", "worker", "sharedworker" ].includes(λd77806a850a8.request.destination) || /javascript|ecmascript/i.test(λ8be65daefca1) || λ81d77a3c87bb ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λd77806a850a8) {
  if ("style" === λd77806a850a8.request.destination) return !0;
  const λ8be65daefca1 = λd77806a850a8.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ8be65daefca1)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λd77806a850a8.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λd77806a850a8) {
  if ([ "script", "worker", "sharedworker" ].includes(λd77806a850a8.request.destination)) return !0;
  const λ8be65daefca1 = λd77806a850a8.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ8be65daefca1)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λd77806a850a8.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λd77806a850a8) {
  return yp(λd77806a850a8) || wp(λd77806a850a8);
}

function jp(λd77806a850a8) {
  const λ8be65daefca1 = λd77806a850a8?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ8be65daefca1);
}

async function xp(λd77806a850a8, λ8be65daefca1) {
  if (!vp(λd77806a850a8)) return λ8be65daefca1.fetch(λd77806a850a8);
  let λ15cbd8abd04b = null, λ81d77a3c87bb = null;
  for (let λe770f86affce = 0; λe770f86affce < ap.length; λe770f86affce += 1) {
    const λ02ac43da762c = ap[λe770f86affce];
    λ02ac43da762c && await new Promise(λd77806a850a8 => setTimeout(λd77806a850a8, λ02ac43da762c));
    try {
      if (λ15cbd8abd04b = await λ8be65daefca1.fetch(λd77806a850a8), λ81d77a3c87bb = null, 
      λ15cbd8abd04b.status < 400 && !jp(λ15cbd8abd04b)) return λ15cbd8abd04b;
    } catch (λd77806a850a8) {
      λ81d77a3c87bb = λd77806a850a8;
    }
  }
  if (λ15cbd8abd04b) return λ15cbd8abd04b;
  throw λ81d77a3c87bb || new Error("UV asset request failed");
}

async function _p(λd77806a850a8, λ8be65daefca1) {
  if (!wp(λd77806a850a8) || λ8be65daefca1.status >= 400) return λ8be65daefca1;
  let λ15cbd8abd04b;
  try {
    λ15cbd8abd04b = new URL(lp(λd77806a850a8.request.url));
  } catch {
    return λ8be65daefca1;
  }
  if (!/unityloader\.js$/i.test(λ15cbd8abd04b.pathname)) return λ8be65daefca1;
  const λ81d77a3c87bb = await λ8be65daefca1.clone().text().catch(() => ""), λe770f86affce = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ81d77a3c87bb.includes(λe770f86affce)) return λ8be65daefca1;
  const λ02ac43da762c = new Headers(λ8be65daefca1.headers);
  λ02ac43da762c.delete("content-length"), λ02ac43da762c.delete("content-encoding"), 
  λ02ac43da762c.set("cache-control", "no-store");
  const λ2e5fe0dcdc54 = `${λe770f86affce}(e.data.decompressed)`, λ3be50df42397 = λ81d77a3c87bb.replaceAll(λ2e5fe0dcdc54, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λe770f86affce, "this.callbacks[e.data.id]");
  return new Response(λ3be50df42397, {
    status: λ8be65daefca1.status,
    statusText: λ8be65daefca1.statusText,
    headers: λ02ac43da762c
  });
}

function bp(λd77806a850a8) {
  const λ8be65daefca1 = λd77806a850a8.request.headers.get("accept") || "", λ15cbd8abd04b = new URL(λd77806a850a8.request.url).pathname;
  let λ81d77a3c87bb = "";
  try {
    λ81d77a3c87bb = new URL(lp(λd77806a850a8.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λd77806a850a8.request.destination) || /javascript|ecmascript|text\/css/i.test(λ8be65daefca1) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ15cbd8abd04b) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ81d77a3c87bb);
}

function qp(λd77806a850a8) {
  return /^\s*</.test(λd77806a850a8) || /^\s*\)\]\}'/.test(λd77806a850a8) || /^\s*\)\]/.test(λd77806a850a8);
}

async function kp(λd77806a850a8) {
  if (mp(λd77806a850a8)) return fp(λd77806a850a8);
  const {engine: λ8be65daefca1} = ip(λd77806a850a8.request.url);
  if (hp(λd77806a850a8)) return gp(λd77806a850a8);
  const λ15cbd8abd04b = await _p(λd77806a850a8, await xp(λd77806a850a8, λ8be65daefca1)), λ81d77a3c87bb = λ15cbd8abd04b.headers.get("content-type") || "", λe770f86affce = bp(λd77806a850a8), λ02ac43da762c = λe770f86affce && (λ81d77a3c87bb.includes("text/html") || λ81d77a3c87bb.includes("application/json") || λ81d77a3c87bb.includes("text/json"));
  return λe770f86affce && λ02ac43da762c ? Response.error() : λe770f86affce && λ15cbd8abd04b.status >= 400 ? λ15cbd8abd04b : λe770f86affce && qp(await λ15cbd8abd04b.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λd77806a850a8.request.destination), 
  λ15cbd8abd04b);
}

self.addEventListener("fetch", λd77806a850a8 => {
  λd77806a850a8.respondWith(kp(λd77806a850a8).catch(() => Response.error()));
});
