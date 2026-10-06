import λce1c6d821a49 from "./@rfcc59f19f904b9d5394942e8!.js";

import { headerEntries as λ7dcbebde2353 } from "./@rcf70f1f99cfedb208df1b0a0!.js";

export default class Yu extends λce1c6d821a49 {
  async request(λce1c6d821a49, λe456535cfa54, λb67d16be7349, λ2c92761e299f, λ49ab018f9614) {
    const λ47f30fae7b7f = await super.request(λce1c6d821a49, λe456535cfa54, λb67d16be7349, λ7dcbebde2353(λ2c92761e299f), λ49ab018f9614);
    return {
      ...λ47f30fae7b7f,
      headers: λ7dcbebde2353(λ47f30fae7b7f.headers)
    };
  }
  connect(λce1c6d821a49, λe456535cfa54, λb67d16be7349, λ2c92761e299f, λ49ab018f9614, λ47f30fae7b7f, λ6a80b5dc1786) {
    return super.connect(λce1c6d821a49, λe456535cfa54, λ7dcbebde2353(λb67d16be7349), λ2c92761e299f, λ49ab018f9614, λ47f30fae7b7f, λ6a80b5dc1786);
  }
}
