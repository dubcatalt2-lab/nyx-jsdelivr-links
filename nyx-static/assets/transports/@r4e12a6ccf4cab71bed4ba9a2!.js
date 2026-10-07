import λ38b35f935e56 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λa09b77a5d3df, requestWithTransferRetry as λ7cfa3b6bf294 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λ61a76f914480 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_2 extends λ38b35f935e56 {
  async init() {
    await super.init(), λa09b77a5d3df(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ38b35f935e56, λa09b77a5d3df, λc7821a886994, λ4e1e0843a7ad, λ43c2e982301e) {
    return λ7cfa3b6bf294(async () => {
      const λ7cfa3b6bf294 = await super.request(λ38b35f935e56, λa09b77a5d3df, λc7821a886994, λ4e1e0843a7ad, λ43c2e982301e);
      return {
        ...λ7cfa3b6bf294,
        headers: λ61a76f914480(λ7cfa3b6bf294.headers)
      };
    }, {
      method: λa09b77a5d3df,
      body: λc7821a886994,
      signal: λ43c2e982301e,
      budget: this.responseBudget
    });
  }
}
