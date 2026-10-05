import λ169909fcf30d from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.mjs";

import { preserveTransferErrors as λfba36fad81a3, requestWithTransferRetry as λac3065d751cb } from "./@re2c83302d088d9bc8eb57ad1!.mjs";

import { headerEntries as λ5d3d1e54af3e } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Vu extends λ169909fcf30d {
  async init() {
    await super.init(), λfba36fad81a3(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ169909fcf30d, λfba36fad81a3, λ8a69d8e6373e, λ6a90bc7d6de7, λ47f10d486563) {
    return λac3065d751cb(async () => {
      const λac3065d751cb = await super.request(λ169909fcf30d, λfba36fad81a3, λ8a69d8e6373e, λ6a90bc7d6de7, λ47f10d486563);
      return {
        ...λac3065d751cb,
        headers: λ5d3d1e54af3e(λac3065d751cb.headers)
      };
    }, {
      method: λfba36fad81a3,
      body: λ8a69d8e6373e,
      signal: λ47f10d486563,
      budget: this.responseBudget
    });
  }
}
