importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λa318eba8a117 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ8b07cae507e5 => {
    "function" == typeof λ8b07cae507e5 && queueMicrotask(() => λ8b07cae507e5(λa318eba8a117));
  }, λ8b07cae507e5 = Object.freeze({
    getCurrentPosition(λa318eba8a117, λ8b07cae507e5) {
      t(λ8b07cae507e5);
    },
    watchPosition: (λa318eba8a117, λ8b07cae507e5) => (t(λ8b07cae507e5), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ8b07cae507e5
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ8b07cae507e5
    });
  } catch {}
  const λe2690947997f = navigator.permissions?.query?.bind(navigator.permissions);
  if (λe2690947997f) try {
    navigator.permissions.query = λa318eba8a117 => {
      if ("geolocation" === String(λa318eba8a117?.name || "").toLowerCase()) {
        const λa318eba8a117 = new EventTarget;
        return Object.defineProperties(λa318eba8a117, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λa318eba8a117);
      }
      return λe2690947997f(λa318eba8a117);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λa318eba8a117) {
  try {
    const λ8b07cae507e5 = new URL(λa318eba8a117).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ8b07cae507e5 ? {
      id: λ8b07cae507e5[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ8b07cae507e5[1]}/`,
      dbName: `__nyx_uv_tab_${λ8b07cae507e5[1]}`
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

function ip(λa318eba8a117) {
  const λ8b07cae507e5 = cp(λa318eba8a117), λe2690947997f = λ8b07cae507e5.id || "legacy";
  let λa2c919abcd15 = sp.get(λe2690947997f);
  if (!λa2c919abcd15) {
    const λa318eba8a117 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λa318eba8a117.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λa2c919abcd15 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ8b07cae507e5.prefix,
      cookieDbName: λ8b07cae507e5.dbName,
      inject: λa318eba8a117
    }), sp.set(λe2690947997f, λa2c919abcd15);
  }
  return {
    engine: λa2c919abcd15,
    session: λ8b07cae507e5
  };
}

function up(λa318eba8a117) {
  return new Promise(λ8b07cae507e5 => {
    let λe2690947997f;
    try {
      λe2690947997f = indexedDB.open(λa318eba8a117);
    } catch {
      return void λ8b07cae507e5(!1);
    }
    λe2690947997f.onerror = () => λ8b07cae507e5(!1), λe2690947997f.onupgradeneeded = () => {}, 
    λe2690947997f.onsuccess = () => {
      const λa318eba8a117 = λe2690947997f.result;
      if (!λa318eba8a117.objectStoreNames.contains("cookies")) return λa318eba8a117.close(), 
      void λ8b07cae507e5(!0);
      const λa2c919abcd15 = λa318eba8a117.transaction("cookies", "readwrite");
      λa2c919abcd15.objectStore("cookies").clear(), λa2c919abcd15.oncomplete = () => {
        λa318eba8a117.close(), λ8b07cae507e5(!0);
      }, λa2c919abcd15.onerror = () => {
        λa318eba8a117.close(), λ8b07cae507e5(!1);
      }, λa2c919abcd15.onabort = () => {
        λa318eba8a117.close(), λ8b07cae507e5(!1);
      };
    };
  });
}

function lp(λa318eba8a117) {
  try {
    const λ8b07cae507e5 = new URL(λa318eba8a117), λe2690947997f = cp(λa318eba8a117).prefix;
    return λ8b07cae507e5.pathname.startsWith(λe2690947997f) ? self.__uv$config.decodeUrl(λ8b07cae507e5.pathname.slice(λe2690947997f.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λa318eba8a117 => {
  const λ8b07cae507e5 = λa318eba8a117.data;
  if ("nyx:destroy-proxy-session" !== λ8b07cae507e5?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ8b07cae507e5.sessionId || ""))) return;
  const λe2690947997f = String(λ8b07cae507e5.sessionId);
  sp.delete(λe2690947997f), λa318eba8a117.waitUntil?.(up(`__nyx_uv_tab_${λe2690947997f}`));
}), self.addEventListener("install", λa318eba8a117 => {
  λa318eba8a117.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λa318eba8a117 => {
  λa318eba8a117.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λa318eba8a117) {
  const λ8b07cae507e5 = String(λa318eba8a117 || "").toLowerCase();
  return dp.some(λa318eba8a117 => λ8b07cae507e5 === λa318eba8a117 || λ8b07cae507e5.endsWith(`.${λa318eba8a117}`));
}

function mp(λa318eba8a117) {
  const λ8b07cae507e5 = lp(λa318eba8a117.request.url);
  if (!λ8b07cae507e5) return !1;
  try {
    const λa318eba8a117 = new URL(λ8b07cae507e5);
    return pp(λa318eba8a117.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λa318eba8a117.pathname) || "serve.app.playsaurus.com" === λa318eba8a117.hostname && /\/ad-campaigns\//i.test(λa318eba8a117.pathname);
  } catch {
    return !1;
  }
}

function fp(λa318eba8a117) {
  const λ8b07cae507e5 = λa318eba8a117.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λa318eba8a117.request.destination) || /javascript|ecmascript/i.test(λ8b07cae507e5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λa318eba8a117.request.destination || /text\/css/i.test(λ8b07cae507e5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λa318eba8a117.request.destination || "iframe" === λa318eba8a117.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λa318eba8a117) {
  if (![ "script", "worker", "sharedworker" ].includes(λa318eba8a117.request.destination)) return !1;
  try {
    const λ8b07cae507e5 = new URL(lp(λa318eba8a117.request.url));
    return λ8b07cae507e5.hostname.endsWith("cookielaw.org") || λ8b07cae507e5.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λa318eba8a117) {
  const λ8b07cae507e5 = λa318eba8a117.request.headers.get("accept") || "", λe2690947997f = new URL(λa318eba8a117.request.url).pathname, λa2c919abcd15 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λe2690947997f);
  return [ "script", "worker", "sharedworker" ].includes(λa318eba8a117.request.destination) || /javascript|ecmascript/i.test(λ8b07cae507e5) || λa2c919abcd15 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λa318eba8a117) {
  if ("style" === λa318eba8a117.request.destination) return !0;
  const λ8b07cae507e5 = λa318eba8a117.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ8b07cae507e5)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λa318eba8a117.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λa318eba8a117) {
  if ([ "script", "worker", "sharedworker" ].includes(λa318eba8a117.request.destination)) return !0;
  const λ8b07cae507e5 = λa318eba8a117.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ8b07cae507e5)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λa318eba8a117.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λa318eba8a117) {
  return yp(λa318eba8a117) || wp(λa318eba8a117);
}

function jp(λa318eba8a117) {
  const λ8b07cae507e5 = λa318eba8a117?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ8b07cae507e5);
}

async function xp(λa318eba8a117, λ8b07cae507e5) {
  if (!vp(λa318eba8a117)) return λ8b07cae507e5.fetch(λa318eba8a117);
  let λe2690947997f = null, λa2c919abcd15 = null;
  for (let λ9bf70e0f58bb = 0; λ9bf70e0f58bb < ap.length; λ9bf70e0f58bb += 1) {
    const λ0ad04083a6f3 = ap[λ9bf70e0f58bb];
    λ0ad04083a6f3 && await new Promise(λa318eba8a117 => setTimeout(λa318eba8a117, λ0ad04083a6f3));
    try {
      if (λe2690947997f = await λ8b07cae507e5.fetch(λa318eba8a117), λa2c919abcd15 = null, 
      λe2690947997f.status < 400 && !jp(λe2690947997f)) return λe2690947997f;
    } catch (λa318eba8a117) {
      λa2c919abcd15 = λa318eba8a117;
    }
  }
  if (λe2690947997f) return λe2690947997f;
  throw λa2c919abcd15 || new Error("UV asset request failed");
}

async function _p(λa318eba8a117, λ8b07cae507e5) {
  if (!wp(λa318eba8a117) || λ8b07cae507e5.status >= 400) return λ8b07cae507e5;
  let λe2690947997f;
  try {
    λe2690947997f = new URL(lp(λa318eba8a117.request.url));
  } catch {
    return λ8b07cae507e5;
  }
  if (!/unityloader\.js$/i.test(λe2690947997f.pathname)) return λ8b07cae507e5;
  const λa2c919abcd15 = await λ8b07cae507e5.clone().text().catch(() => ""), λ9bf70e0f58bb = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λa2c919abcd15.includes(λ9bf70e0f58bb)) return λ8b07cae507e5;
  const λ0ad04083a6f3 = new Headers(λ8b07cae507e5.headers);
  λ0ad04083a6f3.delete("content-length"), λ0ad04083a6f3.delete("content-encoding"), 
  λ0ad04083a6f3.set("cache-control", "no-store");
  const λc3fb769ca0b2 = `${λ9bf70e0f58bb}(e.data.decompressed)`, λf6a7c5322677 = λa2c919abcd15.replaceAll(λc3fb769ca0b2, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ9bf70e0f58bb, "this.callbacks[e.data.id]");
  return new Response(λf6a7c5322677, {
    status: λ8b07cae507e5.status,
    statusText: λ8b07cae507e5.statusText,
    headers: λ0ad04083a6f3
  });
}

function bp(λa318eba8a117) {
  const λ8b07cae507e5 = λa318eba8a117.request.headers.get("accept") || "", λe2690947997f = new URL(λa318eba8a117.request.url).pathname;
  let λa2c919abcd15 = "";
  try {
    λa2c919abcd15 = new URL(lp(λa318eba8a117.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λa318eba8a117.request.destination) || /javascript|ecmascript|text\/css/i.test(λ8b07cae507e5) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λe2690947997f) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λa2c919abcd15);
}

function qp(λa318eba8a117) {
  return /^\s*</.test(λa318eba8a117) || /^\s*\)\]\}'/.test(λa318eba8a117) || /^\s*\)\]/.test(λa318eba8a117);
}

async function kp(λa318eba8a117) {
  if (mp(λa318eba8a117)) return fp(λa318eba8a117);
  const {engine: λ8b07cae507e5} = ip(λa318eba8a117.request.url);
  if (hp(λa318eba8a117)) return gp(λa318eba8a117);
  const λe2690947997f = await _p(λa318eba8a117, await xp(λa318eba8a117, λ8b07cae507e5)), λa2c919abcd15 = λe2690947997f.headers.get("content-type") || "", λ9bf70e0f58bb = bp(λa318eba8a117), λ0ad04083a6f3 = λ9bf70e0f58bb && (λa2c919abcd15.includes("text/html") || λa2c919abcd15.includes("application/json") || λa2c919abcd15.includes("text/json"));
  return λ9bf70e0f58bb && λ0ad04083a6f3 ? Response.error() : λ9bf70e0f58bb && λe2690947997f.status >= 400 ? λe2690947997f : λ9bf70e0f58bb && qp(await λe2690947997f.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λa318eba8a117.request.destination), 
  λe2690947997f);
}

self.addEventListener("fetch", λa318eba8a117 => {
  λa318eba8a117.respondWith(kp(λa318eba8a117).catch(() => Response.error()));
});
