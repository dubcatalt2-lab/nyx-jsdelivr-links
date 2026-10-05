import λ9e07965e235b from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.mjs";

import { preserveTransferErrors as λ6e123f7b6fb4, requestWithTransferRetry as λ5908077ed1a8 } from "./@re2c83302d088d9bc8eb57ad1!.mjs";

import { headerEntries as λce78ba7cd574 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Vu extends λ9e07965e235b {
  async init() {
    await super.init(), λ6e123f7b6fb4(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ9e07965e235b, λ6e123f7b6fb4, λd5f38c432139, λ119a5f956915, λed356dd322ef) {
    return λ5908077ed1a8(async () => {
      const λ5908077ed1a8 = await super.request(λ9e07965e235b, λ6e123f7b6fb4, λd5f38c432139, λ119a5f956915, λed356dd322ef);
      return {
        ...λ5908077ed1a8,
        headers: λce78ba7cd574(λ5908077ed1a8.headers)
      };
    }, {
      method: λ6e123f7b6fb4,
      body: λd5f38c432139,
      signal: λed356dd322ef,
      budget: this.responseBudget
    });
  }
}
