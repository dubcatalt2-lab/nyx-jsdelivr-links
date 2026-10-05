importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ582693a59491 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ13a98993d8a2 => {
    "function" == typeof λ13a98993d8a2 && queueMicrotask(() => λ13a98993d8a2(λ582693a59491));
  }, λ13a98993d8a2 = Object.freeze({
    getCurrentPosition(λ582693a59491, λ13a98993d8a2) {
      t(λ13a98993d8a2);
    },
    watchPosition: (λ582693a59491, λ13a98993d8a2) => (t(λ13a98993d8a2), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ13a98993d8a2
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ13a98993d8a2
    });
  } catch {}
  const λ7cc43821e54c = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ7cc43821e54c) try {
    navigator.permissions.query = λ582693a59491 => {
      if ("geolocation" === String(λ582693a59491?.name || "").toLowerCase()) {
        const λ582693a59491 = new EventTarget;
        return Object.defineProperties(λ582693a59491, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ582693a59491);
      }
      return λ7cc43821e54c(λ582693a59491);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ582693a59491) {
  try {
    const λ13a98993d8a2 = new URL(λ582693a59491).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ13a98993d8a2 ? {
      id: λ13a98993d8a2[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ13a98993d8a2[1]}/`,
      dbName: `__nyx_uv_tab_${λ13a98993d8a2[1]}`
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

function ip(λ582693a59491) {
  const λ13a98993d8a2 = cp(λ582693a59491), λ7cc43821e54c = λ13a98993d8a2.id || "legacy";
  let λef1d19c00196 = sp.get(λ7cc43821e54c);
  if (!λef1d19c00196) {
    const λ582693a59491 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ582693a59491.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λef1d19c00196 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ13a98993d8a2.prefix,
      cookieDbName: λ13a98993d8a2.dbName,
      inject: λ582693a59491
    }), sp.set(λ7cc43821e54c, λef1d19c00196);
  }
  return {
    engine: λef1d19c00196,
    session: λ13a98993d8a2
  };
}

function up(λ582693a59491) {
  return new Promise(λ13a98993d8a2 => {
    let λ7cc43821e54c;
    try {
      λ7cc43821e54c = indexedDB.open(λ582693a59491);
    } catch {
      return void λ13a98993d8a2(!1);
    }
    λ7cc43821e54c.onerror = () => λ13a98993d8a2(!1), λ7cc43821e54c.onupgradeneeded = () => {}, 
    λ7cc43821e54c.onsuccess = () => {
      const λ582693a59491 = λ7cc43821e54c.result;
      if (!λ582693a59491.objectStoreNames.contains("cookies")) return λ582693a59491.close(), 
      void λ13a98993d8a2(!0);
      const λef1d19c00196 = λ582693a59491.transaction("cookies", "readwrite");
      λef1d19c00196.objectStore("cookies").clear(), λef1d19c00196.oncomplete = () => {
        λ582693a59491.close(), λ13a98993d8a2(!0);
      }, λef1d19c00196.onerror = () => {
        λ582693a59491.close(), λ13a98993d8a2(!1);
      }, λef1d19c00196.onabort = () => {
        λ582693a59491.close(), λ13a98993d8a2(!1);
      };
    };
  });
}

function lp(λ582693a59491) {
  try {
    const λ13a98993d8a2 = new URL(λ582693a59491), λ7cc43821e54c = cp(λ582693a59491).prefix;
    return λ13a98993d8a2.pathname.startsWith(λ7cc43821e54c) ? self.__uv$config.decodeUrl(λ13a98993d8a2.pathname.slice(λ7cc43821e54c.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ582693a59491 => {
  const λ13a98993d8a2 = λ582693a59491.data;
  if ("nyx:destroy-proxy-session" !== λ13a98993d8a2?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ13a98993d8a2.sessionId || ""))) return;
  const λ7cc43821e54c = String(λ13a98993d8a2.sessionId);
  sp.delete(λ7cc43821e54c), λ582693a59491.waitUntil?.(up(`__nyx_uv_tab_${λ7cc43821e54c}`));
}), self.addEventListener("install", λ582693a59491 => {
  λ582693a59491.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ582693a59491 => {
  λ582693a59491.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ582693a59491) {
  const λ13a98993d8a2 = String(λ582693a59491 || "").toLowerCase();
  return dp.some(λ582693a59491 => λ13a98993d8a2 === λ582693a59491 || λ13a98993d8a2.endsWith(`.${λ582693a59491}`));
}

function mp(λ582693a59491) {
  const λ13a98993d8a2 = lp(λ582693a59491.request.url);
  if (!λ13a98993d8a2) return !1;
  try {
    const λ582693a59491 = new URL(λ13a98993d8a2);
    return pp(λ582693a59491.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ582693a59491.pathname) || "serve.app.playsaurus.com" === λ582693a59491.hostname && /\/ad-campaigns\//i.test(λ582693a59491.pathname);
  } catch {
    return !1;
  }
}

function fp(λ582693a59491) {
  const λ13a98993d8a2 = λ582693a59491.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ582693a59491.request.destination) || /javascript|ecmascript/i.test(λ13a98993d8a2) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ582693a59491.request.destination || /text\/css/i.test(λ13a98993d8a2) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ582693a59491.request.destination || "iframe" === λ582693a59491.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ582693a59491) {
  if (![ "script", "worker", "sharedworker" ].includes(λ582693a59491.request.destination)) return !1;
  try {
    const λ13a98993d8a2 = new URL(lp(λ582693a59491.request.url));
    return λ13a98993d8a2.hostname.endsWith("cookielaw.org") || λ13a98993d8a2.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ582693a59491) {
  const λ13a98993d8a2 = λ582693a59491.request.headers.get("accept") || "", λ7cc43821e54c = new URL(λ582693a59491.request.url).pathname, λef1d19c00196 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ7cc43821e54c);
  return [ "script", "worker", "sharedworker" ].includes(λ582693a59491.request.destination) || /javascript|ecmascript/i.test(λ13a98993d8a2) || λef1d19c00196 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ582693a59491) {
  if ("style" === λ582693a59491.request.destination) return !0;
  const λ13a98993d8a2 = λ582693a59491.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ13a98993d8a2)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ582693a59491.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ582693a59491) {
  if ([ "script", "worker", "sharedworker" ].includes(λ582693a59491.request.destination)) return !0;
  const λ13a98993d8a2 = λ582693a59491.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ13a98993d8a2)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ582693a59491.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ582693a59491) {
  return yp(λ582693a59491) || wp(λ582693a59491);
}

function jp(λ582693a59491) {
  const λ13a98993d8a2 = λ582693a59491?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ13a98993d8a2);
}

async function xp(λ582693a59491, λ13a98993d8a2) {
  if (!vp(λ582693a59491)) return λ13a98993d8a2.fetch(λ582693a59491);
  let λ7cc43821e54c = null, λef1d19c00196 = null;
  for (let λ9b4e65427caf = 0; λ9b4e65427caf < ap.length; λ9b4e65427caf += 1) {
    const λ1a65a71ae703 = ap[λ9b4e65427caf];
    λ1a65a71ae703 && await new Promise(λ582693a59491 => setTimeout(λ582693a59491, λ1a65a71ae703));
    try {
      if (λ7cc43821e54c = await λ13a98993d8a2.fetch(λ582693a59491), λef1d19c00196 = null, 
      λ7cc43821e54c.status < 400 && !jp(λ7cc43821e54c)) return λ7cc43821e54c;
    } catch (λ582693a59491) {
      λef1d19c00196 = λ582693a59491;
    }
  }
  if (λ7cc43821e54c) return λ7cc43821e54c;
  throw λef1d19c00196 || new Error("UV asset request failed");
}

async function _p(λ582693a59491, λ13a98993d8a2) {
  if (!wp(λ582693a59491) || λ13a98993d8a2.status >= 400) return λ13a98993d8a2;
  let λ7cc43821e54c;
  try {
    λ7cc43821e54c = new URL(lp(λ582693a59491.request.url));
  } catch {
    return λ13a98993d8a2;
  }
  if (!/unityloader\.js$/i.test(λ7cc43821e54c.pathname)) return λ13a98993d8a2;
  const λef1d19c00196 = await λ13a98993d8a2.clone().text().catch(() => ""), λ9b4e65427caf = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λef1d19c00196.includes(λ9b4e65427caf)) return λ13a98993d8a2;
  const λ1a65a71ae703 = new Headers(λ13a98993d8a2.headers);
  λ1a65a71ae703.delete("content-length"), λ1a65a71ae703.delete("content-encoding"), 
  λ1a65a71ae703.set("cache-control", "no-store");
  const λ910e98f8285f = `${λ9b4e65427caf}(e.data.decompressed)`, λ0269b4e9fc68 = λef1d19c00196.replaceAll(λ910e98f8285f, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ9b4e65427caf, "this.callbacks[e.data.id]");
  return new Response(λ0269b4e9fc68, {
    status: λ13a98993d8a2.status,
    statusText: λ13a98993d8a2.statusText,
    headers: λ1a65a71ae703
  });
}

function bp(λ582693a59491) {
  const λ13a98993d8a2 = λ582693a59491.request.headers.get("accept") || "", λ7cc43821e54c = new URL(λ582693a59491.request.url).pathname;
  let λef1d19c00196 = "";
  try {
    λef1d19c00196 = new URL(lp(λ582693a59491.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ582693a59491.request.destination) || /javascript|ecmascript|text\/css/i.test(λ13a98993d8a2) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ7cc43821e54c) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λef1d19c00196);
}

function qp(λ582693a59491) {
  return /^\s*</.test(λ582693a59491) || /^\s*\)\]\}'/.test(λ582693a59491) || /^\s*\)\]/.test(λ582693a59491);
}

async function kp(λ582693a59491) {
  if (mp(λ582693a59491)) return fp(λ582693a59491);
  const {engine: λ13a98993d8a2} = ip(λ582693a59491.request.url);
  if (hp(λ582693a59491)) return gp(λ582693a59491);
  const λ7cc43821e54c = await _p(λ582693a59491, await xp(λ582693a59491, λ13a98993d8a2)), λef1d19c00196 = λ7cc43821e54c.headers.get("content-type") || "", λ9b4e65427caf = bp(λ582693a59491), λ1a65a71ae703 = λ9b4e65427caf && (λef1d19c00196.includes("text/html") || λef1d19c00196.includes("application/json") || λef1d19c00196.includes("text/json"));
  return λ9b4e65427caf && λ1a65a71ae703 ? Response.error() : λ9b4e65427caf && λ7cc43821e54c.status >= 400 ? λ7cc43821e54c : λ9b4e65427caf && qp(await λ7cc43821e54c.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ582693a59491.request.destination), 
  λ7cc43821e54c);
}

self.addEventListener("fetch", λ582693a59491 => {
  λ582693a59491.respondWith(kp(λ582693a59491).catch(() => Response.error()));
});
