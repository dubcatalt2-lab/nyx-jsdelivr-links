import λ03a8e818e881 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ1c4322831581, headerRecord as λf6c6caf04796 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

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
