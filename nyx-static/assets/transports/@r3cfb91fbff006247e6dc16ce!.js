import λ26d03c5a6182 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ7ab578d21eb7, headerRecord as λ7772527bf3b9 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ26d03c5a6182 {
  async request(λ26d03c5a6182, λ2d5b010f048e, λ4045b7cc6a07, λdee9da65a226, λf7f750d2b3c7) {
    const λ722823f3a0be = await super.request(λ26d03c5a6182, λ2d5b010f048e, λ4045b7cc6a07, λ7ab578d21eb7(λdee9da65a226), λf7f750d2b3c7), λfddf188853a0 = λ7772527bf3b9(λ722823f3a0be.headers);
    return {
      ...λ722823f3a0be,
      headers: λfddf188853a0,
      rawHeaders: λfddf188853a0
    };
  }
  connect(λ26d03c5a6182, λ7772527bf3b9, λ2d5b010f048e, λ4045b7cc6a07, λdee9da65a226, λf7f750d2b3c7, λ722823f3a0be) {
    return super.connect(λ26d03c5a6182, λ7772527bf3b9, λ7ab578d21eb7(λ2d5b010f048e), λ4045b7cc6a07, λdee9da65a226, λf7f750d2b3c7, λ722823f3a0be);
  }
}
