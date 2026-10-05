importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r8d0666976f0f645fd5845781!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@rcc9d4b491867d65802ee0962!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@ra04990f3bc4b289e7b6d1871!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λd7ccaf00b428 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λb03a26dcc3bb => {
    "function" == typeof λb03a26dcc3bb && queueMicrotask(() => λb03a26dcc3bb(λd7ccaf00b428));
  }, λb03a26dcc3bb = Object.freeze({
    getCurrentPosition(λd7ccaf00b428, λb03a26dcc3bb) {
      t(λb03a26dcc3bb);
    },
    watchPosition: (λd7ccaf00b428, λb03a26dcc3bb) => (t(λb03a26dcc3bb), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λb03a26dcc3bb
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λb03a26dcc3bb
    });
  } catch {}
  const λ1a162b8d3867 = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ1a162b8d3867) try {
    navigator.permissions.query = λd7ccaf00b428 => {
      if ("geolocation" === String(λd7ccaf00b428?.name || "").toLowerCase()) {
        const λd7ccaf00b428 = new EventTarget;
        return Object.defineProperties(λd7ccaf00b428, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λd7ccaf00b428);
      }
      return λ1a162b8d3867(λd7ccaf00b428);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λd7ccaf00b428) {
  try {
    const λb03a26dcc3bb = new URL(λd7ccaf00b428).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λb03a26dcc3bb ? {
      id: λb03a26dcc3bb[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λb03a26dcc3bb[1]}/`,
      dbName: `__nyx_uv_tab_${λb03a26dcc3bb[1]}`
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

function ip(λd7ccaf00b428) {
  const λb03a26dcc3bb = cp(λd7ccaf00b428), λ1a162b8d3867 = λb03a26dcc3bb.id || "legacy";
  let λa0d41fb49986 = sp.get(λ1a162b8d3867);
  if (!λa0d41fb49986) {
    const λd7ccaf00b428 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λd7ccaf00b428.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λa0d41fb49986 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λb03a26dcc3bb.prefix,
      cookieDbName: λb03a26dcc3bb.dbName,
      inject: λd7ccaf00b428
    }), sp.set(λ1a162b8d3867, λa0d41fb49986);
  }
  return {
    engine: λa0d41fb49986,
    session: λb03a26dcc3bb
  };
}

function up(λd7ccaf00b428) {
  return new Promise(λb03a26dcc3bb => {
    let λ1a162b8d3867;
    try {
      λ1a162b8d3867 = indexedDB.open(λd7ccaf00b428);
    } catch {
      return void λb03a26dcc3bb(!1);
    }
    λ1a162b8d3867.onerror = () => λb03a26dcc3bb(!1), λ1a162b8d3867.onupgradeneeded = () => {}, 
    λ1a162b8d3867.onsuccess = () => {
      const λd7ccaf00b428 = λ1a162b8d3867.result;
      if (!λd7ccaf00b428.objectStoreNames.contains("cookies")) return λd7ccaf00b428.close(), 
      void λb03a26dcc3bb(!0);
      const λa0d41fb49986 = λd7ccaf00b428.transaction("cookies", "readwrite");
      λa0d41fb49986.objectStore("cookies").clear(), λa0d41fb49986.oncomplete = () => {
        λd7ccaf00b428.close(), λb03a26dcc3bb(!0);
      }, λa0d41fb49986.onerror = () => {
        λd7ccaf00b428.close(), λb03a26dcc3bb(!1);
      }, λa0d41fb49986.onabort = () => {
        λd7ccaf00b428.close(), λb03a26dcc3bb(!1);
      };
    };
  });
}

function lp(λd7ccaf00b428) {
  try {
    const λb03a26dcc3bb = new URL(λd7ccaf00b428), λ1a162b8d3867 = cp(λd7ccaf00b428).prefix;
    return λb03a26dcc3bb.pathname.startsWith(λ1a162b8d3867) ? self.__uv$config.decodeUrl(λb03a26dcc3bb.pathname.slice(λ1a162b8d3867.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λd7ccaf00b428 => {
  const λb03a26dcc3bb = λd7ccaf00b428.data;
  if ("nyx:destroy-proxy-session" !== λb03a26dcc3bb?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λb03a26dcc3bb.sessionId || ""))) return;
  const λ1a162b8d3867 = String(λb03a26dcc3bb.sessionId);
  sp.delete(λ1a162b8d3867), λd7ccaf00b428.waitUntil?.(up(`__nyx_uv_tab_${λ1a162b8d3867}`));
}), self.addEventListener("install", λd7ccaf00b428 => {
  λd7ccaf00b428.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λd7ccaf00b428 => {
  λd7ccaf00b428.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λd7ccaf00b428) {
  const λb03a26dcc3bb = String(λd7ccaf00b428 || "").toLowerCase();
  return dp.some(λd7ccaf00b428 => λb03a26dcc3bb === λd7ccaf00b428 || λb03a26dcc3bb.endsWith(`.${λd7ccaf00b428}`));
}

function mp(λd7ccaf00b428) {
  const λb03a26dcc3bb = lp(λd7ccaf00b428.request.url);
  if (!λb03a26dcc3bb) return !1;
  try {
    const λd7ccaf00b428 = new URL(λb03a26dcc3bb);
    return pp(λd7ccaf00b428.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λd7ccaf00b428.pathname) || "serve.app.playsaurus.com" === λd7ccaf00b428.hostname && /\/ad-campaigns\//i.test(λd7ccaf00b428.pathname);
  } catch {
    return !1;
  }
}

function fp(λd7ccaf00b428) {
  const λb03a26dcc3bb = λd7ccaf00b428.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λd7ccaf00b428.request.destination) || /javascript|ecmascript/i.test(λb03a26dcc3bb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λd7ccaf00b428.request.destination || /text\/css/i.test(λb03a26dcc3bb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λd7ccaf00b428.request.destination || "iframe" === λd7ccaf00b428.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λd7ccaf00b428) {
  if (![ "script", "worker", "sharedworker" ].includes(λd7ccaf00b428.request.destination)) return !1;
  try {
    const λb03a26dcc3bb = new URL(lp(λd7ccaf00b428.request.url));
    return λb03a26dcc3bb.hostname.endsWith("cookielaw.org") || λb03a26dcc3bb.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λd7ccaf00b428) {
  const λb03a26dcc3bb = λd7ccaf00b428.request.headers.get("accept") || "", λ1a162b8d3867 = new URL(λd7ccaf00b428.request.url).pathname, λa0d41fb49986 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ1a162b8d3867);
  return [ "script", "worker", "sharedworker" ].includes(λd7ccaf00b428.request.destination) || /javascript|ecmascript/i.test(λb03a26dcc3bb) || λa0d41fb49986 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λd7ccaf00b428) {
  if ("style" === λd7ccaf00b428.request.destination) return !0;
  const λb03a26dcc3bb = λd7ccaf00b428.request.headers.get("accept") || "";
  if (/text\/css/i.test(λb03a26dcc3bb)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λd7ccaf00b428.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λd7ccaf00b428) {
  if ([ "script", "worker", "sharedworker" ].includes(λd7ccaf00b428.request.destination)) return !0;
  const λb03a26dcc3bb = λd7ccaf00b428.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λb03a26dcc3bb)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λd7ccaf00b428.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λd7ccaf00b428) {
  return yp(λd7ccaf00b428) || wp(λd7ccaf00b428);
}

function jp(λd7ccaf00b428) {
  const λb03a26dcc3bb = λd7ccaf00b428?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λb03a26dcc3bb);
}

async function xp(λd7ccaf00b428, λb03a26dcc3bb) {
  if (!vp(λd7ccaf00b428)) return λb03a26dcc3bb.fetch(λd7ccaf00b428);
  let λ1a162b8d3867 = null, λa0d41fb49986 = null;
  for (let λ3fe81498b520 = 0; λ3fe81498b520 < ap.length; λ3fe81498b520 += 1) {
    const λ311b0c2d0c15 = ap[λ3fe81498b520];
    λ311b0c2d0c15 && await new Promise(λd7ccaf00b428 => setTimeout(λd7ccaf00b428, λ311b0c2d0c15));
    try {
      if (λ1a162b8d3867 = await λb03a26dcc3bb.fetch(λd7ccaf00b428), λa0d41fb49986 = null, 
      λ1a162b8d3867.status < 400 && !jp(λ1a162b8d3867)) return λ1a162b8d3867;
    } catch (λd7ccaf00b428) {
      λa0d41fb49986 = λd7ccaf00b428;
    }
  }
  if (λ1a162b8d3867) return λ1a162b8d3867;
  throw λa0d41fb49986 || new Error("UV asset request failed");
}

async function _p(λd7ccaf00b428, λb03a26dcc3bb) {
  if (!wp(λd7ccaf00b428) || λb03a26dcc3bb.status >= 400) return λb03a26dcc3bb;
  let λ1a162b8d3867;
  try {
    λ1a162b8d3867 = new URL(lp(λd7ccaf00b428.request.url));
  } catch {
    return λb03a26dcc3bb;
  }
  if (!/unityloader\.js$/i.test(λ1a162b8d3867.pathname)) return λb03a26dcc3bb;
  const λa0d41fb49986 = await λb03a26dcc3bb.clone().text().catch(() => ""), λ3fe81498b520 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λa0d41fb49986.includes(λ3fe81498b520)) return λb03a26dcc3bb;
  const λ311b0c2d0c15 = new Headers(λb03a26dcc3bb.headers);
  λ311b0c2d0c15.delete("content-length"), λ311b0c2d0c15.delete("content-encoding"), 
  λ311b0c2d0c15.set("cache-control", "no-store");
  const λfc4e01e62462 = `${λ3fe81498b520}(e.data.decompressed)`, λ211d99e9b25e = λa0d41fb49986.replaceAll(λfc4e01e62462, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λ3fe81498b520, "this.callbacks[e.data.id]");
  return new Response(λ211d99e9b25e, {
    status: λb03a26dcc3bb.status,
    statusText: λb03a26dcc3bb.statusText,
    headers: λ311b0c2d0c15
  });
}

function bp(λd7ccaf00b428) {
  const λb03a26dcc3bb = λd7ccaf00b428.request.headers.get("accept") || "", λ1a162b8d3867 = new URL(λd7ccaf00b428.request.url).pathname;
  let λa0d41fb49986 = "";
  try {
    λa0d41fb49986 = new URL(lp(λd7ccaf00b428.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λd7ccaf00b428.request.destination) || /javascript|ecmascript|text\/css/i.test(λb03a26dcc3bb) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ1a162b8d3867) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λa0d41fb49986);
}

function qp(λd7ccaf00b428) {
  return /^\s*</.test(λd7ccaf00b428) || /^\s*\)\]\}'/.test(λd7ccaf00b428) || /^\s*\)\]/.test(λd7ccaf00b428);
}

async function kp(λd7ccaf00b428) {
  if (mp(λd7ccaf00b428)) return fp(λd7ccaf00b428);
  const {engine: λb03a26dcc3bb} = ip(λd7ccaf00b428.request.url);
  if (hp(λd7ccaf00b428)) return gp(λd7ccaf00b428);
  const λ1a162b8d3867 = await _p(λd7ccaf00b428, await xp(λd7ccaf00b428, λb03a26dcc3bb)), λa0d41fb49986 = λ1a162b8d3867.headers.get("content-type") || "", λ3fe81498b520 = bp(λd7ccaf00b428), λ311b0c2d0c15 = λ3fe81498b520 && (λa0d41fb49986.includes("text/html") || λa0d41fb49986.includes("application/json") || λa0d41fb49986.includes("text/json"));
  return λ3fe81498b520 && λ311b0c2d0c15 ? Response.error() : λ3fe81498b520 && λ1a162b8d3867.status >= 400 ? λ1a162b8d3867 : λ3fe81498b520 && qp(await λ1a162b8d3867.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λd7ccaf00b428.request.destination), 
  λ1a162b8d3867);
}

self.addEventListener("fetch", λd7ccaf00b428 => {
  λd7ccaf00b428.respondWith(kp(λd7ccaf00b428).catch(() => Response.error()));
});
