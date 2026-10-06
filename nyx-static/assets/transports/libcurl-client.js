import λe3520678f295 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.module-a6c86668a0b9.js";

import { preserveTransferErrors as λ267f41414220, requestWithTransferRetry as λeaa777abc2fb } from "./@r5d790ed7a012ec12dda91da3!.js";

import { headerEntries as λ617733fc4b3c } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Vu extends λe3520678f295 {
  async init() {
    await super.init(), λ267f41414220(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λe3520678f295, λ267f41414220, λ322ba8db2ad5, λ0cbbd21f6a05, λ8e5363f04c64) {
    return λeaa777abc2fb(async () => {
      const λeaa777abc2fb = await super.request(λe3520678f295, λ267f41414220, λ322ba8db2ad5, λ0cbbd21f6a05, λ8e5363f04c64);
      return {
        ...λeaa777abc2fb,
        headers: λ617733fc4b3c(λeaa777abc2fb.headers)
      };
    }, {
      method: λ267f41414220,
      body: λ322ba8db2ad5,
      signal: λ8e5363f04c64,
      budget: this.responseBudget
    });
  }
}
