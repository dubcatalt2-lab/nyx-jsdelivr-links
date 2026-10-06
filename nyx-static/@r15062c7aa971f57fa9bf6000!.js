importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λe96a80b59ccc = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λda7adc6fa351 => {
    "function" == typeof λda7adc6fa351 && queueMicrotask(() => λda7adc6fa351(λe96a80b59ccc));
  }, λda7adc6fa351 = Object.freeze({
    getCurrentPosition(λe96a80b59ccc, λda7adc6fa351) {
      t(λda7adc6fa351);
    },
    watchPosition: (λe96a80b59ccc, λda7adc6fa351) => (t(λda7adc6fa351), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λda7adc6fa351
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λda7adc6fa351
    });
  } catch {}
  const λ5767f611ed68 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ5767f611ed68) try {
    navigator.permissions.query = λe96a80b59ccc => {
      if ("geolocation" === String(λe96a80b59ccc?.name || "").toLowerCase()) {
        const λe96a80b59ccc = new EventTarget;
        return Object.defineProperties(λe96a80b59ccc, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λe96a80b59ccc);
      }
      return λ5767f611ed68(λe96a80b59ccc);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λe96a80b59ccc) {
  try {
    const λda7adc6fa351 = new URL(λe96a80b59ccc).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λda7adc6fa351 ? {
      id: λda7adc6fa351[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λda7adc6fa351[1]}/`,
      dbName: `__nyx_uv_tab_${λda7adc6fa351[1]}`
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

function ip(λe96a80b59ccc) {
  const λda7adc6fa351 = cp(λe96a80b59ccc), λ5767f611ed68 = λda7adc6fa351.id || "legacy";
  let λ24e62093a17a = sp.get(λ5767f611ed68);
  if (!λ24e62093a17a) {
    const λe96a80b59ccc = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λe96a80b59ccc.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ24e62093a17a = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λda7adc6fa351.prefix,
      cookieDbName: λda7adc6fa351.dbName,
      inject: λe96a80b59ccc
    }), sp.set(λ5767f611ed68, λ24e62093a17a);
  }
  return {
    engine: λ24e62093a17a,
    session: λda7adc6fa351
  };
}

function up(λe96a80b59ccc) {
  return new Promise(λda7adc6fa351 => {
    let λ5767f611ed68;
    try {
      λ5767f611ed68 = indexedDB.open(λe96a80b59ccc);
    } catch {
      return void λda7adc6fa351(!1);
    }
    λ5767f611ed68.onerror = () => λda7adc6fa351(!1), λ5767f611ed68.onupgradeneeded = () => {}, 
    λ5767f611ed68.onsuccess = () => {
      const λe96a80b59ccc = λ5767f611ed68.result;
      if (!λe96a80b59ccc.objectStoreNames.contains("cookies")) return λe96a80b59ccc.close(), 
      void λda7adc6fa351(!0);
      const λ24e62093a17a = λe96a80b59ccc.transaction("cookies", "readwrite");
      λ24e62093a17a.objectStore("cookies").clear(), λ24e62093a17a.oncomplete = () => {
        λe96a80b59ccc.close(), λda7adc6fa351(!0);
      }, λ24e62093a17a.onerror = () => {
        λe96a80b59ccc.close(), λda7adc6fa351(!1);
      }, λ24e62093a17a.onabort = () => {
        λe96a80b59ccc.close(), λda7adc6fa351(!1);
      };
    };
  });
}

function lp(λe96a80b59ccc) {
  try {
    const λda7adc6fa351 = new URL(λe96a80b59ccc), λ5767f611ed68 = cp(λe96a80b59ccc).prefix;
    return λda7adc6fa351.pathname.startsWith(λ5767f611ed68) ? self.__uv$config.decodeUrl(λda7adc6fa351.pathname.slice(λ5767f611ed68.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λe96a80b59ccc => {
  const λda7adc6fa351 = λe96a80b59ccc.data;
  if ("nyx:destroy-proxy-session" !== λda7adc6fa351?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λda7adc6fa351.sessionId || ""))) return;
  const λ5767f611ed68 = String(λda7adc6fa351.sessionId);
  sp.delete(λ5767f611ed68), λe96a80b59ccc.waitUntil?.(up(`__nyx_uv_tab_${λ5767f611ed68}`));
}), self.addEventListener("install", λe96a80b59ccc => {
  λe96a80b59ccc.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λe96a80b59ccc => {
  λe96a80b59ccc.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λe96a80b59ccc) {
  const λda7adc6fa351 = String(λe96a80b59ccc || "").toLowerCase();
  return dp.some(λe96a80b59ccc => λda7adc6fa351 === λe96a80b59ccc || λda7adc6fa351.endsWith(`.${λe96a80b59ccc}`));
}

function mp(λe96a80b59ccc) {
  const λda7adc6fa351 = lp(λe96a80b59ccc.request.url);
  if (!λda7adc6fa351) return !1;
  try {
    const λe96a80b59ccc = new URL(λda7adc6fa351);
    return pp(λe96a80b59ccc.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λe96a80b59ccc.pathname) || "serve.app.playsaurus.com" === λe96a80b59ccc.hostname && /\/ad-campaigns\//i.test(λe96a80b59ccc.pathname);
  } catch {
    return !1;
  }
}

function fp(λe96a80b59ccc) {
  const λda7adc6fa351 = λe96a80b59ccc.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λe96a80b59ccc.request.destination) || /javascript|ecmascript/i.test(λda7adc6fa351) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λe96a80b59ccc.request.destination || /text\/css/i.test(λda7adc6fa351) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λe96a80b59ccc.request.destination || "iframe" === λe96a80b59ccc.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λe96a80b59ccc) {
  if (![ "script", "worker", "sharedworker" ].includes(λe96a80b59ccc.request.destination)) return !1;
  try {
    const λda7adc6fa351 = new URL(lp(λe96a80b59ccc.request.url));
    return λda7adc6fa351.hostname.endsWith("cookielaw.org") || λda7adc6fa351.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λe96a80b59ccc) {
  const λda7adc6fa351 = λe96a80b59ccc.request.headers.get("accept") || "", λ5767f611ed68 = new URL(λe96a80b59ccc.request.url).pathname, λ24e62093a17a = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ5767f611ed68);
  return [ "script", "worker", "sharedworker" ].includes(λe96a80b59ccc.request.destination) || /javascript|ecmascript/i.test(λda7adc6fa351) || λ24e62093a17a ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λe96a80b59ccc) {
  if ("style" === λe96a80b59ccc.request.destination) return !0;
  const λda7adc6fa351 = λe96a80b59ccc.request.headers.get("accept") || "";
  if (/text\/css/i.test(λda7adc6fa351)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λe96a80b59ccc.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λe96a80b59ccc) {
  if ([ "script", "worker", "sharedworker" ].includes(λe96a80b59ccc.request.destination)) return !0;
  const λda7adc6fa351 = λe96a80b59ccc.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λda7adc6fa351)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λe96a80b59ccc.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λe96a80b59ccc) {
  return yp(λe96a80b59ccc) || wp(λe96a80b59ccc);
}

function jp(λe96a80b59ccc) {
  const λda7adc6fa351 = λe96a80b59ccc?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λda7adc6fa351);
}

async function xp(λe96a80b59ccc, λda7adc6fa351) {
  if (!vp(λe96a80b59ccc)) return λda7adc6fa351.fetch(λe96a80b59ccc);
  let λ5767f611ed68 = null, λ24e62093a17a = null;
  for (let λf3216a7e57d6 = 0; λf3216a7e57d6 < ap.length; λf3216a7e57d6 += 1) {
    const λda5b33609f6a = ap[λf3216a7e57d6];
    λda5b33609f6a && await new Promise(λe96a80b59ccc => setTimeout(λe96a80b59ccc, λda5b33609f6a));
    try {
      if (λ5767f611ed68 = await λda7adc6fa351.fetch(λe96a80b59ccc), λ24e62093a17a = null, 
      λ5767f611ed68.status < 400 && !jp(λ5767f611ed68)) return λ5767f611ed68;
    } catch (λe96a80b59ccc) {
      λ24e62093a17a = λe96a80b59ccc;
    }
  }
  if (λ5767f611ed68) return λ5767f611ed68;
  throw λ24e62093a17a || new Error("UV asset request failed");
}

async function _p(λe96a80b59ccc, λda7adc6fa351) {
  if (!wp(λe96a80b59ccc) || λda7adc6fa351.status >= 400) return λda7adc6fa351;
  let λ5767f611ed68;
  try {
    λ5767f611ed68 = new URL(lp(λe96a80b59ccc.request.url));
  } catch {
    return λda7adc6fa351;
  }
  if (!/unityloader\.js$/i.test(λ5767f611ed68.pathname)) return λda7adc6fa351;
  const λ24e62093a17a = await λda7adc6fa351.clone().text().catch(() => ""), λf3216a7e57d6 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ24e62093a17a.includes(λf3216a7e57d6)) return λda7adc6fa351;
  const λda5b33609f6a = new Headers(λda7adc6fa351.headers);
  λda5b33609f6a.delete("content-length"), λda5b33609f6a.delete("content-encoding"), 
  λda5b33609f6a.set("cache-control", "no-store");
  const λ26c14469dc91 = `${λf3216a7e57d6}(e.data.decompressed)`, λ95499f30948d = λ24e62093a17a.replaceAll(λ26c14469dc91, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λf3216a7e57d6, "this.callbacks[e.data.id]");
  return new Response(λ95499f30948d, {
    status: λda7adc6fa351.status,
    statusText: λda7adc6fa351.statusText,
    headers: λda5b33609f6a
  });
}

function bp(λe96a80b59ccc) {
  const λda7adc6fa351 = λe96a80b59ccc.request.headers.get("accept") || "", λ5767f611ed68 = new URL(λe96a80b59ccc.request.url).pathname;
  let λ24e62093a17a = "";
  try {
    λ24e62093a17a = new URL(lp(λe96a80b59ccc.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λe96a80b59ccc.request.destination) || /javascript|ecmascript|text\/css/i.test(λda7adc6fa351) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ5767f611ed68) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ24e62093a17a);
}

function qp(λe96a80b59ccc) {
  return /^\s*</.test(λe96a80b59ccc) || /^\s*\)\]\}'/.test(λe96a80b59ccc) || /^\s*\)\]/.test(λe96a80b59ccc);
}

async function kp(λe96a80b59ccc) {
  if (mp(λe96a80b59ccc)) return fp(λe96a80b59ccc);
  const {engine: λda7adc6fa351} = ip(λe96a80b59ccc.request.url);
  if (hp(λe96a80b59ccc)) return gp(λe96a80b59ccc);
  const λ5767f611ed68 = await _p(λe96a80b59ccc, await xp(λe96a80b59ccc, λda7adc6fa351)), λ24e62093a17a = λ5767f611ed68.headers.get("content-type") || "", λf3216a7e57d6 = bp(λe96a80b59ccc), λda5b33609f6a = λf3216a7e57d6 && (λ24e62093a17a.includes("text/html") || λ24e62093a17a.includes("application/json") || λ24e62093a17a.includes("text/json"));
  return λf3216a7e57d6 && λda5b33609f6a ? Response.error() : λf3216a7e57d6 && λ5767f611ed68.status >= 400 ? λ5767f611ed68 : λf3216a7e57d6 && qp(await λ5767f611ed68.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λe96a80b59ccc.request.destination), 
  λ5767f611ed68);
}

self.addEventListener("fetch", λe96a80b59ccc => {
  λe96a80b59ccc.respondWith(kp(λe96a80b59ccc).catch(() => Response.error()));
});
