importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.bundle.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv.config.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/uv.sw.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ1ae985496e75 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λa854cc190435 => {
    "function" == typeof λa854cc190435 && queueMicrotask(() => λa854cc190435(λ1ae985496e75));
  }, λa854cc190435 = Object.freeze({
    getCurrentPosition(λ1ae985496e75, λa854cc190435) {
      t(λa854cc190435);
    },
    watchPosition: (λ1ae985496e75, λa854cc190435) => (t(λa854cc190435), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λa854cc190435
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λa854cc190435
    });
  } catch {}
  const λ1b1ab7f35a1e = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ1b1ab7f35a1e) try {
    navigator.permissions.query = λ1ae985496e75 => {
      if ("geolocation" === String(λ1ae985496e75?.name || "").toLowerCase()) {
        const λ1ae985496e75 = new EventTarget;
        return Object.defineProperties(λ1ae985496e75, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ1ae985496e75);
      }
      return λ1b1ab7f35a1e(λ1ae985496e75);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ1ae985496e75) {
  try {
    const λa854cc190435 = new URL(λ1ae985496e75).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λa854cc190435 ? {
      id: λa854cc190435[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λa854cc190435[1]}/`,
      dbName: `__nyx_uv_tab_${λa854cc190435[1]}`
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

function ip(λ1ae985496e75) {
  const λa854cc190435 = cp(λ1ae985496e75), λ1b1ab7f35a1e = λa854cc190435.id || "legacy";
  let λb542786d13fa = sp.get(λ1b1ab7f35a1e);
  if (!λb542786d13fa) {
    const λ1ae985496e75 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ1ae985496e75.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λb542786d13fa = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λa854cc190435.prefix,
      cookieDbName: λa854cc190435.dbName,
      inject: λ1ae985496e75
    }), sp.set(λ1b1ab7f35a1e, λb542786d13fa);
  }
  return {
    engine: λb542786d13fa,
    session: λa854cc190435
  };
}

function up(λ1ae985496e75) {
  return new Promise(λa854cc190435 => {
    let λ1b1ab7f35a1e;
    try {
      λ1b1ab7f35a1e = indexedDB.open(λ1ae985496e75);
    } catch {
      return void λa854cc190435(!1);
    }
    λ1b1ab7f35a1e.onerror = () => λa854cc190435(!1), λ1b1ab7f35a1e.onupgradeneeded = () => {}, 
    λ1b1ab7f35a1e.onsuccess = () => {
      const λ1ae985496e75 = λ1b1ab7f35a1e.result;
      if (!λ1ae985496e75.objectStoreNames.contains("cookies")) return λ1ae985496e75.close(), 
      void λa854cc190435(!0);
      const λb542786d13fa = λ1ae985496e75.transaction("cookies", "readwrite");
      λb542786d13fa.objectStore("cookies").clear(), λb542786d13fa.oncomplete = () => {
        λ1ae985496e75.close(), λa854cc190435(!0);
      }, λb542786d13fa.onerror = () => {
        λ1ae985496e75.close(), λa854cc190435(!1);
      }, λb542786d13fa.onabort = () => {
        λ1ae985496e75.close(), λa854cc190435(!1);
      };
    };
  });
}

function lp(λ1ae985496e75) {
  try {
    const λa854cc190435 = new URL(λ1ae985496e75), λ1b1ab7f35a1e = cp(λ1ae985496e75).prefix;
    return λa854cc190435.pathname.startsWith(λ1b1ab7f35a1e) ? self.__uv$config.decodeUrl(λa854cc190435.pathname.slice(λ1b1ab7f35a1e.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ1ae985496e75 => {
  const λa854cc190435 = λ1ae985496e75.data;
  if ("nyx:destroy-proxy-session" !== λa854cc190435?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λa854cc190435.sessionId || ""))) return;
  const λ1b1ab7f35a1e = String(λa854cc190435.sessionId);
  sp.delete(λ1b1ab7f35a1e), λ1ae985496e75.waitUntil?.(up(`__nyx_uv_tab_${λ1b1ab7f35a1e}`));
}), self.addEventListener("install", λ1ae985496e75 => {
  λ1ae985496e75.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ1ae985496e75 => {
  λ1ae985496e75.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ1ae985496e75) {
  const λa854cc190435 = String(λ1ae985496e75 || "").toLowerCase();
  return dp.some(λ1ae985496e75 => λa854cc190435 === λ1ae985496e75 || λa854cc190435.endsWith(`.${λ1ae985496e75}`));
}

function mp(λ1ae985496e75) {
  const λa854cc190435 = lp(λ1ae985496e75.request.url);
  if (!λa854cc190435) return !1;
  try {
    const λ1ae985496e75 = new URL(λa854cc190435);
    return pp(λ1ae985496e75.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ1ae985496e75.pathname) || "serve.app.playsaurus.com" === λ1ae985496e75.hostname && /\/ad-campaigns\//i.test(λ1ae985496e75.pathname);
  } catch {
    return !1;
  }
}

function fp(λ1ae985496e75) {
  const λa854cc190435 = λ1ae985496e75.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ1ae985496e75.request.destination) || /javascript|ecmascript/i.test(λa854cc190435) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ1ae985496e75.request.destination || /text\/css/i.test(λa854cc190435) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ1ae985496e75.request.destination || "iframe" === λ1ae985496e75.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ1ae985496e75) {
  if (![ "script", "worker", "sharedworker" ].includes(λ1ae985496e75.request.destination)) return !1;
  try {
    const λa854cc190435 = new URL(lp(λ1ae985496e75.request.url));
    return λa854cc190435.hostname.endsWith("cookielaw.org") || λa854cc190435.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ1ae985496e75) {
  const λa854cc190435 = λ1ae985496e75.request.headers.get("accept") || "", λ1b1ab7f35a1e = new URL(λ1ae985496e75.request.url).pathname, λb542786d13fa = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ1b1ab7f35a1e);
  return [ "script", "worker", "sharedworker" ].includes(λ1ae985496e75.request.destination) || /javascript|ecmascript/i.test(λa854cc190435) || λb542786d13fa ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ1ae985496e75) {
  if ("style" === λ1ae985496e75.request.destination) return !0;
  const λa854cc190435 = λ1ae985496e75.request.headers.get("accept") || "";
  if (/text\/css/i.test(λa854cc190435)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ1ae985496e75.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ1ae985496e75) {
  if ([ "script", "worker", "sharedworker" ].includes(λ1ae985496e75.request.destination)) return !0;
  const λa854cc190435 = λ1ae985496e75.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λa854cc190435)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ1ae985496e75.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ1ae985496e75) {
  return yp(λ1ae985496e75) || wp(λ1ae985496e75);
}

function jp(λ1ae985496e75) {
  const λa854cc190435 = λ1ae985496e75?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λa854cc190435);
}

async function xp(λ1ae985496e75, λa854cc190435) {
  if (!vp(λ1ae985496e75)) return λa854cc190435.fetch(λ1ae985496e75);
  let λ1b1ab7f35a1e = null, λb542786d13fa = null;
  for (let λdd9bd3d38f5b = 0; λdd9bd3d38f5b < ap.length; λdd9bd3d38f5b += 1) {
    const λecc56d9ed006 = ap[λdd9bd3d38f5b];
    λecc56d9ed006 && await new Promise(λ1ae985496e75 => setTimeout(λ1ae985496e75, λecc56d9ed006));
    try {
      if (λ1b1ab7f35a1e = await λa854cc190435.fetch(λ1ae985496e75), λb542786d13fa = null, 
      λ1b1ab7f35a1e.status < 400 && !jp(λ1b1ab7f35a1e)) return λ1b1ab7f35a1e;
    } catch (λ1ae985496e75) {
      λb542786d13fa = λ1ae985496e75;
    }
  }
  if (λ1b1ab7f35a1e) return λ1b1ab7f35a1e;
  throw λb542786d13fa || new Error("UV asset request failed");
}

async function _p(λ1ae985496e75, λa854cc190435) {
  if (!wp(λ1ae985496e75) || λa854cc190435.status >= 400) return λa854cc190435;
  let λ1b1ab7f35a1e;
  try {
    λ1b1ab7f35a1e = new URL(lp(λ1ae985496e75.request.url));
  } catch {
    return λa854cc190435;
  }
  if (!/unityloader\.js$/i.test(λ1b1ab7f35a1e.pathname)) return λa854cc190435;
  const λb542786d13fa = await λa854cc190435.clone().text().catch(() => ""), λdd9bd3d38f5b = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λb542786d13fa.includes(λdd9bd3d38f5b)) return λa854cc190435;
  const λecc56d9ed006 = new Headers(λa854cc190435.headers);
  λecc56d9ed006.delete("content-length"), λecc56d9ed006.delete("content-encoding"), 
  λecc56d9ed006.set("cache-control", "no-store");
  const λ8a81b5387ba4 = `${λdd9bd3d38f5b}(e.data.decompressed)`, λdc8edde00265 = λb542786d13fa.replaceAll(λ8a81b5387ba4, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λdd9bd3d38f5b, "this.callbacks[e.data.id]");
  return new Response(λdc8edde00265, {
    status: λa854cc190435.status,
    statusText: λa854cc190435.statusText,
    headers: λecc56d9ed006
  });
}

function bp(λ1ae985496e75) {
  const λa854cc190435 = λ1ae985496e75.request.headers.get("accept") || "", λ1b1ab7f35a1e = new URL(λ1ae985496e75.request.url).pathname;
  let λb542786d13fa = "";
  try {
    λb542786d13fa = new URL(lp(λ1ae985496e75.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ1ae985496e75.request.destination) || /javascript|ecmascript|text\/css/i.test(λa854cc190435) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ1b1ab7f35a1e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λb542786d13fa);
}

function qp(λ1ae985496e75) {
  return /^\s*</.test(λ1ae985496e75) || /^\s*\)\]\}'/.test(λ1ae985496e75) || /^\s*\)\]/.test(λ1ae985496e75);
}

async function kp(λ1ae985496e75) {
  if (mp(λ1ae985496e75)) return fp(λ1ae985496e75);
  const {engine: λa854cc190435} = ip(λ1ae985496e75.request.url);
  if (hp(λ1ae985496e75)) return gp(λ1ae985496e75);
  const λ1b1ab7f35a1e = await _p(λ1ae985496e75, await xp(λ1ae985496e75, λa854cc190435)), λb542786d13fa = λ1b1ab7f35a1e.headers.get("content-type") || "", λdd9bd3d38f5b = bp(λ1ae985496e75), λecc56d9ed006 = λdd9bd3d38f5b && (λb542786d13fa.includes("text/html") || λb542786d13fa.includes("application/json") || λb542786d13fa.includes("text/json"));
  return λdd9bd3d38f5b && λecc56d9ed006 ? Response.error() : λdd9bd3d38f5b && λ1b1ab7f35a1e.status >= 400 ? λ1b1ab7f35a1e : λdd9bd3d38f5b && qp(await λ1b1ab7f35a1e.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ1ae985496e75.request.destination), 
  λ1b1ab7f35a1e);
}

self.addEventListener("fetch", λ1ae985496e75 => {
  λ1ae985496e75.respondWith(kp(λ1ae985496e75).catch(() => Response.error()));
});
