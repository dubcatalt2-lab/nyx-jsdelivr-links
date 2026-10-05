importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_b758494d5be0) {
  try {
    return new URL(_b758494d5be0.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_b758494d5be0) {
  try {
    const _9c333789f8b6 = new URL(_b758494d5be0).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _9c333789f8b6 ? new URL(decodeURIComponent(_9c333789f8b6[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_b758494d5be0) {
  try {
    const _9c333789f8b6 = new URL(_b758494d5be0).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _9c333789f8b6 ? new URL(decodeURIComponent(_9c333789f8b6[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _b758494d5be0 => {
  _b758494d5be0.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_b758494d5be0) {
  const _9c333789f8b6 = String(_b758494d5be0 || "").toLowerCase();
  return "cmp.inmobi.com" !== _9c333789f8b6 && !_9c333789f8b6.endsWith(".cmp.inmobi.com") && _m.some(_b758494d5be0 => _9c333789f8b6 === _b758494d5be0 || _9c333789f8b6.endsWith(`.${_b758494d5be0}`));
}

function zm(_b758494d5be0) {
  const _9c333789f8b6 = Wm(_b758494d5be0.request.url);
  if (!_9c333789f8b6) return !1;
  try {
    const _b758494d5be0 = new URL(_9c333789f8b6);
    return Nm(_b758494d5be0.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_b758494d5be0.pathname) || "serve.app.playsaurus.com" === _b758494d5be0.hostname && /\/ad-campaigns\//i.test(_b758494d5be0.pathname);
  } catch {
    return !1;
  }
}

function Dm(_b758494d5be0) {
  const _9c333789f8b6 = _b758494d5be0.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_b758494d5be0.request.destination) || /javascript|ecmascript/i.test(_9c333789f8b6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _b758494d5be0.request.destination || /text\/css/i.test(_9c333789f8b6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _b758494d5be0.request.destination ? new Response("", {
    status: 204
  }) : "document" === _b758494d5be0.request.destination || "iframe" === _b758494d5be0.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_b758494d5be0) {
  const _9c333789f8b6 = _b758494d5be0.request.headers.get("accept") || "", _e56658a30d60 = new URL(_b758494d5be0.request.url).pathname, _70d240ce6cca = Um(_b758494d5be0.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_b758494d5be0.request.destination) || /javascript|ecmascript|text\/css/i.test(_9c333789f8b6) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_e56658a30d60) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_70d240ce6cca);
}

function Om(_b758494d5be0) {
  const _9c333789f8b6 = _b758494d5be0.request.headers.get("accept") || "", _e56658a30d60 = new URL(_b758494d5be0.request.url).pathname, _70d240ce6cca = Um(_b758494d5be0.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_b758494d5be0.request.destination) || /javascript|ecmascript/i.test(_9c333789f8b6) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_e56658a30d60) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_70d240ce6cca) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _b758494d5be0.request.destination || /text\/css/i.test(_9c333789f8b6) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_b758494d5be0) {
  return /^\s*</.test(_b758494d5be0) || /^\s*\)\]\}'/.test(_b758494d5be0) || /^\s*\)\]/.test(_b758494d5be0);
}

async function Ym(_b758494d5be0, _9c333789f8b6) {
  if (!Km(_b758494d5be0)) return _9c333789f8b6;
  const _e56658a30d60 = _9c333789f8b6.headers.get("content-type") || "";
  if (_9c333789f8b6.status >= 400 || _e56658a30d60.includes("text/html") || _e56658a30d60.includes("application/json") || _e56658a30d60.includes("text/json")) return Om(_b758494d5be0) || _9c333789f8b6;
  const _70d240ce6cca = await _9c333789f8b6.clone().text().catch(() => "");
  if (Xm(_70d240ce6cca)) return Om(_b758494d5be0) || _9c333789f8b6;
  if (!_70d240ce6cca) return _9c333789f8b6;
  const _ce3e3574fcaf = new Headers(_9c333789f8b6.headers);
  return _ce3e3574fcaf.delete("content-length"), new Response(_70d240ce6cca, {
    status: _9c333789f8b6.status,
    statusText: _9c333789f8b6.statusText,
    headers: _ce3e3574fcaf
  });
}

function Hm(_b758494d5be0) {
  return new Promise(_9c333789f8b6 => setTimeout(_9c333789f8b6, _b758494d5be0));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _b758494d5be0 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _9c333789f8b6 of _b758494d5be0) try {
      _9c333789f8b6.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_b758494d5be0) {
  const _9c333789f8b6 = Date.now() + 7e3;
  let _e56658a30d60 = 0;
  for (;Date.now() < _9c333789f8b6; ) {
    const _9c333789f8b6 = Date.now();
    if (_9c333789f8b6 >= _e56658a30d60 && (await Fm(), _e56658a30d60 = _9c333789f8b6 + 500), 
    $studyjetController.shouldRoute(_b758494d5be0)) return Qm(_b758494d5be0);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_b758494d5be0) {
  return Ym(_b758494d5be0, await $studyjetController.route(_b758494d5be0));
}

self.addEventListener("fetch", _b758494d5be0 => {
  self.NYX_TUTSI_WORKER || !zm(_b758494d5be0) ? $studyjetController.shouldRoute(_b758494d5be0) ? _b758494d5be0.respondWith(Qm(_b758494d5be0)) : qm(_b758494d5be0) && _b758494d5be0.respondWith(Jm(_b758494d5be0)) : _b758494d5be0.respondWith(Dm(_b758494d5be0));
}), self.addEventListener("activate", _b758494d5be0 => {
  _b758494d5be0.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
