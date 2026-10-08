import λ187b8b896b12 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ3de3aa04eb06, headerRecord as λfa78fd879e77 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
