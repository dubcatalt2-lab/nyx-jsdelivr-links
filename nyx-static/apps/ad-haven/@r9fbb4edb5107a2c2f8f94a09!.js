(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+QWR2ZXJ0aXNlbWVudDwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJnaW46", "MDtwYWRkaW5nOjA7YmFja2dyb3VuZDowIDA7d2lkdGg6NDY4cHg7aGVpZ2h0OjYwcHg7b3ZlcmZsb3c6aGlkZGVufWlmcmFtZXtib3JkZXI6MH08", "L3N0eWxlPjxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9AcjkwNjk1YTVmYmExNGNmZWYxOTQxZTBjMyEuanMiPjwvc2NyaXB0PiA8L2hl", "YWQ+PGJvZHk+PHNjcmlwdCBzcmM9Ii4vQHJmYTI1YTBlMGU3NTQxNTE3ZmYxZmZhNGIhLmpzIj48L3NjcmlwdD48c2NyaXB0PndpbmRvdy5hdE9w", "dGlvbnMgPSB7CiAga2V5OiAiNmM2NjdiMTJhNzg3NTdhNzRiNzdkMzEzZTFhZWM0NDUiLAogIGZvcm1hdDogImlmcmFtZSIsCiAgaGVpZ2h0OiA2", "MCwKICB3aWR0aDogNDY4LAogIHBhcmFtczoge30KfTwvc2NyaXB0PjxzY3JpcHQgc3JjPSJodHRwczovL2JpY2VhLm9yZy8yMi82YzY2N2IxMmE3", "ODc1N2E3NGI3N2QzMTNlMWFlYzQ0NSI+PC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4gCg==" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});