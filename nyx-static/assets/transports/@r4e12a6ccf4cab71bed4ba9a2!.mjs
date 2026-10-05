import λ66248d36836b from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.mjs";

import { preserveTransferErrors as λ99df328fc0c6, requestWithTransferRetry as λ72f5f34bd676 } from "./@rb2b3030eeac80a1d4ae4b3fa!.mjs";

import { headerEntries as λddd4b11228e0 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Vu extends λ66248d36836b {
  async init() {
    await super.init(), λ99df328fc0c6(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ66248d36836b, λ99df328fc0c6, λd4b837c09560, λce3b1cecabc8, λ5a12162cf12a) {
    return λ72f5f34bd676(async () => {
      const λ72f5f34bd676 = await super.request(λ66248d36836b, λ99df328fc0c6, λd4b837c09560, λce3b1cecabc8, λ5a12162cf12a);
      return {
        ...λ72f5f34bd676,
        headers: λddd4b11228e0(λ72f5f34bd676.headers)
      };
    }, {
      method: λ99df328fc0c6,
      body: λd4b837c09560,
      signal: λ5a12162cf12a,
      budget: this.responseBudget
    });
  }
}
