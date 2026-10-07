import λ11d5e3d091ee from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λc7757926caaf, requestWithTransferRetry as λ45f104c807cd } from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x6a\x73";

import { headerEntries as λ8282b498b943 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
