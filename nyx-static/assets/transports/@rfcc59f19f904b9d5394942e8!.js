import λ681a92898212 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.js";

import { preserveTransferErrors as λcbf393f45e41, requestWithTransferRetry as λ00ac8c4602f4 } from "./@re2c83302d088d9bc8eb57ad1!.js";

import { headerEntries as λ6b45e2388d04 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Vu extends λ681a92898212 {
  async init() {
    await super.init(), λcbf393f45e41(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ681a92898212, λcbf393f45e41, λaba7129037a2, λf5cab48bdf8f, λ67c3d1610539) {
    return λ00ac8c4602f4(async () => {
      const λ00ac8c4602f4 = await super.request(λ681a92898212, λcbf393f45e41, λaba7129037a2, λf5cab48bdf8f, λ67c3d1610539);
      return {
        ...λ00ac8c4602f4,
        headers: λ6b45e2388d04(λ00ac8c4602f4.headers)
      };
    }, {
      method: λcbf393f45e41,
      body: λaba7129037a2,
      signal: λ67c3d1610539,
      budget: this.responseBudget
    });
  }
}
