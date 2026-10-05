importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_341ce8e6b613) {
  try {
    return new URL(_341ce8e6b613.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_341ce8e6b613) {
  try {
    const _76cdf54def3a = new URL(_341ce8e6b613).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _76cdf54def3a ? new URL(decodeURIComponent(_76cdf54def3a[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_341ce8e6b613) {
  try {
    const _76cdf54def3a = new URL(_341ce8e6b613).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _76cdf54def3a ? new URL(decodeURIComponent(_76cdf54def3a[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _341ce8e6b613 => {
  _341ce8e6b613.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_341ce8e6b613) {
  const _76cdf54def3a = String(_341ce8e6b613 || "").toLowerCase();
  return "cmp.inmobi.com" !== _76cdf54def3a && !_76cdf54def3a.endsWith(".cmp.inmobi.com") && _m.some(_341ce8e6b613 => _76cdf54def3a === _341ce8e6b613 || _76cdf54def3a.endsWith(`.${_341ce8e6b613}`));
}

function zm(_341ce8e6b613) {
  const _76cdf54def3a = Wm(_341ce8e6b613.request.url);
  if (!_76cdf54def3a) return !1;
  try {
    const _341ce8e6b613 = new URL(_76cdf54def3a);
    return Nm(_341ce8e6b613.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_341ce8e6b613.pathname) || "serve.app.playsaurus.com" === _341ce8e6b613.hostname && /\/ad-campaigns\//i.test(_341ce8e6b613.pathname);
  } catch {
    return !1;
  }
}

function Dm(_341ce8e6b613) {
  const _76cdf54def3a = _341ce8e6b613.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_341ce8e6b613.request.destination) || /javascript|ecmascript/i.test(_76cdf54def3a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _341ce8e6b613.request.destination || /text\/css/i.test(_76cdf54def3a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _341ce8e6b613.request.destination ? new Response("", {
    status: 204
  }) : "document" === _341ce8e6b613.request.destination || "iframe" === _341ce8e6b613.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_341ce8e6b613) {
  const _76cdf54def3a = _341ce8e6b613.request.headers.get("accept") || "", _4b456b30ce7b = new URL(_341ce8e6b613.request.url).pathname, _c59cf612fba8 = Um(_341ce8e6b613.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_341ce8e6b613.request.destination) || /javascript|ecmascript|text\/css/i.test(_76cdf54def3a) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_4b456b30ce7b) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_c59cf612fba8);
}

function Om(_341ce8e6b613) {
  const _76cdf54def3a = _341ce8e6b613.request.headers.get("accept") || "", _4b456b30ce7b = new URL(_341ce8e6b613.request.url).pathname, _c59cf612fba8 = Um(_341ce8e6b613.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_341ce8e6b613.request.destination) || /javascript|ecmascript/i.test(_76cdf54def3a) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_4b456b30ce7b) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_c59cf612fba8) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _341ce8e6b613.request.destination || /text\/css/i.test(_76cdf54def3a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_341ce8e6b613) {
  return /^\s*</.test(_341ce8e6b613) || /^\s*\)\]\}'/.test(_341ce8e6b613) || /^\s*\)\]/.test(_341ce8e6b613);
}

async function Ym(_341ce8e6b613, _76cdf54def3a) {
  if (!Km(_341ce8e6b613)) return _76cdf54def3a;
  const _4b456b30ce7b = _76cdf54def3a.headers.get("content-type") || "";
  if (_76cdf54def3a.status >= 400 || _4b456b30ce7b.includes("text/html") || _4b456b30ce7b.includes("application/json") || _4b456b30ce7b.includes("text/json")) return Om(_341ce8e6b613) || _76cdf54def3a;
  const _c59cf612fba8 = await _76cdf54def3a.clone().text().catch(() => "");
  if (Xm(_c59cf612fba8)) return Om(_341ce8e6b613) || _76cdf54def3a;
  if (!_c59cf612fba8) return _76cdf54def3a;
  const _da92bd79824e = new Headers(_76cdf54def3a.headers);
  return _da92bd79824e.delete("content-length"), new Response(_c59cf612fba8, {
    status: _76cdf54def3a.status,
    statusText: _76cdf54def3a.statusText,
    headers: _da92bd79824e
  });
}

function Hm(_341ce8e6b613) {
  return new Promise(_76cdf54def3a => setTimeout(_76cdf54def3a, _341ce8e6b613));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _341ce8e6b613 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _76cdf54def3a of _341ce8e6b613) try {
      _76cdf54def3a.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_341ce8e6b613) {
  const _76cdf54def3a = Date.now() + 7e3;
  let _4b456b30ce7b = 0;
  for (;Date.now() < _76cdf54def3a; ) {
    const _76cdf54def3a = Date.now();
    if (_76cdf54def3a >= _4b456b30ce7b && (await Fm(), _4b456b30ce7b = _76cdf54def3a + 500), 
    $scramjetController.shouldRoute(_341ce8e6b613)) return Qm(_341ce8e6b613);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_341ce8e6b613) {
  return Ym(_341ce8e6b613, await $scramjetController.route(_341ce8e6b613));
}

self.addEventListener("fetch", _341ce8e6b613 => {
  self.NYX_TUTSI_WORKER || !zm(_341ce8e6b613) ? $scramjetController.shouldRoute(_341ce8e6b613) ? _341ce8e6b613.respondWith(Qm(_341ce8e6b613)) : qm(_341ce8e6b613) && _341ce8e6b613.respondWith(Jm(_341ce8e6b613)) : _341ce8e6b613.respondWith(Dm(_341ce8e6b613));
}), self.addEventListener("activate", _341ce8e6b613 => {
  _341ce8e6b613.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
