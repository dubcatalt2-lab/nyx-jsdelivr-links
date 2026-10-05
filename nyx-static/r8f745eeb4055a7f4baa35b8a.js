importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_c9282211ee17) {
  try {
    return new URL(_c9282211ee17.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_c9282211ee17) {
  try {
    const _a5a87d2ec57a = new URL(_c9282211ee17).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _a5a87d2ec57a ? new URL(decodeURIComponent(_a5a87d2ec57a[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_c9282211ee17) {
  try {
    const _a5a87d2ec57a = new URL(_c9282211ee17).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _a5a87d2ec57a ? new URL(decodeURIComponent(_a5a87d2ec57a[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _c9282211ee17 => {
  _c9282211ee17.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_c9282211ee17) {
  const _a5a87d2ec57a = String(_c9282211ee17 || "").toLowerCase();
  return "cmp.inmobi.com" !== _a5a87d2ec57a && !_a5a87d2ec57a.endsWith(".cmp.inmobi.com") && _m.some(_c9282211ee17 => _a5a87d2ec57a === _c9282211ee17 || _a5a87d2ec57a.endsWith(`.${_c9282211ee17}`));
}

function zm(_c9282211ee17) {
  const _a5a87d2ec57a = Wm(_c9282211ee17.request.url);
  if (!_a5a87d2ec57a) return !1;
  try {
    const _c9282211ee17 = new URL(_a5a87d2ec57a);
    return Nm(_c9282211ee17.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_c9282211ee17.pathname) || "serve.app.playsaurus.com" === _c9282211ee17.hostname && /\/ad-campaigns\//i.test(_c9282211ee17.pathname);
  } catch {
    return !1;
  }
}

function Dm(_c9282211ee17) {
  const _a5a87d2ec57a = _c9282211ee17.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_c9282211ee17.request.destination) || /javascript|ecmascript/i.test(_a5a87d2ec57a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _c9282211ee17.request.destination || /text\/css/i.test(_a5a87d2ec57a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _c9282211ee17.request.destination ? new Response("", {
    status: 204
  }) : "document" === _c9282211ee17.request.destination || "iframe" === _c9282211ee17.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_c9282211ee17) {
  const _a5a87d2ec57a = _c9282211ee17.request.headers.get("accept") || "", _c01423189e2f = new URL(_c9282211ee17.request.url).pathname, _710275ccc022 = Um(_c9282211ee17.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_c9282211ee17.request.destination) || /javascript|ecmascript|text\/css/i.test(_a5a87d2ec57a) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_c01423189e2f) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_710275ccc022);
}

function Om(_c9282211ee17) {
  const _a5a87d2ec57a = _c9282211ee17.request.headers.get("accept") || "", _c01423189e2f = new URL(_c9282211ee17.request.url).pathname, _710275ccc022 = Um(_c9282211ee17.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_c9282211ee17.request.destination) || /javascript|ecmascript/i.test(_a5a87d2ec57a) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_c01423189e2f) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_710275ccc022) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _c9282211ee17.request.destination || /text\/css/i.test(_a5a87d2ec57a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_c9282211ee17) {
  return /^\s*</.test(_c9282211ee17) || /^\s*\)\]\}'/.test(_c9282211ee17) || /^\s*\)\]/.test(_c9282211ee17);
}

async function Ym(_c9282211ee17, _a5a87d2ec57a) {
  if (!Km(_c9282211ee17)) return _a5a87d2ec57a;
  const _c01423189e2f = _a5a87d2ec57a.headers.get("content-type") || "";
  if (_a5a87d2ec57a.status >= 400 || _c01423189e2f.includes("text/html") || _c01423189e2f.includes("application/json") || _c01423189e2f.includes("text/json")) return Om(_c9282211ee17) || _a5a87d2ec57a;
  const _710275ccc022 = await _a5a87d2ec57a.clone().text().catch(() => "");
  if (Xm(_710275ccc022)) return Om(_c9282211ee17) || _a5a87d2ec57a;
  if (!_710275ccc022) return _a5a87d2ec57a;
  const _32be9c619ea1 = new Headers(_a5a87d2ec57a.headers);
  return _32be9c619ea1.delete("content-length"), new Response(_710275ccc022, {
    status: _a5a87d2ec57a.status,
    statusText: _a5a87d2ec57a.statusText,
    headers: _32be9c619ea1
  });
}

function Hm(_c9282211ee17) {
  return new Promise(_a5a87d2ec57a => setTimeout(_a5a87d2ec57a, _c9282211ee17));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _c9282211ee17 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _a5a87d2ec57a of _c9282211ee17) try {
      _a5a87d2ec57a.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_c9282211ee17) {
  const _a5a87d2ec57a = Date.now() + 7e3;
  let _c01423189e2f = 0;
  for (;Date.now() < _a5a87d2ec57a; ) {
    const _a5a87d2ec57a = Date.now();
    if (_a5a87d2ec57a >= _c01423189e2f && (await Fm(), _c01423189e2f = _a5a87d2ec57a + 500), 
    $scramjetController.shouldRoute(_c9282211ee17)) return Qm(_c9282211ee17);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_c9282211ee17) {
  return Ym(_c9282211ee17, await $scramjetController.route(_c9282211ee17));
}

self.addEventListener("fetch", _c9282211ee17 => {
  self.NYX_TUTSI_WORKER || !zm(_c9282211ee17) ? $scramjetController.shouldRoute(_c9282211ee17) ? _c9282211ee17.respondWith(Qm(_c9282211ee17)) : qm(_c9282211ee17) && _c9282211ee17.respondWith(Jm(_c9282211ee17)) : _c9282211ee17.respondWith(Dm(_c9282211ee17));
}), self.addEventListener("activate", _c9282211ee17 => {
  _c9282211ee17.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
