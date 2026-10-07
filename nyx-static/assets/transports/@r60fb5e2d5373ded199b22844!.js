import λ1572dc1db566 from "\x2e\x2f\x40\x72\x34\x65\x31\x32\x61\x36\x63\x63\x66\x34\x63\x61\x62\x37\x31\x62\x65\x64\x34\x62\x61\x39\x61\x32\x21\x2e\x6a\x73";

import { headerEntries as λ33d0914e5f95, headerRecord as λ56762444972b } from "\x2e\x2f\x40\x72\x35\x38\x65\x31\x33\x30\x33\x65\x63\x38\x31\x62\x34\x65\x36\x31\x33\x64\x63\x32\x38\x38\x37\x34\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ1572dc1db566 {
  async request(λ1572dc1db566, λ85475d24d859, λd9250397ba43, λa82b3a25c0cb, λ6ad6197f41c0) {
    const λ99d4956dd315 = await super.request(λ1572dc1db566, λ85475d24d859, λd9250397ba43, λ33d0914e5f95(λa82b3a25c0cb), λ6ad6197f41c0), λf7130691b27f = λ56762444972b(λ99d4956dd315.headers);
    return {
      ...λ99d4956dd315,
      headers: λf7130691b27f,
      rawHeaders: λf7130691b27f
    };
  }
  connect(λ1572dc1db566, λ56762444972b, λ85475d24d859, λd9250397ba43, λa82b3a25c0cb, λ6ad6197f41c0, λ99d4956dd315) {
    return super.connect(λ1572dc1db566, λ56762444972b, λ33d0914e5f95(λ85475d24d859), λd9250397ba43, λa82b3a25c0cb, λ6ad6197f41c0, λ99d4956dd315);
  }
}
