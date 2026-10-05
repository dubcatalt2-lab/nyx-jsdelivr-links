import λ614f4ea8f863 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.js";

import { preserveTransferErrors as λ9ced75269aa4, requestWithTransferRetry as λ5a29839c1674 } from "./@rb2b3030eeac80a1d4ae4b3fa!.js";

import { headerEntries as λ044632315e41 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Vu extends λ614f4ea8f863 {
  async init() {
    await super.init(), λ9ced75269aa4(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ614f4ea8f863, λ9ced75269aa4, λb448fab94760, λd37b39eb506b, λ05adbe3adcae) {
    return λ5a29839c1674(async () => {
      const λ5a29839c1674 = await super.request(λ614f4ea8f863, λ9ced75269aa4, λb448fab94760, λd37b39eb506b, λ05adbe3adcae);
      return {
        ...λ5a29839c1674,
        headers: λ044632315e41(λ5a29839c1674.headers)
      };
    }, {
      method: λ9ced75269aa4,
      body: λb448fab94760,
      signal: λ05adbe3adcae,
      budget: this.responseBudget
    });
  }
}
