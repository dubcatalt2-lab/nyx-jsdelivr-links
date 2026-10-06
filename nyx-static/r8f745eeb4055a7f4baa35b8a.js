importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/controller.sw.js?v=20260905-cookie-owner-v1");

let Xm = null;

function Ym() {
  return '<!doctype html>\n<meta charset="utf-8">\n<meta name="nyx-route-miss" content="1">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" data-nyx-repair onclick="if(parent===window){location.reload()}else{window.nyxRepairing=true;parent.postMessage({type:\'nyx:repair-connection\'},parent.location.origin)}">Repair connection</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>{if(!window.nyxRepairing)location.reload()},900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function Zm(_45b2548e6761) {
  try {
    return new URL(_45b2548e6761.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function sp(_45b2548e6761) {
  try {
    const _f3c665856a96 = new URL(_45b2548e6761).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _f3c665856a96 ? new URL(decodeURIComponent(_f3c665856a96[1])).pathname : "";
  } catch {
    return "";
  }
}

function cp(_45b2548e6761) {
  try {
    const _f3c665856a96 = new URL(_45b2548e6761).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _f3c665856a96 ? new URL(decodeURIComponent(_f3c665856a96[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _45b2548e6761 => {
  _45b2548e6761.waitUntil(self.skipWaiting());
});

const up = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function lp(_45b2548e6761) {
  const _f3c665856a96 = String(_45b2548e6761 || "").toLowerCase();
  return "cmp.inmobi.com" !== _f3c665856a96 && !_f3c665856a96.endsWith(".cmp.inmobi.com") && up.some(_45b2548e6761 => _f3c665856a96 === _45b2548e6761 || _f3c665856a96.endsWith(`.${_45b2548e6761}`));
}

function mp(_45b2548e6761) {
  const _f3c665856a96 = cp(_45b2548e6761.request.url);
  if (!_f3c665856a96) return !1;
  try {
    const _45b2548e6761 = new URL(_f3c665856a96);
    return lp(_45b2548e6761.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_45b2548e6761.pathname) || "serve.app.playsaurus.com" === _45b2548e6761.hostname && /\/ad-campaigns\//i.test(_45b2548e6761.pathname);
  } catch {
    return !1;
  }
}

function pp(_45b2548e6761) {
  const _f3c665856a96 = _45b2548e6761.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_45b2548e6761.request.destination) || /javascript|ecmascript/i.test(_f3c665856a96) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _45b2548e6761.request.destination || /text\/css/i.test(_f3c665856a96) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _45b2548e6761.request.destination ? new Response("", {
    status: 204
  }) : "document" === _45b2548e6761.request.destination || "iframe" === _45b2548e6761.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function dp(_45b2548e6761) {
  const _f3c665856a96 = _45b2548e6761.request.headers.get("accept") || "", _595069f942fb = new URL(_45b2548e6761.request.url).pathname, _c5ccbedfe6b4 = sp(_45b2548e6761.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_45b2548e6761.request.destination) || /javascript|ecmascript|text\/css/i.test(_f3c665856a96) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_595069f942fb) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_c5ccbedfe6b4);
}

function hp(_45b2548e6761) {
  const _f3c665856a96 = _45b2548e6761.request.headers.get("accept") || "", _595069f942fb = new URL(_45b2548e6761.request.url).pathname, _c5ccbedfe6b4 = sp(_45b2548e6761.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_45b2548e6761.request.destination) || /javascript|ecmascript/i.test(_f3c665856a96) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_595069f942fb) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_c5ccbedfe6b4) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _45b2548e6761.request.destination || /text\/css/i.test(_f3c665856a96) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function fp(_45b2548e6761) {
  return /^\s*</.test(_45b2548e6761) || /^\s*\)\]\}'/.test(_45b2548e6761) || /^\s*\)\]/.test(_45b2548e6761);
}

async function gp(_45b2548e6761, _f3c665856a96) {
  if (!dp(_45b2548e6761)) return _f3c665856a96;
  const _595069f942fb = _f3c665856a96.headers.get("content-type") || "";
  if (_f3c665856a96.status >= 400 || _595069f942fb.includes("text/html") || _595069f942fb.includes("application/json") || _595069f942fb.includes("text/json")) return hp(_45b2548e6761) || _f3c665856a96;
  const _c5ccbedfe6b4 = await _f3c665856a96.clone().text().catch(() => "");
  if (fp(_c5ccbedfe6b4)) return hp(_45b2548e6761) || _f3c665856a96;
  if (!_c5ccbedfe6b4) return _f3c665856a96;
  const _5397d12d664b = new Headers(_f3c665856a96.headers);
  return _5397d12d664b.delete("content-length"), new Response(_c5ccbedfe6b4, {
    status: _f3c665856a96.status,
    statusText: _f3c665856a96.statusText,
    headers: _5397d12d664b
  });
}

function wp(_45b2548e6761) {
  return new Promise(_f3c665856a96 => setTimeout(_f3c665856a96, _45b2548e6761));
}

async function yp() {
  return Xm || (Xm = (async () => {
    const _45b2548e6761 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _f3c665856a96 of _45b2548e6761) try {
      _f3c665856a96.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await wp(60);
  })().finally(() => {
    Xm = null;
  }), Xm);
}

async function jp(_45b2548e6761) {
  const _f3c665856a96 = Date.now() + 7e3;
  let _595069f942fb = 0;
  for (;Date.now() < _f3c665856a96; ) {
    const _f3c665856a96 = Date.now();
    if (_f3c665856a96 >= _595069f942fb && (await yp(), _595069f942fb = _f3c665856a96 + 500), 
    $scramjetController.shouldRoute(_45b2548e6761)) return xp(_45b2548e6761);
    await wp(100);
  }
  return new Response(Ym(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function xp(_45b2548e6761) {
  return gp(_45b2548e6761, await $scramjetController.route(_45b2548e6761));
}

self.addEventListener("fetch", _45b2548e6761 => {
  self.NYX_TUTSI_WORKER || !mp(_45b2548e6761) ? $scramjetController.shouldRoute(_45b2548e6761) ? _45b2548e6761.respondWith(xp(_45b2548e6761)) : Zm(_45b2548e6761) && _45b2548e6761.respondWith(jp(_45b2548e6761)) : _45b2548e6761.respondWith(pp(_45b2548e6761));
}), self.addEventListener("activate", _45b2548e6761 => {
  _45b2548e6761.waitUntil(Promise.all([ self.clients.claim(), yp().catch(() => {}) ]));
}), setTimeout(() => {
  yp().catch(() => {});
}, 120);
