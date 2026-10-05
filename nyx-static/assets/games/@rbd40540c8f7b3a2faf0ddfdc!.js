(() => {
  const e = document.currentScript, t = e?.dataset.provider;
  if (t) {
    const e = new URLSearchParams(location.search).get("game"), n = new Set, r = r => {
      !e || n.has(r) || n.size >= 2 || (n.add(r), fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/games/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          provider: t,
          game: e,
          reason: r
        }),
        keepalive: !0
      }).catch(() => {}));
    };
    return window.nyxReportGameFailure = r, void addEventListener("message", e => {
      const t = document.querySelector("#gameFrame,#game");
      e.source === t?.contentWindow && "nyx:game-health" === e.data?.type && [ "no-render", "resource-error" ].includes(e.data.reason) && r(e.data.reason);
    });
  }
  let n = !1, r = !1, a = 0, o = performance.now();
  const s = [], c = () => {
    n = !0;
    for (const e of s) e();
    s.length = 0;
  };
  for (const [i, l] of [ [ "CanvasRenderingContext2D", [ "drawImage", "fillText", "stroke", "putImageData" ] ], [ "WebGLRenderingContext", [ "drawArrays", "drawElements" ] ], [ "WebGL2RenderingContext", [ "drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced" ] ] ]) {
    const e = globalThis[i]?.prototype;
    if (e) for (const t of l) {
      const n = e[t];
      if ("function" != typeof n) continue;
      const r = function(...e) {
        const t = Reflect.apply(n, this, e);
        return c(), t;
      };
      try {
        e[t] = r, s.push(() => {
          e[t] === r && (e[t] = n);
        });
      } catch {}
    }
  }
  addEventListener("error", e => {
    "SCRIPT" !== e.target?.tagName && "LINK" !== e.target?.tagName || (r = !0);
  }, !0), addEventListener("unhandledrejection", () => {
    r = !0;
  });
  const d = setInterval(() => {
    const e = performance.now();
    if (document.hidden || (a += Math.min(5e3, e - o)), o = e, n) return void clearInterval(d);
    if (a < 6e4) return;
    clearInterval(d);
    for (const n of s) n();
    const t = [ ...document.querySelectorAll("canvas") ].some(e => e.width > 40 && e.height > 40), c = (document.body?.innerText || "").trim();
    (t || !c && !document.querySelector("iframe,object,embed,ruffle-player")) && parent.postMessage({
      type: "nyx:game-health",
      reason: r ? "resource-error" : "no-render"
    }, "*");
  }, 5e3);
  addEventListener("pagehide", () => {
    clearInterval(d);
    for (const e of s) e();
  }, {
    once: !0
  });
})();
