import λ11d5e3d091ee from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λc7757926caaf, requestWithTransferRetry as λ45f104c807cd } from "\x2e\x2f\x40\x72\x35\x64\x37\x39\x30\x65\x64\x37\x61\x30\x31\x32\x65\x63\x31\x32\x64\x64\x61\x39\x31\x64\x61\x33\x21\x2e\x6a\x73";

import { headerEntries as λ8282b498b943 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ11d5e3d091ee {
  async init() {
    await super.init(), λc7757926caaf(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ11d5e3d091ee, λc7757926caaf, λ9c640c750980, λ7b448a82a4f6, λ5e7526be6097) {
    return λ45f104c807cd(async () => {
      const λ45f104c807cd = await super.request(λ11d5e3d091ee, λc7757926caaf, λ9c640c750980, λ7b448a82a4f6, λ5e7526be6097);
      return {
        ...λ45f104c807cd,
        headers: λ8282b498b943(λ45f104c807cd.headers)
      };
    }, {
      method: λc7757926caaf,
      body: λ9c640c750980,
      signal: λ5e7526be6097,
      budget: this.responseBudget
    });
  }
}
