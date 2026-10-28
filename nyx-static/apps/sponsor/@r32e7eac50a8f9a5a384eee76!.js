(async () => {
  await new Promise(c => {
    const Z = () => setTimeout(c, 0);
    if (document.readyState === "complete") Z(); else window.addEventListener("load", Z, {
      once: true
    });
  });
  const c = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+U3BvbnNvcmVkIG9mZmVyczwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJn", "aW46MDttaW4taGVpZ2h0OjEwMCU7YmFja2dyb3VuZDowIDA7Y29sb3I6I2FhYTtmb250OjEycHggc3lzdGVtLXVpfSp7Ym94LXNpemluZzpib3Jk", "ZXItYm94fS5zdHVkeS0zOTQ2MzI1NDEwOTQ1MTYwOTB7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3Bh", "Y2UtYmV0d2VlbjtnYXA6MTJweDttYXJnaW46MDtwYWRkaW5nOjEwcHggMTJweDttaW4taGVpZ2h0OjU4cHg7YmFja2dyb3VuZDojMTExO2JvcmRl", "cjoxcHggc29saWQgI2ZmZmZmZjMwO2JvcmRlci1yYWRpdXM6MTJweH0uc3R1ZHktMTAxOTg3MTAyMjQ2NTM4OTA5OHtmb250LXNpemU6MTFweDtj", "b2xvcjojYWFhfS5zdHVkeS0yOTUxNzEzODUwNDcyNjQzMDB7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1j", "b250ZW50OmNlbnRlcjtnYXA6OHB4O2JvcmRlcjoxcHggc29saWQgI2ZmZmZmZjMwO2JvcmRlci1yYWRpdXM6OHB4O3BhZGRpbmc6OXB4IDEycHg7", "YmFja2dyb3VuZDojMTUxNTE1O2NvbG9yOiNlZWU7Zm9udDo2MDAgMTJweCBzeXN0ZW0tdWk7Y3Vyc29yOnBvaW50ZXJ9LnN0dWR5LTI5NTE3MTM4", "NTA0NzI2NDMwMDpkaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpkZWZhdWx0fS5zdHVkeS0yOTUxNzEzODUwNDcyNjQzMDAgc3Zne3dpZHRoOjE1", "cHg7aGVpZ2h0OjE1cHg7ZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjEuOH1AbWVkaWEobWF4LXdpZHRoOjI1MHB4", "KXsuc3R1ZHktMzk0NjMyNTQxMDk0NTE2MDkwe2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NXB4O3BhZGRpbmc6N3B4fS5zdHVkeS0yOTUxNzEz", "ODUwNDcyNjQzMDB7cGFkZGluZzo3cHg7Zm9udC1zaXplOjExcHg7Z2FwOjVweH0uc3R1ZHktMTAxOTg3MTAyMjQ2NTM4OTA5OHtmb250LXNpemU6", "MTBweH19PC9zdHlsZT48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHJkYzRhMWU5OTkxNThmYmM1ODg0ZTE2YWEhLmpzIj48L3Njcmlw", "dD4gPC9oZWFkPjxib2R5PjxzZWN0aW9uIGNsYXNzPSJzdHVkeS0zOTQ2MzI1NDEwOTQ1MTYwOTAiIGFyaWEtbGFiZWw9IlNwb25zb3JlZCBvZmZl", "cnMiPjxzcGFuIGNsYXNzPSJzdHVkeS0xMDE5ODcxMDIyNDY1Mzg5MDk4Ij5BZHZlcnRpc2VtZW50PC9zcGFuPjxidXR0b24gY2xhc3M9InN0dWR5", "LTI5NTE3MTM4NTA0NzI2NDMwMCIgdHlwZT0iYnV0dG9uIiBkaXNhYmxlZD0iZGlzYWJsZWQiIGFyaWEtbGFiZWw9Ik9wZW4gc3BvbnNvcmVkIG9m", "ZmVyIj5PcGVuIG9mZmVyPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtaGlkZGVuPSJ0cnVlIj48cGF0aCBkPSJNMTQgNGg2djZNMjAgNCAx", "MCAxNE0xMSA1SDV2MTRoMTR2LTYiLz48L3N2Zz48L2J1dHRvbj48L3NlY3Rpb24+PHNjcmlwdCBzcmM9Ii4vQHJhNTkyODRjMzRlOTY2Yjk1YTk2", "ODZjM2UhLmpzIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iLi9AcjY2MDRiNTY3MjIzMzViNzBjZGExN2JkZSEuanMiPjwvc2NyaXB0PjwvYm9keT48", "L2h0bWw+Cg==" ].join("")), c => c.charCodeAt(0)));
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