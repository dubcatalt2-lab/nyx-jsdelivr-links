import λ46d5323b1801 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ59c3fb14879f, requestWithTransferRetry as λ98f49ab2a7f8 } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ87e1d475b76b } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ46d5323b1801 {
  async init() {
    await super.init(), λ59c3fb14879f(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ46d5323b1801, λ59c3fb14879f, λbfc043935a9d, λ463bcbfcf129, λ27e75ae84778) {
    return λ98f49ab2a7f8(async () => {
      const λ98f49ab2a7f8 = await super.request(λ46d5323b1801, λ59c3fb14879f, λbfc043935a9d, λ463bcbfcf129, λ27e75ae84778);
      return {
        ...λ98f49ab2a7f8,
        headers: λ87e1d475b76b(λ98f49ab2a7f8.headers)
      };
    }, {
      method: λ59c3fb14879f,
      body: λbfc043935a9d,
      signal: λ27e75ae84778,
      budget: this.responseBudget
    });
  }
}
