importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λba6f22383c22 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ931fffcd3e33 => {
    "function" == typeof λ931fffcd3e33 && queueMicrotask(() => λ931fffcd3e33(λba6f22383c22));
  }, λ931fffcd3e33 = Object.freeze({
    getCurrentPosition(λba6f22383c22, λ931fffcd3e33) {
      t(λ931fffcd3e33);
    },
    watchPosition: (λba6f22383c22, λ931fffcd3e33) => (t(λ931fffcd3e33), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ931fffcd3e33
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ931fffcd3e33
    });
  } catch {}
  const λfce9f35d9910 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λfce9f35d9910) try {
    navigator.permissions.query = λba6f22383c22 => {
      if ("geolocation" === String(λba6f22383c22?.name || "").toLowerCase()) {
        const λba6f22383c22 = new EventTarget;
        return Object.defineProperties(λba6f22383c22, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λba6f22383c22);
      }
      return λfce9f35d9910(λba6f22383c22);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λba6f22383c22) {
  try {
    const λ931fffcd3e33 = new URL(λba6f22383c22).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ931fffcd3e33 ? {
      id: λ931fffcd3e33[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ931fffcd3e33[1]}/`,
      dbName: `__nyx_uv_tab_${λ931fffcd3e33[1]}`
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

function ip(λba6f22383c22) {
  const λ931fffcd3e33 = cp(λba6f22383c22), λfce9f35d9910 = λ931fffcd3e33.id || "legacy";
  let λ00117f559f14 = sp.get(λfce9f35d9910);
  if (!λ00117f559f14) {
    const λba6f22383c22 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λba6f22383c22.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ00117f559f14 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ931fffcd3e33.prefix,
      cookieDbName: λ931fffcd3e33.dbName,
      inject: λba6f22383c22
    }), sp.set(λfce9f35d9910, λ00117f559f14);
  }
  return {
    engine: λ00117f559f14,
    session: λ931fffcd3e33
  };
}

function up(λba6f22383c22) {
  return new Promise(λ931fffcd3e33 => {
    let λfce9f35d9910;
    try {
      λfce9f35d9910 = indexedDB.open(λba6f22383c22);
    } catch {
      return void λ931fffcd3e33(!1);
    }
    λfce9f35d9910.onerror = () => λ931fffcd3e33(!1), λfce9f35d9910.onupgradeneeded = () => {}, 
    λfce9f35d9910.onsuccess = () => {
      const λba6f22383c22 = λfce9f35d9910.result;
      if (!λba6f22383c22.objectStoreNames.contains("cookies")) return λba6f22383c22.close(), 
      void λ931fffcd3e33(!0);
      const λ00117f559f14 = λba6f22383c22.transaction("cookies", "readwrite");
      λ00117f559f14.objectStore("cookies").clear(), λ00117f559f14.oncomplete = () => {
        λba6f22383c22.close(), λ931fffcd3e33(!0);
      }, λ00117f559f14.onerror = () => {
        λba6f22383c22.close(), λ931fffcd3e33(!1);
      }, λ00117f559f14.onabort = () => {
        λba6f22383c22.close(), λ931fffcd3e33(!1);
      };
    };
  });
}

function lp(λba6f22383c22) {
  try {
    const λ931fffcd3e33 = new URL(λba6f22383c22), λfce9f35d9910 = cp(λba6f22383c22).prefix;
    return λ931fffcd3e33.pathname.startsWith(λfce9f35d9910) ? self.__uv$config.decodeUrl(λ931fffcd3e33.pathname.slice(λfce9f35d9910.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λba6f22383c22 => {
  const λ931fffcd3e33 = λba6f22383c22.data;
  if ("nyx:destroy-proxy-session" !== λ931fffcd3e33?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ931fffcd3e33.sessionId || ""))) return;
  const λfce9f35d9910 = String(λ931fffcd3e33.sessionId);
  sp.delete(λfce9f35d9910), λba6f22383c22.waitUntil?.(up(`__nyx_uv_tab_${λfce9f35d9910}`));
}), self.addEventListener("install", λba6f22383c22 => {
  λba6f22383c22.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λba6f22383c22 => {
  λba6f22383c22.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λba6f22383c22) {
  const λ931fffcd3e33 = String(λba6f22383c22 || "").toLowerCase();
  return dp.some(λba6f22383c22 => λ931fffcd3e33 === λba6f22383c22 || λ931fffcd3e33.endsWith(`.${λba6f22383c22}`));
}

function mp(λba6f22383c22) {
  const λ931fffcd3e33 = lp(λba6f22383c22.request.url);
  if (!λ931fffcd3e33) return !1;
  try {
    const λba6f22383c22 = new URL(λ931fffcd3e33);
    return pp(λba6f22383c22.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λba6f22383c22.pathname) || "serve.app.playsaurus.com" === λba6f22383c22.hostname && /\/ad-campaigns\//i.test(λba6f22383c22.pathname);
  } catch {
    return !1;
  }
}

function fp(λba6f22383c22) {
  const λ931fffcd3e33 = λba6f22383c22.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λba6f22383c22.request.destination) || /javascript|ecmascript/i.test(λ931fffcd3e33) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λba6f22383c22.request.destination || /text\/css/i.test(λ931fffcd3e33) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λba6f22383c22.request.destination || "iframe" === λba6f22383c22.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λba6f22383c22) {
  if (![ "script", "worker", "sharedworker" ].includes(λba6f22383c22.request.destination)) return !1;
  try {
    const λ931fffcd3e33 = new URL(lp(λba6f22383c22.request.url));
    return λ931fffcd3e33.hostname.endsWith("cookielaw.org") || λ931fffcd3e33.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λba6f22383c22) {
  const λ931fffcd3e33 = λba6f22383c22.request.headers.get("accept") || "", λfce9f35d9910 = new URL(λba6f22383c22.request.url).pathname, λ00117f559f14 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λfce9f35d9910);
  return [ "script", "worker", "sharedworker" ].includes(λba6f22383c22.request.destination) || /javascript|ecmascript/i.test(λ931fffcd3e33) || λ00117f559f14 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λba6f22383c22) {
  if ("style" === λba6f22383c22.request.destination) return !0;
  const λ931fffcd3e33 = λba6f22383c22.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ931fffcd3e33)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λba6f22383c22.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λba6f22383c22) {
  if ([ "script", "worker", "sharedworker" ].includes(λba6f22383c22.request.destination)) return !0;
  const λ931fffcd3e33 = λba6f22383c22.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ931fffcd3e33)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λba6f22383c22.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λba6f22383c22) {
  return yp(λba6f22383c22) || wp(λba6f22383c22);
}

function jp(λba6f22383c22) {
  const λ931fffcd3e33 = λba6f22383c22?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ931fffcd3e33);
}

async function xp(λba6f22383c22, λ931fffcd3e33) {
  if (!vp(λba6f22383c22)) return λ931fffcd3e33.fetch(λba6f22383c22);
  let λfce9f35d9910 = null, λ00117f559f14 = null;
  for (let λ61ec9b358a4b = 0; λ61ec9b358a4b < ap.length; λ61ec9b358a4b += 1) {
    const λ2cc3e00a6ea8 = ap[λ61ec9b358a4b];
    λ2cc3e00a6ea8 && await new Promise(λba6f22383c22 => setTimeout(λba6f22383c22, λ2cc3e00a6ea8));
    try {
      if (λfce9f35d9910 = await λ931fffcd3e33.fetch(λba6f22383c22), λ00117f559f14 = null, 
      λfce9f35d9910.status < 400 && !jp(λfce9f35d9910)) return λfce9f35d9910;
    } catch (λba6f22383c22) {
      λ00117f559f14 = λba6f22383c22;
    }
  }
  if (λfce9f35d9910) return λfce9f35d9910;
  throw λ00117f559f14 || new Error("UV asset request failed");
}

async function _p(λba6f22383c22, λ931fffcd3e33) {
  if (!wp(λba6f22383c22) || λ931fffcd3e33.status >= 400) return λ931fffcd3e33;
  let λfce9f35d9910;
  try {
    λfce9f35d9910 = new URL(lp(λba6f22383c22.request.url));
  } catch {
    return λ931fffcd3e33;
  }
  if (!/unityloader\.js$/i.test(λfce9f35d9910.pathname)) return λ931fffcd3e33;
  const λ00117f559f14 = await λ931fffcd3e33.clone().text().catch(() => ""), λ61ec9b358a4b = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ00117f559f14.includes(λ61ec9b358a4b)) return λ931fffcd3e33;
  const λ2cc3e00a6ea8 = new Headers(λ931fffcd3e33.headers);
  λ2cc3e00a6ea8.delete("content-length"), λ2cc3e00a6ea8.delete("content-encoding"), 
  λ2cc3e00a6ea8.set("cache-control", "no-store");
  const λ03b7514e2b84 = `${λ61ec9b358a4b}(e.data.decompressed)`, λ839613ef2007 = λ00117f559f14.replaceAll(λ03b7514e2b84, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ61ec9b358a4b, "this.callbacks[e.data.id]");
  return new Response(λ839613ef2007, {
    status: λ931fffcd3e33.status,
    statusText: λ931fffcd3e33.statusText,
    headers: λ2cc3e00a6ea8
  });
}

function bp(λba6f22383c22) {
  const λ931fffcd3e33 = λba6f22383c22.request.headers.get("accept") || "", λfce9f35d9910 = new URL(λba6f22383c22.request.url).pathname;
  let λ00117f559f14 = "";
  try {
    λ00117f559f14 = new URL(lp(λba6f22383c22.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λba6f22383c22.request.destination) || /javascript|ecmascript|text\/css/i.test(λ931fffcd3e33) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λfce9f35d9910) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ00117f559f14);
}

function qp(λba6f22383c22) {
  return /^\s*</.test(λba6f22383c22) || /^\s*\)\]\}'/.test(λba6f22383c22) || /^\s*\)\]/.test(λba6f22383c22);
}

async function kp(λba6f22383c22) {
  if (mp(λba6f22383c22)) return fp(λba6f22383c22);
  const {engine: λ931fffcd3e33} = ip(λba6f22383c22.request.url);
  if (hp(λba6f22383c22)) return gp(λba6f22383c22);
  const λfce9f35d9910 = await _p(λba6f22383c22, await xp(λba6f22383c22, λ931fffcd3e33)), λ00117f559f14 = λfce9f35d9910.headers.get("content-type") || "", λ61ec9b358a4b = bp(λba6f22383c22), λ2cc3e00a6ea8 = λ61ec9b358a4b && (λ00117f559f14.includes("text/html") || λ00117f559f14.includes("application/json") || λ00117f559f14.includes("text/json"));
  return λ61ec9b358a4b && λ2cc3e00a6ea8 ? Response.error() : λ61ec9b358a4b && λfce9f35d9910.status >= 400 ? λfce9f35d9910 : λ61ec9b358a4b && qp(await λfce9f35d9910.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λba6f22383c22.request.destination), 
  λfce9f35d9910);
}

self.addEventListener("fetch", λba6f22383c22 => {
  λba6f22383c22.respondWith(kp(λba6f22383c22).catch(() => Response.error()));
});
