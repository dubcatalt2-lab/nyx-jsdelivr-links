(async () => {
  await new Promise(c => {
    const l = () => setTimeout(c, 0);
    if (document.readyState === "complete") l(); else window.addEventListener("load", l, {
      once: true
    });
  });
  const c = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNv", "bnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPjx0aXRsZT5OeXggfCBBbHRlcm5hdGUgdmlldzwvdGl0bGU+IDxsaW5r", "IHJlbD0ic3R5bGVzaGVldCIgaHJlZj0icjhhNzIuY3NzP3Jldj03YWFlZjE4ZWQwOWY3NzZlIj4gPHNjcmlwdCBzcmM9Ii9ydW50aW1lLWNvbmZp", "Zy5qcyIgZGVmZXI9ImRlZmVyIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL2Fzc2V0cy92ZW5kb3IvcjdmMjljMS94OUsybS5qcyIgZGVmZXI9ImRl", "ZmVyIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL2Fzc2V0cy92ZW5kb3IvcjdmMjljMS84YjNydC5qcyIgZGVmZXI9ImRlZmVyIj48L3NjcmlwdD48", "c2NyaXB0IHNyYz0iQHI5YTc3NTA0OWY0ODc0OGY4M2EyM2EyOGIhLmpzIiBkZWZlcj0iZGVmZXIiPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSJAcjQy", "ZjVmMzE5ZTA1ZmE0MzJmNzI3OTk1NSEuanMiIGRlZmVyPSJkZWZlciI+PC9zY3JpcHQ+IDxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9A", "cmUzMDQyZDFmOWQzYjRjZTMyMjBhNmQ3OSEuanMiPjwvc2NyaXB0PiA8L2hlYWQ+PGJvZHk+PGhlYWRlcj48YSBocmVmPSIvc3R1ZGllcy5odG1s", "IiBhcmlhLWxhYmVsPSJOeXggaG9tZSI+Tnl4PC9hPjxmb3JtPjxsYWJlbCBjbGFzcz0idmlzdWFsbHktaGlkZGVuIiBmb3I9InEiPldlYnNpdGUg", "YWRkcmVzczwvbGFiZWw+PGlucHV0IGlkPSJxIiBuYW1lPSJxIiBhdXRvY29tcGxldGU9Im9mZiIgc3BlbGxjaGVjaz0iZmFsc2UiIHBsYWNlaG9s", "ZGVyPSJFbnRlciBhIHdlYnNpdGUgYWRkcmVzcyIgcmVxdWlyZWQ+PGJ1dHRvbiB0eXBlPSJzdWJtaXQiIGRpc2FibGVkPSJkaXNhYmxlZCIgYXJp", "YS1sYWJlbD0iT3BlbiI+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIj48cGF0aCBkPSJNNSAxMmgxNG0tNi02IDYg", "Ni02IDYiLz48L3N2Zz5PcGVuPC9idXR0b24+PC9mb3JtPjwvaGVhZGVyPiA8cCByb2xlPSJzdGF0dXMiPkVudGVyIGFuIGFkZHJlc3MgdG8gb3Bl", "biBpdCB3aXRoIHRoZSBhbHRlcm5hdGUgZW5naW5lLjwvcD48aWZyYW1lIHRpdGxlPSJXZWJzaXRlIHZpZXciIGhpZGRlbiBhbGxvdz0iZnVsbHNj", "cmVlbjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZSIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L2lmcmFtZT48L2JvZHk+PC9odG1s", "PiAK" ].join("")), c => c.charCodeAt(0)));
  document.open();
  document.write(c);
  document.close();
})().catch(() => {
  const c = document.createElement("p");
  c.setAttribute("role", "alert");
  c.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(c);
});