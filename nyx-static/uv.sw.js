importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λe679463a082e = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ66f02540d8c9 => {
    "function" == typeof λ66f02540d8c9 && queueMicrotask(() => λ66f02540d8c9(λe679463a082e));
  }, λ66f02540d8c9 = Object.freeze({
    getCurrentPosition(λe679463a082e, λ66f02540d8c9) {
      t(λ66f02540d8c9);
    },
    watchPosition: (λe679463a082e, λ66f02540d8c9) => (t(λ66f02540d8c9), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ66f02540d8c9
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ66f02540d8c9
    });
  } catch {}
  const λ003d872b1805 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ003d872b1805) try {
    navigator.permissions.query = λe679463a082e => {
      if ("geolocation" === String(λe679463a082e?.name || "").toLowerCase()) {
        const λe679463a082e = new EventTarget;
        return Object.defineProperties(λe679463a082e, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λe679463a082e);
      }
      return λ003d872b1805(λe679463a082e);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λe679463a082e) {
  try {
    const λ66f02540d8c9 = new URL(λe679463a082e).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ66f02540d8c9 ? {
      id: λ66f02540d8c9[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ66f02540d8c9[1]}/`,
      dbName: `__nyx_uv_tab_${λ66f02540d8c9[1]}`
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

function ip(λe679463a082e) {
  const λ66f02540d8c9 = cp(λe679463a082e), λ003d872b1805 = λ66f02540d8c9.id || "legacy";
  let λb39e51888150 = sp.get(λ003d872b1805);
  if (!λb39e51888150) {
    const λe679463a082e = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λe679463a082e.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λb39e51888150 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ66f02540d8c9.prefix,
      cookieDbName: λ66f02540d8c9.dbName,
      inject: λe679463a082e
    }), sp.set(λ003d872b1805, λb39e51888150);
  }
  return {
    engine: λb39e51888150,
    session: λ66f02540d8c9
  };
}

function up(λe679463a082e) {
  return new Promise(λ66f02540d8c9 => {
    let λ003d872b1805;
    try {
      λ003d872b1805 = indexedDB.open(λe679463a082e);
    } catch {
      return void λ66f02540d8c9(!1);
    }
    λ003d872b1805.onerror = () => λ66f02540d8c9(!1), λ003d872b1805.onupgradeneeded = () => {}, 
    λ003d872b1805.onsuccess = () => {
      const λe679463a082e = λ003d872b1805.result;
      if (!λe679463a082e.objectStoreNames.contains("cookies")) return λe679463a082e.close(), 
      void λ66f02540d8c9(!0);
      const λb39e51888150 = λe679463a082e.transaction("cookies", "readwrite");
      λb39e51888150.objectStore("cookies").clear(), λb39e51888150.oncomplete = () => {
        λe679463a082e.close(), λ66f02540d8c9(!0);
      }, λb39e51888150.onerror = () => {
        λe679463a082e.close(), λ66f02540d8c9(!1);
      }, λb39e51888150.onabort = () => {
        λe679463a082e.close(), λ66f02540d8c9(!1);
      };
    };
  });
}

function lp(λe679463a082e) {
  try {
    const λ66f02540d8c9 = new URL(λe679463a082e), λ003d872b1805 = cp(λe679463a082e).prefix;
    return λ66f02540d8c9.pathname.startsWith(λ003d872b1805) ? self.__uv$config.decodeUrl(λ66f02540d8c9.pathname.slice(λ003d872b1805.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λe679463a082e => {
  const λ66f02540d8c9 = λe679463a082e.data;
  if ("nyx:destroy-proxy-session" !== λ66f02540d8c9?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ66f02540d8c9.sessionId || ""))) return;
  const λ003d872b1805 = String(λ66f02540d8c9.sessionId);
  sp.delete(λ003d872b1805), λe679463a082e.waitUntil?.(up(`__nyx_uv_tab_${λ003d872b1805}`));
}), self.addEventListener("install", λe679463a082e => {
  λe679463a082e.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λe679463a082e => {
  λe679463a082e.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λe679463a082e) {
  const λ66f02540d8c9 = String(λe679463a082e || "").toLowerCase();
  return dp.some(λe679463a082e => λ66f02540d8c9 === λe679463a082e || λ66f02540d8c9.endsWith(`.${λe679463a082e}`));
}

function mp(λe679463a082e) {
  const λ66f02540d8c9 = lp(λe679463a082e.request.url);
  if (!λ66f02540d8c9) return !1;
  try {
    const λe679463a082e = new URL(λ66f02540d8c9);
    return pp(λe679463a082e.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λe679463a082e.pathname) || "serve.app.playsaurus.com" === λe679463a082e.hostname && /\/ad-campaigns\//i.test(λe679463a082e.pathname);
  } catch {
    return !1;
  }
}

function fp(λe679463a082e) {
  const λ66f02540d8c9 = λe679463a082e.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λe679463a082e.request.destination) || /javascript|ecmascript/i.test(λ66f02540d8c9) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λe679463a082e.request.destination || /text\/css/i.test(λ66f02540d8c9) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λe679463a082e.request.destination || "iframe" === λe679463a082e.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λe679463a082e) {
  if (![ "script", "worker", "sharedworker" ].includes(λe679463a082e.request.destination)) return !1;
  try {
    const λ66f02540d8c9 = new URL(lp(λe679463a082e.request.url));
    return λ66f02540d8c9.hostname.endsWith("cookielaw.org") || λ66f02540d8c9.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λe679463a082e) {
  const λ66f02540d8c9 = λe679463a082e.request.headers.get("accept") || "", λ003d872b1805 = new URL(λe679463a082e.request.url).pathname, λb39e51888150 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ003d872b1805);
  return [ "script", "worker", "sharedworker" ].includes(λe679463a082e.request.destination) || /javascript|ecmascript/i.test(λ66f02540d8c9) || λb39e51888150 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λe679463a082e) {
  if ("style" === λe679463a082e.request.destination) return !0;
  const λ66f02540d8c9 = λe679463a082e.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ66f02540d8c9)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λe679463a082e.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λe679463a082e) {
  if ([ "script", "worker", "sharedworker" ].includes(λe679463a082e.request.destination)) return !0;
  const λ66f02540d8c9 = λe679463a082e.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ66f02540d8c9)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λe679463a082e.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λe679463a082e) {
  return yp(λe679463a082e) || wp(λe679463a082e);
}

function jp(λe679463a082e) {
  const λ66f02540d8c9 = λe679463a082e?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ66f02540d8c9);
}

async function xp(λe679463a082e, λ66f02540d8c9) {
  if (!vp(λe679463a082e)) return λ66f02540d8c9.fetch(λe679463a082e);
  let λ003d872b1805 = null, λb39e51888150 = null;
  for (let λaf5be44a7a31 = 0; λaf5be44a7a31 < ap.length; λaf5be44a7a31 += 1) {
    const λa9ae350e9b92 = ap[λaf5be44a7a31];
    λa9ae350e9b92 && await new Promise(λe679463a082e => setTimeout(λe679463a082e, λa9ae350e9b92));
    try {
      if (λ003d872b1805 = await λ66f02540d8c9.fetch(λe679463a082e), λb39e51888150 = null, 
      λ003d872b1805.status < 400 && !jp(λ003d872b1805)) return λ003d872b1805;
    } catch (λe679463a082e) {
      λb39e51888150 = λe679463a082e;
    }
  }
  if (λ003d872b1805) return λ003d872b1805;
  throw λb39e51888150 || new Error("UV asset request failed");
}

async function _p(λe679463a082e, λ66f02540d8c9) {
  if (!wp(λe679463a082e) || λ66f02540d8c9.status >= 400) return λ66f02540d8c9;
  let λ003d872b1805;
  try {
    λ003d872b1805 = new URL(lp(λe679463a082e.request.url));
  } catch {
    return λ66f02540d8c9;
  }
  if (!/unityloader\.js$/i.test(λ003d872b1805.pathname)) return λ66f02540d8c9;
  const λb39e51888150 = await λ66f02540d8c9.clone().text().catch(() => ""), λaf5be44a7a31 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λb39e51888150.includes(λaf5be44a7a31)) return λ66f02540d8c9;
  const λa9ae350e9b92 = new Headers(λ66f02540d8c9.headers);
  λa9ae350e9b92.delete("content-length"), λa9ae350e9b92.delete("content-encoding"), 
  λa9ae350e9b92.set("cache-control", "no-store");
  const λce38e0ab3fea = `${λaf5be44a7a31}(e.data.decompressed)`, λ30e27b40e5b6 = λb39e51888150.replaceAll(λce38e0ab3fea, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λaf5be44a7a31, "this.callbacks[e.data.id]");
  return new Response(λ30e27b40e5b6, {
    status: λ66f02540d8c9.status,
    statusText: λ66f02540d8c9.statusText,
    headers: λa9ae350e9b92
  });
}

function bp(λe679463a082e) {
  const λ66f02540d8c9 = λe679463a082e.request.headers.get("accept") || "", λ003d872b1805 = new URL(λe679463a082e.request.url).pathname;
  let λb39e51888150 = "";
  try {
    λb39e51888150 = new URL(lp(λe679463a082e.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λe679463a082e.request.destination) || /javascript|ecmascript|text\/css/i.test(λ66f02540d8c9) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ003d872b1805) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λb39e51888150);
}

function qp(λe679463a082e) {
  return /^\s*</.test(λe679463a082e) || /^\s*\)\]\}'/.test(λe679463a082e) || /^\s*\)\]/.test(λe679463a082e);
}

async function kp(λe679463a082e) {
  if (mp(λe679463a082e)) return fp(λe679463a082e);
  const {engine: λ66f02540d8c9} = ip(λe679463a082e.request.url);
  if (hp(λe679463a082e)) return gp(λe679463a082e);
  const λ003d872b1805 = await _p(λe679463a082e, await xp(λe679463a082e, λ66f02540d8c9)), λb39e51888150 = λ003d872b1805.headers.get("content-type") || "", λaf5be44a7a31 = bp(λe679463a082e), λa9ae350e9b92 = λaf5be44a7a31 && (λb39e51888150.includes("text/html") || λb39e51888150.includes("application/json") || λb39e51888150.includes("text/json"));
  return λaf5be44a7a31 && λa9ae350e9b92 ? Response.error() : λaf5be44a7a31 && λ003d872b1805.status >= 400 ? λ003d872b1805 : λaf5be44a7a31 && qp(await λ003d872b1805.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λe679463a082e.request.destination), 
  λ003d872b1805);
}

self.addEventListener("fetch", λe679463a082e => {
  λe679463a082e.respondWith(kp(λe679463a082e).catch(() => Response.error()));
});
