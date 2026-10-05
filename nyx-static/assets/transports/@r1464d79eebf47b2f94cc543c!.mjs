import λ637b3051649f from "./@rfcc59f19f904b9d5394942e8!.mjs";

import { headerEntries as λ90fdc2d63bdf } from "./@rcf70f1f99cfedb208df1b0a0!.mjs";

export default class Yu extends λ637b3051649f {
  async request(λ637b3051649f, λf90c29046e4e, λe66f1bb88296, λf1612029daa2, λd8d946e5f445) {
    const λ0f18096794c3 = await super.request(λ637b3051649f, λf90c29046e4e, λe66f1bb88296, λ90fdc2d63bdf(λf1612029daa2), λd8d946e5f445);
    return {
      ...λ0f18096794c3,
      headers: λ90fdc2d63bdf(λ0f18096794c3.headers)
    };
  }
  connect(λ637b3051649f, λf90c29046e4e, λe66f1bb88296, λf1612029daa2, λd8d946e5f445, λ0f18096794c3, λ5ee916104dd4) {
    return super.connect(λ637b3051649f, λf90c29046e4e, λ90fdc2d63bdf(λe66f1bb88296), λf1612029daa2, λd8d946e5f445, λ0f18096794c3, λ5ee916104dd4);
  }
}
