import λ01aed263f19d from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x74\x65\x78\x74\x6c\x69\x62\x2f\x40\x72\x38\x33\x61\x33\x61\x66\x35\x35\x66\x62\x33\x63\x37\x34\x38\x63\x33\x30\x39\x39\x63\x36\x36\x64\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ854dce6f27fe, requestWithTransferRetry as λbdabe3151dd2 } from "\x2e\x2f\x40\x72\x65\x32\x63\x38\x33\x33\x30\x32\x64\x30\x38\x38\x64\x39\x62\x63\x38\x65\x62\x35\x37\x61\x64\x31\x21\x2e\x6a\x73";

import { headerEntries as λd500de630ba8 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ01aed263f19d {
  async init() {
    await super.init(), λ854dce6f27fe(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ01aed263f19d, λ854dce6f27fe, λc611841461e2, λ55ee0b384f95, λ8d246b6d3dcf) {
    return λbdabe3151dd2(async () => {
      const λbdabe3151dd2 = await super.request(λ01aed263f19d, λ854dce6f27fe, λc611841461e2, λ55ee0b384f95, λ8d246b6d3dcf);
      return {
        ...λbdabe3151dd2,
        headers: λd500de630ba8(λbdabe3151dd2.headers)
      };
    }, {
      method: λ854dce6f27fe,
      body: λc611841461e2,
      signal: λ8d246b6d3dcf,
      budget: this.responseBudget
    });
  }
}
