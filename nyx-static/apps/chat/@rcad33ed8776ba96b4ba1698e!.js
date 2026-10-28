class ss extends AudioWorkletProcessor {
  constructor() {
    (super(),
      (this["\u0066\u0072\u0061\u006d\u0065"] = new Int16Array(1600)),
      (this["\u0069\u006e\u0064\u0065\u0078"] = 0),
      (this["\u0070\u0068\u0061\u0073\u0065"] = 0),
      (this["\u0073\u0075\u006d"] = 0),
      (this["\u0063\u006f\u0075\u006e\u0074"] = 0));
  }
  process(s) {
    const t = s[0]?.[0];
    if (!t) return !0;
    for (const e of t)
      ((this["\u0073\u0075\u006d"] += e),
        this["\u0063\u006f\u0075\u006e\u0074"]++,
        (this["\u0070\u0068\u0061\u0073\u0065"] += 16e3),
        this["\u0070\u0068\u0061\u0073\u0065"] >= sampleRate &&
          ((this["\u0070\u0068\u0061\u0073\u0065"] -= sampleRate),
          (this["\u0066\u0072\u0061\u006d\u0065"][this["\u0069\u006e\u0064\u0065\u0078"]++] = Math["\u0072\u006f\u0075\u006e\u0064"](
            32767 * Math["\u006d\u0061\u0078"](-1, Math["\u006d\u0069\u006e"](1, this["\u0073\u0075\u006d"] / this["\u0063\u006f\u0075\u006e\u0074"])),
          )),
          (this["\u0073\u0075\u006d"] = 0),
          (this["\u0063\u006f\u0075\u006e\u0074"] = 0),
          1600 === this["\u0069\u006e\u0064\u0065\u0078"] &&
            (this["\u0070\u006f\u0072\u0074"]["\u0070\u006f\u0073\u0074\u004d\u0065\u0073\u0073\u0061\u0067\u0065"](this["\u0066\u0072\u0061\u006d\u0065"]["\u0062\u0075\u0066\u0066\u0065\u0072"], [this["\u0066\u0072\u0061\u006d\u0065"]["\u0062\u0075\u0066\u0066\u0065\u0072"]]),
            (this["\u0066\u0072\u0061\u006d\u0065"] = new Int16Array(1600)),
            (this["\u0069\u006e\u0064\u0065\u0078"] = 0))));
    return !0;
  }
}

registerProcessor("\u006e\u0079\u0078\u002d\u0076\u006f\u0069\u0063\u0065\u002d\u0063\u0061\u0070\u0074\u0075\u0072\u0065", ss);
