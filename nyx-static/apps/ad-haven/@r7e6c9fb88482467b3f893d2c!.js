(async () => {
  await new Promise(I => {
    const c = () => setTimeout(I, 0);
    if (document.readyState === "complete") c(); else window.addEventListener("load", c, {
      once: true
    });
  });
  const I = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29u", "dGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPkFkIEhhdmVuPC90aXRsZT48c2NyaXB0IHNyYz0iL2pzL0By", "ZTAxY2NiZDc4MDhjYTg5YmIzNzNhOTUyIS5qcyI+PC9zY3JpcHQ+PGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIvYXBwcy9xNzNlOC5jc3M/", "cmV2PWVhZDY0MWQ0ZmY2YTcwZDgiPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iLi9zdHlsZS5jc3M/cmV2PWVhZDY0MWQ0ZmY2YTcwZDgi", "PjxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9AcmZlNTQ2YmFiZDM3MjllN2MzYWExMzIxYSEuanMiPjwvc2NyaXB0PiA8L2hlYWQ+PGJv", "ZHk+PG1haW4+IDxoZWFkZXI+PGRpdiBjbGFzcz0ibWFyayIgYXJpYS1oaWRkZW49InRydWUiPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0", "aCBkPSJtMyAxMCA5LTcgOSA3djEwSDNaIi8+PHBhdGggZD0iTTggMjB2LTdoOHY3TTggOWg4Ii8+PC9zdmc+PC9kaXY+PGRpdj48cCBjbGFzcz0i", "c3R1ZHktMTAwNTM0NzY5Mjc3NDEzNzU2MyI+VEhFIFNQT05TT1IgTE9VTkdFPC9wPjxoMT5BZCBIYXZlbjwvaDE+PHAgY2xhc3M9InN0dWR5LTg2", "NjM2NzM5MzAxMjEyOTQxMSI+QmFubmVycywgbm90aWNlcywgYW5kIG9mZmVycy4gQWxsIGluIG9uZSBwbGFjZS48L3A+PC9kaXY+PC9oZWFkZXI+", "IDxzZWN0aW9uIGNsYXNzPSJjb250cm9scyIgYXJpYS1sYWJlbD0iQWQgY29udHJvbHMiPjxkaXY+PHN0cm9uZz5Zb3UncmUgaW4gY29udHJvbDwv", "c3Ryb25nPjxwIGlkPSJzdHVkeS01ODA3OTk3ODE1ODg5MDA3NTIiIHJvbGU9InN0YXR1cyI+T3BlbiB0aGlzIGFwcCBmcm9tIE55eCB0byBjaGVj", "ayB5b3VyIGFkIHNldHRpbmdzLjwvcD48L2Rpdj48ZGl2IGNsYXNzPSJhY3Rpb25zIj48YnV0dG9uIGlkPSJzdGFydCIgZGlzYWJsZWQ9ImRpc2Fi", "bGVkIiBhcmlhLWxhYmVsPSJTaG93IGFkcyI+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIj48cGF0aCBkPSJtOSA1", "IDEwIDctMTAgN1oiLz48L3N2Zz5TaG93IGFkczwvYnV0dG9uPjxidXR0b24gaWQ9InN0b3AiIGRpc2FibGVkPSJkaXNhYmxlZCIgYXJpYS1sYWJl", "bD0iU3RvcCBhbGwgYWRzIj48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgYXJpYS1oaWRkZW49InRydWUiPjxyZWN0IHg9IjYiIHk9IjYiIHdpZHRo", "PSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiLz48L3N2Zz5TdG9wIGFsbDwvYnV0dG9uPjwvZGl2Pjwvc2VjdGlvbj4gPHNlY3Rpb24gaWQ9InN0dWR5", "LTQ2OTM2ODkwMDEyMzExMTE1OCIgY2xhc3M9InN0dWR5LTgwMDM0MTg0NzM0NDA2OTcxMSIgYXJpYS1sYWJlbD0iQWQgd2FsbCI+PC9zZWN0aW9u", "PiA8Zm9vdGVyPkxlYXZpbmcgdGhpcyBhcHAgc3RvcHMgaXRzIGFkIHNlc3Npb24uPC9mb290ZXI+PC9tYWluPjxzY3JpcHQgdHlwZT0ibW9kdWxl", "IiBzcmM9Ii4vQHI2NGYzYWViYjBmNDE3OGNjYWYzNzg5NDIhLmpzIj48L3NjcmlwdD48L2JvZHk+PC9odG1sPgo=" ].join("")), I => I.charCodeAt(0)));
  document.open();
  document.write(I);
  document.close();
})().catch(() => {
  const I = document.createElement("p");
  I.setAttribute("role", "alert");
  I.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(I);
});