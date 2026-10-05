importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_0950788542b0) {
  try {
    return new URL(_0950788542b0.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_0950788542b0) {
  try {
    const _8f2607bcce97 = new URL(_0950788542b0).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _8f2607bcce97 ? new URL(decodeURIComponent(_8f2607bcce97[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_0950788542b0) {
  try {
    const _8f2607bcce97 = new URL(_0950788542b0).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _8f2607bcce97 ? new URL(decodeURIComponent(_8f2607bcce97[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _0950788542b0 => {
  _0950788542b0.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_0950788542b0) {
  const _8f2607bcce97 = String(_0950788542b0 || "").toLowerCase();
  return "cmp.inmobi.com" !== _8f2607bcce97 && !_8f2607bcce97.endsWith(".cmp.inmobi.com") && _m.some(_0950788542b0 => _8f2607bcce97 === _0950788542b0 || _8f2607bcce97.endsWith(`.${_0950788542b0}`));
}

function zm(_0950788542b0) {
  const _8f2607bcce97 = Wm(_0950788542b0.request.url);
  if (!_8f2607bcce97) return !1;
  try {
    const _0950788542b0 = new URL(_8f2607bcce97);
    return Nm(_0950788542b0.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_0950788542b0.pathname) || "serve.app.playsaurus.com" === _0950788542b0.hostname && /\/ad-campaigns\//i.test(_0950788542b0.pathname);
  } catch {
    return !1;
  }
}

function Dm(_0950788542b0) {
  const _8f2607bcce97 = _0950788542b0.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_0950788542b0.request.destination) || /javascript|ecmascript/i.test(_8f2607bcce97) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _0950788542b0.request.destination || /text\/css/i.test(_8f2607bcce97) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _0950788542b0.request.destination ? new Response("", {
    status: 204
  }) : "document" === _0950788542b0.request.destination || "iframe" === _0950788542b0.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_0950788542b0) {
  const _8f2607bcce97 = _0950788542b0.request.headers.get("accept") || "", _f47d15ce70c1 = new URL(_0950788542b0.request.url).pathname, _c8d65e3f2574 = Um(_0950788542b0.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_0950788542b0.request.destination) || /javascript|ecmascript|text\/css/i.test(_8f2607bcce97) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_f47d15ce70c1) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_c8d65e3f2574);
}

function Om(_0950788542b0) {
  const _8f2607bcce97 = _0950788542b0.request.headers.get("accept") || "", _f47d15ce70c1 = new URL(_0950788542b0.request.url).pathname, _c8d65e3f2574 = Um(_0950788542b0.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_0950788542b0.request.destination) || /javascript|ecmascript/i.test(_8f2607bcce97) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_f47d15ce70c1) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_c8d65e3f2574) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _0950788542b0.request.destination || /text\/css/i.test(_8f2607bcce97) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_0950788542b0) {
  return /^\s*</.test(_0950788542b0) || /^\s*\)\]\}'/.test(_0950788542b0) || /^\s*\)\]/.test(_0950788542b0);
}

async function Ym(_0950788542b0, _8f2607bcce97) {
  if (!Km(_0950788542b0)) return _8f2607bcce97;
  const _f47d15ce70c1 = _8f2607bcce97.headers.get("content-type") || "";
  if (_8f2607bcce97.status >= 400 || _f47d15ce70c1.includes("text/html") || _f47d15ce70c1.includes("application/json") || _f47d15ce70c1.includes("text/json")) return Om(_0950788542b0) || _8f2607bcce97;
  const _c8d65e3f2574 = await _8f2607bcce97.clone().text().catch(() => "");
  if (Xm(_c8d65e3f2574)) return Om(_0950788542b0) || _8f2607bcce97;
  if (!_c8d65e3f2574) return _8f2607bcce97;
  const _7e73f3dec0de = new Headers(_8f2607bcce97.headers);
  return _7e73f3dec0de.delete("content-length"), new Response(_c8d65e3f2574, {
    status: _8f2607bcce97.status,
    statusText: _8f2607bcce97.statusText,
    headers: _7e73f3dec0de
  });
}

function Hm(_0950788542b0) {
  return new Promise(_8f2607bcce97 => setTimeout(_8f2607bcce97, _0950788542b0));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _0950788542b0 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _8f2607bcce97 of _0950788542b0) try {
      _8f2607bcce97.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_0950788542b0) {
  const _8f2607bcce97 = Date.now() + 7e3;
  let _f47d15ce70c1 = 0;
  for (;Date.now() < _8f2607bcce97; ) {
    const _8f2607bcce97 = Date.now();
    if (_8f2607bcce97 >= _f47d15ce70c1 && (await Fm(), _f47d15ce70c1 = _8f2607bcce97 + 500), 
    $scramjetController.shouldRoute(_0950788542b0)) return Qm(_0950788542b0);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_0950788542b0) {
  return Ym(_0950788542b0, await $scramjetController.route(_0950788542b0));
}

self.addEventListener("fetch", _0950788542b0 => {
  self.NYX_TUTSI_WORKER || !zm(_0950788542b0) ? $scramjetController.shouldRoute(_0950788542b0) ? _0950788542b0.respondWith(Qm(_0950788542b0)) : qm(_0950788542b0) && _0950788542b0.respondWith(Jm(_0950788542b0)) : _0950788542b0.respondWith(Dm(_0950788542b0));
}), self.addEventListener("activate", _0950788542b0 => {
  _0950788542b0.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
