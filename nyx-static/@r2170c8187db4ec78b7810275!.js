importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λbd999cf04a4e = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ5f6ec6a4e13d => {
    "function" == typeof λ5f6ec6a4e13d && queueMicrotask(() => λ5f6ec6a4e13d(λbd999cf04a4e));
  }, λ5f6ec6a4e13d = Object.freeze({
    getCurrentPosition(λbd999cf04a4e, λ5f6ec6a4e13d) {
      t(λ5f6ec6a4e13d);
    },
    watchPosition: (λbd999cf04a4e, λ5f6ec6a4e13d) => (t(λ5f6ec6a4e13d), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ5f6ec6a4e13d
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ5f6ec6a4e13d
    });
  } catch {}
  const λ3e42325212d3 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ3e42325212d3) try {
    navigator.permissions.query = λbd999cf04a4e => {
      if ("geolocation" === String(λbd999cf04a4e?.name || "").toLowerCase()) {
        const λbd999cf04a4e = new EventTarget;
        return Object.defineProperties(λbd999cf04a4e, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λbd999cf04a4e);
      }
      return λ3e42325212d3(λbd999cf04a4e);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λbd999cf04a4e) {
  try {
    const λ5f6ec6a4e13d = new URL(λbd999cf04a4e).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ5f6ec6a4e13d ? {
      id: λ5f6ec6a4e13d[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ5f6ec6a4e13d[1]}/`,
      dbName: `__nyx_uv_tab_${λ5f6ec6a4e13d[1]}`
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

function ip(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = cp(λbd999cf04a4e), λ3e42325212d3 = λ5f6ec6a4e13d.id || "legacy";
  let λc6b01ce1edc0 = sp.get(λ3e42325212d3);
  if (!λc6b01ce1edc0) {
    const λbd999cf04a4e = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λbd999cf04a4e.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λc6b01ce1edc0 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ5f6ec6a4e13d.prefix,
      cookieDbName: λ5f6ec6a4e13d.dbName,
      inject: λbd999cf04a4e
    }), sp.set(λ3e42325212d3, λc6b01ce1edc0);
  }
  return {
    engine: λc6b01ce1edc0,
    session: λ5f6ec6a4e13d
  };
}

function up(λbd999cf04a4e) {
  return new Promise(λ5f6ec6a4e13d => {
    let λ3e42325212d3;
    try {
      λ3e42325212d3 = indexedDB.open(λbd999cf04a4e);
    } catch {
      return void λ5f6ec6a4e13d(!1);
    }
    λ3e42325212d3.onerror = () => λ5f6ec6a4e13d(!1), λ3e42325212d3.onupgradeneeded = () => {}, 
    λ3e42325212d3.onsuccess = () => {
      const λbd999cf04a4e = λ3e42325212d3.result;
      if (!λbd999cf04a4e.objectStoreNames.contains("cookies")) return λbd999cf04a4e.close(), 
      void λ5f6ec6a4e13d(!0);
      const λc6b01ce1edc0 = λbd999cf04a4e.transaction("cookies", "readwrite");
      λc6b01ce1edc0.objectStore("cookies").clear(), λc6b01ce1edc0.oncomplete = () => {
        λbd999cf04a4e.close(), λ5f6ec6a4e13d(!0);
      }, λc6b01ce1edc0.onerror = () => {
        λbd999cf04a4e.close(), λ5f6ec6a4e13d(!1);
      }, λc6b01ce1edc0.onabort = () => {
        λbd999cf04a4e.close(), λ5f6ec6a4e13d(!1);
      };
    };
  });
}

function lp(λbd999cf04a4e) {
  try {
    const λ5f6ec6a4e13d = new URL(λbd999cf04a4e), λ3e42325212d3 = cp(λbd999cf04a4e).prefix;
    return λ5f6ec6a4e13d.pathname.startsWith(λ3e42325212d3) ? self.__uv$config.decodeUrl(λ5f6ec6a4e13d.pathname.slice(λ3e42325212d3.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λbd999cf04a4e => {
  const λ5f6ec6a4e13d = λbd999cf04a4e.data;
  if ("nyx:destroy-proxy-session" !== λ5f6ec6a4e13d?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ5f6ec6a4e13d.sessionId || ""))) return;
  const λ3e42325212d3 = String(λ5f6ec6a4e13d.sessionId);
  sp.delete(λ3e42325212d3), λbd999cf04a4e.waitUntil?.(up(`__nyx_uv_tab_${λ3e42325212d3}`));
}), self.addEventListener("install", λbd999cf04a4e => {
  λbd999cf04a4e.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λbd999cf04a4e => {
  λbd999cf04a4e.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = String(λbd999cf04a4e || "").toLowerCase();
  return dp.some(λbd999cf04a4e => λ5f6ec6a4e13d === λbd999cf04a4e || λ5f6ec6a4e13d.endsWith(`.${λbd999cf04a4e}`));
}

function mp(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = lp(λbd999cf04a4e.request.url);
  if (!λ5f6ec6a4e13d) return !1;
  try {
    const λbd999cf04a4e = new URL(λ5f6ec6a4e13d);
    return pp(λbd999cf04a4e.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λbd999cf04a4e.pathname) || "serve.app.playsaurus.com" === λbd999cf04a4e.hostname && /\/ad-campaigns\//i.test(λbd999cf04a4e.pathname);
  } catch {
    return !1;
  }
}

function fp(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = λbd999cf04a4e.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λbd999cf04a4e.request.destination) || /javascript|ecmascript/i.test(λ5f6ec6a4e13d) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λbd999cf04a4e.request.destination || /text\/css/i.test(λ5f6ec6a4e13d) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λbd999cf04a4e.request.destination || "iframe" === λbd999cf04a4e.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λbd999cf04a4e) {
  if (![ "script", "worker", "sharedworker" ].includes(λbd999cf04a4e.request.destination)) return !1;
  try {
    const λ5f6ec6a4e13d = new URL(lp(λbd999cf04a4e.request.url));
    return λ5f6ec6a4e13d.hostname.endsWith("cookielaw.org") || λ5f6ec6a4e13d.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = λbd999cf04a4e.request.headers.get("accept") || "", λ3e42325212d3 = new URL(λbd999cf04a4e.request.url).pathname, λc6b01ce1edc0 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ3e42325212d3);
  return [ "script", "worker", "sharedworker" ].includes(λbd999cf04a4e.request.destination) || /javascript|ecmascript/i.test(λ5f6ec6a4e13d) || λc6b01ce1edc0 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λbd999cf04a4e) {
  if ("style" === λbd999cf04a4e.request.destination) return !0;
  const λ5f6ec6a4e13d = λbd999cf04a4e.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ5f6ec6a4e13d)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λbd999cf04a4e.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λbd999cf04a4e) {
  if ([ "script", "worker", "sharedworker" ].includes(λbd999cf04a4e.request.destination)) return !0;
  const λ5f6ec6a4e13d = λbd999cf04a4e.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ5f6ec6a4e13d)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λbd999cf04a4e.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λbd999cf04a4e) {
  return yp(λbd999cf04a4e) || wp(λbd999cf04a4e);
}

function jp(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = λbd999cf04a4e?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ5f6ec6a4e13d);
}

async function xp(λbd999cf04a4e, λ5f6ec6a4e13d) {
  if (!vp(λbd999cf04a4e)) return λ5f6ec6a4e13d.fetch(λbd999cf04a4e);
  let λ3e42325212d3 = null, λc6b01ce1edc0 = null;
  for (let λdc30ab43ce64 = 0; λdc30ab43ce64 < ap.length; λdc30ab43ce64 += 1) {
    const λ5dfb2e43ac5b = ap[λdc30ab43ce64];
    λ5dfb2e43ac5b && await new Promise(λbd999cf04a4e => setTimeout(λbd999cf04a4e, λ5dfb2e43ac5b));
    try {
      if (λ3e42325212d3 = await λ5f6ec6a4e13d.fetch(λbd999cf04a4e), λc6b01ce1edc0 = null, 
      λ3e42325212d3.status < 400 && !jp(λ3e42325212d3)) return λ3e42325212d3;
    } catch (λbd999cf04a4e) {
      λc6b01ce1edc0 = λbd999cf04a4e;
    }
  }
  if (λ3e42325212d3) return λ3e42325212d3;
  throw λc6b01ce1edc0 || new Error("UV asset request failed");
}

async function _p(λbd999cf04a4e, λ5f6ec6a4e13d) {
  if (!wp(λbd999cf04a4e) || λ5f6ec6a4e13d.status >= 400) return λ5f6ec6a4e13d;
  let λ3e42325212d3;
  try {
    λ3e42325212d3 = new URL(lp(λbd999cf04a4e.request.url));
  } catch {
    return λ5f6ec6a4e13d;
  }
  if (!/unityloader\.js$/i.test(λ3e42325212d3.pathname)) return λ5f6ec6a4e13d;
  const λc6b01ce1edc0 = await λ5f6ec6a4e13d.clone().text().catch(() => ""), λdc30ab43ce64 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λc6b01ce1edc0.includes(λdc30ab43ce64)) return λ5f6ec6a4e13d;
  const λ5dfb2e43ac5b = new Headers(λ5f6ec6a4e13d.headers);
  λ5dfb2e43ac5b.delete("content-length"), λ5dfb2e43ac5b.delete("content-encoding"), 
  λ5dfb2e43ac5b.set("cache-control", "no-store");
  const λ9c3cd1208577 = `${λdc30ab43ce64}(e.data.decompressed)`, λ058255324c77 = λc6b01ce1edc0.replaceAll(λ9c3cd1208577, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λdc30ab43ce64, "this.callbacks[e.data.id]");
  return new Response(λ058255324c77, {
    status: λ5f6ec6a4e13d.status,
    statusText: λ5f6ec6a4e13d.statusText,
    headers: λ5dfb2e43ac5b
  });
}

function bp(λbd999cf04a4e) {
  const λ5f6ec6a4e13d = λbd999cf04a4e.request.headers.get("accept") || "", λ3e42325212d3 = new URL(λbd999cf04a4e.request.url).pathname;
  let λc6b01ce1edc0 = "";
  try {
    λc6b01ce1edc0 = new URL(lp(λbd999cf04a4e.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λbd999cf04a4e.request.destination) || /javascript|ecmascript|text\/css/i.test(λ5f6ec6a4e13d) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ3e42325212d3) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λc6b01ce1edc0);
}

function qp(λbd999cf04a4e) {
  return /^\s*</.test(λbd999cf04a4e) || /^\s*\)\]\}'/.test(λbd999cf04a4e) || /^\s*\)\]/.test(λbd999cf04a4e);
}

async function kp(λbd999cf04a4e) {
  if (mp(λbd999cf04a4e)) return fp(λbd999cf04a4e);
  const {engine: λ5f6ec6a4e13d} = ip(λbd999cf04a4e.request.url);
  if (hp(λbd999cf04a4e)) return gp(λbd999cf04a4e);
  const λ3e42325212d3 = await _p(λbd999cf04a4e, await xp(λbd999cf04a4e, λ5f6ec6a4e13d)), λc6b01ce1edc0 = λ3e42325212d3.headers.get("content-type") || "", λdc30ab43ce64 = bp(λbd999cf04a4e), λ5dfb2e43ac5b = λdc30ab43ce64 && (λc6b01ce1edc0.includes("text/html") || λc6b01ce1edc0.includes("application/json") || λc6b01ce1edc0.includes("text/json"));
  return λdc30ab43ce64 && λ5dfb2e43ac5b ? Response.error() : λdc30ab43ce64 && λ3e42325212d3.status >= 400 ? λ3e42325212d3 : λdc30ab43ce64 && qp(await λ3e42325212d3.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λbd999cf04a4e.request.destination), 
  λ3e42325212d3);
}

self.addEventListener("fetch", λbd999cf04a4e => {
  λbd999cf04a4e.respondWith(kp(λbd999cf04a4e).catch(() => Response.error()));
});
