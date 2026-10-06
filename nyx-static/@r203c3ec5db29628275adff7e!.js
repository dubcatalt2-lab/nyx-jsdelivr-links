importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_ddd1bbc5e27d) {
  try {
    return new URL(_ddd1bbc5e27d.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_ddd1bbc5e27d) {
  try {
    const _8bc5dbb55671 = new URL(_ddd1bbc5e27d).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _8bc5dbb55671 ? new URL(decodeURIComponent(_8bc5dbb55671[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_ddd1bbc5e27d) {
  try {
    const _8bc5dbb55671 = new URL(_ddd1bbc5e27d).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _8bc5dbb55671 ? new URL(decodeURIComponent(_8bc5dbb55671[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _ddd1bbc5e27d => {
  _ddd1bbc5e27d.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_ddd1bbc5e27d) {
  const _8bc5dbb55671 = String(_ddd1bbc5e27d || "").toLowerCase();
  return "cmp.inmobi.com" !== _8bc5dbb55671 && !_8bc5dbb55671.endsWith(".cmp.inmobi.com") && _m.some(_ddd1bbc5e27d => _8bc5dbb55671 === _ddd1bbc5e27d || _8bc5dbb55671.endsWith(`.${_ddd1bbc5e27d}`));
}

function zm(_ddd1bbc5e27d) {
  const _8bc5dbb55671 = Wm(_ddd1bbc5e27d.request.url);
  if (!_8bc5dbb55671) return !1;
  try {
    const _ddd1bbc5e27d = new URL(_8bc5dbb55671);
    return Nm(_ddd1bbc5e27d.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_ddd1bbc5e27d.pathname) || "serve.app.playsaurus.com" === _ddd1bbc5e27d.hostname && /\/ad-campaigns\//i.test(_ddd1bbc5e27d.pathname);
  } catch {
    return !1;
  }
}

function Dm(_ddd1bbc5e27d) {
  const _8bc5dbb55671 = _ddd1bbc5e27d.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_ddd1bbc5e27d.request.destination) || /javascript|ecmascript/i.test(_8bc5dbb55671) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _ddd1bbc5e27d.request.destination || /text\/css/i.test(_8bc5dbb55671) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _ddd1bbc5e27d.request.destination ? new Response("", {
    status: 204
  }) : "document" === _ddd1bbc5e27d.request.destination || "iframe" === _ddd1bbc5e27d.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_ddd1bbc5e27d) {
  const _8bc5dbb55671 = _ddd1bbc5e27d.request.headers.get("accept") || "", _f1e8d9bacf25 = new URL(_ddd1bbc5e27d.request.url).pathname, _69e53f6d9856 = Um(_ddd1bbc5e27d.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_ddd1bbc5e27d.request.destination) || /javascript|ecmascript|text\/css/i.test(_8bc5dbb55671) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_f1e8d9bacf25) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_69e53f6d9856);
}

function Om(_ddd1bbc5e27d) {
  const _8bc5dbb55671 = _ddd1bbc5e27d.request.headers.get("accept") || "", _f1e8d9bacf25 = new URL(_ddd1bbc5e27d.request.url).pathname, _69e53f6d9856 = Um(_ddd1bbc5e27d.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_ddd1bbc5e27d.request.destination) || /javascript|ecmascript/i.test(_8bc5dbb55671) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_f1e8d9bacf25) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_69e53f6d9856) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _ddd1bbc5e27d.request.destination || /text\/css/i.test(_8bc5dbb55671) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_ddd1bbc5e27d) {
  return /^\s*</.test(_ddd1bbc5e27d) || /^\s*\)\]\}'/.test(_ddd1bbc5e27d) || /^\s*\)\]/.test(_ddd1bbc5e27d);
}

async function Ym(_ddd1bbc5e27d, _8bc5dbb55671) {
  if (!Km(_ddd1bbc5e27d)) return _8bc5dbb55671;
  const _f1e8d9bacf25 = _8bc5dbb55671.headers.get("content-type") || "";
  if (_8bc5dbb55671.status >= 400 || _f1e8d9bacf25.includes("text/html") || _f1e8d9bacf25.includes("application/json") || _f1e8d9bacf25.includes("text/json")) return Om(_ddd1bbc5e27d) || _8bc5dbb55671;
  const _69e53f6d9856 = await _8bc5dbb55671.clone().text().catch(() => "");
  if (Xm(_69e53f6d9856)) return Om(_ddd1bbc5e27d) || _8bc5dbb55671;
  if (!_69e53f6d9856) return _8bc5dbb55671;
  const _cc7d1dde9772 = new Headers(_8bc5dbb55671.headers);
  return _cc7d1dde9772.delete("content-length"), new Response(_69e53f6d9856, {
    status: _8bc5dbb55671.status,
    statusText: _8bc5dbb55671.statusText,
    headers: _cc7d1dde9772
  });
}

function Hm(_ddd1bbc5e27d) {
  return new Promise(_8bc5dbb55671 => setTimeout(_8bc5dbb55671, _ddd1bbc5e27d));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _ddd1bbc5e27d = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _8bc5dbb55671 of _ddd1bbc5e27d) try {
      _8bc5dbb55671.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_ddd1bbc5e27d) {
  const _8bc5dbb55671 = Date.now() + 7e3;
  let _f1e8d9bacf25 = 0;
  for (;Date.now() < _8bc5dbb55671; ) {
    const _8bc5dbb55671 = Date.now();
    if (_8bc5dbb55671 >= _f1e8d9bacf25 && (await Fm(), _f1e8d9bacf25 = _8bc5dbb55671 + 500), 
    $studyjetController.shouldRoute(_ddd1bbc5e27d)) return Qm(_ddd1bbc5e27d);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_ddd1bbc5e27d) {
  return Ym(_ddd1bbc5e27d, await $studyjetController.route(_ddd1bbc5e27d));
}

self.addEventListener("fetch", _ddd1bbc5e27d => {
  self.NYX_TUTSI_WORKER || !zm(_ddd1bbc5e27d) ? $studyjetController.shouldRoute(_ddd1bbc5e27d) ? _ddd1bbc5e27d.respondWith(Qm(_ddd1bbc5e27d)) : qm(_ddd1bbc5e27d) && _ddd1bbc5e27d.respondWith(Jm(_ddd1bbc5e27d)) : _ddd1bbc5e27d.respondWith(Dm(_ddd1bbc5e27d));
}), self.addEventListener("activate", _ddd1bbc5e27d => {
  _ddd1bbc5e27d.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
