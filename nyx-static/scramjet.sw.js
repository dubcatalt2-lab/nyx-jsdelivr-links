importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_3878645be6e7) {
  try {
    return new URL(_3878645be6e7.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_3878645be6e7) {
  try {
    const _3bef186185dc = new URL(_3878645be6e7).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _3bef186185dc ? new URL(decodeURIComponent(_3bef186185dc[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_3878645be6e7) {
  try {
    const _3bef186185dc = new URL(_3878645be6e7).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _3bef186185dc ? new URL(decodeURIComponent(_3bef186185dc[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _3878645be6e7 => {
  _3878645be6e7.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_3878645be6e7) {
  const _3bef186185dc = String(_3878645be6e7 || "").toLowerCase();
  return "cmp.inmobi.com" !== _3bef186185dc && !_3bef186185dc.endsWith(".cmp.inmobi.com") && _m.some(_3878645be6e7 => _3bef186185dc === _3878645be6e7 || _3bef186185dc.endsWith(`.${_3878645be6e7}`));
}

function zm(_3878645be6e7) {
  const _3bef186185dc = Wm(_3878645be6e7.request.url);
  if (!_3bef186185dc) return !1;
  try {
    const _3878645be6e7 = new URL(_3bef186185dc);
    return Nm(_3878645be6e7.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_3878645be6e7.pathname) || "serve.app.playsaurus.com" === _3878645be6e7.hostname && /\/ad-campaigns\//i.test(_3878645be6e7.pathname);
  } catch {
    return !1;
  }
}

function Dm(_3878645be6e7) {
  const _3bef186185dc = _3878645be6e7.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_3878645be6e7.request.destination) || /javascript|ecmascript/i.test(_3bef186185dc) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _3878645be6e7.request.destination || /text\/css/i.test(_3bef186185dc) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _3878645be6e7.request.destination ? new Response("", {
    status: 204
  }) : "document" === _3878645be6e7.request.destination || "iframe" === _3878645be6e7.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_3878645be6e7) {
  const _3bef186185dc = _3878645be6e7.request.headers.get("accept") || "", _9f6e63e4d477 = new URL(_3878645be6e7.request.url).pathname, _2175713878b7 = Um(_3878645be6e7.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_3878645be6e7.request.destination) || /javascript|ecmascript|text\/css/i.test(_3bef186185dc) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_9f6e63e4d477) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_2175713878b7);
}

function Om(_3878645be6e7) {
  const _3bef186185dc = _3878645be6e7.request.headers.get("accept") || "", _9f6e63e4d477 = new URL(_3878645be6e7.request.url).pathname, _2175713878b7 = Um(_3878645be6e7.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_3878645be6e7.request.destination) || /javascript|ecmascript/i.test(_3bef186185dc) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_9f6e63e4d477) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_2175713878b7) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _3878645be6e7.request.destination || /text\/css/i.test(_3bef186185dc) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_3878645be6e7) {
  return /^\s*</.test(_3878645be6e7) || /^\s*\)\]\}'/.test(_3878645be6e7) || /^\s*\)\]/.test(_3878645be6e7);
}

async function Ym(_3878645be6e7, _3bef186185dc) {
  if (!Km(_3878645be6e7)) return _3bef186185dc;
  const _9f6e63e4d477 = _3bef186185dc.headers.get("content-type") || "";
  if (_3bef186185dc.status >= 400 || _9f6e63e4d477.includes("text/html") || _9f6e63e4d477.includes("application/json") || _9f6e63e4d477.includes("text/json")) return Om(_3878645be6e7) || _3bef186185dc;
  const _2175713878b7 = await _3bef186185dc.clone().text().catch(() => "");
  if (Xm(_2175713878b7)) return Om(_3878645be6e7) || _3bef186185dc;
  if (!_2175713878b7) return _3bef186185dc;
  const _306437cb1f5b = new Headers(_3bef186185dc.headers);
  return _306437cb1f5b.delete("content-length"), new Response(_2175713878b7, {
    status: _3bef186185dc.status,
    statusText: _3bef186185dc.statusText,
    headers: _306437cb1f5b
  });
}

function Hm(_3878645be6e7) {
  return new Promise(_3bef186185dc => setTimeout(_3bef186185dc, _3878645be6e7));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _3878645be6e7 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _3bef186185dc of _3878645be6e7) try {
      _3bef186185dc.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_3878645be6e7) {
  const _3bef186185dc = Date.now() + 7e3;
  let _9f6e63e4d477 = 0;
  for (;Date.now() < _3bef186185dc; ) {
    const _3bef186185dc = Date.now();
    if (_3bef186185dc >= _9f6e63e4d477 && (await Fm(), _9f6e63e4d477 = _3bef186185dc + 500), 
    $scramjetController.shouldRoute(_3878645be6e7)) return Qm(_3878645be6e7);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_3878645be6e7) {
  return Ym(_3878645be6e7, await $scramjetController.route(_3878645be6e7));
}

self.addEventListener("fetch", _3878645be6e7 => {
  self.NYX_TUTSI_WORKER || !zm(_3878645be6e7) ? $scramjetController.shouldRoute(_3878645be6e7) ? _3878645be6e7.respondWith(Qm(_3878645be6e7)) : qm(_3878645be6e7) && _3878645be6e7.respondWith(Jm(_3878645be6e7)) : _3878645be6e7.respondWith(Dm(_3878645be6e7));
}), self.addEventListener("activate", _3878645be6e7 => {
  _3878645be6e7.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
