import λc2fc2124ad09 from "./@r4e12a6ccf4cab71bed4ba9a2!.mjs";

import { headerEntries as λ77342ecf8d65 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Yu extends λc2fc2124ad09 {
  async request(λc2fc2124ad09, λf302eb751a52, λad4da60ddbb9, λ9391228b90dc, λcc3f2ae8a102) {
    const λ7ec770771f8d = await super.request(λc2fc2124ad09, λf302eb751a52, λad4da60ddbb9, λ77342ecf8d65(λ9391228b90dc), λcc3f2ae8a102);
    return {
      ...λ7ec770771f8d,
      headers: λ77342ecf8d65(λ7ec770771f8d.headers)
    };
  }
  connect(λc2fc2124ad09, λf302eb751a52, λad4da60ddbb9, λ9391228b90dc, λcc3f2ae8a102, λ7ec770771f8d, λfd89f913e632) {
    return super.connect(λc2fc2124ad09, λf302eb751a52, λ77342ecf8d65(λad4da60ddbb9), λ9391228b90dc, λcc3f2ae8a102, λ7ec770771f8d, λfd89f913e632);
  }
}
