importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ006bf23d16f2 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λf5176b4d7d2b => {
    "function" == typeof λf5176b4d7d2b && queueMicrotask(() => λf5176b4d7d2b(λ006bf23d16f2));
  }, λf5176b4d7d2b = Object.freeze({
    getCurrentPosition(λ006bf23d16f2, λf5176b4d7d2b) {
      t(λf5176b4d7d2b);
    },
    watchPosition: (λ006bf23d16f2, λf5176b4d7d2b) => (t(λf5176b4d7d2b), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λf5176b4d7d2b
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λf5176b4d7d2b
    });
  } catch {}
  const λc9d3dc9ec09e = navigator.permissions?.query?.bind(navigator.permissions);
  if (λc9d3dc9ec09e) try {
    navigator.permissions.query = λ006bf23d16f2 => {
      if ("geolocation" === String(λ006bf23d16f2?.name || "").toLowerCase()) {
        const λ006bf23d16f2 = new EventTarget;
        return Object.defineProperties(λ006bf23d16f2, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ006bf23d16f2);
      }
      return λc9d3dc9ec09e(λ006bf23d16f2);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ006bf23d16f2) {
  try {
    const λf5176b4d7d2b = new URL(λ006bf23d16f2).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λf5176b4d7d2b ? {
      id: λf5176b4d7d2b[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λf5176b4d7d2b[1]}/`,
      dbName: `__nyx_uv_tab_${λf5176b4d7d2b[1]}`
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

function ip(λ006bf23d16f2) {
  const λf5176b4d7d2b = cp(λ006bf23d16f2), λc9d3dc9ec09e = λf5176b4d7d2b.id || "legacy";
  let λa5adf117c7c9 = sp.get(λc9d3dc9ec09e);
  if (!λa5adf117c7c9) {
    const λ006bf23d16f2 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ006bf23d16f2.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λa5adf117c7c9 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λf5176b4d7d2b.prefix,
      cookieDbName: λf5176b4d7d2b.dbName,
      inject: λ006bf23d16f2
    }), sp.set(λc9d3dc9ec09e, λa5adf117c7c9);
  }
  return {
    engine: λa5adf117c7c9,
    session: λf5176b4d7d2b
  };
}

function up(λ006bf23d16f2) {
  return new Promise(λf5176b4d7d2b => {
    let λc9d3dc9ec09e;
    try {
      λc9d3dc9ec09e = indexedDB.open(λ006bf23d16f2);
    } catch {
      return void λf5176b4d7d2b(!1);
    }
    λc9d3dc9ec09e.onerror = () => λf5176b4d7d2b(!1), λc9d3dc9ec09e.onupgradeneeded = () => {}, 
    λc9d3dc9ec09e.onsuccess = () => {
      const λ006bf23d16f2 = λc9d3dc9ec09e.result;
      if (!λ006bf23d16f2.objectStoreNames.contains("cookies")) return λ006bf23d16f2.close(), 
      void λf5176b4d7d2b(!0);
      const λa5adf117c7c9 = λ006bf23d16f2.transaction("cookies", "readwrite");
      λa5adf117c7c9.objectStore("cookies").clear(), λa5adf117c7c9.oncomplete = () => {
        λ006bf23d16f2.close(), λf5176b4d7d2b(!0);
      }, λa5adf117c7c9.onerror = () => {
        λ006bf23d16f2.close(), λf5176b4d7d2b(!1);
      }, λa5adf117c7c9.onabort = () => {
        λ006bf23d16f2.close(), λf5176b4d7d2b(!1);
      };
    };
  });
}

function lp(λ006bf23d16f2) {
  try {
    const λf5176b4d7d2b = new URL(λ006bf23d16f2), λc9d3dc9ec09e = cp(λ006bf23d16f2).prefix;
    return λf5176b4d7d2b.pathname.startsWith(λc9d3dc9ec09e) ? self.__uv$config.decodeUrl(λf5176b4d7d2b.pathname.slice(λc9d3dc9ec09e.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ006bf23d16f2 => {
  const λf5176b4d7d2b = λ006bf23d16f2.data;
  if ("nyx:destroy-proxy-session" !== λf5176b4d7d2b?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λf5176b4d7d2b.sessionId || ""))) return;
  const λc9d3dc9ec09e = String(λf5176b4d7d2b.sessionId);
  sp.delete(λc9d3dc9ec09e), λ006bf23d16f2.waitUntil?.(up(`__nyx_uv_tab_${λc9d3dc9ec09e}`));
}), self.addEventListener("install", λ006bf23d16f2 => {
  λ006bf23d16f2.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ006bf23d16f2 => {
  λ006bf23d16f2.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ006bf23d16f2) {
  const λf5176b4d7d2b = String(λ006bf23d16f2 || "").toLowerCase();
  return dp.some(λ006bf23d16f2 => λf5176b4d7d2b === λ006bf23d16f2 || λf5176b4d7d2b.endsWith(`.${λ006bf23d16f2}`));
}

function mp(λ006bf23d16f2) {
  const λf5176b4d7d2b = lp(λ006bf23d16f2.request.url);
  if (!λf5176b4d7d2b) return !1;
  try {
    const λ006bf23d16f2 = new URL(λf5176b4d7d2b);
    return pp(λ006bf23d16f2.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ006bf23d16f2.pathname) || "serve.app.playsaurus.com" === λ006bf23d16f2.hostname && /\/ad-campaigns\//i.test(λ006bf23d16f2.pathname);
  } catch {
    return !1;
  }
}

function fp(λ006bf23d16f2) {
  const λf5176b4d7d2b = λ006bf23d16f2.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ006bf23d16f2.request.destination) || /javascript|ecmascript/i.test(λf5176b4d7d2b) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ006bf23d16f2.request.destination || /text\/css/i.test(λf5176b4d7d2b) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ006bf23d16f2.request.destination || "iframe" === λ006bf23d16f2.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ006bf23d16f2) {
  if (![ "script", "worker", "sharedworker" ].includes(λ006bf23d16f2.request.destination)) return !1;
  try {
    const λf5176b4d7d2b = new URL(lp(λ006bf23d16f2.request.url));
    return λf5176b4d7d2b.hostname.endsWith("cookielaw.org") || λf5176b4d7d2b.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ006bf23d16f2) {
  const λf5176b4d7d2b = λ006bf23d16f2.request.headers.get("accept") || "", λc9d3dc9ec09e = new URL(λ006bf23d16f2.request.url).pathname, λa5adf117c7c9 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λc9d3dc9ec09e);
  return [ "script", "worker", "sharedworker" ].includes(λ006bf23d16f2.request.destination) || /javascript|ecmascript/i.test(λf5176b4d7d2b) || λa5adf117c7c9 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ006bf23d16f2) {
  if ("style" === λ006bf23d16f2.request.destination) return !0;
  const λf5176b4d7d2b = λ006bf23d16f2.request.headers.get("accept") || "";
  if (/text\/css/i.test(λf5176b4d7d2b)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ006bf23d16f2.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ006bf23d16f2) {
  if ([ "script", "worker", "sharedworker" ].includes(λ006bf23d16f2.request.destination)) return !0;
  const λf5176b4d7d2b = λ006bf23d16f2.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λf5176b4d7d2b)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ006bf23d16f2.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ006bf23d16f2) {
  return yp(λ006bf23d16f2) || wp(λ006bf23d16f2);
}

function jp(λ006bf23d16f2) {
  const λf5176b4d7d2b = λ006bf23d16f2?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λf5176b4d7d2b);
}

async function xp(λ006bf23d16f2, λf5176b4d7d2b) {
  if (!vp(λ006bf23d16f2)) return λf5176b4d7d2b.fetch(λ006bf23d16f2);
  let λc9d3dc9ec09e = null, λa5adf117c7c9 = null;
  for (let λ4c4bbbe74858 = 0; λ4c4bbbe74858 < ap.length; λ4c4bbbe74858 += 1) {
    const λa2082b0c3387 = ap[λ4c4bbbe74858];
    λa2082b0c3387 && await new Promise(λ006bf23d16f2 => setTimeout(λ006bf23d16f2, λa2082b0c3387));
    try {
      if (λc9d3dc9ec09e = await λf5176b4d7d2b.fetch(λ006bf23d16f2), λa5adf117c7c9 = null, 
      λc9d3dc9ec09e.status < 400 && !jp(λc9d3dc9ec09e)) return λc9d3dc9ec09e;
    } catch (λ006bf23d16f2) {
      λa5adf117c7c9 = λ006bf23d16f2;
    }
  }
  if (λc9d3dc9ec09e) return λc9d3dc9ec09e;
  throw λa5adf117c7c9 || new Error("UV asset request failed");
}

async function _p(λ006bf23d16f2, λf5176b4d7d2b) {
  if (!wp(λ006bf23d16f2) || λf5176b4d7d2b.status >= 400) return λf5176b4d7d2b;
  let λc9d3dc9ec09e;
  try {
    λc9d3dc9ec09e = new URL(lp(λ006bf23d16f2.request.url));
  } catch {
    return λf5176b4d7d2b;
  }
  if (!/unityloader\.js$/i.test(λc9d3dc9ec09e.pathname)) return λf5176b4d7d2b;
  const λa5adf117c7c9 = await λf5176b4d7d2b.clone().text().catch(() => ""), λ4c4bbbe74858 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λa5adf117c7c9.includes(λ4c4bbbe74858)) return λf5176b4d7d2b;
  const λa2082b0c3387 = new Headers(λf5176b4d7d2b.headers);
  λa2082b0c3387.delete("content-length"), λa2082b0c3387.delete("content-encoding"), 
  λa2082b0c3387.set("cache-control", "no-store");
  const λ3badd81b2a5c = `${λ4c4bbbe74858}(e.data.decompressed)`, λe2b9a4880a6c = λa5adf117c7c9.replaceAll(λ3badd81b2a5c, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ4c4bbbe74858, "this.callbacks[e.data.id]");
  return new Response(λe2b9a4880a6c, {
    status: λf5176b4d7d2b.status,
    statusText: λf5176b4d7d2b.statusText,
    headers: λa2082b0c3387
  });
}

function bp(λ006bf23d16f2) {
  const λf5176b4d7d2b = λ006bf23d16f2.request.headers.get("accept") || "", λc9d3dc9ec09e = new URL(λ006bf23d16f2.request.url).pathname;
  let λa5adf117c7c9 = "";
  try {
    λa5adf117c7c9 = new URL(lp(λ006bf23d16f2.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ006bf23d16f2.request.destination) || /javascript|ecmascript|text\/css/i.test(λf5176b4d7d2b) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λc9d3dc9ec09e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λa5adf117c7c9);
}

function qp(λ006bf23d16f2) {
  return /^\s*</.test(λ006bf23d16f2) || /^\s*\)\]\}'/.test(λ006bf23d16f2) || /^\s*\)\]/.test(λ006bf23d16f2);
}

async function kp(λ006bf23d16f2) {
  if (mp(λ006bf23d16f2)) return fp(λ006bf23d16f2);
  const {engine: λf5176b4d7d2b} = ip(λ006bf23d16f2.request.url);
  if (hp(λ006bf23d16f2)) return gp(λ006bf23d16f2);
  const λc9d3dc9ec09e = await _p(λ006bf23d16f2, await xp(λ006bf23d16f2, λf5176b4d7d2b)), λa5adf117c7c9 = λc9d3dc9ec09e.headers.get("content-type") || "", λ4c4bbbe74858 = bp(λ006bf23d16f2), λa2082b0c3387 = λ4c4bbbe74858 && (λa5adf117c7c9.includes("text/html") || λa5adf117c7c9.includes("application/json") || λa5adf117c7c9.includes("text/json"));
  return λ4c4bbbe74858 && λa2082b0c3387 ? Response.error() : λ4c4bbbe74858 && λc9d3dc9ec09e.status >= 400 ? λc9d3dc9ec09e : λ4c4bbbe74858 && qp(await λc9d3dc9ec09e.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ006bf23d16f2.request.destination), 
  λc9d3dc9ec09e);
}

self.addEventListener("fetch", λ006bf23d16f2 => {
  λ006bf23d16f2.respondWith(kp(λ006bf23d16f2).catch(() => Response.error()));
});
