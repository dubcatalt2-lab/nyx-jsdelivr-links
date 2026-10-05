import λ8cdd19d49c77 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.mjs";

import { headerEntries as λ31b09fd990a7, headerRecord as λef8fbfc8d6c1 } from "./header-utils.mjs";

export default class Gu extends λ8cdd19d49c77 {
  async request(λ8cdd19d49c77, λfc17a328252f, λf6c9c9c860b7, λ4d065d42eba2, λ5ca540caaa08) {
    const λ15c46711e102 = await super.request(λ8cdd19d49c77, λfc17a328252f, λf6c9c9c860b7, λef8fbfc8d6c1(λ4d065d42eba2), λ5ca540caaa08);
    return {
      ...λ15c46711e102,
      headers: λ31b09fd990a7(λ15c46711e102.headers)
    };
  }
  connect(λ8cdd19d49c77, λ31b09fd990a7, λfc17a328252f, λf6c9c9c860b7, λ4d065d42eba2, λ5ca540caaa08, λ15c46711e102) {
    return super.connect(λ8cdd19d49c77, λ31b09fd990a7, λef8fbfc8d6c1(λfc17a328252f), λf6c9c9c860b7, λ4d065d42eba2, λ5ca540caaa08, λ15c46711e102);
  }
}
