import λbc8248aa182d from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.mjs";

import { preserveTransferErrors as λef5042889d4b, requestWithTransferRetry as λdff28d859d79 } from "./@re2c83302d088d9bc8eb57ad1!.mjs";

import { headerEntries as λa731cc5cabda } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Vu extends λbc8248aa182d {
  async init() {
    await super.init(), λef5042889d4b(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λbc8248aa182d, λef5042889d4b, λ2a873a9f4560, λ7fb549c19ec6, λ97ac19dec419) {
    return λdff28d859d79(async () => {
      const λdff28d859d79 = await super.request(λbc8248aa182d, λef5042889d4b, λ2a873a9f4560, λ7fb549c19ec6, λ97ac19dec419);
      return {
        ...λdff28d859d79,
        headers: λa731cc5cabda(λdff28d859d79.headers)
      };
    }, {
      method: λef5042889d4b,
      body: λ2a873a9f4560,
      signal: λ97ac19dec419,
      budget: this.responseBudget
    });
  }
}
