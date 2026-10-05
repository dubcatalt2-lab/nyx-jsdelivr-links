import λe4f693b98baa from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.module-a6c86668a0b9.js";

import { preserveTransferErrors as λaba2cec8443b, requestWithTransferRetry as λc2ad069008be } from "./@r5d790ed7a012ec12dda91da3!.js";

import { headerEntries as λ5962e7a58684 } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Vu extends λe4f693b98baa {
  async init() {
    await super.init(), λaba2cec8443b(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λe4f693b98baa, λaba2cec8443b, λ5cbd81f94a6d, λ6516f66f087a, λb9ea333f1a29) {
    return λc2ad069008be(async () => {
      const λc2ad069008be = await super.request(λe4f693b98baa, λaba2cec8443b, λ5cbd81f94a6d, λ6516f66f087a, λb9ea333f1a29);
      return {
        ...λc2ad069008be,
        headers: λ5962e7a58684(λc2ad069008be.headers)
      };
    }, {
      method: λaba2cec8443b,
      body: λ5cbd81f94a6d,
      signal: λb9ea333f1a29,
      budget: this.responseBudget
    });
  }
}
