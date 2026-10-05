try {
  const o = new URLSearchParams(location.search);
  if (/^https?:$/.test(location.protocol) && window.top === window.self && o.has("nyx_auto_classroom") && !o.has("nyx_real") && !o.has("nyx_no_classroom") && !o.has("nyx_cloaked")) {
    const o = new URL(location.href);
    o.searchParams.set("nyx_real", "1");
    const t = window.open("about:blank", "_blank"), e = `<!doctype html><html><head><meta charset="utf-8"><title>about:blank</title><style>html,body{margin:0;width:100%;height:100%;background:#fff}</style></head><body><script>setTimeout(function(){location.replace(${JSON.stringify(o.href)});},5000);<\/script></body></html>`;
    try {
      t && !t.closed && t.document && (t.document.open(), t.document.write(e), t.document.close());
    } catch {}
    setTimeout(() => {
      try {
        t && !t.closed && "about:blank" === t.location.href ? t.location.replace(o.href) : window.open(o.href, "_blank", "noopener");
      } catch {
        window.open(o.href, "_blank", "noopener");
      }
    }, 5e3), location.replace("https://classroom.google.com/");
  }
  /^https?:$/.test(location.protocol) && window.top === window.self && o.has("nyx_auto_classroom") && !o.has("nyx_cloaked") && document.documentElement.classList.add("hosted-cloak-entry");
} catch {}
