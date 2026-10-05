export function setupScreen({notice: e}) {
  const t = document.getElementById("shareScreen"), r = document.getElementById("screenPanel"), n = document.getElementById("screenPreview");
  let a = null, i = !1, d = 0;
  function o() {
    d++, a?.getTracks().forEach(e => e.stop()), a = null, n.srcObject = null, r.hidden = !0, 
    t.setAttribute("aria-pressed", "false");
  }
  return t.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>', 
  t.onclick = async () => {
    if (a) return void o();
    if (i) return;
    if (!navigator.mediaDevices?.getDisplayMedia) return void e("Screen sharing is unavailable in this browser.");
    i = !0;
    const s = ++d;
    try {
      const e = await navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 5
        },
        audio: !1
      });
      if (s !== d) return void e.getTracks().forEach(e => e.stop());
      if (a = e, n.srcObject = a, await n.play(), s !== d) return;
      r.hidden = !1, t.setAttribute("aria-pressed", "true"), a.getVideoTracks()[0].addEventListener("ended", o, {
        once: !0
      });
    } catch (c) {
      o(), "NotAllowedError" !== c.name && e("Could not start screen sharing.");
    } finally {
      i = !1;
    }
  }, document.getElementById("stopScreen").onclick = o, window.addEventListener("pagehide", o), 
  {
    capture: async function() {
      if (!a) return null;
      if (n.readyState < 2) throw Error("The shared screen is still loading. Try again.");
      const e = document.createElement("canvas"), t = Math.min(1, 1280 / n.videoWidth);
      let r;
      e.width = Math.max(1, Math.round(n.videoWidth * t)), e.height = Math.max(1, Math.round(n.videoHeight * t)), 
      e.getContext("2d").drawImage(n, 0, 0, e.width, e.height);
      for (const n of [ .8, .6, .4, .25 ]) if (r = e.toDataURL("image/jpeg", n), r.length < 28e4) return {
        dataUrl: r,
        screenCapture: !0
      };
      throw Error("The shared screen is too detailed. Share a smaller window.");
    },
    stop: o
  };
}
