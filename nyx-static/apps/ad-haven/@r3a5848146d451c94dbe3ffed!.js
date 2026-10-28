(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+QWQgSGF2ZW4gTXVsdGlUYWc8L3RpdGxlPjxzdHlsZT5ib2R5LGh0bWx7bWFy", "Z2luOjA7bWluLWhlaWdodDo0MjBweDtiYWNrZ3JvdW5kOiMwODA4MGI7Y29sb3I6I2FhYTtmb250OjE0cHggc3lzdGVtLXVpfXB7cGFkZGluZzoy", "NHB4fTwvc3R5bGU+PHNjcmlwdCBkZWZlcj0iZGVmZXIiIHNyYz0iL2pzL0ByN2FiNmM5N2IzZjE3MjYxMTAzY2YwZThhIS5qcyI+PC9zY3JpcHQ+", "IDwvaGVhZD48Ym9keT48c2NyaXB0IHNyYz0iL2Fzc2V0cy92ZW5kb3IvZ2FtZS1zdG9yYWdlLmpzIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iLi9A", "cmZiMzkyNWRiMmQ3MDMxZTY0MzE2MWY5YyEuanMiPjwvc2NyaXB0PjxwPkFkdmVydGlzZW1lbnRzPC9wPjxzY3JpcHQgc3JjPSJodHRwczovL3F1", "Z2U1LmNvbS84OC90YWcubWluLmpzIiBkYXRhLXpvbmU9IjMwMjUzNCIgYXN5bmMgZGF0YS1jZmFzeW5jPSJmYWxzZSI+PC9zY3JpcHQ+PC9ib2R5", "PjwvaHRtbD4K" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});