import λ248560b488dd from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λdbe97a5f1bde, requestWithTransferRetry as λ59147c15a8bc } from "\x2e\x2f\x40\x72\x35\x64\x37\x39\x30\x65\x64\x37\x61\x30\x31\x32\x65\x63\x31\x32\x64\x64\x61\x39\x31\x64\x61\x33\x21\x2e\x6a\x73";

import { headerEntries as λ6e3114c11a0c } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ248560b488dd {
  async init() {
    await super.init(), λdbe97a5f1bde(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ248560b488dd, λdbe97a5f1bde, λ4d223b88796d, λ5a3de61e3dc9, λ53518c736b5a) {
    return λ59147c15a8bc(async () => {
      const λ59147c15a8bc = await super.request(λ248560b488dd, λdbe97a5f1bde, λ4d223b88796d, λ5a3de61e3dc9, λ53518c736b5a);
      return {
        ...λ59147c15a8bc,
        headers: λ6e3114c11a0c(λ59147c15a8bc.headers)
      };
    }, {
      method: λdbe97a5f1bde,
      body: λ4d223b88796d,
      signal: λ53518c736b5a,
      budget: this.responseBudget
    });
  }
}
