import { movieSourceUrl as Kn } from "./@r777efab39fa6c30081ec55d4!.mjs?v=20260915-aniembed-v1";

const sr = t => {
  try {
    return localStorage.getItem(t) || "";
  } catch {
    return "";
  }
}, pr = t => {
  if (t?.aborted) throw t.reason || new DOMException("Cancelled", "AbortError");
};

export async function launchMovieProxy(t, e, r, {recover: o = !1} = {}) {
  if (pr(r), !Kn(e) || "allow-scripts allow-same-origin allow-forms allow-presentation" !== t.getAttribute("sandbox")) throw Error("Invalid movie proxy request.");
  if (window.parent !== window && "function" == typeof parent.nyxLaunchMovieFrame) return void await parent.nyxLaunchMovieFrame(t, e, {
    signal: r,
    recover: o
  });
  const {loadProxyScript: n} = await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@r592961e2b144fff8d6dd792d!.mjs"));
  globalThis.__NYX_RUNTIME_CONFIG__ || await n("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/runtime-config.js", () => !!globalThis.__NYX_RUNTIME_CONFIG__);
  const {browse: i, closeBrowser: a} = await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/tutsi/@r2931fd1ced1f82891e21ea5e!.mjs"));
  if (pr(r), !t.isConnected) return;
  o && a(t);
  const s = () => a(t);
  r?.addEventListener("abort", s, {
    once: !0
  });
  try {
    await i(e, function() {
      if (location.hostname.startsWith("tutsi.") || "1" === new URLSearchParams(location.search).get("tutsi") || "tutsi" === document.documentElement.dataset.site) {
        let t;
        try {
          t = JSON.parse(sr("tutsi.settings.v1") || "{}");
        } catch {}
        return {
          transport: "textlib",
          httpBridge: !0,
          autoRelay: !0,
          ...t
        };
      }
      const t = sr("nyx.transport").replace(/^"|"$/g, "");
      return {
        transport: !t || "auto" === t || /^textlib/i.test(t) ? "textlib" : "wisp" === t ? "wisp" : "atlas",
        httpBridge: "false" !== sr("nyx.httpBridge"),
        relay: sr("nyx.wispUrl"),
        autoRelay: !0,
        adBlock: "false" !== sr("nyx.popupProtection"),
        popupBlock: !0,
        downloadBlock: !0
      };
    }(), t), pr(r);
  } catch (c) {
    throw r?.removeEventListener("abort", s), s(), c;
  }
}

export function inspectMovieProxy(t) {
  const e = [ {
    frame: t,
    depth: 0,
    frames: [ t ]
  } ];
  let r = 0, o = !1;
  for (;e.length && r++ < 16; ) {
    const t = e.shift();
    try {
      const r = t.frame.contentDocument;
      if (!r) continue;
      for (const e of r.querySelectorAll("video")) if (e.error) o = !0; else if (e.videoWidth > 0 && e.readyState >= 1) return {
        video: e,
        frames: t.frames,
        paused: e.paused,
        time: e.currentTime,
        width: e.videoWidth,
        height: e.videoHeight,
        failed: !1
      };
      const n = (r.body?.innerText || "").slice(0, 16e3);
      if (o ||= /(?:cannot|can't|cannot be|can\u2019t be).*sandbox|sandbox.*(?:not permitted|not allowed|detected)|no sources? found|stream unavailable|error processing your request|SSL connect error|ERR_SSL|request failed with error code/i.test(n), 
      t.depth < 4) for (const o of [ ...r.querySelectorAll("iframe") ].slice(0, 16)) e.push({
        frame: o,
        depth: t.depth + 1,
        frames: [ ...t.frames, o ]
      });
    } catch {}
  }
  return {
    failed: o
  };
}

export function styleMovieVideo(t, e) {
  const r = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i].contentDocument;
    if (!o?.head) throw Error("Player document unavailable.");
    const n = e[i + 1] || t, a = "data-nyx-player-surface", s = n.getAttribute(a);
    n.setAttribute(a, "");
    const c = [];
    for (let t = n.parentElement; t; t = t.parentElement) c.push([ t, t.getAttribute("data-nyx-player-ancestor") ]), 
    t.setAttribute("data-nyx-player-ancestor", "");
    const l = o.createElement("style");
    l.textContent = "html,body{background:#000!important;overflow:hidden!important}body *{visibility:hidden!important}\n      [data-nyx-player-ancestor]{transform:none!important;filter:none!important;perspective:none!important;contain:none!important;opacity:1!important}\n      [data-nyx-player-surface]{visibility:visible!important;position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;max-width:none!important;max-height:none!important;margin:0!important;padding:0!important;border:0!important;object-fit:contain!important;z-index:2147483647!important;opacity:1!important;background:#000!important;pointer-events:none!important}\n      video::-webkit-media-controls{display:none!important}", 
    o.head.append(l), r.push(() => {
      l.remove(), null === s ? n.removeAttribute(a) : n.setAttribute(a, s);
      for (const [t, e] of c) null === e ? t.removeAttribute("data-nyx-player-ancestor") : t.setAttribute("data-nyx-player-ancestor", e);
    });
  }
  const o = t.controls;
  t.controls = !1;
  const n = new MutationObserver(() => {
    t.controls && (t.controls = !1);
  });
  return n.observe(t, {
    attributes: !0,
    attributeFilter: [ "controls" ]
  }), () => {
    n.disconnect(), t.controls = o, r.reverse().forEach(t => t());
  };
}

function ur(t) {
  const e = [ t ];
  let r = 0;
  for (;e.length && r++ < 16; ) try {
    const t = e.shift().contentDocument;
    if (!t) continue;
    const r = [ ...t.querySelectorAll('button,[role="button"]') ].find(t => /^(play|play video|play movie|start watching|watch now)$/i.test((t.getAttribute("aria-label") || t.getAttribute("title") || t.textContent || "").trim()));
    if (r) return () => r.click();
    const o = [ ...t.querySelectorAll("video") ].find(t => t.currentSrc || t.src);
    if (o) return () => o.play();
    e.push(...[ ...t.querySelectorAll("iframe") ].slice(0, 16));
  } catch {}
  return null;
}

export function canStartMovieProxy(t) {
  return Boolean(ur(t));
}

export async function startMovieProxy(t) {
  const e = ur(t);
  if (!e) throw Error("The player is still loading.");
  await e();
}
