import λ3ae77192bf34 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/index.module-a6c86668a0b9.js";

import { preserveTransferErrors as λ0834becbd87c, requestWithTransferRetry as λa1f585f43e59 } from "./@r5d790ed7a012ec12dda91da3!.js";

import { headerEntries as λea423bae9cbf } from "./@r4a97a0ecdaad1f26f69f6ac6!.js";

export default class Vu extends λ3ae77192bf34 {
  async init() {
    await super.init(), λ0834becbd87c(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ3ae77192bf34, λ0834becbd87c, λ6c7e79690404, λ2aada76e7e4b, λb3d4d14aa6fd) {
    return λa1f585f43e59(async () => {
      const λa1f585f43e59 = await super.request(λ3ae77192bf34, λ0834becbd87c, λ6c7e79690404, λ2aada76e7e4b, λb3d4d14aa6fd);
      return {
        ...λa1f585f43e59,
        headers: λea423bae9cbf(λa1f585f43e59.headers)
      };
    }, {
      method: λ0834becbd87c,
      body: λ6c7e79690404,
      signal: λb3d4d14aa6fd,
      budget: this.responseBudget
    });
  }
}
