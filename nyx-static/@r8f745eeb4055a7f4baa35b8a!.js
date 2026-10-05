importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_c85c5e7487ba) {
  try {
    return new URL(_c85c5e7487ba.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_c85c5e7487ba) {
  try {
    const _6ece8cd591df = new URL(_c85c5e7487ba).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _6ece8cd591df ? new URL(decodeURIComponent(_6ece8cd591df[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_c85c5e7487ba) {
  try {
    const _6ece8cd591df = new URL(_c85c5e7487ba).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _6ece8cd591df ? new URL(decodeURIComponent(_6ece8cd591df[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _c85c5e7487ba => {
  _c85c5e7487ba.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_c85c5e7487ba) {
  const _6ece8cd591df = String(_c85c5e7487ba || "").toLowerCase();
  return "cmp.inmobi.com" !== _6ece8cd591df && !_6ece8cd591df.endsWith(".cmp.inmobi.com") && _m.some(_c85c5e7487ba => _6ece8cd591df === _c85c5e7487ba || _6ece8cd591df.endsWith(`.${_c85c5e7487ba}`));
}

function zm(_c85c5e7487ba) {
  const _6ece8cd591df = Wm(_c85c5e7487ba.request.url);
  if (!_6ece8cd591df) return !1;
  try {
    const _c85c5e7487ba = new URL(_6ece8cd591df);
    return Nm(_c85c5e7487ba.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_c85c5e7487ba.pathname) || "serve.app.playsaurus.com" === _c85c5e7487ba.hostname && /\/ad-campaigns\//i.test(_c85c5e7487ba.pathname);
  } catch {
    return !1;
  }
}

function Dm(_c85c5e7487ba) {
  const _6ece8cd591df = _c85c5e7487ba.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_c85c5e7487ba.request.destination) || /javascript|ecmascript/i.test(_6ece8cd591df) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _c85c5e7487ba.request.destination || /text\/css/i.test(_6ece8cd591df) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _c85c5e7487ba.request.destination ? new Response("", {
    status: 204
  }) : "document" === _c85c5e7487ba.request.destination || "iframe" === _c85c5e7487ba.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_c85c5e7487ba) {
  const _6ece8cd591df = _c85c5e7487ba.request.headers.get("accept") || "", _ad0f07404a6d = new URL(_c85c5e7487ba.request.url).pathname, _7c7ba7079bf5 = Um(_c85c5e7487ba.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_c85c5e7487ba.request.destination) || /javascript|ecmascript|text\/css/i.test(_6ece8cd591df) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_ad0f07404a6d) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_7c7ba7079bf5);
}

function Om(_c85c5e7487ba) {
  const _6ece8cd591df = _c85c5e7487ba.request.headers.get("accept") || "", _ad0f07404a6d = new URL(_c85c5e7487ba.request.url).pathname, _7c7ba7079bf5 = Um(_c85c5e7487ba.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_c85c5e7487ba.request.destination) || /javascript|ecmascript/i.test(_6ece8cd591df) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_ad0f07404a6d) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_7c7ba7079bf5) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _c85c5e7487ba.request.destination || /text\/css/i.test(_6ece8cd591df) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_c85c5e7487ba) {
  return /^\s*</.test(_c85c5e7487ba) || /^\s*\)\]\}'/.test(_c85c5e7487ba) || /^\s*\)\]/.test(_c85c5e7487ba);
}

async function Ym(_c85c5e7487ba, _6ece8cd591df) {
  if (!Km(_c85c5e7487ba)) return _6ece8cd591df;
  const _ad0f07404a6d = _6ece8cd591df.headers.get("content-type") || "";
  if (_6ece8cd591df.status >= 400 || _ad0f07404a6d.includes("text/html") || _ad0f07404a6d.includes("application/json") || _ad0f07404a6d.includes("text/json")) return Om(_c85c5e7487ba) || _6ece8cd591df;
  const _7c7ba7079bf5 = await _6ece8cd591df.clone().text().catch(() => "");
  if (Xm(_7c7ba7079bf5)) return Om(_c85c5e7487ba) || _6ece8cd591df;
  if (!_7c7ba7079bf5) return _6ece8cd591df;
  const _a98936dae271 = new Headers(_6ece8cd591df.headers);
  return _a98936dae271.delete("content-length"), new Response(_7c7ba7079bf5, {
    status: _6ece8cd591df.status,
    statusText: _6ece8cd591df.statusText,
    headers: _a98936dae271
  });
}

function Hm(_c85c5e7487ba) {
  return new Promise(_6ece8cd591df => setTimeout(_6ece8cd591df, _c85c5e7487ba));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _c85c5e7487ba = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _6ece8cd591df of _c85c5e7487ba) try {
      _6ece8cd591df.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_c85c5e7487ba) {
  const _6ece8cd591df = Date.now() + 7e3;
  let _ad0f07404a6d = 0;
  for (;Date.now() < _6ece8cd591df; ) {
    const _6ece8cd591df = Date.now();
    if (_6ece8cd591df >= _ad0f07404a6d && (await Fm(), _ad0f07404a6d = _6ece8cd591df + 500), 
    $scramjetController.shouldRoute(_c85c5e7487ba)) return Qm(_c85c5e7487ba);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_c85c5e7487ba) {
  return Ym(_c85c5e7487ba, await $scramjetController.route(_c85c5e7487ba));
}

self.addEventListener("fetch", _c85c5e7487ba => {
  self.NYX_TUTSI_WORKER || !zm(_c85c5e7487ba) ? $scramjetController.shouldRoute(_c85c5e7487ba) ? _c85c5e7487ba.respondWith(Qm(_c85c5e7487ba)) : qm(_c85c5e7487ba) && _c85c5e7487ba.respondWith(Jm(_c85c5e7487ba)) : _c85c5e7487ba.respondWith(Dm(_c85c5e7487ba));
}), self.addEventListener("activate", _c85c5e7487ba => {
  _c85c5e7487ba.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
