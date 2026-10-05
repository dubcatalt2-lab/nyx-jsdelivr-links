import λ8e59ddec3fd6 from "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/epoxy/@rebc1ad8dd3184da107fa150d!.mjs";

import { headerEntries as λ4937579bc4c8, headerRecord as λ3f4cb5499917 } from "./@r58e1303ec81b4e613dc28874!.mjs";

export default class Gu extends λ8e59ddec3fd6 {
  async request(λ8e59ddec3fd6, λe9e6078b2afe, λd4e12e017033, λf41af1825310, λ49a47c59f91c) {
    const λ8215259593e2 = await super.request(λ8e59ddec3fd6, λe9e6078b2afe, λd4e12e017033, λ3f4cb5499917(λf41af1825310), λ49a47c59f91c);
    return {
      ...λ8215259593e2,
      headers: λ4937579bc4c8(λ8215259593e2.headers)
    };
  }
  connect(λ8e59ddec3fd6, λ4937579bc4c8, λe9e6078b2afe, λd4e12e017033, λf41af1825310, λ49a47c59f91c, λ8215259593e2) {
    return super.connect(λ8e59ddec3fd6, λ4937579bc4c8, λ3f4cb5499917(λe9e6078b2afe), λd4e12e017033, λf41af1825310, λ49a47c59f91c, λ8215259593e2);
  }
}
