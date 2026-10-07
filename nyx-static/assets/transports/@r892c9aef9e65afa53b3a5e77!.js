import λf074bae2a233 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ97ab9f61926b, requestWithTransferRetry as λfcdcb318735d } from "\x2e\x2f\x40\x72\x35\x64\x37\x39\x30\x65\x64\x37\x61\x30\x31\x32\x65\x63\x31\x32\x64\x64\x61\x39\x31\x64\x61\x33\x21\x2e\x6a\x73";

import { headerEntries as λ43caaef86ef6 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x7765b3_2 extends λf074bae2a233 {
  async init() {
    await super.init(), λ97ab9f61926b(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λf074bae2a233, λ97ab9f61926b, λbdf0d3c05f8a, λde0555235346, λ3d5447163caf) {
    return λfcdcb318735d(async () => {
      const λfcdcb318735d = await super.request(λf074bae2a233, λ97ab9f61926b, λbdf0d3c05f8a, λde0555235346, λ3d5447163caf);
      return {
        ...λfcdcb318735d,
        headers: λ43caaef86ef6(λfcdcb318735d.headers)
      };
    }, {
      method: λ97ab9f61926b,
      body: λbdf0d3c05f8a,
      signal: λ3d5447163caf,
      budget: this.responseBudget
    });
  }
}
