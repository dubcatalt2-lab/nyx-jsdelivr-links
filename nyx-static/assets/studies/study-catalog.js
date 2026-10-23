export function currentGnPath(t, r) {
  const n = /^(\d+)(?:[-_.][a-z0-9_.-]*)?\.html(?:-[a-z0-9]+)?$/i["\u0065\u0078\u0065\u0063"](t);
  if (!n) return t;
  const a = Array["\u0069\u0073\u0041\u0072\u0072\u0061\u0079"](r) ? r : r?.["\u0067\u0061\u006d\u0065\u0073"],
    e = a?.["\u0066\u0069\u006e\u0064"]((t) => String(t["\u0069\u0064"]) === n[1])?.["\u0070\u0061\u0074\u0068"];
  return "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof e && /^[a-z0-9_.-]+\.html(?:-[a-z0-9]+)?$/i["\u0074\u0065\u0073\u0074"](e) ? e : t;
}
