(async () => {
  await new Promise(c => {
    const Z = () => setTimeout(c, 0);
    if (document.readyState === "complete") Z(); else window.addEventListener("load", Z, {
      once: true
    });
  });
  const c = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0", "aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+U3BvbnNvcmVkIG9mZmVyczwvdGl0bGU+PHN0eWxlPmJvZHksaHRtbHttYXJn", "aW46MDttaW4taGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMTExO2NvbG9yOiNhYWE7Zm9udDoxMnB4IHN5c3RlbS11aX0qe2JveC1zaXppbmc6Ym9y", "ZGVyLWJveH0uc3R1ZHktMzk0NjMyNTQxMDk0NTE2MDkwe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNw", "YWNlLWJldHdlZW47Z2FwOjEycHg7bWFyZ2luOjA7cGFkZGluZzoxMHB4IDEycHg7bWluLWhlaWdodDo1OHB4O2JhY2tncm91bmQ6IzExMTtib3Jk", "ZXI6MXB4IHNvbGlkICNmZmZmZmYzMDtib3JkZXItcmFkaXVzOjEycHh9LnN0dWR5LTEwMTk4NzEwMjI0NjUzODkwOTh7Zm9udC1zaXplOjExcHg7", "Y29sb3I6I2FhYX0uc3R1ZHktMjk1MTcxMzg1MDQ3MjY0MzAwe2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnkt", "Y29udGVudDpjZW50ZXI7Z2FwOjhweDtib3JkZXI6MXB4IHNvbGlkICNmZmZmZmYzMDtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nOjlweCAxMnB4", "O2JhY2tncm91bmQ6IzE1MTUxNTtjb2xvcjojZWVlO2ZvbnQ6NjAwIDEycHggc3lzdGVtLXVpO2N1cnNvcjpwb2ludGVyfS5zdHVkeS0yOTUxNzEz", "ODUwNDcyNjQzMDA6ZGlzYWJsZWR7b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH0uc3R1ZHktMjk1MTcxMzg1MDQ3MjY0MzAwIHN2Z3t3aWR0aDox", "NXB4O2hlaWdodDoxNXB4O2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDoxLjh9QG1lZGlhKG1heC13aWR0aDoyNTBw", "eCl7LnN0dWR5LTM5NDYzMjU0MTA5NDUxNjA5MHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjVweDtwYWRkaW5nOjdweH0uc3R1ZHktMjk1MTcx", "Mzg1MDQ3MjY0MzAwe3BhZGRpbmc6N3B4O2ZvbnQtc2l6ZToxMXB4O2dhcDo1cHh9LnN0dWR5LTEwMTk4NzEwMjI0NjUzODkwOTh7Zm9udC1zaXpl", "OjEwcHh9fTwvc3R5bGU+PHNjcmlwdCBkZWZlcj0iZGVmZXIiIHNyYz0iL2pzL0ByZTMwNDJkMWY5ZDNiNGNlMzIyMGE2ZDc5IS5qcyI+PC9zY3Jp", "cHQ+IDwvaGVhZD48Ym9keT48c2VjdGlvbiBjbGFzcz0ic3R1ZHktMzk0NjMyNTQxMDk0NTE2MDkwIiBhcmlhLWxhYmVsPSJTcG9uc29yZWQgb2Zm", "ZXJzIj48c3BhbiBjbGFzcz0ic3R1ZHktMTAxOTg3MTAyMjQ2NTM4OTA5OCI+QWR2ZXJ0aXNlbWVudDwvc3Bhbj48YnV0dG9uIGNsYXNzPSJzdHVk", "eS0yOTUxNzEzODUwNDcyNjQzMDAiIHR5cGU9ImJ1dHRvbiIgZGlzYWJsZWQ9ImRpc2FibGVkIiBhcmlhLWxhYmVsPSJPcGVuIHNwb25zb3JlZCBv", "ZmZlciI+T3BlbiBvZmZlcjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PHBhdGggZD0iTTE0IDRoNnY2TTIwIDQg", "MTAgMTRNMTEgNUg1djE0aDE0di02Ii8+PC9zdmc+PC9idXR0b24+PC9zZWN0aW9uPjxzY3JpcHQgc3JjPSIuL0ByY2MwMzQ0ZjUxNmJlNzg4YTNm", "N2M3YzhlIS5qcyI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii4vQHI2ZDY3NGU0YWZjZWI2OGEyYmIxYmE4NTEhLmpzIj48L3NjcmlwdD48L2JvZHk+", "PC9odG1sPgo=" ].join("")), c => c.charCodeAt(0)));
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