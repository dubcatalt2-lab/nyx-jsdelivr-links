import λ465fcb19f2e2 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ94557b9e4532, requestWithTransferRetry as λ7b239b158cee } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λb8e39af8c673 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ465fcb19f2e2 {
  async init() {
    await super.init(), λ94557b9e4532(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ465fcb19f2e2, λ94557b9e4532, λ4425f9db6bf0, λ9133186e6bce, λ402f84735159) {
    return λ7b239b158cee(async () => {
      const λ7b239b158cee = await super.request(λ465fcb19f2e2, λ94557b9e4532, λ4425f9db6bf0, λ9133186e6bce, λ402f84735159);
      return {
        ...λ7b239b158cee,
        headers: λb8e39af8c673(λ7b239b158cee.headers)
      };
    }, {
      method: λ94557b9e4532,
      body: λ4425f9db6bf0,
      signal: λ402f84735159,
      budget: this.responseBudget
    });
  }
}
