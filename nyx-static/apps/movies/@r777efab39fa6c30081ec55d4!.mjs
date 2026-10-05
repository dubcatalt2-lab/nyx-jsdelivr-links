export const providerDefinitions = Object.freeze([ [ "vidy", "Vidy", "https://www.vidy.st", "" ], [ "videasy", "Videasy", "https://player.videasy.net", "" ], [ "vidfast", "VidFast", "https://vidfast.pro", "" ], [ "vidlink", "VidLink", "https://vidlink.pro", "" ], [ "spencerdevs", "SpencerDevs", "https://spencerdevs.xyz", "" ], [ "vidking", "VidKing", "https://www.vidking.net", "/embed" ], [ "vidsrc-su", "VidSrc.su", "https://vidsrc.su", "/embed" ], [ "vidrock", "VidRock", "https://vidrock.net", "" ], [ "vidsrc-cc", "VidSrc.cc", "https://vidsrc.cc", "/v2/embed" ], [ "embed-su", "Embed.su", "https://embed.su", "/embed" ] ].map(Object.freeze));

export function additionalSources(e, t, s, n) {
  if (![ "movie", "tv" ].includes(e) || !/^[1-9]\d{0,9}$/.test(String(t))) return [];
  if (!("tv" !== e || /^\d{1,3}$/.test(String(s)) && /^[1-9]\d{0,3}$/.test(String(n)))) return [];
  const r = "movie" === e ? `/movie/${t}` : `/tv/${t}/${s}/${n}`;
  return providerDefinitions.map(([e, t, s, n]) => ({
    id: e,
    name: t,
    url: s + n + r,
    proxy: !0
  }));
}

export function additionalSourceUrl(e) {
  try {
    const t = new URL(e);
    if (t.username || t.password || t.search || t.hash) return null;
    for (const [, , e, s] of providerDefinitions) if (t.origin === e && t.pathname.startsWith(s + "/") && /^\/(movie\/[1-9]\d{0,9}|tv\/[1-9]\d{0,9}\/\d{1,3}\/[1-9]\d{0,3})$/.test(t.pathname.slice(s.length))) return t.href;
  } catch {}
  return null;
}

export function movieSourceUrl(e) {
  const t = additionalSourceUrl(e);
  if (t) return t;
  try {
    const t = new URL(e);
    if ("https:" !== t.protocol || t.port || t.username || t.password || t.hash) return null;
    if ("watch.rivestream.app" === t.hostname && "/embed" === t.pathname) {
      const e = t.searchParams, s = e.get("type"), n = e.get("id"), r = [ ...e.keys() ];
      return /^[1-9]\d{0,9}$/.test(n || "") && new Set(r).size === r.length && ("movie" === s && 2 === r.length && r.every(e => [ "type", "id" ].includes(e)) || "tv" === s && 4 === r.length && r.every(e => [ "type", "id", "season", "episode" ].includes(e)) && /^\d{1,3}$/.test(e.get("season") || "") && /^[1-9]\d{0,3}$/.test(e.get("episode") || "")) ? t.href : null;
    }
    if ("aniembed.se" === t.hostname) {
      const e = t.searchParams, s = [ ...e.keys() ];
      return /^\/e\/[1-9]\d{0,9}\/[1-9]\d{0,3}$/.test(t.pathname) && 3 === s.length && 3 === new Set(s).size && s.every(e => [ "lang", "autoplay", "t" ].includes(e)) && "sub" === e.get("lang") && "1" === e.get("autoplay") && "0" === e.get("t") ? t.href : null;
    }
    if ("plyr.animex.one" === t.hostname) {
      const e = t.searchParams, s = [ ...e.keys() ];
      return /^\/e\/[a-z0-9]+(?:-[a-z0-9]+)*\/[1-9]\d{0,3}$/.test(t.pathname) && 5 === s.length && 5 === new Set(s).size && s.every(e => [ "lang", "autoplay", "t", "hasPrev", "hasNext" ].includes(e)) && "sub" === e.get("lang") && "1" === e.get("autoplay") && "0" === e.get("t") && /^[01]$/.test(e.get("hasPrev") || "") && /^[01]$/.test(e.get("hasNext") || "") ? t.href : null;
    }
    if (t.search) return null;
    if ("framextv.tech" === t.hostname && /^\/embed\/[1-9]\d{0,9}(\/\d{1,3}\/[1-9]\d{0,3})?$/.test(t.pathname)) return t.href;
    if ("nhdapi.com" === t.hostname && /^\/(movie\/\d{1,10}|tv\/\d{1,10}\/\d{1,3}\/\d{1,4}|anime\/\d{1,10}\/\d{1,4})$/.test(t.pathname)) return t.href;
    if ("supaplay.fun" === t.hostname && (/^\/mw\/([a-zA-Z0-9]+-)+[a-zA-Z0-9]{5,30}(\/\d{1,3}\/\d{1,4})?$/.test(t.pathname) || /^\/stream\/ani\/\d{1,8}\/\d{1,4}\/(sub|dub)$/.test(t.pathname))) return t.href;
    if ("ani.megaplay.su" === t.hostname && /^\/kisskh\/\d{1,10}$/.test(t.pathname)) return t.href;
  } catch {}
  return null;
}
