import λ6291f2695fff from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λdb6689f3fcb1, headerRecord as λ785e7c2a705e } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ6291f2695fff {
  async request(λ6291f2695fff, λf751474b5c33, λa0c88a36234e, λdea3c394637b, λ9e36b02b1b56) {
    const λ2587b5ae1091 = await super.request(λ6291f2695fff, λf751474b5c33, λa0c88a36234e, λdb6689f3fcb1(λdea3c394637b), λ9e36b02b1b56), λ2f884f769cb3 = λ785e7c2a705e(λ2587b5ae1091.headers);
    return {
      ...λ2587b5ae1091,
      headers: λ2f884f769cb3,
      rawHeaders: λ2f884f769cb3
    };
  }
  connect(λ6291f2695fff, λ785e7c2a705e, λf751474b5c33, λa0c88a36234e, λdea3c394637b, λ9e36b02b1b56, λ2587b5ae1091) {
    return super.connect(λ6291f2695fff, λ785e7c2a705e, λdb6689f3fcb1(λf751474b5c33), λa0c88a36234e, λdea3c394637b, λ9e36b02b1b56, λ2587b5ae1091);
  }
}
