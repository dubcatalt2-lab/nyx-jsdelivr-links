const Di = e => String(e ?? "").replace(/[&<>"']/g, e => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[e])), p = e => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${{
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  key: '<circle cx="8" cy="8" r="5"/><path d="m12 12 9 9m-5-5 3-3m0 6 3-3"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
  revoke: '<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>',
  add: '<path d="M12 4v16M4 12h16"/>'
}[e] || ""}</svg>`, ey = e => 0 === e ? "No expiry" : new Date(e).toLocaleString();

function ay(e, a = !1) {
  if (document.querySelector(".nyx-adfree-dialog")?.close(), !document.getElementById("nyx-adfree-style")) {
    const e = document.createElement("style");
    e.id = "nyx-adfree-style", e.textContent = ".nyx-adfree-dialog{box-sizing:border-box;width:min(460px,calc(100vw - 32px));max-height:85dvh;margin:auto;padding:24px;border:1px solid var(--obsidian-border,#ffffff24);border-radius:20px;background:var(--obsidian-surface,#181818);color:var(--obsidian-text,#eee);box-shadow:0 24px 100px #0008;font-family:inherit;font-size:14px;line-height:1.5}.nyx-adfree-dialog.wide{width:min(760px,calc(100vw - 32px))}.nyx-adfree-dialog::backdrop{background:#0009;backdrop-filter:blur(5px)}.nyx-adfree-dialog header{display:flex;align-items:center;justify-content:space-between;gap:12px}.nyx-adfree-dialog h2{margin:0;font-size:21px}.nyx-adfree-dialog h3{font-size:15px;margin:0}.nyx-adfree-dialog p{color:var(--obsidian-muted,#aaa);overflow-wrap:anywhere}.nyx-adfree-dialog form{display:grid;gap:14px;margin:18px 0}.nyx-adfree-dialog label{display:grid;gap:6px}.nyx-adfree-dialog input,.nyx-adfree-dialog select{box-sizing:border-box;width:100%;min-width:0;padding:10px 12px;background:var(--obsidian-bg,#111);color:inherit;border:1px solid var(--obsidian-border,#ffffff24);border-radius:9px;font:inherit}.nyx-adfree-dialog button{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 13px;border:1px solid var(--obsidian-border,#ffffff24);border-radius:9px;background:var(--obsidian-bg,#111);color:inherit;font:inherit;cursor:pointer}.nyx-adfree-dialog button:disabled{opacity:.5;cursor:wait}.nyx-adfree-dialog button:focus-visible,.nyx-adfree-dialog input:focus-visible,.nyx-adfree-dialog select:focus-visible{outline:2px solid currentColor;outline-offset:2px}.nyx-adfree-dialog article{border-top:1px solid var(--obsidian-border,#ffffff24);padding:18px 0}.nyx-adfree-dialog .adfree-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}.nyx-adfree-dialog .adfree-error{color:#ffb4ab}.nyx-adfree-dialog [data-key-result]{padding:14px;border:1px solid var(--obsidian-border,#ffffff24);border-radius:12px}.nyx-adfree-dialog [hidden]{display:none!important}@media(max-width:520px){.nyx-adfree-dialog{padding:18px}.nyx-adfree-dialog .adfree-fields{grid-template-columns:1fr}}", 
    document.head.append(e);
  }
  const t = document.activeElement, o = document.createElement("dialog");
  return o.className = "nyx-adfree-dialog" + (a ? " wide" : ""), o.setAttribute("aria-label", e), 
  o.setAttribute("data-nyx-owned-overlay", ""), o.innerHTML = `<header><h2>${Di(e)}</h2><button type="button" data-close aria-label="Close">${p("close")}</button></header><div data-content></div><p data-status role="status" aria-live="polite"></p>`, 
  o.querySelector("[data-close]").onclick = () => o.close(), o.addEventListener("close", () => {
    o.remove(), t?.isConnected && t.focus();
  }, {
    once: !0
  }), document.body.append(o), o.showModal(), {
    dialog: o,
    content: o.querySelector("[data-content]"),
    status(e, a = !1) {
      const t = o.querySelector("[data-status]");
      t.textContent = e, t.classList.toggle("adfree-error", a);
    }
  };
}

export async function openAdFreeManager({api: e}) {
  const {dialog: a, content: t, status: o} = ay("Ad-free keys", !0);
  t.innerHTML = `<p>One account per key. Access starts when the key is redeemed or assigned.</p>\n    <form data-create><div class="adfree-fields"><label>Label<input name="label" maxlength="80" placeholder="Optional note"></label><label>Duration<select name="durationDays"><option value="7">7 days</option><option value="30" selected>30 days</option><option value="90">90 days</option><option value="365">1 year</option><option value="0">No expiry</option></select></label></div>\n    <label>Assign to account ID<input name="uid" maxlength="128" placeholder="Leave empty to make a redeemable key"></label>\n    <button type="submit">${p("add")}Create key</button></form>\n    <section data-key-result hidden><p>Copy this key now. It is only shown once.</p><input data-new-key readonly aria-label="New ad-free key"><button type="button" data-copy>${p("copy")}Copy key</button></section>\n    <section data-list></section><button type="button" data-next hidden>Next page</button><button type="button" data-latest hidden>Latest keys</button>`;
  let n = "", d = !1;
  const r = t.querySelector("[data-list]");
  async function i(o = "") {
    const d = await e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ad-free-keys" + (o ? "?cursor=" + encodeURIComponent(o) : ""));
    a.isConnected && (n = d.nextCursor || "", r.innerHTML = d.keys.map(e => `<article data-key-id="${Di(e.id)}"><h3>${Di(e.label || "Ad-free key")} \xb7 \u2026${Di(e.suffix)}</h3><p>${Di(e.status)} \xb7 ${e.durationDays ? `${e.durationDays} days` : "No expiry"}${e.assignedUid ? `<br>Account: ${Di(e.assignedUid)}<br>${e.expiresAtMs ? "Ends " + Di(ey(e.expiresAtMs)) : "No expiry"}` : ""}</p>\n      ${"unused" === e.status ? `<form data-assign><label>Account ID<input name="uid" required maxlength="128"></label><button type="submit">${p("key")}Assign key</button></form>` : ""}\n      ${"revoked" !== e.status ? `<button type="button" data-revoke>${p("revoke")}Revoke key</button>` : ""}</article>`).join("") || "<p>No keys yet.</p>", 
    t.querySelector("[data-next]").hidden = !n, t.querySelector("[data-latest]").hidden = !o);
  }
  async function s(e, a) {
    if (!d) {
      d = !0, e.disabled = !0, o("");
      try {
        await a();
      } catch (t) {
        o(t.message, !0);
      } finally {
        d = !1, e.disabled = !1;
      }
    }
  }
  t.addEventListener("submit", n => {
    n.preventDefault();
    const d = n.target, r = d.querySelector('button[type="submit"]');
    d.matches("[data-create]") && s(r, async () => {
      const n = await e("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ad-free-keys", {
        method: "POST",
        body: JSON.stringify({
          label: d.elements.label.value,
          durationDays: Number(d.elements.durationDays.value),
          uid: d.elements.uid.value.trim()
        })
      });
      a.isConnected && (t.querySelector("[data-new-key]").value = n.key, t.querySelector("[data-key-result]").hidden = !1, 
      o(n.assignedUid ? "Key created and assigned." : "Key created."), await i());
    }), d.matches("[data-assign]") && s(r, async () => {
      await e(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ad-free-keys/${d.closest("[data-key-id]").dataset.keyId}/assign`, {
        method: "POST",
        body: JSON.stringify({
          uid: d.elements.uid.value.trim()
        })
      }), o("Ad-free access assigned."), await i();
    });
  }), t.addEventListener("click", a => {
    const d = a.target.closest("button");
    if (d && (d.matches("[data-copy]") && s(d, async () => {
      await navigator.clipboard.writeText(t.querySelector("[data-new-key]").value), o("Key copied.");
    }), d.matches("[data-next]") && s(d, () => i(n)), d.matches("[data-latest]") && s(d, () => i()), 
    d.matches("[data-revoke]"))) {
      if (!d.dataset.confirm) return d.dataset.confirm = "true", void (d.textContent = "Confirm revocation");
      s(d, async () => {
        await e(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ad-free-keys/${d.closest("[data-key-id]").dataset.keyId}/revoke`, {
          method: "POST",
          body: "{}"
        }), o("Key revoked."), await i();
      });
    }
  });
  try {
    await i();
  } catch (l) {
    o(l.message, !0);
  }
}

export async function openAdFreeRedeem({getToken: e, onAccount: a}) {
  const {dialog: t, content: o, status: n} = ay("Ad-free access");
  async function d(a, t) {
    const o = await e();
    if (!o) throw new Error("Sign in to redeem a key.");
    const n = await fetch(a, {
      method: t ? "POST" : "GET",
      headers: {
        Authorization: "Bearer " + o,
        ...t ? {
          "Content-Type": "application/json"
        } : {}
      },
      body: t ? JSON.stringify(t) : void 0,
      cache: "no-store"
    }), d = await n.json();
    if (!n.ok) throw new Error(d.error || "The request failed.");
    return d;
  }
  o.innerHTML = '<p data-access>Checking your account\u2026</p><form><label>Ad-free key<input name="key" required maxlength="80" autocomplete="off" spellcheck="false" placeholder="NYX-ADFREE-\u2026"></label><button type="submit">' + p("key") + "Redeem key</button></form>";
  const r = e => {
    a(e), t.isConnected && (o.querySelector("[data-access]").textContent = e.adFree?.active ? "Ad-free access \xb7 " + ey(e.adFree.expiresAtMs) : "off" === e.publisherMode ? "Your account already has ad-free access." : "Redeem a key from the owner to turn off Nyx ads.", 
    o.querySelector("form").hidden = !0 === e.adFree?.active);
  };
  o.querySelector("form").addEventListener("submit", async e => {
    e.preventDefault();
    const a = e.target, t = a.querySelector("button");
    if (!t.disabled) {
      t.disabled = !0, n("");
      try {
        const e = await d("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/ad-free/redeem", {
          key: a.elements.key.value
        });
        a.reset(), r(e), n("Ad-free access is active.");
      } catch (o) {
        n(o.message, !0);
      } finally {
        t.disabled = !1;
      }
    }
  });
  const i = o.querySelector("form button");
  i.disabled = !0;
  try {
    r(await d("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/me"));
  } catch (s) {
    n(s.message, !0);
  } finally {
    i.disabled = !1;
  }
}
