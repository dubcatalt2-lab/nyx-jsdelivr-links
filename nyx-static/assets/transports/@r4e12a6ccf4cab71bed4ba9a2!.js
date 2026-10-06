import λ2e075ea20812 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.js";

import { preserveTransferErrors as λ79294a546db6, requestWithTransferRetry as λ424c94100e67 } from "./@rb2b3030eeac80a1d4ae4b3fa!.js";

import { headerEntries as λ1ed2a3feb8b1 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Vu extends λ2e075ea20812 {
  async init() {
    await super.init(), λ79294a546db6(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ2e075ea20812, λ79294a546db6, λ657d916f0f39, λe9f0c148731a, λb731e623f96c) {
    return λ424c94100e67(async () => {
      const λ424c94100e67 = await super.request(λ2e075ea20812, λ79294a546db6, λ657d916f0f39, λe9f0c148731a, λb731e623f96c);
      return {
        ...λ424c94100e67,
        headers: λ1ed2a3feb8b1(λ424c94100e67.headers)
      };
    }, {
      method: λ79294a546db6,
      body: λ657d916f0f39,
      signal: λb731e623f96c,
      budget: this.responseBudget
    });
  }
}
