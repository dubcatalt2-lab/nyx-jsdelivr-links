import λb5896abee3a3 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λf717a04c9270, headerRecord as λf2ab4efe0a24 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x127b89_3 extends λb5896abee3a3 {
  async request(λb5896abee3a3, λc6a09f1eff62, λ3ad7c905627e, λ509e08345ae6, λe314ec2fe570) {
    const λ666ab92db8b0 = await super.request(λb5896abee3a3, λc6a09f1eff62, λ3ad7c905627e, λf717a04c9270(λ509e08345ae6), λe314ec2fe570), λf7de9acd1cd3 = λf2ab4efe0a24(λ666ab92db8b0.headers);
    return {
      ...λ666ab92db8b0,
      headers: λf7de9acd1cd3,
      rawHeaders: λf7de9acd1cd3
    };
  }
  connect(λb5896abee3a3, λf2ab4efe0a24, λc6a09f1eff62, λ3ad7c905627e, λ509e08345ae6, λe314ec2fe570, λ666ab92db8b0) {
    return super.connect(λb5896abee3a3, λf2ab4efe0a24, λf717a04c9270(λc6a09f1eff62), λ3ad7c905627e, λ509e08345ae6, λe314ec2fe570, λ666ab92db8b0);
  }
}
