import λ2dc7df08aebf from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.mjs";

import { headerEntries as λff8a9bcacc3e, headerRecord as λb106753559e9 } from "./header-utils.mjs";

export default class Gu extends λ2dc7df08aebf {
  async request(λ2dc7df08aebf, λ77d8f27eb00a, λ23860287c91c, λc0d4e9b16128, λ7d6c6e1c1ef8) {
    const λ16b75c9f69f7 = await super.request(λ2dc7df08aebf, λ77d8f27eb00a, λ23860287c91c, λb106753559e9(λc0d4e9b16128), λ7d6c6e1c1ef8);
    return {
      ...λ16b75c9f69f7,
      headers: λff8a9bcacc3e(λ16b75c9f69f7.headers)
    };
  }
  connect(λ2dc7df08aebf, λff8a9bcacc3e, λ77d8f27eb00a, λ23860287c91c, λc0d4e9b16128, λ7d6c6e1c1ef8, λ16b75c9f69f7) {
    return super.connect(λ2dc7df08aebf, λff8a9bcacc3e, λb106753559e9(λ77d8f27eb00a), λ23860287c91c, λc0d4e9b16128, λ7d6c6e1c1ef8, λ16b75c9f69f7);
  }
}
