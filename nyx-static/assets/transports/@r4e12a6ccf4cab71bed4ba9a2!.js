import λ54d3dcb28f6a from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.js";

import { preserveTransferErrors as λfb0f5f7d9031, requestWithTransferRetry as λ2e46120cde3f } from "./@rb2b3030eeac80a1d4ae4b3fa!.js";

import { headerEntries as λ8802f881cca9 } from "./@r58e1303ec81b4e613dc28874!.js";

export default class Vu extends λ54d3dcb28f6a {
  async init() {
    await super.init(), λfb0f5f7d9031(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ54d3dcb28f6a, λfb0f5f7d9031, λd9abcf0f9870, λ94ebb10c01a5, λ65db9da69b6b) {
    return λ2e46120cde3f(async () => {
      const λ2e46120cde3f = await super.request(λ54d3dcb28f6a, λfb0f5f7d9031, λd9abcf0f9870, λ94ebb10c01a5, λ65db9da69b6b);
      return {
        ...λ2e46120cde3f,
        headers: λ8802f881cca9(λ2e46120cde3f.headers)
      };
    }, {
      method: λfb0f5f7d9031,
      body: λd9abcf0f9870,
      signal: λ65db9da69b6b,
      budget: this.responseBudget
    });
  }
}
