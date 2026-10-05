import λ0dbc644fb95a from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/atlas/@ra0c56fac425aa0db70d01a58!.mjs";

import { headerEntries as λ60e437e86ccb, headerRecord as λ7579fbdd5e7c } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Gu extends λ0dbc644fb95a {
  async request(λ0dbc644fb95a, λb740d1a1674c, λ49d07e51747f, λ8c2b8b1700e6, λab2695861018) {
    const λcd8d49c75105 = await super.request(λ0dbc644fb95a, λb740d1a1674c, λ49d07e51747f, λ7579fbdd5e7c(λ8c2b8b1700e6), λab2695861018);
    return {
      ...λcd8d49c75105,
      headers: λ60e437e86ccb(λcd8d49c75105.headers)
    };
  }
  connect(λ0dbc644fb95a, λ60e437e86ccb, λb740d1a1674c, λ49d07e51747f, λ8c2b8b1700e6, λab2695861018, λcd8d49c75105) {
    return super.connect(λ0dbc644fb95a, λ60e437e86ccb, λ7579fbdd5e7c(λb740d1a1674c), λ49d07e51747f, λ8c2b8b1700e6, λab2695861018, λcd8d49c75105);
  }
}
