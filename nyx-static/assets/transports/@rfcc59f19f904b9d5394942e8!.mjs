import λ5a7007b05fc0 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.mjs";

import { preserveTransferErrors as λd27b73865e99, requestWithTransferRetry as λ0e784e9efbf6 } from "./@re2c83302d088d9bc8eb57ad1!.mjs";

import { headerEntries as λ440733d11d56 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Vu extends λ5a7007b05fc0 {
  async init() {
    await super.init(), λd27b73865e99(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ5a7007b05fc0, λd27b73865e99, λb6ef462d5906, λc5a6dc2437c0, λe51ac8b36b6a) {
    return λ0e784e9efbf6(async () => {
      const λ0e784e9efbf6 = await super.request(λ5a7007b05fc0, λd27b73865e99, λb6ef462d5906, λc5a6dc2437c0, λe51ac8b36b6a);
      return {
        ...λ0e784e9efbf6,
        headers: λ440733d11d56(λ0e784e9efbf6.headers)
      };
    }, {
      method: λd27b73865e99,
      body: λb6ef462d5906,
      signal: λe51ac8b36b6a,
      budget: this.responseBudget
    });
  }
}
