importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_2cd43b642d9b) {
  try {
    return new URL(_2cd43b642d9b.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_2cd43b642d9b) {
  try {
    const _5665b733af20 = new URL(_2cd43b642d9b).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _5665b733af20 ? new URL(decodeURIComponent(_5665b733af20[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_2cd43b642d9b) {
  try {
    const _5665b733af20 = new URL(_2cd43b642d9b).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _5665b733af20 ? new URL(decodeURIComponent(_5665b733af20[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _2cd43b642d9b => {
  _2cd43b642d9b.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_2cd43b642d9b) {
  const _5665b733af20 = String(_2cd43b642d9b || "").toLowerCase();
  return "cmp.inmobi.com" !== _5665b733af20 && !_5665b733af20.endsWith(".cmp.inmobi.com") && _m.some(_2cd43b642d9b => _5665b733af20 === _2cd43b642d9b || _5665b733af20.endsWith(`.${_2cd43b642d9b}`));
}

function zm(_2cd43b642d9b) {
  const _5665b733af20 = Wm(_2cd43b642d9b.request.url);
  if (!_5665b733af20) return !1;
  try {
    const _2cd43b642d9b = new URL(_5665b733af20);
    return Nm(_2cd43b642d9b.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_2cd43b642d9b.pathname) || "serve.app.playsaurus.com" === _2cd43b642d9b.hostname && /\/ad-campaigns\//i.test(_2cd43b642d9b.pathname);
  } catch {
    return !1;
  }
}

function Dm(_2cd43b642d9b) {
  const _5665b733af20 = _2cd43b642d9b.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_2cd43b642d9b.request.destination) || /javascript|ecmascript/i.test(_5665b733af20) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _2cd43b642d9b.request.destination || /text\/css/i.test(_5665b733af20) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _2cd43b642d9b.request.destination ? new Response("", {
    status: 204
  }) : "document" === _2cd43b642d9b.request.destination || "iframe" === _2cd43b642d9b.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_2cd43b642d9b) {
  const _5665b733af20 = _2cd43b642d9b.request.headers.get("accept") || "", _fbb7f042dbd1 = new URL(_2cd43b642d9b.request.url).pathname, _aee3840302bb = Um(_2cd43b642d9b.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_2cd43b642d9b.request.destination) || /javascript|ecmascript|text\/css/i.test(_5665b733af20) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_fbb7f042dbd1) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_aee3840302bb);
}

function Om(_2cd43b642d9b) {
  const _5665b733af20 = _2cd43b642d9b.request.headers.get("accept") || "", _fbb7f042dbd1 = new URL(_2cd43b642d9b.request.url).pathname, _aee3840302bb = Um(_2cd43b642d9b.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_2cd43b642d9b.request.destination) || /javascript|ecmascript/i.test(_5665b733af20) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_fbb7f042dbd1) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_aee3840302bb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _2cd43b642d9b.request.destination || /text\/css/i.test(_5665b733af20) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_2cd43b642d9b) {
  return /^\s*</.test(_2cd43b642d9b) || /^\s*\)\]\}'/.test(_2cd43b642d9b) || /^\s*\)\]/.test(_2cd43b642d9b);
}

async function Ym(_2cd43b642d9b, _5665b733af20) {
  if (!Km(_2cd43b642d9b)) return _5665b733af20;
  const _fbb7f042dbd1 = _5665b733af20.headers.get("content-type") || "";
  if (_5665b733af20.status >= 400 || _fbb7f042dbd1.includes("text/html") || _fbb7f042dbd1.includes("application/json") || _fbb7f042dbd1.includes("text/json")) return Om(_2cd43b642d9b) || _5665b733af20;
  const _aee3840302bb = await _5665b733af20.clone().text().catch(() => "");
  if (Xm(_aee3840302bb)) return Om(_2cd43b642d9b) || _5665b733af20;
  if (!_aee3840302bb) return _5665b733af20;
  const _7146e3e2fc01 = new Headers(_5665b733af20.headers);
  return _7146e3e2fc01.delete("content-length"), new Response(_aee3840302bb, {
    status: _5665b733af20.status,
    statusText: _5665b733af20.statusText,
    headers: _7146e3e2fc01
  });
}

function Hm(_2cd43b642d9b) {
  return new Promise(_5665b733af20 => setTimeout(_5665b733af20, _2cd43b642d9b));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _2cd43b642d9b = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _5665b733af20 of _2cd43b642d9b) try {
      _5665b733af20.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_2cd43b642d9b) {
  const _5665b733af20 = Date.now() + 7e3;
  let _fbb7f042dbd1 = 0;
  for (;Date.now() < _5665b733af20; ) {
    const _5665b733af20 = Date.now();
    if (_5665b733af20 >= _fbb7f042dbd1 && (await Fm(), _fbb7f042dbd1 = _5665b733af20 + 500), 
    $studyjetController.shouldRoute(_2cd43b642d9b)) return Qm(_2cd43b642d9b);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_2cd43b642d9b) {
  return Ym(_2cd43b642d9b, await $studyjetController.route(_2cd43b642d9b));
}

self.addEventListener("fetch", _2cd43b642d9b => {
  self.NYX_TUTSI_WORKER || !zm(_2cd43b642d9b) ? $studyjetController.shouldRoute(_2cd43b642d9b) ? _2cd43b642d9b.respondWith(Qm(_2cd43b642d9b)) : qm(_2cd43b642d9b) && _2cd43b642d9b.respondWith(Jm(_2cd43b642d9b)) : _2cd43b642d9b.respondWith(Dm(_2cd43b642d9b));
}), self.addEventListener("activate", _2cd43b642d9b => {
  _2cd43b642d9b.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
