import λd658d713f888 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x40\x72\x38\x36\x32\x64\x32\x39\x33\x36\x31\x35\x36\x31\x36\x33\x33\x62\x63\x36\x64\x37\x62\x31\x65\x33\x21\x2e\x6a\x73";

import { preserveTransferErrors as λ037c4d3c7411, requestWithTransferRetry as λada4e35f8ca3 } from "\x2e\x2f\x40\x72\x62\x32\x62\x33\x30\x33\x30\x65\x65\x61\x63\x38\x30\x61\x31\x64\x34\x61\x65\x34\x62\x33\x66\x61\x21\x2e\x6a\x73";

import { headerEntries as λf5cc6b36f677 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λd658d713f888 {
  async init() {
    await super.init(), λ037c4d3c7411(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λd658d713f888, λ037c4d3c7411, λ9b371adf4fc0, λa07a1f617f71, λ42a24e291a98) {
    return λada4e35f8ca3(async () => {
      const λada4e35f8ca3 = await super.request(λd658d713f888, λ037c4d3c7411, λ9b371adf4fc0, λa07a1f617f71, λ42a24e291a98);
      return {
        ...λada4e35f8ca3,
        headers: λf5cc6b36f677(λada4e35f8ca3.headers)
      };
    }, {
      method: λ037c4d3c7411,
      body: λ9b371adf4fc0,
      signal: λ42a24e291a98,
      budget: this.responseBudget
    });
  }
}
