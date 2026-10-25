(async () => {
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNv", "bnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPjx0aXRsZT5ON1g8L3RpdGxlPjxzY3JpcHQgc3JjPSIvanMvQHJhMGFj", "ZmM5YzljMWI3MzkxMTNkOGU4NTAhLmpzIj48L3NjcmlwdD48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHJjNzhlOGYyYWRmMGFjZmE0", "NGIzYzMyZDEhLmpzIj48L3NjcmlwdD4gPC9oZWFkPjxib2R5Pjxub3NjcmlwdD48YSBocmVmPSIvYXBwLmh0bWwiPk9wZW4gTnl4PC9hPjwvbm9z", "Y3JpcHQ+PC9ib2R5PjwvaHRtbD4gCg==" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});