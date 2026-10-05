(() => {
  const t = document.querySelector("[data-target-ip]"), e = document.querySelector("[data-copy-ip]"), n = document.querySelector("[data-domain-form]"), a = document.querySelector("[data-submit]"), o = document.querySelector("[data-status]"), s = "tutsi" === document.body.dataset.site ? "tutsi" : "nyx", i = "tutsi" === s ? "Tutsi" : "Nyx";
  let r = "";
  function c(t, e = "") {
    o.hidden = !1, o.className = "status" + (e ? ` ${e}` : ""), o.textContent = t;
  }
  async function d(t) {
    const e = await t.text();
    try {
      return e ? JSON.parse(e) : {};
    } catch {
      throw new Error(`${i} returned an unexpected ${t.status} response.`);
    }
  }
  e.addEventListener("click", async () => {
    if (r) try {
      await navigator.clipboard.writeText(r), e.textContent = "Copied", setTimeout(() => {
        e.textContent = "Copy";
      }, 1400);
    } catch {
      c(`Copy this address: ${r}`);
    }
  }), n.addEventListener("submit", async t => {
    t.preventDefault(), a.disabled = !0;
    const e = a.textContent;
    a.textContent = "Verifying\u2026", o.hidden = !0;
    try {
      const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/custom-hostnames", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hostname: n.elements.hostname.value,
          site: s
        })
      }), e = await d(t);
      if (!t.ok) throw new Error(e.error || `Domain verification failed (${t.status}).`);
      o.hidden = !1, o.className = "status success", o.replaceChildren(document.createTextNode(`${e.message} `));
      const a = document.createElement("a");
      a.href = e.url, a.textContent = `Open ${e.hostname}`, o.append(a);
    } catch (r) {
      c(r.message || `${i} could not connect that domain.`, "error");
    } finally {
      a.disabled = !1, a.textContent = e;
    }
  }), async function() {
    try {
      const n = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/custom-hostnames/config", {
        credentials: "same-origin",
        cache: "no-store"
      }), o = await d(n);
      r = String(o.targetIps?.[0] || ""), t.textContent = r || "Not configured", e.disabled = !r, 
      a.disabled = !o.enabled, o.enabled || c(`Custom-domain connection is not enabled on this ${i} server yet.`, "error");
    } catch (n) {
      t.textContent = "Unavailable", e.disabled = !0, a.disabled = !0, c(n.message || `${i} could not load the domain configuration.`, "error");
    }
  }();
})();
