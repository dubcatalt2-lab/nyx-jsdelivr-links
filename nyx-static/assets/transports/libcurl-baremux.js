import λ492073ed9f06 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ584d4c6d2175, headerRecord as λ6925c6efe0c8 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

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
