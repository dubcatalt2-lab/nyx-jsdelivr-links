import λ3532c0977c7a from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ546ad7871b97, requestWithTransferRetry as λd34f1f6bf9b2 } from "\x2e\x2f\x40\x72\x35\x64\x37\x39\x30\x65\x64\x37\x61\x30\x31\x32\x65\x63\x31\x32\x64\x64\x61\x39\x31\x64\x61\x33\x21\x2e\x6a\x73";

import { headerEntries as λc3e13caacc9c } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ3532c0977c7a {
  async init() {
    await super.init(), λ546ad7871b97(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ3532c0977c7a, λ546ad7871b97, λa81feda98dc0, λd5f456adad35, λb0852de84dc7) {
    return λd34f1f6bf9b2(async () => {
      const λd34f1f6bf9b2 = await super.request(λ3532c0977c7a, λ546ad7871b97, λa81feda98dc0, λd5f456adad35, λb0852de84dc7);
      return {
        ...λd34f1f6bf9b2,
        headers: λc3e13caacc9c(λd34f1f6bf9b2.headers)
      };
    }, {
      method: λ546ad7871b97,
      body: λa81feda98dc0,
      signal: λb0852de84dc7,
      budget: this.responseBudget
    });
  }
}
