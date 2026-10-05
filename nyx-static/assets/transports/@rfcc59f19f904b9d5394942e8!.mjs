import λc9a90f84db48 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/textlib/@r83a3af55fb3c748c3099c66d!.mjs";

import { preserveTransferErrors as λ5361938415ce, requestWithTransferRetry as λa02ea9502aef } from "./@re2c83302d088d9bc8eb57ad1!.mjs";

import { headerEntries as λ432da4728aa3 } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Vu extends λc9a90f84db48 {
  async init() {
    await super.init(), λ5361938415ce(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λc9a90f84db48, λ5361938415ce, λ542b9c915037, λ97c7f692c700, λ6dcfd7202a14) {
    return λa02ea9502aef(async () => {
      const λa02ea9502aef = await super.request(λc9a90f84db48, λ5361938415ce, λ542b9c915037, λ97c7f692c700, λ6dcfd7202a14);
      return {
        ...λa02ea9502aef,
        headers: λ432da4728aa3(λa02ea9502aef.headers)
      };
    }, {
      method: λ5361938415ce,
      body: λ542b9c915037,
      signal: λ6dcfd7202a14,
      budget: this.responseBudget
    });
  }
}
