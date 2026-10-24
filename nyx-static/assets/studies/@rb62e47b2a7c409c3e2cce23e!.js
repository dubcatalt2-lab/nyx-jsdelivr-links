(async () => {
  await new Promise(e => {
    const c = () => setTimeout(e, 0);
    if (document.readyState === "complete") c(); else window.addEventListener("load", c, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPiA8YmFzZSBocmVmPSIvemVuZ3MtYXNzZXRzLzEvZ2gvZ2Ft", "ZXMtc2l0ZS9nYW1lcy1zaXRlLmdpdGh1Yi5pb0BtYWluL3Byb2plY3RzL2Etc21hbGwtd29ybGQtY3VwLyI+IDxzdHlsZT5ib2R5LGh0bWx7bWFy", "Z2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojMTExfWNhbnZhc3tkaXNwbGF5OmJsb2NrfTwv", "c3R5bGU+IDxzY3JpcHQgc3JjPSJqcXVlcnktMi4xLjEubWluLmpzIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iYzJydW50aW1lLmpzIj48L3Njcmlw", "dD48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHJiNzJlZTkyN2M0NmZlN2VlZGE0NzcyZmEhLmpzIj48L3NjcmlwdD4gPC9oZWFkPiA8", "Ym9keT48ZGl2IGlkPSJzdHVkeS03MTU0NDI2MTU1ODkyNzc1MyI+PGNhbnZhcyBpZD0ic3R1ZHktMjMzNzMyNTc1NTIxODY5MzYyIiB3aWR0aD0i", "MTI4MCIgaGVpZ2h0PSI3MjAiPjwvY2FudmFzPjwvZGl2PiA8c2NyaXB0PmpRdWVyeSgoKSA9PiBjcl9jcmVhdGVSdW50aW1lKCJjMmNhbnZhcyIp", "KSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigidmlzaWJpbGl0eWNoYW5nZSIsICgpID0+IGNyX3NldFN1c3BlbmRlZChkb2N1bWVudC5oaWRk", "ZW4pKTwvc2NyaXB0PjwvYm9keT48L2h0bWw+IAo=" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});