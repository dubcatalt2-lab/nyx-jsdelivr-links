import λf1503fde5c93 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λ4fca93794ac2, headerRecord as λ36fc780e17dd } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x127b89_1 extends λf1503fde5c93 {
  async request(λf1503fde5c93, λ733f6d26a34c, λa6fc56b31da7, λ4fa9e9c19b67, λ8d6a3c3dbe15) {
    const λf752a5c06cff = await super.request(λf1503fde5c93, λ733f6d26a34c, λa6fc56b31da7, λ4fca93794ac2(λ4fa9e9c19b67), λ8d6a3c3dbe15), λ14d71ff89739 = λ36fc780e17dd(λf752a5c06cff.headers);
    return {
      ...λf752a5c06cff,
      headers: λ14d71ff89739,
      rawHeaders: λ14d71ff89739
    };
  }
  connect(λf1503fde5c93, λ36fc780e17dd, λ733f6d26a34c, λa6fc56b31da7, λ4fa9e9c19b67, λ8d6a3c3dbe15, λf752a5c06cff) {
    return super.connect(λf1503fde5c93, λ36fc780e17dd, λ4fca93794ac2(λ733f6d26a34c), λa6fc56b31da7, λ4fa9e9c19b67, λ8d6a3c3dbe15, λf752a5c06cff);
  }
}
