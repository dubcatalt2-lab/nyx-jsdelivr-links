import λ6eb5cad88110 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6c\x69\x62\x63\x75\x72\x6c\x2f\x69\x6e\x64\x65\x78\x2e\x6d\x6f\x64\x75\x6c\x65\x2d\x61\x36\x63\x38\x36\x36\x36\x38\x61\x30\x62\x39\x2e\x6a\x73";

import { preserveTransferErrors as λ71a2815ece5b, requestWithTransferRetry as λ48f05c2a9911 } from "\x2e\x2f\x40\x72\x35\x64\x37\x39\x30\x65\x64\x37\x61\x30\x31\x32\x65\x63\x31\x32\x64\x64\x61\x39\x31\x64\x61\x33\x21\x2e\x6a\x73";

import { headerEntries as λe29850e46a7b } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x7765b3_4 extends λ6eb5cad88110 {
  async init() {
    await super.init(), λ71a2815ece5b(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ6eb5cad88110, λ71a2815ece5b, λ0d28166cf66a, λ3e0039b2a8da, λ6c32f8bb13c3) {
    return λ48f05c2a9911(async () => {
      const λ48f05c2a9911 = await super.request(λ6eb5cad88110, λ71a2815ece5b, λ0d28166cf66a, λ3e0039b2a8da, λ6c32f8bb13c3);
      return {
        ...λ48f05c2a9911,
        headers: λe29850e46a7b(λ48f05c2a9911.headers)
      };
    }, {
      method: λ71a2815ece5b,
      body: λ0d28166cf66a,
      signal: λ6c32f8bb13c3,
      budget: this.responseBudget
    });
  }
}
