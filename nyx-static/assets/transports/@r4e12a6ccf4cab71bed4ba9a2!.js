import λ3033f4940b89 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λdc60f037a56d, requestWithTransferRetry as λe769277291e4 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λ0321137888ad } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ3033f4940b89 {
  async init() {
    await super.init(), λdc60f037a56d(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ3033f4940b89, λdc60f037a56d, λc0e45a5595f0, λ50f7f3e2e0f1, λ4cb76480e265) {
    return λe769277291e4(async () => {
      const λe769277291e4 = await super.request(λ3033f4940b89, λdc60f037a56d, λc0e45a5595f0, λ50f7f3e2e0f1, λ4cb76480e265);
      return {
        ...λe769277291e4,
        headers: λ0321137888ad(λe769277291e4.headers)
      };
    }, {
      method: λdc60f037a56d,
      body: λc0e45a5595f0,
      signal: λ4cb76480e265,
      budget: this.responseBudget
    });
  }
}
