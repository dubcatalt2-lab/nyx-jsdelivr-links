import λ492073ed9f06 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ584d4c6d2175, headerRecord as λ6925c6efe0c8 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x127b89_3 extends λ492073ed9f06 {
  async request(λ492073ed9f06, λ19fb98ea25b9, λ9bc266e9332e, λb5973b654507, λc058a102a7a3) {
    const λabb1f13d2d07 = await super.request(λ492073ed9f06, λ19fb98ea25b9, λ9bc266e9332e, λ584d4c6d2175(λb5973b654507), λc058a102a7a3), λf0708a081129 = λ6925c6efe0c8(λabb1f13d2d07.headers);
    return {
      ...λabb1f13d2d07,
      headers: λf0708a081129,
      rawHeaders: λf0708a081129
    };
  }
  connect(λ492073ed9f06, λ6925c6efe0c8, λ19fb98ea25b9, λ9bc266e9332e, λb5973b654507, λc058a102a7a3, λabb1f13d2d07) {
    return super.connect(λ492073ed9f06, λ6925c6efe0c8, λ584d4c6d2175(λ19fb98ea25b9), λ9bc266e9332e, λb5973b654507, λc058a102a7a3, λabb1f13d2d07);
  }
}
