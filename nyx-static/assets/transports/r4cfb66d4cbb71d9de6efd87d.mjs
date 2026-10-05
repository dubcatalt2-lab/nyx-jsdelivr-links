import λ059f9343528b from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/index.mjs";

import { headerEntries as λ06d54b31fe27, headerRecord as λ6721c14c33ec } from "./header-utils.mjs";

export default class Gu extends λ059f9343528b {
  async request(λ059f9343528b, λe7eeb718745b, λc1176a0ffac3, λ704c84b72a0e, λ1031b9e19b8c) {
    const λfed4922db068 = await super.request(λ059f9343528b, λe7eeb718745b, λc1176a0ffac3, λ6721c14c33ec(λ704c84b72a0e), λ1031b9e19b8c);
    return {
      ...λfed4922db068,
      headers: λ06d54b31fe27(λfed4922db068.headers)
    };
  }
  connect(λ059f9343528b, λ06d54b31fe27, λe7eeb718745b, λc1176a0ffac3, λ704c84b72a0e, λ1031b9e19b8c, λfed4922db068) {
    return super.connect(λ059f9343528b, λ06d54b31fe27, λ6721c14c33ec(λe7eeb718745b), λc1176a0ffac3, λ704c84b72a0e, λ1031b9e19b8c, λfed4922db068);
  }
}
