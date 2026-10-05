globalThis.NyxDuckImageViewport = function(t, e) {
  if (!t?.frame) return;
  let r;
  try {
    r = t.frame.contentDocument;
  } catch {
    return;
  }
  if (!r?.documentElement || "true" === r.documentElement.dataset.nyxDuckImageViewport) return;
  const i = () => {
    try {
      const r = String(t.frame.contentWindow?.location?.href || "");
      return e(r) || e(t.sourceUrl || t.url || "") || t.sourceUrl || t.url || "";
    } catch {
      return e(t.sourceUrl || t.url || "") || t.sourceUrl || t.url || "";
    }
  };
  let n;
  try {
    n = new URL(i(), location.href);
  } catch {
    return;
  }
  if ("duckduckgo.com" !== n.hostname.replace(/^www\./i, "").toLowerCase()) return;
  r.documentElement.dataset.nyxDuckImageViewport = "true";
  const a = t => {
    const e = String(t || "").trim(), r = e.match(/https?%3a%2f%2f/i);
    if (!r) return "";
    const i = 0 === r.index, n = e.includes("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    if (!i && !n) return "";
    let a = e.slice(r.index);
    const o = a.search(/[?&]%24(?:rfp|io|tf|pf|iframe)=/i);
    o > 0 && (a = a.slice(0, o));
    let s = a;
    for (let l = 0; l < 2 && /%[0-9a-f]{2}/i.test(s); l++) try {
      s = decodeURIComponent(s);
    } catch {
      break;
    }
    return /^https?:\/\//i.test(s) ? s : "";
  }, o = () => {
    r.querySelectorAll("img,source").forEach(t => {
      const e = t.getAttribute("src") || "", r = a(e);
      r && r !== e && t.setAttribute("src", r), [ "data-src", "data-original", "data-lazy-src", "data-image-url" ].forEach(r => {
        const i = t.getAttribute(r) || "", n = a(i);
        n && n !== i && (t.setAttribute(r, n), "IMG" !== t.tagName || e && !a(e) || t.setAttribute("src", n));
      });
      const i = t.getAttribute("srcset") || "", n = i.split(",")[0]?.trim().split(/\s+/)[0] || "", o = a(n);
      o && (t.removeAttribute("srcset"), t.setAttribute("src", o));
    });
  }, s = () => {
    const e = t.frame.contentWindow;
    if (!e || !t.frame.getClientRects().length) return;
    let n;
    try {
      n = new URL(i());
    } catch {
      return;
    }
    if ("images" !== n.searchParams.get("ia") && "images" !== n.searchParams.get("iax")) return;
    const a = e.innerHeight, o = e.innerWidth;
    for (const t of r.images) {
      if (t.closest('header,nav,aside,[role="dialog"],[class*="modal" i],[class*="anomaly" i]')) continue;
      const e = t.getBoundingClientRect();
      if (e.width < 50 || e.height < 50 || e.bottom < -a || e.top > 3 * a || e.right < 0 || e.left > o) continue;
      "lazy" === t.getAttribute("loading") && t.setAttribute("loading", "eager");
      const r = t.getAttribute("src") || "";
      if (r && "about:blank" !== r && !(/^data:image\//i.test(r) && t.complete && t.naturalWidth <= 1) || t.getAttribute("srcset")) continue;
      const i = t.getAttribute("data-src") || t.getAttribute("data-original") || t.getAttribute("data-lazy-src");
      if (i) try {
        const e = new URL(i, n);
        [ "http:", "https:" ].includes(e.protocol) && t.setAttribute("src", i);
      } catch {}
    }
  }, l = () => {
    const t = [ "AI images", "All sizes", "All colors", "All types", "All layouts", "Licenses" ];
    r.querySelectorAll("nav").forEach(e => {
      const i = String(e.innerText || e.textContent || "").replace(/\s+/g, " ").trim();
      if (t.filter(t => i.includes(t)).length < 3) return;
      const n = [ ...e.querySelectorAll("ul") ].find(t => {
        const e = t.getBoundingClientRect?.();
        return e && e.width >= 300 && e.height >= 20 && e.height <= 96;
      });
      if (!n) return;
      const a = e.getBoundingClientRect?.(), o = n.getBoundingClientRect?.();
      if (!a || !o || a.height <= o.height + 120) return;
      const s = Math.ceil(Math.max(40, o.height + 16));
      e.style.setProperty("height", `${s}px`, "important"), e.style.setProperty("min-height", "0", "important"), 
      e.style.setProperty("max-height", `${s}px`, "important"), e.style.setProperty("overflow", "visible", "important");
      const l = n.parentElement;
      if (l && l !== e) {
        const t = Math.ceil(Math.max(32, o.height));
        l.style.setProperty("height", `${t}px`, "important"), l.style.setProperty("min-height", "0", "important"), 
        l.style.setProperty("max-height", `${t}px`, "important"), l.style.setProperty("overflow", "visible", "important"), 
        l.dataset.nyxDuckImageFilterWrapperFixed = "true";
      }
      e.dataset.nyxDuckImageFilterFixed = "true", r.documentElement.dataset.nyxDuckImageFilterFixed = "true";
    });
  }, c = () => {
    const e = t.frame.contentWindow;
    if (!e || !r.body) return;
    const i = String(r.body.innerText || "");
    if (!/AI images/i.test(i) || !/All sizes/i.test(i) || !/All layouts/i.test(i)) return r.querySelectorAll('[data-nyx-duck-mainline-hidden="true"]').forEach(t => {
      [ "display", "min-height", "height", "margin", "padding" ].forEach(e => t.style.removeProperty(e)), 
      delete t.dataset.nyxDuckMainlineHidden;
    }), r.querySelectorAll('[data-nyx-duck-image-gap-fixed="true"]').forEach(t => {
      t.style.removeProperty("margin-top"), delete t.dataset.nyxDuckImageGapFixed;
    }), r.querySelectorAll('[data-nyx-duck-image-filter-fixed="true"]').forEach(t => {
      [ "height", "min-height", "max-height", "overflow" ].forEach(e => t.style.removeProperty(e)), 
      delete t.dataset.nyxDuckImageFilterFixed;
    }), void r.querySelectorAll('[data-nyx-duck-image-filter-wrapper-fixed="true"]').forEach(t => {
      [ "height", "min-height", "max-height", "overflow" ].forEach(e => t.style.removeProperty(e)), 
      delete t.dataset.nyxDuckImageFilterWrapperFixed;
    });
    const n = e.scrollY || r.scrollingElement?.scrollTop || 0, a = [ ...r.images ].filter(t => {
      if (t.closest?.('header,nav,aside,[role="dialog"],[class*="modal" i],[class*="anomaly" i]')) return !1;
      const e = t.getBoundingClientRect?.();
      return e && e.width >= 100 && e.height >= 70;
    }).sort((t, e) => {
      const r = t.getBoundingClientRect(), i = e.getBoundingClientRect();
      return r.top - i.top || r.left - i.left;
    });
    if (a.length < 4) return;
    const o = a.slice(0, Math.min(12, a.length));
    r.querySelectorAll('[data-testid="mainline"],.results--main').forEach(t => {
      o.some(e => t.contains(e)) || (t.style.setProperty("display", "none", "important"), 
      t.style.setProperty("min-height", "0", "important"), t.style.setProperty("height", "0", "important"), 
      t.style.setProperty("margin", "0", "important"), t.style.setProperty("padding", "0", "important"), 
      t.dataset.nyxDuckMainlineHidden = "true");
    });
    let s = 0;
    r.querySelectorAll("div,nav,section").forEach(t => {
      const e = String(t.innerText || "").replace(/\s+/g, " ").trim();
      if ([ "AI images", "All sizes", "All colors", "All types", "All layouts", "Licenses" ].filter(t => e.includes(t)).length < 3) return;
      const r = t.getBoundingClientRect?.();
      !r || r.width < 300 || r.height <= 0 || r.height > 120 || (s = Math.max(s, r.bottom + n));
    });
    const l = Math.max(110, s ? s + 12 : 0);
    let c = o[0].parentElement;
    for (;c && !o.every(t => c.contains(t)); ) c = c.parentElement;
    if (!c || c === r.body || c === r.documentElement) return;
    for (;c.parentElement && c.parentElement !== r.body && c.parentElement !== r.documentElement; ) {
      const t = c.parentElement;
      if (t.querySelector('[data-testid="header"],form[data-testid="search-form"]')) break;
      const e = t.getBoundingClientRect?.();
      if (!e || (e?.top || 0) + n < l + 180) break;
      c = t;
    }
    if ("true" === c.dataset.nyxDuckImageGapFixed) return;
    const u = c.getBoundingClientRect?.();
    if (!u) return;
    const d = Math.round(u.top + n - l);
    if (d < 220) return;
    const m = Number.parseFloat(e.getComputedStyle(c).marginTop) || 0;
    c.style.setProperty("margin-top", m - d + "px", "important"), c.dataset.nyxDuckImageGapFixed = "true", 
    r.documentElement.dataset.nyxDuckImageGapFixed = "true";
  };
  let u = !1;
  const d = () => {
    u || (u = !0, requestAnimationFrame(() => {
      u = !1, l(), o(), c(), s();
    }));
  };
  try {
    new MutationObserver(d).observe(r.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [ "src", "srcset", "loading", "data-src", "data-original", "data-lazy-src", "data-image-url" ]
    });
  } catch {}
  let m = !1;
  const g = () => {
    m || (m = !0, requestAnimationFrame(() => {
      m = !1, s();
    }));
  };
  r.addEventListener("load", g, !0), r.addEventListener("scroll", g, {
    capture: !0,
    passive: !0
  }), r.defaultView?.addEventListener("resize", g, {
    passive: !0
  }), l(), o(), c(), s(), [ 250, 700, 1400, 2600, 4200 ].forEach(t => setTimeout(() => {
    l(), o(), c(), s();
  }, t));
};
