(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPiA8YmFzZSBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5u", "ZXQvZ2gvZ2FtZXMtc2l0ZS9nYW1lcy1zaXRlLmdpdGh1Yi5pb0BtYWluL3Byb2plY3RzL2Etc21hbGwtd29ybGQtY3VwLyI+IDxzdHlsZT5ib2R5", "LGh0bWx7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojMTExfWNhbnZhc3tkaXNwbGF5", "OmJsb2NrfTwvc3R5bGU+IDxzY3JpcHQgc3JjPSJqcXVlcnktMi4xLjEubWluLmpzIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iYzJydW50aW1lLmpz", "Ij48L3NjcmlwdD48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHJiNzI2OGIxYzQ0Y2YzMmMwMmRmMzM1ODAhLmpzIj48L3NjcmlwdD4g", "PC9oZWFkPiA8Ym9keT48ZGl2IGlkPSJjMmNhbnZhc2RpdiI+PGNhbnZhcyBpZD0iYzJjYW52YXMiIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjcyMCI+", "PC9jYW52YXM+PC9kaXY+IDxzY3JpcHQ+alF1ZXJ5KCgpID0+IGNyX2NyZWF0ZVJ1bnRpbWUoImMyY2FudmFzIikpLCBkb2N1bWVudC5hZGRFdmVu", "dExpc3RlbmVyKCJ2aXNpYmlsaXR5Y2hhbmdlIiwgKCkgPT4gY3Jfc2V0U3VzcGVuZGVkKGRvY3VtZW50LmhpZGRlbikpPC9zY3JpcHQ+PC9ib2R5", "PjwvaHRtbD4gCg==" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "Saved browser data could not be updated. Close other site tabs and reload.";
  document.body.prepend(e);
});