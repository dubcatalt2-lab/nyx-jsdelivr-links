import λ187b8b896b12 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ3de3aa04eb06, headerRecord as λfa78fd879e77 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ187b8b896b12 {
  async request(λ187b8b896b12, λc5a167d5090c, λb15ca4b7bb3f, λ13ffd6db94aa, λfb62c65d172b) {
    const λe3d9763a672a = await super.request(λ187b8b896b12, λc5a167d5090c, λb15ca4b7bb3f, λ3de3aa04eb06(λ13ffd6db94aa), λfb62c65d172b), λf25e12e00cf9 = λfa78fd879e77(λe3d9763a672a.headers);
    return {
      ...λe3d9763a672a,
      headers: λf25e12e00cf9,
      rawHeaders: λf25e12e00cf9
    };
  }
  connect(λ187b8b896b12, λfa78fd879e77, λc5a167d5090c, λb15ca4b7bb3f, λ13ffd6db94aa, λfb62c65d172b, λe3d9763a672a) {
    return super.connect(λ187b8b896b12, λfa78fd879e77, λ3de3aa04eb06(λc5a167d5090c), λb15ca4b7bb3f, λ13ffd6db94aa, λfb62c65d172b, λe3d9763a672a);
  }
}
