(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNv", "bnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPjx0aXRsZT5ON1g8L3RpdGxlPjxzY3JpcHQgc3JjPSIvanMvQHI2YWU4", "YjJiNTI4NDcyNWM1NjgwZWMzNWEhLmpzIj48L3NjcmlwdD48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHJlMzA0MmQxZjlkM2I0Y2Uz", "MjIwYTZkNzkhLmpzIj48L3NjcmlwdD4gPC9oZWFkPjxib2R5Pjxub3NjcmlwdD48YSBocmVmPSIvc3R1ZGllcy5odG1sIj5PcGVuIE55eDwvYT48", "L25vc2NyaXB0PjwvYm9keT48L2h0bWw+IAo=" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});