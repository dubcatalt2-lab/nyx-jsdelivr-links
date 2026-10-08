import λb6db55fe94aa from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ32fbbe3e1718, requestWithTransferRetry as λ8493eeee8cc1 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λebf2c6d7a1b4 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λb6db55fe94aa {
  async init() {
    await super.init(), λ32fbbe3e1718(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λb6db55fe94aa, λ32fbbe3e1718, λd745fb3db5d7, λ1d2da3b7aa77, λcb04daa9bd65) {
    return λ8493eeee8cc1(async () => {
      const λ8493eeee8cc1 = await super.request(λb6db55fe94aa, λ32fbbe3e1718, λd745fb3db5d7, λ1d2da3b7aa77, λcb04daa9bd65);
      return {
        ...λ8493eeee8cc1,
        headers: λebf2c6d7a1b4(λ8493eeee8cc1.headers)
      };
    }, {
      method: λ32fbbe3e1718,
      body: λd745fb3db5d7,
      signal: λcb04daa9bd65,
      budget: this.responseBudget
    });
  }
}
