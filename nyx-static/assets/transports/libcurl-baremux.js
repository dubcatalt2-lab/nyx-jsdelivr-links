import λ8f6021b29d22 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λab46c6f11ef5, headerRecord as λbb7d3385d30e } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ8f6021b29d22 {
  async request(λ8f6021b29d22, λ912de63a8cb4, λd23a5c55c6cc, λbed61054a7d7, λe031f10c4362) {
    const λ20347e9c0ed0 = await super.request(λ8f6021b29d22, λ912de63a8cb4, λd23a5c55c6cc, λab46c6f11ef5(λbed61054a7d7), λe031f10c4362), λ1c1f621306a1 = λbb7d3385d30e(λ20347e9c0ed0.headers);
    return {
      ...λ20347e9c0ed0,
      headers: λ1c1f621306a1,
      rawHeaders: λ1c1f621306a1
    };
  }
  connect(λ8f6021b29d22, λbb7d3385d30e, λ912de63a8cb4, λd23a5c55c6cc, λbed61054a7d7, λe031f10c4362, λ20347e9c0ed0) {
    return super.connect(λ8f6021b29d22, λbb7d3385d30e, λab46c6f11ef5(λ912de63a8cb4), λd23a5c55c6cc, λbed61054a7d7, λe031f10c4362, λ20347e9c0ed0);
  }
}
