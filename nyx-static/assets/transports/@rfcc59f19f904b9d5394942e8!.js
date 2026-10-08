import λ0df2510989e3 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ6a1db253dd9a, requestWithTransferRetry as λ7d3712ca8f73 } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ457843138548 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ0df2510989e3 {
  async init() {
    await super.init(), λ6a1db253dd9a(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ0df2510989e3, λ6a1db253dd9a, λ495799dbdc30, λ326bb0b6292e, λ2799c0cc37fa) {
    return λ7d3712ca8f73(async () => {
      const λ7d3712ca8f73 = await super.request(λ0df2510989e3, λ6a1db253dd9a, λ495799dbdc30, λ326bb0b6292e, λ2799c0cc37fa);
      return {
        ...λ7d3712ca8f73,
        headers: λ457843138548(λ7d3712ca8f73.headers)
      };
    }, {
      method: λ6a1db253dd9a,
      body: λ495799dbdc30,
      signal: λ2799c0cc37fa,
      budget: this.responseBudget
    });
  }
}
