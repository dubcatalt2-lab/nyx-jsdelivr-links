importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_062061efc5f8) {
  try {
    return new URL(_062061efc5f8.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_062061efc5f8) {
  try {
    const _f00971564ee6 = new URL(_062061efc5f8).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _f00971564ee6 ? new URL(decodeURIComponent(_f00971564ee6[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_062061efc5f8) {
  try {
    const _f00971564ee6 = new URL(_062061efc5f8).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _f00971564ee6 ? new URL(decodeURIComponent(_f00971564ee6[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _062061efc5f8 => {
  _062061efc5f8.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_062061efc5f8) {
  const _f00971564ee6 = String(_062061efc5f8 || "").toLowerCase();
  return "cmp.inmobi.com" !== _f00971564ee6 && !_f00971564ee6.endsWith(".cmp.inmobi.com") && _m.some(_062061efc5f8 => _f00971564ee6 === _062061efc5f8 || _f00971564ee6.endsWith(`.${_062061efc5f8}`));
}

function zm(_062061efc5f8) {
  const _f00971564ee6 = Wm(_062061efc5f8.request.url);
  if (!_f00971564ee6) return !1;
  try {
    const _062061efc5f8 = new URL(_f00971564ee6);
    return Nm(_062061efc5f8.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_062061efc5f8.pathname) || "serve.app.playsaurus.com" === _062061efc5f8.hostname && /\/ad-campaigns\//i.test(_062061efc5f8.pathname);
  } catch {
    return !1;
  }
}

function Dm(_062061efc5f8) {
  const _f00971564ee6 = _062061efc5f8.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_062061efc5f8.request.destination) || /javascript|ecmascript/i.test(_f00971564ee6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _062061efc5f8.request.destination || /text\/css/i.test(_f00971564ee6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _062061efc5f8.request.destination ? new Response("", {
    status: 204
  }) : "document" === _062061efc5f8.request.destination || "iframe" === _062061efc5f8.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_062061efc5f8) {
  const _f00971564ee6 = _062061efc5f8.request.headers.get("accept") || "", _5a48aac16225 = new URL(_062061efc5f8.request.url).pathname, _73914005c1c5 = Um(_062061efc5f8.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_062061efc5f8.request.destination) || /javascript|ecmascript|text\/css/i.test(_f00971564ee6) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_5a48aac16225) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_73914005c1c5);
}

function Om(_062061efc5f8) {
  const _f00971564ee6 = _062061efc5f8.request.headers.get("accept") || "", _5a48aac16225 = new URL(_062061efc5f8.request.url).pathname, _73914005c1c5 = Um(_062061efc5f8.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_062061efc5f8.request.destination) || /javascript|ecmascript/i.test(_f00971564ee6) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_5a48aac16225) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_73914005c1c5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _062061efc5f8.request.destination || /text\/css/i.test(_f00971564ee6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_062061efc5f8) {
  return /^\s*</.test(_062061efc5f8) || /^\s*\)\]\}'/.test(_062061efc5f8) || /^\s*\)\]/.test(_062061efc5f8);
}

async function Ym(_062061efc5f8, _f00971564ee6) {
  if (!Km(_062061efc5f8)) return _f00971564ee6;
  const _5a48aac16225 = _f00971564ee6.headers.get("content-type") || "";
  if (_f00971564ee6.status >= 400 || _5a48aac16225.includes("text/html") || _5a48aac16225.includes("application/json") || _5a48aac16225.includes("text/json")) return Om(_062061efc5f8) || _f00971564ee6;
  const _73914005c1c5 = await _f00971564ee6.clone().text().catch(() => "");
  if (Xm(_73914005c1c5)) return Om(_062061efc5f8) || _f00971564ee6;
  if (!_73914005c1c5) return _f00971564ee6;
  const _baa0e0851381 = new Headers(_f00971564ee6.headers);
  return _baa0e0851381.delete("content-length"), new Response(_73914005c1c5, {
    status: _f00971564ee6.status,
    statusText: _f00971564ee6.statusText,
    headers: _baa0e0851381
  });
}

function Hm(_062061efc5f8) {
  return new Promise(_f00971564ee6 => setTimeout(_f00971564ee6, _062061efc5f8));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _062061efc5f8 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _f00971564ee6 of _062061efc5f8) try {
      _f00971564ee6.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_062061efc5f8) {
  const _f00971564ee6 = Date.now() + 7e3;
  let _5a48aac16225 = 0;
  for (;Date.now() < _f00971564ee6; ) {
    const _f00971564ee6 = Date.now();
    if (_f00971564ee6 >= _5a48aac16225 && (await Fm(), _5a48aac16225 = _f00971564ee6 + 500), 
    $scramjetController.shouldRoute(_062061efc5f8)) return Qm(_062061efc5f8);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_062061efc5f8) {
  return Ym(_062061efc5f8, await $scramjetController.route(_062061efc5f8));
}

self.addEventListener("fetch", _062061efc5f8 => {
  self.NYX_TUTSI_WORKER || !zm(_062061efc5f8) ? $scramjetController.shouldRoute(_062061efc5f8) ? _062061efc5f8.respondWith(Qm(_062061efc5f8)) : qm(_062061efc5f8) && _062061efc5f8.respondWith(Jm(_062061efc5f8)) : _062061efc5f8.respondWith(Dm(_062061efc5f8));
}), self.addEventListener("activate", _062061efc5f8 => {
  _062061efc5f8.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
