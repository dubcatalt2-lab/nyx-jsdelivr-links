import λ2b0c2401618b from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ93475ae0fd01, requestWithTransferRetry as λ78a2ac95f2ba } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ72af75f5821c } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ2b0c2401618b {
  async init() {
    await super.init(), λ93475ae0fd01(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ2b0c2401618b, λ93475ae0fd01, λf5733de594a8, λ9cc37d42f251, λ609cb2c50cd6) {
    return λ78a2ac95f2ba(async () => {
      const λ78a2ac95f2ba = await super.request(λ2b0c2401618b, λ93475ae0fd01, λf5733de594a8, λ9cc37d42f251, λ609cb2c50cd6);
      return {
        ...λ78a2ac95f2ba,
        headers: λ72af75f5821c(λ78a2ac95f2ba.headers)
      };
    }, {
      method: λ93475ae0fd01,
      body: λf5733de594a8,
      signal: λ609cb2c50cd6,
      budget: this.responseBudget
    });
  }
}
