import λfc38a70a6d33 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ536d20fcf0ba, requestWithTransferRetry as λbf02d1566b2c } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ02b3bdd09e6e } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λfc38a70a6d33 {
  async init() {
    await super.init(), λ536d20fcf0ba(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λfc38a70a6d33, λ536d20fcf0ba, λ853ff82d2006, λ08a0d64dab2d, λ4d4ade946958) {
    return λbf02d1566b2c(async () => {
      const λbf02d1566b2c = await super.request(λfc38a70a6d33, λ536d20fcf0ba, λ853ff82d2006, λ08a0d64dab2d, λ4d4ade946958);
      return {
        ...λbf02d1566b2c,
        headers: λ02b3bdd09e6e(λbf02d1566b2c.headers)
      };
    }, {
      method: λ536d20fcf0ba,
      body: λ853ff82d2006,
      signal: λ4d4ade946958,
      budget: this.responseBudget
    });
  }
}
