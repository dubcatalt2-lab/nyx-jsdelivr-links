(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+QWR2ZXJ0aXNlbWVudDwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJnaW46", "MDtwYWRkaW5nOjA7YmFja2dyb3VuZDowIDA7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEyMHB4fWlmcmFtZXtib3JkZXI6MH08L3N0eWxlPjxzY3Jp", "cHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9AcmRjNGExZTk5OTE1OGZiYzU4ODRlMTZhYSEuanMiPjwvc2NyaXB0PiA8L2hlYWQ+PGJvZHkgZGF0", "YS1yZXNpemUtYWQ+PHNjcmlwdCBzcmM9Ii9hc3NldHMvdmVuZG9yL2dhbWUtc3RvcmFnZS5qcyI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii4vQHJi", "MTk5NjE5YjQ5NmFlNzM2NTY4MjQ2MmEhLmpzIj48L3NjcmlwdD48c2NyaXB0IGFzeW5jIGRhdGEtY2Zhc3luYz0iZmFsc2UiIHNyYz0iaHR0cHM6", "Ly9iaWNlYS5vcmcvMjEvOWM3MzhiNWRlZmFlMTVhM2M4ZDU0NTgxNWFkNmU3M2UiPjwvc2NyaXB0PjxkaXYgaWQ9ImNvbnRhaW5lci05YzczOGI1", "ZGVmYWUxNWEzYzhkNTQ1ODE1YWQ2ZTczZSI+PC9kaXY+PC9ib2R5PjwvaHRtbD4gCg==" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});