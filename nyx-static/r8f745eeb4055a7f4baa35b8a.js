importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_5f84021d3617) {
  try {
    return new URL(_5f84021d3617.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_5f84021d3617) {
  try {
    const _b1e78af76d9c = new URL(_5f84021d3617).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _b1e78af76d9c ? new URL(decodeURIComponent(_b1e78af76d9c[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_5f84021d3617) {
  try {
    const _b1e78af76d9c = new URL(_5f84021d3617).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _b1e78af76d9c ? new URL(decodeURIComponent(_b1e78af76d9c[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _5f84021d3617 => {
  _5f84021d3617.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_5f84021d3617) {
  const _b1e78af76d9c = String(_5f84021d3617 || "").toLowerCase();
  return "cmp.inmobi.com" !== _b1e78af76d9c && !_b1e78af76d9c.endsWith(".cmp.inmobi.com") && _m.some(_5f84021d3617 => _b1e78af76d9c === _5f84021d3617 || _b1e78af76d9c.endsWith(`.${_5f84021d3617}`));
}

function zm(_5f84021d3617) {
  const _b1e78af76d9c = Wm(_5f84021d3617.request.url);
  if (!_b1e78af76d9c) return !1;
  try {
    const _5f84021d3617 = new URL(_b1e78af76d9c);
    return Nm(_5f84021d3617.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_5f84021d3617.pathname) || "serve.app.playsaurus.com" === _5f84021d3617.hostname && /\/ad-campaigns\//i.test(_5f84021d3617.pathname);
  } catch {
    return !1;
  }
}

function Dm(_5f84021d3617) {
  const _b1e78af76d9c = _5f84021d3617.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_5f84021d3617.request.destination) || /javascript|ecmascript/i.test(_b1e78af76d9c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _5f84021d3617.request.destination || /text\/css/i.test(_b1e78af76d9c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _5f84021d3617.request.destination ? new Response("", {
    status: 204
  }) : "document" === _5f84021d3617.request.destination || "iframe" === _5f84021d3617.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_5f84021d3617) {
  const _b1e78af76d9c = _5f84021d3617.request.headers.get("accept") || "", _828e1cec4f81 = new URL(_5f84021d3617.request.url).pathname, _b3a713621b57 = Um(_5f84021d3617.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_5f84021d3617.request.destination) || /javascript|ecmascript|text\/css/i.test(_b1e78af76d9c) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_828e1cec4f81) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_b3a713621b57);
}

function Om(_5f84021d3617) {
  const _b1e78af76d9c = _5f84021d3617.request.headers.get("accept") || "", _828e1cec4f81 = new URL(_5f84021d3617.request.url).pathname, _b3a713621b57 = Um(_5f84021d3617.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_5f84021d3617.request.destination) || /javascript|ecmascript/i.test(_b1e78af76d9c) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_828e1cec4f81) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_b3a713621b57) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _5f84021d3617.request.destination || /text\/css/i.test(_b1e78af76d9c) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_5f84021d3617) {
  return /^\s*</.test(_5f84021d3617) || /^\s*\)\]\}'/.test(_5f84021d3617) || /^\s*\)\]/.test(_5f84021d3617);
}

async function Ym(_5f84021d3617, _b1e78af76d9c) {
  if (!Km(_5f84021d3617)) return _b1e78af76d9c;
  const _828e1cec4f81 = _b1e78af76d9c.headers.get("content-type") || "";
  if (_b1e78af76d9c.status >= 400 || _828e1cec4f81.includes("text/html") || _828e1cec4f81.includes("application/json") || _828e1cec4f81.includes("text/json")) return Om(_5f84021d3617) || _b1e78af76d9c;
  const _b3a713621b57 = await _b1e78af76d9c.clone().text().catch(() => "");
  if (Xm(_b3a713621b57)) return Om(_5f84021d3617) || _b1e78af76d9c;
  if (!_b3a713621b57) return _b1e78af76d9c;
  const _37fd161c84d9 = new Headers(_b1e78af76d9c.headers);
  return _37fd161c84d9.delete("content-length"), new Response(_b3a713621b57, {
    status: _b1e78af76d9c.status,
    statusText: _b1e78af76d9c.statusText,
    headers: _37fd161c84d9
  });
}

function Hm(_5f84021d3617) {
  return new Promise(_b1e78af76d9c => setTimeout(_b1e78af76d9c, _5f84021d3617));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _5f84021d3617 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _b1e78af76d9c of _5f84021d3617) try {
      _b1e78af76d9c.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_5f84021d3617) {
  const _b1e78af76d9c = Date.now() + 7e3;
  let _828e1cec4f81 = 0;
  for (;Date.now() < _b1e78af76d9c; ) {
    const _b1e78af76d9c = Date.now();
    if (_b1e78af76d9c >= _828e1cec4f81 && (await Fm(), _828e1cec4f81 = _b1e78af76d9c + 500), 
    $scramjetController.shouldRoute(_5f84021d3617)) return Qm(_5f84021d3617);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_5f84021d3617) {
  return Ym(_5f84021d3617, await $scramjetController.route(_5f84021d3617));
}

self.addEventListener("fetch", _5f84021d3617 => {
  self.NYX_TUTSI_WORKER || !zm(_5f84021d3617) ? $scramjetController.shouldRoute(_5f84021d3617) ? _5f84021d3617.respondWith(Qm(_5f84021d3617)) : qm(_5f84021d3617) && _5f84021d3617.respondWith(Jm(_5f84021d3617)) : _5f84021d3617.respondWith(Dm(_5f84021d3617));
}), self.addEventListener("activate", _5f84021d3617 => {
  _5f84021d3617.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
