import λ40b04c017ae8 from "\x2e\x2f\x40\x72\x38\x39\x32\x63\x39\x61\x65\x66\x39\x65\x36\x35\x61\x66\x61\x35\x33\x62\x33\x61\x35\x65\x37\x37\x21\x2e\x6a\x73";

import { headerEntries as λ1ad3d9fabf08 } from "\x2e\x2f\x40\x72\x34\x61\x39\x37\x61\x30\x65\x63\x64\x61\x61\x64\x31\x66\x32\x36\x66\x36\x39\x66\x36\x61\x63\x36\x21\x2e\x6a\x73";

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
