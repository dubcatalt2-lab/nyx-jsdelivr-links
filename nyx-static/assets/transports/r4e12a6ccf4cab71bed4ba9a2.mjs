import λ2f3667c57928 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.mjs";

import { preserveTransferErrors as λ5617cd8846df, requestWithTransferRetry as λ232dfb78caaa } from "./libcurl-response.mjs";

import { headerEntries as λ494025c7aef1 } from "./header-utils.mjs";

export default class Vu extends λ2f3667c57928 {
  async init() {
    await super.init(), λ5617cd8846df(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ2f3667c57928, λ5617cd8846df, λe43e298bce80, λ831e6e8bf7fd, λ3d32645cfa60) {
    return λ232dfb78caaa(async () => {
      const λ232dfb78caaa = await super.request(λ2f3667c57928, λ5617cd8846df, λe43e298bce80, λ831e6e8bf7fd, λ3d32645cfa60);
      return {
        ...λ232dfb78caaa,
        headers: λ494025c7aef1(λ232dfb78caaa.headers)
      };
    }, {
      method: λ5617cd8846df,
      body: λe43e298bce80,
      signal: λ3d32645cfa60,
      budget: this.responseBudget
    });
  }
}
