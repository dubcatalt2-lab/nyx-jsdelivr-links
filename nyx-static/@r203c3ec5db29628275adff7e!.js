importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rbaca5a754ca5a40676a66757!.js?v=20260905-cookie-owner-v1");

let Xm = null;

function Ym() {
  return '<!doctype html>\n<meta charset="utf-8">\n<meta name="nyx-route-miss" content="1">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting StudyJet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" data-nyx-repair onclick="if(parent===window){location.reload()}else{window.nyxRepairing=true;parent.postMessage({type:\'nyx:repair-connection\'},parent.location.origin)}">Repair connection</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.studyjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>{if(!window.nyxRepairing)location.reload()},900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function Zm(_e0ceaafe629e) {
  try {
    return new URL(_e0ceaafe629e.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
  } catch {
    return !1;
  }
}

function sp(_e0ceaafe629e) {
  try {
    const _2a2cf3609c58 = new URL(_e0ceaafe629e).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _2a2cf3609c58 ? new URL(decodeURIComponent(_2a2cf3609c58[1])).pathname : "";
  } catch {
    return "";
  }
}

function cp(_e0ceaafe629e) {
  try {
    const _2a2cf3609c58 = new URL(_e0ceaafe629e).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:study|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _2a2cf3609c58 ? new URL(decodeURIComponent(_2a2cf3609c58[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _e0ceaafe629e => {
  _e0ceaafe629e.waitUntil(self.skipWaiting());
});

const up = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function lp(_e0ceaafe629e) {
  const _2a2cf3609c58 = String(_e0ceaafe629e || "").toLowerCase();
  return "cmp.inmobi.com" !== _2a2cf3609c58 && !_2a2cf3609c58.endsWith(".cmp.inmobi.com") && up.some(_e0ceaafe629e => _2a2cf3609c58 === _e0ceaafe629e || _2a2cf3609c58.endsWith(`.${_e0ceaafe629e}`));
}

function mp(_e0ceaafe629e) {
  const _2a2cf3609c58 = cp(_e0ceaafe629e.request.url);
  if (!_2a2cf3609c58) return !1;
  try {
    const _e0ceaafe629e = new URL(_2a2cf3609c58);
    return lp(_e0ceaafe629e.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_e0ceaafe629e.pathname) || "serve.app.playsaurus.com" === _e0ceaafe629e.hostname && /\/ad-campaigns\//i.test(_e0ceaafe629e.pathname);
  } catch {
    return !1;
  }
}

function pp(_e0ceaafe629e) {
  const _2a2cf3609c58 = _e0ceaafe629e.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_e0ceaafe629e.request.destination) || /javascript|ecmascript/i.test(_2a2cf3609c58) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _e0ceaafe629e.request.destination || /text\/css/i.test(_2a2cf3609c58) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _e0ceaafe629e.request.destination ? new Response("", {
    status: 204
  }) : "document" === _e0ceaafe629e.request.destination || "iframe" === _e0ceaafe629e.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function dp(_e0ceaafe629e) {
  const _2a2cf3609c58 = _e0ceaafe629e.request.headers.get("accept") || "", _746a901632b1 = new URL(_e0ceaafe629e.request.url).pathname, _530bcc5273bb = sp(_e0ceaafe629e.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_e0ceaafe629e.request.destination) || /javascript|ecmascript|text\/css/i.test(_2a2cf3609c58) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_746a901632b1) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_530bcc5273bb);
}

function hp(_e0ceaafe629e) {
  const _2a2cf3609c58 = _e0ceaafe629e.request.headers.get("accept") || "", _746a901632b1 = new URL(_e0ceaafe629e.request.url).pathname, _530bcc5273bb = sp(_e0ceaafe629e.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_e0ceaafe629e.request.destination) || /javascript|ecmascript/i.test(_2a2cf3609c58) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_746a901632b1) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_530bcc5273bb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _e0ceaafe629e.request.destination || /text\/css/i.test(_2a2cf3609c58) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function fp(_e0ceaafe629e) {
  return /^\s*</.test(_e0ceaafe629e) || /^\s*\)\]\}'/.test(_e0ceaafe629e) || /^\s*\)\]/.test(_e0ceaafe629e);
}

async function gp(_e0ceaafe629e, _2a2cf3609c58) {
  if (!dp(_e0ceaafe629e)) return _2a2cf3609c58;
  const _746a901632b1 = _2a2cf3609c58.headers.get("content-type") || "";
  if (_2a2cf3609c58.status >= 400 || _746a901632b1.includes("text/html") || _746a901632b1.includes("application/json") || _746a901632b1.includes("text/json")) return hp(_e0ceaafe629e) || _2a2cf3609c58;
  const _530bcc5273bb = await _2a2cf3609c58.clone().text().catch(() => "");
  if (fp(_530bcc5273bb)) return hp(_e0ceaafe629e) || _2a2cf3609c58;
  if (!_530bcc5273bb) return _2a2cf3609c58;
  const _f4b58d9d7872 = new Headers(_2a2cf3609c58.headers);
  return _f4b58d9d7872.delete("content-length"), new Response(_530bcc5273bb, {
    status: _2a2cf3609c58.status,
    statusText: _2a2cf3609c58.statusText,
    headers: _f4b58d9d7872
  });
}

function wp(_e0ceaafe629e) {
  return new Promise(_2a2cf3609c58 => setTimeout(_2a2cf3609c58, _e0ceaafe629e));
}

async function yp() {
  return Xm || (Xm = (async () => {
    const _e0ceaafe629e = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _2a2cf3609c58 of _e0ceaafe629e) try {
      _2a2cf3609c58.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await wp(60);
  })().finally(() => {
    Xm = null;
  }), Xm);
}

async function jp(_e0ceaafe629e) {
  const _2a2cf3609c58 = Date.now() + 7e3;
  let _746a901632b1 = 0;
  for (;Date.now() < _2a2cf3609c58; ) {
    const _2a2cf3609c58 = Date.now();
    if (_2a2cf3609c58 >= _746a901632b1 && (await yp(), _746a901632b1 = _2a2cf3609c58 + 500), 
    $studyjetController.shouldRoute(_e0ceaafe629e)) return xp(_e0ceaafe629e);
    await wp(100);
  }
  return new Response(Ym(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function xp(_e0ceaafe629e) {
  return gp(_e0ceaafe629e, await $studyjetController.route(_e0ceaafe629e));
}

self.addEventListener("fetch", _e0ceaafe629e => {
  self.NYX_TUTSI_WORKER || !mp(_e0ceaafe629e) ? $studyjetController.shouldRoute(_e0ceaafe629e) ? _e0ceaafe629e.respondWith(xp(_e0ceaafe629e)) : Zm(_e0ceaafe629e) && _e0ceaafe629e.respondWith(jp(_e0ceaafe629e)) : _e0ceaafe629e.respondWith(pp(_e0ceaafe629e));
}), self.addEventListener("activate", _e0ceaafe629e => {
  _e0ceaafe629e.waitUntil(Promise.all([ self.clients.claim(), yp().catch(() => {}) ]));
}), setTimeout(() => {
  yp().catch(() => {});
}, 120);
