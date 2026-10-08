import λ5f75f4e3b0cb from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ24a61556ea26, headerRecord as λ9ea73b6b40c9 } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ5f75f4e3b0cb {
  async request(λ5f75f4e3b0cb, λabe141f933f7, λ06f0fef342cc, λc7fd619811c2, λ1c405357fa3c) {
    const λd2c6b4269f23 = await super.request(λ5f75f4e3b0cb, λabe141f933f7, λ06f0fef342cc, λ24a61556ea26(λc7fd619811c2), λ1c405357fa3c), λe04abaf8691b = λ9ea73b6b40c9(λd2c6b4269f23.headers);
    return {
      ...λd2c6b4269f23,
      headers: λe04abaf8691b,
      rawHeaders: λe04abaf8691b
    };
  }
  connect(λ5f75f4e3b0cb, λ9ea73b6b40c9, λabe141f933f7, λ06f0fef342cc, λc7fd619811c2, λ1c405357fa3c, λd2c6b4269f23) {
    return super.connect(λ5f75f4e3b0cb, λ9ea73b6b40c9, λ24a61556ea26(λabe141f933f7), λ06f0fef342cc, λc7fd619811c2, λ1c405357fa3c, λd2c6b4269f23);
  }
}
