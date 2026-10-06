import λ522996d228cf from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.js";

import { preserveTransferErrors as λ993be301ea84, requestWithTransferRetry as λ280975e8131b } from "./@re2c83302d088d9bc8eb57ad1!.js";

import { headerEntries as λ802367f0572f } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Vu extends λ522996d228cf {
  async init() {
    await super.init(), λ993be301ea84(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ522996d228cf, λ993be301ea84, λ9731f7022a76, λe458659467c1, λ85ee123380b7) {
    return λ280975e8131b(async () => {
      const λ280975e8131b = await super.request(λ522996d228cf, λ993be301ea84, λ9731f7022a76, λe458659467c1, λ85ee123380b7);
      return {
        ...λ280975e8131b,
        headers: λ802367f0572f(λ280975e8131b.headers)
      };
    }, {
      method: λ993be301ea84,
      body: λ9731f7022a76,
      signal: λ85ee123380b7,
      budget: this.responseBudget
    });
  }
}
