importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λcc46fa95d4f6 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ847d119d84a0 => {
    "function" == typeof λ847d119d84a0 && queueMicrotask(() => λ847d119d84a0(λcc46fa95d4f6));
  }, λ847d119d84a0 = Object.freeze({
    getCurrentPosition(λcc46fa95d4f6, λ847d119d84a0) {
      t(λ847d119d84a0);
    },
    watchPosition: (λcc46fa95d4f6, λ847d119d84a0) => (t(λ847d119d84a0), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ847d119d84a0
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ847d119d84a0
    });
  } catch {}
  const λ6d7082104193 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ6d7082104193) try {
    navigator.permissions.query = λcc46fa95d4f6 => {
      if ("geolocation" === String(λcc46fa95d4f6?.name || "").toLowerCase()) {
        const λcc46fa95d4f6 = new EventTarget;
        return Object.defineProperties(λcc46fa95d4f6, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λcc46fa95d4f6);
      }
      return λ6d7082104193(λcc46fa95d4f6);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λcc46fa95d4f6) {
  try {
    const λ847d119d84a0 = new URL(λcc46fa95d4f6).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ847d119d84a0 ? {
      id: λ847d119d84a0[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ847d119d84a0[1]}/`,
      dbName: `__nyx_uv_tab_${λ847d119d84a0[1]}`
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

function ip(λcc46fa95d4f6) {
  const λ847d119d84a0 = cp(λcc46fa95d4f6), λ6d7082104193 = λ847d119d84a0.id || "legacy";
  let λe240a4d6f266 = sp.get(λ6d7082104193);
  if (!λe240a4d6f266) {
    const λcc46fa95d4f6 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λcc46fa95d4f6.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λe240a4d6f266 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ847d119d84a0.prefix,
      cookieDbName: λ847d119d84a0.dbName,
      inject: λcc46fa95d4f6
    }), sp.set(λ6d7082104193, λe240a4d6f266);
  }
  return {
    engine: λe240a4d6f266,
    session: λ847d119d84a0
  };
}

function up(λcc46fa95d4f6) {
  return new Promise(λ847d119d84a0 => {
    let λ6d7082104193;
    try {
      λ6d7082104193 = indexedDB.open(λcc46fa95d4f6);
    } catch {
      return void λ847d119d84a0(!1);
    }
    λ6d7082104193.onerror = () => λ847d119d84a0(!1), λ6d7082104193.onupgradeneeded = () => {}, 
    λ6d7082104193.onsuccess = () => {
      const λcc46fa95d4f6 = λ6d7082104193.result;
      if (!λcc46fa95d4f6.objectStoreNames.contains("cookies")) return λcc46fa95d4f6.close(), 
      void λ847d119d84a0(!0);
      const λe240a4d6f266 = λcc46fa95d4f6.transaction("cookies", "readwrite");
      λe240a4d6f266.objectStore("cookies").clear(), λe240a4d6f266.oncomplete = () => {
        λcc46fa95d4f6.close(), λ847d119d84a0(!0);
      }, λe240a4d6f266.onerror = () => {
        λcc46fa95d4f6.close(), λ847d119d84a0(!1);
      }, λe240a4d6f266.onabort = () => {
        λcc46fa95d4f6.close(), λ847d119d84a0(!1);
      };
    };
  });
}

function lp(λcc46fa95d4f6) {
  try {
    const λ847d119d84a0 = new URL(λcc46fa95d4f6), λ6d7082104193 = cp(λcc46fa95d4f6).prefix;
    return λ847d119d84a0.pathname.startsWith(λ6d7082104193) ? self.__uv$config.decodeUrl(λ847d119d84a0.pathname.slice(λ6d7082104193.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λcc46fa95d4f6 => {
  const λ847d119d84a0 = λcc46fa95d4f6.data;
  if ("nyx:destroy-proxy-session" !== λ847d119d84a0?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ847d119d84a0.sessionId || ""))) return;
  const λ6d7082104193 = String(λ847d119d84a0.sessionId);
  sp.delete(λ6d7082104193), λcc46fa95d4f6.waitUntil?.(up(`__nyx_uv_tab_${λ6d7082104193}`));
}), self.addEventListener("install", λcc46fa95d4f6 => {
  λcc46fa95d4f6.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λcc46fa95d4f6 => {
  λcc46fa95d4f6.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λcc46fa95d4f6) {
  const λ847d119d84a0 = String(λcc46fa95d4f6 || "").toLowerCase();
  return dp.some(λcc46fa95d4f6 => λ847d119d84a0 === λcc46fa95d4f6 || λ847d119d84a0.endsWith(`.${λcc46fa95d4f6}`));
}

function mp(λcc46fa95d4f6) {
  const λ847d119d84a0 = lp(λcc46fa95d4f6.request.url);
  if (!λ847d119d84a0) return !1;
  try {
    const λcc46fa95d4f6 = new URL(λ847d119d84a0);
    return pp(λcc46fa95d4f6.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λcc46fa95d4f6.pathname) || "serve.app.playsaurus.com" === λcc46fa95d4f6.hostname && /\/ad-campaigns\//i.test(λcc46fa95d4f6.pathname);
  } catch {
    return !1;
  }
}

function fp(λcc46fa95d4f6) {
  const λ847d119d84a0 = λcc46fa95d4f6.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λcc46fa95d4f6.request.destination) || /javascript|ecmascript/i.test(λ847d119d84a0) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λcc46fa95d4f6.request.destination || /text\/css/i.test(λ847d119d84a0) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λcc46fa95d4f6.request.destination || "iframe" === λcc46fa95d4f6.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λcc46fa95d4f6) {
  if (![ "script", "worker", "sharedworker" ].includes(λcc46fa95d4f6.request.destination)) return !1;
  try {
    const λ847d119d84a0 = new URL(lp(λcc46fa95d4f6.request.url));
    return λ847d119d84a0.hostname.endsWith("cookielaw.org") || λ847d119d84a0.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λcc46fa95d4f6) {
  const λ847d119d84a0 = λcc46fa95d4f6.request.headers.get("accept") || "", λ6d7082104193 = new URL(λcc46fa95d4f6.request.url).pathname, λe240a4d6f266 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ6d7082104193);
  return [ "script", "worker", "sharedworker" ].includes(λcc46fa95d4f6.request.destination) || /javascript|ecmascript/i.test(λ847d119d84a0) || λe240a4d6f266 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λcc46fa95d4f6) {
  if ("style" === λcc46fa95d4f6.request.destination) return !0;
  const λ847d119d84a0 = λcc46fa95d4f6.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ847d119d84a0)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λcc46fa95d4f6.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λcc46fa95d4f6) {
  if ([ "script", "worker", "sharedworker" ].includes(λcc46fa95d4f6.request.destination)) return !0;
  const λ847d119d84a0 = λcc46fa95d4f6.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ847d119d84a0)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λcc46fa95d4f6.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λcc46fa95d4f6) {
  return yp(λcc46fa95d4f6) || wp(λcc46fa95d4f6);
}

function jp(λcc46fa95d4f6) {
  const λ847d119d84a0 = λcc46fa95d4f6?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ847d119d84a0);
}

async function xp(λcc46fa95d4f6, λ847d119d84a0) {
  if (!vp(λcc46fa95d4f6)) return λ847d119d84a0.fetch(λcc46fa95d4f6);
  let λ6d7082104193 = null, λe240a4d6f266 = null;
  for (let λ25f81f6a145e = 0; λ25f81f6a145e < ap.length; λ25f81f6a145e += 1) {
    const λ6bd42abce95d = ap[λ25f81f6a145e];
    λ6bd42abce95d && await new Promise(λcc46fa95d4f6 => setTimeout(λcc46fa95d4f6, λ6bd42abce95d));
    try {
      if (λ6d7082104193 = await λ847d119d84a0.fetch(λcc46fa95d4f6), λe240a4d6f266 = null, 
      λ6d7082104193.status < 400 && !jp(λ6d7082104193)) return λ6d7082104193;
    } catch (λcc46fa95d4f6) {
      λe240a4d6f266 = λcc46fa95d4f6;
    }
  }
  if (λ6d7082104193) return λ6d7082104193;
  throw λe240a4d6f266 || new Error("UV asset request failed");
}

async function _p(λcc46fa95d4f6, λ847d119d84a0) {
  if (!wp(λcc46fa95d4f6) || λ847d119d84a0.status >= 400) return λ847d119d84a0;
  let λ6d7082104193;
  try {
    λ6d7082104193 = new URL(lp(λcc46fa95d4f6.request.url));
  } catch {
    return λ847d119d84a0;
  }
  if (!/unityloader\.js$/i.test(λ6d7082104193.pathname)) return λ847d119d84a0;
  const λe240a4d6f266 = await λ847d119d84a0.clone().text().catch(() => ""), λ25f81f6a145e = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λe240a4d6f266.includes(λ25f81f6a145e)) return λ847d119d84a0;
  const λ6bd42abce95d = new Headers(λ847d119d84a0.headers);
  λ6bd42abce95d.delete("content-length"), λ6bd42abce95d.delete("content-encoding"), 
  λ6bd42abce95d.set("cache-control", "no-store");
  const λed6271374f13 = `${λ25f81f6a145e}(e.data.decompressed)`, λf13726951ca6 = λe240a4d6f266.replaceAll(λed6271374f13, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ25f81f6a145e, "this.callbacks[e.data.id]");
  return new Response(λf13726951ca6, {
    status: λ847d119d84a0.status,
    statusText: λ847d119d84a0.statusText,
    headers: λ6bd42abce95d
  });
}

function bp(λcc46fa95d4f6) {
  const λ847d119d84a0 = λcc46fa95d4f6.request.headers.get("accept") || "", λ6d7082104193 = new URL(λcc46fa95d4f6.request.url).pathname;
  let λe240a4d6f266 = "";
  try {
    λe240a4d6f266 = new URL(lp(λcc46fa95d4f6.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λcc46fa95d4f6.request.destination) || /javascript|ecmascript|text\/css/i.test(λ847d119d84a0) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ6d7082104193) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λe240a4d6f266);
}

function qp(λcc46fa95d4f6) {
  return /^\s*</.test(λcc46fa95d4f6) || /^\s*\)\]\}'/.test(λcc46fa95d4f6) || /^\s*\)\]/.test(λcc46fa95d4f6);
}

async function kp(λcc46fa95d4f6) {
  if (mp(λcc46fa95d4f6)) return fp(λcc46fa95d4f6);
  const {engine: λ847d119d84a0} = ip(λcc46fa95d4f6.request.url);
  if (hp(λcc46fa95d4f6)) return gp(λcc46fa95d4f6);
  const λ6d7082104193 = await _p(λcc46fa95d4f6, await xp(λcc46fa95d4f6, λ847d119d84a0)), λe240a4d6f266 = λ6d7082104193.headers.get("content-type") || "", λ25f81f6a145e = bp(λcc46fa95d4f6), λ6bd42abce95d = λ25f81f6a145e && (λe240a4d6f266.includes("text/html") || λe240a4d6f266.includes("application/json") || λe240a4d6f266.includes("text/json"));
  return λ25f81f6a145e && λ6bd42abce95d ? Response.error() : λ25f81f6a145e && λ6d7082104193.status >= 400 ? λ6d7082104193 : λ25f81f6a145e && qp(await λ6d7082104193.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λcc46fa95d4f6.request.destination), 
  λ6d7082104193);
}

self.addEventListener("fetch", λcc46fa95d4f6 => {
  λcc46fa95d4f6.respondWith(kp(λcc46fa95d4f6).catch(() => Response.error()));
});
