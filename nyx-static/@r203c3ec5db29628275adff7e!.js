importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_6e1db353c476) {
  try {
    return new URL(_6e1db353c476.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_6e1db353c476) {
  try {
    const _1f6b6aec77dd = new URL(_6e1db353c476).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _1f6b6aec77dd ? new URL(decodeURIComponent(_1f6b6aec77dd[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_6e1db353c476) {
  try {
    const _1f6b6aec77dd = new URL(_6e1db353c476).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _1f6b6aec77dd ? new URL(decodeURIComponent(_1f6b6aec77dd[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _6e1db353c476 => {
  _6e1db353c476.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_6e1db353c476) {
  const _1f6b6aec77dd = String(_6e1db353c476 || "").toLowerCase();
  return "cmp.inmobi.com" !== _1f6b6aec77dd && !_1f6b6aec77dd.endsWith(".cmp.inmobi.com") && _m.some(_6e1db353c476 => _1f6b6aec77dd === _6e1db353c476 || _1f6b6aec77dd.endsWith(`.${_6e1db353c476}`));
}

function zm(_6e1db353c476) {
  const _1f6b6aec77dd = Wm(_6e1db353c476.request.url);
  if (!_1f6b6aec77dd) return !1;
  try {
    const _6e1db353c476 = new URL(_1f6b6aec77dd);
    return Nm(_6e1db353c476.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_6e1db353c476.pathname) || "serve.app.playsaurus.com" === _6e1db353c476.hostname && /\/ad-campaigns\//i.test(_6e1db353c476.pathname);
  } catch {
    return !1;
  }
}

function Dm(_6e1db353c476) {
  const _1f6b6aec77dd = _6e1db353c476.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_6e1db353c476.request.destination) || /javascript|ecmascript/i.test(_1f6b6aec77dd) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _6e1db353c476.request.destination || /text\/css/i.test(_1f6b6aec77dd) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _6e1db353c476.request.destination ? new Response("", {
    status: 204
  }) : "document" === _6e1db353c476.request.destination || "iframe" === _6e1db353c476.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_6e1db353c476) {
  const _1f6b6aec77dd = _6e1db353c476.request.headers.get("accept") || "", _b2d39872bcf7 = new URL(_6e1db353c476.request.url).pathname, _681bf281fc14 = Um(_6e1db353c476.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_6e1db353c476.request.destination) || /javascript|ecmascript|text\/css/i.test(_1f6b6aec77dd) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_b2d39872bcf7) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_681bf281fc14);
}

function Om(_6e1db353c476) {
  const _1f6b6aec77dd = _6e1db353c476.request.headers.get("accept") || "", _b2d39872bcf7 = new URL(_6e1db353c476.request.url).pathname, _681bf281fc14 = Um(_6e1db353c476.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_6e1db353c476.request.destination) || /javascript|ecmascript/i.test(_1f6b6aec77dd) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_b2d39872bcf7) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_681bf281fc14) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _6e1db353c476.request.destination || /text\/css/i.test(_1f6b6aec77dd) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_6e1db353c476) {
  return /^\s*</.test(_6e1db353c476) || /^\s*\)\]\}'/.test(_6e1db353c476) || /^\s*\)\]/.test(_6e1db353c476);
}

async function Ym(_6e1db353c476, _1f6b6aec77dd) {
  if (!Km(_6e1db353c476)) return _1f6b6aec77dd;
  const _b2d39872bcf7 = _1f6b6aec77dd.headers.get("content-type") || "";
  if (_1f6b6aec77dd.status >= 400 || _b2d39872bcf7.includes("text/html") || _b2d39872bcf7.includes("application/json") || _b2d39872bcf7.includes("text/json")) return Om(_6e1db353c476) || _1f6b6aec77dd;
  const _681bf281fc14 = await _1f6b6aec77dd.clone().text().catch(() => "");
  if (Xm(_681bf281fc14)) return Om(_6e1db353c476) || _1f6b6aec77dd;
  if (!_681bf281fc14) return _1f6b6aec77dd;
  const _67a343524bba = new Headers(_1f6b6aec77dd.headers);
  return _67a343524bba.delete("content-length"), new Response(_681bf281fc14, {
    status: _1f6b6aec77dd.status,
    statusText: _1f6b6aec77dd.statusText,
    headers: _67a343524bba
  });
}

function Hm(_6e1db353c476) {
  return new Promise(_1f6b6aec77dd => setTimeout(_1f6b6aec77dd, _6e1db353c476));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _6e1db353c476 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _1f6b6aec77dd of _6e1db353c476) try {
      _1f6b6aec77dd.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_6e1db353c476) {
  const _1f6b6aec77dd = Date.now() + 7e3;
  let _b2d39872bcf7 = 0;
  for (;Date.now() < _1f6b6aec77dd; ) {
    const _1f6b6aec77dd = Date.now();
    if (_1f6b6aec77dd >= _b2d39872bcf7 && (await Fm(), _b2d39872bcf7 = _1f6b6aec77dd + 500), 
    $studyjetController.shouldRoute(_6e1db353c476)) return Qm(_6e1db353c476);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_6e1db353c476) {
  return Ym(_6e1db353c476, await $studyjetController.route(_6e1db353c476));
}

self.addEventListener("fetch", _6e1db353c476 => {
  self.NYX_TUTSI_WORKER || !zm(_6e1db353c476) ? $studyjetController.shouldRoute(_6e1db353c476) ? _6e1db353c476.respondWith(Qm(_6e1db353c476)) : qm(_6e1db353c476) && _6e1db353c476.respondWith(Jm(_6e1db353c476)) : _6e1db353c476.respondWith(Dm(_6e1db353c476));
}), self.addEventListener("activate", _6e1db353c476 => {
  _6e1db353c476.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
