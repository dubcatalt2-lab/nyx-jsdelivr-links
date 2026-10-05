import λ0bd31ad5e580 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.mjs";

import { preserveTransferErrors as λ69d7523fb1b0, requestWithTransferRetry as λ8f27fe00605f } from "./@rb2b3030eeac80a1d4ae4b3fa!.mjs";

import { headerEntries as λdb8fc4391a13 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Vu extends λ0bd31ad5e580 {
  async init() {
    await super.init(), λ69d7523fb1b0(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ0bd31ad5e580, λ69d7523fb1b0, λ9002303f8cb8, λee9a014e6f65, λe9e42f2b7c85) {
    return λ8f27fe00605f(async () => {
      const λ8f27fe00605f = await super.request(λ0bd31ad5e580, λ69d7523fb1b0, λ9002303f8cb8, λee9a014e6f65, λe9e42f2b7c85);
      return {
        ...λ8f27fe00605f,
        headers: λdb8fc4391a13(λ8f27fe00605f.headers)
      };
    }, {
      method: λ69d7523fb1b0,
      body: λ9002303f8cb8,
      signal: λe9e42f2b7c85,
      budget: this.responseBudget
    });
  }
}
