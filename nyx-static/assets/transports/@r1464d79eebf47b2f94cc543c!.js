import λb08171f75a03 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λf92c16a85e5d } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λb08171f75a03 {
  async request(λb08171f75a03, λ43300c253831, λ3870aa07f5ce, λd29ac1bda105, λ7f8c3d0be8e8) {
    const λcb31de3781dc = await super.request(λb08171f75a03, λ43300c253831, λ3870aa07f5ce, λf92c16a85e5d(λd29ac1bda105), λ7f8c3d0be8e8);
    return {
      ...λcb31de3781dc,
      headers: λf92c16a85e5d(λcb31de3781dc.headers)
    };
  }
  connect(λb08171f75a03, λ43300c253831, λ3870aa07f5ce, λd29ac1bda105, λ7f8c3d0be8e8, λcb31de3781dc, λ30d9241aa03d) {
    return super.connect(λb08171f75a03, λ43300c253831, λf92c16a85e5d(λ3870aa07f5ce), λd29ac1bda105, λ7f8c3d0be8e8, λcb31de3781dc, λ30d9241aa03d);
  }
}
