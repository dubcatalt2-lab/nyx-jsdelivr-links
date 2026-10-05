importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let jm = null;

function Rm() {
  return '<!doctype html>\n<meta charset="utf-8">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" onclick="location.reload()">Retry now</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>location.reload(),900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function qm(_d5ba249945c3) {
  try {
    return new URL(_d5ba249945c3.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function Tm(_d5ba249945c3) {
  try {
    const _fb62b1b7d6f0 = new URL(_d5ba249945c3).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _fb62b1b7d6f0 ? new URL(decodeURIComponent(_fb62b1b7d6f0[1])).pathname : "";
  } catch {
    return "";
  }
}

function Um(_d5ba249945c3) {
  try {
    const _fb62b1b7d6f0 = new URL(_d5ba249945c3).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _fb62b1b7d6f0 ? new URL(decodeURIComponent(_fb62b1b7d6f0[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _d5ba249945c3 => {
  _d5ba249945c3.waitUntil(self.skipWaiting());
});

const Wm = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function _m(_d5ba249945c3) {
  const _fb62b1b7d6f0 = String(_d5ba249945c3 || "").toLowerCase();
  return "cmp.inmobi.com" !== _fb62b1b7d6f0 && !_fb62b1b7d6f0.endsWith(".cmp.inmobi.com") && Wm.some(_d5ba249945c3 => _fb62b1b7d6f0 === _d5ba249945c3 || _fb62b1b7d6f0.endsWith(`.${_d5ba249945c3}`));
}

function Nm(_d5ba249945c3) {
  const _fb62b1b7d6f0 = Um(_d5ba249945c3.request.url);
  if (!_fb62b1b7d6f0) return !1;
  try {
    const _d5ba249945c3 = new URL(_fb62b1b7d6f0);
    return _m(_d5ba249945c3.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_d5ba249945c3.pathname) || "serve.app.playsaurus.com" === _d5ba249945c3.hostname && /\/ad-campaigns\//i.test(_d5ba249945c3.pathname);
  } catch {
    return !1;
  }
}

function zm(_d5ba249945c3) {
  const _fb62b1b7d6f0 = _d5ba249945c3.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_d5ba249945c3.request.destination) || /javascript|ecmascript/i.test(_fb62b1b7d6f0) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _d5ba249945c3.request.destination || /text\/css/i.test(_fb62b1b7d6f0) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _d5ba249945c3.request.destination ? new Response("", {
    status: 204
  }) : "document" === _d5ba249945c3.request.destination || "iframe" === _d5ba249945c3.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function Dm(_d5ba249945c3) {
  const _fb62b1b7d6f0 = _d5ba249945c3.request.headers.get("accept") || "", _fc7c7651e1d6 = new URL(_d5ba249945c3.request.url).pathname, _ee62bb70ab97 = Tm(_d5ba249945c3.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_d5ba249945c3.request.destination) || /javascript|ecmascript|text\/css/i.test(_fb62b1b7d6f0) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_fc7c7651e1d6) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_ee62bb70ab97);
}

function Km(_d5ba249945c3) {
  const _fb62b1b7d6f0 = _d5ba249945c3.request.headers.get("accept") || "", _fc7c7651e1d6 = new URL(_d5ba249945c3.request.url).pathname, _ee62bb70ab97 = Tm(_d5ba249945c3.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_d5ba249945c3.request.destination) || /javascript|ecmascript/i.test(_fb62b1b7d6f0) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_fc7c7651e1d6) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_ee62bb70ab97) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _d5ba249945c3.request.destination || /text\/css/i.test(_fb62b1b7d6f0) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function Om(_d5ba249945c3) {
  return /^\s*</.test(_d5ba249945c3) || /^\s*\)\]\}'/.test(_d5ba249945c3) || /^\s*\)\]/.test(_d5ba249945c3);
}

async function Xm(_d5ba249945c3, _fb62b1b7d6f0) {
  if (!Dm(_d5ba249945c3)) return _fb62b1b7d6f0;
  const _fc7c7651e1d6 = _fb62b1b7d6f0.headers.get("content-type") || "";
  if (_fb62b1b7d6f0.status >= 400 || _fc7c7651e1d6.includes("text/html") || _fc7c7651e1d6.includes("application/json") || _fc7c7651e1d6.includes("text/json")) return Km(_d5ba249945c3) || _fb62b1b7d6f0;
  const _ee62bb70ab97 = await _fb62b1b7d6f0.clone().text().catch(() => "");
  if (Om(_ee62bb70ab97)) return Km(_d5ba249945c3) || _fb62b1b7d6f0;
  if (!_ee62bb70ab97) return _fb62b1b7d6f0;
  const _4b2c6effa24d = new Headers(_fb62b1b7d6f0.headers);
  return _4b2c6effa24d.delete("content-length"), new Response(_ee62bb70ab97, {
    status: _fb62b1b7d6f0.status,
    statusText: _fb62b1b7d6f0.statusText,
    headers: _4b2c6effa24d
  });
}

function Ym(_d5ba249945c3) {
  return new Promise(_fb62b1b7d6f0 => setTimeout(_fb62b1b7d6f0, _d5ba249945c3));
}

async function Hm() {
  return jm || (jm = (async () => {
    const _d5ba249945c3 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _fb62b1b7d6f0 of _d5ba249945c3) try {
      _fb62b1b7d6f0.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await Ym(60);
  })().finally(() => {
    jm = null;
  }), jm);
}

async function Fm(_d5ba249945c3) {
  const _fb62b1b7d6f0 = Date.now() + 7e3;
  let _fc7c7651e1d6 = 0;
  for (;Date.now() < _fb62b1b7d6f0; ) {
    const _fb62b1b7d6f0 = Date.now();
    if (_fb62b1b7d6f0 >= _fc7c7651e1d6 && (await Hm(), _fc7c7651e1d6 = _fb62b1b7d6f0 + 500), 
    $scramjetController.shouldRoute(_d5ba249945c3)) return Jm(_d5ba249945c3);
    await Ym(100);
  }
  return new Response(Rm(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function Jm(_d5ba249945c3) {
  return Xm(_d5ba249945c3, await $scramjetController.route(_d5ba249945c3));
}

self.addEventListener("fetch", _d5ba249945c3 => {
  self.NYX_TUTSI_WORKER || !Nm(_d5ba249945c3) ? $scramjetController.shouldRoute(_d5ba249945c3) ? _d5ba249945c3.respondWith(Jm(_d5ba249945c3)) : qm(_d5ba249945c3) && _d5ba249945c3.respondWith(Fm(_d5ba249945c3)) : _d5ba249945c3.respondWith(zm(_d5ba249945c3));
}), self.addEventListener("activate", _d5ba249945c3 => {
  _d5ba249945c3.waitUntil(Promise.all([ self.clients.claim(), Hm().catch(() => {}) ]));
}), setTimeout(() => {
  Hm().catch(() => {});
}, 120);
