importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_b5ed88c3ba61) {
  try {
    return new URL(_b5ed88c3ba61.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Um(_b5ed88c3ba61) {
  try {
    const _cb9c59124f80 = new URL(_b5ed88c3ba61).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _cb9c59124f80 ? new URL(decodeURIComponent(_cb9c59124f80[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_b5ed88c3ba61) {
  try {
    const _cb9c59124f80 = new URL(_b5ed88c3ba61).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _cb9c59124f80 ? new URL(decodeURIComponent(_cb9c59124f80[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _b5ed88c3ba61 => {
  _b5ed88c3ba61.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_b5ed88c3ba61) {
  const _cb9c59124f80 = String(_b5ed88c3ba61 || "").toLowerCase();
  return "cmp.inmobi.com" !== _cb9c59124f80 && !_cb9c59124f80.endsWith(".cmp.inmobi.com") && _m.some(_b5ed88c3ba61 => _cb9c59124f80 === _b5ed88c3ba61 || _cb9c59124f80.endsWith(`.${_b5ed88c3ba61}`));
}

function zm(_b5ed88c3ba61) {
  const _cb9c59124f80 = Wm(_b5ed88c3ba61.request.url);
  if (!_cb9c59124f80) return !1;
  try {
    const _b5ed88c3ba61 = new URL(_cb9c59124f80);
    return Nm(_b5ed88c3ba61.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_b5ed88c3ba61.pathname) || "serve.app.playsaurus.com" === _b5ed88c3ba61.hostname && /\/ad-campaigns\//i.test(_b5ed88c3ba61.pathname);
  } catch {
    return !1;
  }
}

function Dm(_b5ed88c3ba61) {
  const _cb9c59124f80 = _b5ed88c3ba61.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_b5ed88c3ba61.request.destination) || /javascript|ecmascript/i.test(_cb9c59124f80) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _b5ed88c3ba61.request.destination || /text\/css/i.test(_cb9c59124f80) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _b5ed88c3ba61.request.destination ? new Response("", {
    status: 204
  }) : "document" === _b5ed88c3ba61.request.destination || "iframe" === _b5ed88c3ba61.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_b5ed88c3ba61) {
  const _cb9c59124f80 = _b5ed88c3ba61.request.headers.get("accept") || "", _9c72498e5a7d = new URL(_b5ed88c3ba61.request.url).pathname, _e8e4b149c305 = Um(_b5ed88c3ba61.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_b5ed88c3ba61.request.destination) || /javascript|ecmascript|text\/css/i.test(_cb9c59124f80) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_9c72498e5a7d) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_e8e4b149c305);
}

function Om(_b5ed88c3ba61) {
  const _cb9c59124f80 = _b5ed88c3ba61.request.headers.get("accept") || "", _9c72498e5a7d = new URL(_b5ed88c3ba61.request.url).pathname, _e8e4b149c305 = Um(_b5ed88c3ba61.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_b5ed88c3ba61.request.destination) || /javascript|ecmascript/i.test(_cb9c59124f80) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_9c72498e5a7d) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_e8e4b149c305) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _b5ed88c3ba61.request.destination || /text\/css/i.test(_cb9c59124f80) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_b5ed88c3ba61) {
  return /^\s*</.test(_b5ed88c3ba61) || /^\s*\)\]\}'/.test(_b5ed88c3ba61) || /^\s*\)\]/.test(_b5ed88c3ba61);
}

async function Ym(_b5ed88c3ba61, _cb9c59124f80) {
  if (!Km(_b5ed88c3ba61)) return _cb9c59124f80;
  const _9c72498e5a7d = _cb9c59124f80.headers.get("content-type") || "";
  if (_cb9c59124f80.status >= 400 || _9c72498e5a7d.includes("text/html") || _9c72498e5a7d.includes("application/json") || _9c72498e5a7d.includes("text/json")) return Om(_b5ed88c3ba61) || _cb9c59124f80;
  const _e8e4b149c305 = await _cb9c59124f80.clone().text().catch(() => "");
  if (Xm(_e8e4b149c305)) return Om(_b5ed88c3ba61) || _cb9c59124f80;
  if (!_e8e4b149c305) return _cb9c59124f80;
  const _b70b13bfc148 = new Headers(_cb9c59124f80.headers);
  return _b70b13bfc148.delete("content-length"), new Response(_e8e4b149c305, {
    status: _cb9c59124f80.status,
    statusText: _cb9c59124f80.statusText,
    headers: _b70b13bfc148
  });
}

function Hm(_b5ed88c3ba61) {
  return new Promise(_cb9c59124f80 => setTimeout(_cb9c59124f80, _b5ed88c3ba61));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _b5ed88c3ba61 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _cb9c59124f80 of _b5ed88c3ba61) try {
      _cb9c59124f80.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_b5ed88c3ba61) {
  const _cb9c59124f80 = Date.now() + 7e3;
  let _9c72498e5a7d = 0;
  for (;Date.now() < _cb9c59124f80; ) {
    const _cb9c59124f80 = Date.now();
    if (_cb9c59124f80 >= _9c72498e5a7d && (await Fm(), _9c72498e5a7d = _cb9c59124f80 + 500), 
    $studyjetController.shouldRoute(_b5ed88c3ba61)) return Qm(_b5ed88c3ba61);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_b5ed88c3ba61) {
  return Ym(_b5ed88c3ba61, await $studyjetController.route(_b5ed88c3ba61));
}

self.addEventListener("fetch", _b5ed88c3ba61 => {
  self.NYX_TUTSI_WORKER || !zm(_b5ed88c3ba61) ? $studyjetController.shouldRoute(_b5ed88c3ba61) ? _b5ed88c3ba61.respondWith(Qm(_b5ed88c3ba61)) : qm(_b5ed88c3ba61) && _b5ed88c3ba61.respondWith(Jm(_b5ed88c3ba61)) : _b5ed88c3ba61.respondWith(Dm(_b5ed88c3ba61));
}), self.addEventListener("activate", _b5ed88c3ba61 => {
  _b5ed88c3ba61.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
