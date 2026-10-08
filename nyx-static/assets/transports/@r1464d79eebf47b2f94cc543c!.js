import λ8b283fc50a6f from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λd0987e82c2d4 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ8b283fc50a6f {
  async request(λ8b283fc50a6f, λ5f30dea137d5, λ8aa7b0620bd0, λ4e9e4763f3a9, λ6a723d02ff98) {
    const λ4fd79089962d = await super.request(λ8b283fc50a6f, λ5f30dea137d5, λ8aa7b0620bd0, λd0987e82c2d4(λ4e9e4763f3a9), λ6a723d02ff98);
    return {
      ...λ4fd79089962d,
      headers: λd0987e82c2d4(λ4fd79089962d.headers)
    };
  }
  connect(λ8b283fc50a6f, λ5f30dea137d5, λ8aa7b0620bd0, λ4e9e4763f3a9, λ6a723d02ff98, λ4fd79089962d, λ700d3fab1201) {
    return super.connect(λ8b283fc50a6f, λ5f30dea137d5, λd0987e82c2d4(λ8aa7b0620bd0), λ4e9e4763f3a9, λ6a723d02ff98, λ4fd79089962d, λ700d3fab1201);
  }
}
