importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_81fede712fed) {
  try {
    return new URL(_81fede712fed.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_81fede712fed) {
  try {
    const _4cb204ec756a = new URL(_81fede712fed).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _4cb204ec756a ? new URL(decodeURIComponent(_4cb204ec756a[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_81fede712fed) {
  try {
    const _4cb204ec756a = new URL(_81fede712fed).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _4cb204ec756a ? new URL(decodeURIComponent(_4cb204ec756a[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _81fede712fed => {
  _81fede712fed.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_81fede712fed) {
  const _4cb204ec756a = String(_81fede712fed || "").toLowerCase();
  return "cmp.inmobi.com" !== _4cb204ec756a && !_4cb204ec756a.endsWith(".cmp.inmobi.com") && _m.some(_81fede712fed => _4cb204ec756a === _81fede712fed || _4cb204ec756a.endsWith(`.${_81fede712fed}`));
}

function zm(_81fede712fed) {
  const _4cb204ec756a = Wm(_81fede712fed.request.url);
  if (!_4cb204ec756a) return !1;
  try {
    const _81fede712fed = new URL(_4cb204ec756a);
    return Nm(_81fede712fed.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_81fede712fed.pathname) || "serve.app.playsaurus.com" === _81fede712fed.hostname && /\/ad-campaigns\//i.test(_81fede712fed.pathname);
  } catch {
    return !1;
  }
}

function Dm(_81fede712fed) {
  const _4cb204ec756a = _81fede712fed.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_81fede712fed.request.destination) || /javascript|ecmascript/i.test(_4cb204ec756a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _81fede712fed.request.destination || /text\/css/i.test(_4cb204ec756a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _81fede712fed.request.destination ? new Response("", {
    status: 204
  }) : "document" === _81fede712fed.request.destination || "iframe" === _81fede712fed.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_81fede712fed) {
  const _4cb204ec756a = _81fede712fed.request.headers.get("accept") || "", _bde1888a2558 = new URL(_81fede712fed.request.url).pathname, _e64f58529449 = Um(_81fede712fed.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_81fede712fed.request.destination) || /javascript|ecmascript|text\/css/i.test(_4cb204ec756a) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_bde1888a2558) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_e64f58529449);
}

function Om(_81fede712fed) {
  const _4cb204ec756a = _81fede712fed.request.headers.get("accept") || "", _bde1888a2558 = new URL(_81fede712fed.request.url).pathname, _e64f58529449 = Um(_81fede712fed.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_81fede712fed.request.destination) || /javascript|ecmascript/i.test(_4cb204ec756a) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_bde1888a2558) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_e64f58529449) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _81fede712fed.request.destination || /text\/css/i.test(_4cb204ec756a) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_81fede712fed) {
  return /^\s*</.test(_81fede712fed) || /^\s*\)\]\}'/.test(_81fede712fed) || /^\s*\)\]/.test(_81fede712fed);
}

async function Ym(_81fede712fed, _4cb204ec756a) {
  if (!Km(_81fede712fed)) return _4cb204ec756a;
  const _bde1888a2558 = _4cb204ec756a.headers.get("content-type") || "";
  if (_4cb204ec756a.status >= 400 || _bde1888a2558.includes("text/html") || _bde1888a2558.includes("application/json") || _bde1888a2558.includes("text/json")) return Om(_81fede712fed) || _4cb204ec756a;
  const _e64f58529449 = await _4cb204ec756a.clone().text().catch(() => "");
  if (Xm(_e64f58529449)) return Om(_81fede712fed) || _4cb204ec756a;
  if (!_e64f58529449) return _4cb204ec756a;
  const _398233355fc3 = new Headers(_4cb204ec756a.headers);
  return _398233355fc3.delete("content-length"), new Response(_e64f58529449, {
    status: _4cb204ec756a.status,
    statusText: _4cb204ec756a.statusText,
    headers: _398233355fc3
  });
}

function Hm(_81fede712fed) {
  return new Promise(_4cb204ec756a => setTimeout(_4cb204ec756a, _81fede712fed));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _81fede712fed = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _4cb204ec756a of _81fede712fed) try {
      _4cb204ec756a.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_81fede712fed) {
  const _4cb204ec756a = Date.now() + 7e3;
  let _bde1888a2558 = 0;
  for (;Date.now() < _4cb204ec756a; ) {
    const _4cb204ec756a = Date.now();
    if (_4cb204ec756a >= _bde1888a2558 && (await Fm(), _bde1888a2558 = _4cb204ec756a + 500), 
    $scramjetController.shouldRoute(_81fede712fed)) return Qm(_81fede712fed);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_81fede712fed) {
  return Ym(_81fede712fed, await $scramjetController.route(_81fede712fed));
}

self.addEventListener("fetch", _81fede712fed => {
  self.NYX_TUTSI_WORKER || !zm(_81fede712fed) ? $scramjetController.shouldRoute(_81fede712fed) ? _81fede712fed.respondWith(Qm(_81fede712fed)) : qm(_81fede712fed) && _81fede712fed.respondWith(Jm(_81fede712fed)) : _81fede712fed.respondWith(Dm(_81fede712fed));
}), self.addEventListener("activate", _81fede712fed => {
  _81fede712fed.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
