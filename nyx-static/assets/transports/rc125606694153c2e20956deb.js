import λ4544c75ddfc6 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ1c177df90abc } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

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
