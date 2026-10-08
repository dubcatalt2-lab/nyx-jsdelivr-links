import λc8abebd675fa from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ9fd4b2b68014, requestWithTransferRetry as λf8b6d19c86f9 } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ21ac0a4d7450 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λc8abebd675fa {
  async init() {
    await super.init(), λ9fd4b2b68014(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λc8abebd675fa, λ9fd4b2b68014, λbd2b954377ee, λ58415c9cf6f9, λf09f4fa806da) {
    return λf8b6d19c86f9(async () => {
      const λf8b6d19c86f9 = await super.request(λc8abebd675fa, λ9fd4b2b68014, λbd2b954377ee, λ58415c9cf6f9, λf09f4fa806da);
      return {
        ...λf8b6d19c86f9,
        headers: λ21ac0a4d7450(λf8b6d19c86f9.headers)
      };
    }, {
      method: λ9fd4b2b68014,
      body: λbd2b954377ee,
      signal: λf09f4fa806da,
      budget: this.responseBudget
    });
  }
}
