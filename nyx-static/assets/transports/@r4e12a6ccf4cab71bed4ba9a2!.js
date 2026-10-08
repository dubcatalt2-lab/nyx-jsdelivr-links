import λ27fba4fc5704 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ553d57e4572c, requestWithTransferRetry as λfaba43c626f9 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λac1c0cbeb292 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ27fba4fc5704 {
  async init() {
    await super.init(), λ553d57e4572c(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ27fba4fc5704, λ553d57e4572c, λ986ad1c0a748, λea64dbf2b23d, λ530178c4c88d) {
    return λfaba43c626f9(async () => {
      const λfaba43c626f9 = await super.request(λ27fba4fc5704, λ553d57e4572c, λ986ad1c0a748, λea64dbf2b23d, λ530178c4c88d);
      return {
        ...λfaba43c626f9,
        headers: λac1c0cbeb292(λfaba43c626f9.headers)
      };
    }, {
      method: λ553d57e4572c,
      body: λ986ad1c0a748,
      signal: λ530178c4c88d,
      budget: this.responseBudget
    });
  }
}
