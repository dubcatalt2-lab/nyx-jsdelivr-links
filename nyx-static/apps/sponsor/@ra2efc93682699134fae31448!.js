(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+U3BvbnNvcmVkIG9mZmVyczwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJn", "aW46MDtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojYWFhO2ZvbnQ6MTJweCBzeXN0ZW0tdWl9cHttYXJnaW46OHB4fTwvc3R5bGU+PHNjcmlwdCBkZWZl", "cj0iZGVmZXIiIHNyYz0iL2pzL0ByOTA2OTVhNWZiYTE0Y2ZlZjE5NDFlMGMzIS5qcyI+PC9zY3JpcHQ+IDwvaGVhZD48Ym9keT48cD5TcG9uc29y", "ZWQgb2ZmZXJzPC9wPjxzY3JpcHQgc3JjPSIuL0ByNThlYmVjMWY3Y2FhZjhmZDFlOWZhN2NhIS5qcyI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Imh0", "dHBzOi8vYWw1c20uY29tL3RhZy5taW4uanMiIGRhdGEtem9uZT0iMTIxMzE1MjYiIGFzeW5jIGRhdGEtY2Zhc3luYz0iZmFsc2UiPjwvc2NyaXB0", "PjxzY3JpcHQgc3JjPSJodHRwczovL242d3htLmNvbS92aWduZXR0ZS5taW4uanMiIGRhdGEtem9uZT0iMTIxMzE1MjgiIGFzeW5jIGRhdGEtY2Zh", "c3luYz0iZmFsc2UiPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSJodHRwczovL3F1Z2U1LmNvbS84OC90YWcubWluLmpzIiBkYXRhLXpvbmU9IjMwMjUz", "NCIgYXN5bmMgZGF0YS1jZmFzeW5jPSJmYWxzZSI+PC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4K" ].join("")), e => e.charCodeAt(0)));
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