import λb320340ea13e from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.mjs";

import { preserveTransferErrors as λ872022477737, requestWithTransferRetry as λ4cf1a87dc052 } from "./@rb2b3030eeac80a1d4ae4b3fa!.mjs";

import { headerEntries as λca5dce28c2bd } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Vu extends λb320340ea13e {
  async init() {
    await super.init(), λ872022477737(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λb320340ea13e, λ872022477737, λ4c1044b81be2, λ6b5da8bd519c, λ6dde04bea3f1) {
    return λ4cf1a87dc052(async () => {
      const λ4cf1a87dc052 = await super.request(λb320340ea13e, λ872022477737, λ4c1044b81be2, λ6b5da8bd519c, λ6dde04bea3f1);
      return {
        ...λ4cf1a87dc052,
        headers: λca5dce28c2bd(λ4cf1a87dc052.headers)
      };
    }, {
      method: λ872022477737,
      body: λ4c1044b81be2,
      signal: λ6dde04bea3f1,
      budget: this.responseBudget
    });
  }
}
