importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ4588962d2164 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ94deb51b858c => {
    "function" == typeof λ94deb51b858c && queueMicrotask(() => λ94deb51b858c(λ4588962d2164));
  }, λ94deb51b858c = Object.freeze({
    getCurrentPosition(λ4588962d2164, λ94deb51b858c) {
      t(λ94deb51b858c);
    },
    watchPosition: (λ4588962d2164, λ94deb51b858c) => (t(λ94deb51b858c), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ94deb51b858c
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ94deb51b858c
    });
  } catch {}
  const λa16f4ef1014e = navigator.permissions?.query?.bind(navigator.permissions);
  if (λa16f4ef1014e) try {
    navigator.permissions.query = λ4588962d2164 => {
      if ("geolocation" === String(λ4588962d2164?.name || "").toLowerCase()) {
        const λ4588962d2164 = new EventTarget;
        return Object.defineProperties(λ4588962d2164, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ4588962d2164);
      }
      return λa16f4ef1014e(λ4588962d2164);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ4588962d2164) {
  try {
    const λ94deb51b858c = new URL(λ4588962d2164).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ94deb51b858c ? {
      id: λ94deb51b858c[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ94deb51b858c[1]}/`,
      dbName: `__nyx_uv_tab_${λ94deb51b858c[1]}`
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

function ip(λ4588962d2164) {
  const λ94deb51b858c = cp(λ4588962d2164), λa16f4ef1014e = λ94deb51b858c.id || "legacy";
  let λ366f28eb2748 = sp.get(λa16f4ef1014e);
  if (!λ366f28eb2748) {
    const λ4588962d2164 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ4588962d2164.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ366f28eb2748 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ94deb51b858c.prefix,
      cookieDbName: λ94deb51b858c.dbName,
      inject: λ4588962d2164
    }), sp.set(λa16f4ef1014e, λ366f28eb2748);
  }
  return {
    engine: λ366f28eb2748,
    session: λ94deb51b858c
  };
}

function up(λ4588962d2164) {
  return new Promise(λ94deb51b858c => {
    let λa16f4ef1014e;
    try {
      λa16f4ef1014e = indexedDB.open(λ4588962d2164);
    } catch {
      return void λ94deb51b858c(!1);
    }
    λa16f4ef1014e.onerror = () => λ94deb51b858c(!1), λa16f4ef1014e.onupgradeneeded = () => {}, 
    λa16f4ef1014e.onsuccess = () => {
      const λ4588962d2164 = λa16f4ef1014e.result;
      if (!λ4588962d2164.objectStoreNames.contains("cookies")) return λ4588962d2164.close(), 
      void λ94deb51b858c(!0);
      const λ366f28eb2748 = λ4588962d2164.transaction("cookies", "readwrite");
      λ366f28eb2748.objectStore("cookies").clear(), λ366f28eb2748.oncomplete = () => {
        λ4588962d2164.close(), λ94deb51b858c(!0);
      }, λ366f28eb2748.onerror = () => {
        λ4588962d2164.close(), λ94deb51b858c(!1);
      }, λ366f28eb2748.onabort = () => {
        λ4588962d2164.close(), λ94deb51b858c(!1);
      };
    };
  });
}

function lp(λ4588962d2164) {
  try {
    const λ94deb51b858c = new URL(λ4588962d2164), λa16f4ef1014e = cp(λ4588962d2164).prefix;
    return λ94deb51b858c.pathname.startsWith(λa16f4ef1014e) ? self.__uv$config.decodeUrl(λ94deb51b858c.pathname.slice(λa16f4ef1014e.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ4588962d2164 => {
  const λ94deb51b858c = λ4588962d2164.data;
  if ("nyx:destroy-proxy-session" !== λ94deb51b858c?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ94deb51b858c.sessionId || ""))) return;
  const λa16f4ef1014e = String(λ94deb51b858c.sessionId);
  sp.delete(λa16f4ef1014e), λ4588962d2164.waitUntil?.(up(`__nyx_uv_tab_${λa16f4ef1014e}`));
}), self.addEventListener("install", λ4588962d2164 => {
  λ4588962d2164.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ4588962d2164 => {
  λ4588962d2164.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ4588962d2164) {
  const λ94deb51b858c = String(λ4588962d2164 || "").toLowerCase();
  return dp.some(λ4588962d2164 => λ94deb51b858c === λ4588962d2164 || λ94deb51b858c.endsWith(`.${λ4588962d2164}`));
}

function mp(λ4588962d2164) {
  const λ94deb51b858c = lp(λ4588962d2164.request.url);
  if (!λ94deb51b858c) return !1;
  try {
    const λ4588962d2164 = new URL(λ94deb51b858c);
    return pp(λ4588962d2164.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ4588962d2164.pathname) || "serve.app.playsaurus.com" === λ4588962d2164.hostname && /\/ad-campaigns\//i.test(λ4588962d2164.pathname);
  } catch {
    return !1;
  }
}

function fp(λ4588962d2164) {
  const λ94deb51b858c = λ4588962d2164.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ4588962d2164.request.destination) || /javascript|ecmascript/i.test(λ94deb51b858c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ4588962d2164.request.destination || /text\/css/i.test(λ94deb51b858c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ4588962d2164.request.destination || "iframe" === λ4588962d2164.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ4588962d2164) {
  if (![ "script", "worker", "sharedworker" ].includes(λ4588962d2164.request.destination)) return !1;
  try {
    const λ94deb51b858c = new URL(lp(λ4588962d2164.request.url));
    return λ94deb51b858c.hostname.endsWith("cookielaw.org") || λ94deb51b858c.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ4588962d2164) {
  const λ94deb51b858c = λ4588962d2164.request.headers.get("accept") || "", λa16f4ef1014e = new URL(λ4588962d2164.request.url).pathname, λ366f28eb2748 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λa16f4ef1014e);
  return [ "script", "worker", "sharedworker" ].includes(λ4588962d2164.request.destination) || /javascript|ecmascript/i.test(λ94deb51b858c) || λ366f28eb2748 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ4588962d2164) {
  if ("style" === λ4588962d2164.request.destination) return !0;
  const λ94deb51b858c = λ4588962d2164.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ94deb51b858c)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ4588962d2164.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ4588962d2164) {
  if ([ "script", "worker", "sharedworker" ].includes(λ4588962d2164.request.destination)) return !0;
  const λ94deb51b858c = λ4588962d2164.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ94deb51b858c)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ4588962d2164.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ4588962d2164) {
  return yp(λ4588962d2164) || wp(λ4588962d2164);
}

function jp(λ4588962d2164) {
  const λ94deb51b858c = λ4588962d2164?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ94deb51b858c);
}

async function xp(λ4588962d2164, λ94deb51b858c) {
  if (!vp(λ4588962d2164)) return λ94deb51b858c.fetch(λ4588962d2164);
  let λa16f4ef1014e = null, λ366f28eb2748 = null;
  for (let λ5ada87a1d257 = 0; λ5ada87a1d257 < ap.length; λ5ada87a1d257 += 1) {
    const λ8aed454f96dd = ap[λ5ada87a1d257];
    λ8aed454f96dd && await new Promise(λ4588962d2164 => setTimeout(λ4588962d2164, λ8aed454f96dd));
    try {
      if (λa16f4ef1014e = await λ94deb51b858c.fetch(λ4588962d2164), λ366f28eb2748 = null, 
      λa16f4ef1014e.status < 400 && !jp(λa16f4ef1014e)) return λa16f4ef1014e;
    } catch (λ4588962d2164) {
      λ366f28eb2748 = λ4588962d2164;
    }
  }
  if (λa16f4ef1014e) return λa16f4ef1014e;
  throw λ366f28eb2748 || new Error("UV asset request failed");
}

async function _p(λ4588962d2164, λ94deb51b858c) {
  if (!wp(λ4588962d2164) || λ94deb51b858c.status >= 400) return λ94deb51b858c;
  let λa16f4ef1014e;
  try {
    λa16f4ef1014e = new URL(lp(λ4588962d2164.request.url));
  } catch {
    return λ94deb51b858c;
  }
  if (!/unityloader\.js$/i.test(λa16f4ef1014e.pathname)) return λ94deb51b858c;
  const λ366f28eb2748 = await λ94deb51b858c.clone().text().catch(() => ""), λ5ada87a1d257 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ366f28eb2748.includes(λ5ada87a1d257)) return λ94deb51b858c;
  const λ8aed454f96dd = new Headers(λ94deb51b858c.headers);
  λ8aed454f96dd.delete("content-length"), λ8aed454f96dd.delete("content-encoding"), 
  λ8aed454f96dd.set("cache-control", "no-store");
  const λdde6eff1af69 = `${λ5ada87a1d257}(e.data.decompressed)`, λ2e68cd1b1619 = λ366f28eb2748.replaceAll(λdde6eff1af69, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ5ada87a1d257, "this.callbacks[e.data.id]");
  return new Response(λ2e68cd1b1619, {
    status: λ94deb51b858c.status,
    statusText: λ94deb51b858c.statusText,
    headers: λ8aed454f96dd
  });
}

function bp(λ4588962d2164) {
  const λ94deb51b858c = λ4588962d2164.request.headers.get("accept") || "", λa16f4ef1014e = new URL(λ4588962d2164.request.url).pathname;
  let λ366f28eb2748 = "";
  try {
    λ366f28eb2748 = new URL(lp(λ4588962d2164.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ4588962d2164.request.destination) || /javascript|ecmascript|text\/css/i.test(λ94deb51b858c) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λa16f4ef1014e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ366f28eb2748);
}

function qp(λ4588962d2164) {
  return /^\s*</.test(λ4588962d2164) || /^\s*\)\]\}'/.test(λ4588962d2164) || /^\s*\)\]/.test(λ4588962d2164);
}

async function kp(λ4588962d2164) {
  if (mp(λ4588962d2164)) return fp(λ4588962d2164);
  const {engine: λ94deb51b858c} = ip(λ4588962d2164.request.url);
  if (hp(λ4588962d2164)) return gp(λ4588962d2164);
  const λa16f4ef1014e = await _p(λ4588962d2164, await xp(λ4588962d2164, λ94deb51b858c)), λ366f28eb2748 = λa16f4ef1014e.headers.get("content-type") || "", λ5ada87a1d257 = bp(λ4588962d2164), λ8aed454f96dd = λ5ada87a1d257 && (λ366f28eb2748.includes("text/html") || λ366f28eb2748.includes("application/json") || λ366f28eb2748.includes("text/json"));
  return λ5ada87a1d257 && λ8aed454f96dd ? Response.error() : λ5ada87a1d257 && λa16f4ef1014e.status >= 400 ? λa16f4ef1014e : λ5ada87a1d257 && qp(await λa16f4ef1014e.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ4588962d2164.request.destination), 
  λa16f4ef1014e);
}

self.addEventListener("fetch", λ4588962d2164 => {
  λ4588962d2164.respondWith(kp(λ4588962d2164).catch(() => Response.error()));
});
