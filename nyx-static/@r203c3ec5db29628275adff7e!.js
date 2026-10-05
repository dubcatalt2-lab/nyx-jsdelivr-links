importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_180d8cbee24a) {
  try {
    return new URL(_180d8cbee24a.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function Tm(_180d8cbee24a) {
  try {
    const _a7c9babcb622 = new URL(_180d8cbee24a).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _a7c9babcb622 ? new URL(decodeURIComponent(_a7c9babcb622[1])).pathname : "";
  } catch {
    return "";
  }
}

function Um(_180d8cbee24a) {
  try {
    const _a7c9babcb622 = new URL(_180d8cbee24a).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _a7c9babcb622 ? new URL(decodeURIComponent(_a7c9babcb622[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _180d8cbee24a => {
  _180d8cbee24a.waitUntil(self.skipWaiting());
});

const Wm = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function _m(_180d8cbee24a) {
  const _a7c9babcb622 = String(_180d8cbee24a || "").toLowerCase();
  return "cmp.inmobi.com" !== _a7c9babcb622 && !_a7c9babcb622.endsWith(".cmp.inmobi.com") && Wm.some(_180d8cbee24a => _a7c9babcb622 === _180d8cbee24a || _a7c9babcb622.endsWith(`.${_180d8cbee24a}`));
}

function Nm(_180d8cbee24a) {
  const _a7c9babcb622 = Um(_180d8cbee24a.request.url);
  if (!_a7c9babcb622) return !1;
  try {
    const _180d8cbee24a = new URL(_a7c9babcb622);
    return _m(_180d8cbee24a.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_180d8cbee24a.pathname) || "serve.app.playsaurus.com" === _180d8cbee24a.hostname && /\/ad-campaigns\//i.test(_180d8cbee24a.pathname);
  } catch {
    return !1;
  }
}

function zm(_180d8cbee24a) {
  const _a7c9babcb622 = _180d8cbee24a.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_180d8cbee24a.request.destination) || /javascript|ecmascript/i.test(_a7c9babcb622) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _180d8cbee24a.request.destination || /text\/css/i.test(_a7c9babcb622) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _180d8cbee24a.request.destination ? new Response("", {
    status: 204
  }) : "document" === _180d8cbee24a.request.destination || "iframe" === _180d8cbee24a.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Dm(_180d8cbee24a) {
  const _a7c9babcb622 = _180d8cbee24a.request.headers.get("accept") || "", _b73b856d5dc9 = new URL(_180d8cbee24a.request.url).pathname, _40de0717fb16 = Tm(_180d8cbee24a.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_180d8cbee24a.request.destination) || /javascript|ecmascript|text\/css/i.test(_a7c9babcb622) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_b73b856d5dc9) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_40de0717fb16);
}

function Km(_180d8cbee24a) {
  const _a7c9babcb622 = _180d8cbee24a.request.headers.get("accept") || "", _b73b856d5dc9 = new URL(_180d8cbee24a.request.url).pathname, _40de0717fb16 = Tm(_180d8cbee24a.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_180d8cbee24a.request.destination) || /javascript|ecmascript/i.test(_a7c9babcb622) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_b73b856d5dc9) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_40de0717fb16) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _180d8cbee24a.request.destination || /text\/css/i.test(_a7c9babcb622) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Om(_180d8cbee24a) {
  return /^\s*</.test(_180d8cbee24a) || /^\s*\)\]\}'/.test(_180d8cbee24a) || /^\s*\)\]/.test(_180d8cbee24a);
}

async function Xm(_180d8cbee24a, _a7c9babcb622) {
  if (!Dm(_180d8cbee24a)) return _a7c9babcb622;
  const _b73b856d5dc9 = _a7c9babcb622.headers.get("content-type") || "";
  if (_a7c9babcb622.status >= 400 || _b73b856d5dc9.includes("text/html") || _b73b856d5dc9.includes("application/json") || _b73b856d5dc9.includes("text/json")) return Km(_180d8cbee24a) || _a7c9babcb622;
  const _40de0717fb16 = await _a7c9babcb622.clone().text().catch(() => "");
  if (Om(_40de0717fb16)) return Km(_180d8cbee24a) || _a7c9babcb622;
  if (!_40de0717fb16) return _a7c9babcb622;
  const _141e7eeaede3 = new Headers(_a7c9babcb622.headers);
  return _141e7eeaede3.delete("content-length"), new Response(_40de0717fb16, {
    status: _a7c9babcb622.status,
    statusText: _a7c9babcb622.statusText,
    headers: _141e7eeaede3
  });
}

function Ym(_180d8cbee24a) {
  return new Promise(_a7c9babcb622 => setTimeout(_a7c9babcb622, _180d8cbee24a));
}

async function Hm() {
  return jm || (jm = (async () => {
    const _180d8cbee24a = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _a7c9babcb622 of _180d8cbee24a) try {
      _a7c9babcb622.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Ym(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Fm(_180d8cbee24a) {
  const _a7c9babcb622 = Date.now() + 7e3;
  let _b73b856d5dc9 = 0;
  for (;Date.now() < _a7c9babcb622; ) {
    const _a7c9babcb622 = Date.now();
    if (_a7c9babcb622 >= _b73b856d5dc9 && (await Hm(), _b73b856d5dc9 = _a7c9babcb622 + 500), 
    $studyjetController.shouldRoute(_180d8cbee24a)) return Jm(_180d8cbee24a);
    await Ym(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Jm(_180d8cbee24a) {
  return Xm(_180d8cbee24a, await $studyjetController.route(_180d8cbee24a));
}

self.addEventListener("fetch", _180d8cbee24a => {
  self.NYX_TUTSI_WORKER || !Nm(_180d8cbee24a) ? $studyjetController.shouldRoute(_180d8cbee24a) ? _180d8cbee24a.respondWith(Jm(_180d8cbee24a)) : qm(_180d8cbee24a) && _180d8cbee24a.respondWith(Fm(_180d8cbee24a)) : _180d8cbee24a.respondWith(zm(_180d8cbee24a));
}), self.addEventListener("activate", _180d8cbee24a => {
  _180d8cbee24a.waitUntil(Promise.all([ self.clients.claim(), Hm().catch(() => {}) ]));
}), setTimeout(() => {
  Hm().catch(() => {});
}, 120);
