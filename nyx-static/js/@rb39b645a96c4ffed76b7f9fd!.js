!function() {
  "use strict";
  window.createNyxScreenChat = function({conversation: e, input: t, form: r, stop: o, status: a, brand: n}) {
    let s, c, l, i, u, d, h, p, b, m = !1, y = 0;
    function f() {
      if (!s) return;
      const r = c.scrollHeight - c.scrollTop - c.clientHeight < 48;
      c.replaceChildren(...[ ...e.querySelectorAll(".ai-message") ].slice(-8).map(e => {
        const t = e.cloneNode(!0);
        return t.querySelectorAll("[id]").forEach(e => e.removeAttribute("id")), t.removeAttribute("id"), 
        t.querySelectorAll(".ai-message-actions,button").forEach(e => e.remove()), t;
      })), r && (c.scrollTop = c.scrollHeight), i.disabled = t.disabled, l.disabled = t.disabled, 
      s.querySelector("[data-screen-chat-status]").textContent = a.textContent, s.querySelector("[data-screen-chat-title]").textContent = n() + " \xb7 Screen share";
    }
    function v() {
      y++, h?.disconnect(), p?.disconnect(), clearTimeout(b), s?.remove(), s = null;
      const e = d;
      d = null, e && !e.closed && e.close();
    }
    async function S(e = !1) {
      if (m || d || !s) return;
      m = !0;
      const t = y;
      let r;
      try {
        let a;
        try {
          a = window.top.documentPictureInPicture || window.documentPictureInPicture;
        } catch {}
        if (a?.requestWindow) try {
          r = await a.requestWindow({
            width: 560,
            height: 380
          });
        } catch {}
        if (r || e || (r = window.open("about:blank", "", "popup,width=560,height=380")), 
        !r) return void (e || (s.querySelector("[data-screen-chat-status]").textContent = "Allow popups to open a separate window."));
        if (t !== y || !s) return void r.close();
        d = r;
        const c = r.document;
        c.title = n() + " screen share", c.documentElement.dataset.tutsiApp = document.documentElement.dataset.tutsiApp || "";
        for (const e of document.querySelectorAll('link[rel="stylesheet"],style')) {
          const t = e.cloneNode(!0);
          "LINK" === t.tagName && (t.href = e.href), c.head.append(t);
        }
        const i = getComputedStyle(document.documentElement);
        for (let e = 0; e < i.length; e++) {
          const t = i[e];
          t.startsWith("--") && c.documentElement.style.setProperty(t, i.getPropertyValue(t));
        }
        c.body.className = "ai-screen-chat-window", c.body.style.fontFamily = getComputedStyle(document.body).fontFamily, 
        c.body.append(s), s.classList.add("is-detached"), u.hidden = !0, r.addEventListener("pagehide", () => {
          d === r && (d = null, o());
        }, {
          once: !0
        }), l.focus();
      } finally {
        m = !1;
      }
    }
    return {
      start: function() {
        v(), s = document.createElement("section"), s.className = "ai-screen-chat", s.setAttribute("role", "region"), 
        s.setAttribute("aria-label", "Screen-sharing chat"), s.innerHTML = '<header><strong data-screen-chat-title></strong><div><button type="button" data-screen-chat-popout aria-label="Pop out screen chat">\u2197</button><button type="button" data-screen-chat-stop>Stop sharing</button></div></header><div class="ai-screen-chat-messages" role="log" aria-label="Screen chat replies"></div><form><label for="screenChatInput">Ask about your screen</label><div class="ai-screen-chat-compose"><textarea id="screenChatInput" rows="2" placeholder="Ask about your screen\u2026"></textarea><button type="submit" aria-label="Send screen chat message">Send</button></div></form><small data-screen-chat-status role="status"></small>', 
        document.body.append(s), c = s.querySelector(".ai-screen-chat-messages"), l = s.querySelector("textarea"), 
        i = s.querySelector("[type=submit]"), u = s.querySelector("[data-screen-chat-popout]"), 
        u.onclick = () => {
          S();
        }, s.querySelector("[data-screen-chat-stop]").onclick = o, s.querySelector("form").onsubmit = e => {
          e.preventDefault(), !t.disabled && l.value.trim() && (t.value = l.value, t.dispatchEvent(new Event("input", {
            bubbles: !0
          })), r.requestSubmit(), l.value = "", f());
        }, l.onkeydown = e => {
          "Enter" !== e.key || e.shiftKey || e.isComposing || (e.preventDefault(), s.querySelector("form").requestSubmit());
        }, h = new MutationObserver(() => {
          b || (b = setTimeout(() => {
            b = 0, f();
          }, 80));
        }), h.observe(e, {
          childList: !0,
          subtree: !0,
          characterData: !0
        }), p = new MutationObserver(f), p.observe(a, {
          childList: !0,
          subtree: !0,
          characterData: !0
        }), p.observe(t, {
          attributes: !0,
          attributeFilter: [ "disabled" ]
        }), f(), l.focus(), S(!0);
      },
      destroy: v,
      refresh: f
    };
  };
}();
