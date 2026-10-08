import λede431c85cc7 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ26eb032537db, requestWithTransferRetry as λ2403a662d8d9 } from "\x2e\x2f\x40\x72\x35\x64\x37\x39\x30\x65\x64\x37\x61\x30\x31\x32\x65\x63\x31\x32\x64\x64\x61\x39\x31\x64\x61\x33\x21\x2e\x6a\x73";

import { headerEntries as λ35b06229804e } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λede431c85cc7 {
  async init() {
    await super.init(), λ26eb032537db(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λede431c85cc7, λ26eb032537db, λea7d63c8dba9, λ91d3964f7bf5, λbcd6be943c70) {
    return λ2403a662d8d9(async () => {
      const λ2403a662d8d9 = await super.request(λede431c85cc7, λ26eb032537db, λea7d63c8dba9, λ91d3964f7bf5, λbcd6be943c70);
      return {
        ...λ2403a662d8d9,
        headers: λ35b06229804e(λ2403a662d8d9.headers)
      };
    }, {
      method: λ26eb032537db,
      body: λea7d63c8dba9,
      signal: λbcd6be943c70,
      budget: this.responseBudget
    });
  }
}
