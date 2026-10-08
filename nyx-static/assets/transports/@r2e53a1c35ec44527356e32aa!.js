import λ8092564789ac from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λbd0c98b3a0be, headerRecord as λa584e3dc8608 } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ8092564789ac {
  async request(λ8092564789ac, λa74ce54da759, λa6783216b416, λ4eb31b228c5a, λb1c8f02359aa) {
    const λ9f35695c3332 = await super.request(λ8092564789ac, λa74ce54da759, λa6783216b416, λbd0c98b3a0be(λ4eb31b228c5a), λb1c8f02359aa), λ25466240d11f = λa584e3dc8608(λ9f35695c3332.headers);
    return {
      ...λ9f35695c3332,
      headers: λ25466240d11f,
      rawHeaders: λ25466240d11f
    };
  }
  connect(λ8092564789ac, λa584e3dc8608, λa74ce54da759, λa6783216b416, λ4eb31b228c5a, λb1c8f02359aa, λ9f35695c3332) {
    return super.connect(λ8092564789ac, λa584e3dc8608, λbd0c98b3a0be(λa74ce54da759), λa6783216b416, λ4eb31b228c5a, λb1c8f02359aa, λ9f35695c3332);
  }
}
