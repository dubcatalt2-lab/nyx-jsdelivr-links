importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_0399c753eae5) {
  try {
    return new URL(_0399c753eae5.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_0399c753eae5) {
  try {
    const _d8f7a6ef10d1 = new URL(_0399c753eae5).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _d8f7a6ef10d1 ? new URL(decodeURIComponent(_d8f7a6ef10d1[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_0399c753eae5) {
  try {
    const _d8f7a6ef10d1 = new URL(_0399c753eae5).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _d8f7a6ef10d1 ? new URL(decodeURIComponent(_d8f7a6ef10d1[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _0399c753eae5 => {
  _0399c753eae5.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_0399c753eae5) {
  const _d8f7a6ef10d1 = String(_0399c753eae5 || "").toLowerCase();
  return "cmp.inmobi.com" !== _d8f7a6ef10d1 && !_d8f7a6ef10d1.endsWith(".cmp.inmobi.com") && _m.some(_0399c753eae5 => _d8f7a6ef10d1 === _0399c753eae5 || _d8f7a6ef10d1.endsWith(`.${_0399c753eae5}`));
}

function zm(_0399c753eae5) {
  const _d8f7a6ef10d1 = Wm(_0399c753eae5.request.url);
  if (!_d8f7a6ef10d1) return !1;
  try {
    const _0399c753eae5 = new URL(_d8f7a6ef10d1);
    return Nm(_0399c753eae5.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_0399c753eae5.pathname) || "serve.app.playsaurus.com" === _0399c753eae5.hostname && /\/ad-campaigns\//i.test(_0399c753eae5.pathname);
  } catch {
    return !1;
  }
}

function Dm(_0399c753eae5) {
  const _d8f7a6ef10d1 = _0399c753eae5.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_0399c753eae5.request.destination) || /javascript|ecmascript/i.test(_d8f7a6ef10d1) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _0399c753eae5.request.destination || /text\/css/i.test(_d8f7a6ef10d1) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _0399c753eae5.request.destination ? new Response("", {
    status: 204
  }) : "document" === _0399c753eae5.request.destination || "iframe" === _0399c753eae5.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_0399c753eae5) {
  const _d8f7a6ef10d1 = _0399c753eae5.request.headers.get("accept") || "", _c9946a2271ab = new URL(_0399c753eae5.request.url).pathname, _b1bf6836bcbd = Um(_0399c753eae5.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_0399c753eae5.request.destination) || /javascript|ecmascript|text\/css/i.test(_d8f7a6ef10d1) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_c9946a2271ab) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_b1bf6836bcbd);
}

function Om(_0399c753eae5) {
  const _d8f7a6ef10d1 = _0399c753eae5.request.headers.get("accept") || "", _c9946a2271ab = new URL(_0399c753eae5.request.url).pathname, _b1bf6836bcbd = Um(_0399c753eae5.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_0399c753eae5.request.destination) || /javascript|ecmascript/i.test(_d8f7a6ef10d1) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_c9946a2271ab) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_b1bf6836bcbd) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _0399c753eae5.request.destination || /text\/css/i.test(_d8f7a6ef10d1) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_0399c753eae5) {
  return /^\s*</.test(_0399c753eae5) || /^\s*\)\]\}'/.test(_0399c753eae5) || /^\s*\)\]/.test(_0399c753eae5);
}

async function Ym(_0399c753eae5, _d8f7a6ef10d1) {
  if (!Km(_0399c753eae5)) return _d8f7a6ef10d1;
  const _c9946a2271ab = _d8f7a6ef10d1.headers.get("content-type") || "";
  if (_d8f7a6ef10d1.status >= 400 || _c9946a2271ab.includes("text/html") || _c9946a2271ab.includes("application/json") || _c9946a2271ab.includes("text/json")) return Om(_0399c753eae5) || _d8f7a6ef10d1;
  const _b1bf6836bcbd = await _d8f7a6ef10d1.clone().text().catch(() => "");
  if (Xm(_b1bf6836bcbd)) return Om(_0399c753eae5) || _d8f7a6ef10d1;
  if (!_b1bf6836bcbd) return _d8f7a6ef10d1;
  const _f7f118479e27 = new Headers(_d8f7a6ef10d1.headers);
  return _f7f118479e27.delete("content-length"), new Response(_b1bf6836bcbd, {
    status: _d8f7a6ef10d1.status,
    statusText: _d8f7a6ef10d1.statusText,
    headers: _f7f118479e27
  });
}

function Hm(_0399c753eae5) {
  return new Promise(_d8f7a6ef10d1 => setTimeout(_d8f7a6ef10d1, _0399c753eae5));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _0399c753eae5 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _d8f7a6ef10d1 of _0399c753eae5) try {
      _d8f7a6ef10d1.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_0399c753eae5) {
  const _d8f7a6ef10d1 = Date.now() + 7e3;
  let _c9946a2271ab = 0;
  for (;Date.now() < _d8f7a6ef10d1; ) {
    const _d8f7a6ef10d1 = Date.now();
    if (_d8f7a6ef10d1 >= _c9946a2271ab && (await Fm(), _c9946a2271ab = _d8f7a6ef10d1 + 500), 
    $studyjetController.shouldRoute(_0399c753eae5)) return Qm(_0399c753eae5);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_0399c753eae5) {
  return Ym(_0399c753eae5, await $studyjetController.route(_0399c753eae5));
}

self.addEventListener("fetch", _0399c753eae5 => {
  self.NYX_TUTSI_WORKER || !zm(_0399c753eae5) ? $studyjetController.shouldRoute(_0399c753eae5) ? _0399c753eae5.respondWith(Qm(_0399c753eae5)) : qm(_0399c753eae5) && _0399c753eae5.respondWith(Jm(_0399c753eae5)) : _0399c753eae5.respondWith(Dm(_0399c753eae5));
}), self.addEventListener("activate", _0399c753eae5 => {
  _0399c753eae5.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
