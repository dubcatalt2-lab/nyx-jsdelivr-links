import λcbcf00e43612 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.js";

import { preserveTransferErrors as λddda1537ea6a, requestWithTransferRetry as λ1c826f3090b4 } from "./@re2c83302d088d9bc8eb57ad1!.js";

import { headerEntries as λ03ed9b043ccf } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Vu extends λcbcf00e43612 {
  async init() {
    await super.init(), λddda1537ea6a(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λcbcf00e43612, λddda1537ea6a, λ07048e8b5774, λdb801e10b39e, λ6a863faf2f03) {
    return λ1c826f3090b4(async () => {
      const λ1c826f3090b4 = await super.request(λcbcf00e43612, λddda1537ea6a, λ07048e8b5774, λdb801e10b39e, λ6a863faf2f03);
      return {
        ...λ1c826f3090b4,
        headers: λ03ed9b043ccf(λ1c826f3090b4.headers)
      };
    }, {
      method: λddda1537ea6a,
      body: λ07048e8b5774,
      signal: λ6a863faf2f03,
      budget: this.responseBudget
    });
  }
}
