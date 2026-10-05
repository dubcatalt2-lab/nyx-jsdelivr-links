(() => {
  "use strict";
  const e = document.body.classList.contains("drop-tube"), t = t => !e || !t?.isShort && !/\/shorts\//i.test(t?.sourceUrl || ""), a = e => (Array.isArray(e) ? e : []).filter(t), n = e => document.querySelector(e), r = e => [ ...document.querySelectorAll(e) ], o = Object.fromEntries(r("[data-view]").map(e => [ e.dataset.view, e ])), i = {
    nativeAvailable: !1,
    invidiousEmbedOrigin: "",
    watchGeneration: 0,
    preferredPlayer: "native",
    view: "home",
    videos: [],
    catalog: [],
    shorts: [],
    shortIndex: 0,
    watchPlayer: null,
    shortPlayer: null,
    watchTimer: 0,
    shortTimer: 0,
    watchVideo: null,
    watchCaptions: !1,
    shortCaptions: !1,
    shortMuted: !0,
    channel: null,
    watchTrail: [],
    failedVideoIds: new Set,
    failedShortIds: new Set,
    watchRecoveryTimer: 0,
    watchSpaceTimer: 0,
    watchSpacePressed: !1,
    watchSpaceHeld: !1,
    watchSpaceWasPlaying: !1,
    watchSpacePreviousRate: 1,
    watchSpaceRateChanged: !1,
    watchCommunityRequestId: 0,
    profile: {
      uid: "",
      signedIn: !1,
      displayName: "Profile",
      avatarUrl: ""
    },
    profileRequestId: "",
    profileRetryTimer: 0,
    profileRetryCount: 0,
    profileResolved: !1
  }, s = Object.fromEntries([ "notice", "search-form", "search-input", "feed-title", "result-count", "video-grid", "watch-stage", "watch-player", "watch-loading", "watch-center-play", "watch-toggle", "watch-time", "watch-mute", "watch-captions", "watch-caption-option", "watch-fullscreen", "watch-progress", "watch-title", "watch-creator", "watch-video-meta", "watch-channel-mark", "watch-source", "watch-description", "watch-related", "short-stage", "short-player", "short-loading", "short-center-play", "short-mute", "short-captions", "short-fullscreen", "short-progress", "short-title", "short-creator", "profile-button", "profile-avatar", "short-search-form", "short-search-input", "short-feed-label", "short-preferences-status", "short-hide-channel", "short-dislike", "short-reset", "short-heart", "short-menu", "short-empty", "short-empty-title", "short-retry", "watch-quality", "watch-engine", "watch-settings", "watch-settings-menu", "watch-speed", "watch-volume", "watch-settings-captions", "watch-rewind", "watch-forward", "watch-speed-indicator", "watch-views", "watch-likes", "watch-comments-count", "watch-tab-comments-count", "watch-comments-status", "watch-comments", "watch-transcript-status", "watch-transcript", "channel-back", "channel-profile", "channel-avatar", "channel-title", "channel-handle", "channel-description", "channel-subscribers", "channel-videos", "channel-status" ].map(e => [ e.replace(/-([a-z])/g, (e, t) => t.toUpperCase()), n(`[data-${e}]`) ]));
  function c() {
    if ("tutsi" === document.documentElement.dataset.appShell) return;
    if (e) return;
    const t = document.documentElement, a = [ "default", "midnight", "ruby", "emerald", "sakura", "fresh", "halloween", "custom" ];
    try {
      const e = localStorage.getItem("nyx.theme") || "default", n = a.includes(e) ? e : "default";
      t.dataset.nyxTheme = n, t.dataset.nyxAppearance = "light" === localStorage.getItem("nyx.appearance") ? "light" : "dark", 
      document.body.classList.remove(...a.map(e => `theme-${e}`)), document.body.classList.add(`theme-${n}`);
      const r = localStorage.getItem("nyx.customThemeColor");
      "custom" === n && /^#[a-f0-9]{6}$/i.test(r || "") ? t.style.setProperty("--nyx-custom-base", r) : t.style.removeProperty("--nyx-custom-base");
    } catch {}
  }
  s.watchBackup = document.createElement("button"), s.watchBackup.type = "button", 
  s.watchBackup.textContent = "Invidious", s.watchBackup.dataset.watchBackup = "", 
  s.watchBackup.hidden = !0, s.watchBackup.title = "Use the Invidious player", s.watchEngine.after(s.watchBackup), 
  addEventListener("storage", e => {
    [ "nyx.theme", "nyx.appearance", "nyx.customThemeColor" ].includes(e.key) && c();
  }), addEventListener("message", e => {
    e.source === parent && e.origin === location.origin && "nyx:theme-sync" === e.data?.type && c();
  });
  const d = e => `<svg aria-hidden="true"><use href="#${e}"></use></svg>`;
  function l(t = "") {
    s.notice.textContent = e ? String(t).replace(/NyxTube/g, "DropTube") : t, s.notice.hidden = !t;
  }
  async function h(e, t) {
    const a = await fetch(e, {
      credentials: "same-origin",
      headers: {
        Accept: "application/json"
      },
      signal: t
    });
    let n = null;
    try {
      n = await a.json();
    } catch {}
    if (!a.ok) throw Object.assign(new Error(n?.error || `Request failed (${a.status})`), {
      status: a.status
    });
    return n;
  }
  function u(e) {
    const t = Math.max(0, Math.floor(Number(e) || 0)), a = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), r = t % 60;
    return a ? `${a}:${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}` : `${n}:${String(r).padStart(2, "0")}`;
  }
  function p(e) {
    const t = Number(e) || 0;
    return t >= 1e9 ? `${(t / 1e9).toFixed(t >= 1e10 ? 0 : 1)}B views` : t >= 1e6 ? `${(t / 1e6).toFixed(t >= 1e7 ? 0 : 1)}M views` : t >= 1e3 ? `${(t / 1e3).toFixed(t >= 1e4 ? 0 : 1)}K views` : t ? `${t.toLocaleString()} views` : "YouTube";
  }
  function w(e) {
    const t = new Date(e || "");
    return Number.isNaN(t.getTime()) ? "" : t.toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  const m = e => null == e ? "Unavailable" : Math.max(0, Number(e) || 0).toLocaleString();
  function y() {
    clearTimeout(i.profileRetryTimer), i.profileResolved = !1, i.profileRequestId = `nyxtube-profile-${Date.now()}-${Math.random().toString(16).slice(2)}`, 
    parent.postMessage({
      type: "nyx:nyxtube-profile-request",
      requestId: i.profileRequestId
    }, location.origin), i.profileRetryTimer = setTimeout(() => {
      i.profileResolved || 0 !== i.profileRetryCount++ || y();
    }, 700);
  }
  function v() {
    s.videoGrid.replaceChildren(...Array.from({
      length: 8
    }, () => {
      const e = document.createElement("article");
      return e.className = "video-card skeleton", e.innerHTML = '<div class="video-cover"></div><b></b><i></i>', 
      e;
    }));
  }
  function g(e) {
    i.videos = a(e);
    const t = new Map(i.catalog.map(e => [ e.id, e ]));
    if (i.videos.forEach(e => {
      e?.id && t.set(e.id, e);
    }), i.catalog = [ ...t.values() ].slice(-60), s.resultCount.textContent = `${i.videos.length} video${1 === i.videos.length ? "" : "s"}`, 
    !i.videos.length) {
      const e = document.createElement("p");
      return e.className = "empty-grid", e.textContent = "No playable videos were found.", 
      void s.videoGrid.replaceChildren(e);
    }
    s.videoGrid.replaceChildren(...i.videos.map(e => {
      const t = document.createElement("article");
      t.className = "video-card";
      const a = document.createElement("button");
      a.className = "video-cover", a.type = "button", a.setAttribute("aria-label", `Play ${e.title || "video"}`);
      const n = document.createElement("img");
      n.alt = "", n.loading = "lazy", n.referrerPolicy = "no-referrer", n.src = e.thumbnail || "", 
      n.addEventListener("error", () => n.remove());
      const r = document.createElement("span");
      r.className = "fallback", r.innerHTML = d("icon-play");
      const o = document.createElement("span");
      o.className = "duration", o.textContent = u(e.durationSeconds), a.append(n, r, o), 
      a.addEventListener("click", () => M(e));
      const i = document.createElement("div");
      i.className = "card-copy";
      const s = document.createElement("strong");
      s.textContent = e.title || "Untitled video";
      const c = document.createElement("span");
      return c.textContent = `${e.creator || "YouTube"} \xb7 ${p(e.viewCount)}`, i.append(s, c), 
      t.append(a, i), t;
    }));
  }
  let f = 0, b = null;
  async function S(e = "") {
    const t = ++f;
    b?.abort(), b = new AbortController;
    const {signal: a} = b;
    l(), v(), s.resultCount.textContent = "Loading...", s.feedTitle.textContent = e ? `Results for \u201c${e}\u201d` : "Discover videos", 
    s.videoGrid.setAttribute("aria-busy", "true");
    try {
      const n = e ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/search?q=${encodeURIComponent(e)}&limit=20` : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/feed?limit=20", r = await h(n, a);
      t === f && g(r?.videos);
    } catch (n) {
      if (a.aborted || t !== f) return;
      g([]), l(n.message || "Videos could not be loaded.");
    } finally {
      t === f && s.videoGrid.setAttribute("aria-busy", "false");
    }
  }
  function C(t) {
    e && "shorts" === t && (t = "home"), i.view = t, document.body.dataset.tubeView = t, 
    s.shortMenu && (s.shortMenu.open = !1), Object.entries(o).forEach(([e, a]) => {
      a.hidden = e !== t;
    }), r("[data-view-button]").forEach(e => e.classList.toggle("active", e.dataset.viewButton === ("watch" === t ? "home" : t))), 
    "watch" !== t && O(), "shorts" !== t && $e(), scrollTo({
      top: 0,
      behavior: "shorts" === t ? "instant" : "smooth"
    });
  }
  const P = window.NyxTubePlayerCore.createDirectYoutubeApi({
    optimisticState: !0
  });
  let E;
  function x() {
    return window.YT?.Player ? Promise.resolve(window.YT) : E || (E = new Promise(e => {
      const t = window.onYouTubeIframeAPIReady;
      let a, n = !1;
      const r = t => {
        n || (n = !0, clearTimeout(i), e(t));
      }, o = () => {
        a?.remove(), r(P);
      }, i = setTimeout(o, 5e3);
      window.onYouTubeIframeAPIReady = () => {
        t?.(), r(window.YT?.Player ? window.YT : P);
      }, a = document.createElement("script"), a.src = "https://www.youtube.com/iframe_api", 
      a.async = !0, a.addEventListener("error", o, {
        once: !0
      }), document.head.append(a);
    }), E);
  }
  function L(e, t = !1) {
    return {
      width: "100%",
      height: "100%",
      videoId: e,
      host: "https://www.youtube-nocookie.com",
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        origin: location.origin,
        ...t ? {
          mute: 1
        } : {}
      }
    };
  }
  const T = e => e && "function" == typeof e.getPlayerState;
  function k() {
    s.watchSettingsMenu.hidden = !0, s.watchSettings.setAttribute("aria-expanded", "false");
  }
  async function I() {
    const e = String(i.watchVideo?.channelId || "").trim();
    if (/^UC[A-Za-z0-9_-]{22}$/.test(e)) {
      C("channel"), s.channelStatus.textContent = "Loading profile...", s.channelVideos.replaceChildren();
      try {
        const t = await h(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/channel?id=${encodeURIComponent(e)}`);
        if ("channel" !== i.view || String(i.watchVideo?.channelId || "") !== e) return;
        const n = t?.channel || {};
        s.channelTitle.textContent = n.title || i.watchVideo?.creator || "YouTube channel", 
        s.channelHandle.textContent = n.handle || "YouTube", s.channelDescription.textContent = n.description || "This creator has not shared a channel description.", 
        s.channelSubscribers.textContent = m(n.subscriberCount), s.channelVideos.textContent = m(n.videoCount);
        const r = String(n.avatarUrl || i.watchVideo?.channelAvatar || "").trim();
        if (s.channelAvatar.replaceChildren(), r) {
          const e = document.createElement("img");
          e.alt = "", e.src = r, e.referrerPolicy = "no-referrer", e.addEventListener("error", () => {
            s.channelAvatar.textContent = s.channelTitle.textContent.slice(0, 1).toUpperCase();
          }, {
            once: !0
          }), s.channelAvatar.append(e);
        } else s.channelAvatar.textContent = s.channelTitle.textContent.slice(0, 1).toUpperCase();
        const o = a(t?.videos);
        s.channelStatus.textContent = o.length ? `${o.length} recent videos` : "No public videos available", 
        function(e) {
          e = a(e), s.channelVideos.replaceChildren(...e.map(e => {
            const t = document.createElement("article");
            t.className = "video-card";
            const a = document.createElement("button");
            a.className = "video-cover", a.type = "button", a.setAttribute("aria-label", `Play ${e.title || "video"}`);
            const n = document.createElement("img");
            n.alt = "", n.loading = "lazy", n.referrerPolicy = "no-referrer", n.src = e.thumbnail || "", 
            n.addEventListener("error", () => n.remove());
            const r = document.createElement("span");
            r.className = "fallback", r.innerHTML = d("icon-play");
            const o = document.createElement("span");
            o.className = "duration", o.textContent = u(e.durationSeconds), a.append(n, r, o), 
            a.addEventListener("click", () => M(e));
            const i = document.createElement("div");
            i.className = "card-copy";
            const s = document.createElement("strong");
            s.textContent = e.title || "Untitled video";
            const c = document.createElement("span");
            return c.textContent = `${e.creator || "YouTube"} \xb7 ${p(e.viewCount)}`, i.append(s, c), 
            t.append(a, i), t;
          }));
        }(o);
      } catch (t) {
        s.channelStatus.textContent = t.message || "This channel could not be loaded right now.";
      }
    }
  }
  async function M(e, {recoveryMessage: a = ""} = {}) {
    if (!e?.id) return;
    if (!t(e)) return C("home"), void l("This video is not available in DropTube.");
    i.watchVideo && i.watchVideo.id !== e.id && i.watchTrail.push(i.watchVideo), i.watchTrail.length > 50 && i.watchTrail.shift(), 
    O();
    const n = i.watchGeneration;
    let r = !1;
    if (i.watchVideo = e, C("watch"), l(a), e.detailsPending) {
      s.watchTitle.textContent = e.title || "Loading video", s.watchDescription.textContent = "Loading video details...", 
      s.watchLoading.hidden = !1, s.watchLoading.querySelector("strong").textContent = "Loading video details...", 
      s.watchViews.textContent = s.watchLikes.textContent = s.watchCommentsCount.textContent = "Loading...", 
      s.watchComments.replaceChildren(), s.watchTranscript.replaceChildren(), s.watchRelated.replaceChildren();
      try {
        const a = await h(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/video?id=${encodeURIComponent(e.id)}`);
        if ("watch" !== i.view || i.watchGeneration !== n) return;
        const r = a?.videos?.[0];
        if (!r || r.id !== e.id) throw new Error("That video is unavailable or restricted.");
        if (!t(r)) return C("home"), void l("This video is not available in DropTube.");
        e = r, i.catalog = i.catalog.map(e => e.id === r.id ? r : e);
      } catch (o) {
        if ("watch" !== i.view || i.watchGeneration !== n) return;
        if (!i.invidiousEmbedOrigin || !(o.status >= 500 || o instanceof TypeError)) return s.watchLoading.hidden = !0, 
        void l(o.message || "Video details could not be loaded.");
        r = !0, a = "Video details could not load. Opening the Invidious player.";
      }
    }
    z({
      cancel: !0
    }), clearTimeout(i.watchRecoveryTimer), i.watchRecoveryTimer = 0, i.watchVideo = e, 
    C("watch"), l(a), k(), s.watchTitle.textContent = e.title || "Untitled video", function(e) {
      const t = String(e?.creator || "YouTube").trim() || "YouTube", a = function(e = i.watchVideo) {
        const t = String(e?.channelId || "").trim();
        return /^UC[A-Za-z0-9_-]{22}$/.test(t) ? `https://www.youtube.com/channel/${t}` : "";
      }(e);
      s.watchCreator.textContent = t, s.watchVideoMeta.textContent = [ p(e?.viewCount), w(e?.publishedAt) ].filter(Boolean).join(" \xb7 "), 
      s.watchCreator.disabled = !a, s.watchChannelMark.disabled = !a, s.watchCreator.title = a ? `Open ${t}'s channel` : "Channel page unavailable", 
      s.watchChannelMark.title = s.watchCreator.title, s.watchCreator.setAttribute("aria-label", s.watchCreator.title), 
      s.watchChannelMark.setAttribute("aria-label", s.watchCreator.title);
      const n = () => {
        s.watchChannelMark.replaceChildren(), s.watchChannelMark.textContent = t.slice(0, 1).toUpperCase() || "Y";
      }, r = String(e?.channelAvatar || "").trim();
      if (!r) return void n();
      const o = document.createElement("img");
      o.alt = "", o.loading = "eager", o.referrerPolicy = "no-referrer", o.src = r, o.addEventListener("error", n, {
        once: !0
      }), s.watchChannelMark.replaceChildren(o);
    }(e), s.watchDescription.textContent = String(e.description || "No description was provided for this video."), 
    s.watchViews.textContent = m(e.viewCount), s.watchLikes.textContent = m(e.likeCount), 
    s.watchCommentsCount.textContent = m(e.commentCount), s.watchTabCommentsCount.textContent = e.commentCount ? `(${m(e.commentCount)})` : "", 
    $("description"), s.watchComments.replaceChildren(), s.watchCommentsStatus.hidden = !1, 
    s.watchCommentsStatus.textContent = "Loading comments...", s.watchTranscript.replaceChildren(), 
    s.watchTranscriptStatus.hidden = !1, s.watchTranscriptStatus.textContent = "Loading transcript...", 
    async function(e) {
      const t = ++i.watchCommunityRequestId;
      try {
        const a = await h(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/community?id=${encodeURIComponent(e.id)}`);
        if (t !== i.watchCommunityRequestId || "watch" !== i.view || i.watchVideo?.id !== e.id) return;
        V(a.comments), D(a.transcript);
      } catch (o) {
        if (t !== i.watchCommunityRequestId || "watch" !== i.view || i.watchVideo?.id !== e.id) return;
        V({
          available: !1,
          message: o.message || "Comments could not be loaded right now."
        }), D({
          available: !1,
          message: "The public transcript could not be loaded right now."
        });
      }
    }(e), function(e) {
      const t = R(e);
      if (!t.length) {
        const e = document.createElement("p");
        return e.className = "related-empty", e.textContent = "More videos will appear here as you browse.", 
        void s.watchRelated.replaceChildren(e);
      }
      s.watchRelated.replaceChildren(...t.map(e => {
        const t = document.createElement("button");
        t.type = "button", t.className = "related-card";
        const a = document.createElement("img");
        a.alt = "", a.loading = "lazy", a.referrerPolicy = "no-referrer", a.src = e.thumbnail || "", 
        a.addEventListener("error", () => a.remove());
        const n = document.createElement("span");
        n.className = "related-duration", n.textContent = u(e.durationSeconds);
        const r = document.createElement("span");
        r.className = "related-thumb", r.append(a, n);
        const o = document.createElement("span");
        o.className = "related-copy";
        const i = document.createElement("strong");
        i.textContent = e.title || "Untitled video";
        const s = document.createElement("small");
        return s.textContent = `${e.creator || "YouTube"} \xb7 ${p(e.viewCount)}`, o.append(i, s), 
        t.append(r, o), t.addEventListener("click", () => M(e)), t;
      }));
    }(e), s.watchSource.href = e.sourceUrl || `https://www.youtube.com/watch?v=${encodeURIComponent(e.id)}`, 
    i.watchCaptions = !1, s.watchCaptions.setAttribute("aria-pressed", "false"), s.watchCaptionOption.querySelector("span").textContent = "Off", 
    s.watchLoading.hidden = !1, s.watchCenterPlay.hidden = !0, s.watchProgress.value = "0", 
    s.watchTime.textContent = `0:00 / ${u(e.durationSeconds)}`, N(e, !1, !1, null, r ? "invidious" : "").catch(e => {
      s.watchLoading.hidden = !0, l(e.message || "The video player could not be started.");
    });
  }
  function A(t, a = !1) {
    s.watchEngine.value = a ? "invidious" : t ? "native" : "youtube", s.watchEngine.hidden = !i.nativeAvailable && !a, 
    s.watchBackup.setAttribute("aria-pressed", String(a)), s.watchEngine.textContent = t ? "Switch to embedded" : i.nativeAvailable ? e ? "Switch to DropTube" : "Switch to NyxTube" : "Switch to YouTube";
  }
  async function N(e, t = !1, a = !1, r = null, o = "", c = !1) {
    z({
      cancel: !0
    });
    const h = ++i.watchGeneration, p = Boolean(i.invidiousEmbedOrigin && !t && ("invidious" === o || !a && "invidious" === i.preferredPlayer)), w = !p && i.nativeAvailable && "native" === i.preferredPlayer && !t && !a;
    if (A(w, p), clearInterval(i.watchTimer), i.watchTimer = 0, s.watchStage.classList.toggle("invidious-player", p), 
    s.watchQuality.closest("label").hidden = p, s.watchCaptionOption.hidden = p, n("[data-shortcut-help-open]").hidden = p, 
    i.watchPlayer?.destroy?.(), i.watchPlayer = null, s.watchLoading.hidden = !1, s.watchLoading.querySelector("strong").textContent = w ? "Preparing video..." : "Loading video", 
    s.watchQuality.disabled = !0, p) {
      if (!/^[A-Za-z0-9_-]{11}$/.test(e.id)) throw new Error("Choose a valid video.");
      if (window.NyxInvidiousPlayer && !c) return i.watchPlayer = window.NyxInvidiousPlayer(s.watchPlayer, {
        id: e.id,
        restore: r || {},
        onLoading: e => {
          h === i.watchGeneration && (s.watchLoading.hidden = !e);
        },
        onFailure: t => {
          h === i.watchGeneration && "watch" === i.view && N(e, !1, !0, t, "invidious", !0);
        }
      }), void (s.watchCenterPlay.hidden = !0);
      const t = new URL("/embed/" + e.id, i.invidiousEmbedOrigin), a = {
        local: "true",
        autoplay: r?.paused ? "0" : "1",
        quality: "dash",
        controls: "1",
        continue: "0",
        hl: "en-US",
        start: String(Math.max(0, Number(r?.time) || 0)),
        volume: String(r?.muted ? 0 : Math.max(0, Math.min(100, Number(r?.volume ?? 100)))),
        speed: String(Math.max(.25, Math.min(2, Number(r?.rate) || 1)))
      };
      for (const [e, r] of Object.entries(a)) t.searchParams.set(e, r);
      const n = document.createElement("iframe");
      return n.title = "Invidious video player", n.src = t.href, n.allow = "autoplay; fullscreen; picture-in-picture", 
      n.allowFullscreen = !0, n.referrerPolicy = "strict-origin-when-cross-origin", n.addEventListener("load", () => {
        h === i.watchGeneration && (s.watchLoading.hidden = !0);
      }, {
        once: !0
      }), i.watchPlayer = {
        isInvidious: !0,
        destroy: () => n.remove()
      }, s.watchPlayer.replaceChildren(n), void (s.watchCenterPlay.hidden = !0);
    }
    const m = w ? window.NyxNativePlayer : t ? P : await x();
    if (h !== i.watchGeneration) return;
    if ("watch" !== i.view || i.watchVideo?.id !== e.id) return;
    i.watchPlayer?.destroy?.();
    const y = L(e.id);
    y.expectedDuration = e.durationSeconds, y.quality = r?.quality, y.startTime = r?.time, 
    y.events = {
      onCaptionError: e => {
        h === i.watchGeneration && (i.watchCaptions = !1, j(e.target, !1, s.watchCaptions, s.watchCaptionOption), 
        s.watchSettingsCaptions.value = "off", l(e.message));
      },
      onBuffering: e => {
        h === i.watchGeneration && (s.watchLoading.hidden = !e.data, e.data ? (s.watchLoading.querySelector("strong").textContent = "Loading video chunks...", 
        s.watchCenterPlay.hidden = !0) : s.watchCenterPlay.hidden = 2 !== e.target.getPlayerState());
      },
      onReady: t => {
        h === i.watchGeneration && (s.watchLoading.hidden = !t.target.isNative || t.target.video.readyState >= 3, 
        r && (t.target.seekTo(r.time), t.target.setVolume?.(r.volume), t.target.setPlaybackRate?.(r.rate), 
        r.muted && t.target.mute()), function(e, t) {
          let a = [];
          try {
            a = e.getAvailablePlaybackRates?.() || [];
          } catch {
            a = [];
          }
          a = [ ...new Set(a.map(Number).filter(e => Number.isFinite(e) && e > 0)) ].sort((e, t) => e - t), 
          a.length || (a = [ 1 ]), s.watchSpeed.replaceChildren(...a.map(e => {
            const t = document.createElement("option");
            return t.value = String(e), t.textContent = 1 === e ? "Normal" : `${e}x`, t;
          }));
          let r = 1;
          try {
            r = Number(e.getPlaybackRate?.()) || 1;
          } catch {
            r = 1;
          }
          s.watchSpeed.value = a.includes(r) ? String(r) : String(a.includes(1) ? 1 : a[0]);
          try {
            s.watchVolume.value = String(Math.max(0, Math.min(100, Number(e.getVolume?.() ?? 100))));
          } catch {
            s.watchVolume.value = "100";
          }
          s.watchSettingsCaptions.disabled = !t?.captions, s.watchCaptions.disabled = !t?.captions, 
          s.watchCaptionOption.disabled = !t?.captions, s.watchQuality.replaceChildren(...(e.isNative ? e.qualities : [ "auto" ]).map(e => {
            const t = document.createElement("option");
            return t.value = e, t.textContent = "auto" === e ? "Auto" : `${e}p`, t;
          })), s.watchQuality.disabled = !e.isNative, s.watchQuality.value = e.isNative ? String(e.quality) : "auto", 
          s.watchQuality.title = e.isNative ? "Playback quality" : "YouTube selects playback quality automatically", 
          A(e.isNative), n("[data-watch-settings-quality]").textContent = e.isNative ? `${e.quality}p` : "Auto", 
          s.watchSettingsCaptions.title = t?.captions ? "" : "Captions are not available for this video", 
          s.watchSettingsCaptions.value = i.watchCaptions && t?.captions ? "on" : "off";
        }(t.target, e), i.watchCaptions && e.captions && j(t.target, !0, s.watchCaptions, s.watchCaptionOption), 
        r?.paused ? (t.target.pauseVideo(), s.watchCenterPlay.hidden = !1) : t.target.playVideo(), 
        K(), clearInterval(i.watchTimer), i.watchTimer = setInterval(() => {
          if (!T(i.watchPlayer)) return;
          const e = s.watchStage.contains(document.activeElement) && document.activeElement !== s.watchStage && document.activeElement?.matches(":focus-visible");
          1 !== i.watchPlayer.getPlayerState() || i.watchPlayer.buffering || !s.watchLoading.hidden || !s.watchSettingsMenu.hidden || e || s.watchStage.querySelector(".watch-controls :active") || i.watchSpacePressed ? K() : s.watchStage.classList.toggle("controls-idle", Date.now() - q >= 3e3);
          const t = Number(i.watchPlayer.getCurrentTime?.()) || 0, a = Number(i.watchPlayer.getDuration?.()) || Number(i.watchVideo?.durationSeconds) || 0;
          s.watchTime.textContent = `${u(t)} / ${u(a)}`, s.watchProgress.value = a ? String(Math.round(t / a * 1e3)) : "0";
        }, 250));
      },
      onStateChange: e => {
        if (h !== i.watchGeneration) return;
        const t = e.data === m.PlayerState.PLAYING, a = e.data === m.PlayerState.PAUSED;
        t && (s.watchLoading.hidden = !0), function(e, t) {
          e.innerHTML = d(t ? "icon-pause" : "icon-play"), e.setAttribute("aria-label", t ? "Pause" : "Play");
        }(s.watchToggle, t), s.watchCenterPlay.hidden = !a || Boolean(e.target.buffering);
      },
      onError: t => {
        h === i.watchGeneration && "watch" === i.view && (w ? (l(i.invidiousEmbedOrigin ? "Opening the Invidious player. Use the controls inside the video." : "Native playback is unavailable. Opening the YouTube player."), 
        N(e, !1, !0, {
          time: t.target.getCurrentTime() || r?.time || 0,
          volume: t.target.getVolume(),
          rate: t.target.getPlaybackRate(),
          muted: t.target.isMuted(),
          paused: t.target.getCurrentTime() > 0 ? t.target.video.paused : r?.paused ?? !1
        }, i.invidiousEmbedOrigin ? "invidious" : "").catch(() => l("The video player could not start."))) : function(e, t, a) {
          if ("watch" !== i.view || i.watchVideo?.id !== e.id) return;
          if (z({
            cancel: !0
          }), s.watchLoading.hidden = !0, i.invidiousEmbedOrigin && (5 === t || 153 === t)) return l("Opening the Invidious player. Use the controls inside the video."), 
          void N(e, !1, !0, null, "invidious").catch(e => l(e.message));
          if (!a && (5 === t || 153 === t)) return l("Retrying this video with the Chromebook-compatible player..."), 
          void N(e, !0).catch(e => l(e.message || "The video player could not be restarted."));
          i.failedVideoIds.add(e.id);
          const n = R(e, 1)[0];
          if (!n) return void l("YouTube says this video is unavailable or restricted on this Chromebook. Choose another video.");
          const r = "That video is unavailable or restricted on this Chromebook. Loading another playable video...";
          l(r), i.watchPlayer?.destroy?.(), i.watchPlayer = null, s.watchPlayer.replaceChildren(), 
          i.watchRecoveryTimer = setTimeout(() => M(n, {
            recoveryMessage: r
          }), 500);
        }(e, Number(t?.data), m === P));
      }
    }, i.watchPlayer = new m.Player(function(e) {
      e.replaceChildren();
      const t = document.createElement("div");
      return t.id = `nyxtube-watch-${Date.now()}`, e.append(t), t.id;
    }(s.watchPlayer), y);
  }
  function R(e, a = 10) {
    const n = new Set;
    return [ ...i.catalog, ...i.shorts ].filter(a => t(a) && a?.id && a.id !== e.id && !i.failedVideoIds.has(a.id) && !n.has(a.id) && n.add(a.id)).sort((t, a) => U(a, e) - U(t, e)).slice(0, a);
  }
  function $(e) {
    r("[data-watch-info-tab]").forEach(t => {
      const a = t.dataset.watchInfoTab === e;
      t.classList.toggle("active", a), t.setAttribute("aria-selected", String(a));
    }), r("[data-watch-info-panel]").forEach(t => {
      t.hidden = t.dataset.watchInfoPanel !== e;
    });
  }
  function V(e = {}) {
    const t = Array.isArray(e.comments) ? e.comments : [];
    s.watchComments.replaceChildren(...t.map(e => {
      const t = document.createElement("article");
      t.className = "watch-comment";
      const a = document.createElement("span");
      a.className = "comment-avatar";
      const n = () => {
        a.replaceChildren(), a.textContent = String(e.author || "Y").trim().slice(0, 1).toUpperCase() || "Y";
      };
      if (e.avatarUrl) {
        const t = document.createElement("img");
        t.alt = "", t.loading = "lazy", t.referrerPolicy = "no-referrer", t.src = e.avatarUrl, 
        t.addEventListener("error", n, {
          once: !0
        }), a.append(t);
      } else n();
      const r = document.createElement("div");
      r.className = "comment-content";
      const o = document.createElement("div");
      o.className = "comment-header";
      const i = document.createElement("strong");
      i.textContent = e.author || "YouTube viewer";
      const s = document.createElement("time");
      s.textContent = w(e.publishedAt), o.append(i, s);
      const c = document.createElement("p");
      c.textContent = String(e.text || "");
      const d = document.createElement("small"), l = [];
      return Number(e.likeCount) > 0 && l.push(`${m(e.likeCount)} like${1 === Number(e.likeCount) ? "" : "s"}`), 
      Number(e.replyCount) > 0 && l.push(`${m(e.replyCount)} repl${1 === Number(e.replyCount) ? "y" : "ies"}`), 
      d.textContent = l.join(" \xb7 "), d.hidden = !l.length, r.append(o, c, d), t.append(a, r), 
      t;
    })), s.watchCommentsStatus.hidden = Boolean(e.available && t.length), s.watchCommentsStatus.textContent = e.available ? "No comments yet." : String(e.message || "Comments are unavailable for this video.");
  }
  function D(e = {}) {
    const t = Array.isArray(e.segments) ? e.segments : [];
    s.watchTranscript.replaceChildren(...t.map(e => {
      const t = document.createElement("button");
      t.type = "button", t.className = "transcript-line";
      const a = document.createElement("time");
      a.textContent = u(e.startSeconds);
      const n = document.createElement("span");
      return n.textContent = String(e.text || ""), t.append(a, n), t.addEventListener("click", () => {
        T(i.watchPlayer) && i.watchPlayer.seekTo(Math.max(0, Number(e.startSeconds) || 0), !0);
      }), t;
    })), s.watchTranscriptStatus.hidden = !1, s.watchTranscriptStatus.textContent = e.available ? `${String(e.language || "Transcript")} \xb7 ${m(t.length)} lines` : String(e.message || "A public transcript is unavailable for this video.");
  }
  function U(e, t) {
    const a = String(e.creator || "").toLowerCase() === String(t.creator || "").toLowerCase() ? 20 : 0, n = new Set(String(t.title || "").toLowerCase().match(/[a-z0-9]{4,}/g) || []);
    return a + (String(e.title || "").toLowerCase().match(/[a-z0-9]{4,}/g) || []).filter(e => n.has(e)).length;
  }
  let q = Date.now();
  function K() {
    q = Date.now(), s.watchStage.classList.remove("controls-idle");
  }
  for (const H of [ "pointermove", "pointerdown", "keydown", "focusin" ]) s.watchStage.addEventListener(H, K);
  function O() {
    s.watchStage.classList.remove("mini-player", "invidious-player"), K(), ++i.watchGeneration, 
    clearInterval(i.watchTimer), i.watchTimer = 0, clearTimeout(i.watchRecoveryTimer), 
    i.watchRecoveryTimer = 0, i.watchCommunityRequestId += 1, z({
      cancel: !0
    }), k(), i.watchPlayer?.destroy?.(), i.watchPlayer = null, s.watchPlayer.replaceChildren();
  }
  function Y() {
    T(i.watchPlayer) && (1 === i.watchPlayer.getPlayerState() ? i.watchPlayer.pauseVideo() : i.watchPlayer.playVideo());
  }
  function B() {
    if (!T(i.watchPlayer)) return;
    const e = Boolean(i.watchPlayer.isMuted?.());
    e ? i.watchPlayer.unMute() : i.watchPlayer.mute(), s.watchMute.innerHTML = d(e ? "icon-volume" : "icon-muted"), 
    s.watchMute.setAttribute("aria-label", e ? "Mute" : "Unmute");
  }
  function G(e) {
    if (!T(i.watchPlayer)) return;
    const t = Number(i.watchPlayer.getCurrentTime?.()) || 0, a = Number(i.watchPlayer.getDuration?.()) || Number(i.watchVideo?.durationSeconds) || 0;
    i.watchPlayer.seekTo(Math.max(0, a ? Math.min(a, t + e) : t + e), !0);
  }
  function F(e = "keyboard") {
    !i.watchSpacePressed && T(i.watchPlayer) && (i.watchHoldSource = e, i.watchSpacePressed = !0, 
    i.watchSpaceHeld = !1, i.watchSpaceWasPlaying = 1 === i.watchPlayer.getPlayerState(), 
    i.watchSpaceRateChanged = !1, i.watchSpaceTimer = setTimeout(() => {
      if (i.watchSpaceTimer = 0, i.watchSpacePressed && "watch" === i.view && T(i.watchPlayer)) {
        i.watchSpaceHeld = !0;
        try {
          i.watchSpacePreviousRate = Number(i.watchPlayer.getPlaybackRate?.()) || 1;
        } catch {
          i.watchSpacePreviousRate = 1;
        }
        i.watchSpaceWasPlaying || i.watchPlayer.playVideo();
        try {
          "function" == typeof i.watchPlayer.setPlaybackRate && (i.watchPlayer.setPlaybackRate(2), 
          i.watchSpaceRateChanged = !0, s.watchSpeedIndicator.hidden = !1);
        } catch {
          i.watchSpaceRateChanged = !1;
        }
      }
    }, 350));
  }
  function z({cancel: e = !1} = {}) {
    if (!i.watchSpacePressed && !i.watchSpaceTimer) return;
    clearTimeout(i.watchSpaceTimer), i.watchSpaceTimer = 0;
    const t = i.watchSpaceHeld;
    if (i.watchSpacePressed = !1, i.watchSpaceHeld = !1, s.watchSpeedIndicator.hidden = !0, 
    t) {
      if (i.watchSpaceRateChanged && T(i.watchPlayer)) try {
        i.watchPlayer.setPlaybackRate?.(i.watchSpacePreviousRate);
      } catch {}
      !i.watchSpaceWasPlaying && T(i.watchPlayer) && i.watchPlayer.pauseVideo();
    } else e || "watch" !== i.view || Y();
    i.watchSpaceRateChanged = !1;
  }
  function j(e, t, a, n) {
    if (!T(e)) return !1;
    if (e.isNative) return e.setCaptions(t), a.setAttribute("aria-pressed", String(t)), 
    n && (n.querySelector("span").textContent = t ? "On" : "Off"), !0;
    try {
      t ? e.loadModule?.("captions") : e.unloadModule?.("captions");
    } catch {
      return !1;
    }
    return a.setAttribute("aria-pressed", String(t)), n && (n.querySelector("span").textContent = t ? "On" : "Off"), 
    !0;
  }
  function _(e) {
    const t = i.watchCaptions;
    i.watchCaptions = Boolean(e), j(i.watchPlayer, i.watchCaptions, s.watchCaptions, s.watchCaptionOption) || (i.watchCaptions = t), 
    s.watchSettingsCaptions.value = i.watchCaptions ? "on" : "off";
  }
  function Z(e) {
    const t = e.requestFullscreen || e.webkitRequestFullscreen;
    t && t.call(e).catch?.(() => {});
  }
  let Q = 1, J = !0, W = null, X = 0, ee = "", te = 0, ae = "", ne = "", re = "discover", oe = 0, ie = null, se = null;
  const ce = ("tutsi" === document.documentElement.dataset.appShell ? "tutsi" : "nyx") + ".shorts-preferences.v1";
  let de = new Set, le = new Set, he = new Map;
  try {
    const e = JSON.parse(localStorage.getItem(ce) || "{}");
    de = new Set((Array.isArray(e.videos) ? e.videos : []).filter(e => /^[A-Za-z0-9_-]{11}$/.test(e)).slice(-500)), 
    le = new Set((Array.isArray(e.channels) ? e.channels : []).filter(e => /^UC[A-Za-z0-9_-]{22}$/.test(e)).slice(-100)), 
    he = new Map((Array.isArray(e.likes) ? e.likes : []).filter(e => e && /^[A-Za-z0-9_-]{11}$/.test(e.id) && /^UC[A-Za-z0-9_-]{22}$/.test(e.channelId)).slice(-500).map(e => [ e.id, {
      id: e.id,
      channelId: e.channelId
    } ]));
  } catch {}
  const ue = e => !de.has(e.id) && !le.has(e.channelId);
  function pe() {
    const e = new Map;
    let t = 0;
    for (const a of he.values()) {
      if (!ue(a)) continue;
      const n = e.get(a.channelId) || {
        count: 0,
        order: 0
      };
      n.count++, n.order = ++t, e.set(a.channelId, n);
    }
    return [ ...e ].sort((e, t) => t[1].count - e[1].count || t[1].order - e[1].order).slice(0, 2).map(([e]) => e);
  }
  function we(e = i.shorts[i.shortIndex]) {
    if (!s.shortHeart) return;
    const t = Boolean(e && he.has(e.id));
    s.shortHeart.disabled = !e?.channelId, s.shortHeart.setAttribute("aria-pressed", String(t)), 
    s.shortHeart.setAttribute("aria-label", t ? "Unlike this Short" : "Like this Short"), 
    s.shortHeart.querySelector("span").textContent = t ? "Liked" : "Like";
  }
  function me() {
    if (!ne && "discover" === re) {
      te++, oe++, ie?.abort(), W = null, i.shorts.splice(i.shortIndex + 1), fe.clear();
      for (const e of i.shorts) fe.add(e.id);
      Q = 1, ae = "", J = !0, X = 0, ee = "", be();
    }
  }
  function ye(e) {
    de = new Set([ ...de ].slice(-500)), le = new Set([ ...le ].slice(-100)), he = new Map([ ...he ].slice(-500));
    try {
      localStorage.setItem(ce, JSON.stringify({
        videos: [ ...de ],
        channels: [ ...le ],
        likes: [ ...he.values() ]
      })), s.shortPreferencesStatus.textContent = e + " Saved in this browser.";
    } catch {
      s.shortPreferencesStatus.textContent = e + " Saved for this session only.";
    }
  }
  function ve(e = "", t = "discover") {
    oe++, ie?.abort(), W = null, !se && i.shortPlayer && i.shorts[i.shortIndex] && (se = {
      videos: i.shorts,
      index: i.shortIndex,
      query: ne,
      topic: re,
      page: Q,
      cursor: ae,
      hasMore: J,
      seen: [ ...fe ]
    }), se || $e(), i.shorts = [], i.shortIndex = 0, fe.clear(), Q = 1, ae = "", J = !0, 
    X = 0, ee = "", ne = e, re = t, s.shortSearchInput.value = e, se || (s.shortTitle.textContent = "", 
    s.shortCreator.textContent = ""), s.shortDislike.disabled = !0, s.shortHideChannel.disabled = !0, 
    we(), s.shortFeedLabel.textContent = e ? `Results for \u201c${e}\u201d` : {
      discover: "For you",
      science: "Science",
      nature: "Nature",
      gaming: "Gaming",
      sports: "Sports"
    }[t], r("[data-short-topic]").forEach(a => a.setAttribute("aria-pressed", String(!e && a.dataset.shortTopic === t))), 
    Se();
  }
  async function ge(e = !1) {
    const t = i.shorts[i.shortIndex];
    if (!t || e && !t.channelId) return;
    if (e ? le.add(t.channelId) : de.add(t.id), e) for (const [n, r] of he) r.channelId === t.channelId && he.delete(n); else he.delete(t.id);
    ye(e ? `Hidden ${t.creator || "this channel"}.` : "This video is hidden."), $e();
    const a = i.shorts.slice(0, i.shortIndex).filter(ue).length;
    i.shorts = i.shorts.filter(ue), i.shortIndex = Math.min(a, Math.max(0, i.shorts.length - 1)), 
    me(), await Se();
  }
  const fe = new Set;
  function be(t = 6) {
    if (W) return W;
    if (e || !J || Date.now() < X) return Promise.resolve();
    const a = oe, n = new AbortController;
    ie = n;
    const r = (async () => {
      for (let e = 0; e < 3 && J && "shorts" === i.view && i.shorts.length - i.shortIndex - 1 < t; e++) {
        const e = new URLSearchParams({
          limit: "24",
          page: String(Q),
          topic: re
        });
        if (ne) e.set("q", ne); else if ("discover" === re) {
          const t = pe();
          t.length && e.set("creators", t.join(","));
        }
        ae && e.set("cursor", ae);
        const t = await h(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/shorts?${e}`, n.signal);
        if (a !== oe) return;
        for (const a of t?.videos || []) /^[A-Za-z0-9_-]{11}$/.test(a?.id || "") && a.isShort && !fe.has(a.id) && (fe.add(a.id), 
        ue(a) && i.shorts.push(a));
        const r = t?.nextPage, o = "string" == typeof t?.nextCursor ? t.nextCursor : "";
        J = Boolean(o && o !== ae) || Number.isInteger(r) && r > Q && r <= 100, ae = o, 
        Number.isInteger(r) && (Q = r), ee = "";
        const s = Math.min(Math.max(0, i.shorts.length - 240), Math.max(0, i.shortIndex - 50));
        s && (i.shorts.splice(0, s), i.shortIndex -= s);
      }
    })().catch(e => {
      a === oe && "AbortError" !== e.name && (X = Date.now() + 15e3, ee = e.message || "More Shorts could not load.");
    }).finally(() => {
      W === r && (W = null);
    });
    return W = r, r;
  }
  async function Se() {
    if (e) return;
    const t = oe;
    s.shortMenu && (s.shortMenu.open = !1), s.shortEmpty && (s.shortEmpty.hidden = !0), 
    o.shorts.dataset.feedLoading = "true", l(), s.shortLoading.hidden = Boolean(se);
    try {
      if (i.shorts.length || await be(1), "shorts" !== i.view || t !== oe) return;
      if (!i.shorts.length) throw s.shortDislike?.setAttribute("disabled", ""), s.shortHideChannel?.setAttribute("disabled", ""), 
      we(), new Error(ee || "No matching Shorts. Try another search or topic, or reset your preferences.");
      se && ($e(), se = null), i.failedShortIds.clear(), Ee.clear(), await Ae(i.shortIndex);
    } catch (a) {
      if (t !== oe || "shorts" !== i.view) return;
      if (s.shortLoading.hidden = !0, se) {
        const e = se;
        se = null, i.shorts = e.videos, i.shortIndex = e.index, ne = e.query, re = e.topic, 
        Q = e.page, ae = e.cursor, J = e.hasMore, X = 0, fe.clear();
        for (const t of e.seen) fe.add(t);
        we(), s.shortDislike.disabled = !1, s.shortHideChannel.disabled = !i.shorts[i.shortIndex]?.channelId, 
        l(ee ? "Search unavailable. Your current video is still playing." : "No matching Shorts.");
      } else s.shortEmpty && (s.shortEmpty.hidden = !1, s.shortEmptyTitle.textContent = ee ? "Shorts could not load" : "No Shorts found"), 
      l(a.message || "Shorts could not be loaded.");
    } finally {
      t === oe && delete o.shorts.dataset.feedLoading;
    }
  }
  let Ce = 0, Pe = 0;
  const Ee = new Set;
  function xe() {
    clearTimeout(Pe), Pe = 0;
  }
  const Le = new Map, Te = new Map;
  let ke = 0;
  function Ie(e) {
    if (Te.has(e.id)) return Te.get(e.id);
    const t = {
      id: e.id,
      player: null,
      node: null,
      ready: !1,
      removed: !1,
      failed: !1
    };
    return Te.set(e.id, t), t.promise = (async () => {
      const a = await function(e) {
        if (!e.detailsPending) return Promise.resolve(e);
        if (!Le.has(e.id)) {
          Le.size >= 32 && Le.delete(Le.keys().next().value);
          const t = h(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/video?id=${encodeURIComponent(e.id)}`).then(t => {
            const a = t?.videos?.[0];
            if (!a || a.id !== e.id || !a.isShort) throw Error("Short unavailable");
            return a;
          }).catch(t => {
            throw Le.delete(e.id), t;
          });
          Le.set(e.id, t);
        }
        return Le.get(e.id);
      }(e), n = await x();
      if (t.removed || "shorts" !== i.view) return;
      t.detail = a;
      const r = t.node = document.createElement("div");
      r.id = "nyxtube-prepared-short-" + ++ke;
      const o = document.createElement("div");
      o.id = r.id + "-player", o.style.cssText = "width:100%;height:100%", r.append(o), 
      r.style.cssText = "position:absolute;inset:0;visibility:hidden;pointer-events:none", 
      r.setAttribute("aria-hidden", "true"), s.shortPlayer.append(r);
      const c = L(e.id, !0);
      return c.playerVars.autoplay = 0, c.expectedDuration = a.durationSeconds, c.events = {
        onReady: e => {
          t.removed || (t.ready = !0, e.target.mute(), i.shortPlayer === e.target && (e.target.playVideo(), 
          Re()));
        },
        onStateChange: e => {
          t.removed || i.shortPlayer !== e.target || (e.data !== n.PlayerState.PLAYING && e.data !== n.PlayerState.PAUSED || (xe(), 
          s.shortLoading.hidden = !0, e.data === n.PlayerState.PLAYING && l()), s.shortCenterPlay.hidden = e.data !== n.PlayerState.PAUSED, 
          e.data === n.PlayerState.ENDED && Ae(i.shortIndex + 1));
        },
        onAutoplayBlocked: () => {
          t.removed || i.shortPlayer !== t.player || (xe(), s.shortLoading.hidden = !0, s.shortCenterPlay.hidden = !1);
        },
        onError: () => {
          t.failed = !0, i.shortPlayer === t.player && Ne(a);
        }
      }, t.player = new n.Player(o.id, c), t;
    })().catch(() => {
      t.failed = !0, i.shorts[i.shortIndex]?.id === t.id && "shorts" === i.view && Ne(e);
    }), t;
  }
  function Me(e, t, a = !1, n = null) {
    xe(), clearInterval(i.shortTimer), i.shortTimer = 0;
    for (const i of Te.values()) i.removed = !0, i.player?.destroy?.(), i.node?.remove();
    if (Te.clear(), i.shortPlayer?.destroy?.(), s.shortStage.classList.add("invidious-player"), 
    !/^[A-Za-z0-9_-]{11}$/.test(e.id)) throw new Error("Choose a valid Short.");
    if (window.NyxInvidiousPlayer && !a) return i.shortPlayer = window.NyxInvidiousPlayer(s.shortPlayer, {
      id: e.id,
      loop: !0,
      onLoading: e => {
        t === Ce && "shorts" === i.view && (s.shortLoading.hidden = !e);
      },
      onFailure: a => {
        t === Ce && "shorts" === i.view && Me(e, t, !0, a);
      }
    }), void l();
    const r = new URL("/embed/" + e.id, i.invidiousEmbedOrigin);
    r.search = new URLSearchParams({
      local: "true",
      autoplay: n?.paused ? "0" : "1",
      quality: "dash",
      controls: "1",
      volume: String(!1 === n?.muted ? n.volume : 0),
      start: String(n?.time || 0),
      speed: String(n?.rate || 1),
      loop: "1",
      continue: "0",
      hl: "en-US"
    }).toString();
    const o = document.createElement("iframe");
    o.title = "Invidious Short player", o.src = r.href, o.allow = "autoplay; fullscreen; picture-in-picture", 
    o.allowFullscreen = !0, o.referrerPolicy = "strict-origin-when-cross-origin", o.addEventListener("load", () => {
      t === Ce && "shorts" === i.view && (s.shortLoading.hidden = !0);
    }, {
      once: !0
    }), i.shortPlayer = {
      isInvidious: !0,
      destroy: () => o.remove()
    }, s.shortPlayer.replaceChildren(o), l();
  }
  async function Ae(e) {
    if (!i.shorts.length) return;
    const t = ++te;
    if (e >= i.shorts.length) {
      const a = e - i.shortIndex;
      if (l("Loading more Shorts..."), await be(1), t !== te || "shorts" !== i.view) return;
      if ((e = i.shortIndex + a) >= i.shorts.length) return void l(ee || "No more Shorts are available right now.");
    }
    if ((e = Math.max(0, e)) === i.shortIndex && i.shortPlayer) return;
    const a = ++Ce;
    i.shortIndex = e;
    const n = i.shorts[i.shortIndex];
    if (s.shortEmpty && (s.shortEmpty.hidden = !0), s.shortMenu && (s.shortMenu.open = !1), 
    we(n), s.shortDislike && (s.shortDislike.disabled = !1), s.shortHideChannel && (s.shortHideChannel.disabled = !n.channelId, 
    s.shortHideChannel.title = n.creator ? `Hide ${n.creator}` : "Hide channel"), i.shortPlayer?.pauseVideo?.(), 
    i.shortPlayer?.isInvidious && i.shortPlayer.destroy(), i.shortPlayer = null, function(e, t) {
      xe(), Pe = setTimeout(() => {
        if (t !== Ce || "shorts" !== i.view) return;
        const a = Te.get(e.id);
        Ee.has(e.id) ? Ne(e) : (Ee.add(e.id), a && (a.removed = !0, a.player?.destroy?.(), 
        a.node?.remove(), Te.delete(e.id)), i.shortPlayer = null, l("This Short is taking longer to load. Retrying..."), 
        Ae(i.shortIndex));
      }, 12e3);
    }(n, a), s.shortTitle.textContent = n.title || "Untitled Short", s.shortCreator.textContent = n.creator || "YouTube", 
    s.shortLoading.hidden = !1, s.shortCenterPlay.hidden = !0, s.shortProgress.style.width = "0", 
    be(), i.invidiousEmbedOrigin) return void Me(n, a);
    s.shortStage.classList.remove("invidious-player");
    for (const i of Te.values()) i.node && (i.node.style.visibility = "hidden", i.node.style.pointerEvents = "none", 
    i.node.setAttribute("aria-hidden", "true"));
    const r = new Set(i.shorts.slice(i.shortIndex, i.shortIndex + 4).map(e => e.id));
    for (const [i, s] of Te) r.has(i) || (s.removed = !0, s.player?.destroy?.(), s.node?.remove(), 
    Te.delete(i));
    const o = Ie(n);
    if (await o.promise, a === Ce && "shorts" === i.view) {
      if (o.failed || !o.player) return Ne(n);
      i.shortPlayer = o.player, o.node.style.visibility = "visible", o.node.style.pointerEvents = "auto", 
      o.node.setAttribute("aria-hidden", "false"), i.shortMuted = !0, s.shortMute.innerHTML = d("icon-muted"), 
      o.ready && (o.player.mute(), o.player.playVideo(), Re());
      for (const e of i.shorts.slice(i.shortIndex + 1, i.shortIndex + 4)) Ie(e);
    }
  }
  function Ne(e) {
    if ("shorts" !== i.view || i.shorts[i.shortIndex]?.id !== e.id) return;
    xe(), i.failedShortIds.add(e.id);
    const t = i.shorts.findIndex((e, t) => t !== i.shortIndex && e?.id && !i.failedShortIds.has(e.id));
    if (t < 0) return s.shortLoading.hidden = !0, $e(), void l("These Shorts could not start. Try again later or check your connection.");
    l("This Short could not start. Trying another..."), Ae(t);
  }
  function Re() {
    clearInterval(i.shortTimer), i.shortTimer = setInterval(() => {
      if (!T(i.shortPlayer)) return;
      const e = Number(i.shortPlayer.getCurrentTime?.()) || 0, t = Number(i.shortPlayer.getDuration?.()) || 0;
      s.shortProgress.style.width = t ? `${Math.min(100, e / t * 100)}%` : "0";
    }, 250);
  }
  function $e() {
    if (!e) {
      se = null, te++, Oe(!0), Ce++, xe(), clearInterval(i.shortTimer), i.shortTimer = 0;
      for (const e of Te.values()) e.removed = !0, e.player?.destroy?.(), e.node?.remove();
      Te.clear(), i.shortPlayer?.destroy?.(), i.shortPlayer = null, s.shortPlayer.replaceChildren(), 
      s.shortStage.classList.remove("invidious-player");
    }
  }
  function Ve() {
    T(i.shortPlayer) && (1 === i.shortPlayer.getPlayerState() ? i.shortPlayer.pauseVideo() : i.shortPlayer.playVideo());
  }
  function De() {
    T(i.shortPlayer) && (i.shortMuted = !i.shortMuted, i.shortMuted ? i.shortPlayer.mute() : i.shortPlayer.unMute(), 
    s.shortMute.innerHTML = d(i.shortMuted ? "icon-muted" : "icon-volume"));
  }
  const Ue = e => (Oe(!0), i.shorts.length && Ae(i.shortIndex + e));
  let qe = null, Ke = 0;
  function He(e) {
    if (qe || !T(i.shortPlayer)) return;
    const t = i.shortPlayer;
    qe = {
      source: e,
      player: t,
      rate: t.getPlaybackRate?.() || 1,
      paused: 1 !== t.getPlayerState(),
      held: !1
    };
    const a = qe;
    a.timer = setTimeout(() => {
      qe === a && (a.held = !0, t.setPlaybackRate?.(2), t.playVideo?.(), s.shortStage.dataset.speedHold = "true");
    }, 350);
  }
  function Oe(e = !1) {
    const t = qe;
    t && (qe = null, clearTimeout(t.timer), delete s.shortStage.dataset.speedHold, t.held ? (t.player.setPlaybackRate?.(t.rate), 
    t.paused && t.player.pauseVideo?.(), Ke = performance.now() + 500) : e || "keyboard" !== t.source || Ve());
  }
  function Ye(e) {
    if (!T(i.watchPlayer)) return;
    const t = Number(i.watchPlayer.getDuration?.()) || 0;
    i.watchPlayer.seekTo(Math.max(0, Math.min(t, e)), !0);
  }
  function Be(e = !1) {
    if (e) {
      const e = i.watchTrail.pop();
      e && (i.watchVideo = null, M(e));
    } else {
      const e = R(i.watchVideo || {}, 1)[0];
      e && M(e);
    }
  }
  function Ge() {
    Oe(!0), z({
      cancel: !0
    });
    const e = n("[data-shortcut-help]");
    e.open || e.showModal();
  }
  const Fe = e => e instanceof Element && Boolean(e.closest("input,textarea,select,button,a,summary,[contenteditable]"));
  e && addEventListener("message", e => {
    e.origin === location.origin && e.source === parent && "drop:tube-pause" === e.data?.type && (i.watchPlayer?.isInvidious ? (O(), 
    l("Press Invidious to reopen the video.")) : i.watchPlayer?.pauseVideo?.());
  }), c(), function() {
    addEventListener("message", e => {
      e.origin === location.origin && e.source === parent && "nyx:nyxtube-profile" === e.data?.type && e.data.requestId === i.profileRequestId && function(e = {}) {
        clearTimeout(i.profileRetryTimer), i.profileRetryTimer = 0, i.profileResolved = !0;
        const t = String(e.displayName || "Profile").trim() || "Profile";
        i.profile = {
          uid: String(e.uid || ""),
          signedIn: Boolean(e.signedIn),
          displayName: t,
          avatarUrl: String(e.avatarUrl || "")
        }, s.profileButton.title = i.profile.signedIn ? `Open ${t}'s profile` : "Sign in or create a profile", 
        s.profileButton.setAttribute("aria-label", s.profileButton.title);
        const a = () => {
          if (s.profileAvatar.replaceChildren(), i.profile.signedIn) {
            const e = document.createElement("span");
            e.textContent = t.slice(0, 1).toUpperCase() || "N", s.profileAvatar.append(e);
          } else s.profileAvatar.innerHTML = d("icon-user");
        };
        if (!i.profile.avatarUrl) return void a();
        const n = document.createElement("img");
        n.alt = "", n.loading = "eager", n.src = i.profile.avatarUrl, n.addEventListener("error", a, {
          once: !0
        }), s.profileAvatar.replaceChildren(n);
      }(e.data.profile);
    }), s.profileButton.addEventListener("click", () => parent.postMessage({
      type: "nyx:nyxtube-open-profile",
      uid: i.profile.uid
    }, location.origin)), s.watchChannelMark.addEventListener("click", I), s.watchCreator.addEventListener("click", I), 
    s.channelBack.addEventListener("click", () => i.watchVideo && M(i.watchVideo)), 
    document.addEventListener("visibilitychange", () => {
      document.hidden ? (z({
        cancel: !0
      }), Oe(!0)) : y();
    }), addEventListener("blur", () => {
      z({
        cancel: !0
      }), Oe(!0);
    }), s.searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const t = s.searchInput.value.trim();
      t && S(t);
    }), s.shortSearchForm?.addEventListener("submit", e => {
      e.preventDefault();
      const t = s.shortSearchInput.value.trim();
      t.length >= 2 && ve(t);
    }), s.shortRetry?.addEventListener("click", () => ve(ne, re)), document.addEventListener("pointerdown", e => {
      s.shortMenu?.open && !s.shortMenu.contains(e.target) && (s.shortMenu.open = !1);
    }), r("[data-short-topic]").forEach(e => e.addEventListener("click", () => ve("", e.dataset.shortTopic))), 
    s.shortDislike?.addEventListener("click", () => {
      ge();
    }), s.shortHideChannel?.addEventListener("click", () => {
      ge(!0);
    }), s.shortHeart?.addEventListener("click", () => {
      const e = i.shorts[i.shortIndex];
      e?.channelId && (he.has(e.id) ? (he.delete(e.id), ye("Like removed. Your For you feed has been adjusted.")) : (he.set(e.id, {
        id: e.id,
        channelId: e.channelId
      }), ye(`Liked. For you will show more from ${e.creator || "this creator"}.`)), we(e), 
      me());
    }), s.shortReset?.addEventListener("click", () => {
      de.clear(), le.clear(), he.clear(), ye("Likes and hidden videos/channels cleared."), 
      ve();
    }), r("[data-topic]").forEach(e => e.addEventListener("click", () => {
      s.searchInput.value = e.dataset.topic, S(e.dataset.topic);
    })), r("[data-view-button]").forEach(e => e.addEventListener("click", () => {
      C(e.dataset.viewButton), "shorts" === i.view && Se();
    })), n("[data-back]").addEventListener("click", () => {
      "watch" === i.view ? C("home") : H.length > 1 ? H.back() : location.href = "/";
    }), s.watchToggle.addEventListener("click", Y), s.watchCenterPlay.addEventListener("click", Y), 
    s.watchMute.addEventListener("click", B);
    const t = e => {
      if (!i.watchVideo) return;
      z({
        cancel: !0
      });
      const t = i.watchPlayer, a = {
        quality: e,
        time: t?.getCurrentTime?.() || 0,
        paused: 2 === t?.getPlayerState?.(),
        volume: t?.getVolume?.() ?? 100,
        rate: t?.getPlaybackRate?.() || 1,
        muted: t?.isMuted?.() || !1
      };
      N(i.watchVideo, !1, !1, a).catch(() => l("The video player could not start."));
    };
    s.watchStage.addEventListener("pointerdown", e => {
      0 === e.button && e.isPrimary && "watch" === i.view && !Fe(e.target) && e.target.closest("[data-watch-player],[data-watch-gesture]") && (i.watchSpacePressed || (e.preventDefault(), 
      s.watchStage.focus({
        preventScroll: !0
      }), i.watchPointerId = e.pointerId, s.watchStage.setPointerCapture(e.pointerId), 
      F("pointer")));
    });
    const a = (e, t = !1) => {
      e.pointerId === i.watchPointerId && (i.watchPointerId = null, "pointer" === i.watchHoldSource && z({
        cancel: t
      }), s.watchStage.hasPointerCapture(e.pointerId) && s.watchStage.releasePointerCapture(e.pointerId));
    };
    s.watchStage.addEventListener("pointerup", e => a(e)), s.watchStage.addEventListener("pointercancel", e => a(e, !0)), 
    s.watchStage.addEventListener("lostpointercapture", e => a(e, !0)), s.watchQuality.addEventListener("change", () => t(Number(s.watchQuality.value))), 
    s.watchEngine.addEventListener("click", () => {
      i.preferredPlayer = "native" !== s.watchEngine.value && i.nativeAvailable ? "native" : "youtube", 
      t();
    }), s.watchBackup.addEventListener("click", () => {
      i.preferredPlayer = "invidious", l("Use the controls inside the video for playback, quality and fullscreen."), 
      t();
    }), s.watchProgress.addEventListener("input", () => {
      T(i.watchPlayer) && i.watchPlayer.seekTo((i.watchPlayer.getDuration?.() || 0) * Number(s.watchProgress.value) / 1e3, !0);
    });
    const c = () => _(!i.watchCaptions);
    s.watchCaptions.addEventListener("click", c), s.watchCaptionOption.addEventListener("click", c), 
    s.watchFullscreen.addEventListener("click", () => Z(s.watchStage)), s.watchSettings.addEventListener("click", e => {
      e.stopPropagation();
      const t = s.watchSettingsMenu.hidden;
      k(), t && (s.watchSettingsMenu.hidden = !1, s.watchSettings.setAttribute("aria-expanded", "true"), 
      s.watchSpeed.focus({
        preventScroll: !0
      }));
    }), s.watchSettingsMenu.addEventListener("click", e => e.stopPropagation()), s.watchSpeed.addEventListener("change", () => {
      try {
        i.watchPlayer?.setPlaybackRate?.(Number(s.watchSpeed.value) || 1);
      } catch {}
    }), s.watchVolume.addEventListener("input", () => {
      try {
        i.watchPlayer?.setVolume?.(Number(s.watchVolume.value) || 0);
      } catch {}
    }), s.watchSettingsCaptions.addEventListener("change", () => _("on" === s.watchSettingsCaptions.value)), 
    s.watchRewind.addEventListener("click", () => G(-10)), s.watchForward.addEventListener("click", () => G(10)), 
    r("[data-watch-info-tab]").forEach(e => e.addEventListener("click", () => $(e.dataset.watchInfoTab))), 
    document.addEventListener("click", k);
    let h = 0, u = 0, p = -1 / 0, w = null, m = 0;
    const v = e => {
      Oe(!0);
      const t = performance.now();
      t - p < 450 || (p = t, Ue(e));
    };
    document.addEventListener("wheel", e => {
      if ("shorts" !== i.view || e.ctrlKey || e.target.closest?.("input,textarea,select,[contenteditable]") || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      const t = performance.now();
      (t - u > 180 || Math.sign(h) !== Math.sign(e.deltaY)) && (h = 0), u = t, h += e.deltaY * (1 === e.deltaMode ? 16 : 2 === e.deltaMode ? innerHeight : 1), 
      Math.abs(h) >= 40 && (v(Math.sign(h)), h = 0);
    }, {
      passive: !1
    }), e || (s.shortStage.addEventListener("pointerdown", e => {
      e.isPrimary && 0 === e.button && !e.target.closest("button,a,input") && (He("pointer"), 
      s.shortStage.setPointerCapture(e.pointerId)), "touch" !== e.pointerType || e.target.closest("button,a,input") || (w = {
        id: e.pointerId,
        x: e.clientX,
        y: e.clientY
      }, s.shortStage.setPointerCapture(e.pointerId));
    }), s.shortStage.addEventListener("pointerup", e => {
      if (Oe(), !w || w.id !== e.pointerId) return;
      const t = e.clientX - w.x, a = e.clientY - w.y;
      w = null, Math.abs(a) >= 50 && Math.abs(a) > Math.abs(t) && (m = performance.now() + 350, 
      v(a < 0 ? 1 : -1));
    }), s.shortStage.addEventListener("pointercancel", () => {
      w = null, Oe(!0);
    }), s.shortStage.addEventListener("lostpointercapture", () => Oe(!0)), s.shortStage.addEventListener("pointermove", e => {
      w && Math.abs(e.clientY - w.y) > 15 && Oe(!0);
    }), s.shortCenterPlay.addEventListener("click", Ve), s.shortStage.addEventListener("click", e => {
      performance.now() >= Math.max(m, Ke) && !e.target.closest("button,a") && Ve();
    }), s.shortMute.addEventListener("click", De), s.shortCaptions.addEventListener("click", () => {
      i.shortCaptions = !i.shortCaptions, j(i.shortPlayer, i.shortCaptions, s.shortCaptions) || (i.shortCaptions = !i.shortCaptions);
    }), s.shortFullscreen.addEventListener("click", () => Z(s.shortStage)), n("[data-short-previous]").addEventListener("click", () => Ue(-1)), 
    n("[data-short-next]").addEventListener("click", () => Ue(1))), n("[data-shortcut-help-close]").addEventListener("click", () => {
      n("[data-shortcut-help]").close(), s.watchStage.focus();
    }), n("[data-shortcut-help-open]").addEventListener("click", Ge), s.watchStage.addEventListener("dblclick", e => {
      e.target.closest("[data-watch-gesture]") && (z({
        cancel: !0
      }), Z(s.watchStage));
    }), document.addEventListener("keydown", e => {
      if ("Escape" === e.key && s.shortMenu?.open) return s.shortMenu.open = !1, void s.shortMenu.querySelector("summary").focus();
      if (!n("[data-shortcut-help]").open) {
        if ("?" === e.key && !e.target.closest?.("input,textarea,select,[contenteditable]")) return e.preventDefault(), 
        void Ge();
        if ("/" === e.key && !Fe(e.target)) return e.preventDefault(), void ("shorts" === i.view && s.shortSearchInput ? s.shortSearchInput.focus() : ("home" !== i.view && C("home"), 
        s.searchInput.focus()));
        if ("Escape" === e.key && s.watchStage.classList.contains("mini-player")) s.watchStage.classList.remove("mini-player"); else {
          if ("watch" === i.view && !Fe(e.target) && (e.ctrlKey || e.altKey) && [ "ArrowLeft", "ArrowRight" ].includes(e.code)) return e.preventDefault(), 
          void function(e) {
            const t = [ ...String(i.watchVideo?.description || "").matchAll(/(?:^|\n)\s*((?:\d+:)?\d{1,2}:\d{2})\s+/g) ].map(e => e[1].split(":").reduce((e, t) => 60 * e + Number(t), 0)).sort((e, t) => e - t), a = i.watchPlayer?.getCurrentTime?.() || 0, n = e > 0 ? t.find(e => e > a + 1) : t.filter(e => e < a - 2).at(-1);
            void 0 !== n && Ye(n);
          }("ArrowRight" === e.code ? 1 : -1);
          if ("Escape" === e.key && !s.watchSettingsMenu.hidden) return e.preventDefault(), 
          k(), void s.watchSettings.focus();
          if (!(Fe(e.target) || e.ctrlKey || e.metaKey || e.altKey)) if ("watch" === i.view) {
            if (i.watchPlayer?.isInvidious) return;
            if ([ "Space", "KeyK", "KeyJ", "KeyL", "ArrowLeft", "ArrowRight", "KeyM", "KeyC", "KeyF", "ArrowUp", "ArrowDown", "Home", "End", "Comma", "Period", "KeyI", "KeyT", "MediaPlayPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", ...Array.from({
              length: 10
            }, (e, t) => "Digit" + t) ].includes(e.code) && e.preventDefault(), "Space" === e.code) return void F();
            if (e.repeat && ![ "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "KeyJ", "KeyL" ].includes(e.code)) return;
            if (e.shiftKey && [ "KeyN", "KeyP" ].includes(e.code)) return e.preventDefault(), 
            void Be("KeyP" === e.code);
            if ("MediaTrackNext" === e.code && Be(), "MediaTrackPrevious" === e.code && Be(!0), 
            "MediaStop" === e.code && i.watchPlayer?.pauseVideo?.(), "MediaPlayPause" === e.code && Y(), 
            "KeyI" === e.code && s.watchStage.classList.toggle("mini-player"), "KeyT" === e.code && o.watch.classList.toggle("theater-mode"), 
            "Home" !== e.code && "Digit0" !== e.code || Ye(0), "End" === e.code && Ye((i.watchPlayer?.getDuration?.() || 0) - .1), 
            /^Digit[1-9]$/.test(e.code) && Ye((i.watchPlayer?.getDuration?.() || 0) * Number(e.code.slice(-1)) / 10), 
            [ "ArrowUp", "ArrowDown" ].includes(e.code) && T(i.watchPlayer)) {
              const t = Math.max(0, Math.min(100, (i.watchPlayer.getVolume?.() ?? 100) + ("ArrowUp" === e.code ? 5 : -5)));
              i.watchPlayer.setVolume?.(t), s.watchVolume.value = String(t);
            }
            ">" === e.key || "<" === e.key ? function(e) {
              const t = i.watchPlayer;
              if (!T(t)) return;
              z({
                cancel: !0
              });
              const a = (t.getAvailablePlaybackRates?.() || [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ]).map(Number).sort((e, t) => e - t), n = Number(t.getPlaybackRate?.()) || 1, r = e > 0 ? a.find(e => e > n + .01) : a.filter(e => e < n - .01).at(-1);
              r && (t.setPlaybackRate?.(r), s.watchSpeed.value = String(r));
            }(">" === e.key ? 1 : -1) : [ "Period", "Comma" ].includes(e.code) && 2 === i.watchPlayer?.getPlayerState?.() && G(("Period" === e.code ? 1 : -1) / (Number(i.watchVideo?.fps) || 30)), 
            "KeyK" === e.code && Y(), "KeyJ" === e.code && G(-10), "KeyL" === e.code && G(10), 
            "ArrowLeft" === e.code && G(-5), "ArrowRight" === e.code && G(5), "KeyM" === e.code && B(), 
            "KeyC" !== e.code || s.watchSettingsCaptions.disabled || _(!i.watchCaptions), "KeyF" === e.code && Z(s.watchStage);
          } else if ("shorts" === i.view) {
            if ([ "Space", "KeyK", "KeyC", "ArrowUp", "ArrowDown", "KeyM", "KeyF" ].includes(e.code) && e.preventDefault(), 
            "Space" === e.code) return void He("keyboard");
            if (e.repeat) return;
            "KeyC" === e.code && s.shortCaptions.click(), "KeyK" === e.code && Ve(), "ArrowUp" === e.code && Ue(-1), 
            "ArrowDown" === e.code && Ue(1), "KeyM" === e.code && De(), "KeyF" === e.code && Z(s.shortStage);
          }
        }
      }
    }), document.addEventListener("keyup", e => {
      if ("Space" === e.code && "keyboard" === qe?.source) return e.preventDefault(), 
      void Oe();
      "Space" === e.code && i.watchSpacePressed && "keyboard" === i.watchHoldSource && (e.preventDefault(), 
      z());
    });
  }(), v(), y(), h("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/status").then(e => {
    if (!e?.configured) throw new Error("NyxTube is not configured yet.");
    try {
      const t = new URL(e.invidiousEmbedOrigin);
      "https:" !== t.protocol || t.username || t.password || t.port || t.href !== t.origin + "/" || (i.invidiousEmbedOrigin = t.origin);
    } catch {}
    return s.watchBackup.hidden = !i.invidiousEmbedOrigin, i.nativeAvailable = !0 === e.nativeAvailable, 
    s.watchEngine.hidden = !i.nativeAvailable, async function() {
      const e = String(new URLSearchParams(location.search).get("video") || "").trim();
      if (!/^[A-Za-z0-9_-]{11}$/.test(e)) return S();
      const a = await h(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/video?id=${encodeURIComponent(e)}`), n = Array.isArray(a?.videos) ? a.videos[0] : null;
      if (!n?.id) throw new Error("That video could not be loaded in NyxTube.");
      if (!t(n)) return await S(), void l("This video is not available in DropTube.");
      i.catalog = [ n ], M(n);
    }();
  }).catch(e => {
    g([]), l(e.message || "NyxTube could not be started.");
  });
})();
