class __143ff0b2609505e3c405e7801f9eca8d3884100486ad7a5113fbd23fd285e913 extends AudioWorkletProcessor {
  constructor() {
    (super(),
      (this["\u0066\u0072\u0061\u006d\u0065"] = new Int16Array(1600)),
      (this["\u0069\u006e\u0064\u0065\u0078"] = 0),
      (this["\u0070\u0068\u0061\u0073\u0065"] = 0),
      (this["\u0073\u0075\u006d"] = 0),
      (this["\u0063\u006f\u0075\u006e\u0074"] = 0));
  }
  process(__af29b979bab80be80228533d7f7a6108b898ce7204bee96f1c31dbb8933bac06) {
    const __ce00a2af57126faa04f9124c1a23db068a6318e688060671bdd7322004bb8447 =
      __af29b979bab80be80228533d7f7a6108b898ce7204bee96f1c31dbb8933bac06[0]?.[0];
    if (!__ce00a2af57126faa04f9124c1a23db068a6318e688060671bdd7322004bb8447) return !0;
    for (const __8ecaf8ed32e520d738b1d7097912c90f8337fc00854bab1740b148c5fb3ed287 of __ce00a2af57126faa04f9124c1a23db068a6318e688060671bdd7322004bb8447)
      ((this["\u0073\u0075\u006d"] += __8ecaf8ed32e520d738b1d7097912c90f8337fc00854bab1740b148c5fb3ed287),
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

registerProcessor(
  "\u006e\u0079\u0078\u002d\u0076\u006f\u0069\u0063\u0065\u002d\u0063\u0061\u0070\u0074\u0075\u0072\u0065",
  __143ff0b2609505e3c405e7801f9eca8d3884100486ad7a5113fbd23fd285e913,
);
