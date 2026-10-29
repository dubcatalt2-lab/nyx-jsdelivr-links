(async () => {
  await new Promise(c => {
    const e = () => setTimeout(c, 0);
    if (document.readyState === "complete") e(); else window.addEventListener("load", e, {
      once: true
    });
  });
  const c = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+QWR2ZXJ0aXNlbWVudDwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJnaW46", "MDtwYWRkaW5nOjA7YmFja2dyb3VuZDowIDA7d2lkdGg6NDY4cHg7aGVpZ2h0OjYwcHg7b3ZlcmZsb3c6aGlkZGVufWlmcmFtZXtib3JkZXI6MH08", "L3N0eWxlPjxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9qcy9AcmNmYjI4OWM2NzRkNWVmMTBlYzAwYmEyYiEuanMiPjwvc2NyaXB0PiA8L2hl", "YWQ+PGJvZHk+PHNjcmlwdCBzcmM9Ii9hc3NldHMvdmVuZG9yL2dhbWUtc3RvcmFnZS5qcyI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii4vQHJkMTA4", "Mzc0ZmNhYjZjOTEzNjg1NTIxZDAhLmpzIj48L3NjcmlwdD48c2NyaXB0PndpbmRvdy5hdE9wdGlvbnMgPSB7CiAga2V5OiAiNmM2NjdiMTJhNzg3", "NTdhNzRiNzdkMzEzZTFhZWM0NDUiLAogIGZvcm1hdDogImlmcmFtZSIsCiAgaGVpZ2h0OiA2MCwKICB3aWR0aDogNDY4LAogIHBhcmFtczoge30K", "fTwvc2NyaXB0PjxzY3JpcHQgc3JjPSJodHRwczovL2JpY2VhLm9yZy8yMi82YzY2N2IxMmE3ODc1N2E3NGI3N2QzMTNlMWFlYzQ0NSI+PC9zY3Jp", "cHQ+PC9ib2R5PjwvaHRtbD4gCg==" ].join("")), c => c.charCodeAt(0)));
  document.open();
  document.write(c);
  document.close();
})().catch(() => {
  const c = document.createElement("p");
  c.setAttribute("role", "alert");
  c.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(c);
});