import λ04c202750d59 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ64266317b0d9, headerRecord as λ4321e8e231c5 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ04c202750d59 {
  async request(λ04c202750d59, λ36fc8ebc9096, λ65c01d12010b, λb7f7cd5ddb3c, λ20c13b372a1d) {
    const λ9ffe4c53c8ff = await super.request(λ04c202750d59, λ36fc8ebc9096, λ65c01d12010b, λ64266317b0d9(λb7f7cd5ddb3c), λ20c13b372a1d), λcaf40ca39769 = λ4321e8e231c5(λ9ffe4c53c8ff.headers);
    return {
      ...λ9ffe4c53c8ff,
      headers: λcaf40ca39769,
      rawHeaders: λcaf40ca39769
    };
  }
  connect(λ04c202750d59, λ4321e8e231c5, λ36fc8ebc9096, λ65c01d12010b, λb7f7cd5ddb3c, λ20c13b372a1d, λ9ffe4c53c8ff) {
    return super.connect(λ04c202750d59, λ4321e8e231c5, λ64266317b0d9(λ36fc8ebc9096), λ65c01d12010b, λb7f7cd5ddb3c, λ20c13b372a1d, λ9ffe4c53c8ff);
  }
}
