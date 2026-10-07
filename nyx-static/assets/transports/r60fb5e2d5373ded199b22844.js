import λ26d03c5a6182 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ7ab578d21eb7, headerRecord as λ7772527bf3b9 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
