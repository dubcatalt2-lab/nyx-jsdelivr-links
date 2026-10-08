import λ1d2393a64f78 from "\x2e\x2f\x40\x72\x66\x63\x63\x35\x39\x66\x31\x39\x66\x39\x30\x34\x62\x39\x64\x35\x33\x39\x34\x39\x34\x32\x65\x38\x21\x2e\x6a\x73";

import { headerEntries as λde4213734e9c } from "\x2e\x2f\x40\x72\x63\x66\x37\x30\x66\x31\x66\x39\x39\x63\x66\x65\x64\x62\x32\x30\x38\x64\x66\x31\x62\x30\x61\x30\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ1d2393a64f78 {
  async request(λ1d2393a64f78, λ39364edca209, λ36d832393806, λbc43778f074d, λc03c82317c50) {
    const λ3a11c8680851 = await super.request(λ1d2393a64f78, λ39364edca209, λ36d832393806, λde4213734e9c(λbc43778f074d), λc03c82317c50);
    return {
      ...λ3a11c8680851,
      headers: λde4213734e9c(λ3a11c8680851.headers)
    };
  }
  connect(λ1d2393a64f78, λ39364edca209, λ36d832393806, λbc43778f074d, λc03c82317c50, λ3a11c8680851, λb662be250d50) {
    return super.connect(λ1d2393a64f78, λ39364edca209, λde4213734e9c(λ36d832393806), λbc43778f074d, λc03c82317c50, λ3a11c8680851, λb662be250d50);
  }
}
