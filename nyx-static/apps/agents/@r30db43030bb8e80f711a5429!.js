export function renderReply(e, t) {
  window.NyxMarkdown ? e.innerHTML = window.NyxMarkdown.render(t) : e.textContent = t;
}

const Re = new WeakMap;

export function scheduleReply(e, t, n) {
  const o = Re.get(e);
  if (o) return o.text = t, void (o.onRender = n);
  const r = {
    text: t,
    onRender: n
  };
  Re.set(e, r), requestAnimationFrame(() => {
    Re.delete(e), e.isConnected && (renderReply(e, r.text), r.onRender?.());
  });
}

document.addEventListener("click", async e => {
  const t = e.target.closest(".message-content [data-copy-code]");
  if (!t) return;
  const n = t.closest(".ai-code-block")?.querySelector("pre code");
  if (n) try {
    await navigator.clipboard.writeText(n.textContent), t.title = "Copied";
  } catch {
    t.title = "Select the code to copy it";
  }
});
