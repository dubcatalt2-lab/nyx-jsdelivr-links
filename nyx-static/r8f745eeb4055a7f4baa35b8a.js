importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_b4227076fe7f) {
  try {
    return new URL(_b4227076fe7f.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_b4227076fe7f) {
  try {
    const _e55086ce6c73 = new URL(_b4227076fe7f).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _e55086ce6c73 ? new URL(decodeURIComponent(_e55086ce6c73[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_b4227076fe7f) {
  try {
    const _e55086ce6c73 = new URL(_b4227076fe7f).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _e55086ce6c73 ? new URL(decodeURIComponent(_e55086ce6c73[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _b4227076fe7f => {
  _b4227076fe7f.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_b4227076fe7f) {
  const _e55086ce6c73 = String(_b4227076fe7f || "").toLowerCase();
  return "cmp.inmobi.com" !== _e55086ce6c73 && !_e55086ce6c73.endsWith(".cmp.inmobi.com") && _m.some(_b4227076fe7f => _e55086ce6c73 === _b4227076fe7f || _e55086ce6c73.endsWith(`.${_b4227076fe7f}`));
}

function zm(_b4227076fe7f) {
  const _e55086ce6c73 = Wm(_b4227076fe7f.request.url);
  if (!_e55086ce6c73) return !1;
  try {
    const _b4227076fe7f = new URL(_e55086ce6c73);
    return Nm(_b4227076fe7f.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_b4227076fe7f.pathname) || "serve.app.playsaurus.com" === _b4227076fe7f.hostname && /\/ad-campaigns\//i.test(_b4227076fe7f.pathname);
  } catch {
    return !1;
  }
}

function Dm(_b4227076fe7f) {
  const _e55086ce6c73 = _b4227076fe7f.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_b4227076fe7f.request.destination) || /javascript|ecmascript/i.test(_e55086ce6c73) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _b4227076fe7f.request.destination || /text\/css/i.test(_e55086ce6c73) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _b4227076fe7f.request.destination ? new Response("", {
    status: 204
  }) : "document" === _b4227076fe7f.request.destination || "iframe" === _b4227076fe7f.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_b4227076fe7f) {
  const _e55086ce6c73 = _b4227076fe7f.request.headers.get("accept") || "", _66aa091413a2 = new URL(_b4227076fe7f.request.url).pathname, _ec0b53294028 = Um(_b4227076fe7f.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_b4227076fe7f.request.destination) || /javascript|ecmascript|text\/css/i.test(_e55086ce6c73) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_66aa091413a2) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_ec0b53294028);
}

function Om(_b4227076fe7f) {
  const _e55086ce6c73 = _b4227076fe7f.request.headers.get("accept") || "", _66aa091413a2 = new URL(_b4227076fe7f.request.url).pathname, _ec0b53294028 = Um(_b4227076fe7f.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_b4227076fe7f.request.destination) || /javascript|ecmascript/i.test(_e55086ce6c73) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_66aa091413a2) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_ec0b53294028) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _b4227076fe7f.request.destination || /text\/css/i.test(_e55086ce6c73) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_b4227076fe7f) {
  return /^\s*</.test(_b4227076fe7f) || /^\s*\)\]\}'/.test(_b4227076fe7f) || /^\s*\)\]/.test(_b4227076fe7f);
}

async function Ym(_b4227076fe7f, _e55086ce6c73) {
  if (!Km(_b4227076fe7f)) return _e55086ce6c73;
  const _66aa091413a2 = _e55086ce6c73.headers.get("content-type") || "";
  if (_e55086ce6c73.status >= 400 || _66aa091413a2.includes("text/html") || _66aa091413a2.includes("application/json") || _66aa091413a2.includes("text/json")) return Om(_b4227076fe7f) || _e55086ce6c73;
  const _ec0b53294028 = await _e55086ce6c73.clone().text().catch(() => "");
  if (Xm(_ec0b53294028)) return Om(_b4227076fe7f) || _e55086ce6c73;
  if (!_ec0b53294028) return _e55086ce6c73;
  const _71c070714a16 = new Headers(_e55086ce6c73.headers);
  return _71c070714a16.delete("content-length"), new Response(_ec0b53294028, {
    status: _e55086ce6c73.status,
    statusText: _e55086ce6c73.statusText,
    headers: _71c070714a16
  });
}

function Hm(_b4227076fe7f) {
  return new Promise(_e55086ce6c73 => setTimeout(_e55086ce6c73, _b4227076fe7f));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _b4227076fe7f = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _e55086ce6c73 of _b4227076fe7f) try {
      _e55086ce6c73.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_b4227076fe7f) {
  const _e55086ce6c73 = Date.now() + 7e3;
  let _66aa091413a2 = 0;
  for (;Date.now() < _e55086ce6c73; ) {
    const _e55086ce6c73 = Date.now();
    if (_e55086ce6c73 >= _66aa091413a2 && (await Fm(), _66aa091413a2 = _e55086ce6c73 + 500), 
    $scramjetController.shouldRoute(_b4227076fe7f)) return Qm(_b4227076fe7f);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_b4227076fe7f) {
  return Ym(_b4227076fe7f, await $scramjetController.route(_b4227076fe7f));
}

self.addEventListener("fetch", _b4227076fe7f => {
  self.NYX_TUTSI_WORKER || !zm(_b4227076fe7f) ? $scramjetController.shouldRoute(_b4227076fe7f) ? _b4227076fe7f.respondWith(Qm(_b4227076fe7f)) : qm(_b4227076fe7f) && _b4227076fe7f.respondWith(Jm(_b4227076fe7f)) : _b4227076fe7f.respondWith(Dm(_b4227076fe7f));
}), self.addEventListener("activate", _b4227076fe7f => {
  _b4227076fe7f.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
