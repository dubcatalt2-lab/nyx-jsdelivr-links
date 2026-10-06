importScripts("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@rdc1c08ea44f7c395d60adde7!.js?v=20260905-cookie-owner-v1");

let Xm = null;

function Ym() {
  return '<!doctype html>\n<meta charset="utf-8">\n<meta name="nyx-route-miss" content="1">\n<style>\n  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#101318;color:#f5f7fb;font:15px/1.45 system-ui,sans-serif}\n  main{max-width:560px;padding:28px;text-align:center}\n  h1{font-size:20px;margin:0 0 10px}\n  p{margin:0;color:#c8ced8}\n  button{margin-top:18px;border:1px solid #445066;border-radius:10px;background:#1b2230;color:#f5f7fb;padding:10px 15px;font:600 14px system-ui,sans-serif;cursor:pointer}\n</style>\n<main>\n  <h1>Reconnecting Scramjet</h1>\n  <p>Nyx is reconnecting this tab to the proxy service worker.</p>\n  <button type="button" data-nyx-repair onclick="if(parent===window){location.reload()}else{window.nyxRepairing=true;parent.postMessage({type:\'nyx:repair-connection\'},parent.location.origin)}">Repair connection</button>\n</main>\n<script>\n  (() => {\n    const key=\'nyx.scramjet-route-retry:\'+location.pathname;\n    const attempts=Number(sessionStorage.getItem(key)||0);\n    if(attempts<2){\n      sessionStorage.setItem(key,String(attempts+1));\n      setTimeout(()=>{if(!window.nyxRepairing)location.reload()},900);\n    }else{\n      sessionStorage.removeItem(key);\n    }\n  })();\n<\/script>';
}

function Zm(_8042e4f9a9c5) {
  try {
    return new URL(_8042e4f9a9c5.request.url).pathname.startsWith(self.NYX_TUTSI_WORKER ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/tm/" : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/sj/");
  } catch {
    return !1;
  }
}

function sp(_8042e4f9a9c5) {
  try {
    const _4e76c68878eb = new URL(_8042e4f9a9c5).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _4e76c68878eb ? new URL(decodeURIComponent(_4e76c68878eb[1])).pathname : "";
  } catch {
    return "";
  }
}

function cp(_8042e4f9a9c5) {
  try {
    const _4e76c68878eb = new URL(_8042e4f9a9c5).pathname.match(/^\/gh\/dubcatalt2-lab\/nyx-jsdelivr-links@main\/nyx-static\/~\/(?:sj|tm)\/[^/]+\/[^/]+\/([^?#]*)/);
    return _4e76c68878eb ? new URL(decodeURIComponent(_4e76c68878eb[1])).href : "";
  } catch {
    return "";
  }
}

self.addEventListener("install", _8042e4f9a9c5 => {
  _8042e4f9a9c5.waitUntil(self.skipWaiting());
});

const up = [ "pagead2.googlesyndication.com", "googlesyndication.com", "googleads.g.doubleclick.net", "doubleclick.net", "googletagmanager.com", "google-analytics.com", "analytics.google.com", "adservice.google.com", "adtrafficquality.google", "stats.g.doubleclick.net", "static.cloudflareinsights.com", "cloudflareinsights.com", "statcounter.com", "c.statcounter.com", "www.statcounter.com", "inmobi.com", "cmp.inmobi.com", "vntsm.com", "hb.vntsm.com", "facebook.net", "connect.facebook.net", "ads.emulatorjs.org", "cdn.r9x.in", "gamemonetize.com", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "sdk.poki.com" ];

function lp(_8042e4f9a9c5) {
  const _4e76c68878eb = String(_8042e4f9a9c5 || "").toLowerCase();
  return "cmp.inmobi.com" !== _4e76c68878eb && !_4e76c68878eb.endsWith(".cmp.inmobi.com") && up.some(_8042e4f9a9c5 => _4e76c68878eb === _8042e4f9a9c5 || _4e76c68878eb.endsWith(`.${_8042e4f9a9c5}`));
}

function mp(_8042e4f9a9c5) {
  const _4e76c68878eb = cp(_8042e4f9a9c5.request.url);
  if (!_4e76c68878eb) return !1;
  try {
    const _8042e4f9a9c5 = new URL(_4e76c68878eb);
    return lp(_8042e4f9a9c5.hostname) || /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i.test(_8042e4f9a9c5.pathname) || "serve.app.playsaurus.com" === _8042e4f9a9c5.hostname && /\/ad-campaigns\//i.test(_8042e4f9a9c5.pathname);
  } catch {
    return !1;
  }
}

function pp(_8042e4f9a9c5) {
  const _4e76c68878eb = _8042e4f9a9c5.request.headers.get("accept") || "";
  return [ "script", "worker", "sharedworker" ].includes(_8042e4f9a9c5.request.destination) || /javascript|ecmascript/i.test(_4e76c68878eb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _8042e4f9a9c5.request.destination || /text\/css/i.test(_4e76c68878eb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : "image" === _8042e4f9a9c5.request.destination ? new Response("", {
    status: 204
  }) : "document" === _8042e4f9a9c5.request.destination || "iframe" === _8042e4f9a9c5.request.destination ? new Response('<!doctype html><meta charset="utf-8">', {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  }) : new Response(null, {
    status: 204
  });
}

function dp(_8042e4f9a9c5) {
  const _4e76c68878eb = _8042e4f9a9c5.request.headers.get("accept") || "", _f83a0b50560e = new URL(_8042e4f9a9c5.request.url).pathname, _31d2114bc7c4 = sp(_8042e4f9a9c5.request.url);
  return [ "script", "worker", "sharedworker", "style" ].includes(_8042e4f9a9c5.request.destination) || /javascript|ecmascript|text\/css/i.test(_4e76c68878eb) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_f83a0b50560e) || /\.(?:js|mjs|cjs|css|jq|hs|ohs)(?:$|[/?#])/i.test(_31d2114bc7c4);
}

function hp(_8042e4f9a9c5) {
  const _4e76c68878eb = _8042e4f9a9c5.request.headers.get("accept") || "", _f83a0b50560e = new URL(_8042e4f9a9c5.request.url).pathname, _31d2114bc7c4 = sp(_8042e4f9a9c5.request.url);
  return [ "script", "worker", "sharedworker" ].includes(_8042e4f9a9c5.request.destination) || /javascript|ecmascript/i.test(_4e76c68878eb) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_f83a0b50560e) || /\.(?:js|mjs|cjs|jq|hs|ohs)(?:$|[/?#])/i.test(_31d2114bc7c4) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8"
    }
  }) : "style" === _8042e4f9a9c5.request.destination || /text\/css/i.test(_4e76c68878eb) ? new Response("", {
    status: 200,
    headers: {
      "Content-Type": "text/css; charset=utf-8"
    }
  }) : null;
}

function fp(_8042e4f9a9c5) {
  return /^\s*</.test(_8042e4f9a9c5) || /^\s*\)\]\}'/.test(_8042e4f9a9c5) || /^\s*\)\]/.test(_8042e4f9a9c5);
}

async function gp(_8042e4f9a9c5, _4e76c68878eb) {
  if (!dp(_8042e4f9a9c5)) return _4e76c68878eb;
  const _f83a0b50560e = _4e76c68878eb.headers.get("content-type") || "";
  if (_4e76c68878eb.status >= 400 || _f83a0b50560e.includes("text/html") || _f83a0b50560e.includes("application/json") || _f83a0b50560e.includes("text/json")) return hp(_8042e4f9a9c5) || _4e76c68878eb;
  const _31d2114bc7c4 = await _4e76c68878eb.clone().text().catch(() => "");
  if (fp(_31d2114bc7c4)) return hp(_8042e4f9a9c5) || _4e76c68878eb;
  if (!_31d2114bc7c4) return _4e76c68878eb;
  const _c19be74fbe61 = new Headers(_4e76c68878eb.headers);
  return _c19be74fbe61.delete("content-length"), new Response(_31d2114bc7c4, {
    status: _4e76c68878eb.status,
    statusText: _4e76c68878eb.statusText,
    headers: _c19be74fbe61
  });
}

function wp(_8042e4f9a9c5) {
  return new Promise(_4e76c68878eb => setTimeout(_4e76c68878eb, _8042e4f9a9c5));
}

async function yp() {
  return Xm || (Xm = (async () => {
    const _8042e4f9a9c5 = await self.clients.matchAll({
      includeUncontrolled: !0,
      type: "window"
    });
    for (const _4e76c68878eb of _8042e4f9a9c5) try {
      _4e76c68878eb.postMessage({
        $controller$swrevive: {}
      });
    } catch {}
    await wp(60);
  })().finally(() => {
    Xm = null;
  }), Xm);
}

async function jp(_8042e4f9a9c5) {
  const _4e76c68878eb = Date.now() + 7e3;
  let _f83a0b50560e = 0;
  for (;Date.now() < _4e76c68878eb; ) {
    const _4e76c68878eb = Date.now();
    if (_4e76c68878eb >= _f83a0b50560e && (await yp(), _f83a0b50560e = _4e76c68878eb + 500), 
    $scramjetController.shouldRoute(_8042e4f9a9c5)) return xp(_8042e4f9a9c5);
    await wp(100);
  }
  return new Response(Ym(), {
    status: 502,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

async function xp(_8042e4f9a9c5) {
  return gp(_8042e4f9a9c5, await $scramjetController.route(_8042e4f9a9c5));
}

self.addEventListener("fetch", _8042e4f9a9c5 => {
  self.NYX_TUTSI_WORKER || !mp(_8042e4f9a9c5) ? $scramjetController.shouldRoute(_8042e4f9a9c5) ? _8042e4f9a9c5.respondWith(xp(_8042e4f9a9c5)) : Zm(_8042e4f9a9c5) && _8042e4f9a9c5.respondWith(jp(_8042e4f9a9c5)) : _8042e4f9a9c5.respondWith(pp(_8042e4f9a9c5));
}), self.addEventListener("activate", _8042e4f9a9c5 => {
  _8042e4f9a9c5.waitUntil(Promise.all([ self.clients.claim(), yp().catch(() => {}) ]));
}), setTimeout(() => {
  yp().catch(() => {});
}, 120);
