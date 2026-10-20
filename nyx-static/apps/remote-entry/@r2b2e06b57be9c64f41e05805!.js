(async () => {
  await new Promise(d => {
    const l = () => setTimeout(d, 0);
    if (document.readyState === "complete") l(); else window.addEventListener("load", l, {
      once: true
    });
  });
  const d = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNv", "bnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPjxtZXRhIG5hbWU9InJvYm90cyIgY29udGVudD0ibm9pbmRleCxub2Zv", "bGxvdyI+PHRpdGxlPlJlbW90ZSBkZXNrdG9wPC90aXRsZT48bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Ii9lbnRyeS5jc3MiPjxzY3JpcHQg", "c3JjPSIvanMvQHIzYzI1MGMzNDliMTY4NzBjYWU4YWQ3NzYhLmpzIiBkZWZlcj0iZGVmZXIiPjwvc2NyaXB0PjxsaW5rIHJlbD0ic3R5bGVzaGVl", "dCIgaHJlZj0iL2FwcHMvcTczZTguY3NzP3Jldj00MzFkMTA4OGIzYTk3N2JlIj4gPHNjcmlwdCBkZWZlcj0iZGVmZXIiIHNyYz0iL2pzL0ByYjcy", "NjhiMWM0NGNmMzJjMDJkZjMzNTgwIS5qcyI+PC9zY3JpcHQ+IDwvaGVhZD4gPGJvZHk+PG1haW4+PHAgY2xhc3M9ImV5ZWJyb3ciPlBSSVZBVEUg", "QUNDRVNTPC9wPjxoMT5SZW1vdGUgZGVza3RvcDwvaDE+PHA+U2lnbiBpbiB3aXRoIHlvdXIgb3duZXIgYWNjb3VudC48L3A+IDxmb3JtIGlkPSJs", "b2dpbiI+PGxhYmVsPkVtYWlsPGlucHV0IGlkPSJlbWFpbCIgdHlwZT0iZW1haWwiIGF1dG9jb21wbGV0ZT0idXNlcm5hbWUiIHJlcXVpcmVkPjwv", "bGFiZWw+PGxhYmVsPlBhc3N3b3JkPGlucHV0IGlkPSJwYXNzd29yZCIgdHlwZT0icGFzc3dvcmQiIGF1dG9jb21wbGV0ZT0iY3VycmVudC1wYXNz", "d29yZCIgcmVxdWlyZWQ+PC9sYWJlbD48YnV0dG9uIGlkPSJzdWJtaXQiIGRpc2FibGVkPSJkaXNhYmxlZCI+U2lnbiBpbjwvYnV0dG9uPjwvZm9y", "bT4gPHNlY3Rpb24gaWQ9InNpZ25lZEluIiBoaWRkZW4+PHAgaWQ9ImFjY291bnQiPjwvcD48YnV0dG9uIGlkPSJvcGVuIj5PcGVuIGNvbXB1dGVy", "czwvYnV0dG9uPjxidXR0b24gaWQ9InNpZ25PdXQiIGNsYXNzPSJzZWNvbmRhcnkiPlNpZ24gb3V0PC9idXR0b24+PC9zZWN0aW9uPiA8cCBpZD0i", "c3RhdHVzIiByb2xlPSJzdGF0dXMiPkNvbm5lY3RpbmfigKY8L3A+PC9tYWluPjxzY3JpcHQgdHlwZT0ibW9kdWxlIiBzcmM9Ii9lbnRyeS5qcyI+", "PC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4gCg==" ].join("")), d => d.charCodeAt(0)));
  document.open();
  document.write(d);
  document.close();
})().catch(() => {
  const d = document.createElement("p");
  d.setAttribute("role", "alert");
  d.textContent = "Saved browser data could not be updated. Close other site tabs and reload.";
  document.body.prepend(d);
});