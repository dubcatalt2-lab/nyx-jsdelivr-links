import λ40b04c017ae8 from "\x2e\x2f\x6c\x69\x62\x63\x75\x72\x6c\x2d\x63\x6c\x69\x65\x6e\x74\x2e\x6a\x73";

import { headerEntries as λ1ad3d9fabf08 } from "\x2e\x2f\x68\x65\x61\x64\x65\x72\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73";

export default class _0x3c892e_2 extends λ40b04c017ae8 {
  async request(λ40b04c017ae8, λ607caae16cde, λ5e74495a3d87, λeeef3ad66dc0, λb601bd467c00) {
    const λ599805c31513 = await super.request(λ40b04c017ae8, λ607caae16cde, λ5e74495a3d87, λ1ad3d9fabf08(λeeef3ad66dc0), λb601bd467c00);
    return {
      ...λ599805c31513,
      headers: λ1ad3d9fabf08(λ599805c31513.headers)
    };
  }
  connect(λ40b04c017ae8, λ607caae16cde, λ5e74495a3d87, λeeef3ad66dc0, λb601bd467c00, λ599805c31513, λe99046bd63d3) {
    return super.connect(λ40b04c017ae8, λ607caae16cde, λ1ad3d9fabf08(λ5e74495a3d87), λeeef3ad66dc0, λb601bd467c00, λ599805c31513, λe99046bd63d3);
  }
}
