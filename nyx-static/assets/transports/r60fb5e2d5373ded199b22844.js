import λ03a8e818e881 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ1c4322831581, headerRecord as λf6c6caf04796 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x127b89_3 extends λ03a8e818e881 {
  async request(λ03a8e818e881, λ8f58ade7892c, λ20e93b72b922, λ592ee5035c71, λf77e78e852ae) {
    const λb5a6405ba1f6 = await super.request(λ03a8e818e881, λ8f58ade7892c, λ20e93b72b922, λ1c4322831581(λ592ee5035c71), λf77e78e852ae), λa5f0888dc208 = λf6c6caf04796(λb5a6405ba1f6.headers);
    return {
      ...λb5a6405ba1f6,
      headers: λa5f0888dc208,
      rawHeaders: λa5f0888dc208
    };
  }
  connect(λ03a8e818e881, λf6c6caf04796, λ8f58ade7892c, λ20e93b72b922, λ592ee5035c71, λf77e78e852ae, λb5a6405ba1f6) {
    return super.connect(λ03a8e818e881, λf6c6caf04796, λ1c4322831581(λ8f58ade7892c), λ20e93b72b922, λ592ee5035c71, λf77e78e852ae, λb5a6405ba1f6);
  }
}
