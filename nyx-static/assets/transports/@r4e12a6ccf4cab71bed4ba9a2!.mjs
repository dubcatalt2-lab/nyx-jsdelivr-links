import λ06b115503070 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.mjs";

import { preserveTransferErrors as λ89a2ef360a3d, requestWithTransferRetry as λ2e2b33311283 } from "./@rb2b3030eeac80a1d4ae4b3fa!.mjs";

import { headerEntries as λ6c9fefdcffe5 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Vu extends λ06b115503070 {
  async init() {
    await super.init(), λ89a2ef360a3d(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ06b115503070, λ89a2ef360a3d, λd9fd62e9ebb6, λe9e60383477b, λ235a42f10a59) {
    return λ2e2b33311283(async () => {
      const λ2e2b33311283 = await super.request(λ06b115503070, λ89a2ef360a3d, λd9fd62e9ebb6, λe9e60383477b, λ235a42f10a59);
      return {
        ...λ2e2b33311283,
        headers: λ6c9fefdcffe5(λ2e2b33311283.headers)
      };
    }, {
      method: λ89a2ef360a3d,
      body: λd9fd62e9ebb6,
      signal: λ235a42f10a59,
      budget: this.responseBudget
    });
  }
}
