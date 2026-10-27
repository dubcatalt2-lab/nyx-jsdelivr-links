(() => {
  let n = 0,
    e = 0,
    t = 0,
    i = "",
    o = null,
    l = null,
    r = !1,
    u = null,
    a = null,
    c = 0,
    d = !1,
    s = !1;
  function f() {
    document["\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0042\u0079\u0049\u0064"]("\u006e\u0037\u0078\u0041\u0076\u0061\u0069\u006c\u0061\u0062\u0069\u006c\u0069\u0074\u0079\u0057\u0061\u0072\u006e\u0069\u006e\u0067")?.["\u0072\u0065\u006d\u006f\u0076\u0065"]();
  }
  function v() {
    ((n = 0), (e = 0), (d = !1), (t = 0), (s = !1));
  }
  function m(n) {
    (clearTimeout(u),
      (u = setTimeout(() => {
        w();
      }, n)));
  }
  function y() {
    (c++, a?.(), clearTimeout(u), (t = 0), document["\u0068\u0069\u0064\u0064\u0065\u006e"] || !1 === navigator["\u006f\u006e\u004c\u0069\u006e\u0065"] || m(0));
  }
  async function w() {
    if (r || document["\u0068\u0069\u0064\u0064\u0065\u006e"] || !1 === navigator["\u006f\u006e\u004c\u0069\u006e\u0065"] || d || !o) return;
    const n = o();
    if (!/^wss?:\/\//i["\u0074\u0065\u0073\u0074"](n["\u0075\u0072\u006c"])) return ((i = ""), (t = 0), (s = !1), f(), void m(3e4));
    i !== n["\u0075\u0072\u006c"] && ((i = n["\u0075\u0072\u006c"]), (t = 0), (s = !1), f());
    const e = c;
    r = !0;
    try {
      const i = await ((u = n["\u0075\u0072\u006c"]),
      new Promise((n) => {
        let e,
          t,
          i = !1;
        const o = (o) => {
          if (!i) {
            if (((i = !0), clearTimeout(t), (a = null), e)) {
              e["\u006f\u006e\u006f\u0070\u0065\u006e"] = e["\u006f\u006e\u0065\u0072\u0072\u006f\u0072"] = e["\u006f\u006e\u0063\u006c\u006f\u0073\u0065"] = null;
              try {
                e["\u0063\u006c\u006f\u0073\u0065"]();
              } catch {}
            }
            n(o);
          }
        };
        ((a = () => o(null)), (t = setTimeout(() => o(!1), 1e4)));
        try {
          ((e = new WebSocket(u)), (e["\u006f\u006e\u006f\u0070\u0065\u006e"] = () => o(!0)), (e["\u006f\u006e\u0065\u0072\u0072\u006f\u0072"] = e["\u006f\u006e\u0063\u006c\u006f\u0073\u0065"] = () => o(!1)));
        } catch {
          o(!1);
        }
      }));
      if (e !== c || null === i || document["\u0068\u0069\u0064\u0064\u0065\u006e"] || !1 === navigator["\u006f\u006e\u004c\u0069\u006e\u0065"]) return;
      if (o()["\u0075\u0072\u006c"] !== n["\u0075\u0072\u006c"]) return ((t = 0), (s = !1), f(), void m(0));
      ((t = i ? 0 : t + 1),
        (s = !i && (s || t >= 3)),
        !i && t >= 3 && (await l?.(n["\u0075\u0072\u006c"])),
        f(),
        m(i ? 3e4 : 5e3));
    } finally {
      r = !1;
    }
    var u;
  }
  window["\u004e\u0079\u0078\u0041\u0076\u0061\u0069\u006c\u0061\u0062\u0069\u006c\u0069\u0074\u0079"] = {
    "\u0072\u0065\u0063\u006f\u0072\u0064\u0048\u0065\u0061\u006c\u0074\u0068": function (t) {
      if (!1 === navigator["\u006f\u006e\u004c\u0069\u006e\u0065"]) return (v(), void f());
      if (t) {
        const t = d;
        ((n = 0), (e = 0), (d = !1), t && m(0));
      } else (n || (e = Date["\u006e\u006f\u0077"]()), n++, n >= 3 && Date["\u006e\u006f\u0077"]() - e >= 1e4 && (d = !0));
      f();
    },
    start(n, e) {
      o ||
        ((o = n),
        (l = e),
        w(),
        addEventListener("\u006f\u0066\u0066\u006c\u0069\u006e\u0065", () => {
          (v(), y(), f());
        }),
        addEventListener("\u006f\u006e\u006c\u0069\u006e\u0065", () => {
          (v(), y(), f());
        }),
        document["\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072"]("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", y));
    },
  };
})();
