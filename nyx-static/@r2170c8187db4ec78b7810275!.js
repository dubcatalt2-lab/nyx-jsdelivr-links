importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λ38a84ae8645d = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ0c2a5bd9ace5 => {
    "function" == typeof λ0c2a5bd9ace5 && queueMicrotask(() => λ0c2a5bd9ace5(λ38a84ae8645d));
  }, λ0c2a5bd9ace5 = Object.freeze({
    getCurrentPosition(λ38a84ae8645d, λ0c2a5bd9ace5) {
      t(λ0c2a5bd9ace5);
    },
    watchPosition: (λ38a84ae8645d, λ0c2a5bd9ace5) => (t(λ0c2a5bd9ace5), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ0c2a5bd9ace5
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ0c2a5bd9ace5
    });
  } catch {}
  const λ609e68d68634 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ609e68d68634) try {
    navigator.permissions.query = λ38a84ae8645d => {
      if ("geolocation" === String(λ38a84ae8645d?.name || "").toLowerCase()) {
        const λ38a84ae8645d = new EventTarget;
        return Object.defineProperties(λ38a84ae8645d, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λ38a84ae8645d);
      }
      return λ609e68d68634(λ38a84ae8645d);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λ38a84ae8645d) {
  try {
    const λ0c2a5bd9ace5 = new URL(λ38a84ae8645d).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ0c2a5bd9ace5 ? {
      id: λ0c2a5bd9ace5[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ0c2a5bd9ace5[1]}/`,
      dbName: `__nyx_uv_tab_${λ0c2a5bd9ace5[1]}`
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

function ip(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = cp(λ38a84ae8645d), λ609e68d68634 = λ0c2a5bd9ace5.id || "legacy";
  let λa063ed38f7c3 = sp.get(λ609e68d68634);
  if (!λa063ed38f7c3) {
    const λ38a84ae8645d = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λ38a84ae8645d.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λa063ed38f7c3 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ0c2a5bd9ace5.prefix,
      cookieDbName: λ0c2a5bd9ace5.dbName,
      inject: λ38a84ae8645d
    }), sp.set(λ609e68d68634, λa063ed38f7c3);
  }
  return {
    engine: λa063ed38f7c3,
    session: λ0c2a5bd9ace5
  };
}

function up(λ38a84ae8645d) {
  return new Promise(λ0c2a5bd9ace5 => {
    let λ609e68d68634;
    try {
      λ609e68d68634 = indexedDB.open(λ38a84ae8645d);
    } catch {
      return void λ0c2a5bd9ace5(!1);
    }
    λ609e68d68634.onerror = () => λ0c2a5bd9ace5(!1), λ609e68d68634.onupgradeneeded = () => {}, 
    λ609e68d68634.onsuccess = () => {
      const λ38a84ae8645d = λ609e68d68634.result;
      if (!λ38a84ae8645d.objectStoreNames.contains("cookies")) return λ38a84ae8645d.close(), 
      void λ0c2a5bd9ace5(!0);
      const λa063ed38f7c3 = λ38a84ae8645d.transaction("cookies", "readwrite");
      λa063ed38f7c3.objectStore("cookies").clear(), λa063ed38f7c3.oncomplete = () => {
        λ38a84ae8645d.close(), λ0c2a5bd9ace5(!0);
      }, λa063ed38f7c3.onerror = () => {
        λ38a84ae8645d.close(), λ0c2a5bd9ace5(!1);
      }, λa063ed38f7c3.onabort = () => {
        λ38a84ae8645d.close(), λ0c2a5bd9ace5(!1);
      };
    };
  });
}

function lp(λ38a84ae8645d) {
  try {
    const λ0c2a5bd9ace5 = new URL(λ38a84ae8645d), λ609e68d68634 = cp(λ38a84ae8645d).prefix;
    return λ0c2a5bd9ace5.pathname.startsWith(λ609e68d68634) ? self.__uv$config.decodeUrl(λ0c2a5bd9ace5.pathname.slice(λ609e68d68634.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λ38a84ae8645d => {
  const λ0c2a5bd9ace5 = λ38a84ae8645d.data;
  if ("nyx:destroy-proxy-session" !== λ0c2a5bd9ace5?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ0c2a5bd9ace5.sessionId || ""))) return;
  const λ609e68d68634 = String(λ0c2a5bd9ace5.sessionId);
  sp.delete(λ609e68d68634), λ38a84ae8645d.waitUntil?.(up(`__nyx_uv_tab_${λ609e68d68634}`));
}), self.addEventListener("install", λ38a84ae8645d => {
  λ38a84ae8645d.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λ38a84ae8645d => {
  λ38a84ae8645d.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = String(λ38a84ae8645d || "").toLowerCase();
  return dp.some(λ38a84ae8645d => λ0c2a5bd9ace5 === λ38a84ae8645d || λ0c2a5bd9ace5.endsWith(`.${λ38a84ae8645d}`));
}

function mp(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = lp(λ38a84ae8645d.request.url);
  if (!λ0c2a5bd9ace5) return !1;
  try {
    const λ38a84ae8645d = new URL(λ0c2a5bd9ace5);
    return pp(λ38a84ae8645d.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λ38a84ae8645d.pathname) || "serve.app.playsaurus.com" === λ38a84ae8645d.hostname && /\/ad-campaigns\//i.test(λ38a84ae8645d.pathname);
  } catch {
    return !1;
  }
}

function fp(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = λ38a84ae8645d.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λ38a84ae8645d.request.destination) || /javascript|ecmascript/i.test(λ0c2a5bd9ace5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λ38a84ae8645d.request.destination || /text\/css/i.test(λ0c2a5bd9ace5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λ38a84ae8645d.request.destination || "iframe" === λ38a84ae8645d.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λ38a84ae8645d) {
  if (![ "script", "worker", "sharedworker" ].includes(λ38a84ae8645d.request.destination)) return !1;
  try {
    const λ0c2a5bd9ace5 = new URL(lp(λ38a84ae8645d.request.url));
    return λ0c2a5bd9ace5.hostname.endsWith("cookielaw.org") || λ0c2a5bd9ace5.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = λ38a84ae8645d.request.headers.get("accept") || "", λ609e68d68634 = new URL(λ38a84ae8645d.request.url).pathname, λa063ed38f7c3 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ609e68d68634);
  return [ "script", "worker", "sharedworker" ].includes(λ38a84ae8645d.request.destination) || /javascript|ecmascript/i.test(λ0c2a5bd9ace5) || λa063ed38f7c3 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λ38a84ae8645d) {
  if ("style" === λ38a84ae8645d.request.destination) return !0;
  const λ0c2a5bd9ace5 = λ38a84ae8645d.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ0c2a5bd9ace5)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λ38a84ae8645d.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λ38a84ae8645d) {
  if ([ "script", "worker", "sharedworker" ].includes(λ38a84ae8645d.request.destination)) return !0;
  const λ0c2a5bd9ace5 = λ38a84ae8645d.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ0c2a5bd9ace5)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λ38a84ae8645d.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λ38a84ae8645d) {
  return yp(λ38a84ae8645d) || wp(λ38a84ae8645d);
}

function jp(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = λ38a84ae8645d?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ0c2a5bd9ace5);
}

async function xp(λ38a84ae8645d, λ0c2a5bd9ace5) {
  if (!vp(λ38a84ae8645d)) return λ0c2a5bd9ace5.fetch(λ38a84ae8645d);
  let λ609e68d68634 = null, λa063ed38f7c3 = null;
  for (let λc97472edef25 = 0; λc97472edef25 < ap.length; λc97472edef25 += 1) {
    const λ455d7e4e4523 = ap[λc97472edef25];
    λ455d7e4e4523 && await new Promise(λ38a84ae8645d => setTimeout(λ38a84ae8645d, λ455d7e4e4523));
    try {
      if (λ609e68d68634 = await λ0c2a5bd9ace5.fetch(λ38a84ae8645d), λa063ed38f7c3 = null, 
      λ609e68d68634.status < 400 && !jp(λ609e68d68634)) return λ609e68d68634;
    } catch (λ38a84ae8645d) {
      λa063ed38f7c3 = λ38a84ae8645d;
    }
  }
  if (λ609e68d68634) return λ609e68d68634;
  throw λa063ed38f7c3 || new Error("UV asset request failed");
}

async function _p(λ38a84ae8645d, λ0c2a5bd9ace5) {
  if (!wp(λ38a84ae8645d) || λ0c2a5bd9ace5.status >= 400) return λ0c2a5bd9ace5;
  let λ609e68d68634;
  try {
    λ609e68d68634 = new URL(lp(λ38a84ae8645d.request.url));
  } catch {
    return λ0c2a5bd9ace5;
  }
  if (!/unityloader\.js$/i.test(λ609e68d68634.pathname)) return λ0c2a5bd9ace5;
  const λa063ed38f7c3 = await λ0c2a5bd9ace5.clone().text().catch(() => ""), λc97472edef25 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λa063ed38f7c3.includes(λc97472edef25)) return λ0c2a5bd9ace5;
  const λ455d7e4e4523 = new Headers(λ0c2a5bd9ace5.headers);
  λ455d7e4e4523.delete("content-length"), λ455d7e4e4523.delete("content-encoding"), 
  λ455d7e4e4523.set("cache-control", "no-store");
  const λ5fe771e40580 = `${λc97472edef25}(e.data.decompressed)`, λ6e237ffb2b74 = λa063ed38f7c3.replaceAll(λ5fe771e40580, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λc97472edef25, "this.callbacks[e.data.id]");
  return new Response(λ6e237ffb2b74, {
    status: λ0c2a5bd9ace5.status,
    statusText: λ0c2a5bd9ace5.statusText,
    headers: λ455d7e4e4523
  });
}

function bp(λ38a84ae8645d) {
  const λ0c2a5bd9ace5 = λ38a84ae8645d.request.headers.get("accept") || "", λ609e68d68634 = new URL(λ38a84ae8645d.request.url).pathname;
  let λa063ed38f7c3 = "";
  try {
    λa063ed38f7c3 = new URL(lp(λ38a84ae8645d.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λ38a84ae8645d.request.destination) || /javascript|ecmascript|text\/css/i.test(λ0c2a5bd9ace5) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ609e68d68634) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λa063ed38f7c3);
}

function qp(λ38a84ae8645d) {
  return /^\s*</.test(λ38a84ae8645d) || /^\s*\)\]\}'/.test(λ38a84ae8645d) || /^\s*\)\]/.test(λ38a84ae8645d);
}

async function kp(λ38a84ae8645d) {
  if (mp(λ38a84ae8645d)) return fp(λ38a84ae8645d);
  const {engine: λ0c2a5bd9ace5} = ip(λ38a84ae8645d.request.url);
  if (hp(λ38a84ae8645d)) return gp(λ38a84ae8645d);
  const λ609e68d68634 = await _p(λ38a84ae8645d, await xp(λ38a84ae8645d, λ0c2a5bd9ace5)), λa063ed38f7c3 = λ609e68d68634.headers.get("content-type") || "", λc97472edef25 = bp(λ38a84ae8645d), λ455d7e4e4523 = λc97472edef25 && (λa063ed38f7c3.includes("text/html") || λa063ed38f7c3.includes("application/json") || λa063ed38f7c3.includes("text/json"));
  return λc97472edef25 && λ455d7e4e4523 ? Response.error() : λc97472edef25 && λ609e68d68634.status >= 400 ? λ609e68d68634 : λc97472edef25 && qp(await λ609e68d68634.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λ38a84ae8645d.request.destination), 
  λ609e68d68634);
}

self.addEventListener("fetch", λ38a84ae8645d => {
  λ38a84ae8645d.respondWith(kp(λ38a84ae8645d).catch(() => Response.error()));
});
