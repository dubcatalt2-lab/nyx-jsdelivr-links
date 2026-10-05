import λab8498e306c2 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.mjs";

import { preserveTransferErrors as λf1da70b6917a, requestWithTransferRetry as λ4e9d81c72199 } from "./libcurl-response.mjs";

import { headerEntries as λ79be6ec84aca } from "./header-utils.mjs";

export default class Vu extends λab8498e306c2 {
  async init() {
    await super.init(), λf1da70b6917a(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λab8498e306c2, λf1da70b6917a, λ0ed5842707c1, λe147e46f47f4, λa6a6643253ba) {
    return λ4e9d81c72199(async () => {
      const λ4e9d81c72199 = await super.request(λab8498e306c2, λf1da70b6917a, λ0ed5842707c1, λe147e46f47f4, λa6a6643253ba);
      return {
        ...λ4e9d81c72199,
        headers: λ79be6ec84aca(λ4e9d81c72199.headers)
      };
    }, {
      method: λf1da70b6917a,
      body: λ0ed5842707c1,
      signal: λa6a6643253ba,
      budget: this.responseBudget
    });
  }
}
