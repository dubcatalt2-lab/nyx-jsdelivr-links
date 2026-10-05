import λ1c7660baeae1 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.mjs";

import { preserveTransferErrors as λ30da362667e7, requestWithTransferRetry as λ4df997d3f874 } from "./@rb2b3030eeac80a1d4ae4b3fa!.mjs";

import { headerEntries as λ6516501be7b1 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Vu extends λ1c7660baeae1 {
  async init() {
    await super.init(), λ30da362667e7(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λ1c7660baeae1, λ30da362667e7, λ6895a7f138c6, λf21e7fa854f1, λ5ca43c7cacd4) {
    return λ4df997d3f874(async () => {
      const λ4df997d3f874 = await super.request(λ1c7660baeae1, λ30da362667e7, λ6895a7f138c6, λf21e7fa854f1, λ5ca43c7cacd4);
      return {
        ...λ4df997d3f874,
        headers: λ6516501be7b1(λ4df997d3f874.headers)
      };
    }, {
      method: λ30da362667e7,
      body: λ6895a7f138c6,
      signal: λ5ca43c7cacd4,
      budget: this.responseBudget
    });
  }
}
