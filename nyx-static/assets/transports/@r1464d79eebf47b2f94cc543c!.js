import λf23ffc95db33 from "./@rfcc59f19f904b9d5394942e8!.js";

import { headerEntries as λ65e034a42cb0 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Yu extends λf23ffc95db33 {
  async request(λf23ffc95db33, λeb64abb6cf6f, λ53b4b3ac4bbd, λf5997055e193, λe01026a9ebb7) {
    const λ75314b2d6df3 = await super.request(λf23ffc95db33, λeb64abb6cf6f, λ53b4b3ac4bbd, λ65e034a42cb0(λf5997055e193), λe01026a9ebb7);
    return {
      ...λ75314b2d6df3,
      headers: λ65e034a42cb0(λ75314b2d6df3.headers)
    };
  }
  connect(λf23ffc95db33, λeb64abb6cf6f, λ53b4b3ac4bbd, λf5997055e193, λe01026a9ebb7, λ75314b2d6df3, λ5fdd6247a264) {
    return super.connect(λf23ffc95db33, λeb64abb6cf6f, λ65e034a42cb0(λ53b4b3ac4bbd), λf5997055e193, λe01026a9ebb7, λ75314b2d6df3, λ5fdd6247a264);
  }
}
