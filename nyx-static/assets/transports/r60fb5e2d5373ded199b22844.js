import λ8f6021b29d22 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λab46c6f11ef5, headerRecord as λbb7d3385d30e } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
