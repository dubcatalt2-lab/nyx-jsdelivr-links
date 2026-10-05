import λe93784ea2732 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/libcurl/@r862d29361561633bc6d7b1e3!.mjs";

import { preserveTransferErrors as λc30e2a8ce1ae, requestWithTransferRetry as λd6ead70b6e1a } from "./@rb2b3030eeac80a1d4ae4b3fa!.mjs";

import { headerEntries as λb7de1a0827e9 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Vu extends λe93784ea2732 {
  async init() {
    await super.init(), λc30e2a8ce1ae(this.session), this.responseBudget = {
      bytes: 0
    };
  }
  request(λe93784ea2732, λc30e2a8ce1ae, λ71eb209a87de, λ02b602333adb, λ16bae83a6c4f) {
    return λd6ead70b6e1a(async () => {
      const λd6ead70b6e1a = await super.request(λe93784ea2732, λc30e2a8ce1ae, λ71eb209a87de, λ02b602333adb, λ16bae83a6c4f);
      return {
        ...λd6ead70b6e1a,
        headers: λb7de1a0827e9(λd6ead70b6e1a.headers)
      };
    }, {
      method: λc30e2a8ce1ae,
      body: λ71eb209a87de,
      signal: λ16bae83a6c4f,
      budget: this.responseBudget
    });
  }
}
