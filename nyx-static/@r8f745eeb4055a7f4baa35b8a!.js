importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_57f85cacd85c) {
  try {
    return new URL(_57f85cacd85c.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_57f85cacd85c) {
  try {
    const _2fc7defe546f = new URL(_57f85cacd85c).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _2fc7defe546f ? new URL(decodeURIComponent(_2fc7defe546f[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_57f85cacd85c) {
  try {
    const _2fc7defe546f = new URL(_57f85cacd85c).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _2fc7defe546f ? new URL(decodeURIComponent(_2fc7defe546f[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _57f85cacd85c => {
  _57f85cacd85c.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_57f85cacd85c) {
  const _2fc7defe546f = String(_57f85cacd85c || "").toLowerCase();
  return "cmp.inmobi.com" !== _2fc7defe546f && !_2fc7defe546f.endsWith(".cmp.inmobi.com") && _m.some(_57f85cacd85c => _2fc7defe546f === _57f85cacd85c || _2fc7defe546f.endsWith(`.${_57f85cacd85c}`));
}

function zm(_57f85cacd85c) {
  const _2fc7defe546f = Wm(_57f85cacd85c.request.url);
  if (!_2fc7defe546f) return !1;
  try {
    const _57f85cacd85c = new URL(_2fc7defe546f);
    return Nm(_57f85cacd85c.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_57f85cacd85c.pathname) || "serve.app.playsaurus.com" === _57f85cacd85c.hostname && /\/ad-campaigns\//i.test(_57f85cacd85c.pathname);
  } catch {
    return !1;
  }
}

function Dm(_57f85cacd85c) {
  const _2fc7defe546f = _57f85cacd85c.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_57f85cacd85c.request.destination) || /javascript|ecmascript/i.test(_2fc7defe546f) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _57f85cacd85c.request.destination || /text\/css/i.test(_2fc7defe546f) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _57f85cacd85c.request.destination ? new Response("", {
    status: 204
  }) : "document" === _57f85cacd85c.request.destination || "iframe" === _57f85cacd85c.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_57f85cacd85c) {
  const _2fc7defe546f = _57f85cacd85c.request.headers.get("accept") || "", _a44a9a16e45c = new URL(_57f85cacd85c.request.url).pathname, _6a9818b9d280 = Um(_57f85cacd85c.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_57f85cacd85c.request.destination) || /javascript|ecmascript|text\/css/i.test(_2fc7defe546f) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_a44a9a16e45c) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_6a9818b9d280);
}

function Om(_57f85cacd85c) {
  const _2fc7defe546f = _57f85cacd85c.request.headers.get("accept") || "", _a44a9a16e45c = new URL(_57f85cacd85c.request.url).pathname, _6a9818b9d280 = Um(_57f85cacd85c.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_57f85cacd85c.request.destination) || /javascript|ecmascript/i.test(_2fc7defe546f) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_a44a9a16e45c) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_6a9818b9d280) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _57f85cacd85c.request.destination || /text\/css/i.test(_2fc7defe546f) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_57f85cacd85c) {
  return /^\s*</.test(_57f85cacd85c) || /^\s*\)\]\}'/.test(_57f85cacd85c) || /^\s*\)\]/.test(_57f85cacd85c);
}

async function Ym(_57f85cacd85c, _2fc7defe546f) {
  if (!Km(_57f85cacd85c)) return _2fc7defe546f;
  const _a44a9a16e45c = _2fc7defe546f.headers.get("content-type") || "";
  if (_2fc7defe546f.status >= 400 || _a44a9a16e45c.includes("text/html") || _a44a9a16e45c.includes("application/json") || _a44a9a16e45c.includes("text/json")) return Om(_57f85cacd85c) || _2fc7defe546f;
  const _6a9818b9d280 = await _2fc7defe546f.clone().text().catch(() => "");
  if (Xm(_6a9818b9d280)) return Om(_57f85cacd85c) || _2fc7defe546f;
  if (!_6a9818b9d280) return _2fc7defe546f;
  const _8f2daddd4cf7 = new Headers(_2fc7defe546f.headers);
  return _8f2daddd4cf7.delete("content-length"), new Response(_6a9818b9d280, {
    status: _2fc7defe546f.status,
    statusText: _2fc7defe546f.statusText,
    headers: _8f2daddd4cf7
  });
}

function Hm(_57f85cacd85c) {
  return new Promise(_2fc7defe546f => setTimeout(_2fc7defe546f, _57f85cacd85c));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _57f85cacd85c = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _2fc7defe546f of _57f85cacd85c) try {
      _2fc7defe546f.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_57f85cacd85c) {
  const _2fc7defe546f = Date.now() + 7e3;
  let _a44a9a16e45c = 0;
  for (;Date.now() < _2fc7defe546f; ) {
    const _2fc7defe546f = Date.now();
    if (_2fc7defe546f >= _a44a9a16e45c && (await Fm(), _a44a9a16e45c = _2fc7defe546f + 500), 
    $scramjetController.shouldRoute(_57f85cacd85c)) return Qm(_57f85cacd85c);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_57f85cacd85c) {
  return Ym(_57f85cacd85c, await $scramjetController.route(_57f85cacd85c));
}

self.addEventListener("fetch", _57f85cacd85c => {
  self.NYX_TUTSI_WORKER || !zm(_57f85cacd85c) ? $scramjetController.shouldRoute(_57f85cacd85c) ? _57f85cacd85c.respondWith(Qm(_57f85cacd85c)) : qm(_57f85cacd85c) && _57f85cacd85c.respondWith(Jm(_57f85cacd85c)) : _57f85cacd85c.respondWith(Dm(_57f85cacd85c));
}), self.addEventListener("activate", _57f85cacd85c => {
  _57f85cacd85c.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
