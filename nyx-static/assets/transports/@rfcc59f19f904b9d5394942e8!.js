import λe51bd84083b9 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ8705a2f45ff2, requestWithTransferRetry as λ1ca0d45c58b9 } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ304cb4e81287 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_2 extends λe51bd84083b9 {
  async init() {
    await super.init(), λ8705a2f45ff2(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λe51bd84083b9, λ8705a2f45ff2, λ9341b6ff0cf5, λf755088184ed, λef0a4c79d53a) {
    return λ1ca0d45c58b9(async () => {
      const λ1ca0d45c58b9 = await super.request(λe51bd84083b9, λ8705a2f45ff2, λ9341b6ff0cf5, λf755088184ed, λef0a4c79d53a);
      return {
        ...λ1ca0d45c58b9,
        headers: λ304cb4e81287(λ1ca0d45c58b9.headers)
      };
    }, {
      method: λ8705a2f45ff2,
      body: λ9341b6ff0cf5,
      signal: λef0a4c79d53a,
      budget: this.responseBudget
    });
  }
}
