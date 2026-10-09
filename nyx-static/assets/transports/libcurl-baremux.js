import λ41a4c9803907 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ97751db37782, headerRecord as λc68168ffe4d9 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x127b89_3 extends λ41a4c9803907 {
  async request(λ41a4c9803907, λ62f02fa88074, λ0f5f7dbf1505, λf43749bc7e78, λ62859f503701) {
    const λbc19e483b31f = await super.request(λ41a4c9803907, λ62f02fa88074, λ0f5f7dbf1505, λ97751db37782(λf43749bc7e78), λ62859f503701), λ4068b1cc9f6a = λc68168ffe4d9(λbc19e483b31f.headers);
    return {
      ...λbc19e483b31f,
      headers: λ4068b1cc9f6a,
      rawHeaders: λ4068b1cc9f6a
    };
  }
  connect(λ41a4c9803907, λc68168ffe4d9, λ62f02fa88074, λ0f5f7dbf1505, λf43749bc7e78, λ62859f503701, λbc19e483b31f) {
    return super.connect(λ41a4c9803907, λc68168ffe4d9, λ97751db37782(λ62f02fa88074), λ0f5f7dbf1505, λf43749bc7e78, λ62859f503701, λbc19e483b31f);
  }
}
