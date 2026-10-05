importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ712b953fcc58 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ6aa75d7576a7 => {
    "function" == typeof λ6aa75d7576a7 && queueMicrotask(() => λ6aa75d7576a7(λ712b953fcc58));
  }, λ6aa75d7576a7 = Object.freeze({
    getCurrentPosition(λ712b953fcc58, λ6aa75d7576a7) {
      t(λ6aa75d7576a7);
    },
    watchPosition: (λ712b953fcc58, λ6aa75d7576a7) => (t(λ6aa75d7576a7), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ6aa75d7576a7
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ6aa75d7576a7
    });
  } catch {}
  const λdc499c459718 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λdc499c459718) try {
    navigator.permissions.query = λ712b953fcc58 => {
      if ("geolocation" === String(λ712b953fcc58?.name || "").toLowerCase()) {
        const λ712b953fcc58 = new EventTarget;
        return Object.defineProperties(λ712b953fcc58, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ712b953fcc58);
      }
      return λdc499c459718(λ712b953fcc58);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ712b953fcc58) {
  try {
    const λ6aa75d7576a7 = new URL(λ712b953fcc58).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ6aa75d7576a7 ? {
      id: λ6aa75d7576a7[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ6aa75d7576a7[1]}/`,
      dbName: `__nyx_uv_tab_${λ6aa75d7576a7[1]}`
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

function ip(λ712b953fcc58) {
  const λ6aa75d7576a7 = cp(λ712b953fcc58), λdc499c459718 = λ6aa75d7576a7.id || "legacy";
  let λc53c87f639ab = sp.get(λdc499c459718);
  if (!λc53c87f639ab) {
    const λ712b953fcc58 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ712b953fcc58.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λc53c87f639ab = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ6aa75d7576a7.prefix,
      cookieDbName: λ6aa75d7576a7.dbName,
      inject: λ712b953fcc58
    }), sp.set(λdc499c459718, λc53c87f639ab);
  }
  return {
    engine: λc53c87f639ab,
    session: λ6aa75d7576a7
  };
}

function up(λ712b953fcc58) {
  return new Promise(λ6aa75d7576a7 => {
    let λdc499c459718;
    try {
      λdc499c459718 = indexedDB.open(λ712b953fcc58);
    } catch {
      return void λ6aa75d7576a7(!1);
    }
    λdc499c459718.onerror = () => λ6aa75d7576a7(!1), λdc499c459718.onupgradeneeded = () => {}, 
    λdc499c459718.onsuccess = () => {
      const λ712b953fcc58 = λdc499c459718.result;
      if (!λ712b953fcc58.objectStoreNames.contains("cookies")) return λ712b953fcc58.close(), 
      void λ6aa75d7576a7(!0);
      const λc53c87f639ab = λ712b953fcc58.transaction("cookies", "readwrite");
      λc53c87f639ab.objectStore("cookies").clear(), λc53c87f639ab.oncomplete = () => {
        λ712b953fcc58.close(), λ6aa75d7576a7(!0);
      }, λc53c87f639ab.onerror = () => {
        λ712b953fcc58.close(), λ6aa75d7576a7(!1);
      }, λc53c87f639ab.onabort = () => {
        λ712b953fcc58.close(), λ6aa75d7576a7(!1);
      };
    };
  });
}

function lp(λ712b953fcc58) {
  try {
    const λ6aa75d7576a7 = new URL(λ712b953fcc58), λdc499c459718 = cp(λ712b953fcc58).prefix;
    return λ6aa75d7576a7.pathname.startsWith(λdc499c459718) ? self.__uv$config.decodeUrl(λ6aa75d7576a7.pathname.slice(λdc499c459718.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ712b953fcc58 => {
  const λ6aa75d7576a7 = λ712b953fcc58.data;
  if ("nyx:destroy-proxy-session" !== λ6aa75d7576a7?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ6aa75d7576a7.sessionId || ""))) return;
  const λdc499c459718 = String(λ6aa75d7576a7.sessionId);
  sp.delete(λdc499c459718), λ712b953fcc58.waitUntil?.(up(`__nyx_uv_tab_${λdc499c459718}`));
}), self.addEventListener("install", λ712b953fcc58 => {
  λ712b953fcc58.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ712b953fcc58 => {
  λ712b953fcc58.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ712b953fcc58) {
  const λ6aa75d7576a7 = String(λ712b953fcc58 || "").toLowerCase();
  return dp.some(λ712b953fcc58 => λ6aa75d7576a7 === λ712b953fcc58 || λ6aa75d7576a7.endsWith(`.${λ712b953fcc58}`));
}

function mp(λ712b953fcc58) {
  const λ6aa75d7576a7 = lp(λ712b953fcc58.request.url);
  if (!λ6aa75d7576a7) return !1;
  try {
    const λ712b953fcc58 = new URL(λ6aa75d7576a7);
    return pp(λ712b953fcc58.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ712b953fcc58.pathname) || "serve.app.playsaurus.com" === λ712b953fcc58.hostname && /\/ad-campaigns\//i.test(λ712b953fcc58.pathname);
  } catch {
    return !1;
  }
}

function fp(λ712b953fcc58) {
  const λ6aa75d7576a7 = λ712b953fcc58.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ712b953fcc58.request.destination) || /javascript|ecmascript/i.test(λ6aa75d7576a7) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ712b953fcc58.request.destination || /text\/css/i.test(λ6aa75d7576a7) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ712b953fcc58.request.destination || "iframe" === λ712b953fcc58.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ712b953fcc58) {
  if (![ "script", "worker", "sharedworker" ].includes(λ712b953fcc58.request.destination)) return !1;
  try {
    const λ6aa75d7576a7 = new URL(lp(λ712b953fcc58.request.url));
    return λ6aa75d7576a7.hostname.endsWith("cookielaw.org") || λ6aa75d7576a7.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ712b953fcc58) {
  const λ6aa75d7576a7 = λ712b953fcc58.request.headers.get("accept") || "", λdc499c459718 = new URL(λ712b953fcc58.request.url).pathname, λc53c87f639ab = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λdc499c459718);
  return [ "script", "worker", "sharedworker" ].includes(λ712b953fcc58.request.destination) || /javascript|ecmascript/i.test(λ6aa75d7576a7) || λc53c87f639ab ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ712b953fcc58) {
  if ("style" === λ712b953fcc58.request.destination) return !0;
  const λ6aa75d7576a7 = λ712b953fcc58.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ6aa75d7576a7)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ712b953fcc58.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ712b953fcc58) {
  if ([ "script", "worker", "sharedworker" ].includes(λ712b953fcc58.request.destination)) return !0;
  const λ6aa75d7576a7 = λ712b953fcc58.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ6aa75d7576a7)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ712b953fcc58.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ712b953fcc58) {
  return yp(λ712b953fcc58) || wp(λ712b953fcc58);
}

function jp(λ712b953fcc58) {
  const λ6aa75d7576a7 = λ712b953fcc58?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ6aa75d7576a7);
}

async function xp(λ712b953fcc58, λ6aa75d7576a7) {
  if (!vp(λ712b953fcc58)) return λ6aa75d7576a7.fetch(λ712b953fcc58);
  let λdc499c459718 = null, λc53c87f639ab = null;
  for (let λa24a1669b214 = 0; λa24a1669b214 < ap.length; λa24a1669b214 += 1) {
    const λa51d714cd3fb = ap[λa24a1669b214];
    λa51d714cd3fb && await new Promise(λ712b953fcc58 => setTimeout(λ712b953fcc58, λa51d714cd3fb));
    try {
      if (λdc499c459718 = await λ6aa75d7576a7.fetch(λ712b953fcc58), λc53c87f639ab = null, 
      λdc499c459718.status < 400 && !jp(λdc499c459718)) return λdc499c459718;
    } catch (λ712b953fcc58) {
      λc53c87f639ab = λ712b953fcc58;
    }
  }
  if (λdc499c459718) return λdc499c459718;
  throw λc53c87f639ab || new Error("UV asset request failed");
}

async function _p(λ712b953fcc58, λ6aa75d7576a7) {
  if (!wp(λ712b953fcc58) || λ6aa75d7576a7.status >= 400) return λ6aa75d7576a7;
  let λdc499c459718;
  try {
    λdc499c459718 = new URL(lp(λ712b953fcc58.request.url));
  } catch {
    return λ6aa75d7576a7;
  }
  if (!/unityloader\.js$/i.test(λdc499c459718.pathname)) return λ6aa75d7576a7;
  const λc53c87f639ab = await λ6aa75d7576a7.clone().text().catch(() => ""), λa24a1669b214 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λc53c87f639ab.includes(λa24a1669b214)) return λ6aa75d7576a7;
  const λa51d714cd3fb = new Headers(λ6aa75d7576a7.headers);
  λa51d714cd3fb.delete("content-length"), λa51d714cd3fb.delete("content-encoding"), 
  λa51d714cd3fb.set("cache-control", "no-store");
  const λ14e59380f997 = `${λa24a1669b214}(e.data.decompressed)`, λ9fbd6d5568f6 = λc53c87f639ab.replaceAll(λ14e59380f997, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λa24a1669b214, "this.callbacks[e.data.id]");
  return new Response(λ9fbd6d5568f6, {
    status: λ6aa75d7576a7.status,
    statusText: λ6aa75d7576a7.statusText,
    headers: λa51d714cd3fb
  });
}

function bp(λ712b953fcc58) {
  const λ6aa75d7576a7 = λ712b953fcc58.request.headers.get("accept") || "", λdc499c459718 = new URL(λ712b953fcc58.request.url).pathname;
  let λc53c87f639ab = "";
  try {
    λc53c87f639ab = new URL(lp(λ712b953fcc58.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ712b953fcc58.request.destination) || /javascript|ecmascript|text\/css/i.test(λ6aa75d7576a7) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λdc499c459718) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λc53c87f639ab);
}

function qp(λ712b953fcc58) {
  return /^\s*</.test(λ712b953fcc58) || /^\s*\)\]\}'/.test(λ712b953fcc58) || /^\s*\)\]/.test(λ712b953fcc58);
}

async function kp(λ712b953fcc58) {
  if (mp(λ712b953fcc58)) return fp(λ712b953fcc58);
  const {engine: λ6aa75d7576a7} = ip(λ712b953fcc58.request.url);
  if (hp(λ712b953fcc58)) return gp(λ712b953fcc58);
  const λdc499c459718 = await _p(λ712b953fcc58, await xp(λ712b953fcc58, λ6aa75d7576a7)), λc53c87f639ab = λdc499c459718.headers.get("content-type") || "", λa24a1669b214 = bp(λ712b953fcc58), λa51d714cd3fb = λa24a1669b214 && (λc53c87f639ab.includes("text/html") || λc53c87f639ab.includes("application/json") || λc53c87f639ab.includes("text/json"));
  return λa24a1669b214 && λa51d714cd3fb ? Response.error() : λa24a1669b214 && λdc499c459718.status >= 400 ? λdc499c459718 : λa24a1669b214 && qp(await λdc499c459718.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ712b953fcc58.request.destination), 
  λdc499c459718);
}

self.addEventListener("fetch", λ712b953fcc58 => {
  λ712b953fcc58.respondWith(kp(λ712b953fcc58).catch(() => Response.error()));
});
