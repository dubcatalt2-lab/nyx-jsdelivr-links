(() => {
  "use strict";
  window.NyxInvidiousPlayer = function(e, {id: t, loop: a = !1, restore: r = {}, onLoading: o = () => {}, onFailure: n = () => {}}) {
    const i = document.createElement("video");
    i.controls = !0, i.playsInline = !0, i.loop = a, i.preload = "auto", i.style.cssText = "width:100%;height:100%;object-fit:contain;background:#0b0c0f", 
    i.muted = r.muted ?? a, i.volume = Math.max(0, Math.min(1, (r.volume ?? 100) / 100));
    let d = r.rate || 1;
    i.defaultPlaybackRate = d, i.playbackRate = d, e.replaceChildren(i);
    let u = !1, l = 0, c = null, s = 0, m = 0, p = r.time || 0, v = !0 === r.paused, y = !1, f = !1;
    function b() {
      clearTimeout(m), m = 0;
    }
    function h() {
      b(), u || v || (m = setTimeout(() => T(), 15e3));
    }
    function T() {
      if (!u && !y) {
        if (b(), p = Math.max(p, i.currentTime || 0), d = i.playbackRate, l >= 2) {
          const e = {
            time: p,
            paused: v,
            muted: i.muted,
            volume: 100 * i.volume,
            rate: d
          };
          return w(), void n(e);
        }
        y = !0, c?.abort(), o(p <= 0), s = setTimeout(() => {
          y = !1, l++, E();
        }, l ? 3e3 : 1e3);
      }
    }
    async function E() {
      if (u) return;
      f = !1, c?.abort();
      const e = c = new AbortController, a = setTimeout(() => e.abort(), 12e3);
      o(p <= 0);
      try {
        const a = await fetch(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/invidious-playback?id=${encodeURIComponent(t)}${l ? "&refresh=1" : ""}`, {
          cache: "no-store",
          signal: e.signal
        }), r = await a.json();
        if (!a.ok) throw Error("Video unavailable");
        const o = new URL(r.url);
        if (r.id !== t || "video/mp4" !== r.type || "https:" !== o.protocol) throw Error("Invalid video response");
        if (u || e !== c) return;
        f = !0, i.src = o.href, i.load(), h();
      } catch {
        u || e !== c || T();
      } finally {
        clearTimeout(a);
      }
    }
    function w() {
      u || (u = !0, c?.abort(), clearTimeout(s), b(), i.pause(), i.removeAttribute("src"), 
      i.load(), i.remove());
    }
    return i.addEventListener("loadedmetadata", () => {
      i.defaultPlaybackRate = d, i.playbackRate = d, p > 0 && (i.currentTime = Math.min(p, Math.max(0, i.duration - .1))), 
      v ? (b(), o(!1)) : i.play().catch(e => {
        "NotAllowedError" === e.name && (v = !0, b(), o(!1));
      });
    }), i.addEventListener("playing", () => {
      v = !1, b(), o(!1);
    }), i.addEventListener("timeupdate", () => {
      i.readyState >= 2 && !i.paused && i.currentTime !== p && (p = i.currentTime, b(), 
      o(!1));
    }), i.addEventListener("waiting", () => {
      f && !y && (o(p <= 0), h());
    }), i.addEventListener("stalled", () => {
      f && !y && h();
    }), i.addEventListener("pause", () => {
      !y && !i.error && i.readyState >= 2 && (v = !0, b(), o(!1));
    }), i.addEventListener("play", () => {
      v = !1, h();
    }), i.addEventListener("error", T), E(), {
      isInvidious: !0,
      video: i,
      destroy: w,
      pauseVideo() {
        v = !0, b(), i.pause();
      },
      getCurrentTime: () => i.currentTime,
      getVolume: () => 100 * i.volume,
      getPlaybackRate: () => i.playbackRate,
      isMuted: () => i.muted
    };
  };
})();
