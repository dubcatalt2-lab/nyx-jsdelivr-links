import λ4c271da05479 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ6c45c65d0f6d, requestWithTransferRetry as λc6e062d0d64d } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λ87fb6faab04d } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ4c271da05479 {
  async init() {
    await super.init(), λ6c45c65d0f6d(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ4c271da05479, λ6c45c65d0f6d, λff0676ec5539, λc1d1fe881672, λ42245822a101) {
    return λc6e062d0d64d(async () => {
      const λc6e062d0d64d = await super.request(λ4c271da05479, λ6c45c65d0f6d, λff0676ec5539, λc1d1fe881672, λ42245822a101);
      return {
        ...λc6e062d0d64d,
        headers: λ87fb6faab04d(λc6e062d0d64d.headers)
      };
    }, {
      method: λ6c45c65d0f6d,
      body: λff0676ec5539,
      signal: λ42245822a101,
      budget: this.responseBudget
    });
  }
}
