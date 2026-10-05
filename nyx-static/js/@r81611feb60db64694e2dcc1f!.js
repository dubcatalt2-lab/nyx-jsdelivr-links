!function() {
  "use strict";
  const o = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/nyx-cat-moon.svg?v=3", e = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/nyx-cat-moon-small.svg?v=3";
  window.NyxLogo = {
    apply: async function(t = "default", n = document) {
      return n.documentElement?.style.setProperty("--nyx-themed-logo-url", 'url("' + o + '")'), 
      n.body?.style.setProperty("--nyx-themed-logo-url", 'url("' + o + '")'), n.querySelectorAll?.('[data-nyx-logo],img[src$="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/nyx-monogram.png"],img[src$="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/nyx-logo.png"],img[src$="firefly-tab-logo-bold.png"]').forEach(t => {
        t.dataset.nyxLogo = "true", "IMG" === t.tagName && (t.src = o), "LINK" === t.tagName && (t.href = e, 
        t.type = "image/svg+xml");
      }), o;
    },
    themedUrl: async function() {
      return o;
    },
    croppedUrl: async function() {
      return e;
    },
    source: o,
    smallSource: e
  };
}();
