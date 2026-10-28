(async () => {
  await new Promise(e => {
    const c = () => setTimeout(e, 0);
    if (document.readyState === "complete") c(); else window.addEventListener("load", c, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj4gPGhlYWQ+IDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4gPG1ldGEgbmFtZT0idmlld3BvcnQi", "IGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPiA8dGl0bGU+QWR2ZXJ0aXNlbWVudDwvdGl0bGU+IDxzdHlsZT5i", "b2R5LGh0bWx7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjE2MHB4O2hlaWdodDo2MDBweDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDowIDB9", "aWZyYW1le2JvcmRlcjowfTwvc3R5bGU+IDxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9AcmRjNGExZTk5OTE1OGZiYzU4ODRlMTZhYSEu", "anMiPjwvc2NyaXB0PiA8L2hlYWQ+IDxib2R5PiA8c2NyaXB0IGRhdGEtY2Zhc3luYz0iZmFsc2UiIHNyYz0iLi9AcmE1OTI4NGMzNGU5NjZiOTVh", "OTY4NmMzZSEuanMiPjwvc2NyaXB0PiA8c2NyaXB0IGRhdGEtY2Zhc3luYz0iZmFsc2UiPndpbmRvdy5hdE9wdGlvbnMgPSB7CiAga2V5OiAiMjc0", "YzVlNmFjYTc1YTBkZWZjMjVjZGY2YWEzYzdhMTciLAogIGZvcm1hdDogImlmcmFtZSIsCiAgaGVpZ2h0OiA2MDAsCiAgd2lkdGg6IDE2MCwKICBw", "YXJhbXM6IHt9Cn08L3NjcmlwdD4gPHNjcmlwdCBkYXRhLWNmYXN5bmM9ImZhbHNlIiBzcmM9Imh0dHBzOi8vYmljZWEub3JnLzIyLzI3NGM1ZTZh", "Y2E3NWEwZGVmYzI1Y2RmNmFhM2M3YTE3IiBvbmVycm9yPSdwYXJlbnQucG9zdE1lc3NhZ2UoewogIHR5cGU6ICJueXg6c3BvbnNvci11bmF2YWls", "YWJsZSIKfSwgIioiKSc+PC9zY3JpcHQ+IDwvYm9keT4gPC9odG1sPiAK" ].join("")), e => e.charCodeAt(0)));
  const c = document.querySelector("base")?.outerHTML || "";
  document.open();
  document.write(e.replace(/<head(?:\s[^>]*)?>/i, e => e + c));
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});