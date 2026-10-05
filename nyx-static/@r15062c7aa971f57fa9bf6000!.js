importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ1d29c19f59c1 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ7948112d64c6 => {
    "function" == typeof λ7948112d64c6 && queueMicrotask(() => λ7948112d64c6(λ1d29c19f59c1));
  }, λ7948112d64c6 = Object.freeze({
    getCurrentPosition(λ1d29c19f59c1, λ7948112d64c6) {
      t(λ7948112d64c6);
    },
    watchPosition: (λ1d29c19f59c1, λ7948112d64c6) => (t(λ7948112d64c6), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ7948112d64c6
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ7948112d64c6
    });
  } catch {}
  const λ38257f260272 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ38257f260272) try {
    navigator.permissions.query = λ1d29c19f59c1 => {
      if ("geolocation" === String(λ1d29c19f59c1?.name || "").toLowerCase()) {
        const λ1d29c19f59c1 = new EventTarget;
        return Object.defineProperties(λ1d29c19f59c1, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ1d29c19f59c1);
      }
      return λ38257f260272(λ1d29c19f59c1);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ1d29c19f59c1) {
  try {
    const λ7948112d64c6 = new URL(λ1d29c19f59c1).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ7948112d64c6 ? {
      id: λ7948112d64c6[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ7948112d64c6[1]}/`,
      dbName: `__nyx_uv_tab_${λ7948112d64c6[1]}`
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

function ip(λ1d29c19f59c1) {
  const λ7948112d64c6 = cp(λ1d29c19f59c1), λ38257f260272 = λ7948112d64c6.id || "legacy";
  let λ3243effcbbe1 = sp.get(λ38257f260272);
  if (!λ3243effcbbe1) {
    const λ1d29c19f59c1 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ1d29c19f59c1.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ3243effcbbe1 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ7948112d64c6.prefix,
      cookieDbName: λ7948112d64c6.dbName,
      inject: λ1d29c19f59c1
    }), sp.set(λ38257f260272, λ3243effcbbe1);
  }
  return {
    engine: λ3243effcbbe1,
    session: λ7948112d64c6
  };
}

function up(λ1d29c19f59c1) {
  return new Promise(λ7948112d64c6 => {
    let λ38257f260272;
    try {
      λ38257f260272 = indexedDB.open(λ1d29c19f59c1);
    } catch {
      return void λ7948112d64c6(!1);
    }
    λ38257f260272.onerror = () => λ7948112d64c6(!1), λ38257f260272.onupgradeneeded = () => {}, 
    λ38257f260272.onsuccess = () => {
      const λ1d29c19f59c1 = λ38257f260272.result;
      if (!λ1d29c19f59c1.objectStoreNames.contains("cookies")) return λ1d29c19f59c1.close(), 
      void λ7948112d64c6(!0);
      const λ3243effcbbe1 = λ1d29c19f59c1.transaction("cookies", "readwrite");
      λ3243effcbbe1.objectStore("cookies").clear(), λ3243effcbbe1.oncomplete = () => {
        λ1d29c19f59c1.close(), λ7948112d64c6(!0);
      }, λ3243effcbbe1.onerror = () => {
        λ1d29c19f59c1.close(), λ7948112d64c6(!1);
      }, λ3243effcbbe1.onabort = () => {
        λ1d29c19f59c1.close(), λ7948112d64c6(!1);
      };
    };
  });
}

function lp(λ1d29c19f59c1) {
  try {
    const λ7948112d64c6 = new URL(λ1d29c19f59c1), λ38257f260272 = cp(λ1d29c19f59c1).prefix;
    return λ7948112d64c6.pathname.startsWith(λ38257f260272) ? self.__uv$config.decodeUrl(λ7948112d64c6.pathname.slice(λ38257f260272.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ1d29c19f59c1 => {
  const λ7948112d64c6 = λ1d29c19f59c1.data;
  if ("nyx:destroy-proxy-session" !== λ7948112d64c6?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ7948112d64c6.sessionId || ""))) return;
  const λ38257f260272 = String(λ7948112d64c6.sessionId);
  sp.delete(λ38257f260272), λ1d29c19f59c1.waitUntil?.(up(`__nyx_uv_tab_${λ38257f260272}`));
}), self.addEventListener("install", λ1d29c19f59c1 => {
  λ1d29c19f59c1.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ1d29c19f59c1 => {
  λ1d29c19f59c1.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ1d29c19f59c1) {
  const λ7948112d64c6 = String(λ1d29c19f59c1 || "").toLowerCase();
  return dp.some(λ1d29c19f59c1 => λ7948112d64c6 === λ1d29c19f59c1 || λ7948112d64c6.endsWith(`.${λ1d29c19f59c1}`));
}

function mp(λ1d29c19f59c1) {
  const λ7948112d64c6 = lp(λ1d29c19f59c1.request.url);
  if (!λ7948112d64c6) return !1;
  try {
    const λ1d29c19f59c1 = new URL(λ7948112d64c6);
    return pp(λ1d29c19f59c1.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ1d29c19f59c1.pathname) || "serve.app.playsaurus.com" === λ1d29c19f59c1.hostname && /\/ad-campaigns\//i.test(λ1d29c19f59c1.pathname);
  } catch {
    return !1;
  }
}

function fp(λ1d29c19f59c1) {
  const λ7948112d64c6 = λ1d29c19f59c1.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ1d29c19f59c1.request.destination) || /javascript|ecmascript/i.test(λ7948112d64c6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ1d29c19f59c1.request.destination || /text\/css/i.test(λ7948112d64c6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ1d29c19f59c1.request.destination || "iframe" === λ1d29c19f59c1.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ1d29c19f59c1) {
  if (![ "script", "worker", "sharedworker" ].includes(λ1d29c19f59c1.request.destination)) return !1;
  try {
    const λ7948112d64c6 = new URL(lp(λ1d29c19f59c1.request.url));
    return λ7948112d64c6.hostname.endsWith("cookielaw.org") || λ7948112d64c6.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ1d29c19f59c1) {
  const λ7948112d64c6 = λ1d29c19f59c1.request.headers.get("accept") || "", λ38257f260272 = new URL(λ1d29c19f59c1.request.url).pathname, λ3243effcbbe1 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ38257f260272);
  return [ "script", "worker", "sharedworker" ].includes(λ1d29c19f59c1.request.destination) || /javascript|ecmascript/i.test(λ7948112d64c6) || λ3243effcbbe1 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ1d29c19f59c1) {
  if ("style" === λ1d29c19f59c1.request.destination) return !0;
  const λ7948112d64c6 = λ1d29c19f59c1.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ7948112d64c6)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ1d29c19f59c1.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ1d29c19f59c1) {
  if ([ "script", "worker", "sharedworker" ].includes(λ1d29c19f59c1.request.destination)) return !0;
  const λ7948112d64c6 = λ1d29c19f59c1.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ7948112d64c6)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ1d29c19f59c1.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ1d29c19f59c1) {
  return yp(λ1d29c19f59c1) || wp(λ1d29c19f59c1);
}

function jp(λ1d29c19f59c1) {
  const λ7948112d64c6 = λ1d29c19f59c1?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ7948112d64c6);
}

async function xp(λ1d29c19f59c1, λ7948112d64c6) {
  if (!vp(λ1d29c19f59c1)) return λ7948112d64c6.fetch(λ1d29c19f59c1);
  let λ38257f260272 = null, λ3243effcbbe1 = null;
  for (let λ2062f0a571f1 = 0; λ2062f0a571f1 < ap.length; λ2062f0a571f1 += 1) {
    const λ06f4d1471e82 = ap[λ2062f0a571f1];
    λ06f4d1471e82 && await new Promise(λ1d29c19f59c1 => setTimeout(λ1d29c19f59c1, λ06f4d1471e82));
    try {
      if (λ38257f260272 = await λ7948112d64c6.fetch(λ1d29c19f59c1), λ3243effcbbe1 = null, 
      λ38257f260272.status < 400 && !jp(λ38257f260272)) return λ38257f260272;
    } catch (λ1d29c19f59c1) {
      λ3243effcbbe1 = λ1d29c19f59c1;
    }
  }
  if (λ38257f260272) return λ38257f260272;
  throw λ3243effcbbe1 || new Error("UV asset request failed");
}

async function _p(λ1d29c19f59c1, λ7948112d64c6) {
  if (!wp(λ1d29c19f59c1) || λ7948112d64c6.status >= 400) return λ7948112d64c6;
  let λ38257f260272;
  try {
    λ38257f260272 = new URL(lp(λ1d29c19f59c1.request.url));
  } catch {
    return λ7948112d64c6;
  }
  if (!/unityloader\.js$/i.test(λ38257f260272.pathname)) return λ7948112d64c6;
  const λ3243effcbbe1 = await λ7948112d64c6.clone().text().catch(() => ""), λ2062f0a571f1 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ3243effcbbe1.includes(λ2062f0a571f1)) return λ7948112d64c6;
  const λ06f4d1471e82 = new Headers(λ7948112d64c6.headers);
  λ06f4d1471e82.delete("content-length"), λ06f4d1471e82.delete("content-encoding"), 
  λ06f4d1471e82.set("cache-control", "no-store");
  const λ155315ba83f4 = `${λ2062f0a571f1}(e.data.decompressed)`, λ8bd3ab322ec0 = λ3243effcbbe1.replaceAll(λ155315ba83f4, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ2062f0a571f1, "this.callbacks[e.data.id]");
  return new Response(λ8bd3ab322ec0, {
    status: λ7948112d64c6.status,
    statusText: λ7948112d64c6.statusText,
    headers: λ06f4d1471e82
  });
}

function bp(λ1d29c19f59c1) {
  const λ7948112d64c6 = λ1d29c19f59c1.request.headers.get("accept") || "", λ38257f260272 = new URL(λ1d29c19f59c1.request.url).pathname;
  let λ3243effcbbe1 = "";
  try {
    λ3243effcbbe1 = new URL(lp(λ1d29c19f59c1.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ1d29c19f59c1.request.destination) || /javascript|ecmascript|text\/css/i.test(λ7948112d64c6) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ38257f260272) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ3243effcbbe1);
}

function qp(λ1d29c19f59c1) {
  return /^\s*</.test(λ1d29c19f59c1) || /^\s*\)\]\}'/.test(λ1d29c19f59c1) || /^\s*\)\]/.test(λ1d29c19f59c1);
}

async function kp(λ1d29c19f59c1) {
  if (mp(λ1d29c19f59c1)) return fp(λ1d29c19f59c1);
  const {engine: λ7948112d64c6} = ip(λ1d29c19f59c1.request.url);
  if (hp(λ1d29c19f59c1)) return gp(λ1d29c19f59c1);
  const λ38257f260272 = await _p(λ1d29c19f59c1, await xp(λ1d29c19f59c1, λ7948112d64c6)), λ3243effcbbe1 = λ38257f260272.headers.get("content-type") || "", λ2062f0a571f1 = bp(λ1d29c19f59c1), λ06f4d1471e82 = λ2062f0a571f1 && (λ3243effcbbe1.includes("text/html") || λ3243effcbbe1.includes("application/json") || λ3243effcbbe1.includes("text/json"));
  return λ2062f0a571f1 && λ06f4d1471e82 ? Response.error() : λ2062f0a571f1 && λ38257f260272.status >= 400 ? λ38257f260272 : λ2062f0a571f1 && qp(await λ38257f260272.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ1d29c19f59c1.request.destination), 
  λ38257f260272);
}

self.addEventListener("fetch", λ1d29c19f59c1 => {
  λ1d29c19f59c1.respondWith(kp(λ1d29c19f59c1).catch(() => Response.error()));
});
