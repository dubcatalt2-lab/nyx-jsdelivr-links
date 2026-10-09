import λ6f4d9ad26f24 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λ4ff3cd641647 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ6f4d9ad26f24 {
  async request(λ6f4d9ad26f24, λeee696e10202, λ51f4fe94c5cb, λaf08d12a0f4f, λ52d4d82a1457) {
    const λfdf14238081c = await super.request(λ6f4d9ad26f24, λeee696e10202, λ51f4fe94c5cb, λ4ff3cd641647(λaf08d12a0f4f), λ52d4d82a1457);
    return {
      ...λfdf14238081c,
      headers: λ4ff3cd641647(λfdf14238081c.headers)
    };
  }
  connect(λ6f4d9ad26f24, λeee696e10202, λ51f4fe94c5cb, λaf08d12a0f4f, λ52d4d82a1457, λfdf14238081c, λf271ed4f8493) {
    return super.connect(λ6f4d9ad26f24, λeee696e10202, λ4ff3cd641647(λ51f4fe94c5cb), λaf08d12a0f4f, λ52d4d82a1457, λfdf14238081c, λf271ed4f8493);
  }
}
