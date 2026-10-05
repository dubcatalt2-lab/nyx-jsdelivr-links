export const gameCdnHosts = new Set([ "cdn.jsdelivr.net", "raw.githubusercontent.com", "rawcdn.githack.com", "raw.githack.com" ]);

export function repairGameResourcePath(e) {
  return (e = e.replace(/\/genizy\/google-class(?=@|\/)/g, "/taskmaster773/google-class").replace(/\/gh\/genizy\/ovo-3-dimension@[^/]+\//g, "/gh/bubblfan/ovo-3-dimension@102179bf4242fd237c46c555ba154c2f325d351c/")).replace(/(\/web-ports\/fear-and-hunger-2@[^/]+\/(?:js\/plugins|data)\/)([^/]+\.(?:js|json))$/i, (e, n, t) => n + t.toLowerCase());
}

export function normalizeGameCdnUrl(e, n) {
  try {
    const t = new URL(String(e), n);
    return ![ "http:", "https:" ].includes(t.protocol) || !gameCdnHosts.has(t.hostname) || t.username || t.password || t.port ? null : ("cdn.jsdelivr.net" === t.hostname && /^\/(?!gh\/|npm\/|combine\/)[\w.-]+\/[\w.-]+@[^/]+\//.test(t.pathname) && (t.pathname = "/gh" + t.pathname), 
    t.pathname = repairGameResourcePath(t.pathname), t);
  } catch {
    return null;
  }
}

export function gameResourceUrl(e, n, t) {
  const a = normalizeGameCdnUrl(e, n);
  return a ? `${t}/gn-math-resource/${a.protocol.slice(0, -1)}/${a.host}${a.pathname}${a.search}${a.hash}` : String(e);
}

export function gameResourceTarget(e) {
  try {
    const n = new URL(e, "https://nyx.invalid"), t = n.pathname.match(/^\/gn-math-resource\/(https?)\/([^/]+)(\/.*)$/);
    return t ? normalizeGameCdnUrl(`${t[1]}://${t[2]}${t[3]}${n.search}`) : null;
  } catch {
    return null;
  }
}
