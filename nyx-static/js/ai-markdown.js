(() => {
  "use strict";
  function t(t) {
    return String(t ?? "").replace(/[&<>"']/g, t => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[t]));
  }
  function e(e, n = !1) {
    const r = String(e ?? "").trim();
    if (!r) return "";
    try {
      if (window.katex?.renderToString) return window.katex.renderToString(r, {
        displayMode: Boolean(n),
        throwOnError: !1,
        strict: "ignore",
        trust: !1,
        output: "htmlAndMathml"
      });
    } catch (s) {
      console.warn("Nyx AI could not render math:", s);
    }
    return `<span class="ai-math-fallback">${t(r.replace(/\\text\{([^{}]*)\}/g, "$1").replace(/\\[,;:!]/g, " ").replace(/\\(?:quad|qquad)\b/g, " ").replace(/\\(?:times|cdot)/g, " \xd7 ").replace(/\\leq?/g, "\u2264").replace(/\\geq?/g, "\u2265").replace(/\\neq/g, "\u2260").replace(/\\pm/g, "\xb1").replace(/[{}]/g, ""))}</span>`;
  }
  function n(n) {
    const r = [];
    let s = String(n ?? "").replace(/`([^`\n]+)`/g, (e, n) => {
      const s = `@@NYX_INLINE_${r.length}@@`;
      return r.push(`<code>${t(n)}</code>`), s;
    });
    const o = [];
    s = s.replace(/\\+\[([^\n]*?)\\+\]|\\+\(([^\n]*?)\\+\)/g, (t, n, r) => {
      const s = `@@NYX_MATH_${o.length}@@`;
      return o.push(e(n ?? r, void 0 !== n)), s;
    }), s = s.replace(/(?<!\\)\$([^\s$](?:[^$\n]*?[^\s$])?)\$(?!\d)/g, (t, n) => {
      const r = `@@NYX_MATH_${o.length}@@`;
      return o.push(e(n, !1)), r;
    });
    let c = t(s);
    return c = c.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'), 
    c = c.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>"), c = c.replace(/__([^_\n]+)__/g, "<strong>$1</strong>"), 
    c = c.replace(/~~([^~\n]+)~~/g, "<s>$1</s>"), c = c.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>"), 
    o.forEach((t, e) => {
      c = c.replace(`@@NYX_MATH_${e}@@`, t);
    }), r.forEach((t, e) => {
      c = c.replace(`@@NYX_INLINE_${e}@@`, t);
    }), c;
  }
  function r(t) {
    return String(t).trim().replace(/^\||\|$/g, "").split("|").map(t => t.trim());
  }
  function s(t) {
    const e = r(t);
    return e.length > 1 && e.every(t => /^:?-{3,}:?$/.test(t));
  }
  function o(t) {
    const e = String(t ?? "").trim();
    return /^\\+\[$/.test(e) ? "bracket" : "$$" === e ? "dollar" : "";
  }
  function c(t, e) {
    const n = String(t ?? "").trim();
    return "bracket" === e ? /^\\+\]$/.test(n) : "$$" === n;
  }
  function i(t) {
    const e = String(t ?? "").trim(), n = e.match(/^\\+\[([\s\S]*?)\\+\]$/);
    if (n) return n[1];
    const r = e.match(/^\$\$([\s\S]*?)\$\$$/);
    return r ? r[1] : null;
  }
  function a(t, e) {
    const n = t[e] || "";
    return Boolean(o(n)) || null !== i(n) || c(n, "bracket") || /^```/.test(n) || /^#{1,3}\s+/.test(n) || /^>\s?/.test(n) || /^\s*[-*+]\s+/.test(n) || /^\s*\d+[.)]\s+/.test(n) || /^\s*(?:---+|___+)\s*$/.test(n) || n.includes("\t") || n.includes("|") && s(t[e + 1] || "");
  }
  window.NyxMarkdown = {
    render: function(l) {
      const p = String(l ?? "").replace(/\r\n?/g, "\n").split("\n"), u = [];
      for (let h = 0; h < p.length; ) {
        const l = p[h];
        if (!l.trim()) {
          h += 1;
          continue;
        }
        const d = l.match(/^```([^\s`]*)\s*$/);
        if (d) {
          const e = (d[1] || "code").slice(0, 24), n = [];
          for (h += 1; h < p.length && !/^```\s*$/.test(p[h]); ) n.push(p[h]), h += 1;
          h < p.length && (h += 1), u.push(`<div class="ai-code-block"><div class="ai-code-head"><span>${t(e)}</span><button class="ai-code-copy" type="button" data-copy-code aria-label="Copy code"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg><span>Copy</span></button></div><pre><code>${t(n.join("\n"))}</code></pre></div>`);
          continue;
        }
        const $ = o(l);
        if ($) {
          let t = h + 1;
          for (;t < p.length && !c(p[t], $); ) t += 1;
          if (t < p.length) {
            u.push(`<div class="ai-math-block">${e(p.slice(h + 1, t).join("\n"), !0)}</div>`), 
            h = t + 1;
            continue;
          }
          let n = h + 1;
          for (;n < p.length && p[n].trim(); ) n += 1;
          const r = p.slice(h + 1, n).join("\n");
          r.trim() && u.push(`<div class="ai-math-block">${e(r, !0)}</div>`), h = n;
          continue;
        }
        const g = i(l);
        if (null !== g) {
          u.push(`<div class="ai-math-block">${e(g, !0)}</div>`), h += 1;
          continue;
        }
        if (c(l, "bracket")) {
          h += 1;
          continue;
        }
        if (l.includes("\t")) {
          const t = [];
          for (;h < p.length && p[h].includes("\t") && p[h].trim(); ) t.push(p[h].split(/\t+/).map(t => t.trim())), 
          h += 1;
          const e = Math.max(0, ...t.map(t => t.length));
          if (t.length > 1 && e > 1) {
            const r = t.shift();
            u.push(`<div class="ai-table-wrap"><table><thead><tr>${Array.from({
              length: e
            }, (t, e) => `<th>${n(r[e] || "")}</th>`).join("")}</tr></thead><tbody>${t.map(t => `<tr>${Array.from({
              length: e
            }, (e, r) => `<td>${n(t[r] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
            continue;
          }
          u.push(`<p>${t.flat().map(n).join("<br>")}</p>`);
          continue;
        }
        if (l.includes("|") && s(p[h + 1] || "")) {
          const t = r(l);
          h += 2;
          const e = [];
          for (;h < p.length && p[h].includes("|") && p[h].trim(); ) e.push(r(p[h])), h += 1;
          u.push(`<div class="ai-table-wrap"><table><thead><tr>${t.map(t => `<th>${n(t)}</th>`).join("")}</tr></thead><tbody>${e.map(e => `<tr>${t.map((t, r) => `<td>${n(e[r] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
          continue;
        }
        const f = l.match(/^(#{1,3})\s+(.+)$/);
        if (f) {
          const t = f[1].length;
          u.push(`<h${t}>${n(f[2])}</h${t}>`), h += 1;
          continue;
        }
        if (/^>\s?/.test(l)) {
          const t = [];
          for (;h < p.length && /^>\s?/.test(p[h]); ) t.push(p[h].replace(/^>\s?/, "")), h += 1;
          u.push(`<blockquote>${t.map(n).join("<br>")}</blockquote>`);
          continue;
        }
        const m = /^\s*[-*+]\s+/.test(l), b = /^\s*\d+[.)]\s+/.test(l);
        if (m || b) {
          const t = [], e = b ? /^\s*\d+[.)]\s+/ : /^\s*[-*+]\s+/;
          for (;h < p.length && e.test(p[h]); ) t.push(p[h].replace(e, "")), h += 1;
          const r = b ? "ol" : "ul";
          u.push(`<${r}>${t.map(t => `<li>${n(t)}</li>`).join("")}</${r}>`);
          continue;
        }
        if (/^\s*(?:---+|___+)\s*$/.test(l)) {
          u.push("<hr>"), h += 1;
          continue;
        }
        const _ = [ l ];
        for (h += 1; h < p.length && p[h].trim() && !a(p, h); ) _.push(p[h]), h += 1;
        u.push(`<p>${_.map(n).join("<br>")}</p>`);
      }
      return u.join("");
    }
  };
})();
