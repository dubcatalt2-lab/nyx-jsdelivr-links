import λcdd940381e6f from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.mjs";

import { preserveTransferErrors as λ5502c42fbff6, requestWithTransferRetry as λea93bb9fe848 } from "./libcurl-response.mjs";

import { headerEntries as λ3e457d5d3ab5 } from "./header-utils.mjs";

export default class Vu extends λcdd940381e6f {
  async init() {
    await super.init(), λ5502c42fbff6(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λcdd940381e6f, λ5502c42fbff6, λa278d30b8980, λ2658455a5188, λ4bdbecc47e98) {
    return λea93bb9fe848(async () => {
      const λea93bb9fe848 = await super.request(λcdd940381e6f, λ5502c42fbff6, λa278d30b8980, λ2658455a5188, λ4bdbecc47e98);
      return {
        ...λea93bb9fe848,
        headers: λ3e457d5d3ab5(λea93bb9fe848.headers)
      };
    }, {
      method: λ5502c42fbff6,
      body: λa278d30b8980,
      signal: λ4bdbecc47e98,
      budget: this.responseBudget
    });
  }
}
