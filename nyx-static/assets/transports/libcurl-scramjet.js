import λ4544c75ddfc6 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ1c177df90abc } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ4544c75ddfc6 {
  async request(λ4544c75ddfc6, λ81391ebea0e4, λ1807d7d85a18, λd80433da07c2, λd661da03b4b0) {
    const λ49fdadff0a2c = await super.request(λ4544c75ddfc6, λ81391ebea0e4, λ1807d7d85a18, λ1c177df90abc(λd80433da07c2), λd661da03b4b0);
    return {
      ...λ49fdadff0a2c,
      headers: λ1c177df90abc(λ49fdadff0a2c.headers)
    };
  }
  connect(λ4544c75ddfc6, λ81391ebea0e4, λ1807d7d85a18, λd80433da07c2, λd661da03b4b0, λ49fdadff0a2c, λ0c50050bd62b) {
    return super.connect(λ4544c75ddfc6, λ81391ebea0e4, λ1c177df90abc(λ1807d7d85a18), λd80433da07c2, λd661da03b4b0, λ49fdadff0a2c, λ0c50050bd62b);
  }
}
