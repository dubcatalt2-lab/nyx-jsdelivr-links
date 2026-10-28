(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  await new Promise(e => {
    let t = 0;
    const a = n => {
      let r = document.visibilityState !== "hidden";
      try {
        for (let e = window.frameElement; e; e = e.parentElement) {
          const t = e.ownerDocument.defaultView.getComputedStyle(e);
          if (!e.getClientRects().length || t.visibility === "hidden" || t.display === "none" || Number(t.opacity) === 0) {
            r = false;
            break;
          }
        }
      } catch {}
      if (!r) t = 0; else if (!t) t = n; else if (n - t >= 1500) {
        e();
        return;
      }
      requestAnimationFrame(a);
    };
    requestAnimationFrame(a);
  });
  history.replaceState(history.state, "", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/studies/@r1631b3425c26c92ee51ad5fd5cbacef6!.html" + location.search + location.hash);
  const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/studies/@r57462d79a1e753ea7a03a03dc3a22da0!.json", {
    cache: "no-cache",
    signal: AbortSignal.timeout(15e3)
  });
  if (!e.ok) throw Error("Library document unavailable");
  const t = function e(t) {
    if (t?.representation !== "n7x-xor-1") return t;
    if (!Array.isArray(t.key) || t.key.length !== 32 || !t.key.every(e => Number.isInteger(e) && e >= 0 && e <= 255) || !Array.isArray(t.chunks) || !t.chunks.every(e => typeof e === "string")) {
      throw new Error("Invalid catalog representation");
    }
    const a = Uint8Array.from(atob(t.chunks.join("")), (e, a) => e.charCodeAt(0) ^ t.key[a % t.key.length]);
    return JSON.parse(new TextDecoder("utf-8", {
      fatal: true
    }).decode(a));
  }(await e.json());
  document.open();
  document.write(t);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});