importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_d75a679eecd3) {
  try {
    return new URL(_d75a679eecd3.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Um(_d75a679eecd3) {
  try {
    const _cea5cf2be57e = new URL(_d75a679eecd3).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _cea5cf2be57e ? new URL(decodeURIComponent(_cea5cf2be57e[1])).pathname : "";
  } catch {
    return "";
  }
}

function Wm(_d75a679eecd3) {
  try {
    const _cea5cf2be57e = new URL(_d75a679eecd3).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _cea5cf2be57e ? new URL(decodeURIComponent(_cea5cf2be57e[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _d75a679eecd3 => {
  _d75a679eecd3.waitUntil(self.skipWaiting());
});

const _m = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function Nm(_d75a679eecd3) {
  const _cea5cf2be57e = String(_d75a679eecd3 || "").toLowerCase();
  return "cmp.inmobi.com" !== _cea5cf2be57e && !_cea5cf2be57e.endsWith(".cmp.inmobi.com") && _m.some(_d75a679eecd3 => _cea5cf2be57e === _d75a679eecd3 || _cea5cf2be57e.endsWith(`.${_d75a679eecd3}`));
}

function zm(_d75a679eecd3) {
  const _cea5cf2be57e = Wm(_d75a679eecd3.request.url);
  if (!_cea5cf2be57e) return !1;
  try {
    const _d75a679eecd3 = new URL(_cea5cf2be57e);
    return Nm(_d75a679eecd3.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_d75a679eecd3.pathname) || "serve.app.playsaurus.com" === _d75a679eecd3.hostname && /\/ad-campaigns\//i.test(_d75a679eecd3.pathname);
  } catch {
    return !1;
  }
}

function Dm(_d75a679eecd3) {
  const _cea5cf2be57e = _d75a679eecd3.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_d75a679eecd3.request.destination) || /javascript|ecmascript/i.test(_cea5cf2be57e) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _d75a679eecd3.request.destination || /text\/css/i.test(_cea5cf2be57e) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _d75a679eecd3.request.destination ? new Response("", {
    status: 204
  }) : "document" === _d75a679eecd3.request.destination || "iframe" === _d75a679eecd3.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Km(_d75a679eecd3) {
  const _cea5cf2be57e = _d75a679eecd3.request.headers.get("accept") || "", _e4136023793c = new URL(_d75a679eecd3.request.url).pathname, _136acc050b5d = Um(_d75a679eecd3.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_d75a679eecd3.request.destination) || /javascript|ecmascript|text\/css/i.test(_cea5cf2be57e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_e4136023793c) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_136acc050b5d);
}

function Om(_d75a679eecd3) {
  const _cea5cf2be57e = _d75a679eecd3.request.headers.get("accept") || "", _e4136023793c = new URL(_d75a679eecd3.request.url).pathname, _136acc050b5d = Um(_d75a679eecd3.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_d75a679eecd3.request.destination) || /javascript|ecmascript/i.test(_cea5cf2be57e) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_e4136023793c) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_136acc050b5d) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _d75a679eecd3.request.destination || /text\/css/i.test(_cea5cf2be57e) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Xm(_d75a679eecd3) {
  return /^\s*</.test(_d75a679eecd3) || /^\s*\)\]\}'/.test(_d75a679eecd3) || /^\s*\)\]/.test(_d75a679eecd3);
}

async function Ym(_d75a679eecd3, _cea5cf2be57e) {
  if (!Km(_d75a679eecd3)) return _cea5cf2be57e;
  const _e4136023793c = _cea5cf2be57e.headers.get("content-type") || "";
  if (_cea5cf2be57e.status >= 400 || _e4136023793c.includes("text/html") || _e4136023793c.includes("application/json") || _e4136023793c.includes("text/json")) return Om(_d75a679eecd3) || _cea5cf2be57e;
  const _136acc050b5d = await _cea5cf2be57e.clone().text().catch(() => "");
  if (Xm(_136acc050b5d)) return Om(_d75a679eecd3) || _cea5cf2be57e;
  if (!_136acc050b5d) return _cea5cf2be57e;
  const _0b32770b2e80 = new Headers(_cea5cf2be57e.headers);
  return _0b32770b2e80.delete("content-length"), new Response(_136acc050b5d, {
    status: _cea5cf2be57e.status,
    statusText: _cea5cf2be57e.statusText,
    headers: _0b32770b2e80
  });
}

function Hm(_d75a679eecd3) {
  return new Promise(_cea5cf2be57e => setTimeout(_cea5cf2be57e, _d75a679eecd3));
}

async function Fm() {
  return jm || (jm = (async () => {
    const _d75a679eecd3 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _cea5cf2be57e of _d75a679eecd3) try {
      _cea5cf2be57e.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Hm(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Jm(_d75a679eecd3) {
  const _cea5cf2be57e = Date.now() + 7e3;
  let _e4136023793c = 0;
  for (;Date.now() < _cea5cf2be57e; ) {
    const _cea5cf2be57e = Date.now();
    if (_cea5cf2be57e >= _e4136023793c && (await Fm(), _e4136023793c = _cea5cf2be57e + 500), 
    $scramjetController.shouldRoute(_d75a679eecd3)) return Qm(_d75a679eecd3);
    await Hm(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Qm(_d75a679eecd3) {
  return Ym(_d75a679eecd3, await $scramjetController.route(_d75a679eecd3));
}

self.addEventListener("fetch", _d75a679eecd3 => {
  self.NYX_TUTSI_WORKER || !zm(_d75a679eecd3) ? $scramjetController.shouldRoute(_d75a679eecd3) ? _d75a679eecd3.respondWith(Qm(_d75a679eecd3)) : qm(_d75a679eecd3) && _d75a679eecd3.respondWith(Jm(_d75a679eecd3)) : _d75a679eecd3.respondWith(Dm(_d75a679eecd3));
}), self.addEventListener("activate", _d75a679eecd3 => {
  _d75a679eecd3.waitUntil(Promise.all([ self.clients.claim(), Fm().catch(() => {}) ]));
}), setTimeout(() => {
  Fm().catch(() => {});
}, 120);
