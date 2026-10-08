import λ8b13617bae36 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λeca2a73a7d96, requestWithTransferRetry as λfb9bbeb77366 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λ9bec0201319c } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ8b13617bae36 {
  async init() {
    await super.init(), λeca2a73a7d96(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ8b13617bae36, λeca2a73a7d96, λ7b280a7ea664, λ8ee6e26e7cce, λ8ef264bd7417) {
    return λfb9bbeb77366(async () => {
      const λfb9bbeb77366 = await super.request(λ8b13617bae36, λeca2a73a7d96, λ7b280a7ea664, λ8ee6e26e7cce, λ8ef264bd7417);
      return {
        ...λfb9bbeb77366,
        headers: λ9bec0201319c(λfb9bbeb77366.headers)
      };
    }, {
      method: λeca2a73a7d96,
      body: λ7b280a7ea664,
      signal: λ8ef264bd7417,
      budget: this.responseBudget
    });
  }
}
