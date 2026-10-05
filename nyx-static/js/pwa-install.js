!function() {
  "use strict";
  let t = null, e = "";
  function n() {
    return window.matchMedia?.("(display-mode: standalone)")?.matches || !0 === window.navigator.standalone;
  }
  function a() {
    const t = navigator.userAgent || "";
    return /iPad|iPhone|iPod/i.test(t) ? "In Safari, tap Share, then Add to Home Screen." : /Firefox/i.test(t) ? "Firefox desktop does not offer PWA installation. Open Nyx in Chrome or Edge to install it." : /Safari/i.test(t) && !/Chrome|Chromium|Edg/i.test(t) ? "In Safari, choose File, then Add to Dock." : "Use the install icon in the browser address bar, or open the browser menu and choose Install Nyx.";
  }
  function o(t) {
    const e = document.createElement("section");
    e.dataset.nyxInstallCard = "true", e.className = "legacy" === t ? "settings-card" : "settings-block";
    const n = "\n      <h2>Install Nyx</h2>\n      <p data-install-nyx-status>Installs Nyx as an app with its own window and desktop icon.</p>", a = `<div class="settings-actions nyx-install-actions">\n      <button class="${"legacy" === t ? "" : "settings-action"}" data-install-nyx type="button">Install Nyx</button>\n      <button class="${"legacy" === t ? "" : "settings-action"}" data-download-nyx-singlefile type="button">Download Single File</button>\n    </div>`;
    return e.innerHTML = "dashboard" === t ? `<div class="nyx-settings-copy">${n}</div><div class="nyx-settings-control">${a}</div>` : `${n}${a}`, 
    e;
  }
  function s(a = e) {
    e = a, document.querySelectorAll(".browser-only-settings.nyx-settings-dashboard").forEach(t => {
      if (t.querySelector("[data-nyx-install-card]")) return;
      const e = t.querySelector('[data-settings-category="advanced"] .nyx-settings-group');
      e && e.prepend(o("dashboard"));
    }), document.querySelectorAll(".browser-only-settings .settings-section.active").forEach(t => {
      if (t.querySelector("[data-nyx-install-card]")) return;
      const e = o("browser"), n = [ ...t.querySelectorAll("h2") ].find(t => "Display Mode" === t.textContent.trim()), a = n?.closest(".settings-block");
      a ? a.after(e) : t.append(e);
    }), document.querySelectorAll(".settings-panel").forEach(t => {
      if (t.querySelector("[data-nyx-install-card]")) return;
      const e = t.querySelectorAll(":scope > .settings-grid"), n = e[1] || e[0];
      n && n.prepend(o("legacy"));
    });
    const s = n();
    document.querySelectorAll("[data-install-nyx]").forEach(t => {
      t.disabled = s, t.setAttribute("aria-disabled", String(s));
      const e = s ? "Nyx is Installed" : "Install Nyx";
      t.textContent !== e && (t.textContent = e);
    }), document.querySelectorAll("[data-install-nyx-status]").forEach(e => {
      const n = s ? "Nyx is installed on this device and opens in its own app window." : a || (t ? "Ready to install on this device." : "Installs Nyx as an app with its own window and desktop icon.");
      e.textContent !== n && (e.textContent = n);
    }), document.querySelectorAll("[data-download-nyx-singlefile]").forEach(t => {
      "true" !== t.dataset.nyxSingleFileBound && (t.dataset.nyxSingleFileBound = "true", 
      t.onclick = e => {
        e.preventDefault(), l(t);
      });
    });
  }
  async function i() {
    if (n()) return void s();
    if (!t) return void s(a());
    const e = t;
    t = null;
    try {
      const t = await e.prompt();
      s("accepted" === t?.outcome ? "Finishing the Nyx installation..." : "Installation was cancelled. You can try again anytime.");
    } catch {
      s(a());
    }
  }
  async function l(t) {
    const e = new URL("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/nyx-singlefile.html", window.location.href);
    e.searchParams.set("release", "2026.09.18.1"), e.searchParams.set("fresh", Date.now().toString(36));
    const n = t?.textContent || "Download Single File";
    t && (t.disabled = !0, t.textContent = "Downloading\u2026");
    const a = t?.closest("[data-nyx-install-card]")?.querySelector("[data-install-nyx-status]");
    try {
      const t = await fetch(e, {
        cache: "no-store",
        credentials: "same-origin"
      });
      if (!t.ok) throw new Error("The Nyx file is unavailable.");
      const n = await t.text();
      if (!n.trim().toLowerCase().startsWith("<!doctype html")) throw new Error("The Nyx file was incomplete.");
      const o = URL.createObjectURL(new Blob([ n ], {
        type: "text/html;charset=utf-8"
      })), s = document.createElement("a");
      s.href = o, s.download = "Nyx-Download.html", s.hidden = !0, document.body.appendChild(s), 
      s.click(), window.setTimeout(() => {
        s.remove(), URL.revokeObjectURL(o);
      }, 6e4), a && (a.textContent = "Nyx-Download.html was saved. Open it from your Downloads folder.");
    } catch {
      a && (a.textContent = "Nyx could not create the download. Check your connection and try again.");
    } finally {
      t && (t.disabled = !1, t.textContent = n);
    }
  }
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault(), t = e, s("Ready to install on this device.");
  }), window.addEventListener("appinstalled", () => {
    t = null, s();
  }), document.addEventListener("click", t => {
    const e = t.target.closest?.("[data-install-nyx]");
    e && (t.preventDefault(), i());
  }, !0);
  const r = new MutationObserver(() => s());
  function d() {
    s(), r.observe(document.body, {
      childList: !0,
      subtree: !0
    });
  }
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", d, {
    once: !0
  }) : d(), window.NyxInstall = {
    request: i,
    downloadSingleFile: l,
    refresh: s,
    get available() {
      return Boolean(t);
    },
    get installed() {
      return n();
    }
  };
}();
