import λ5a3554d4a530 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ42313cf71750, requestWithTransferRetry as λ070fe2343859 } from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x6a\x73";

import { headerEntries as λ21ec94a700aa } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ5a3554d4a530 {
  async init() {
    await super.init(), λ42313cf71750(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ5a3554d4a530, λ42313cf71750, λ5efad26803be, λ6372a9fea74f, λ1a1ddc4d24b1) {
    return λ070fe2343859(async () => {
      const λ070fe2343859 = await super.request(λ5a3554d4a530, λ42313cf71750, λ5efad26803be, λ6372a9fea74f, λ1a1ddc4d24b1);
      return {
        ...λ070fe2343859,
        headers: λ21ec94a700aa(λ070fe2343859.headers)
      };
    }, {
      method: λ42313cf71750,
      body: λ5efad26803be,
      signal: λ1a1ddc4d24b1,
      budget: this.responseBudget
    });
  }
}
