import λ8e71db1abeba from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ7a1f18587fe5, requestWithTransferRetry as λbae197aed1e3 } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λ6e91c24e7e77 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ8e71db1abeba {
  async init() {
    await super.init(), λ7a1f18587fe5(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ8e71db1abeba, λ7a1f18587fe5, λ10cd74bc2e36, λ9b484a4e78c0, λc470046addf6) {
    return λbae197aed1e3(async () => {
      const λbae197aed1e3 = await super.request(λ8e71db1abeba, λ7a1f18587fe5, λ10cd74bc2e36, λ9b484a4e78c0, λc470046addf6);
      return {
        ...λbae197aed1e3,
        headers: λ6e91c24e7e77(λbae197aed1e3.headers)
      };
    }, {
      method: λ7a1f18587fe5,
      body: λ10cd74bc2e36,
      signal: λc470046addf6,
      budget: this.responseBudget
    });
  }
}
