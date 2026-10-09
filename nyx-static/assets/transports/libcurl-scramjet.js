import λ9011e9ce9d26 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ8112a268ffae } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ9011e9ce9d26 {
  async request(λ9011e9ce9d26, λ8d579ce6fa96, λbd54bea8d974, λb7afc063f324, λ5bff51d12ec9) {
    const λ8101032e06f3 = await super.request(λ9011e9ce9d26, λ8d579ce6fa96, λbd54bea8d974, λ8112a268ffae(λb7afc063f324), λ5bff51d12ec9);
    return {
      ...λ8101032e06f3,
      headers: λ8112a268ffae(λ8101032e06f3.headers)
    };
  }
  connect(λ9011e9ce9d26, λ8d579ce6fa96, λbd54bea8d974, λb7afc063f324, λ5bff51d12ec9, λ8101032e06f3, λacffd20b1f72) {
    return super.connect(λ9011e9ce9d26, λ8d579ce6fa96, λ8112a268ffae(λbd54bea8d974), λb7afc063f324, λ5bff51d12ec9, λ8101032e06f3, λacffd20b1f72);
  }
}
