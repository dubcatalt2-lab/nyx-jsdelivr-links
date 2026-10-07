import λ7f3d7fa5025f from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ7b6b735055cc, requestWithTransferRetry as λ11cfc95e2f6b } from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x6a\x73";

import { headerEntries as λcbe9ca9d3438 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x7765b3_2 extends λ7f3d7fa5025f {
  async init() {
    await super.init(), λ7b6b735055cc(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ7f3d7fa5025f, λ7b6b735055cc, λae1d64793990, λ0a262a2651ba, λ26829b2316bd) {
    return λ11cfc95e2f6b(async () => {
      const λ11cfc95e2f6b = await super.request(λ7f3d7fa5025f, λ7b6b735055cc, λae1d64793990, λ0a262a2651ba, λ26829b2316bd);
      return {
        ...λ11cfc95e2f6b,
        headers: λcbe9ca9d3438(λ11cfc95e2f6b.headers)
      };
    }, {
      method: λ7b6b735055cc,
      body: λae1d64793990,
      signal: λ26829b2316bd,
      budget: this.responseBudget
    });
  }
}
