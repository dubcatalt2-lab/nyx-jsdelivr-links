importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_f097cceb97b4) {
  try {
    return new URL(_f097cceb97b4.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Tm(_f097cceb97b4) {
  try {
    const _616df4038667 = new URL(_f097cceb97b4).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _616df4038667 ? new URL(decodeURIComponent(_616df4038667[1])).pathname : "";
  } catch {
    return "";
  }
}

function Um(_f097cceb97b4) {
  try {
    const _616df4038667 = new URL(_f097cceb97b4).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _616df4038667 ? new URL(decodeURIComponent(_616df4038667[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _f097cceb97b4 => {
  _f097cceb97b4.waitUntil(self.skipWaiting());
});

const Wm = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function _m(_f097cceb97b4) {
  const _616df4038667 = String(_f097cceb97b4 || "").toLowerCase();
  return "cmp.inmobi.com" !== _616df4038667 && !_616df4038667.endsWith(".cmp.inmobi.com") && Wm.some(_f097cceb97b4 => _616df4038667 === _f097cceb97b4 || _616df4038667.endsWith(`.${_f097cceb97b4}`));
}

function Nm(_f097cceb97b4) {
  const _616df4038667 = Um(_f097cceb97b4.request.url);
  if (!_616df4038667) return !1;
  try {
    const _f097cceb97b4 = new URL(_616df4038667);
    return _m(_f097cceb97b4.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_f097cceb97b4.pathname) || "serve.app.playsaurus.com" === _f097cceb97b4.hostname && /\/ad-campaigns\//i.test(_f097cceb97b4.pathname);
  } catch {
    return !1;
  }
}

function zm(_f097cceb97b4) {
  const _616df4038667 = _f097cceb97b4.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_f097cceb97b4.request.destination) || /javascript|ecmascript/i.test(_616df4038667) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _f097cceb97b4.request.destination || /text\/css/i.test(_616df4038667) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _f097cceb97b4.request.destination ? new Response("", {
    status: 204
  }) : "document" === _f097cceb97b4.request.destination || "iframe" === _f097cceb97b4.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Dm(_f097cceb97b4) {
  const _616df4038667 = _f097cceb97b4.request.headers.get("accept") || "", _76c301e55822 = new URL(_f097cceb97b4.request.url).pathname, _8a040ef528f7 = Tm(_f097cceb97b4.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_f097cceb97b4.request.destination) || /javascript|ecmascript|text\/css/i.test(_616df4038667) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_76c301e55822) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_8a040ef528f7);
}

function Km(_f097cceb97b4) {
  const _616df4038667 = _f097cceb97b4.request.headers.get("accept") || "", _76c301e55822 = new URL(_f097cceb97b4.request.url).pathname, _8a040ef528f7 = Tm(_f097cceb97b4.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_f097cceb97b4.request.destination) || /javascript|ecmascript/i.test(_616df4038667) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_76c301e55822) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_8a040ef528f7) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _f097cceb97b4.request.destination || /text\/css/i.test(_616df4038667) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Om(_f097cceb97b4) {
  return /^\s*</.test(_f097cceb97b4) || /^\s*\)\]\}'/.test(_f097cceb97b4) || /^\s*\)\]/.test(_f097cceb97b4);
}

async function Xm(_f097cceb97b4, _616df4038667) {
  if (!Dm(_f097cceb97b4)) return _616df4038667;
  const _76c301e55822 = _616df4038667.headers.get("content-type") || "";
  if (_616df4038667.status >= 400 || _76c301e55822.includes("text/html") || _76c301e55822.includes("application/json") || _76c301e55822.includes("text/json")) return Km(_f097cceb97b4) || _616df4038667;
  const _8a040ef528f7 = await _616df4038667.clone().text().catch(() => "");
  if (Om(_8a040ef528f7)) return Km(_f097cceb97b4) || _616df4038667;
  if (!_8a040ef528f7) return _616df4038667;
  const _3e5ad15ded5e = new Headers(_616df4038667.headers);
  return _3e5ad15ded5e.delete("content-length"), new Response(_8a040ef528f7, {
    status: _616df4038667.status,
    statusText: _616df4038667.statusText,
    headers: _3e5ad15ded5e
  });
}

function Ym(_f097cceb97b4) {
  return new Promise(_616df4038667 => setTimeout(_616df4038667, _f097cceb97b4));
}

async function Hm() {
  return jm || (jm = (async () => {
    const _f097cceb97b4 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _616df4038667 of _f097cceb97b4) try {
      _616df4038667.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Ym(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Fm(_f097cceb97b4) {
  const _616df4038667 = Date.now() + 7e3;
  let _76c301e55822 = 0;
  for (;Date.now() < _616df4038667; ) {
    const _616df4038667 = Date.now();
    if (_616df4038667 >= _76c301e55822 && (await Hm(), _76c301e55822 = _616df4038667 + 500), 
    $scramjetController.shouldRoute(_f097cceb97b4)) return Jm(_f097cceb97b4);
    await Ym(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Jm(_f097cceb97b4) {
  return Xm(_f097cceb97b4, await $scramjetController.route(_f097cceb97b4));
}

self.addEventListener("fetch", _f097cceb97b4 => {
  self.NYX_TUTSI_WORKER || !Nm(_f097cceb97b4) ? $scramjetController.shouldRoute(_f097cceb97b4) ? _f097cceb97b4.respondWith(Jm(_f097cceb97b4)) : qm(_f097cceb97b4) && _f097cceb97b4.respondWith(Fm(_f097cceb97b4)) : _f097cceb97b4.respondWith(zm(_f097cceb97b4));
}), self.addEventListener("activate", _f097cceb97b4 => {
  _f097cceb97b4.waitUntil(Promise.all([ self.clients.claim(), Hm().catch(() => {}) ]));
}), setTimeout(() => {
  Hm().catch(() => {});
}, 120);
