import λ59b1d35e6928 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ0c4e582a7b35, requestWithTransferRetry as λf588415dbb15 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λ214aeed60d02 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ59b1d35e6928 {
  async init() {
    await super.init(), λ0c4e582a7b35(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ59b1d35e6928, λ0c4e582a7b35, λ518869c14d13, λ662c69ce5e1b, λ22355209fd7f) {
    return λf588415dbb15(async () => {
      const λf588415dbb15 = await super.request(λ59b1d35e6928, λ0c4e582a7b35, λ518869c14d13, λ662c69ce5e1b, λ22355209fd7f);
      return {
        ...λf588415dbb15,
        headers: λ214aeed60d02(λf588415dbb15.headers)
      };
    }, {
      method: λ0c4e582a7b35,
      body: λ518869c14d13,
      signal: λ22355209fd7f,
      budget: this.responseBudget
    });
  }
}
