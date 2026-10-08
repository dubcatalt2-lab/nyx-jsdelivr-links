import λ0a0b02385a0a from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ7ccbb70f1270, headerRecord as λcf01ec4e05a4 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ0a0b02385a0a {
  async request(λ0a0b02385a0a, λ3e3becb0c478, λ5a7044c46dc1, λ5f26a854f551, λ3a7b885cc974) {
    const λdb2c7bb0b565 = await super.request(λ0a0b02385a0a, λ3e3becb0c478, λ5a7044c46dc1, λ7ccbb70f1270(λ5f26a854f551), λ3a7b885cc974), λb730c17ba642 = λcf01ec4e05a4(λdb2c7bb0b565.headers);
    return {
      ...λdb2c7bb0b565,
      headers: λb730c17ba642,
      rawHeaders: λb730c17ba642
    };
  }
  connect(λ0a0b02385a0a, λcf01ec4e05a4, λ3e3becb0c478, λ5a7044c46dc1, λ5f26a854f551, λ3a7b885cc974, λdb2c7bb0b565) {
    return super.connect(λ0a0b02385a0a, λcf01ec4e05a4, λ7ccbb70f1270(λ3e3becb0c478), λ5a7044c46dc1, λ5f26a854f551, λ3a7b885cc974, λdb2c7bb0b565);
  }
}
