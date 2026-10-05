import λ6fcfbc6a9f51 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.mjs";

import { preserveTransferErrors as λ49c5a9a82807, requestWithTransferRetry as λ96ffc7333193 } from "./libcurl-response.mjs";

import { headerEntries as λ55d1c3313ef7 } from "./header-utils.mjs";

export default class Vu extends λ6fcfbc6a9f51 {
  async init() {
    await super.init(), λ49c5a9a82807(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ6fcfbc6a9f51, λ49c5a9a82807, λafb34588f050, λa2c54e46ac76, λ4ecd442b549f) {
    return λ96ffc7333193(async () => {
      const λ96ffc7333193 = await super.request(λ6fcfbc6a9f51, λ49c5a9a82807, λafb34588f050, λa2c54e46ac76, λ4ecd442b549f);
      return {
        ...λ96ffc7333193,
        headers: λ55d1c3313ef7(λ96ffc7333193.headers)
      };
    }, {
      method: λ49c5a9a82807,
      body: λafb34588f050,
      signal: λ4ecd442b549f,
      budget: this.responseBudget
    });
  }
}
