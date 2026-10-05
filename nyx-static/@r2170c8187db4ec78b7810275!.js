importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@rf57c9d4258732e363cad638e!.js"), importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/@r486c5ea695f4792eb2e1621b!.js"), 
importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/uv/@r07857cdbac02a78e5845521a!.js");

const sp = new Map, ap = [ 0, 180, 520 ], op = `<script data-nyx-proxy-privacy>(${function() {
  if (globalThis.__nyxProxyPrivacyInstalled) return;
  globalThis.__nyxProxyPrivacyInstalled = !0;
  const λb4a044c02909 = Object.freeze({
    code: 1,
    message: "Location access is disabled in Nyx private tabs."
  }), t = λ5556009024bf => {
    "function" == typeof λ5556009024bf && queueMicrotask(() => λ5556009024bf(λb4a044c02909));
  }, λ5556009024bf = Object.freeze({
    getCurrentPosition(λb4a044c02909, λ5556009024bf) {
      t(λ5556009024bf);
    },
    watchPosition: (λb4a044c02909, λ5556009024bf) => (t(λ5556009024bf), 0),
    clearWatch() {}
  });
  try {
    Object.defineProperty(Navigator.prototype, "geolocation", {
      configurable: !0,
      get: () => λ5556009024bf
    });
  } catch {}
  try {
    Object.defineProperty(navigator, "geolocation", {
      configurable: !0,
      get: () => λ5556009024bf
    });
  } catch {}
  const λ195ec779584e = navigator.permissions?.query?.bind(navigator.permissions);
  if (λ195ec779584e) try {
    navigator.permissions.query = λb4a044c02909 => {
      if ("geolocation" === String(λb4a044c02909?.name || "").toLowerCase()) {
        const λb4a044c02909 = new EventTarget;
        return Object.defineProperties(λb4a044c02909, {
          state: {
            enumerable: !0,
            value: "denied"
          },
          onchange: {
            configurable: !0,
            writable: !0,
            value: null
          }
        }), Promise.resolve(λb4a044c02909);
      }
      return λ195ec779584e(λb4a044c02909);
    };
  } catch {}
}.toString()})();<\/script>`;

function cp(λb4a044c02909) {
  try {
    const λ5556009024bf = new URL(λb4a044c02909).pathname.match(/^\/service\/(nyx_[a-z0-9_-]{12,80})\//i);
    return λ5556009024bf ? {
      id: λ5556009024bf[1],
      prefix: `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/${λ5556009024bf[1]}/`,
      dbName: `__nyx_uv_tab_${λ5556009024bf[1]}`
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

function ip(λb4a044c02909) {
  const λ5556009024bf = cp(λb4a044c02909), λ195ec779584e = λ5556009024bf.id || "legacy";
  let λ071b094329e7 = sp.get(λ195ec779584e);
  if (!λ071b094329e7) {
    const λb4a044c02909 = Array.isArray(self.__uv$config?.inject) ? [ ...self.__uv$config.inject ] : [];
    λb4a044c02909.push({
      host: ".*",
      injectTo: "head",
      html: op
    }), λ071b094329e7 = new UVServiceWorker({
      ...self.__uv$config,
      prefix: λ5556009024bf.prefix,
      cookieDbName: λ5556009024bf.dbName,
      inject: λb4a044c02909
    }), sp.set(λ195ec779584e, λ071b094329e7);
  }
  return {
    engine: λ071b094329e7,
    session: λ5556009024bf
  };
}

function up(λb4a044c02909) {
  return new Promise(λ5556009024bf => {
    let λ195ec779584e;
    try {
      λ195ec779584e = indexedDB.open(λb4a044c02909);
    } catch {
      return void λ5556009024bf(!1);
    }
    λ195ec779584e.onerror = () => λ5556009024bf(!1), λ195ec779584e.onupgradeneeded = () => {}, 
    λ195ec779584e.onsuccess = () => {
      const λb4a044c02909 = λ195ec779584e.result;
      if (!λb4a044c02909.objectStoreNames.contains("cookies")) return λb4a044c02909.close(), 
      void λ5556009024bf(!0);
      const λ071b094329e7 = λb4a044c02909.transaction("cookies", "readwrite");
      λ071b094329e7.objectStore("cookies").clear(), λ071b094329e7.oncomplete = () => {
        λb4a044c02909.close(), λ5556009024bf(!0);
      }, λ071b094329e7.onerror = () => {
        λb4a044c02909.close(), λ5556009024bf(!1);
      }, λ071b094329e7.onabort = () => {
        λb4a044c02909.close(), λ5556009024bf(!1);
      };
    };
  });
}

function lp(λb4a044c02909) {
  try {
    const λ5556009024bf = new URL(λb4a044c02909), λ195ec779584e = cp(λb4a044c02909).prefix;
    return λ5556009024bf.pathname.startsWith(λ195ec779584e) ? self.__uv$config.decodeUrl(λ5556009024bf.pathname.slice(λ195ec779584e.length)) : "";
  } catch {
    return "";
  }
}

self.addEventListener("message", λb4a044c02909 => {
  const λ5556009024bf = λb4a044c02909.data;
  if ("nyx:destroy-proxy-session" !== λ5556009024bf?.type || !/^nyx_[a-z0-9_-]{12,80}$/i.test(String(λ5556009024bf.sessionId || ""))) return;
  const λ195ec779584e = String(λ5556009024bf.sessionId);
  sp.delete(λ195ec779584e), λb4a044c02909.waitUntil?.(up(`__nyx_uv_tab_${λ195ec779584e}`));
}), self.addEventListener("install", λb4a044c02909 => {
  λb4a044c02909.waitUntil(self.skipWaiting());
}), self.addEventListener("activate", λb4a044c02909 => {
  λb4a044c02909.waitUntil(self.clients.claim());
});

const dp = [ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "openx.net", "outbrain.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "taboola.com", "trafficjunky.com" ];

function pp(λb4a044c02909) {
  const λ5556009024bf = String(λb4a044c02909 || "").toLowerCase();
  return dp.some(λb4a044c02909 => λ5556009024bf === λb4a044c02909 || λ5556009024bf.endsWith(`.${λb4a044c02909}`));
}

function mp(λb4a044c02909) {
  const λ5556009024bf = lp(λb4a044c02909.request.url);
  if (!λ5556009024bf) return !1;
  try {
    const λb4a044c02909 = new URL(λ5556009024bf);
    return pp(λb4a044c02909.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(λb4a044c02909.pathname) || "serve.app.playsaurus.com" === λb4a044c02909.hostname && /\/ad-campaigns\//i.test(λb4a044c02909.pathname);
  } catch {
    return !1;
  }
}

function fp(λb4a044c02909) {
  const λ5556009024bf = λb4a044c02909.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(λb4a044c02909.request.destination) || /javascript|ecmascript/i.test(λ5556009024bf) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === λb4a044c02909.request.destination || /text\/css/i.test(λ5556009024bf) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "document" === λb4a044c02909.request.destination || "iframe" === λb4a044c02909.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function hp(λb4a044c02909) {
  if (![ "script", "worker", "sharedworker" ].includes(λb4a044c02909.request.destination)) return !1;
  try {
    const λ5556009024bf = new URL(lp(λb4a044c02909.request.url));
    return λ5556009024bf.hostname.endsWith("cookielaw.org") || λ5556009024bf.hostname.endsWith("onetrust.com");
  } catch {
    return !1;
  }
}

function gp(λb4a044c02909) {
  const λ5556009024bf = λb4a044c02909.request.headers.get("accept") || "", λ195ec779584e = new URL(λb4a044c02909.request.url).pathname, λ071b094329e7 = /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(λ195ec779584e);
  return [ "script", "worker", "sharedworker" ].includes(λb4a044c02909.request.destination) || /javascript|ecmascript/i.test(λ5556009024bf) || λ071b094329e7 ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store"
    }
  }) : null;
}

function yp(λb4a044c02909) {
  if ("style" === λb4a044c02909.request.destination) return !0;
  const λ5556009024bf = λb4a044c02909.request.headers.get("accept") || "";
  if (/text\/css/i.test(λ5556009024bf)) return !0;
  try {
    return /\.css(?:$|[/?#])/i.test(new URL(lp(λb4a044c02909.request.url)).pathname);
  } catch {
    return !1;
  }
}

function wp(λb4a044c02909) {
  if ([ "script", "worker", "sharedworker" ].includes(λb4a044c02909.request.destination)) return !0;
  const λ5556009024bf = λb4a044c02909.request.headers.get("accept") || "";
  if (/javascript|ecmascript/i.test(λ5556009024bf)) return !0;
  try {
    return /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(new URL(lp(λb4a044c02909.request.url)).pathname);
  } catch {
    return !1;
  }
}

function vp(λb4a044c02909) {
  return yp(λb4a044c02909) || wp(λb4a044c02909);
}

function jp(λb4a044c02909) {
  const λ5556009024bf = λb4a044c02909?.headers?.get("content-type") || "";
  return /text\/html|application\/json|text\/json/i.test(λ5556009024bf);
}

async function xp(λb4a044c02909, λ5556009024bf) {
  if (!vp(λb4a044c02909)) return λ5556009024bf.fetch(λb4a044c02909);
  let λ195ec779584e = null, λ071b094329e7 = null;
  for (let λa402cdb76d86 = 0; λa402cdb76d86 < ap.length; λa402cdb76d86 += 1) {
    const λ04393095e15d = ap[λa402cdb76d86];
    λ04393095e15d && await new Promise(λb4a044c02909 => setTimeout(λb4a044c02909, λ04393095e15d));
    try {
      if (λ195ec779584e = await λ5556009024bf.fetch(λb4a044c02909), λ071b094329e7 = null, 
      λ195ec779584e.status < 400 && !jp(λ195ec779584e)) return λ195ec779584e;
    } catch (λb4a044c02909) {
      λ071b094329e7 = λb4a044c02909;
    }
  }
  if (λ195ec779584e) return λ195ec779584e;
  throw λ071b094329e7 || new Error("UV asset request failed");
}

async function _p(λb4a044c02909, λ5556009024bf) {
  if (!wp(λb4a044c02909) || λ5556009024bf.status >= 400) return λ5556009024bf;
  let λ195ec779584e;
  try {
    λ195ec779584e = new URL(lp(λb4a044c02909.request.url));
  } catch {
    return λ5556009024bf;
  }
  if (!/unityloader\.js$/i.test(λ195ec779584e.pathname)) return λ5556009024bf;
  const λ071b094329e7 = await λ5556009024bf.clone().text().catch(() => ""), λa402cdb76d86 = "this.callbacks[__uv.$wrap((e.data.id))]";
  if (!λ071b094329e7.includes(λa402cdb76d86)) return λ5556009024bf;
  const λ04393095e15d = new Headers(λ5556009024bf.headers);
  λ04393095e15d.delete("content-length"), λ04393095e15d.delete("content-encoding"), 
  λ04393095e15d.set("cache-control", "no-store");
  const λ8afdaa9074b7 = `${λa402cdb76d86}(e.data.decompressed)`, λaf89be7c704c = λ071b094329e7.replaceAll(λ8afdaa9074b7, '(typeof this.callbacks[e.data.id]==="function"&&this.callbacks[e.data.id](e.data.decompressed))').replaceAll(λa402cdb76d86, "this.callbacks[e.data.id]");
  return new Response(λaf89be7c704c, {
    status: λ5556009024bf.status,
    statusText: λ5556009024bf.statusText,
    headers: λ04393095e15d
  });
}

function bp(λb4a044c02909) {
  const λ5556009024bf = λb4a044c02909.request.headers.get("accept") || "", λ195ec779584e = new URL(λb4a044c02909.request.url).pathname;
  let λ071b094329e7 = "";
  try {
    λ071b094329e7 = new URL(lp(λb4a044c02909.request.url)).pathname;
  } catch {}
  return [ "script", "worker", "sharedworker", "style" ].includes(λb4a044c02909.request.destination) || /javascript|ecmascript|text\/css/i.test(λ5556009024bf) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ195ec779584e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(λ071b094329e7);
}

function qp(λb4a044c02909) {
  return /^\s*</.test(λb4a044c02909) || /^\s*\)\]\}'/.test(λb4a044c02909) || /^\s*\)\]/.test(λb4a044c02909);
}

async function kp(λb4a044c02909) {
  if (mp(λb4a044c02909)) return fp(λb4a044c02909);
  const {engine: λ5556009024bf} = ip(λb4a044c02909.request.url);
  if (hp(λb4a044c02909)) return gp(λb4a044c02909);
  const λ195ec779584e = await _p(λb4a044c02909, await xp(λb4a044c02909, λ5556009024bf)), λ071b094329e7 = λ195ec779584e.headers.get("content-type") || "", λa402cdb76d86 = bp(λb4a044c02909), λ04393095e15d = λa402cdb76d86 && (λ071b094329e7.includes("text/html") || λ071b094329e7.includes("application/json") || λ071b094329e7.includes("text/json"));
  return λa402cdb76d86 && λ04393095e15d ? Response.error() : λa402cdb76d86 && λ195ec779584e.status >= 400 ? λ195ec779584e : λa402cdb76d86 && qp(await λ195ec779584e.clone().text().catch(() => "")) ? Response.error() : ([ "document", "iframe", "frame" ].includes(λb4a044c02909.request.destination), 
  λ195ec779584e);
}

self.addEventListener("fetch", λb4a044c02909 => {
  λb4a044c02909.respondWith(kp(λb4a044c02909).catch(() => Response.error()));
});
