import λ4dd2f7d610f3 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ49fe4811dc24, requestWithTransferRetry as λe77fa82956e6 } from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x6a\x73";

import { headerEntries as λ83457dbdc8eb } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ4dd2f7d610f3 {
  async init() {
    await super.init(), λ49fe4811dc24(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ4dd2f7d610f3, λ49fe4811dc24, λa501fb1eb159, λfc4b8a5f1b51, λac4f09b79ecc) {
    return λe77fa82956e6(async () => {
      const λe77fa82956e6 = await super.request(λ4dd2f7d610f3, λ49fe4811dc24, λa501fb1eb159, λfc4b8a5f1b51, λac4f09b79ecc);
      return {
        ...λe77fa82956e6,
        headers: λ83457dbdc8eb(λe77fa82956e6.headers)
      };
    }, {
      method: λ49fe4811dc24,
      body: λa501fb1eb159,
      signal: λac4f09b79ecc,
      budget: this.responseBudget
    });
  }
}
