importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λa76676122868 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ3d35a95e3d07 => {
    "function" == typeof λ3d35a95e3d07 && queueMicrotask(() => λ3d35a95e3d07(λa76676122868));
  }, λ3d35a95e3d07 = Object.freeze({
    getCurrentPosition(λa76676122868, λ3d35a95e3d07) {
      t(λ3d35a95e3d07);
    },
    watchPosition: (λa76676122868, λ3d35a95e3d07) => (t(λ3d35a95e3d07), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ3d35a95e3d07
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ3d35a95e3d07
    });
  } catch {}
  const λ18a46bc1e30f = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ18a46bc1e30f) try {
    navigator.permissions.query = λa76676122868 => {
      if ("geolocation" === String(λa76676122868?.name || "").toLowerCase()) {
        const λa76676122868 = new EventTarget;
        return Object.defineProperties(λa76676122868, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λa76676122868);
      }
      return λ18a46bc1e30f(λa76676122868);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λa76676122868) {
  try {
    const λ3d35a95e3d07 = new URL(λa76676122868).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ3d35a95e3d07 ? {
      id: λ3d35a95e3d07[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ3d35a95e3d07[1]}/`,
      dbName: `__nyx_uv_tab_${λ3d35a95e3d07[1]}`
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

function ip(λa76676122868) {
  const λ3d35a95e3d07 = cp(λa76676122868), λ18a46bc1e30f = λ3d35a95e3d07.id || "legacy";
  let λ8b125f3666c1 = sp.get(λ18a46bc1e30f);
  if (!λ8b125f3666c1) {
    const λa76676122868 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λa76676122868.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ8b125f3666c1 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ3d35a95e3d07.prefix,
      cookieDbName: λ3d35a95e3d07.dbName,
      inject: λa76676122868
    }), sp.set(λ18a46bc1e30f, λ8b125f3666c1);
  }
  return {
    engine: λ8b125f3666c1,
    session: λ3d35a95e3d07
  };
}

function up(λa76676122868) {
  return new Promise(λ3d35a95e3d07 => {
    let λ18a46bc1e30f;
    try {
      λ18a46bc1e30f = indexedDB.open(λa76676122868);
    } catch {
      return void λ3d35a95e3d07(!1);
    }
    λ18a46bc1e30f.onerror = () => λ3d35a95e3d07(!1), λ18a46bc1e30f.onupgradeneeded = () => {}, 
    λ18a46bc1e30f.onsuccess = () => {
      const λa76676122868 = λ18a46bc1e30f.result;
      if (!λa76676122868.objectStoreNames.contains("cookies")) return λa76676122868.close(), 
      void λ3d35a95e3d07(!0);
      const λ8b125f3666c1 = λa76676122868.transaction("cookies", "readwrite");
      λ8b125f3666c1.objectStore("cookies").clear(), λ8b125f3666c1.oncomplete = () => {
        λa76676122868.close(), λ3d35a95e3d07(!0);
      }, λ8b125f3666c1.onerror = () => {
        λa76676122868.close(), λ3d35a95e3d07(!1);
      }, λ8b125f3666c1.onabort = () => {
        λa76676122868.close(), λ3d35a95e3d07(!1);
      };
    };
  });
}

function lp(λa76676122868) {
  try {
    const λ3d35a95e3d07 = new URL(λa76676122868), λ18a46bc1e30f = cp(λa76676122868).prefix;
    return λ3d35a95e3d07.pathname.startsWith(λ18a46bc1e30f) ? self.__uv$config.decodeUrl(λ3d35a95e3d07.pathname.slice(λ18a46bc1e30f.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λa76676122868 => {
  const λ3d35a95e3d07 = λa76676122868.data;
  if ("nyx:destroy-proxy-session" !== λ3d35a95e3d07?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ3d35a95e3d07.sessionId || ""))) return;
  const λ18a46bc1e30f = String(λ3d35a95e3d07.sessionId);
  sp.delete(λ18a46bc1e30f), λa76676122868.waitUntil?.(up(`__nyx_uv_tab_${λ18a46bc1e30f}`));
}), self.addEventListener("install", λa76676122868 => {
  λa76676122868.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λa76676122868 => {
  λa76676122868.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λa76676122868) {
  const λ3d35a95e3d07 = String(λa76676122868 || "").toLowerCase();
  return dp.some(λa76676122868 => λ3d35a95e3d07 === λa76676122868 || λ3d35a95e3d07.endsWith(`.${λa76676122868}`));
}

function mp(λa76676122868) {
  const λ3d35a95e3d07 = lp(λa76676122868.request.url);
  if (!λ3d35a95e3d07) return !1;
  try {
    const λa76676122868 = new URL(λ3d35a95e3d07);
    return pp(λa76676122868.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λa76676122868.pathname) || "serve.app.playsaurus.com" === λa76676122868.hostname && /\/ad-campaigns\//i.test(λa76676122868.pathname);
  } catch {
    return !1;
  }
}

function fp(λa76676122868) {
  const λ3d35a95e3d07 = λa76676122868.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λa76676122868.request.destination) || /javascript|ecmascript/i.test(λ3d35a95e3d07) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λa76676122868.request.destination || /text\/css/i.test(λ3d35a95e3d07) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λa76676122868.request.destination || "iframe" === λa76676122868.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λa76676122868) {
  if (![ "script", "worker", "sharedworker" ].includes(λa76676122868.request.destination)) return !1;
  try {
    const λ3d35a95e3d07 = new URL(lp(λa76676122868.request.url));
    return λ3d35a95e3d07.hostname.endsWith("cookielaw.org") || λ3d35a95e3d07.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λa76676122868) {
  const λ3d35a95e3d07 = λa76676122868.request.headers.get("accept") || "", λ18a46bc1e30f = new URL(λa76676122868.request.url).pathname, λ8b125f3666c1 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ18a46bc1e30f);
  return [ "script", "worker", "sharedworker" ].includes(λa76676122868.request.destination) || /javascript|ecmascript/i.test(λ3d35a95e3d07) || λ8b125f3666c1 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λa76676122868) {
  if ("style" === λa76676122868.request.destination) return !0;
  const λ3d35a95e3d07 = λa76676122868.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ3d35a95e3d07)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λa76676122868.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λa76676122868) {
  if ([ "script", "worker", "sharedworker" ].includes(λa76676122868.request.destination)) return !0;
  const λ3d35a95e3d07 = λa76676122868.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ3d35a95e3d07)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λa76676122868.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λa76676122868) {
  return yp(λa76676122868) || wp(λa76676122868);
}

function jp(λa76676122868) {
  const λ3d35a95e3d07 = λa76676122868?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ3d35a95e3d07);
}

async function xp(λa76676122868, λ3d35a95e3d07) {
  if (!vp(λa76676122868)) return λ3d35a95e3d07.fetch(λa76676122868);
  let λ18a46bc1e30f = null, λ8b125f3666c1 = null;
  for (let λc8606700283c = 0; λc8606700283c < ap.length; λc8606700283c += 1) {
    const λ14b1898b5651 = ap[λc8606700283c];
    λ14b1898b5651 && await new Promise(λa76676122868 => setTimeout(λa76676122868, λ14b1898b5651));
    try {
      if (λ18a46bc1e30f = await λ3d35a95e3d07.fetch(λa76676122868), λ8b125f3666c1 = null, 
      λ18a46bc1e30f.status < 400 && !jp(λ18a46bc1e30f)) return λ18a46bc1e30f;
    } catch (λa76676122868) {
      λ8b125f3666c1 = λa76676122868;
    }
  }
  if (λ18a46bc1e30f) return λ18a46bc1e30f;
  throw λ8b125f3666c1 || new Error("UV asset request failed");
}

async function _p(λa76676122868, λ3d35a95e3d07) {
  if (!wp(λa76676122868) || λ3d35a95e3d07.status >= 400) return λ3d35a95e3d07;
  let λ18a46bc1e30f;
  try {
    λ18a46bc1e30f = new URL(lp(λa76676122868.request.url));
  } catch {
    return λ3d35a95e3d07;
  }
  if (!/unityloader\.js$/i.test(λ18a46bc1e30f.pathname)) return λ3d35a95e3d07;
  const λ8b125f3666c1 = await λ3d35a95e3d07.clone().text().catch(() => ""), λc8606700283c = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ8b125f3666c1.includes(λc8606700283c)) return λ3d35a95e3d07;
  const λ14b1898b5651 = new Headers(λ3d35a95e3d07.headers);
  λ14b1898b5651.delete("content-length"), λ14b1898b5651.delete("content-encoding"), 
  λ14b1898b5651.set("cache-control", "no-store");
  const λa8273d6b5fad = `${λc8606700283c}(e.data.decompressed)`, λ75d7f0671ed7 = λ8b125f3666c1.replaceAll(λa8273d6b5fad, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λc8606700283c, "this.callbacks[e.data.id]");
  return new Response(λ75d7f0671ed7, {
    status: λ3d35a95e3d07.status,
    statusText: λ3d35a95e3d07.statusText,
    headers: λ14b1898b5651
  });
}

function bp(λa76676122868) {
  const λ3d35a95e3d07 = λa76676122868.request.headers.get("accept") || "", λ18a46bc1e30f = new URL(λa76676122868.request.url).pathname;
  let λ8b125f3666c1 = "";
  try {
    λ8b125f3666c1 = new URL(lp(λa76676122868.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λa76676122868.request.destination) || /javascript|ecmascript|text\/css/i.test(λ3d35a95e3d07) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ18a46bc1e30f) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ8b125f3666c1);
}

function qp(λa76676122868) {
  return /^\s*</.test(λa76676122868) || /^\s*\)\]\}'/.test(λa76676122868) || /^\s*\)\]/.test(λa76676122868);
}

async function kp(λa76676122868) {
  if (mp(λa76676122868)) return fp(λa76676122868);
  const {engine: λ3d35a95e3d07} = ip(λa76676122868.request.url);
  if (hp(λa76676122868)) return gp(λa76676122868);
  const λ18a46bc1e30f = await _p(λa76676122868, await xp(λa76676122868, λ3d35a95e3d07)), λ8b125f3666c1 = λ18a46bc1e30f.headers.get("content-type") || "", λc8606700283c = bp(λa76676122868), λ14b1898b5651 = λc8606700283c && (λ8b125f3666c1.includes("text/html") || λ8b125f3666c1.includes("application/json") || λ8b125f3666c1.includes("text/json"));
  return λc8606700283c && λ14b1898b5651 ? Response.error() : λc8606700283c && λ18a46bc1e30f.status >= 400 ? λ18a46bc1e30f : λc8606700283c && qp(await λ18a46bc1e30f.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λa76676122868.request.destination), 
  λ18a46bc1e30f);
}

self.addEventListener("fetch", λa76676122868 => {
  λa76676122868.respondWith(kp(λa76676122868).catch(() => Response.error()));
});
