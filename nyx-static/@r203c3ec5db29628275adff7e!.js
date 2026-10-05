importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_c5e45944b296) {
  try {
    return new URL(_c5e45944b296.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_c5e45944b296) {
  try {
    const _c1ce063894bf = new URL(_c5e45944b296).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _c1ce063894bf ? new URL(decodeURIComponent(_c1ce063894bf[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_c5e45944b296) {
  try {
    const _c1ce063894bf = new URL(_c5e45944b296).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _c1ce063894bf ? new URL(decodeURIComponent(_c1ce063894bf[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _c5e45944b296 => {
  _c5e45944b296.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_c5e45944b296) {
  const _c1ce063894bf = String(_c5e45944b296 || "").toLowerCase();
  return "cmp.inmobi.com" !== _c1ce063894bf && !_c1ce063894bf.endsWith(".cmp.inmobi.com") && _m.some(_c5e45944b296 => _c1ce063894bf === _c5e45944b296 || _c1ce063894bf.endsWith(`.${_c5e45944b296}`));
}

function zm(_c5e45944b296) {
  const _c1ce063894bf = Wm(_c5e45944b296.request.url);
  if (!_c1ce063894bf) return !1;
  try {
    const _c5e45944b296 = new URL(_c1ce063894bf);
    return Nm(_c5e45944b296.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_c5e45944b296.pathname) || "serve.app.playsaurus.com" === _c5e45944b296.hostname && /\/ad-campaigns\//i.test(_c5e45944b296.pathname);
  } catch {
    return !1;
  }
}

function Dm(_c5e45944b296) {
  const _c1ce063894bf = _c5e45944b296.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_c5e45944b296.request.destination) || /javascript|ecmascript/i.test(_c1ce063894bf) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _c5e45944b296.request.destination || /text\/css/i.test(_c1ce063894bf) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _c5e45944b296.request.destination ? new Response("", {
    status: 204
  }) : "document" === _c5e45944b296.request.destination || "iframe" === _c5e45944b296.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_c5e45944b296) {
  const _c1ce063894bf = _c5e45944b296.request.headers.get("accept") || "", _34f3f2b3f175 = new URL(_c5e45944b296.request.url).pathname, _f7bf77c44a13 = Um(_c5e45944b296.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_c5e45944b296.request.destination) || /javascript|ecmascript|text\/css/i.test(_c1ce063894bf) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_34f3f2b3f175) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_f7bf77c44a13);
}

function Om(_c5e45944b296) {
  const _c1ce063894bf = _c5e45944b296.request.headers.get("accept") || "", _34f3f2b3f175 = new URL(_c5e45944b296.request.url).pathname, _f7bf77c44a13 = Um(_c5e45944b296.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_c5e45944b296.request.destination) || /javascript|ecmascript/i.test(_c1ce063894bf) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_34f3f2b3f175) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_f7bf77c44a13) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _c5e45944b296.request.destination || /text\/css/i.test(_c1ce063894bf) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_c5e45944b296) {
  return /^\s*</.test(_c5e45944b296) || /^\s*\)\]\}'/.test(_c5e45944b296) || /^\s*\)\]/.test(_c5e45944b296);
}

async function Ym(_c5e45944b296, _c1ce063894bf) {
  if (!Km(_c5e45944b296)) return _c1ce063894bf;
  const _34f3f2b3f175 = _c1ce063894bf.headers.get("content-type") || "";
  if (_c1ce063894bf.status >= 400 || _34f3f2b3f175.includes("text/html") || _34f3f2b3f175.includes("application/json") || _34f3f2b3f175.includes("text/json")) return Om(_c5e45944b296) || _c1ce063894bf;
  const _f7bf77c44a13 = await _c1ce063894bf.clone().text().catch(() => "");
  if (Xm(_f7bf77c44a13)) return Om(_c5e45944b296) || _c1ce063894bf;
  if (!_f7bf77c44a13) return _c1ce063894bf;
  const _5ae51088d749 = new Headers(_c1ce063894bf.headers);
  return _5ae51088d749.delete("content-length"), new Response(_f7bf77c44a13, {
    status: _c1ce063894bf.status,
    statusText: _c1ce063894bf.statusText,
    headers: _5ae51088d749
  });
}

function Hm(_c5e45944b296) {
  return new Promise(_c1ce063894bf => setTimeout(_c1ce063894bf, _c5e45944b296));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _c5e45944b296 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _c1ce063894bf of _c5e45944b296) try {
      _c1ce063894bf.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_c5e45944b296) {
  const _c1ce063894bf = Date.now() + 7e3;
  let _34f3f2b3f175 = 0;
  for (;Date.now() < _c1ce063894bf; ) {
    const _c1ce063894bf = Date.now();
    if (_c1ce063894bf >= _34f3f2b3f175 && (await Fm(), _34f3f2b3f175 = _c1ce063894bf + 500), 
    $studyjetController.shouldRoute(_c5e45944b296)) return Qm(_c5e45944b296);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_c5e45944b296) {
  return Ym(_c5e45944b296, await $studyjetController.route(_c5e45944b296));
}

self.addEventListener("fetch", _c5e45944b296 => {
  self.NYX_TUTSI_WORKER || !zm(_c5e45944b296) ? $studyjetController.shouldRoute(_c5e45944b296) ? _c5e45944b296.respondWith(Qm(_c5e45944b296)) : qm(_c5e45944b296) && _c5e45944b296.respondWith(Jm(_c5e45944b296)) : _c5e45944b296.respondWith(Dm(_c5e45944b296));
}), self.addEventListener("activate", _c5e45944b296 => {
  _c5e45944b296.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
