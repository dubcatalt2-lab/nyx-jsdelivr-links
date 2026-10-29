(() => {
  let t = "",
    e = "",
    n = null,
    r = 0;
  const o = "\u006e\u0079\u0078\u002e\u006c\u0061\u0073\u0074\u0057\u006f\u0072\u006b\u0069\u006e\u0067\u0052\u0065\u006c\u0061\u0079";
  function a(t) {
    return new Promise((e) => {
      let n,
        r,
        o = !1;
      const a = (t) => {
        if (!o) {
          if (((o = !0), clearTimeout(r), n)) {
            n["\u006f\u006e\u006d\u0065\u0073\u0073\u0061\u0067\u0065"] = n["\u006f\u006e\u0065\u0072\u0072\u006f\u0072"] = n["\u006f\u006e\u0063\u006c\u006f\u0073\u0065"] = null;
            try {
              n["\u0063\u006c\u006f\u0073\u0065"]();
            } catch {}
          }
          e(t);
        }
      };
      r = setTimeout(() => a(!1), 1e4);
      try {
        ((n = new WebSocket(t)),
          (n["\u0062\u0069\u006e\u0061\u0072\u0079\u0054\u0079\u0070\u0065"] = "\u0061\u0072\u0072\u0061\u0079\u0062\u0075\u0066\u0066\u0065\u0072"),
          (n["\u006f\u006e\u006d\u0065\u0073\u0073\u0061\u0067\u0065"] = (t) => {
            if (!(t["\u0064\u0061\u0074\u0061"] instanceof ArrayBuffer)) return;
            const e = new Uint8Array(t["\u0064\u0061\u0074\u0061"]);
            e["\u006c\u0065\u006e\u0067\u0074\u0068"] >= 9 && 3 === e[0] && 0 === new DataView(t["\u0064\u0061\u0074\u0061"])["\u0067\u0065\u0074\u0055\u0069\u006e\u0074\u0033\u0032"](1, !0) && a(!0);
          }),
          (n["\u006f\u006e\u0065\u0072\u0072\u006f\u0072"] = n["\u006f\u006e\u0063\u006c\u006f\u0073\u0065"] = () => a(!1)));
      } catch {
        a(!1);
      }
    });
  }
  function c(o) {
    const a = JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](o);
    a !== t && ((t = a), (e = ""), (n = null), r++);
  }
  window["\u004e\u0079\u0078\u0052\u0065\u006c\u0061\u0079\u0053\u0065\u006c\u0065\u0063\u0074\u0069\u006f\u006e"] = {
    "\u0063\u0075\u0072\u0072\u0065\u006e\u0074": function (t) {
      return (c(t), e || t[0] || "");
    },
    "\u0063\u0068\u006f\u006f\u0073\u0065": async function (t, l = "") {
      if ((c(t), n)) return n;
      if (e && !l) return e;
      const i = r;
      let s = "";
      try {
        s = localStorage["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"](o) || "";
      } catch {}
      const u = [...new Set([e, s, ...t])]["\u0066\u0069\u006c\u0074\u0065\u0072"]((e) => t["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"](e) && e !== l);
      (t["\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0073"](l) && u["\u0070\u0075\u0073\u0068"](l),
        (n = (async () => {
          for (const t of u) {
            const n = await a(t);
            if (i !== r) return "";
            if (n) {
              e = t;
              try {
                localStorage["\u0073\u0065\u0074\u0049\u0074\u0065\u006d"](o, t);
              } catch {}
              return t;
            }
          }
          e = "";
          try {
            localStorage["\u0072\u0065\u006d\u006f\u0076\u0065\u0049\u0074\u0065\u006d"](o);
          } catch {}
          return "";
        })()));
      try {
        return await n;
      } finally {
        i === r && (n = null);
      }
    },
    "\u0070\u0072\u006f\u0062\u0065": a,
  };
})();
