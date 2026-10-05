import λ4b0c4f93a121 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.mjs";

import { preserveTransferErrors as λ9a344b6bdf6e, requestWithTransferRetry as λ3a0dad42e735 } from "./@re2c83302d088d9bc8eb57ad1!.mjs";

import { headerEntries as λ6d33d1a9d5c8 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Vu extends λ4b0c4f93a121 {
  async init() {
    await super.init(), λ9a344b6bdf6e(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ4b0c4f93a121, λ9a344b6bdf6e, λb6ddef98b57d, λ04d36ae3560e, λ6368fa0941cf) {
    return λ3a0dad42e735(async () => {
      const λ3a0dad42e735 = await super.request(λ4b0c4f93a121, λ9a344b6bdf6e, λb6ddef98b57d, λ04d36ae3560e, λ6368fa0941cf);
      return {
        ...λ3a0dad42e735,
        headers: λ6d33d1a9d5c8(λ3a0dad42e735.headers)
      };
    }, {
      method: λ9a344b6bdf6e,
      body: λb6ddef98b57d,
      signal: λ6368fa0941cf,
      budget: this.responseBudget
    });
  }
}
