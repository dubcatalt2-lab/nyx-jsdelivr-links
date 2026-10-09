import λ9011e9ce9d26 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ8112a268ffae } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
