import { additionalSources as _n, movieSourceUrl as Kn } from "./@rfadd4f9595b413bd55e20a33!.js?v=20260915-aniembed-v1";

import { launchMovieProxy as Zn, inspectMovieProxy as Xn, styleMovieVideo as Yn, startMovieProxy as Qn, canStartMovieProxy as ia } from "./@re874b847568a139e69119ffa!.js?v=20260928-playback-recovery-v4";

(() => {
  "use strict";
  const e = e => document.getElementById(e), t = window.parent !== window;
  document.querySelector(".home-link").addEventListener("click", e => {
    t && (e.preventDefault(), parent.postMessage({
      type: "nyx:close-tab"
    }, location.origin));
  });
  const n = (e, t) => {
    try {
      return localStorage.getItem(e) || t;
    } catch {
      return t;
    }
  };
  function a() {
    if (t) {
      try {
        document.documentElement.style.setProperty("--nyx-font", getComputedStyle(parent.document.body).fontFamily);
      } catch {}
      return;
    }
    const e = {
      outfit: "Outfit",
      raleway: "Raleway",
      nunito: "Nunito",
      inter: "Inter",
      poppins: "Poppins",
      quicksand: "Quicksand",
      lexend: "Lexend",
      montserrat: "Montserrat",
      atkinson: "Atkinson Hyperlegible"
    }[n("nyx.font", "outfit")] || "Outfit";
    document.documentElement.style.setProperty("--nyx-font", `"${e}",Arial,sans-serif`);
    let a = document.getElementById("nyx-movies-font");
    a || (a = document.createElement("link"), a.id = "nyx-movies-font", a.rel = "stylesheet", 
    document.head.append(a));
    const o = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e).replaceAll("%20", "+")}:wght@400;500;600;700&display=swap`;
    a.href !== o && (a.href = o);
    const i = n("nyx.beamWallpaper", "frost");
    document.documentElement.dataset.nyxBeamWallpaper = i;
    const r = n("nyx.customThemeColor", ""), s = "custom" === n("nyx.theme", "default") && /^#[a-f0-9]{6}$/i.test(r) ? {
      lightColor: r
    } : {};
    window.NyxBeamsWallpaper?.apply(i, s), window.NyxLineWavesWallpaper?.apply(i, {
      colorVariant: n("nyx.lineWaves.colorVariant", "frost")
    });
  }
  if (!t) {
    document.documentElement.classList.add("nyx-movies-standalone");
    for (const e of [ "nyxBeamsBg", "nyxLineWavesBg" ]) {
      const t = document.createElement("canvas");
      t.id = e, t.setAttribute("aria-hidden", "true"), document.body.prepend(t);
    }
    (async () => {
      for (const e of [ "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/vendor/three.r134.min.js", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@rb68750c01c864a9ef9f8eae1!.js", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/js/@rd53edf8afd9e3315fe3c5521!.js" ]) await new Promise((t, n) => {
        const a = document.createElement("script");
        a.src = e, a.onload = t, a.onerror = n, document.head.append(a);
      });
      a();
    })().catch(() => {});
  }
  a(), addEventListener("storage", a), addEventListener("message", e => {
    e.source === parent && e.origin === location.origin && "nyx:theme-sync" === e.data?.type && a();
  });
  let o, i, r, s = "", l = 1, c = 1, d = null;
  async function u(e, t, n = 0) {
    for (let o = 0; ;o++) try {
      const n = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/" + e, {
        signal: t,
        cache: "no-store"
      }), a = JSON.parse(await n.text(), (e, t) => "string" == typeof t ? t.replace(/^https:\/\/image\.tmdb\.org\/t\/p\/(w185|w342|w500|w780|w1280|original)\/([a-zA-Z0-9_-]+\.(?:jpg|png|webp))$/, "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/image/$1/$2") : t);
      if (!n.ok) throw Object.assign(Error(a.error || "Movies could not be loaded."), {
        retryable: [ 502, 503, 504 ].includes(n.status)
      });
      return a;
    } catch (a) {
      if (t?.aborted || o >= n || !(a.retryable || a instanceof TypeError)) throw a;
      await new Promise((e, n) => {
        const a = () => {
          clearTimeout(i), n(t.reason);
        }, i = setTimeout(() => {
          t?.removeEventListener("abort", a), e();
        }, 400 * (o + 1));
        t?.addEventListener("abort", a, {
          once: !0
        }), t?.aborted && a();
      });
    }
  }
  function p(e, t = "") {
    const n = document.createElement("img");
    n.alt = t, n.loading = "lazy";
    let a = !1;
    const o = () => {
      n.onerror = null, n.classList.add("poster-fallback"), n.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/nyx-cat-moon.svg?v=3";
    };
    return n.onerror = () => {
      a || !e?.startsWith("https://image.tmdb.org/t/p/") && !e?.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/image/") ? o() : (a = !0, 
      n.src = e.replace(/\/w\d+\//, "/w185/"));
    }, e ? n.src = e : o(), n;
  }
  const m = matchMedia("(prefers-reduced-motion: reduce)"), h = document.createElement("div");
  h.id = "movie-backdrop", h.setAttribute("aria-hidden", "true"), document.body.prepend(h);
  let y = 0, f = "";
  function v(t) {
    const n = t?.backdrop;
    if (!n || e("featured").hidden) return h.hidden = !0, void document.body.classList.remove("movie-backdrop-active");
    if (h.hidden = !1, document.body.classList.add("movie-backdrop-active"), n === f) return;
    const a = ++y;
    f = n;
    const o = new Image;
    o.alt = "", o.onload = () => {
      if (a !== y) return;
      const e = [ ...h.children ];
      h.append(o), o.animate([ {
        opacity: 0
      }, {
        opacity: 1
      } ], {
        duration: m.matches ? 0 : 650
      }).finished.then(() => e.forEach(e => e.remove())).catch(() => {});
    }, o.onerror = () => {
      a === y && (f = "");
    }, o.src = n;
  }
  let g, b = [], x = 0, k = m.matches, w = !1, E = !0, C = !1;
  function L() {
    clearTimeout(g), b.length < 2 || k || m.matches || w || !E || document.hidden || e("featured").hidden || e("detail").open || !e("watch-area").hidden || (g = setTimeout(() => T(x + 1), 4e3));
  }
  function T(t, {recenter: n = !0} = {}) {
    if (!b.length) return;
    const a = (t + b.length) % b.length, o = C && a !== x, i = t >= x ? 1 : -1, r = new Map([ ...e("accordion-gallery").children ].map(e => [ e, e.getBoundingClientRect() ]));
    for (const e of r.keys()) e.getAnimations().forEach(e => e.cancel());
    x = (t + b.length) % b.length;
    const s = b[x];
    v(s), e("featured-title").textContent = s.title, e("featured-overview").textContent = s.overview || "", 
    e("featured-meta").textContent = [ s.releaseDate?.slice(0, 4), s.rating > 0 ? s.rating.toFixed(1) + " / 10" : "" ].filter(Boolean).join(" \xb7 ");
    const l = [ ...e("accordion-gallery").children ].sort((e, t) => Number(e.dataset.index) - Number(t.dataset.index));
    l.forEach((e, t) => {
      const n = t === x;
      e.classList.toggle("ag-panel--active", n), e.style.setProperty("--ag-grow", n ? String(.6 * (l.length - 1) / .4 || 1) : "1"), 
      e.style.setProperty("--ag-tilt", n ? "0deg" : t < x ? "5deg" : "-5deg"), e.style.setProperty("--ag-shift", n ? "0px" : 10 * Math.max(-1.5, Math.min(1.5, x - t)) + "px"), 
      e.querySelector(".ag-panel-trigger").setAttribute("aria-expanded", String(n));
    }), l[x] && l[x].append(document.querySelector(".featured-copy"));
    const c = Math.floor(l.length / 2);
    for (let d = 0; n && d < l.length; d++) {
      const t = (x + c - d + l.length) % l.length, n = l[t];
      n.style.setProperty("--ag-tilt", d < c ? "5deg" : d > c ? "-5deg" : "0deg"), e("accordion-gallery").append(n);
    }
    if (o && !m.matches) {
      const t = e("accordion-gallery").getBoundingClientRect(), a = matchMedia("(max-width:600px)").matches;
      for (const e of l) {
        const o = r.get(e), s = e.getBoundingClientRect();
        if (!o || !s.width || !s.height) continue;
        let l = o.left - s.left, c = o.top - s.top;
        !a && Math.abs(l) > .65 * t.width && (l = -i * (s.width + 12)), a && Math.abs(c) > .65 * t.height && (c = -i * (s.height + 7)), 
        e.animate([ {
          transform: `translate(${l}px,${c}px) scale(${o.width / s.width},${o.height / s.height})`
        }, {
          transform: "none"
        } ], {
          duration: n ? 500 : 450,
          easing: "cubic-bezier(.22,1,.36,1)"
        });
      }
      const o = document.querySelector(".featured-copy");
      o.getAnimations().forEach(e => e.cancel()), o.animate([ {
        opacity: 0
      }, {
        opacity: 1
      } ], {
        duration: n ? 350 : 280
      });
    }
    C = !0, e("featured-open").onclick = () => location.hash = "movie=" + s.id, e("slide-count").textContent = `${x + 1} / ${b.length}`, 
    [ ...e("slide-dots").children ].forEach((e, t) => e.setAttribute("aria-current", String(t === x))), 
    L();
  }
  e("slide-previous").onclick = () => T(x - 1), e("slide-next").onclick = () => T(x + 1);
  let S, A = "";
  async function M() {
    clearTimeout(g), o?.abort();
    const t = o = new AbortController;
    e("notice").textContent = "Loading movies...", e("retry-search").hidden = !0, e("clear-search").hidden = !s, 
    e("featured").hidden = !0, v(null), e("grid").setAttribute("aria-busy", "true"), 
    e("result-page").textContent = "", e("grid").replaceChildren(), e("previous").disabled = e("next").disabled = !0;
    try {
      const n = await u("search?" + new URLSearchParams({
        q: s,
        page: l
      }), t.signal, 2);
      if (t !== o) return;
      c = n.totalPages, function(t) {
        if (clearTimeout(g), C = !1, b = [ ...new Map(t.filter(e => e.backdrop && !/^coyote\s+vs\.?\s+acme$/i.test(e.title)).map(e => [ e.id, e ])).values() ].slice(0, 5), 
        b.length > 1 && b.length % 2 == 0 && b.pop(), !b.length) {
          const e = t.find(e => !/^coyote\s+vs\.?\s+acme$/i.test(e.title));
          e && (b = [ e ]);
        }
        e("featured").hidden = !b.length || !!s || 1 !== l, e("gallery-controls").hidden = b.length < 2;
        const n = document.querySelector(".featured-copy");
        e("featured").append(n), e("accordion-gallery").replaceChildren(...b.map((e, t) => {
          const n = document.createElement("article");
          n.className = "ag-panel", n.dataset.index = String(t);
          const a = document.createElement("div");
          a.className = "ag-panel__media";
          const o = document.createElement("img");
          o.alt = "", o.draggable = !1, o.src = e.backdrop || e.poster || "", o.onerror = () => o.hidden = !0, 
          a.append(o);
          const i = document.createElement("span");
          i.className = "ag-panel__overlay", i.setAttribute("aria-hidden", "true");
          const r = document.createElement("button");
          r.type = "button", r.className = "ag-panel-trigger", r.setAttribute("aria-label", "Feature " + e.title), 
          r.title = "Feature " + e.title, r.setAttribute("aria-expanded", "false"), r.onclick = () => {
            T(t);
          };
          const s = document.createElement("span");
          return s.className = "ag-panel__label", s.textContent = e.title, s.setAttribute("aria-hidden", "true"), 
          n.append(a, i, r, s), n;
        })), e("slide-dots").replaceChildren(), b.forEach((t, n) => {
          const a = document.createElement("button");
          a.type = "button", a.setAttribute("aria-label", `Show ${t.title}`), a.title = `Show ${t.title}`, 
          a.onclick = () => T(n), e("slide-dots").append(a);
        }), b.length ? T(0) : v(null);
      }(n.featured || n.results), e("results-title").textContent = s ? "Results for " + s : "Popular movies", 
      e("result-page").textContent = `Page ${l} of ${c}`;
      for (const t of n.results) {
        const n = document.createElement("button");
        n.type = "button", n.className = "movie-card";
        const a = document.createElement("div");
        a.className = "poster", a.append(p(t.poster, t.title + " poster"));
        const o = document.createElement("div");
        o.className = "card-copy";
        const i = document.createElement("strong");
        i.textContent = t.title;
        const r = document.createElement("span");
        r.textContent = [ "tv" === t.kind ? "Series" : "Movie", t.releaseDate?.slice(0, 4) || "Date unavailable", t.rating > 0 ? "\u2605 " + t.rating.toFixed(1) : "" ].filter(Boolean).join(" \xb7 "), 
        o.append(i, r), n.append(a, o), n.onclick = () => location.hash = ("tv" === t.kind ? "tv=" : "movie=") + t.id, 
        e("grid").append(n);
      }
      e("notice").textContent = n.results.length ? "" : "No movies or series found. Try another title.", 
      e("previous").disabled = l <= 1, e("next").disabled = l >= c;
    } catch (n) {
      t !== o || t.signal.aborted || (e("notice").textContent = n.message, e("retry-search").hidden = !1);
    } finally {
      t === o && e("grid").setAttribute("aria-busy", "false");
    }
  }
  e("accordion-gallery").addEventListener("pointermove", e => {
    if ("mouse" !== e.pointerType) return;
    const t = e.clientX + "," + e.clientY;
    if (t === A) return;
    A = t;
    const n = e.target.closest(".ag-panel");
    if (n) {
      const e = Number(n.dataset.index);
      e !== x && T(e, {
        recenter: !1
      });
    }
  }), e("accordion-gallery").addEventListener("pointerleave", () => {
    A = "";
  }), e("featured").addEventListener("focusin", () => {
    w = document.activeElement.matches(":focus-visible"), L();
  }), e("featured").addEventListener("focusout", () => {
    queueMicrotask(() => {
      w = e("featured").contains(document.activeElement) && document.activeElement.matches(":focus-visible"), 
      L();
    });
  }), e("featured").addEventListener("keydown", e => {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || "ArrowLeft" !== e.key && "ArrowRight" !== e.key || (e.preventDefault(), 
    T(x + ("ArrowRight" === e.key ? 1 : -1)));
  }), e("featured").addEventListener("pointerdown", e => {
    "touch" !== e.pointerType || e.target.closest("button,a") || (S = {
      x: e.clientX,
      y: e.clientY
    });
  }), e("featured").addEventListener("pointerup", e => {
    if (!S) return;
    const t = e.clientX - S.x, n = e.clientY - S.y;
    S = null, Math.abs(t) > 60 && Math.abs(t) > 1.5 * Math.abs(n) && T(x + (t < 0 ? 1 : -1));
  }), e("featured").addEventListener("pointercancel", () => {
    S = null;
  }), addEventListener("visibilitychange", L), addEventListener("pageshow", L), m.addEventListener("change", () => {
    k = m.matches, L();
  }), "IntersectionObserver" in window && new IntersectionObserver(e => {
    E = e[0].isIntersecting, L();
  }, {
    threshold: .1
  }).observe(e("featured"));
  let P = [ {
    id: "vixsrc",
    name: "VixSrc"
  } ], N = [];
  const I = Kn;
  let R = {}, B = "", q = 0;
  const D = new Map, $ = e => (e.kind || "movie") + ":" + e.id;
  function F(e, t) {
    const n = D.get($(e))?.[t];
    return n && Date.now() - n.updated < 18e5 ? n : {};
  }
  function H(e, t, n) {
    const a = $(e);
    !D.has(a) && D.size >= 100 && D.delete(D.keys().next().value);
    const o = D.get(a) || {};
    o[t] = {
      ...F(e, t),
      ...n,
      updated: Date.now()
    }, D.set(a, o);
  }
  function U(t) {
    e("sources-panel").hidden = !t, e("choose-source").setAttribute("aria-expanded", String(t)), 
    t && (e("episode-picker").hidden = !0, e("choose-episodes").setAttribute("aria-expanded", "false"));
  }
  function j() {
    e("source-list").replaceChildren(...P.map(e => {
      const t = document.createElement("li"), n = document.createElement("button"), a = document.createElement("span"), o = document.createElement("span"), i = document.createElement("strong"), r = document.createElement("small"), s = F(d, e.id), l = R[e.id] || (s.failed ? "Recently unavailable" : s.played ? "Previously played" : "Waiting");
      return t.dataset.state = l, n.type = "button", n.dataset.provider = e.id, n.setAttribute("aria-current", String(e.id === B)), 
      a.className = "source-mark", a.setAttribute("aria-hidden", "true"), i.textContent = e.name, 
      r.textContent = l + " \xb7 " + (s.width && s.height ? s.width + " \xd7 " + s.height : "Quality unknown"), 
      o.append(i, r), n.append(a, o), n.onclick = () => {
        try {
          localStorage.setItem("nyx.movies.preferredSource", e.id);
        } catch {}
        ne(e.id);
      }, t.append(n), t;
    }));
  }
  let W = null, _ = null, O = "", z = null, K = null, Z = null, V = null;
  function X() {
    clearTimeout(ce), e("watch-area").classList.remove("controls-idle"), K?.(), K = null, 
    Z?.(), Z = null, V = null, e("proxy-loading").hidden = !0, e("start-proxy").hidden = !0, 
    e("watch-area").classList.remove("proxy-playback", "proxy-ready");
  }
  function Y(t) {
    for (const n of [ "skip-back", "skip-forward", "mute", "volume", "player-settings" ]) e(n).disabled = !t;
  }
  function J() {
    q++, X(), U(!1), e("episode-picker").hidden = !0, e("choose-episodes").setAttribute("aria-expanded", "false"), 
    document.getElementById("watch-area").classList.remove("external-playback"), e("watch-area").insertBefore(document.querySelector(".playback-controls"), e("episode-picker")), 
    clearTimeout(r), _?.abort(), _ = null, W?.destroy(), W = null, z && (z.pause(), 
    z.removeAttribute("src"), z.load(), z = null), O && (fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/playback/" + encodeURIComponent(O), {
      method: "DELETE",
      keepalive: !0
    }).catch(() => {}), O = ""), e("player").replaceChildren(), e("watch-area").hidden = !0, 
    e("settings-panel").hidden = !0, e("player-settings").setAttribute("aria-expanded", "false"), 
    document.body.classList.remove("movie-playing"), document.querySelectorAll("main>header,main>#browse,main>footer").forEach(e => e.inert = !1), 
    document.fullscreenElement === e("watch-area") && document.exitFullscreen().catch(() => {});
  }
  let Q = null;
  function G() {
    e("detail").open || (document.body.classList.contains("movie-overlay") || (Q = document.activeElement), 
    e("detail").showModal()), document.body.classList.add("movie-overlay"), L();
  }
  function ee() {
    e("detail").open && e("detail").close(), document.body.classList.remove("movie-overlay"), 
    Q?.focus(), L();
  }
  async function te() {
    J(), i?.abort(), e("retry-detail").hidden = !0, d = null, e("watch").hidden = !1, 
    e("series-episodes").replaceChildren(), e("series-note").textContent = "";
    const t = location.hash, n = location.hash.match(/^#watch=([1-9]\d{0,9})\/(\d{1,3})\/([1-9]\d{0,3})$/);
    if (n) {
      G(), e("detail-content").hidden = !0, e("detail-notice").textContent = "Loading episode\u2026";
      try {
        const e = await u(`tv/${n[1]}/season/${n[2]}/episode/${n[3]}`);
        if (location.hash !== t) return;
        d = e, await ne();
      } catch (l) {
        location.hash === t && (e("detail-notice").textContent = l.message);
      }
      return;
    }
    const a = location.hash.match(/^#episode=([a-z0-9-]+)$/)?.[1];
    if (a) {
      if (!N.length) try {
        N = (await u("episodes")).results || [];
      } catch {}
      if (location.hash !== t) return;
      const n = N.find(e => e.id === a);
      if (n) {
        let a;
        try {
          a = [ ...(await u("tv/" + n.tmdbSeriesId + "/season/" + n.season + "/episode/" + n.episode)).sources, {
            id: n.provider,
            name: n.providerName,
            url: n.embedUrl
          } ];
        } catch {}
        if (location.hash !== t) return;
        return d = {
          ...n,
          kind: "episode",
          sources: a,
          genres: [],
          cast: []
        }, e("movie-title").textContent = n.title, e("movie-meta").textContent = n.episodeLabel, 
        e("movie-overview").textContent = "", e("movie-facts").replaceChildren(), e("movie-genres").replaceChildren(), 
        e("cast-section").hidden = !0, e("detail-backdrop").hidden = !0, e("detail-content").hidden = !1, 
        e("detail-notice").textContent = "", void G();
      }
      return void ee();
    }
    const o = location.hash.startsWith("#tv="), r = location.hash.match(/^#(?:movie|tv)=([1-9]\d{0,9})$/)?.[1];
    if (!r) return void ee();
    G();
    const s = i = new AbortController;
    e("detail-content").hidden = !0, e("detail-notice").textContent = "Loading movie details...";
    try {
      const t = await u((o ? "tv/" : "") + r, s.signal);
      if (s !== i) return;
      d = t;
      const n = e("detail-backdrop");
      n.hidden = !t.backdrop, n.onerror = () => n.hidden = !0, t.backdrop && (n.src = t.backdrop), 
      e("movie-title").textContent = t.title, e("movie-meta").textContent = [ t.rating > 0 ? "TMDB " + t.rating.toFixed(1) + " / 10" + (t.votes ? " (" + t.votes.toLocaleString() + ")" : "") : "", t.releaseDate?.slice(0, 4) ].filter(Boolean).join(" \xb7 "), 
      e("movie-overview").textContent = t.overview || "No description available.", e("movie-genres").replaceChildren();
      for (const a of t.genres) {
        const t = document.createElement("span");
        t.textContent = a, e("movie-genres").append(t);
      }
      e("movie-facts").replaceChildren();
      for (const [a, o] of [ [ "Runtime", t.runtime ? Math.floor(t.runtime / 60) + "h " + t.runtime % 60 + "m" : null ], [ "Language", t.language?.toUpperCase() ], [ "Release date", t.releaseDate ] ]) {
        if (!o) continue;
        const t = document.createElement("dt"), n = document.createElement("dd");
        t.textContent = a, n.textContent = o, e("movie-facts").append(t, n);
      }
      e("movie-cast").replaceChildren(), e("cast-section").hidden = !t.cast?.length;
      for (const a of t.cast || []) {
        const t = document.createElement("div");
        t.className = "cast-person";
        const n = document.createElement("div");
        n.className = "cast-photo", a.photo ? n.append(p(a.photo, a.name)) : n.textContent = a.name.split(" ").map(e => e[0]).slice(0, 2).join("");
        const o = document.createElement("strong"), i = document.createElement("span");
        o.textContent = a.name, i.textContent = a.role, t.append(n, o, i), e("movie-cast").append(t);
      }
      "tv" === t.kind && (e("watch").hidden = !0, e("series-note").textContent = "Seasons & episodes", 
      ae(e("series-episodes"), t)), e("detail-notice").textContent = "", e("detail-content").hidden = !1, 
      e("movie-title").focus();
    } catch (c) {
      s.signal.aborted || (e("detail-notice").textContent = c.message, e("retry-detail").hidden = !1);
    }
  }
  async function ne(t) {
    if (!d) return;
    const a = d;
    e("choose-episodes").hidden = !a.tmdbSeriesId, P = function(e, t) {
      if (("episode" === e.kind || "tv" === e.kind) && !t.some(e => e.proxy)) {
        const e = e => "rive" === e.id ? -1 : "framextv" === e.id ? 1 : 0;
        return [ ...t ].sort((t, n) => e(t) - e(n));
      }
      const n = e => e.failed ? 3 : e.played ? e.stalls >= 3 ? 1 : 0 : 2;
      return [ ...t ].sort((t, a) => {
        const o = F(e, t.id), i = F(e, a.id);
        return n(o) - n(i) || (o.played && i.played ? (i.width || 0) * (i.height || 0) - (o.width || 0) * (o.height || 0) : 0);
      });
    }(a, function(e) {
      const t = function(e) {
        if ("tv" === e.kind) return [];
        if (e.sources) return e.sources.map(e => ({
          ...e,
          url: I(e.url)
        })).filter(e => e.url);
        if ("episode" === e.kind) {
          const t = I(e.embedUrl);
          return t ? [ {
            id: e.provider,
            name: e.providerName,
            url: t
          } ] : [];
        }
        const t = (e.providerMappings || []).filter(e => "supaplay" === e.provider).map(e => I("https://supaplay.fun/mw/" + e.detailPath)).filter(Boolean);
        return [ {
          id: "vixsrc",
          name: "VixSrc"
        }, ...t.length ? [ {
          id: "supaplay",
          name: "SupaPlay \xb7 MovieBox",
          url: t[0]
        } ] : [], {
          id: "nhd",
          name: "NHD",
          url: "https://nhdapi.com/movie/" + e.id
        }, {
          id: "rive",
          name: "Rive",
          url: "https://watch.rivestream.app/embed?type=movie&id=" + e.id
        }, {
          id: "framextv",
          name: "FrameXTV",
          url: "https://framextv.tech/embed/" + e.id
        } ];
      }(e), n = "episode" === e.kind ? "tv" : "movie";
      return [ ..."tv" === e.kind ? [] : "episode" === e.kind ? _n(n, e.tmdbSeriesId, e.sourceSeason, e.sourceEpisode) : _n(n, e.id), ...t ].map(e => e.url ? {
        ...e,
        proxy: !0
      } : e);
    }(a));
    let o = z ? {
      time: z.currentTime,
      volume: z.volume,
      muted: z.muted
    } : null;
    J();
    const i = q;
    R = {}, B = "", j(), U(!0), e("detail").close(), e("watch-area").hidden = !1, document.body.classList.add("movie-playing"), 
    document.querySelectorAll("main>header,main>#browse,main>footer").forEach(e => e.inert = !0), 
    e("watch-title").textContent = a.title, e("watch-area").focus(), L(), t = t || n("nyx.movies.preferredSource", "");
    const s = P.some(e => e.id === t) ? P.filter(e => e.id === t).concat(P.filter(e => e.id !== t)) : P;
    let l = !1, c = !1;
    await async function t(n) {
      if (i !== q) return;
      if (X(), clearTimeout(r), _?.abort(), W?.destroy(), W = null, z && (z.pause(), z.removeAttribute("src"), 
      z.load()), O && (fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/playback/" + encodeURIComponent(O), {
        method: "DELETE",
        keepalive: !0
      }).catch(() => {}), O = ""), e("player").replaceChildren(), z = null, e("watch-area").classList.remove("external-playback"), 
      e("watch-area").insertBefore(document.querySelector(".playback-controls"), e("episode-picker")), 
      n >= s.length && !l && s.some(e => e.proxy)) return l = !0, c = !0, R = {}, j(), 
      U(!0), e("player-status").textContent = "Reconnecting to Nyx?", t(0);
      if (n >= s.length) return z = null, B = "", j(), U(!0), e("player-status").textContent = "No source could start this movie. Try again shortly.", 
      void (e("retry-player").hidden = !1);
      const d = s[n];
      B = d.id, R[d.id] = "Checking", j(), U(!0);
      const u = _ = new AbortController;
      let p = !1, m = !1, h = !1;
      const y = () => i === q && _ === u && !u.signal.aborted;
      if (d.url) {
        const i = document.createElement("iframe");
        i.title = a.title + " \u2014 " + d.name, i.sandbox = "allow-scripts allow-same-origin allow-forms allow-presentation", 
        i.allow = "autoplay; fullscreen; picture-in-picture", i.referrerPolicy = "strict-origin-when-cross-origin", 
        i.allowFullscreen = !0, d.proxy ? (e("watch-area").classList.add("proxy-playback"), 
        Y(!1), e("seek").disabled = !0, e("seek").value = 0, e("seek").style.setProperty("--played", "0%"), 
        e("seek").style.setProperty("--buffered", "0%"), e("playback-time").textContent = "0:00 / 0:00", 
        ie(e("toggle-play"), "play"), e("toggle-play").setAttribute("aria-label", "Play"), 
        e("picture-in-picture").hidden = !0, e("start-proxy").hidden = !0, e("proxy-loading").hidden = !1, 
        V = async () => {
          if (y() && !h) {
            h = !0, clearTimeout(r), r = setTimeout(l, 3e4);
            try {
              e("start-proxy").hidden = !0, e("proxy-loading").hidden = !1, U(!0), e("player-status").textContent = "Starting video...", 
              await Qn(i);
            } catch {
              y() && l();
            }
          }
        }) : (e("watch-area").classList.add("external-playback"), document.querySelector(".watch-header").insertBefore(document.querySelector(".playback-controls"), document.querySelector(".watch-brand"))), 
        e("player").append(i), e("player-status").textContent = "Loading player\u2026", 
        e("retry-player").hidden = !0;
        let s = null;
        const l = () => {
          y() && !p && (p = !0, H(a, d.id, {
            failed: !0
          }), R[d.id] = "Unavailable", j(), t(n + 1));
        }, f = t => {
          if (Number.isFinite(t) && !(t < 0)) {
            if (null !== s && t > s + .1) {
              const t = "Playing" !== R[d.id];
              m || U(!1), m = !0, e("retry-player").hidden = !0, H(a, d.id, {
                played: !0,
                failed: !1
              }), clearTimeout(r), R[d.id] = "Playing", e("player-status").textContent = "", t && j();
            }
            s = t;
          }
        }, v = e => {
          if (!y() || e.source !== i.contentWindow || e.origin !== new URL(d.url).origin) return;
          let t = e.data;
          if ("string" == typeof t) {
            if (t.length > 1e4) return;
            try {
              t = JSON.parse(t);
            } catch {
              return;
            }
          }
          t && "object" == typeof t && ("timeUpdate" !== t.type && "watching-log" !== t.type || f(t.currentTime), 
          "framextv" === d.id && "frameXTV:timeupdate" === t.event && f(t.currentTime), [ "animex", "aniembed" ].includes(d.id) && "aniembed" === t.source && 1 === t.version && "event" === t.type && "progress" === t.name && f(t.data?.currentTime), 
          "aniembed" === d.id && "aniembed" === t.source && 1 === t.version && "event" === t.type && "error" === t.name && l(), 
          [ "kisskh", "megacloud" ].includes(t.channel) && "time" === t.event && f(t.currentTime ?? t.time), 
          "pause" === t.type && m && (R[d.id] = "Paused", j()), ("error" === t.type || [ "kisskh", "megacloud" ].includes(t.channel) && "error" === t.event) && l());
        };
        if (addEventListener("message", v), u.signal.addEventListener("abort", () => removeEventListener("message", v), {
          once: !0
        }), i.addEventListener("load", () => {
          y() && !m && (R[d.id] = d.proxy ? "Loading video" : "Player loaded", j(), e("player-status").textContent = "");
        }), i.addEventListener("error", l), d.proxy) {
          r = setTimeout(l, 3e4);
          try {
            const e = c;
            if (c = !1, await Zn(i, d.url, u.signal, {
              recover: e
            }), !y()) return void i.remove();
          } catch {
            return void (y() && l());
          }
          const t = setInterval(() => {
            if (!y()) return;
            const t = Xn(i);
            if (!t.video) {
              const n = !h && !t.failed && ia(i), a = n && e("start-proxy").hidden;
              e("start-proxy").hidden = !n, e("proxy-loading").hidden = n, n && (clearTimeout(r), 
              e("player-status").textContent = "Press Play to start the movie."), a && U(!1);
            }
            if (t.video && t.video !== z) try {
              K?.(), Z?.(), K = Yn(t.video, t.frames), z = t.video, Z = ue(z), e("watch-area").classList.add("proxy-ready"), 
              e("proxy-loading").hidden = !0, e("start-proxy").hidden = !0, e("player-status").textContent = "", 
              o && (z.volume = o.volume, z.muted = o.muted, Number.isFinite(z.duration) && (z.currentTime = Math.min(o.time, z.duration)), 
              o = null);
            } catch {
              return void l();
            }
            Number.isFinite(t.time) ? (t.paused || f(t.time), H(a, d.id, {
              width: t.width,
              height: t.height
            })) : z && !z.isConnected && (K?.(), Z?.(), K = null, Z = null, z = null, Y(!1), 
            e("watch-area").classList.remove("proxy-ready"), e("start-proxy").hidden = !1), 
            t.failed && l();
          }, 1e3);
          u.signal.addEventListener("abort", () => clearInterval(t), {
            once: !0
          });
        } else i.src = d.url;
        return void (d.proxy || (r = setTimeout(() => {
          if (y() && !m) {
            if ("aniembed" === d.id || d.proxy && !z) return void l();
            e("player-status").textContent = "Use the player\u2019s Play button. If it cannot start, choose another source or reload.", 
            e("retry-player").hidden = !1;
          }
        }, 45e3)));
      }
      const f = z = document.createElement("video");
      f.controls = !1, f.playsInline = !0, f.preload = "metadata", f.setAttribute("aria-label", a.title + " video player");
      const v = document.createElement("div");
      v.className = "player-loading", v.setAttribute("aria-hidden", "true");
      const g = document.createElement("span");
      g.className = "spinner", v.append(g), e("player").append(f, v), e("player-status").textContent = "", 
      e("retry-player").hidden = !0, ue(f);
      const b = () => {
        y() && !p && (p = !0, H(a, d.id, {
          failed: !0
        }), m && (o = {
          time: f.currentTime,
          volume: f.volume,
          muted: f.muted
        }), clearTimeout(r), R[d.id] = "Unavailable", j(), U(!0), t(n + 1));
      };
      let x = 0;
      const k = () => {
        y() && !f.paused && (!m || f.seeking || x || (x = performance.now()), v.hidden = !1, 
        e("player-status").textContent = "Buffering...");
      };
      f.addEventListener("waiting", k), f.addEventListener("stalled", k), f.addEventListener("playing", () => {
        y() && (x && performance.now() - x > 1500 && H(a, d.id, {
          stalls: (F(a, d.id).stalls || 0) + 1
        }), x = 0, clearTimeout(r), e("retry-player").hidden = !0, v.hidden = !0, e("player-status").textContent = "");
      });
      let w = o?.time || 0;
      f.addEventListener("timeupdate", () => {
        if (y() && !f.paused && !f.seeking && f.videoWidth > 0 && f.currentTime > w + .2) {
          const e = F(a, d.id);
          H(a, d.id, {
            played: !0,
            failed: !1,
            width: f.videoWidth,
            height: f.videoHeight
          });
          const t = e.width !== f.videoWidth || e.height !== f.videoHeight;
          m ? t && j() : (m = !0, R[d.id] = "Playing", j(), U(!1)), w = f.currentTime;
        }
      }), f.addEventListener("pause", () => {
        y() && (v.hidden = !0, m && (R[d.id] = "Paused", j()));
      }), f.addEventListener("play", () => {
        y() && m && (R[d.id] = "Playing", j());
      }), f.addEventListener("error", b);
      try {
        const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/" + a.id + "/playback?provider=" + d.id, {
          method: "POST",
          signal: u.signal
        }), n = await t.json();
        if (!t.ok) throw Error("Source unavailable");
        if (!/^\/api\/movies\/media\/[A-Za-z0-9_-]+\/\d+$/.test(n.url)) throw Error("Invalid source");
        if (!y()) return void fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/movies/playback/" + n.url.split("/")[4], {
          method: "DELETE",
          keepalive: !0
        }).catch(() => {});
        O = n.url.split("/")[4], R[d.id] = "Loading video", j();
        const i = () => {
          y() && (o && (f.currentTime = o.time || 0, f.volume = o.volume, f.muted = o.muted), 
          f.play().catch(() => {
            y() && (clearTimeout(r), v.hidden = !0, R[d.id] = "Ready \u2014 press Play", j(), 
            U(!1), e("player-status").textContent = "Press Play to start the movie.");
          }));
        };
        if (r = setTimeout(b, 3e4), window.Hls?.isSupported()) {
          const e = W = new Hls({
            maxBufferLength: 12,
            maxMaxBufferLength: 24,
            backBufferLength: 12,
            maxBufferSize: 25165824,
            capLevelToPlayerSize: !0,
            startLevel: -1
          });
          e.on(Hls.Events.MANIFEST_PARSED, () => {
            y() && (me(), i());
          }), e.on(Hls.Events.AUDIO_TRACKS_UPDATED, () => {
            if (!y()) return;
            const t = e.audioTracks.findIndex(e => /^(en|eng)$/i.test(e.lang || "") || /english/i.test(e.name || ""));
            t >= 0 && (e.audioTrack = t), me();
          }), e.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, () => {
            y() && me();
          }), e.on(Hls.Events.ERROR, (e, t) => {
            t.fatal && b();
          }), e.loadSource(n.url), e.attachMedia(f);
        } else f.canPlayType("application/vnd.apple.mpegurl") ? (f.src = n.url, f.addEventListener("loadedmetadata", i, {
          once: !0
        })) : (clearTimeout(r), v.hidden = !0, U(!1), e("player-status").textContent = "This browser does not support this video player.");
      } catch {
        y() && b();
      }
    }(0);
  }
  async function ae(t, n, a, o) {
    const i = document.createElement("form");
    i.className = "episode-form";
    let r = 0;
    const s = document.createElement("select"), l = document.createElement("select"), c = document.createElement("button"), d = document.createElement("p");
    d.setAttribute("role", "status"), c.type = "submit", c.className = "icon-control", 
    c.setAttribute("aria-label", "Play selected episode"), c.title = "Play selected episode", 
    ie(c, "play");
    for (const [e, u] of [ [ "Season", s ], [ "Episode", l ] ]) {
      const t = document.createElement("label");
      t.textContent = e, t.append(u), i.append(t);
    }
    i.append(c, d), t.replaceChildren(i);
    for (const e of n.seasons || []) {
      const t = document.createElement("option");
      t.value = e.number, t.textContent = e.name || "Season " + e.number, s.append(t);
    }
    const p = (n.seasons || []).some(e => e.number === Number(a)) ? Number(a) : (n.seasons || []).find(e => e.number > 0)?.number ?? n.seasons?.[0]?.number;
    if (void 0 === p) return d.textContent = "No episodes are listed yet.", void (c.disabled = s.disabled = l.disabled = !0);
    async function m() {
      const e = ++r;
      l.replaceChildren(), l.disabled = c.disabled = !0, d.textContent = "Loading episodes\u2026";
      try {
        const a = await u("tv/" + n.id + "/season/" + s.value);
        if (e !== r || !t.contains(i)) return;
        for (const e of a.episodes) {
          const t = document.createElement("option");
          t.value = e.number, t.textContent = e.number + ". " + e.name, l.append(t);
        }
        [ ...l.options ].some(e => e.value === String(o)) && (l.value = String(o)), o = null, 
        d.textContent = a.episodes.length ? "" : "No episodes are listed yet.", c.disabled = l.disabled = !a.episodes.length, 
        ie(c, "play");
      } catch (a) {
        if (e !== r) return;
        d.textContent = a.message, c.disabled = !1, ie(c, "reload");
      }
    }
    s.value = String(p), s.onchange = m, i.onsubmit = t => {
      if (t.preventDefault(), !l.value) return void m();
      e("episode-picker").hidden = !0, e("choose-episodes").setAttribute("aria-expanded", "false");
      const a = "#watch=" + n.id + "/" + s.value + "/" + l.value;
      location.hash === a ? ne() : location.hash = a;
    }, await m();
  }
  e("detail").addEventListener("cancel", e => {
    e.preventDefault(), location.hash = "";
  }), e("detail").addEventListener("click", t => {
    if (t.target === e("detail")) {
      const n = e("detail").getBoundingClientRect();
      (t.clientX < n.left || t.clientX > n.right || t.clientY < n.top || t.clientY > n.bottom) && (location.hash = "");
    }
  }), e("choose-source").onclick = () => U(e("sources-panel").hidden), e("auto-source").onclick = () => {
    try {
      localStorage.removeItem("nyx.movies.preferredSource");
    } catch {}
    ne();
  }, e("close-sources").onclick = () => {
    U(!1), e("choose-source").focus();
  }, e("choose-episodes").onclick = async () => {
    const t = e("episode-picker").hidden;
    if (e("episode-picker").hidden = !t, e("choose-episodes").setAttribute("aria-expanded", String(t)), 
    !t) return;
    U(!1), e("settings-panel").hidden = !0;
    const n = d;
    e("watch-episode-fields").textContent = "Loading seasons\u2026";
    try {
      const t = await u("tv/" + n.tmdbSeriesId);
      if (d !== n || e("episode-picker").hidden) return;
      await ae(e("watch-episode-fields"), t, n.season, n.episode);
    } catch (a) {
      e("watch-episode-fields").textContent = a.message;
    }
  }, e("close-episodes").onclick = () => {
    e("episode-picker").hidden = !0, e("choose-episodes").setAttribute("aria-expanded", "false"), 
    e("choose-episodes").focus();
  };
  const oe = {
    episodes: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M3 9h5M3 15h5m4-6h5m-5 6h5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    next: '<path d="m9 5 7 7-7 7"/>',
    previous: '<path d="m15 5-7 7 7 7"/>',
    reload: '<path d="M20 7v5h-5M20 12a8 8 0 1 0-2 5"/>',
    sources: '<path d="m12 3 9 5-9 5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.5"/>',
    home: '<path d="m3 10 9-7 9 7v11h-7v-7h-4v7H3Z"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    back: '<path d="M20 12H4m7-7-7 7 7 7"/>',
    rewind: '<path d="M6.35 7.35A8 8 0 1 1 4 13M6.35 3.5v3.85h3.85"/><text x="12" y="13.5" text-anchor="middle" dominant-baseline="central" stroke="none" fill="currentColor" font-family="Arial, sans-serif" font-weight="600" font-size="8">10</text>',
    forward: '<path d="M17.65 7.35A8 8 0 1 0 20 13M17.65 3.5v3.85H13.8"/><text x="12" y="13.5" text-anchor="middle" dominant-baseline="central" stroke="none" fill="currentColor" font-family="Arial, sans-serif" font-weight="600" font-size="8">10</text>',
    volume: '<path d="M11 5 6 9H3v6h3l5 4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    muted: '<path d="M11 5 6 9H3v6h3l5 4Zm5 4 5 6m0-6-5 6"/>',
    pip: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 12h6v4h-6Z"/>',
    fullscreen: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
    settings: '<path d="m9 3-.6 3-2.6 1.5L3 7l-1 3 2.2 2L4 15l-1 2 2.5 2 2.5-1 3 1 1 2 3-.5.5-2.5 2.5-2 3 .2.8-3-2-2 .2-3 1-2L18 4l-2.5 1-3-1-1-2Z"/><circle cx="12" cy="12" r="3"/>'
  };
  function ie(e, t) {
    e.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + oe[t] + "</svg>";
  }
  document.querySelectorAll("[data-icon]").forEach(e => ie(e, e.dataset.icon));
  for (const [ye, fe, ve] of [ [ "#featured-open", "info", "View movie details" ], [ "#watch", "play", "Play movie" ], [ "#search button", "search", "Search movies" ], [ "#clear-search", "close", "Clear search" ], [ "#retry-search", "reload", "Retry movie search" ], [ "#retry-detail", "reload", "Retry movie details" ], [ "#retry-player", "reload", "Reload player" ], [ "#previous", "previous", "Previous page" ], [ "#next", "next", "Next page" ], [ "#choose-source", "sources", "Video sources" ], [ ".home-link", "home", "Back to Nyx" ] ]) {
    const e = document.querySelector(ye);
    e.classList.add("icon-control"), e.setAttribute("aria-label", ve), e.title = ve, 
    ie(e, fe);
  }
  document.querySelectorAll("button[aria-label]").forEach(e => e.title = e.getAttribute("aria-label"));
  const re = e => {
    const t = Math.max(0, Math.floor(Number.isFinite(e) ? e : 0));
    return (t >= 3600 ? Math.floor(t / 3600) + ":" : "") + String(Math.floor(t / 60) % 60).padStart(t >= 3600 ? 2 : 1, "0") + ":" + String(t % 60).padStart(2, "0");
  };
  function se() {
    const t = z;
    t ? t.paused ? t.play().catch(() => {
      e("player-status").textContent = "Unable to start playback. Try reloading the player.", 
      e("retry-player").hidden = !1;
    }) : t.pause() : V?.();
  }
  function le(e) {
    const t = z;
    t && Number.isFinite(t.duration) && (t.currentTime = Math.max(0, Math.min(t.duration, t.currentTime + e)));
  }
  let ce = 0;
  function de() {
    clearTimeout(ce);
    const t = e("watch-area");
    t.classList.remove("controls-idle"), t.hidden || (ce = setTimeout(() => {
      const n = [ "settings-panel", "sources-panel", "episode-picker" ].some(t => !e(t).hidden), a = t.querySelector(":focus-visible");
      t.hidden || !z || z.paused || z.ended || n || a || t.classList.add("controls-idle");
    }, 1e3));
  }
  for (const ye of [ "pointermove", "pointerdown", "keydown", "focusin" ]) e("watch-area").addEventListener(ye, de);
  function ue(t) {
    Y(!0);
    const n = () => {
      if (t !== z) return;
      const n = Number.isFinite(t.duration) ? t.duration : 0;
      e("seek").disabled = !n, e("seek").max = n || 100, e("seek").value = t.currentTime || 0, 
      e("seek").setAttribute("aria-valuetext", re(t.currentTime) + " of " + re(n));
      let a = 0;
      for (let e = 0; e < t.buffered.length; e++) t.buffered.start(e) <= t.currentTime + .5 && (a = Math.max(a, t.buffered.end(e)));
      e("seek").style.setProperty("--played", n ? t.currentTime / n * 100 + "%" : "0%"), 
      e("seek").style.setProperty("--buffered", n ? a / n * 100 + "%" : "0%"), e("playback-time").textContent = re(t.currentTime) + " / " + re(n), 
      ie(e("toggle-play"), t.paused ? "play" : "pause"), e("toggle-play").setAttribute("aria-label", t.paused ? "Play" : "Pause"), 
      ie(e("mute"), t.muted || !t.volume ? "muted" : "volume"), e("mute").setAttribute("aria-label", t.muted ? "Unmute" : "Mute"), 
      e("volume").value = t.muted ? 0 : t.volume;
    }, a = [ "loadedmetadata", "durationchange", "seeking", "seeked", "timeupdate", "progress", "play", "pause", "ended", "volumechange" ];
    for (const e of a) t.addEventListener(e, n);
    const o = [ "play", "pause", "ended" ];
    for (const e of o) t.addEventListener(e, de);
    de();
    const i = t.onclick, r = t.ondblclick;
    return t.onclick = se, t.ondblclick = he, e("playback-speed").value = "1", me(), 
    n(), e("picture-in-picture").hidden = !document.pictureInPictureEnabled || !t.requestPictureInPicture, 
    e("fullscreen").hidden = !document.fullscreenEnabled, () => {
      clearTimeout(ce);
      for (const e of o) t.removeEventListener(e, de);
      for (const e of a) t.removeEventListener(e, n);
      t.onclick = i, t.ondblclick = r;
    };
  }
  function pe(t, n, a) {
    const o = e(t);
    o.replaceChildren(...n.map(([e, t]) => {
      const n = document.createElement("option");
      return n.value = e, n.textContent = t, n;
    })), o.value = String(a), o.disabled = n.length < 2;
  }
  function me() {
    const e = W?.levels || [], t = W?.audioTracks || [], n = W?.subtitleTracks || [];
    pe("playback-quality", W ? [ [ -1, "Auto" ], ...e.map((e, t) => [ t, e.height ? e.height + "p" : Math.round(e.bitrate / 1e3) + " kbps" ]) ] : [ [ -1, z?.videoHeight ? z.videoHeight + "p" : "Source default" ] ], W?.currentLevel ?? -1), 
    pe("playback-audio", t.length ? t.map((e, t) => [ t, e.name || e.lang || "Track " + (t + 1) ]) : [ [ -1, "Default" ] ], W?.audioTrack ?? -1);
    const a = W ? n : [ ...z?.textTracks || [] ];
    pe("playback-subtitles", [ [ -1, "Off" ], ...a.map((e, t) => [ t, e.name || e.label || e.lang || e.language || "Track " + (t + 1) ]) ], W ? W.subtitleTrack : a.findIndex(e => "showing" === e.mode));
  }
  async function he() {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : await e("watch-area").requestFullscreen();
    } catch {
      e("player-status").textContent = "Fullscreen is unavailable in this browser.";
    }
  }
  e("start-proxy").onclick = () => {
    V?.();
  }, e("player").onclick = () => {
    e("watch-area").classList.contains("proxy-ready") && se();
  }, e("toggle-play").onclick = se, e("skip-back").onclick = () => le(-10), e("skip-forward").onclick = () => le(10), 
  e("seek").oninput = () => {
    z && Number.isFinite(z.duration) && (z.currentTime = Number(e("seek").value));
  }, e("mute").onclick = () => {
    z && (z.muted = !z.muted);
  }, e("volume").oninput = () => {
    z && (z.volume = Number(e("volume").value), z.muted = !1);
  }, e("player-settings").onclick = () => {
    e("settings-panel").hidden = !e("settings-panel").hidden, e("player-settings").setAttribute("aria-expanded", String(!e("settings-panel").hidden));
  }, e("playback-speed").onchange = () => {
    z && (z.playbackRate = Number(e("playback-speed").value));
  }, e("playback-quality").onchange = () => {
    W && (W.currentLevel = Number(e("playback-quality").value));
  }, e("playback-audio").onchange = () => {
    W && (W.audioTrack = Number(e("playback-audio").value));
  }, e("playback-subtitles").onchange = () => {
    W ? (W.subtitleTrack = Number(e("playback-subtitles").value), W.subtitleDisplay = W.subtitleTrack >= 0) : z && [ ...z.textTracks ].forEach((t, n) => t.mode = n === Number(e("playback-subtitles").value) ? "showing" : "disabled");
  }, e("fullscreen").onclick = he, e("picture-in-picture").onclick = async () => {
    try {
      document.pictureInPictureElement ? await document.exitPictureInPicture() : await (z?.requestPictureInPicture());
    } catch {
      e("player-status").textContent = "Picture in picture is unavailable for this video.";
    }
  }, e("watch-area").addEventListener("keydown", t => {
    if (t.target.closest("input,select") || t.ctrlKey || t.altKey || t.metaKey) return;
    if ("Escape" === t.key) return void (e("episode-picker").hidden ? e("sources-panel").hidden ? e("settings-panel").hidden ? document.fullscreenElement || e("close-player").click() : (e("settings-panel").hidden = !0, 
    e("player-settings").setAttribute("aria-expanded", "false"), e("player-settings").focus()) : (U(!1), 
    e("choose-source").focus()) : e("close-episodes").click());
    if (t.target.closest("button,a") && " " === t.key) return;
    const n = {
      " ": se,
      k: se,
      ArrowLeft: () => le(-10),
      ArrowRight: () => le(10),
      m: () => e("mute").click(),
      f: he
    }[t.key];
    n && (t.preventDefault(), n());
  }), addEventListener("fullscreenchange", () => {
    e("fullscreen").setAttribute("aria-label", document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen");
  }), e("retry-detail").onclick = te, e("retry-search").onclick = M, e("clear-search").onclick = () => {
    s = "", e("query").value = "", l = 1, M();
  }, e("search").onsubmit = t => {
    t.preventDefault(), s = e("query").value.trim(), l = 1, M();
  }, e("previous").onclick = () => {
    l--, M();
  }, e("next").onclick = () => {
    l++, M();
  }, e("back").onclick = () => location.hash = "", e("watch").onclick = () => ne(), 
  e("retry-player").onclick = () => ne(), e("close-player").onclick = () => {
    const t = d?.tmdbSeriesId;
    J(), t ? location.hash = "tv=" + t : (G(), e("watch").focus());
  }, addEventListener("hashchange", te), addEventListener("pagehide", () => {
    clearTimeout(g), J(), o?.abort(), i?.abort();
  }), M(), te();
})();
