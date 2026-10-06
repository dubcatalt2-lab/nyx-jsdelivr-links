export const publisherConfig = Object.freeze({
  hosts: [ "nyxlearning.org", "www.nyxlearning.org", "localhost", "127.0.0.1", "[::1]" ],
  bannerPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/banner.html",
  bannerWidth: 468,
  bannerHeight: 60,
  homeBanners: [ {
    path: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/side.html",
    width: 160,
    height: 600
  }, {
    path: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/side.html",
    width: 160,
    height: 600
  } ],
  homeLink: "https://asiafilm.org/4/4e423fea224eac7374c037f143e080e3",
  homeLimit: 2,
  homePeriodMs: 24e4,
  homeSpacingMs: 1e3
});

export function publisherHostAllowed(e = location.hostname) {
  return publisherConfig.hosts.includes(e);
}

export function publisherBaseMode() {
  try {
    const e = window.parent === window ? window : window.parent;
    return !1 === e.__NYX_RUNTIME_CONFIG__?.publisherAdsEnabled ? "off" : e.__nyxPublisherMode || (e.document.body?.classList.contains("browser-shell") ? "pending" : "standard");
  } catch {
    return "off";
  }
}

export function publisherMode() {
  const e = publisherBaseMode();
  try {
    const n = window.parent === window ? window : window.parent;
    if (n.__nyxAdcoinsFreeUntil > Date.now()) return "off";
    if ("standard" === e) {
      if (n !== window || document.hidden || document.body?.classList.contains("nyx-loading-active")) return "off";
      if (![ ...document.querySelectorAll(".browser-window.browser-blank .browser-home.nyx-minimal-home:not(.hidden)") ].some(e => e.getClientRects().length && "visible" === getComputedStyle(e).visibility)) return "off";
    }
    return e;
  } catch {
    return "off";
  }
}

export function popupPolicy(e = publisherMode()) {
  return "off" === e || "pending" === e ? null : "adkid" === e ? {
    limit: 100,
    period: 6e4,
    spacing: 600
  } : {
    limit: publisherConfig.homeLimit,
    period: publisherConfig.homePeriodMs,
    spacing: publisherConfig.homeSpacingMs
  };
}
