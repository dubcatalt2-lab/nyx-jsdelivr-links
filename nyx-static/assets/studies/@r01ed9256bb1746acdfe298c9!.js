(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  await new Promise(e => {
    let t = 0;
    const n = r => {
      let a = document.visibilityState !== "hidden";
      try {
        for (let e = window.frameElement; e; e = e.parentElement) {
          const t = e.ownerDocument.defaultView.getComputedStyle(e);
          if (!e.getClientRects().length || t.visibility === "hidden" || t.display === "none" || Number(t.opacity) === 0) {
            a = false;
            break;
          }
        }
      } catch {}
      if (!a) t = 0; else if (!t) t = r; else if (r - t >= 1500) {
        e();
        return;
      }
      requestAnimationFrame(n);
    };
    requestAnimationFrame(n);
  });
  history.replaceState(history.state, "", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/studies/@r7b5826e5b0709432cd40e00b2a15cd2c!.html" + location.search + location.hash);
  const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/studies/@rb9091ce7c930268cfe8bb0cfd5d51e7a!.json", {
    cache: "no-cache",
    signal: AbortSignal.timeout(15e3)
  });
  if (!e.ok) throw Error("Library document unavailable");
  const t = function e(t) {
    if (t?.representation !== "n7x-xor-1") return t;
    if (!Array.isArray(t.key) || t.key.length !== 32 || !t.key.every(e => Number.isInteger(e) && e >= 0 && e <= 255) || !Array.isArray(t.chunks) || !t.chunks.every(e => typeof e === "string")) {
      throw new Error("Invalid catalog representation");
    }
    const n = Uint8Array.from(atob(t.chunks.join("")), (e, n) => e.charCodeAt(0) ^ t.key[n % t.key.length]);
    return JSON.parse(new TextDecoder("utf-8", {
      fatal: true
    }).decode(n));
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