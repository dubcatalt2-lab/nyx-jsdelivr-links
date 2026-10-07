import λ3a9410d6415b from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ4f571dbfaaa7, requestWithTransferRetry as λ905cd4bf0a4c } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ535dd5c1249b } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_2 extends λ3a9410d6415b {
  async init() {
    await super.init(), λ4f571dbfaaa7(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ3a9410d6415b, λ4f571dbfaaa7, λ79590652d2ac, λ1f2650ddcd82, λ3cea8d9f6ce3) {
    return λ905cd4bf0a4c(async () => {
      const λ905cd4bf0a4c = await super.request(λ3a9410d6415b, λ4f571dbfaaa7, λ79590652d2ac, λ1f2650ddcd82, λ3cea8d9f6ce3);
      return {
        ...λ905cd4bf0a4c,
        headers: λ535dd5c1249b(λ905cd4bf0a4c.headers)
      };
    }, {
      method: λ4f571dbfaaa7,
      body: λ79590652d2ac,
      signal: λ3cea8d9f6ce3,
      budget: this.responseBudget
    });
  }
}
