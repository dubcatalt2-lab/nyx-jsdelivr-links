importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_d8238445e13c) {
  try {
    return new URL(_d8238445e13c.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_d8238445e13c) {
  try {
    const _b191bd7b830a = new URL(_d8238445e13c).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _b191bd7b830a ? new URL(decodeURIComponent(_b191bd7b830a[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_d8238445e13c) {
  try {
    const _b191bd7b830a = new URL(_d8238445e13c).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _b191bd7b830a ? new URL(decodeURIComponent(_b191bd7b830a[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _d8238445e13c => {
  _d8238445e13c.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_d8238445e13c) {
  const _b191bd7b830a = String(_d8238445e13c || "").toLowerCase();
  return "cmp.inmobi.com" !== _b191bd7b830a && !_b191bd7b830a.endsWith(".cmp.inmobi.com") && _m.some(_d8238445e13c => _b191bd7b830a === _d8238445e13c || _b191bd7b830a.endsWith(`.${_d8238445e13c}`));
}

function zm(_d8238445e13c) {
  const _b191bd7b830a = Wm(_d8238445e13c.request.url);
  if (!_b191bd7b830a) return !1;
  try {
    const _d8238445e13c = new URL(_b191bd7b830a);
    return Nm(_d8238445e13c.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_d8238445e13c.pathname) || "serve.app.playsaurus.com" === _d8238445e13c.hostname && /\/ad-campaigns\//i.test(_d8238445e13c.pathname);
  } catch {
    return !1;
  }
}

function Dm(_d8238445e13c) {
  const _b191bd7b830a = _d8238445e13c.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_d8238445e13c.request.destination) || /javascript|ecmascript/i.test(_b191bd7b830a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _d8238445e13c.request.destination || /text\/css/i.test(_b191bd7b830a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _d8238445e13c.request.destination ? new Response("", {
    status: 204
  }) : "document" === _d8238445e13c.request.destination || "iframe" === _d8238445e13c.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_d8238445e13c) {
  const _b191bd7b830a = _d8238445e13c.request.headers.get("accept") || "", _dc2afde8618d = new URL(_d8238445e13c.request.url).pathname, _f77dfefb29ff = Um(_d8238445e13c.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_d8238445e13c.request.destination) || /javascript|ecmascript|text\/css/i.test(_b191bd7b830a) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_dc2afde8618d) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_f77dfefb29ff);
}

function Om(_d8238445e13c) {
  const _b191bd7b830a = _d8238445e13c.request.headers.get("accept") || "", _dc2afde8618d = new URL(_d8238445e13c.request.url).pathname, _f77dfefb29ff = Um(_d8238445e13c.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_d8238445e13c.request.destination) || /javascript|ecmascript/i.test(_b191bd7b830a) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_dc2afde8618d) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_f77dfefb29ff) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _d8238445e13c.request.destination || /text\/css/i.test(_b191bd7b830a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_d8238445e13c) {
  return /^\s*</.test(_d8238445e13c) || /^\s*\)\]\}'/.test(_d8238445e13c) || /^\s*\)\]/.test(_d8238445e13c);
}

async function Ym(_d8238445e13c, _b191bd7b830a) {
  if (!Km(_d8238445e13c)) return _b191bd7b830a;
  const _dc2afde8618d = _b191bd7b830a.headers.get("content-type") || "";
  if (_b191bd7b830a.status >= 400 || _dc2afde8618d.includes("text/html") || _dc2afde8618d.includes("application/json") || _dc2afde8618d.includes("text/json")) return Om(_d8238445e13c) || _b191bd7b830a;
  const _f77dfefb29ff = await _b191bd7b830a.clone().text().catch(() => "");
  if (Xm(_f77dfefb29ff)) return Om(_d8238445e13c) || _b191bd7b830a;
  if (!_f77dfefb29ff) return _b191bd7b830a;
  const _403544393ee9 = new Headers(_b191bd7b830a.headers);
  return _403544393ee9.delete("content-length"), new Response(_f77dfefb29ff, {
    status: _b191bd7b830a.status,
    statusText: _b191bd7b830a.statusText,
    headers: _403544393ee9
  });
}

function Hm(_d8238445e13c) {
  return new Promise(_b191bd7b830a => setTimeout(_b191bd7b830a, _d8238445e13c));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _d8238445e13c = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _b191bd7b830a of _d8238445e13c) try {
      _b191bd7b830a.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_d8238445e13c) {
  const _b191bd7b830a = Date.now() + 7e3;
  let _dc2afde8618d = 0;
  for (;Date.now() < _b191bd7b830a; ) {
    const _b191bd7b830a = Date.now();
    if (_b191bd7b830a >= _dc2afde8618d && (await Fm(), _dc2afde8618d = _b191bd7b830a + 500), 
    $scramjetController.shouldRoute(_d8238445e13c)) return Qm(_d8238445e13c);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_d8238445e13c) {
  return Ym(_d8238445e13c, await $scramjetController.route(_d8238445e13c));
}

self.addEventListener("fetch", _d8238445e13c => {
  self.NYX_TUTSI_WORKER || !zm(_d8238445e13c) ? $scramjetController.shouldRoute(_d8238445e13c) ? _d8238445e13c.respondWith(Qm(_d8238445e13c)) : qm(_d8238445e13c) && _d8238445e13c.respondWith(Jm(_d8238445e13c)) : _d8238445e13c.respondWith(Dm(_d8238445e13c));
}), self.addEventListener("activate", _d8238445e13c => {
  _d8238445e13c.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
