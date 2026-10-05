importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_53ac5956557b) {
  try {
    return new URL(_53ac5956557b.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_53ac5956557b) {
  try {
    const _22ef29c14273 = new URL(_53ac5956557b).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _22ef29c14273 ? new URL(decodeURIComponent(_22ef29c14273[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_53ac5956557b) {
  try {
    const _22ef29c14273 = new URL(_53ac5956557b).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _22ef29c14273 ? new URL(decodeURIComponent(_22ef29c14273[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _53ac5956557b => {
  _53ac5956557b.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_53ac5956557b) {
  const _22ef29c14273 = String(_53ac5956557b || "").toLowerCase();
  return "cmp.inmobi.com" !== _22ef29c14273 && !_22ef29c14273.endsWith(".cmp.inmobi.com") && _m.some(_53ac5956557b => _22ef29c14273 === _53ac5956557b || _22ef29c14273.endsWith(`.${_53ac5956557b}`));
}

function zm(_53ac5956557b) {
  const _22ef29c14273 = Wm(_53ac5956557b.request.url);
  if (!_22ef29c14273) return !1;
  try {
    const _53ac5956557b = new URL(_22ef29c14273);
    return Nm(_53ac5956557b.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_53ac5956557b.pathname) || "serve.app.playsaurus.com" === _53ac5956557b.hostname && /\/ad-campaigns\//i.test(_53ac5956557b.pathname);
  } catch {
    return !1;
  }
}

function Dm(_53ac5956557b) {
  const _22ef29c14273 = _53ac5956557b.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_53ac5956557b.request.destination) || /javascript|ecmascript/i.test(_22ef29c14273) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _53ac5956557b.request.destination || /text\/css/i.test(_22ef29c14273) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _53ac5956557b.request.destination ? new Response("", {
    status: 204
  }) : "document" === _53ac5956557b.request.destination || "iframe" === _53ac5956557b.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_53ac5956557b) {
  const _22ef29c14273 = _53ac5956557b.request.headers.get("accept") || "", _897addd4a705 = new URL(_53ac5956557b.request.url).pathname, _d87b7f96ff5d = Um(_53ac5956557b.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_53ac5956557b.request.destination) || /javascript|ecmascript|text\/css/i.test(_22ef29c14273) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_897addd4a705) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_d87b7f96ff5d);
}

function Om(_53ac5956557b) {
  const _22ef29c14273 = _53ac5956557b.request.headers.get("accept") || "", _897addd4a705 = new URL(_53ac5956557b.request.url).pathname, _d87b7f96ff5d = Um(_53ac5956557b.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_53ac5956557b.request.destination) || /javascript|ecmascript/i.test(_22ef29c14273) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_897addd4a705) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_d87b7f96ff5d) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _53ac5956557b.request.destination || /text\/css/i.test(_22ef29c14273) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_53ac5956557b) {
  return /^\s*</.test(_53ac5956557b) || /^\s*\)\]\}'/.test(_53ac5956557b) || /^\s*\)\]/.test(_53ac5956557b);
}

async function Ym(_53ac5956557b, _22ef29c14273) {
  if (!Km(_53ac5956557b)) return _22ef29c14273;
  const _897addd4a705 = _22ef29c14273.headers.get("content-type") || "";
  if (_22ef29c14273.status >= 400 || _897addd4a705.includes("text/html") || _897addd4a705.includes("application/json") || _897addd4a705.includes("text/json")) return Om(_53ac5956557b) || _22ef29c14273;
  const _d87b7f96ff5d = await _22ef29c14273.clone().text().catch(() => "");
  if (Xm(_d87b7f96ff5d)) return Om(_53ac5956557b) || _22ef29c14273;
  if (!_d87b7f96ff5d) return _22ef29c14273;
  const _3c0998e8c30d = new Headers(_22ef29c14273.headers);
  return _3c0998e8c30d.delete("content-length"), new Response(_d87b7f96ff5d, {
    status: _22ef29c14273.status,
    statusText: _22ef29c14273.statusText,
    headers: _3c0998e8c30d
  });
}

function Hm(_53ac5956557b) {
  return new Promise(_22ef29c14273 => setTimeout(_22ef29c14273, _53ac5956557b));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _53ac5956557b = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _22ef29c14273 of _53ac5956557b) try {
      _22ef29c14273.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_53ac5956557b) {
  const _22ef29c14273 = Date.now() + 7e3;
  let _897addd4a705 = 0;
  for (;Date.now() < _22ef29c14273; ) {
    const _22ef29c14273 = Date.now();
    if (_22ef29c14273 >= _897addd4a705 && (await Fm(), _897addd4a705 = _22ef29c14273 + 500), 
    $scramjetController.shouldRoute(_53ac5956557b)) return Qm(_53ac5956557b);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_53ac5956557b) {
  return Ym(_53ac5956557b, await $scramjetController.route(_53ac5956557b));
}

self.addEventListener("fetch", _53ac5956557b => {
  self.NYX_TUTSI_WORKER || !zm(_53ac5956557b) ? $scramjetController.shouldRoute(_53ac5956557b) ? _53ac5956557b.respondWith(Qm(_53ac5956557b)) : qm(_53ac5956557b) && _53ac5956557b.respondWith(Jm(_53ac5956557b)) : _53ac5956557b.respondWith(Dm(_53ac5956557b));
}), self.addEventListener("activate", _53ac5956557b => {
  _53ac5956557b.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
