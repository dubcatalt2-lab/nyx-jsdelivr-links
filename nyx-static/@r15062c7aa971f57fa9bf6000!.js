importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ4227a6d4f471 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ47505ce3cfe9 => {
    "function" == typeof λ47505ce3cfe9 && queueMicrotask(() => λ47505ce3cfe9(λ4227a6d4f471));
  }, λ47505ce3cfe9 = Object.freeze({
    getCurrentPosition(λ4227a6d4f471, λ47505ce3cfe9) {
      t(λ47505ce3cfe9);
    },
    watchPosition: (λ4227a6d4f471, λ47505ce3cfe9) => (t(λ47505ce3cfe9), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ47505ce3cfe9
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ47505ce3cfe9
    });
  } catch {}
  const λ22cc20ed5156 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ22cc20ed5156) try {
    navigator.permissions.query = λ4227a6d4f471 => {
      if ("geolocation" === String(λ4227a6d4f471?.name || "").toLowerCase()) {
        const λ4227a6d4f471 = new EventTarget;
        return Object.defineProperties(λ4227a6d4f471, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ4227a6d4f471);
      }
      return λ22cc20ed5156(λ4227a6d4f471);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ4227a6d4f471) {
  try {
    const λ47505ce3cfe9 = new URL(λ4227a6d4f471).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ47505ce3cfe9 ? {
      id: λ47505ce3cfe9[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ47505ce3cfe9[1]}/`,
      dbName: `__nyx_uv_tab_${λ47505ce3cfe9[1]}`
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

function ip(λ4227a6d4f471) {
  const λ47505ce3cfe9 = cp(λ4227a6d4f471), λ22cc20ed5156 = λ47505ce3cfe9.id || "legacy";
  let λad5ce034b3ed = sp.get(λ22cc20ed5156);
  if (!λad5ce034b3ed) {
    const λ4227a6d4f471 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ4227a6d4f471.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λad5ce034b3ed = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ47505ce3cfe9.prefix,
      cookieDbName: λ47505ce3cfe9.dbName,
      inject: λ4227a6d4f471
    }), sp.set(λ22cc20ed5156, λad5ce034b3ed);
  }
  return {
    engine: λad5ce034b3ed,
    session: λ47505ce3cfe9
  };
}

function up(λ4227a6d4f471) {
  return new Promise(λ47505ce3cfe9 => {
    let λ22cc20ed5156;
    try {
      λ22cc20ed5156 = indexedDB.open(λ4227a6d4f471);
    } catch {
      return void λ47505ce3cfe9(!1);
    }
    λ22cc20ed5156.onerror = () => λ47505ce3cfe9(!1), λ22cc20ed5156.onupgradeneeded = () => {}, 
    λ22cc20ed5156.onsuccess = () => {
      const λ4227a6d4f471 = λ22cc20ed5156.result;
      if (!λ4227a6d4f471.objectStoreNames.contains("cookies")) return λ4227a6d4f471.close(), 
      void λ47505ce3cfe9(!0);
      const λad5ce034b3ed = λ4227a6d4f471.transaction("cookies", "readwrite");
      λad5ce034b3ed.objectStore("cookies").clear(), λad5ce034b3ed.oncomplete = () => {
        λ4227a6d4f471.close(), λ47505ce3cfe9(!0);
      }, λad5ce034b3ed.onerror = () => {
        λ4227a6d4f471.close(), λ47505ce3cfe9(!1);
      }, λad5ce034b3ed.onabort = () => {
        λ4227a6d4f471.close(), λ47505ce3cfe9(!1);
      };
    };
  });
}

function lp(λ4227a6d4f471) {
  try {
    const λ47505ce3cfe9 = new URL(λ4227a6d4f471), λ22cc20ed5156 = cp(λ4227a6d4f471).prefix;
    return λ47505ce3cfe9.pathname.startsWith(λ22cc20ed5156) ? self.__uv$config.decodeUrl(λ47505ce3cfe9.pathname.slice(λ22cc20ed5156.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ4227a6d4f471 => {
  const λ47505ce3cfe9 = λ4227a6d4f471.data;
  if ("nyx:destroy-proxy-session" !== λ47505ce3cfe9?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ47505ce3cfe9.sessionId || ""))) return;
  const λ22cc20ed5156 = String(λ47505ce3cfe9.sessionId);
  sp.delete(λ22cc20ed5156), λ4227a6d4f471.waitUntil?.(up(`__nyx_uv_tab_${λ22cc20ed5156}`));
}), self.addEventListener("install", λ4227a6d4f471 => {
  λ4227a6d4f471.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ4227a6d4f471 => {
  λ4227a6d4f471.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ4227a6d4f471) {
  const λ47505ce3cfe9 = String(λ4227a6d4f471 || "").toLowerCase();
  return dp.some(λ4227a6d4f471 => λ47505ce3cfe9 === λ4227a6d4f471 || λ47505ce3cfe9.endsWith(`.${λ4227a6d4f471}`));
}

function mp(λ4227a6d4f471) {
  const λ47505ce3cfe9 = lp(λ4227a6d4f471.request.url);
  if (!λ47505ce3cfe9) return !1;
  try {
    const λ4227a6d4f471 = new URL(λ47505ce3cfe9);
    return pp(λ4227a6d4f471.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ4227a6d4f471.pathname) || "serve.app.playsaurus.com" === λ4227a6d4f471.hostname && /\/ad-campaigns\//i.test(λ4227a6d4f471.pathname);
  } catch {
    return !1;
  }
}

function fp(λ4227a6d4f471) {
  const λ47505ce3cfe9 = λ4227a6d4f471.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ4227a6d4f471.request.destination) || /javascript|ecmascript/i.test(λ47505ce3cfe9) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ4227a6d4f471.request.destination || /text\/css/i.test(λ47505ce3cfe9) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ4227a6d4f471.request.destination || "iframe" === λ4227a6d4f471.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ4227a6d4f471) {
  if (![ "script", "worker", "sharedworker" ].includes(λ4227a6d4f471.request.destination)) return !1;
  try {
    const λ47505ce3cfe9 = new URL(lp(λ4227a6d4f471.request.url));
    return λ47505ce3cfe9.hostname.endsWith("cookielaw.org") || λ47505ce3cfe9.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ4227a6d4f471) {
  const λ47505ce3cfe9 = λ4227a6d4f471.request.headers.get("accept") || "", λ22cc20ed5156 = new URL(λ4227a6d4f471.request.url).pathname, λad5ce034b3ed = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ22cc20ed5156);
  return [ "script", "worker", "sharedworker" ].includes(λ4227a6d4f471.request.destination) || /javascript|ecmascript/i.test(λ47505ce3cfe9) || λad5ce034b3ed ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ4227a6d4f471) {
  if ("style" === λ4227a6d4f471.request.destination) return !0;
  const λ47505ce3cfe9 = λ4227a6d4f471.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ47505ce3cfe9)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ4227a6d4f471.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ4227a6d4f471) {
  if ([ "script", "worker", "sharedworker" ].includes(λ4227a6d4f471.request.destination)) return !0;
  const λ47505ce3cfe9 = λ4227a6d4f471.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ47505ce3cfe9)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ4227a6d4f471.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ4227a6d4f471) {
  return yp(λ4227a6d4f471) || wp(λ4227a6d4f471);
}

function jp(λ4227a6d4f471) {
  const λ47505ce3cfe9 = λ4227a6d4f471?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ47505ce3cfe9);
}

async function xp(λ4227a6d4f471, λ47505ce3cfe9) {
  if (!vp(λ4227a6d4f471)) return λ47505ce3cfe9.fetch(λ4227a6d4f471);
  let λ22cc20ed5156 = null, λad5ce034b3ed = null;
  for (let λcb4ea24bb96f = 0; λcb4ea24bb96f < ap.length; λcb4ea24bb96f += 1) {
    const λceb1f0c5d1bc = ap[λcb4ea24bb96f];
    λceb1f0c5d1bc && await new Promise(λ4227a6d4f471 => setTimeout(λ4227a6d4f471, λceb1f0c5d1bc));
    try {
      if (λ22cc20ed5156 = await λ47505ce3cfe9.fetch(λ4227a6d4f471), λad5ce034b3ed = null, 
      λ22cc20ed5156.status < 400 && !jp(λ22cc20ed5156)) return λ22cc20ed5156;
    } catch (λ4227a6d4f471) {
      λad5ce034b3ed = λ4227a6d4f471;
    }
  }
  if (λ22cc20ed5156) return λ22cc20ed5156;
  throw λad5ce034b3ed || new Error("UV asset request failed");
}

async function _p(λ4227a6d4f471, λ47505ce3cfe9) {
  if (!wp(λ4227a6d4f471) || λ47505ce3cfe9.status >= 400) return λ47505ce3cfe9;
  let λ22cc20ed5156;
  try {
    λ22cc20ed5156 = new URL(lp(λ4227a6d4f471.request.url));
  } catch {
    return λ47505ce3cfe9;
  }
  if (!/unityloader\.js$/i.test(λ22cc20ed5156.pathname)) return λ47505ce3cfe9;
  const λad5ce034b3ed = await λ47505ce3cfe9.clone().text().catch(() => ""), λcb4ea24bb96f = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λad5ce034b3ed.includes(λcb4ea24bb96f)) return λ47505ce3cfe9;
  const λceb1f0c5d1bc = new Headers(λ47505ce3cfe9.headers);
  λceb1f0c5d1bc.delete("content-length"), λceb1f0c5d1bc.delete("content-encoding"), 
  λceb1f0c5d1bc.set("cache-control", "no-store");
  const λ883d42a9d7c6 = `${λcb4ea24bb96f}(e.data.decompressed)`, λ28adbca925cc = λad5ce034b3ed.replaceAll(λ883d42a9d7c6, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λcb4ea24bb96f, "this.callbacks[e.data.id]");
  return new Response(λ28adbca925cc, {
    status: λ47505ce3cfe9.status,
    statusText: λ47505ce3cfe9.statusText,
    headers: λceb1f0c5d1bc
  });
}

function bp(λ4227a6d4f471) {
  const λ47505ce3cfe9 = λ4227a6d4f471.request.headers.get("accept") || "", λ22cc20ed5156 = new URL(λ4227a6d4f471.request.url).pathname;
  let λad5ce034b3ed = "";
  try {
    λad5ce034b3ed = new URL(lp(λ4227a6d4f471.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ4227a6d4f471.request.destination) || /javascript|ecmascript|text\/css/i.test(λ47505ce3cfe9) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ22cc20ed5156) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λad5ce034b3ed);
}

function qp(λ4227a6d4f471) {
  return /^\s*</.test(λ4227a6d4f471) || /^\s*\)\]\}'/.test(λ4227a6d4f471) || /^\s*\)\]/.test(λ4227a6d4f471);
}

async function kp(λ4227a6d4f471) {
  if (mp(λ4227a6d4f471)) return fp(λ4227a6d4f471);
  const {engine: λ47505ce3cfe9} = ip(λ4227a6d4f471.request.url);
  if (hp(λ4227a6d4f471)) return gp(λ4227a6d4f471);
  const λ22cc20ed5156 = await _p(λ4227a6d4f471, await xp(λ4227a6d4f471, λ47505ce3cfe9)), λad5ce034b3ed = λ22cc20ed5156.headers.get("content-type") || "", λcb4ea24bb96f = bp(λ4227a6d4f471), λceb1f0c5d1bc = λcb4ea24bb96f && (λad5ce034b3ed.includes("text/html") || λad5ce034b3ed.includes("application/json") || λad5ce034b3ed.includes("text/json"));
  return λcb4ea24bb96f && λceb1f0c5d1bc ? Response.error() : λcb4ea24bb96f && λ22cc20ed5156.status >= 400 ? λ22cc20ed5156 : λcb4ea24bb96f && qp(await λ22cc20ed5156.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ4227a6d4f471.request.destination), 
  λ22cc20ed5156);
}

self.addEventListener("fetch", λ4227a6d4f471 => {
  λ4227a6d4f471.respondWith(kp(λ4227a6d4f471).catch(() => Response.error()));
});
