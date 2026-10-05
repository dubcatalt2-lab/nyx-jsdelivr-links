import λ73f0707e9d02 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.mjs";

import { preserveTransferErrors as λ70e149fa2c86, requestWithTransferRetry as λ2d95d19d22e3 } from "./libcurl-response.mjs";

import { headerEntries as λdfd1b9ffc236 } from "./header-utils.mjs";

export default class Vu extends λ73f0707e9d02 {
  async init() {
    await super.init(), λ70e149fa2c86(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ73f0707e9d02, λ70e149fa2c86, λ447bc3de38d4, λ431eba9b8be7, λe1b18aa2011f) {
    return λ2d95d19d22e3(async () => {
      const λ2d95d19d22e3 = await super.request(λ73f0707e9d02, λ70e149fa2c86, λ447bc3de38d4, λ431eba9b8be7, λe1b18aa2011f);
      return {
        ...λ2d95d19d22e3,
        headers: λdfd1b9ffc236(λ2d95d19d22e3.headers)
      };
    }, {
      method: λ70e149fa2c86,
      body: λ447bc3de38d4,
      signal: λe1b18aa2011f,
      budget: this.responseBudget
    });
  }
}
