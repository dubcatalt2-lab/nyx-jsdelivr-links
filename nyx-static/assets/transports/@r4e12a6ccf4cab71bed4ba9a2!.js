import λ59265e5fde19 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ4ece904051b5, requestWithTransferRetry as λd3122e763521 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λa85d58008662 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_2 extends λ59265e5fde19 {
  async init() {
    await super.init(), λ4ece904051b5(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ59265e5fde19, λ4ece904051b5, λ92fd2a694496, λ7ad16785e7d5, λ039126e86dad) {
    return λd3122e763521(async () => {
      const λd3122e763521 = await super.request(λ59265e5fde19, λ4ece904051b5, λ92fd2a694496, λ7ad16785e7d5, λ039126e86dad);
      return {
        ...λd3122e763521,
        headers: λa85d58008662(λd3122e763521.headers)
      };
    }, {
      method: λ4ece904051b5,
      body: λ92fd2a694496,
      signal: λ039126e86dad,
      budget: this.responseBudget
    });
  }
}
